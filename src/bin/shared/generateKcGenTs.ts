import { assert } from "tsafe/assert";
import type { BuildContext } from "./buildContext";
import { getThemeSrcDirPath } from "./getThemeSrcDirPath";
import * as fs from "fs/promises";
import { join as pathJoin } from "path";
import { existsAsync } from "../tools/fs.existsAsync";

export type BuildContextLike = {
    projectDirPath: string;
    themeNames: string[];
    environmentVariables: { name: string; default: string }[];
};

assert<BuildContext extends BuildContextLike ? true : false>();

export async function generateKcGenTs(params: {
    buildContext: BuildContextLike;
}): Promise<void> {
    const { buildContext } = params;

    const { themeSrcDirPath } = getThemeSrcDirPath({
        projectDirPath: buildContext.projectDirPath
    });

    const filePath = pathJoin(themeSrcDirPath, "kc.gen.ts");

    const currentContent = (await existsAsync(filePath))
        ? await fs.readFile(filePath)
        : undefined;

    const newContent = Buffer.from(
        [
            `/* prettier-ignore-start */`,
            ``,
            `/* eslint-disable */`,
            ``,
            `// @ts-nocheck`,
            ``,
            `// noinspection JSUnusedGlobalSymbols`,
            ``,
            `// This file is auto-generated by Keycloakify`,
            ``,
            `export type ThemeName = ${buildContext.themeNames.map(themeName => `"${themeName}"`).join(" | ")};`,
            ``,
            `export const themeNames: ThemeName[] = [${buildContext.themeNames.map(themeName => `"${themeName}"`).join(", ")}];`,
            ``,
            `export type KcEnvName = ${buildContext.environmentVariables.length === 0 ? "never" : buildContext.environmentVariables.map(({ name }) => `"${name}"`).join(" | ")};`,
            ``,
            `export const kcEnvNames: KcEnvName[] = [${buildContext.environmentVariables.map(({ name }) => `"${name}"`).join(", ")}];`,
            ``,
            `export const kcEnvDefaults: Record<KcEnvName, string> = ${JSON.stringify(
                Object.fromEntries(
                    buildContext.environmentVariables.map(
                        ({ name, default: defaultValue }) => [name, defaultValue]
                    )
                ),
                null,
                2
            )};`,
            ``,
            `/* prettier-ignore-end */`,
            ``
        ].join("\n"),
        "utf8"
    );

    if (currentContent !== undefined && currentContent.equals(newContent)) {
        return;
    }

    await fs.writeFile(filePath, newContent);
}
