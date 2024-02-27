"use strict";(self.webpackChunkkeycloakify=self.webpackChunkkeycloakify||[]).push([[8470],{"./dist/login/Template.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>Template});__webpack_require__("./node_modules/core-js/modules/es.object.assign.js"),__webpack_require__("./node_modules/core-js/modules/es.array.map.js");var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/react/jsx-runtime.js"),_tools_assert__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./dist/tools/assert.js"),_tools_clsx__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./dist/tools/clsx.js"),_lib_usePrepareTemplate__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./dist/lib/usePrepareTemplate.js"),_login_lib_useGetClassName__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./dist/login/lib/useGetClassName.js");function Template(props){var _props$displayInfo=props.displayInfo,displayInfo=void 0!==_props$displayInfo&&_props$displayInfo,_props$displayMessage=props.displayMessage,displayMessage=void 0===_props$displayMessage||_props$displayMessage,_props$displayRequire=props.displayRequiredFields,displayRequiredFields=void 0!==_props$displayRequire&&_props$displayRequire,_props$displayWide=props.displayWide,displayWide=void 0!==_props$displayWide&&_props$displayWide,_props$showAnotherWay=props.showAnotherWayIfPresent,showAnotherWayIfPresent=void 0===_props$showAnotherWay||_props$showAnotherWay,headerNode=props.headerNode,_props$showUsernameNo=props.showUsernameNode,showUsernameNode=void 0===_props$showUsernameNo?null:_props$showUsernameNo,_props$infoNode=props.infoNode,infoNode=void 0===_props$infoNode?null:_props$infoNode,kcContext=props.kcContext,i18n=props.i18n,doUseDefaultCss=props.doUseDefaultCss,classes=props.classes,children=props.children,getClassName=(0,_login_lib_useGetClassName__WEBPACK_IMPORTED_MODULE_6__.v)({doUseDefaultCss,classes}).getClassName,msg=i18n.msg,changeLocale=i18n.changeLocale,labelBySupportedLanguageTag=i18n.labelBySupportedLanguageTag,currentLanguageTag=i18n.currentLanguageTag,realm=kcContext.realm,locale=kcContext.locale,auth=kcContext.auth,url=kcContext.url,message=kcContext.message,isAppInitiatedAction=kcContext.isAppInitiatedAction;return(0,_lib_usePrepareTemplate__WEBPACK_IMPORTED_MODULE_5__.M)({doFetchDefaultThemeResources:doUseDefaultCss,styles:[url.resourcesCommonPath+"/node_modules/patternfly/dist/css/patternfly.min.css",url.resourcesCommonPath+"/node_modules/patternfly/dist/css/patternfly-additions.min.css",url.resourcesCommonPath+"/lib/zocial/zocial.css",url.resourcesPath+"/css/login.css"],htmlClassName:getClassName("kcHtmlClass"),bodyClassName:getClassName("kcBodyClass")}).isReady?(document.title=i18n.msgStr("loginTitle",kcContext.realm.displayName),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div",Object.assign({className:getClassName("kcLoginClass")},{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div",Object.assign({id:"kc-header",className:getClassName("kcHeaderClass")},{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div",Object.assign({id:"kc-header-wrapper",className:getClassName("kcHeaderWrapperClass")},{children:msg("loginTitleHtml",realm.displayNameHtml)}))})),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div",Object.assign({className:(0,_tools_clsx__WEBPACK_IMPORTED_MODULE_4__.W)(getClassName("kcFormCardClass"),displayWide&&getClassName("kcFormCardAccountClass"))},{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("header",Object.assign({className:getClassName("kcFormHeaderClass")},{children:[realm.internationalizationEnabled&&((0,_tools_assert__WEBPACK_IMPORTED_MODULE_3__.h)(void 0!==locale),!0)&&locale.supported.length>1&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div",Object.assign({id:"kc-locale"},{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div",Object.assign({id:"kc-locale-wrapper",className:getClassName("kcLocaleWrapperClass")},{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div",Object.assign({className:"kc-dropdown",id:"kc-locale-dropdown"},{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("a",Object.assign({href:"#",id:"kc-current-locale-link"},{children:labelBySupportedLanguageTag[currentLanguageTag]})),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("ul",{children:locale.supported.map((function(_ref){var languageTag=_ref.languageTag;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("li",Object.assign({className:"kc-dropdown-item"},{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("a",Object.assign({href:"#",onClick:function onClick(){return changeLocale(languageTag)}},{children:labelBySupportedLanguageTag[languageTag]}))}),languageTag)}))})]}))}))})),void 0===auth||!auth.showUsername||auth.showResetCredentials?displayRequiredFields?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div",Object.assign({className:getClassName("kcContentWrapperClass")},{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div",Object.assign({className:(0,_tools_clsx__WEBPACK_IMPORTED_MODULE_4__.W)(getClassName("kcLabelWrapperClass"),"subtitle")},{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("span",Object.assign({className:"subtitle"},{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("span",Object.assign({className:"required"},{children:"*"})),msg("requiredFields")]}))})),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div",Object.assign({className:"col-md-10"},{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("h1",Object.assign({id:"kc-page-title"},{children:headerNode}))}))]})):(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("h1",Object.assign({id:"kc-page-title"},{children:headerNode})):displayRequiredFields?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div",Object.assign({className:getClassName("kcContentWrapperClass")},{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div",Object.assign({className:(0,_tools_clsx__WEBPACK_IMPORTED_MODULE_4__.W)(getClassName("kcLabelWrapperClass"),"subtitle")},{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("span",Object.assign({className:"subtitle"},{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("span",Object.assign({className:"required"},{children:"*"}))," ",msg("requiredFields")]}))})),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div",Object.assign({className:"col-md-10"},{children:[showUsernameNode,(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div",Object.assign({className:getClassName("kcFormGroupClass")},{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div",Object.assign({id:"kc-username"},{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("label",Object.assign({id:"kc-attempted-username"},{children:null==auth?void 0:auth.attemptedUsername})),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("a",Object.assign({id:"reset-login",href:url.loginRestartFlowUrl},{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div",Object.assign({className:"kc-login-tooltip"},{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("i",{className:getClassName("kcResetFlowIcon")}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("span",Object.assign({className:"kc-tooltip-text"},{children:msg("restartLoginTooltip")}))]}))}))]}))}))]}))]})):(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.Fragment,{children:[showUsernameNode,(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div",Object.assign({className:getClassName("kcFormGroupClass")},{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div",Object.assign({id:"kc-username"},{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("label",Object.assign({id:"kc-attempted-username"},{children:null==auth?void 0:auth.attemptedUsername})),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("a",Object.assign({id:"reset-login",href:url.loginRestartFlowUrl},{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div",Object.assign({className:"kc-login-tooltip"},{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("i",{className:getClassName("kcResetFlowIcon")}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("span",Object.assign({className:"kc-tooltip-text"},{children:msg("restartLoginTooltip")}))]}))}))]}))}))]})]})),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div",Object.assign({id:"kc-content"},{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div",Object.assign({id:"kc-content-wrapper"},{children:[displayMessage&&void 0!==message&&("warning"!==message.type||!isAppInitiatedAction)&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div",Object.assign({className:(0,_tools_clsx__WEBPACK_IMPORTED_MODULE_4__.W)("alert","alert-"+message.type)},{children:["success"===message.type&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("span",{className:getClassName("kcFeedbackSuccessIcon")}),"warning"===message.type&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("span",{className:getClassName("kcFeedbackWarningIcon")}),"error"===message.type&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("span",{className:getClassName("kcFeedbackErrorIcon")}),"info"===message.type&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("span",{className:getClassName("kcFeedbackInfoIcon")}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("span",{className:"kc-feedback-text",dangerouslySetInnerHTML:{__html:message.summary}})]})),children,void 0!==auth&&auth.showTryAnotherWayLink&&showAnotherWayIfPresent&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("form",Object.assign({id:"kc-select-try-another-way-form",action:url.loginAction,method:"post",className:(0,_tools_clsx__WEBPACK_IMPORTED_MODULE_4__.W)(displayWide&&getClassName("kcContentWrapperClass"))},{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div",Object.assign({className:(0,_tools_clsx__WEBPACK_IMPORTED_MODULE_4__.W)(displayWide&&[getClassName("kcFormSocialAccountContentClass"),getClassName("kcFormSocialAccountClass")])},{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div",Object.assign({className:getClassName("kcFormGroupClass")},{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("input",{type:"hidden",name:"tryAnotherWay",value:"on"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("a",Object.assign({href:"#",id:"try-another-way",onClick:function onClick(){return document.forms["kc-select-try-another-way-form"].submit(),!1}},{children:msg("doTryAnotherWay")}))]}))}))})),displayInfo&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div",Object.assign({id:"kc-info",className:getClassName("kcSignUpClass")},{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div",Object.assign({id:"kc-info-wrapper",className:getClassName("kcInfoAreaWrapperClass")},{children:infoNode}))}))]}))}))]}))]}))):null}},"./dist/login/lib/useGetClassName.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{v:()=>useGetClassName});var useGetClassName=(0,__webpack_require__("./dist/lib/useGetClassName.js").a)({defaultClasses:{kcBodyClass:void 0,kcHtmlClass:"login-pf",kcLoginClass:"login-pf-page",kcContentWrapperClass:"row",kcHeaderClass:"login-pf-page-header",kcHeaderWrapperClass:void 0,kcFormCardClass:"card-pf",kcFormCardAccountClass:"login-pf-accounts",kcFormSocialAccountClass:"login-pf-social-section",kcFormSocialAccountContentClass:"col-xs-12 col-sm-6",kcFormHeaderClass:"login-pf-header",kcLocaleWrapperClass:void 0,kcFeedbackErrorIcon:"pficon pficon-error-circle-o",kcFeedbackWarningIcon:"pficon pficon-warning-triangle-o",kcFeedbackSuccessIcon:"pficon pficon-ok",kcFeedbackInfoIcon:"pficon pficon-info",kcResetFlowIcon:"pficon pficon-arrow fa-2x",kcFormGroupClass:"form-group",kcLabelWrapperClass:"col-xs-12 col-sm-12 col-md-12 col-lg-12",kcSignUpClass:"login-pf-signup",kcInfoAreaWrapperClass:void 0,kcLogoClass:"login-pf-brand",kcContainerClass:"container-fluid",kcContentClass:"col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3 col-lg-6 col-lg-offset-3",kcFeedbackAreaClass:"col-md-12",kcLocaleClass:"col-xs-12 col-sm-1",kcAlertIconClasserror:"pficon pficon-error-circle-o",kcFormAreaClass:"col-sm-10 col-sm-offset-1 col-md-8 col-md-offset-2 col-lg-8 col-lg-offset-2",kcFormSocialAccountListClass:"login-pf-social list-unstyled login-pf-social-all",kcFormSocialAccountDoubleListClass:"login-pf-social-double-col",kcFormSocialAccountListLinkClass:"login-pf-social-link",kcWebAuthnKeyIcon:"pficon pficon-key",kcWebAuthnDefaultIcon:"pficon pficon-key",kcFormClass:"form-horizontal",kcFormGroupErrorClass:"has-error",kcLabelClass:"control-label",kcInputClass:"form-control",kcInputErrorMessageClass:"pf-c-form__helper-text pf-m-error required kc-feedback-text",kcInputWrapperClass:"col-xs-12 col-sm-12 col-md-12 col-lg-12",kcFormButtonsWrapperClass:void 0,kcFormOptionsClass:"col-xs-12 col-sm-12 col-md-12 col-lg-12",kcFormButtonsClass:"col-xs-12 col-sm-12 col-md-12 col-lg-12",kcFormSettingClass:"login-pf-settings",kcTextareaClass:"form-control",kcInfoAreaClass:"col-xs-12 col-sm-4 col-md-4 col-lg-5 details",kcFormGroupHeader:"pf-c-form__group",kcButtonClass:"btn",kcButtonPrimaryClass:"btn-primary",kcButtonDefaultClass:"btn-default",kcButtonLargeClass:"btn-lg",kcButtonBlockClass:"btn-block",kcInputLargeClass:"input-lg",kcInputGroup:"pf-c-input-group",kcSrOnlyClass:"sr-only",kcSelectAuthListClass:"list-group list-view-pf",kcSelectAuthListItemClass:"list-group-item list-view-pf-stacked",kcSelectAuthListItemFillClass:"pf-l-split__item pf-m-fill",kcSelectAuthListItemIconPropertyClass:"fa-2x select-auth-box-icon-properties",kcSelectAuthListItemIconClass:"pf-l-split__item select-auth-box-icon",kcSelectAuthListItemTitle:"select-auth-box-paragraph",kcSelectAuthListItemInfoClass:"list-view-pf-main-info",kcSelectAuthListItemLeftClass:"list-view-pf-left",kcSelectAuthListItemBodyClass:"list-view-pf-body",kcSelectAuthListItemDescriptionClass:"list-view-pf-description",kcSelectAuthListItemHeadingClass:"list-group-item-heading",kcSelectAuthListItemHelpTextClass:"list-group-item-text",kcAuthenticatorDefaultClass:"fa list-view-pf-icon-lg",kcAuthenticatorPasswordClass:"fa fa-unlock list-view-pf-icon-lg",kcAuthenticatorOTPClass:"fa fa-mobile list-view-pf-icon-lg",kcAuthenticatorWebAuthnClass:"fa fa-key list-view-pf-icon-lg",kcAuthenticatorWebAuthnPasswordlessClass:"fa fa-key list-view-pf-icon-lg",kcSelectOTPListClass:"card-pf card-pf-view card-pf-view-select card-pf-view-single-select col-xs-12",kcSelectOTPListItemClass:"card-pf-body card-pf-top-element",kcAuthenticatorOtpCircleClass:"fa fa-mobile card-pf-icon-circle",kcSelectOTPItemHeadingClass:"card-pf-title text-center",kcFormOptionsWrapperClass:void 0}}).useGetClassName}}]);