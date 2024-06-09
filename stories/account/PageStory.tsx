import React from "react";
import type { DeepPartial } from "../../dist/tools/DeepPartial";
import type { KcContext } from "./KcContext";
import { createGetKcContextMock } from "../../dist/account/KcContext";
import type { KcContextExtension, KcContextExtensionPerPage } from "./KcContext";
import KcApp from "./KcApp";
import { themeNames, kcEnvDefaults } from "../kc.gen";

const kcContextExtension: KcContextExtension = {
    themeName: themeNames[0],
    properties: {
        ...kcEnvDefaults
    }
};
const kcContextExtensionPerPage: KcContextExtensionPerPage = {};

export const { getKcContextMock } = createGetKcContextMock({
    kcContextExtension,
    kcContextExtensionPerPage,
    overrides: {},
    overridesPerPage: {}
});

export function createPageStory<PageId extends KcContext["pageId"]>(params: { pageId: PageId }) {
    const { pageId } = params;

    function PageStory(props: { kcContext?: DeepPartial<Extract<KcContext, { pageId: PageId }>> }) {
        const { kcContext: overrides } = props;

        const kcContextMock = getKcContextMock({
            pageId,
            overrides
        });

        return (
            <React.StrictMode>
                <KcApp kcContext={kcContextMock} />
            </React.StrictMode>
        );
    }

    return { PageStory };
}
