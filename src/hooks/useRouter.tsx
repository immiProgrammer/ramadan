/* eslint-disable react-hooks/exhaustive-deps */

import * as navigation from "next/navigation";
import NProgress from "nprogress";
import React from 'react';

enum PrefetchKind {
    AUTO = "auto",
    FULL = "full",
    TEMPORARY = "temporary"
}
export interface NProgressOptions {
    showProgressBar:boolean;
    startPosition:number;
}
interface NavigateOptions {
    scroll?: boolean;
}
interface PrefetchOptions {
    kind: PrefetchKind;
}
function isSameURL(target:URL, current:URL) {
    var cleanTarget = target.protocol + '//' + target.host + target.pathname + target.search;
    var cleanCurrent = current.protocol + '//' + current.host + current.pathname + current.search;
    return cleanTarget === cleanCurrent;
}
function useRouter() {
    var router = navigation.useRouter();
    var startProgress = React.useCallback(function (startPosition?:number) {
        if (startPosition && startPosition > 0)
            NProgress.set(startPosition);
        NProgress.start();
    }, [router]);
    var progress = React.useCallback(function (href:string, options?:NavigateOptions, NProgressOptions?:NProgressOptions) {
        if ((NProgressOptions === null || NProgressOptions === void 0 ? void 0 : NProgressOptions.showProgressBar) === false) {
            return router.push(href, options);
        }
        var currentUrl = new URL(location.href);
        var targetUrl = new URL(href, location.href);
        if (isSameURL(targetUrl, currentUrl))
            return router.push(href, options);
        startProgress(NProgressOptions === null || NProgressOptions === void 0 ? void 0 : NProgressOptions.startPosition);
    }, [router]);
    var push = React.useCallback(function (href:string, options?:NavigateOptions, NProgressOptions?:NProgressOptions) {
        progress(href, options, NProgressOptions);
        return router.push(href, options);
    }, [router, startProgress]);
    var replace = React.useCallback(function (href:string, options?:NavigateOptions, NProgressOptions?:NProgressOptions) {
        progress(href, options, NProgressOptions);
        return router.replace(href, options);
    }, [router, startProgress]);
    var back = React.useCallback(function (NProgressOptions?:NProgressOptions) {
        if ((NProgressOptions === null || NProgressOptions === void 0 ? void 0 : NProgressOptions.showProgressBar) === false)
            return router.back();
        startProgress(NProgressOptions === null || NProgressOptions === void 0 ? void 0 : NProgressOptions.startPosition);
        return router.back();
    }, [router]);
    var enhancedRouter = React.useMemo(function () {
        return Object.assign({}, router, { push: push, replace: replace, back: back });
    }, [router, push, replace, back]);
    return enhancedRouter;
}

export {useRouter};