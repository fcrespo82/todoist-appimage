! function() {
    try {
        var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
        e.SENTRY_RELEASE = {
            id: "todoist-electron@9.26.4"
        };
        var t = (new e.Error).stack;
        t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "49dc761d-b34a-4901-aca8-9da312b53c57", e._sentryDebugIdIdentifier = "sentry-dbid-49dc761d-b34a-4901-aca8-9da312b53c57")
    } catch (e) {}
}(), (() => {
    "use strict";
    var e = {
        n: t => {
            var n = t && t.__esModule ? () => t.default : () => t;
            return e.d(n, {
                a: n
            }), n
        },
        d: (t, n) => {
            for (var i in n) e.o(n, i) && !e.o(t, i) && Object.defineProperty(t, i, {
                enumerable: !0,
                get: n[i]
            })
        },
        o: (e, t) => Object.prototype.hasOwnProperty.call(e, t)
    };
    const t = require("electron"),
        n = require("electron-log/main");
    var i = e.n(n);
    const o = {
        IS_DEV: !1,
        IS_TEST: !1,
        IS_PROD: !0,
        IS_PLAYWRIGHT: "true" === process.env.FROM_PLAYWRIGHT,
        IS_MAS: !0 === process.mas,
        IS_MSIX: !0 === process.windowsStore,
        IS_WINDOWS: "win32" === process.platform,
        IS_MAC: "darwin" === process.platform,
        IS_LINUX: "linux" === process.platform,
        IS_SNAP: Boolean(process.env.SNAP),
        DEFAULT_WEB_ROOT_URL: new URL("https://app.todoist.com"),
        STAGING_WEB_ROOT_URL: new URL("https://staging.todoist.com"),
        LOCAL_WEB_ROOT_URL: new URL("https://local.todoist.com"),
        SENTRY_DSN: new URL("https://5b748c40b03d48d38b42660fb5f98c02@o476415.ingest.sentry.io/5539679"),
        APP_ID: "darwin" === process.platform ? "com.todoist.mac.Todoist" : "com.todoist",
        EXTENSIONS_GROUP_ID: "S3DD273774.com.todoist.mac.Todoist.extensions",
        DISABLE_SECURITY: "true" === process.env.DISABLE_SECURITY,
        OAUTH_CLIENT_ID_PRODUCTION: "210d4e2e8d070729b955d73030864a44",
        OAUTH_CLIENT_ID_DEVELOPMENT: "48a6c2378402ef37a6b18feca1620436",
        OAUTH_REDIRECT_URI: "com.todoist://oauth2redirect/todoist",
        OAUTH_URI_SCHEME: "com.todoist",
        OAUTH_TODOIST_URI_SCHEME: "todoist",
        APPIMAGE_DESKTOP_INTEGRATION_HELP: "https://todoist.com/help/articles/360022117300#appimage",
        ENCRYPTION_KEY: "346FF91F-FF6B-4125-8DAB-C609C812B4DA",
        BUILD_TIMESTAMP: "2026-02-13T19:29:28.111Z"
    };

    function a() {
        if (!o.BUILD_TIMESTAMP) return null;
        const e = new Date(o.BUILD_TIMESTAMP);
        return Number.isNaN(e.getTime()) ? null : e
    }

    function r() {
        const e = a();
        if (!e) return 0;
        const t = (new Date).getTime() - e.getTime();
        return Math.floor(t / 864e5)
    }
    const s = "todoist-main.log";

    function c(e) {
        try {
            const t = {
                ...e
            };
            return "string" == typeof t.data ? t.data = [d(t.data)] : t.data && Array.isArray(t.data) && (t.data = t.data.map(d)), t.data
        } catch (t) {
            return e.data
        }
    }

    function d(e) {
        return "string" == typeof e ? e.replace(/([?&](token|code|state)=)([^&]*)/gi, "$1*****") : e
    }
    i().transports.file.fileName = s, i().transports.console.transforms.push(c), i().transports.file.transforms.push(c),
        function() {
            i().info("======= NEW SESSION =======");
            try {
                var e;
                i().info(`App version: ${t.app.getVersion()}`), i().info(`Build date: ${(null===(e=a())||void 0===e?void 0:e.toString())??"N/A"}`), i().info(`Time: ${(new Date).toString()}`), i().info(`Timezone: ${Intl.DateTimeFormat().resolvedOptions().timeZone}`)
            } catch (e) {
                i().error("Failed to log the session start with the error:", e)
            }
            i().info("===========================")
        }(), o.IS_DEV && (t.app.commandLine.appendSwitch("ignore-certificate-errors", "true"), t.app.setAppUserModelId(`${o.APP_ID}.dev`), t.app.setName(`${t.app.getName()}Dev`));
    const l = require("electron-context-menu");
    var u = e.n(l);
    const p = require("@doist/electron-utils"),
        h = require("@doist/mac-extensions-bridge"),
        w = require("i18next");
    var f = e.n(w);
    let g = function(e) {
        return e.login = "login", e.logout = "logout", e.setTheme = "setTheme", e.focusDesktopApp = "focusDesktopApp", e.getBridgeProtocolVersion = "getBridgeProtocolVersion", e.titleBarDoubleClick = "titleBarDoubleClick", e.setBadge = "setBadge", e.setTodayItems = "setTodayItems", e.setProductivityWidgetData = "setProductivityWidgetData", e.setProjects = "setProjects", e.changeWindowState = "changeWindowState", e.notify = "notify", e.notificationActivated = "notificationActivated", e.bridgeReady = "bridgeReady", e.setIgnoreMouseEvents = "setIgnoreMouseEvents", e.openPreferences = "openPreferences", e.getPreference = "getPreference", e.setPreference = "setPreference", e.showQuickAdd = "showQuickAdd", e.quickAddReady = "quickAddReady", e.quickAddClosed = "quickAddClosed", e.quickAddOpened = "quickAddOpened", e.quickAddAdded = "quickAddAdded", e.quickAddOpen = "quickAddOpen", e.prefillQuickAdd = "prefillQuickAdd", e.startRambleSession = "startRambleSession", e.closeQuickAdd = "closeQuickAdd", e.completeItem = "completeItem", e.uncompleteItem = "uncompleteItem", e.quickAddAddTask = "quickAddAddTask", e.addTask = "addTask", e.navigateTo = "navigateTo", e.setLayout = "setLayout", e.createReminder = "createReminder", e.setTimeFormat = "setTimeFormat", e.openAuthMagicLink = "openAuthMagicLink", e.setFavourites = "setFavourites", e.setWorkspaces = "setWorkspaces", e.blurWindow = "blurWindow", e.focusWindow = "focusWindow", e.newDesktopVersionAvailable = "newDesktopVersionAvailable", e.installNewDesktopVersion = "installNewDesktopVersion", e.updateWebappVersion = "updateWebappVersion", e.openNewWindow = "openNewWindow", e.openNewWindows = "openNewWindows", e.askFeatureFlagValue = "askFeatureFlagValue", e.sendFeatureFlagValue = "sendFeatureFlagValue", e.sendCommunicationReadyMessage = "sendCommunicationReadyMessage", e.toggleFloatingWindow = "toggleFloatingWindow", e.isMainLogicWindow = "isMainLogicWindow", e.setMainLogicWindow = "setMainLogicWindow", e.setFloatWindow = "setFloatWindow", e.sendNewWindowOpenAnalytics = "sendNewWindowOpenAnalytics", e.sendCloseWindowAnalytics = "sendCloseWindowAnalytics", e.sendUpdateWebAppRequest = "sendUpdateWebAppRequest", e.updateMultiWindowWebAppVersion = "updateMultiWindowWebAppVersion", e.setFullScreenStatus = "setFullScreenStatus", e.sendGlobalShortcutsEnabled = "sendGlobalShortcutsEnabled", e.sendDatadogLog = "sendDatadogLog", e.sendOpenPageFromQuickAdd = "sendOpenPageFromQuickAdd", e.resetQuickAdd = "resetQuickAdd", e.sendActionFromNewQuickAdd = "sendActionFromNewQuickAdd", e.getShortcuts = "getShortcuts", e.setNavigation = "setNavigation", e.setTrayMenuItems = "setTrayMenuItems", e.sendWidgetData = "sendWidgetData", e.sendHistoryState = "sendHistoryState", e.sendRequestSync = "sendRequestSync", e.handleWakeup = "handleWakeup", e.sendAppIntentsData = "sendAppIntentsData", e.setAppIntentsData = "setAppIntentsData", e.setAppIntentsTasksData = "setAppIntentsTasksData", e
    }({});
    const m = "com.todoist.ipc.response",
        A = "com.todoist.ipc.pull";

    function b() {
        function e() {
            return Math.floor(65536 * (1 + Math.random())).toString(16).substring(1)
        }
        return `${e()}-${e()}-${e()}-${e()}${e()}${e()}`
    }

    function v(e, t) {
        e.send(g.completeItem, {
            type: A,
            id: b(),
            method: "completeItem",
            data: t
        })
    }

    function y(e, t) {
        e.send(g.navigateTo, {
            type: A,
            id: b(),
            method: "navigateTo",
            data: t
        })
    }

    function S(e, t, n) {
        e.send(g.createReminder, {
            type: A,
            id: b(),
            method: "createReminder",
            data: {
                taskId: t,
                date: n
            }
        })
    }

    function k(e, t) {
        e.send(g.setFullScreenStatus, {
            type: A,
            id: b(),
            method: "setFullScreenStatus",
            data: t
        })
    }

    function I(e) {
        e.send(g.handleWakeup, {
            type: A,
            id: b(),
            method: "handleWakeup"
        })
    }
    const E = require("electron-store");
    var T = e.n(E);
    const R = "darwin" === process.platform,
        _ = ["win32", "darwin"].includes(process.platform),
        M = (process.platform, "darwin" === process.platform),
        C = "win32" === process.platform,
        W = "darwin" === process.platform ? "hiddenInset" : "default",
        D = "win32" === process.platform;

    function U() {
        switch (process.platform) {
            case "darwin":
                return {
                    activate: "Control+Cmd+T", quick_add: "Alt+Space", quick_add_ramble: "Alt+Shift+R"
                };
            case "win32":
                return {
                    activate: "Super+Alt+S", quick_add: "Control+Space", quick_add_ramble: "Alt+Shift+R"
                };
            default:
                return
        }
    }
    let P = function(e) {
        return e.latest = "latest", e.beta = "beta", e.alpha = "alpha", e
    }({});
    const L = new class {
        constructor() {
            this.settingsStore = new(T())({
                name: "settings",
                clearInvalidConfig: !0,
                defaults: {
                    stay_in_tray: "win32" === process.platform,
                    show_in_dock: "darwin" === process.platform || void 0,
                    show_in_menu_bar: "darwin" === process.platform || void 0,
                    global_shortcuts: U(),
                    open_on_system_startup: !1,
                    system_startup_minimized: !1
                }
            }), this.stateStore = new(T())({
                name: "state",
                clearInvalidConfig: !0
            }), this.ensureDefaultShortcuts()
        }
        ensureDefaultShortcuts() {
            const e = this.settingsStore.get("global_shortcuts") || {},
                t = U() || {},
                n = {
                    ...e
                };
            let i = !1;
            for (const [o, a] of Object.entries(t)) o in e || (n[o] = a, i = !0);
            i && this.settingsStore.set("global_shortcuts", n)
        }
        get theme() {
            return this.stateStore.get("theme")
        }
        set theme(e) {
            void 0 === e ? this.stateStore.delete("theme") : this.stateStore.set("theme", e)
        }
        get stayInTray() {
            return this.settingsStore.get("stay_in_tray")
        }
        set stayInTray(e) {
            this.settingsStore.set("stay_in_tray", e)
        }
        getGlobalShortcut(e) {
            return this.settingsStore.get(`global_shortcuts.${e}`)
        }
        getEnvironment() {
            return process.env.APP_CONFIG_API_ENVIRONMENT || this.settingsStore.get("environment")
        }
        get windowSize() {
            return this.stateStore.get("windowSize")
        }
        set windowSize(e) {
            void 0 === e ? this.stateStore.delete("windowSize") : this.stateStore.set("windowSize", e)
        }
        get windowPosition() {
            return this.stateStore.get("windowPosition")
        }
        set windowPosition(e) {
            void 0 === e ? this.stateStore.delete("windowPosition") : this.stateStore.set("windowPosition", e)
        }
        get windowIsMaximized() {
            return this.stateStore.get("windowIsMaximized") || !1
        }
        set windowIsMaximized(e) {
            this.stateStore.set("windowIsMaximized", e)
        }
        get analyticsClientId() {
            return this.stateStore.get("analytics_client_id")
        }
        set analyticsClientId(e) {
            this.stateStore.set("analytics_client_id", e)
        }
        get timeFormat() {
            return this.stateStore.get("time_format")
        }
        set timeFormat(e) {
            void 0 === e ? this.stateStore.delete("time_format") : this.stateStore.set("time_format", e)
        }
        getPreference(e) {
            return this.settingsStore.get(e)
        }
        setPreference(e, t) {
            void 0 === t ? e.startsWith("global_shortcuts") ? this.settingsStore.set(e, null) : this.settingsStore.delete(e) : this.settingsStore.set(e, t)
        }
        watch(e, t) {
            return this.settingsStore.onDidChange(e, t)
        }
        clear() {
            this.settingsStore.clear(), this.stateStore.clear()
        }
    };

    function O(e) {
        try {
            return t.screen.getDisplayMatching(e.getBounds()).scaleFactor
        } catch (e) {
            return V.captureException(e), 1
        }
    }

    function N(e) {
        if (!e || e.isDestroyed()) return !1;
        const t = e.webContents;
        return !(!t || t.isDestroyed())
    }

    function x(e) {
        return null != e && N(e.mainWindow.browserWindow)
    }
    let B = [],
        F = null;

    function z(e, t) {
        t && Math.random() > 1 - t || (B.push(e), function() {
            var e;
            const t = null === (e = F) || void 0 === e ? void 0 : e();
            if (!t) return;
            if (!t.mainWindow.browserWindow) return;
            if (!N(t.mainWindow.browserWindow)) return;
            const n = t.mainWindow.browserWindow.webContents;
            n && (B.forEach((e => function(e, t) {
                e.send(g.sendDatadogLog, {
                    type: A,
                    id: b(),
                    method: "sendDatadogLog",
                    data: t
                })
            }(n, e))), B = [])
        }())
    }
    const H = require("@sentry/electron/main"),
        q = [/Child process crashed:.+Network Service.+network.mojom.NetworkService.+Utility/, /Child process crashed:.+Audio Service.+audio.mojom.AudioService.+Utility/, /Child process crashed:.+GPU/, "'GPU' process exited with 'abnormal-exit'", "ERR_FAILED (-2) loading", "ERR_NAME_NOT_RESOLVED (-105) loading", "ERR_INTERNET_DISCONNECTED (-106) loading", "ERR_NETWORK_IO_SUSPENDED (-331) loading", "ERR_NETWORK_CHANGED (-21) loading", "ERR_ABORTED (-3) loading", "(-3) loading", "net::ERR_INTERNET_DISCONNECTED", "net::ERR_NETWORK_CHANGED", "net::ERR_NETWORK_IO_SUSPENDED", "net::ERR_CONNECTION_RESET", "net::ERR_PROXY_CONNECTION_FAILED", "net::ERR_NETWORK_ACCESS_DENIED", "net::ERR_NAME_NOT_RESOLVED", "net::ERR_HTTP2_PROTOCOL_ERROR", "net::ERR_SSL_PROTOCOL_ERROR", "net::ERR_CONNECTION_TIMED_OUT", "net::ERR_CONNECTION_CLOSED", "net::ERR_FAILED", "net::ERR_CERT_COMMON_NAME_INVALID", "net::ERR_TUNNEL_CONNECTION_FAILED", "net::ERR_CONNECTION_ABORTED", "net::ERR_TIMED_OUT"];
    class j {
        constructor(e, t) {
            this.dsn = e, this.appVersion = t, this.appVersion = t, this.dsn = e, H.init({
                dsn: this.dsn,
                release: t,
                enableTracing: !0,
                integrations: e => e.filter((e => "SentryMinidump" !== e.name)),
                sampleRate: r() > 180 ? 0 : 1,
                ignoreErrors: q
            }), this.setupPlatformTags()
        }
        setupPlatformTags() {
            H.setTag("osVersion", process.getSystemVersion()), "darwin" === process.platform ? o.IS_MAS ? H.setTag("distribution", "mas") : H.setTag("distribution", "dmg") : "win32" === process.platform ? process.windowsStore ? H.setTag("distribution", "winstore") : H.setTag("distribution", "wininstaller") : "linux" === process.platform && (process.env.APPIMAGE ? H.setTag("distribution", "appimage") : H.setTag("distribution", "snap"))
        }
        captureException(e, t) {
            H.captureException(e, t)
        }
        captureMessage(e, t) {
            return H.captureMessage(e, t)
        }
        addBreadcrumb(e) {
            H.addBreadcrumb(e)
        }
    }
    const V = new class {
            init() {
                const e = o.IS_DEV || o.IS_TEST ? void 0 : new j(o.SENTRY_DSN.href, `todoist-electron@${t.app.getVersion()}`);
                this.sentryGateway = e, this.setAppCrashListeners(), process.on("uncaughtException", (e => {
                    this.captureException(e)
                })), i().errorHandler.startCatching(), i().eventLogger.events = {
                    app: {
                        "certificate-error": !0,
                        "child-process-gone": !0,
                        "render-process-gone": !0
                    },
                    webContents: {
                        "did-fail-load": !1,
                        "did-fail-provisional-load": !1,
                        "plugin-crashed": !0,
                        "preload-error": !0,
                        unresponsive: !0
                    }
                }, i().eventLogger.startLogging()
            }
            setAppCrashListeners() {
                t.app.on("child-process-gone", ((e, t) => {
                    "clean-exit" !== t.reason && z({
                        fingerprint: "process-crash",
                        level: "warn",
                        message: `Child process crashed: ${t.exitCode}, ${t.name||""}, ${t.reason}, ${t.serviceName||""}, ${t.type}`
                    }, .1)
                })), t.app.on("render-process-gone", ((e, t, n) => {
                    "clean-exit" !== n.reason && z({
                        fingerprint: "renderer-process-crash",
                        level: "warn",
                        message: `Render process crashed: ${n.exitCode}, ${n.reason}`
                    }, .1)
                }))
            }
            captureException(e, t) {
                e instanceof Error ? (o.IS_PROD && this.sentryGateway && this.sentryGateway.captureException(e, t), i().error(e)) : i().error("Invalid error format. Expected an instance of Error.")
            }
            captureMessage(e, t) {
                o.IS_PROD && this.sentryGateway && this.sentryGateway.captureMessage(e, t)
            }
            addBreadcrumb(e) {
                o.IS_PROD && this.sentryGateway && this.sentryGateway.addBreadcrumb(e)
            }
        },
        G = require("events"),
        Q = new G.EventEmitter;
    let K = null;

    function Y() {
        if (!K) return 0;
        try {
            return K.get("notificationsCount")
        } catch {
            return 0
        }
    }
    const J = {
            getNotificationsCount: Y,
            resetNotificationStore: function() {
                if (K) try {
                    K.reset(), Q.emit("notifications-count-changed", Y())
                } catch {}
            },
            setNotificationsCount: function(e) {
                if (K) try {
                    K.set("notificationsCount", e), Q.emit("notifications-count-changed", e)
                } catch {}
            }
        },
        Z = new(T())({
            name: "session",
            clearInvalidConfig: !0,
            defaults: {
                token: "",
                beta: 0
            },
            encryptionKey: o.IS_TEST ? void 0 : o.ENCRYPTION_KEY
        }),
        X = function() {
            Z.set("token", "")
        },
        $ = function() {
            return Z.get("token") || ""
        },
        ee = function(e) {
            Z.set("token", e)
        },
        te = function(e) {
            Z.set("beta", e)
        };
    let ne;
    const ie = new class {
            init() {
                !o.IS_PROD && process.env.E2E_TEST_TOKEN && (i().info("Setting API token from the E2E_TEST_TOKEN env variable"), t.session.defaultSession.clearStorageData().catch((e => {
                    i().error("Failed to clear storage data when setting up test env: ", e)
                })), this.setApiToken(process.env.E2E_TEST_TOKEN)), t.session.defaultSession.setUserAgent(function() {
                    ne || (ne = t.session.defaultSession.getUserAgent());
                    let e = `${ne} TodoistDesktop/${t.app.getVersion()} TodoistElectronBridge/25`;
                    return "hiddenInset" === W && (e += " FeatureHiddenInsetTitleBar/1"), _ && (e += " FeatureQuickAdd/1"), M && (e += " FeatureHideFromDock/1"), o.IS_MAS && (e += " FeatureAppStore/1"), o.IS_MSIX && (e += " FeatureMSIX/1"), e
                }()), t.session.defaultSession.setPermissionRequestHandler(((e, t, n) => ["media", "clipboard-sanitized-write"].includes(t) ? n(!0) : n(!1)))
            }
            login(e) {
                V.addBreadcrumb({
                    type: "Event",
                    category: "session",
                    level: "info",
                    message: "Signing in"
                });
                try {
                    this.setApiToken(e.token), te(e.beta || 0)
                } catch (e) {
                    i().error("Failed to set API token with the error: ", e)
                }
                var n;
                n = e.token, t.session.defaultSession.webRequest.onBeforeSendHeaders({
                    urls: ["https://app.todoist.com/karma/showInfo", "https://app.todoist.com/api/*/backups/download*", "https://app.todoist.com/apps/installations", "https://app.todoist.com/_todoist/resize*", "https://files.todoist.com/user_upload/*", "https://app.todoist.com/api/*/projects/*/calendar_feed_url"]
                }, ((e, t) => {
                    e.requestHeaders.Authorization = `Bearer ${n}`, t({
                        requestHeaders: e.requestHeaders
                    })
                })), "darwin" === process.platform && (0, h.authUserSignIn)(JSON.stringify(e)), V.addBreadcrumb({
                    type: "Event",
                    category: "session",
                    level: "info",
                    message: "Signed in"
                })
            }
            logout() {
                t.session.defaultSession.webRequest.onBeforeSendHeaders(null), i().info("Logging out from a session"), V.addBreadcrumb({
                    type: "Event",
                    category: "session",
                    level: "info",
                    message: "Signing out"
                });
                try {
                    this.deleteApiToken()
                } catch (e) {
                    i().error("Failed to delete API token with the error: ", e)
                }
                "darwin" === process.platform && ((0, h.authUserSignOut)(), (0, h.widgetsBridgeSaveTodayWidgetData)("{}"), (0, h.widgetsBridgeSaveProductivityWidgetData)("{}"), (0, h.widgetsBridgeReloadWidgets)(), (0, h.appIntentsSaveGeneralData)("{}"), (0, h.appIntentsSaveTasksData)("{}")), V.addBreadcrumb({
                    type: "Event",
                    category: "session",
                    level: "info",
                    message: "Signed out"
                })
            }
            getApiToken() {
                const e = $();
                try {
                    if (!e) return i().info("No stored API token"), "";
                    if (t.safeStorage.isEncryptionAvailable()) {
                        i().info("Safe Storage Encryption is available, trying to decrypt token now");
                        const n = e ? t.safeStorage.decryptString(Buffer.from(e, "utf-8")) : "";
                        return i().info("Successfully decrypted API token"), n
                    }
                    return e
                } catch (e) {
                    i().error("Failed to decrypt API token with the error: ", e)
                }
                return ""
            }
            setApiToken(e) {
                if ("darwin" === process.platform && (0, h.widgetsBridgeSetKeychainAPIToken)(e), t.safeStorage.isEncryptionAvailable()) {
                    i().info("Safe Storage Encryption is available, trying to encrypt token now");
                    const n = t.safeStorage.encryptString(e);
                    ee(n), i().info("Successfully set encrypted API token")
                } else i().info("Safe Storage Encryption is not available"), ee(e)
            }
            deleteApiToken() {
                "darwin" === process.platform && (0, h.widgetsBridgeDeleteKeychainAPIToken)(), X()
            }
        },
        oe = {
            disableAnimations: !1,
            disableHardwareAcceleration: !1,
            enableAppLoadingRecovery: null,
            shouldQuickAddAlwaysReload: !1,
            shouldQuickAddPrioritizeDnD: !1,
            useLegacyStartupFlow: !1
        };
    let ae = null;

    function re(e) {
        if (!ae) return !1;
        try {
            return ae.set("disableAnimations", e), !0
        } catch (e) {
            return !1
        }
    }

    function se() {
        if (!ae) return !1;
        try {
            return ae.get("disableAnimations")
        } catch (e) {
            return !1
        }
    }

    function ce(e) {
        if (!ae) return !1;
        try {
            return ae.set("disableHardwareAcceleration", e), !0
        } catch (e) {
            return !1
        }
    }

    function de() {
        if (!ae) return !1;
        try {
            return ae.get("disableHardwareAcceleration")
        } catch (e) {
            return !1
        }
    }

    function le() {
        if (!ae) return null;
        try {
            return ae.get("enableAppLoadingRecovery")
        } catch (e) {
            return null
        }
    }

    function ue(e) {
        if (!ae) return !1;
        try {
            return ae.set("enableAppLoadingRecovery", e), !0
        } catch (e) {
            return !1
        }
    }

    function pe(e) {
        if (!ae) return !1;
        try {
            return ae.set("shouldQuickAddAlwaysReload", e), !0
        } catch (e) {
            return !1
        }
    }

    function he() {
        if (!ae) return null;
        try {
            return ae.get("shouldQuickAddAlwaysReload")
        } catch (e) {
            return null
        }
    }

    function we(e) {
        if (!ae) return !1;
        try {
            return ae.set("shouldQuickAddPrioritizeDnD", e), !0
        } catch (e) {
            return !1
        }
    }

    function fe() {
        if (!ae) return null;
        try {
            return ae.get("shouldQuickAddPrioritizeDnD")
        } catch (e) {
            return null
        }
    }

    function ge(e) {
        if (!ae) return !1;
        try {
            return ae.set("useLegacyStartupFlow", e), !0
        } catch (e) {
            return !1
        }
    }

    function me() {
        if (!ae) return !1;
        try {
            return ae.get("useLegacyStartupFlow")
        } catch (e) {
            return !1
        }
    }

    function Ae() {
        return Boolean(ae)
    }
    const be = require("node:events"),
        ve = new be.EventEmitter,
        ye = {
            appWillQuit: !1,
            quickAddWindow: null,
            experimentalist: !1,
            initialized: !1,
            loggedIn: !1
        };

    function Se(e) {
        i().info("App is quitting"), ye.appWillQuit = e
    }

    function ke() {
        return ye.appWillQuit
    }

    function Ie(e) {
        ye.quickAddWindow = e
    }

    function Ee() {
        if (!ye.quickAddWindow) {
            ye.quickAddWindow = new QuickAddWindow()
        }
        return ye.quickAddWindow
    }

    function Te(e) {
        i().info(`setting experimentalist value to ${String(e)}`), ye.experimentalist = e
    }

    function Re(e) {
        !ye.initialized && e && ve.emit("app-initialized"), ye.initialized = e
    }

    function _e() {
        return ye.initialized
    }

    function Me(e) {
        ye.loggedIn = e
    }

    function Ce() {
        return ye.loggedIn
    }
    let We = !1;
    const De = {
            mainLogicWindow: null,
            activeWindow: null,
            windows: []
        },
        Ue = new be.EventEmitter;

    function Pe() {
        Le().forEach((e => {
            var t;
            e !== De.activeWindow && (null === (t = e.mainWindow.browserWindow) || void 0 === t || t.close())
        }))
    }

    function Le() {
        return De.windows.filter((e => x(e)))
    }

    function Oe() {
        if (ke()) return null;
        const e = De.activeWindow;
        return x(e) ? e : null
    }

    function Ne() {
        if (ke()) return null;
        const e = De.activeWindow;
        return x(e) ? (null == e ? void 0 : e.mainWindow.browserWindow) ?? null : null
    }

    function xe(e) {
        Ue.emit("window-active-changed", {
            previous: De.activeWindow,
            current: e
        }), De.activeWindow = e, null == e || e.mainWindow.savePositionSettings()
    }

    function Be() {
        return We
    }

    function Fe() {
        return De.mainLogicWindow
    }

    function ze(e) {
        De.mainLogicWindow = e, Ue.emit("main-window-changed", e)
    }

    function He(e) {
        const t = (n = e, !o.IS_MAC && 1 === Le().length && !n.isVisible() && !n.isMinimized());
        var n;
        e.isMinimized() && e.restore(), e.show(), t && J.setNotificationsCount(J.getNotificationsCount())
    }

    function qe(e) {
        if (e instanceof URL) return e.protocol;
        try {
            return new URL(e).protocol
        } catch {
            return
        }
    }

    function je(e) {
        const n = e instanceof URL ? e : new URL(e);
        ["file:", "ftp:", "chrome:", "chrome-extension:", "chrome-devtools:", "javascript:", "data:", "about:", "jar:", "ws:", "wss:"].includes(n.protocol) || t.shell.openExternal(n.href).catch((t => {
            V.captureException(t, (t => (t.setContext("url", {
                protocol: qe(e)
            }), t)))
        }))
    }

    function Ve() {
        return o.IS_MAC || o.IS_MAS ? "mac" : o.IS_WINDOWS ? "windows" : o.IS_LINUX ? "linux" : void 0
    }
    async function Ge() {
        ie.logout(), L.clear(),
            function() {
                if (ae) try {
                    ae.clear()
                } catch (e) {}
            }(), await t.session.defaultSession.clearStorageData(), await t.session.defaultSession.clearCodeCaches({}), await t.session.defaultSession.clearCache()
    }

    function Qe(e) {
        return /^[a-zA-Z0-9]+$/.test(e)
    }

    function Ke(e) {
        o.IS_PLAYWRIGHT && (global.__TEST_UTILS || (global.__TEST_UTILS = {}), e(global.__TEST_UTILS))
    }
    const Ye = new URL("/app/", st()),
        Je = new URL("/app/integrations/desktop/login", st()),
        Ze = new URL("/users/auth", st()),
        Xe = new URL("/users/token", st()),
        $e = ["staging.todoist.com", "local.todoist.com"].includes(st().hostname) ? o.OAUTH_CLIENT_ID_DEVELOPMENT : o.OAUTH_CLIENT_ID_PRODUCTION,
        et = new URL("/app/integrations/desktop/quick_add", st()),
        tt = (st(), new URL("https://todoist.com/pricing")),
        nt = new URL("https://todoist.com/help"),
        it = new URL("https://todoist.com/contact"),
        ot = new URL("https://www.todoist.com/help/articles/changelog-HD3jJAtLd"),
        at = new URL("https://www.todoist.com/help/articles/Ao7HAd1MI"),
        rt = ["https://app.todoist.com", "https://todoist.com", "https://local.todoist.com", "https://staging.todoist.com", "https://beta.todoist.com", "https://ext.todoist.com", "https://downloads.todoist.com"];

    function st() {
        switch (L.getEnvironment()) {
            case "staging":
                return o.STAGING_WEB_ROOT_URL;
            case "local":
                return o.LOCAL_WEB_ROOT_URL;
            case "production":
                return o.DEFAULT_WEB_ROOT_URL;
            case void 0:
                return o.IS_DEV ? o.STAGING_WEB_ROOT_URL : o.DEFAULT_WEB_ROOT_URL;
            default:
                return o.DEFAULT_WEB_ROOT_URL
        }
    }

    function ct(e) {
        return new URL(`https://doist.typeform.com/to/S9Le2uY0#source=app&os=${e}`)
    }

    function dt(e) {
        const t = new URL(Je.href);
        return e && Object.entries(e).forEach((([e, n]) => {
            n && t.searchParams.append(e, n)
        })), t
    }

    function lt(e) {
        if (!e) return {
            view: {
                type: "home"
            }
        };
        if (e.startsWith("/app/inbox")) return {
            view: {
                type: "inbox"
            }
        };
        if (e.startsWith("/app/today")) return {
            view: {
                type: "today"
            }
        };
        if (e.startsWith("/app/upcoming")) return {
            view: {
                type: "upcoming"
            }
        };
        if (e.startsWith("/app/filters-labels")) return {
            view: {
                type: "filters-labels"
            }
        };
        if (e.startsWith("/app/activity")) {
            const t = e.match(/^\/app\/activity\?eventType=(.+)/);
            return {
                view: {
                    type: "activity",
                    eventType: t ? t[1] : void 0
                }
            }
        }
        if (e.startsWith("/app/projects")) return {
            view: {
                type: "projects"
            }
        };
        if (/^\/app\/[a-z0-9]+\/projects/i.test(e)) {
            const t = e.match(/^\/app\/([a-z0-9-]+)\/projects/i);
            return {
                view: {
                    type: "projects",
                    workspaceId: (null == t ? void 0 : t[1]) ?? ""
                }
            }
        }
        if (e.startsWith("/app/project")) {
            const t = e.match(/^\/app\/project\/([a-z0-9-]+)/i);
            return {
                view: {
                    type: "project",
                    projectId: ut(null == t ? void 0 : t[1])
                }
            }
        }
        if (e.startsWith("/app/label")) {
            const t = e.match(/^\/app\/label\/([a-z0-9-]+)/i);
            return {
                view: {
                    type: "label",
                    labelId: ut(null == t ? void 0 : t[1])
                }
            }
        }
        if (e.startsWith("/app/filter")) {
            const t = e.match(/^\/app\/filter\/([a-z0-9-]+)/i);
            return {
                view: {
                    type: "filter",
                    filterId: ut(null == t ? void 0 : t[1])
                }
            }
        }
        if (e.startsWith("/app/task")) {
            const t = e.match(/^\/app\/task\/([a-z0-9-]+)/i);
            return {
                task: {
                    id: ut(null == t ? void 0 : t[1])
                }
            }
        }
        return {
            view: {
                type: "home"
            }
        }
    }

    function ut(e) {
        return e ? e.substring(e.lastIndexOf("-") + 1) : ""
    }

    function pt(e) {
        return new URL(e, Ye.toString())
    }

    function ht(e) {
        if (!Qe(e)) throw new Error("Invalid taskId");
        return `/app/task/${e}`
    }

    function wt(e) {
        if (!Qe(e)) throw new Error("Invalid projectId");
        return `/app/project/${e}`
    }

    function ft(e) {
        He(e)
    }

    function gt() {
        const e = Ne();
        e && ft(e)
    }

    function mt(e, t, n) {
        if (ke()) return;
        const o = null == e ? void 0 : e.mainWindow.browserWindow;
        N(o) && (null == o || o.loadURL(t.toString()).catch((e => {
            (0, p.isNetworkError)(e) ? i().error("Network error while loading url:", e): V.captureException(e, n)
        })))
    }

    function At(e) {
        var t;
        null === (t = Ee()) || void 0 === t || t.reactivate(e)
    }

    function bt(e) {
        const t = Ne();
        t && t.webContents && (He(t), function(e, t) {
            const n = {
                type: A,
                id: b(),
                method: "openPreferences"
            };
            t && (n.data = t), e.send(g.openPreferences, n)
        }(t.webContents, e))
    }

    function vt(e) {
        const t = Ne();
        t && t.webContents && (y(t.webContents, e), gt())
    }

    function yt(e = "tokenExchangeFailed") {
        const n = Ne(),
            i = o.IS_WINDOWS ? "withTitle" : "withoutTitle";
        if (!n) return;
        let a = {
            message: (0, w.t)(`app.login.${e}.${i}.message`),
            cancelId: 2,
            defaultId: 2,
            type: "error",
            buttons: [(0, w.t)(`app.login.${e}.${i}.troubleshooting`), (0, w.t)(`app.login.${e}.${i}.contactSupport`), (0, w.t)(`app.login.${e}.close`)]
        };
        o.IS_WINDOWS && (a = {
            ...a,
            title: (0, w.t)(`app.login.${e}.withTitle.title`) || ""
        });
        const r = t.dialog.showMessageBoxSync(n, a);
        if (0 === r)
            if ("serverError" === e) {
                var s;
                const e = Ne();
                null == e || null === (s = e.webContents) || void 0 === s || s.reload()
            } else je(at);
        1 === r && je(it)
    }
    async function St() {
        1 === (await t.dialog.showMessageBox({
            type: "question",
            buttons: [(0, w.t)("clearAppDataDialog.buttons.cancel"), (0, w.t)("clearAppDataDialog.buttons.clear")],
            defaultId: 1,
            cancelId: 0,
            title: (0, w.t)("clearAppDataDialog.title"),
            message: (0, w.t)("clearAppDataDialog.message"),
            detail: (0, w.t)("clearAppDataDialog.detail")
        })).response && (o.IS_MAS ? (Pe(), await Ge(), t.BrowserWindow.getAllWindows().forEach((e => e.reload())), gt()) : (await Ge(), t.app.relaunch(), t.app.quit()))
    }

    function kt() {
        t.globalShortcut.unregisterAll();
        try {
            const e = {
                activate: L.getGlobalShortcut("activate"),
                quickAdd: L.getGlobalShortcut("quick_add"),
                quickAddRamble: L.getGlobalShortcut("quick_add_ramble")
            };
            e.activate && (i().info("Registering shortcut to show Todoist window:", e.activate), t.globalShortcut.register(e.activate, (() => {
                const e = Ne();
                if (e)
                    if (e.isVisible() && e.isFocused()) {
                        const t = e;
                        "darwin" === process.platform && t.isFullScreen() ? (t.blur(), t.once("leave-full-screen", (() => t.hide())), t.setFullScreen(!1)) : t.hide()
                    } else He(e)
            }))), e.quickAdd && (i().info("Registering shortcut to show Quick Add:", e.quickAdd), t.globalShortcut.register(e.quickAdd, (() => {
                At()
            }))), e.quickAddRamble && (i().info("Registering shortcut to show Quick Add in Ramble mode:", e.quickAddRamble), t.globalShortcut.register(e.quickAddRamble, (() => {
                At({
                    startInRambleMode: !0
                })
            })))
        } catch (e) {
            i().warn("Failed to register global shortcuts with an error:", e), V.captureException(e, {
                fingerprint: ["registering-global-shortcuts"]
            })
        }
    }
    const It = require("fs"),
        Et = require("path");
    var Tt = e.n(Et);
    const Rt = require("i18next-fs-backend");
    var _t = e.n(Rt);
    const Mt = (0, Et.join)(t.app.getAppPath(), "./webpack/electron/resources/i18n/");
    f().use(_t()).init({
        debug: !1,
        initImmediate: !1,
        fallbackLng: "en",
        defaultNS: "strings",
        ns: "strings",
        returnNull: !1,
        returnEmptyString: !1,
        nonExplicitSupportedLngs: !0,
        backend: {
            loadPath: (0, Et.join)(Mt, "{{lng}}/{{ns}}.json")
        },
        preload: (0, It.readdirSync)(Mt).filter((e => {
            const t = (0, Et.join)(Mt, e);
            return (0, It.lstatSync)(t).isDirectory()
        }))
    }).catch((e => {
        V.captureException(e, {
            tags: {
                service: "i18n",
                lifeycle: "init"
            }
        })
    })), f().on("languageChanged", (e => {
        e.includes("-") && (e = e.replace("-", "_"), f().changeLanguage(e).catch((e => {
            console.error("error: ", e)
        })))
    }));
    const Ct = require("electron-updater"),
        Wt = new G.EventEmitter,
        Dt = new class {
            forceDevUpdate = "true" === process.env.FORCE_UPDATE_IN_DEVELOPMENT;
            isAutoUpdateEnabled = !1;
            checkForUpdatesTimestamp = null;
            isUpdateDownloaded = !1;
            checkForUpdatesPromise = null;
            init() {
                const e = o.IS_MAS || o.IS_SNAP || o.IS_MSIX,
                    t = !e && (o.IS_PROD || this.forceDevUpdate);
                this.isAutoUpdateEnabled = t, t || (e ? i().info("App updates are managed by the App Store") : o.IS_PROD || i().info("Updates are disabled because of the dev build")), Ct.autoUpdater.autoInstallOnAppQuit = o.IS_PROD, Ct.autoUpdater.forceDevUpdateConfig = this.forceDevUpdate, Ct.autoUpdater.logger = i();
                const n = P.latest;
                this.setChannel(n), this.isAutoUpdateEnabled && (this.configureUpdateEvents(), this.checkForUpdates().catch((() => {})))
            }
            installUpdate() {
                try {
                    Ct.autoUpdater.quitAndInstall()
                } catch (e) {
                    V.captureException(e)
                }
            }
            notifyWebAppAboutNewVersion() {
                if (!this.isUpdateDownloaded) return;
                const e = Ne();
                e && e.webContents.send(g.newDesktopVersionAvailable, {
                    type: A,
                    id: b(),
                    method: "newDesktopVersionAvailable",
                    data: {}
                })
            }
            configureUpdateEvents() {
                Ct.autoUpdater.on("error", (e => {
                    o.IS_PROD ? V.captureException(e) : console.error(`=> autoUpdater: Error in auto-updater. ${e.toString()}`)
                })), Ct.autoUpdater.on("update-downloaded", (e => {
                    if (this.isUpdateDownloaded = !0, Wt.emit("update-downloaded"), this.checkForUpdatesTimestamp) {
                        const e = Date.now() - this.checkForUpdatesTimestamp;
                        setTimeout((() => {
                            this.installUpdate()
                        }), e < 4e3 ? 4e3 - e : 0)
                    } else this.notifyWebAppAboutNewVersion()
                }))
            }
            isEnabled() {
                return this.isAutoUpdateEnabled
            }
            isAllowedToCheckForUpdates() {
                return this.isAutoUpdateEnabled && !this.isUpdateDownloaded
            }
            executeCheckForUpdates() {
                if (this.checkForUpdatesPromise) return this.checkForUpdatesPromise;
                const e = Ct.autoUpdater.checkForUpdates();
                return this.checkForUpdatesPromise = e, e.finally((() => {
                    this.checkForUpdatesPromise = null
                })), e
            }
            async checkForUpdates() {
                if (this.isAllowedToCheckForUpdates()) try {
                    const e = await this.executeCheckForUpdates();
                    if (null != e && e.downloadPromise) try {
                        await e.downloadPromise
                    } catch (e) {
                        (0, p.isNetworkError)(e) || V.captureException(e)
                    }
                } catch (e) {
                    (0, p.isNetworkError)(e) || V.captureException(e)
                }
            }
            checkForUpdatesManually(e) {
                if (this.isUpdateDownloaded) return void this.showNewUpdateAvailable();
                if (!this.isAllowedToCheckForUpdates()) return;
                this.executeCheckForUpdates().catch((() => {
                    this.showErrorCheckingVersionDialog()
                })), e.enabled = !1;
                const t = () => {
                        this.showAlreadyLatestVersionDialog(), e.enabled = !0, i()
                    },
                    n = () => {
                        this.checkForUpdatesTimestamp = Date.now(), this.showNewUpdateAvailable(), e.enabled = !0, i()
                    };

                function i() {
                    Ct.autoUpdater.off("update-not-available", t), Ct.autoUpdater.off("update-available", n)
                }
                Ct.autoUpdater.on("update-not-available", t), Ct.autoUpdater.on("update-available", n)
            }
            showAlreadyLatestVersionDialog() {
                const e = Ne();
                e && t.dialog.showMessageBox(e, {
                    type: "info",
                    buttons: ["ok"],
                    message: f().t("updateDialog.manualCheck.alreadyLatest"),
                    detail: f().t("updateDialog.manualCheck.currentVersion", {
                        version: t.app.getVersion()
                    }) || ""
                }).catch((() => {}))
            }
            showNewUpdateAvailable() {
                const e = Ne();
                e && t.dialog.showMessageBox(e, {
                    type: "info",
                    buttons: ["ok"],
                    message: f().t("updateDialog.manualCheck.newVersion"),
                    detail: f().t("updateDialog.manualCheck.currentVersion", {
                        version: t.app.getVersion()
                    }) || ""
                }).then((() => {
                    this.isUpdateDownloaded && this.installUpdate()
                })).catch((() => {}))
            }
            showErrorCheckingVersionDialog() {
                const e = Ne();
                e && t.dialog.showMessageBox(e, {
                    type: "error",
                    buttons: ["ok"],
                    message: f().t("updateDialog.manualCheck.error"),
                    detail: f().t("updateDialog.manualCheck.currentVersion", {
                        version: t.app.getVersion()
                    }) || ""
                }).catch((() => {}))
            }
            getChannel() {
                return Ct.autoUpdater.channel
            }
            setChannel(e) {
                Ct.autoUpdater.channel = e, this.checkForUpdates().catch((e => {
                    V.captureException(e)
                }))
            }
            hasDownloadedUpdate() {
                return this.isUpdateDownloaded
            }
        },
        Ut = {
            data: null
        },
        Pt = {
            data: null
        };

    function Lt() {
        if (!Pt.data) return 0;
        const {
            projects: e,
            labels: t,
            filters: n
        } = Pt.data;
        return e.length + t.length + n.length
    }
    const Ot = Tt().join(__dirname, "../../webpack/electron/resources"),
        Nt = Tt().join(__dirname, "../../../app.asar.unpacked/webpack/electron/resources"),
        xt = (() => {
            switch (process.platform) {
                case "win32":
                    return "windows/trayIcon.ico";
                case "darwin":
                    return "mac/trayIconTemplate.png";
                default: {
                    let icon = process.env.TODOIST_DARK_ICON === "1" ? "linux/trayIconDark.png" : "linux/trayIcon.png";
                    return icon
                }
            }
        })();

    function Bt(e) {
        const n = ["task-icon", e, t.nativeTheme.shouldUseDarkColors ? "dark" : "light"];
        return Tt().join(Ot, "tray-menu", n.join("-") + ".png")
    }

    function Ft() {
        const e = ["event-icon", "default", t.nativeTheme.shouldUseDarkColors ? "dark" : "light"];
        return Tt().join(Ot, "tray-menu", e.join("-") + ".png")
    }

    function zt() {
        return Tt().join(Ot, "tray-menu", t.nativeTheme.shouldUseDarkColors ? "more-icon-dark.png" : "more-icon-light.png")
    }
    const Ht = Tt().join(Ot, xt),
        qt = (Tt().join(Nt, "windows/notification.png"), Tt().join(Ot, "windows/jumplist-new-window.png"));
    const jt = require("electron-log");
    var Vt = e.n(jt);
    const Gt = require("node:fs/promises");
    var Qt = e.n(Gt);
    const Kt = require("node:path");
    var Yt = e.n(Kt);
    const Jt = new Map;

    function Zt(e, n) {
        i().info("Showing a notification of the type:", e.notification_type);
        const a = {
                title: e.title,
                body: e.body
            },
            r = "reminder" === e.notification_type;
        r && function(e, t) {
            if ("darwin" === process.platform) {
                const t = "12" === L.timeFormat ? f().t("reminders.notifications.actions.snooze.tomorrow12h") : f().t("reminders.notifications.actions.snooze.tomorrow24h");
                e.actions = [{
                    type: "button",
                    text: f().t("reminders.notifications.actions.complete") || ""
                }, {
                    type: "button",
                    text: f().t("reminders.notifications.actions.snooze.30Minutes") || ""
                }, {
                    type: "button",
                    text: f().t("reminders.notifications.actions.snooze.3Hours") || ""
                }, {
                    type: "button",
                    text: t
                }]
            } else "win32" === process.platform && (e.toastXml = `<toast activationType="protocol" launch="${o.OAUTH_TODOIST_URI_SCHEME}://notificationTask?id=${t.id}">\n        <visual>\n          <binding template="ToastText02">\n            <text id="1">${t.title}</text>\n            <text id="2">${t.body}</text>\n          </binding>\n        </visual>\n        <actions>\n          <action activationType="system" arguments="snooze" content="" />\n          <action content="${f().t("reminders.notifications.actions.complete")}" activationType="protocol" arguments="${o.OAUTH_TODOIST_URI_SCHEME}://completeItem?id=${t.id}" />\n        </actions>\n      </toast>`)
        }(a, e);
        const {
            notification: s,
            cleanReference: c
        } = function(e) {
            const n = b(),
                i = new t.Notification(e);

            function o() {
                ! function(e) {
                    Jt.delete(e)
                }(n)
            }
            return Jt.set(n, i), i.on("close", o), {
                notification: i,
                cleanReference: o
            }
        }(a);
        n && s.on("click", (() => {
            o.IS_WINDOWS && r || n(), c()
        })), "darwin" === process.platform && r && function(e, t, n) {
            "darwin" === process.platform && e.on("action", ((e, i) => {
                const o = Ne();
                switch (i) {
                    case 0:
                        o && v(o.webContents, String(t));
                        break;
                    case 1: {
                        const e = new Date((new Date).getTime() + 18e5);
                        o && S(o.webContents, String(t), e);
                        break
                    }
                    case 2: {
                        const e = new Date((new Date).getTime() + 108e5);
                        o && S(o.webContents, String(t), e);
                        break
                    }
                    case 3: {
                        const e = new Date;
                        e.setDate(e.getDate() + 1), e.setHours(9, 0, 0, 0), o && S(o.webContents, String(t), e);
                        break
                    }
                }
                n()
            }))
        }(s, e.id, c), s.show()
    }

    function Xt() {
        const e = de(),
            n = se(),
            i = le(),
            o = Ae(),
            a = me(),
            r = [];
        return r.push({
            label: $t(Boolean(e)),
            enabled: o,
            click: () => en(e, ce)
        }), r.push({
            label: tn(Boolean(n)),
            enabled: o,
            click: () => en(n, re)
        }), r.push({
            type: "separator"
        }), r.push({
            label: i ? (0, w.t)("troubleshooting.disableAppLoadRecovery") : (0, w.t)("troubleshooting.enableAppLoadRecovery"),
            enabled: o,
            click: () => en(i, ue)
        }), r.push({
            label: a ? (0, w.t)("troubleshooting.useRegularStartupFlow") : (0, w.t)("troubleshooting.useLegacyStartupFlow"),
            enabled: o,
            click: () => en(a, ge)
        }), _ && (r.push({
            type: "separator"
        }), r.push(function(e) {
            const t = he(),
                n = fe();
            return {
                label: (0, w.t)("troubleshooting.quickAddTitle"),
                submenu: [{
                    label: (0, w.t)("troubleshooting.prioritizeDragDrop"),
                    enabled: e,
                    type: "checkbox",
                    checked: Boolean(n),
                    click: () => en(n, we)
                }, {
                    label: (0, w.t)("troubleshooting.reloadQuickAddAlways"),
                    type: "checkbox",
                    checked: Boolean(t),
                    enabled: e,
                    click: () => en(t, pe)
                }]
            }
        }(o))), r.push({
            type: "separator"
        }), r.push({
            label: (0, w.t)("troubleshooting.downloadLogs"),
            click: () => {
                (async function() {
                    const e = `todoist-log-${function(){const e=new Date,t=nn(String(e.getUTCMonth()+1)),n=nn(String(e.getDate()));return`${e.getFullYear()}-${t}-${n}`}()}.txt`,
                        n = Yt().join(t.app.getPath("logs"), s);
                    try {
                        await Qt().access(n, Qt().constants.R_OK)
                    } catch (e) {
                        throw new Error(`Could not read log file. Trying to access it at ${s}. Error: ${String(e)}`)
                    }
                    const {
                        canceled: i,
                        filePath: o
                    } = await t.dialog.showSaveDialog({
                        title: (0, w.t)("troubleshooting.saveLogFileDialogTitle", {
                            lng: t.app.getLocale()
                        }),
                        defaultPath: Yt().join(t.app.getPath("downloads"), e)
                    });
                    i || await Qt().copyFile(n, o)
                })().catch((e => {
                    Vt().error(e), Zt({
                        id: "1",
                        title: "",
                        body: (0, w.t)("troubleshooting.downloadLogsError")
                    })
                }))
            }
        }), {
            label: (0, w.t)("troubleshooting.menuTitle"),
            submenu: r
        }
    }

    function $t(e) {
        return o.IS_MAS ? e ? (0, w.t)("troubleshooting.enableHardwareAccelerationMAS") : (0, w.t)("troubleshooting.disableHardwareAccelerationMAS") : e ? (0, w.t)("troubleshooting.enableHardwareAcceleration") : (0, w.t)("troubleshooting.disableHardwareAcceleration")
    }

    function en(e, n) {
        if (!Ae()) return;
        const i = n(!e);
        return i && o.IS_MAS ? (a = () => t.app.quit(), void t.dialog.showMessageBox({
            type: "info",
            buttons: ["ok"],
            message: (0, w.t)("troubleshooting.explanationMAS")
        }).then(a).catch((() => {}))) : i ? (t.app.relaunch(), void t.app.quit()) : void Zt({
            id: "1",
            title: "",
            body: (0, w.t)("misc.saveSettingError")
        });
        var a
    }

    function tn(e) {
        return o.IS_MAS ? e ? (0, w.t)("troubleshooting.enableAnimationsMAS") : (0, w.t)("troubleshooting.disableAnimationsMAS") : e ? (0, w.t)("troubleshooting.enableAnimations") : (0, w.t)("troubleshooting.disableAnimations")
    }

    function nn(e) {
        return 1 === e.length ? `0${e}` : e
    }

    function on(e, t) {
        const n = e.mainWindow.browserWindow;
        e && n && (y(n.webContents, t), He(n))
    }

    function an() {
        const e = Ne();
        e && e.isFocused() && e.isVisible() && e.webContents.navigationHistory.goBack()
    }

    function rn() {
        const e = Ne();
        e && e.isFocused() && e.isVisible() && e.webContents.navigationHistory.goForward()
    }
    const sn = function() {
            const e = Ne(),
                t = null == e ? void 0 : e.webContents.getURL();
            if (t) return new URL(t).pathname
        },
        cn = {
            0: {
                titlebarBackground: "#fcfaf8"
            },
            11: {
                titlebarBackground: "#262626"
            },
            2: {
                titlebarBackground: "#fafafa"
            },
            3: {
                titlebarBackground: "#fcfaf7"
            },
            5: {
                titlebarBackground: "#fcfcf8"
            },
            6: {
                titlebarBackground: "#f8fafb"
            },
            8: {
                titlebarBackground: "#f9f9fa"
            },
            12: {
                titlebarBackground: "#fbf8f8"
            },
            10: {
                titlebarBackground: "#fcfbf8"
            }
        };

    function dn(e) {
        return e && cn[e] ? cn[e].titlebarBackground : cn[0].titlebarBackground
    }
    let ln = !1;

    function un(e) {
        if (process.env.SNAP) {
            const n = Ne();
            if (!n) return;
            try {
                e()
            } catch (e) {
                ln || (ln = !0, 1 === t.dialog.showMessageBoxSync(n, {
                    type: "warning",
                    defaultId: 1,
                    message: (0, w.t)("app.snapTryRestart.message"),
                    buttons: [(0, w.t)("app.snapTryRestart.ignore"), (0, w.t)("app.snapTryRestart.quit")]
                }) && t.app.quit())
            }
        } else e()
    }

    function pn(e) {
        const t = e.getBounds(),
            n = O(e);
        return {
            position: [Math.round(t.x / n), Math.round(t.y / n)],
            size: [Math.round(t.width / n), Math.round(t.height / n)]
        }
    }

    function hn(e, t, n, i, o) {
        const a = e.bounds,
            r = e.scaleFactor,
            s = t * r,
            c = n * r,
            d = o * r;
        return !(s + i * r <= a.x || s >= a.x + a.width || c + d <= a.y || c >= a.y + a.height)
    }

    function wn(e, t) {
        e.isMaximized() && t.then((() => e.webContents.send(g.changeWindowState, {
            type: A,
            id: b(),
            method: "changeWindowState",
            data: "maximize"
        }))).catch((e => {
            V.captureException(e)
        }))
    }
    const fn = require("crypto");
    var gn = e.n(fn);
    const mn = require("querystring");
    var An = e.n(mn);

    function bn(e) {
        return e.toString("base64").replace(/\+/g, "-").replace(/\//g, "_").replace(/=/g, "")
    }
    class vn extends Error {
        constructor(...e) {
            super(...e), this.name = "NoStateInMemoryError"
        }
    }
    class yn extends Error {
        constructor(...e) {
            super(...e), this.name = "StateDoesNotMatchError"
        }
    }
    class Sn extends Error {
        constructor(...e) {
            super(...e), this.name = "NoCodeVerifierError"
        }
    }
    class kn extends Error {
        constructor(...e) {
            super(...e), this.name = "ReceivingAccessTokenError"
        }
    }
    class In extends Error {
        constructor(e, t, ...n) {
            super(...n), this.name = "PKCEServerError", this.message = `Status ${e} ${JSON.stringify(t)}`, this.statusCode = e, this.body = t
        }
        shouldCaptureDetails() {
            return 400 === this.statusCode
        }
        getDetails() {
            return {
                statusCode: this.statusCode,
                body: this.body
            }
        }
    }
    class En {
        constructor(e) {
            this.loginSession = {
                statesAndVerifiers: new Map
            }, this.clientID = e.clientID, this.requestCodeURL = e.requestCodeURL, this.requestTokenURL = e.requestTokenURL, this.redirectURI = e.redirectURI
        }
        getLoginURL(e) {
            const {
                prompt: t = "login",
                platform: n,
                showMagicLink: i = !1
            } = e || {}, o = bn(gn().randomBytes(32)), a = function(e) {
                var t;
                return bn((t = e, gn().createHash("sha256").update(t).digest()))
            }(o), r = (0, fn.randomUUID)();
            this.loginSession.statesAndVerifiers.set(r, o);
            const s = new URL(this.requestCodeURL.href);
            return s.searchParams.append("response_type", "code"), s.searchParams.append("code_challenge", a), s.searchParams.append("code_challenge_method", "S256"), s.searchParams.append("client_id", this.clientID), s.searchParams.append("redirect_uri", this.redirectURI), s.searchParams.append("state", r), s.searchParams.append("prompt", t), n && s.searchParams.append("platform", n), i && s.searchParams.append("show_magic_link", i.toString()), s
        }
        exchangeCodeForToken(e, n) {
            if (0 === this.loginSession.statesAndVerifiers.size) return Promise.reject(new vn);
            if (!this.loginSession.statesAndVerifiers.has(n)) return Promise.reject(new yn);
            const i = this.loginSession.statesAndVerifiers.get(n);
            if (void 0 === i) return Promise.reject(new Sn);
            const o = An().stringify({
                grant_type: "authorization_code",
                client_id: this.clientID,
                code: e,
                redirect_uri: this.redirectURI,
                code_verifier: i
            });
            return new Promise(((e, n) => {
                const i = t.net.request({
                    url: this.requestTokenURL.href,
                    method: "POST"
                });
                i.setHeader("Content-Type", "application/x-www-form-urlencoded"), i.on("response", (t => {
                    const i = [];
                    t.on("data", (e => {
                        i.push(e)
                    })), t.on("end", (() => {
                        try {
                            const o = JSON.parse(Buffer.concat(i).toString());
                            if (200 !== t.statusCode) return void n(new In(t.statusCode, o));
                            null != o && o.access_token ? e(o.access_token) : n(new kn)
                        } catch (e) {
                            n(e)
                        } finally {
                            this.loginSession.statesAndVerifiers.clear()
                        }
                    }))
                })), i.on("error", (e => {
                    n(e)
                })), i.write(o), i.end()
            }))
        }
    }
    let Tn;

    function Rn() {
        return Tn || (Tn = new En({
            clientID: $e,
            requestCodeURL: Ze,
            requestTokenURL: Xe,
            redirectURI: o.OAUTH_REDIRECT_URI
        })), Tn
    }

    function _n(e) {
        return new Promise((t => {
            e.webContents.once("did-finish-load", t)
        }))
    }
    async function Mn(e) {
        return 0 === await e.webContents.executeJavaScript("document.body.innerHTML.length")
    }

    function Cn(e) {
        if (e && e instanceof Error) {
            const t = "errno" in e && e.errno,
                n = "code" in e && e.code;
            if (t || n) return {
                code: t,
                description: n
            }
        }
        return null
    }
    class Wn {
        constructor(e, n = !1, a = !1) {
            const r = L.windowSize ?? [1200, 800],
                s = function(e = !1) {
                    if (!L.windowPosition) return;
                    if (!L.windowSize) return;
                    let [n, i] = L.windowPosition;
                    const [o, a] = L.windowSize;
                    e && (n += 24, i += 32);
                    const r = t.screen.getAllDisplays();
                    for (const e of r)
                        if (hn(e, n, i, o, a)) return [n, i]
                }(a),
                c = 11 === L.theme;
            this.webBridgeReady = new Promise((e => {
                this.isBridgeReadyPromiseResolve = e
            })), this.initializedPromise = new Promise((e => {
                this.initializedPromiseResolve = e
            })), this.webAppInitialized = new Promise((e => {
                this.webAppInitializedResolve = e
            }));
            const d = new t.BrowserWindow({
                webPreferences: {
                    nodeIntegration: o.DISABLE_SECURITY,
                    contextIsolation: !o.DISABLE_SECURITY,
                    preload: Tt().join(__dirname, "../../webpack/todoist-main-preload/preload.js")
                },
                backgroundColor: c ? "#282828" : "#fafafa",
                darkTheme: c,
                titleBarStyle: W,
                frame: !0,
                show: !1,
                accentColor: dn(L.theme)
            });
            var l;
            this.browserWindow = d,
                function(e, t, n) {
                    t && e.setPosition(t[0], t[1]),
                        function(e, t) {
                            const n = O(e);
                            e.setBounds({
                                x: Math.round(t.x * n),
                                y: Math.round(t.y * n),
                                width: Math.round(t.width * n),
                                height: Math.round(t.height * n)
                            })
                        }(e, {
                            x: (null == t ? void 0 : t[0]) ?? 0,
                            y: (null == t ? void 0 : t[1]) ?? 0,
                            width: Math.round(n[0]),
                            height: Math.round(n[1])
                        }), t || e.center()
                }(d, s, r), d.setMenuBarVisibility(!1), d.setMinimumSize(400, 320), d.excludedFromShownWindowsMenu = !0,
                function(e) {
                    e.webContents.setWindowOpenHandler((e => {
                        var t;
                        const n = e.url;
                        let a = null;
                        try {
                            a = new URL(n)
                        } catch {}
                        if (null !== (t = a) && void 0 !== t && t.host.endsWith("todoist.com")) {
                            const e = a.searchParams.get("platform"),
                                t = e ? {
                                    platform: e
                                } : {};
                            if ("/users/showlogin" === a.pathname || "/auth/login" === a.pathname) return i().info("Opening login URL in the browser"), je(Rn().getLoginURL({
                                ...t,
                                showMagicLink: !0
                            })), {
                                action: "deny"
                            };
                            if ("/users/showregister" === a.pathname || "/auth/register" === a.pathname) return i().info("Opening register URL in the browser"), je(Rn().getLoginURL({
                                prompt: "create",
                                ...t
                            })), {
                                action: "deny"
                            };
                            if (("premium" === a.pathname.split("/")[1] || "pricing" === a.pathname.split("/")[1]) && process.mas) return o.IS_MAS ? (0, h.proOpenWindow)() : je(tt), {
                                action: "deny"
                            }
                        }
                        return je(n), {
                            action: "deny"
                        }
                    }))
                }(d), d.webContents.on("will-navigate", ((e, t) => {
                    const n = new URL(t);
                    (function(e) {
                        const {
                            protocol: t
                        } = new URL(o.OAUTH_REDIRECT_URI);
                        return e.protocol === t || rt.includes(e.origin)
                    })(n) || (e.preventDefault(), i().info(`Disallowed navigation: ${n.hostname}`))
                })), d.on("closed", (() => {
                    this.browserWindow = void 0
                })),
                function(e) {
                    var t;
                    const n = (0, p.debounce)((() => {
                        const t = e();
                        t && N(t) && (D && t.isMaximized() || un((() => {
                            const {
                                position: e
                            } = pn(t);
                            L.windowPosition = e
                        })))
                    }), 100);
                    null === (t = e()) || void 0 === t || t.on("move", n)
                }((() => this.browserWindow)),
                function(e) {
                    var t;
                    const n = (0, p.debounce)((() => {
                        const t = e();
                        t && N(t) && (D && t.isMaximized() || un((() => {
                            const {
                                position: e,
                                size: n
                            } = pn(t);
                            L.windowPosition = e, L.windowSize = n
                        })))
                    }), 100);
                    null === (t = e()) || void 0 === t || t.on("resize", n)
                }((() => this.browserWindow)),
                function(e, t) {
                    wn(e, t), e.on("maximize", (() => {
                        wn(e, t), L.windowIsMaximized = !0
                    })), e.on("unmaximize", (() => {
                        t.then((() => {
                            N(e) && e.webContents.send(g.changeWindowState, {
                                type: A,
                                id: b(),
                                method: "changeWindowState",
                                data: "restore-down"
                            })
                        })).catch((e => {
                            V.captureException(e)
                        })), L.windowIsMaximized = !1
                    }))
                }(d, this.webAppInitialized), n ? null === (l = this.initializedPromiseResolve) || void 0 === l || l.call(this) : d.once("ready-to-show", (() => {
                    var e;
                    L.windowIsMaximized && d.maximize(), d.show(), null === (e = this.initializedPromiseResolve) || void 0 === e || e.call(this)
                }));
            const u = this.getInitialUrl(e);
            le() ? async function(e, t) {
                let n = null;
                for (let o = 0; o < 3; o++) try {
                    if (!N(e)) return;
                    i().info(`Loading the web app, attempt #${o+1}`);
                    const n = _n(e);
                    return await e.loadURL(t), await n, void i().info("Web app loaded successfully")
                } catch (t) {
                    if (n = Cn(t), await new Promise((e => setTimeout(e, 1e3))), !N(e)) return;
                    if (!await Mn(e)) return void i().info("The web app HTML body is not empty", n);
                    i().info("The web app HTML body is empty with the error: ", n)
                }
                N(e) && (await Mn(e) ? e.loadURL(function(e) {
                    const t = `\n        <!DOCTYPE html>\n        <html>\n        <head>\n            <meta charset="UTF-8">\n            <title>Todoist wasn't able to start properly.</title>\n            <style>\n            body { background-color: white; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Apple Color Emoji', Helvetica, Arial, sans-serif, 'Segoe UI Emoji', 'Segoe UI Symbol' }\n            .title { display: flex; align-items: center; margin-bottom: 40px; }\n            .title h1 { font-size: 28px; font-weight: 600; }\n            .content { max-width: 600px; margin-left: auto; margin-right: auto; }\n            .drag-handle { height: 100px; -webkit-app-region: drag; }\n            .logo { flex: 0 0 64px; height: 64px; width: 64px; margin-right: 20px; }\n            </style>\n        </head>\n        <body>\n            <div class="drag-handle"></div>\n            <div class="content">\n                <div class="title">\n                    \n<svg class="logo" width="64" height="64" xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd"><path class="logo_bg" d="M56.000016 0h-48c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8V8c0-4.4-3.6-8-8-8" fill="#E44332"></path><g class="logo_stripe" fill="#FFF"><path d="M13.672368 29.985936c1.1304-.65152 25.34368-14.58496 25.89952-14.90592.5544-.32016.58224-1.30224-.03824-1.65632-.62096-.35408-1.79984-1.02368-2.23856-1.28048-.44656-.26048-1.24976-.40528-1.99472.02384-.30928.1784-21.00256 12.0768-21.69424\n                        12.46992-.82784.47072-1.85248.4768-2.67744-.0008-.65152-.37696-10.92864-6.3488-10.92864-6.3488v5.39712c2.66016 1.54912 9.2744 5.40128 10.87744 6.30624.95664.54016 1.87232.52688 2.79488-.0048"></path><path d="M13.672368 40.76952c1.1304-.65152 25.34368-14.58496 25.89952-14.90592.5544-.32.58224-1.30224-.03824-1.65632-.62096-.35408-1.79984-1.02368-2.23856-1.28048-.44656-.26048-1.24976-.40528-1.99472.02384-.30928.1784-21.00256 12.0768-21.69424\n                        12.46992-.82784.47072-1.85248.4768-2.67744-.0008-.65152-.37696-10.92864-6.3488-10.92864-6.3488v5.39712c2.66016 1.54912 9.2744 5.40128 10.87744 6.30624.95664.54016 1.87232.52688 2.79488-.0048"></path><path d="M13.672368 51.55312c1.1304-.65152 25.34368-14.58496 25.89952-14.90592.5544-.32.58224-1.30224-.03824-1.65632-.62096-.35408-1.79984-1.02368-2.23856-1.28048-.44656-.26048-1.24976-.40528-1.99472.02384-.30928.1784-21.00256 12.0768-21.69424\n                        12.46992-.82784.47072-1.85248.4768-2.67744-.0008-.65152-.37696-10.92864-6.3488-10.92864-6.3488v5.39712c2.66016 1.54912 9.2744 5.40128 10.87744 6.30624.95664.54016 1.87232.52688 2.79488-.0048"></path></g></g></svg>\n\n                    <h1>Todoist wasn't able to start properly.</h1>\n                </div>\n                ${e?`<h2 class="error">${function(e){return`${e.code?`${e.code}: `:""}${e.description||""}`}(e)}</h2>`:""}\n\n                <p>\n                    <script>\n                        document.write("Current Internet connection status: " + (navigator.onLine ? 'online' : 'offline'));\n                    <\/script>\n                </p>\n\n                <p>Please <a target="_blank" rel="noopener noreferrer" href="https://todoist.com/contact">contact support</a> if the problem persists.</p>\n            </div>\n        </body>\n        </html>\n    `;
                    return `data:text/html;charset=utf-8,${encodeURIComponent(t)}`
                }(n)).catch((e => {
                    i().info("Failed to load error page with the error: ", e)
                })) : i().info("Failed to load the web app, but the page is not empty.", n))
            }(d, u).catch((() => {})): d.loadURL(u).catch((e => {
                e && e instanceof Error && "errno" in e && -3 === e.errno || V.captureException(e, {
                    tags: {
                        action: "load_main_window"
                    }
                })
            }))
        }
        getInitialUrl(e) {
            if (e) return pt(e).href;
            const t = ie.getApiToken();
            return me() ? (i().info("Using legacy startup flow"), dt({
                token: t
            }).href) : t ? (i().info("Found saved session, opening the app directly"), pt("").href) : dt().href
        }
        savePositionSettings() {
            this.initializedPromise.then((() => {
                un((() => {
                    if (this.browserWindow && !this.browserWindow.isDestroyed()) {
                        const {
                            position: e,
                            size: t
                        } = pn(this.browserWindow), n = this.browserWindow.isMaximized();
                        if (L.windowIsMaximized = n, n && D) return;
                        L.windowPosition = e, L.windowSize = t
                    }
                }))
            })).catch((() => {}))
        }
        setWebBridgeReady() {
            var e;
            null === (e = this.isBridgeReadyPromiseResolve) || void 0 === e || e.call(this)
        }
        setWebAppInitialized() {
            var e, t;
            i().info("Setting web app initialized"), null === (e = this.webAppInitializedResolve) || void 0 === e || e.call(this);
            const n = null === (t = this.browserWindow) || void 0 === t ? void 0 : t.webContents;
            n && !n.isDestroyed() && n.navigationHistory.clear()
        }
        closeBrowserWindow() {
            var e;
            null === (e = this.browserWindow) || void 0 === e || e.destroy(), this.browserWindow = void 0
        }
    }

    function Dn() {
        return {
            role: "editMenu",
            label: f().t("mainMenu.edit.edit"),
            submenu: [{
                role: "cut",
                label: f().t("mainMenu.edit.cut")
            }, {
                role: "copy",
                label: f().t("mainMenu.edit.copy")
            }, {
                role: "paste",
                label: f().t("mainMenu.edit.paste")
            }, {
                role: "pasteAndMatchStyle",
                accelerator: "CmdOrCtrl+Shift+V",
                label: f().t("mainMenu.edit.pasteAndMatchStyle")
            }, {
                role: "selectAll",
                label: f().t("mainMenu.edit.selectAll")
            }, {
                label: "Substitutions",
                submenu: [{
                    role: "showSubstitutions"
                }, {
                    type: "separator"
                }, {
                    role: "toggleSmartQuotes"
                }, {
                    role: "toggleSmartDashes"
                }, {
                    role: "toggleTextReplacement"
                }]
            }]
        }
    }

    function Un() {
        return Be() ? {
            role: "fileMenu",
            label: f().t("mainMenu.file.file"),
            submenu: [{
                label: f().t("mainMenu.file.openInNewWindow"),
                accelerator: "CmdOrCtrl+Shift+N",
                click: (e, t, n) => {
                    ! function(e) {
                        const t = sn();
                        Zn(e.triggeredByAccelerator, t), Kn(sn())
                    }(n)
                },
                enabled: Qn()
            }, {
                label: f().t("mainMenu.file.newHomeWindow"),
                accelerator: "CmdOrCtrl+Shift+Option+N",
                click: (e, t, n) => {
                    ! function(e) {
                        Zn(e.triggeredByAccelerator), Kn()
                    }(n)
                },
                enabled: Qn()
            }, {
                role: "close"
            }]
        } : {
            role: "fileMenu",
            submenu: [{
                role: "close"
            }]
        }
    }

    function Pn() {
        return {
            role: "help",
            label: f().t("mainMenu.help.help"),
            submenu: [{
                label: f().t("mainMenu.help.helpCenter"),
                click: () => je(nt)
            }, {
                label: f().t("mainMenu.help.changelog"),
                click: () => je(ot)
            }, {
                type: "separator"
            }, {
                label: f().t("mainMenu.help.contactSupport"),
                click: () => je(it)
            }, {
                label: f().t("mainMenu.help.sendFeedback"),
                click: () => {
                    je(ct(Ve() || "").href)
                }
            }, Xt()]
        }
    }

    function Ln(e) {
        return {
            role: "appMenu",
            submenu: [{
                role: "about",
                label: f().t("mainMenu.app.about")
            }, {
                type: "separator"
            }, {
                label: f().t("mainMenu.app.preferences"),
                accelerator: "CmdOrCtrl+,",
                click: () => {
                    bt()
                },
                enabled: e
            }, {
                label: f().t("mainMenu.app.clearCache"),
                click: () => {
                    St().catch((() => {}))
                }
            }, {
                type: "separator"
            }, ...o.IS_MAS ? [] : [Dt.hasDownloadedUpdate() ? {
                label: f().t("updateDialog.manualCheck.restart"),
                click: e => {
                    try {
                        e.enabled = !1, Dt.installUpdate()
                    } catch (t) {
                        i().error("Failed to install the update with the error:", t), e.enabled = !0
                    }
                }
            } : {
                label: f().t("updateDialog.manualCheck.button"),
                click: e => {
                    Dt.checkForUpdatesManually(e)
                }
            }, {
                type: "separator"
            }], {
                label: f().t("mainMenu.app.todoistPremium"),
                click: () => {
                    bt("subscription")
                },
                enabled: e
            }, {
                type: "separator"
            }, {
                role: "hide",
                label: f().t("mainMenu.app.hide")
            }, {
                role: "hideOthers",
                label: f().t("mainMenu.app.hideOthers")
            }, {
                role: "unhide",
                label: f().t("mainMenu.app.unhide")
            }, {
                type: "separator"
            }, {
                role: "quit",
                label: f().t("mainMenu.app.quit")
            }]
        }
    }
    const On = "navigateBackItemId",
        Nn = "navigateForwardItemId";
    let xn, Bn;

    function Fn(e) {
        const t = e || function() {
            const e = Ne();
            return e && e.isFocused() && e.isVisible() ? e.webContents : null
        }();
        return t && Ce() ? {
            canGoBack: t.navigationHistory.canGoBack(),
            canGoForward: t.navigationHistory.canGoForward()
        } : {
            canGoBack: !1,
            canGoForward: !1
        }
    }

    function zn() {
        const e = Fn();
        return {
            role: "viewMenu",
            label: f().t("mainMenu.view.view"),
            submenu: [{
                label: f().t("mainMenu.view.back"),
                accelerator: o.IS_MAC ? "Cmd+[" : "Alt+Left",
                click: an,
                enabled: e.canGoBack,
                id: On
            }, {
                label: f().t("mainMenu.view.forward"),
                accelerator: o.IS_MAC ? "Cmd+]" : "Alt+Right",
                click: rn,
                enabled: e.canGoForward,
                id: Nn
            }, {
                type: "separator"
            }, {
                role: "reload",
                label: f().t("mainMenu.view.reload")
            }, {
                role: "resetZoom",
                accelerator: "CmdOrCtrl+0",
                label: f().t("mainMenu.view.resetZoom")
            }, {
                role: "zoomIn",
                accelerator: o.IS_MAC ? "CmdOrCtrl+Plus" : "CmdOrCtrl+=",
                label: f().t("mainMenu.view.zoomIn")
            }, {
                role: "zoomOut",
                accelerator: "CmdOrCtrl+-",
                label: f().t("mainMenu.view.zoomOut")
            }, {
                role: "toggleDevTools",
                label: f().t("mainMenu.view.toggleDevTools")
            }, {
                role: "togglefullscreen",
                label: f().t("mainMenu.view.toggleFullScreen")
            }]
        }
    }

    function Hn() {
        var e;
        return {
            role: "windowMenu",
            label: f().t("mainMenu.window.window"),
            submenu: [{
                role: "minimize",
                label: f().t("mainMenu.window.minimize")
            }, {
                type: "separator"
            }, {
                label: f().t("mainMenu.window.floatOnTop"),
                accelerator: o.IS_MAC ? "CmdOrCtrl+Option+F" : "ctrl+f11",
                type: "checkbox",
                click: () => {
                    const e = Ne();
                    e && Yn(e.id)
                },
                checked: null === (e = Ne()) || void 0 === e ? void 0 : e.isAlwaysOnTop()
            }].concat(qn())
        }
    }

    function qn() {
        const e = [];
        if (!Be) return e;
        const t = Le();
        return t.length <= 1 || (e.push({
            type: "separator"
        }), t.forEach((t => {
            var n;
            e.push({
                label: (null === (n = t.mainWindow.browserWindow) || void 0 === n ? void 0 : n.title) ?? "Todoist",
                type: "checkbox",
                click: () => {
                    var e;
                    e = t, ke() || Le().includes(e) && (xe(e), jn(), gt())
                },
                checked: Oe() === t
            })
        }))), e
    }

    function jn() {
        const e = o.IS_MAC ? t.Menu.buildFromTemplate(function(e) {
            return [Ln(e), Un(), Dn(), zn(), Hn(), Pn()]
        }(Ce())) : o.IS_WINDOWS || o.IS_LINUX ? t.Menu.buildFromTemplate([Un(), Dn(), zn(), Hn(), Pn()]) : null;
        e && t.Menu.setApplicationMenu(e),
            function(e) {
                const t = !!e && function(e) {
                    const t = e.items.find((e => {
                        var t;
                        return "viewmenu" === (null === (t = e.role) || void 0 === t ? void 0 : t.toLowerCase())
                    }));
                    return !(null == t || !t.submenu || (xn = t.submenu.items.find((e => e.id === On)), Bn = t.submenu.items.find((e => e.id === Nn)), 0))
                }(e);
                t || (xn = void 0, Bn = void 0)
            }(e)
    }

    function Vn(e) {
        var t;
        null === (t = e.mainWindow.browserWindow) || void 0 === t || t.on("close", (t => {
            const n = e.mainWindow.browserWindow;
            if (!n) return;
            if (ke()) {
                try {
                    e.mainWindow.closeBrowserWindow()
                } catch (e) {}
                return
            }
            if (1 === Le().length) {
                if (R || L.stayInTray) return t.preventDefault(), void("darwin" === process.platform && n.isFullScreen() ? (n.blur(), n.once("leave-full-screen", (() => n.hide())), n.setFullScreen(!1)) : n.hide());
                o.IS_LINUX || null === (a = Ee()) || void 0 === a || a.closeBeforeExit()
            }
            var a;
            const r = e.timestamp;
            (function(e) {
                i().info("Closing a window");
                const t = Le().find((t => t.id === e));
                if (De.windows = De.windows.filter((t => x(t) ? t.id !== e : (z({
                        level: "info",
                        fingerprint: "invalid-window",
                        message: "Invalid window in a list when removing one"
                    }), !1))), !t) return;
                if (Ue.emit("window-removed", {
                        window: t,
                        count: De.windows.length
                    }), ke()) return ze(null), void xe(null);
                if (De.mainLogicWindow === t.mainWindow) {
                    const e = Le();
                    if (0 !== e.length && e[0]) {
                        const t = e[0];
                        var n;
                        x(t) && t.mainWindow.browserWindow ? (ze(t.mainWindow), (null === (n = t.mainWindow.browserWindow) || void 0 === n ? void 0 : n.webContents).send(g.setMainLogicWindow, {
                            type: A,
                            id: b(),
                            method: "setMainLogicWindow"
                        })) : (z({
                            level: "warn",
                            fingerprint: "invalid-window",
                            message: "Trying to set invalid window as a main logic window"
                        }), ze(null))
                    } else ze(null)
                }
                const o = Oe();
                if ((null == o ? void 0 : o.id) === e) {
                    if (0 === De.windows.length) return void xe(null);
                    xe(function() {
                        const e = Le();
                        return 0 === e.length ? null : e[e.length - 1] ?? null
                    }())
                }
            })(n.id),
            function(e) {
                const t = Oe(),
                    n = null == t ? void 0 : t.mainWindow.browserWindow;
                t && n && t.mainWindow.webAppInitialized.then((() => {
                    var t;
                    t = Math.floor((Date.now() - e) / 1e3), n.webContents.send(g.sendCloseWindowAnalytics, {
                        type: A,
                        id: b(),
                        method: "sendCloseWindowAnalytics",
                        data: {
                            durationInSeconds: t
                        }
                    })
                })).catch((() => {}))
            }(r)
        }));
        const n = e.mainWindow.browserWindow;
        n && (n.on("focus", (() => {
            ke() || (xe(e), o.IS_MAC && jn())
        })), n.webContents.on("page-title-updated", (() => {
            ke() || o.IS_MAC && jn()
        })), n.on("enter-full-screen", (() => {
            k(n.webContents, !0)
        })), n.on("leave-full-screen", (() => {
            k(n.webContents, !1)
        })), n.webContents.on("did-navigate-in-page", (() => {
            ! function() {
                const e = Fn();
                xn && (xn.enabled = e.canGoBack), Bn && (Bn.enabled = e.canGoForward)
            }(),
            function(e, t) {
                e.send(g.sendHistoryState, {
                    type: A,
                    id: b(),
                    method: "sendHistoryState",
                    data: t
                })
            }(n.webContents, Fn(n.webContents))
        })))
    }
    const Gn = 1e3;

    function Qn() {
        if (ke()) return !1;
        const e = Le().length;
        return !(e > 0 && !Be() || (e >= Gn ? (i().info("Reached max amount of windows:", Gn), 1) : !Ce() && e > 0 && (i().info("Not allowed to open multiple windows when not logged in"), 1)))
    }

    function Kn(e) {
        if (!Qn()) return;
        let t = !1;
        process.argv.includes("--hidden") && 0 === Le().length && (i().info("Opening new window in the hidden mode"), t = !0);
        const n = function(e) {
            if (!e) return null;
            const t = Le();
            if (1 === t.length) {
                const n = t[0];
                if (!x(n)) return null;
                const i = null == n ? void 0 : n.mainWindow.browserWindow;
                if (!i) return null;
                const o = i.isVisible(),
                    a = i.isMinimized();
                if (!o && !a) return on(n, e), ft(i), n
            }
            return null
        }(lt(e));
        if (n) return n;
        const o = new Wn(e, t, Boolean(Le().length));
        if (!o.browserWindow) {
            const e = new Error("Not possible to open a new window: BrowserWindow is missing");
            throw V.captureException(e), e
        }
        const a = {
                id: o.browserWindow.id,
                mainWindow: o,
                timestamp: Date.now()
            },
            r = Ne();
        return null != r && r.isAlwaysOnTop() && (o.browserWindow.setAlwaysOnTop(!0), a.mainWindow.webAppInitialized.then((() => {
                Jn(a, !0)
            })).catch((() => {}))),
            function(e) {
                0 === Le().length && ze(e.mainWindow), De.windows.push(e), xe(e), Ue.emit("window-added", e)
            }(a), Vn(a), i().info("Opening new window"), a
    }

    function Yn(e) {
        const t = Le().find((t => t.id === e)),
            n = null == t ? void 0 : t.mainWindow.browserWindow;
        if (!n) return;
        const i = !n.isAlwaysOnTop();
        n.setAlwaysOnTop(i), Jn(t, i)
    }

    function Jn(e, t) {
        const n = e.mainWindow.browserWindow;
        n && n.webContents.send(g.setFloatWindow, {
            type: A,
            id: b(),
            method: "setFloatWindow",
            data: t
        })
    }

    function Zn(e, t) {
        const n = Oe(),
            i = null == n ? void 0 : n.mainWindow.browserWindow;
        n && i && n.mainWindow.webAppInitialized.then((() => {
            ! function(e, t, n) {
                e.send(g.sendNewWindowOpenAnalytics, {
                    type: A,
                    id: b(),
                    method: "sendNewWindowOpenAnalytics",
                    data: {
                        method: t,
                        pathname: n
                    }
                })
            }(i.webContents, e ? "keyboard_shortcut" : "file_menu", t)
        })).catch((() => {}))
    }

    function Xn(e, t = !1) {
        const n = Oe();
        n ? Be() && !t ? Kn(e) : on(n, lt(e)) : Kn(e)
    }

    function $n() {
        return !Ce() || ((null === (e = Ut.data) || void 0 === e ? void 0 : e.isEmpty) ?? 1) ? [] : [{
            type: "separator"
        }, ...((null === (t = Ut.data) || void 0 === t ? void 0 : t.groups) ?? []).map(ei).flat()];
        var e, t
    }

    function ei(e) {
        return [{
            label: e.title,
            enabled: !1
        }, ...e.events.map(ni), ...e.tasks.map(ti)]
    }

    function ti(e) {
        return {
            label: ii(e.content),
            icon: t.nativeImage.createFromPath("more" === e.id ? zt() : oi(e.priority)),
            click: () => ai(e.href)
        }
    }

    function ni(e) {
        return {
            label: e.timeText ? `${e.timeText} ${ii(e.content)}` : ii(e.content),
            icon: t.nativeImage.createFromPath("more" === e.id ? zt() : Ft()),
            click: () => ai(e.href)
        }
    }

    function ii(e, t = 50) {
        if (e.length <= t) return e;
        const n = e.slice(0, t - 1);
        return n.slice(0, n.lastIndexOf(" ")) + "…"
    }

    function oi(e) {
        switch (e) {
            case 4:
                return Bt("p1");
            case 3:
                return Bt("p2");
            case 2:
                return Bt("p3");
            default:
                return Bt("default")
        }
    }

    function ai(e) {
        e.startsWith("/app/") ? Xn(e, o.IS_MAC) : je(e)
    }

    function ri() {
        return Ce() ? {
            label: f().t("tray.navigation.favourites"),
            submenu: 0 === Lt() ? [{
                label: f().t("tray.navigation.noFavourites"),
                enabled: !1
            }] : si({
                favourites: Pt.data
            })
        } : null
    }

    function si({
        favourites: e
    }) {
        if (!e) return [];
        const {
            projects: t,
            labels: n,
            filters: i
        } = e;
        return [...t.map((e => ({
            label: e.name,
            click: () => {
                Xn(wt(e.id))
            }
        }))), ...n.map((e => ({
            label: e.name,
            click: () => {
                Xn(function(e) {
                    if (!Qe(e)) throw new Error("Invalid labelId");
                    return `/app/label/${e}`
                }(e.id))
            }
        }))), ...i.map((e => ({
            label: e.name,
            click: () => {
                Xn(function(e) {
                    if (!Qe(e)) throw new Error("Invalid filterId");
                    return `/app/filter/${e}`
                }(e.id))
            }
        })))]
    }
    const ci = {
            inbox: !0,
            today: !0,
            upcoming: !0,
            filters_and_labels: !0,
            completed: !0,
            browse_templates: !1
        },
        di = {
            data: {
                ...ci
            }
        };

    function li(e) {
        return di.data[e]
    }

    function ui() {
        const e = [];
        return Ce() ? (li("inbox") && e.push({
            label: f().t("tray.navigation.inbox"),
            click: () => {
                Xn("/app/inbox")
            }
        }), li("today") && e.push({
            label: f().t("tray.navigation.today"),
            click: () => {
                Xn("/app/today")
            }
        }), li("upcoming") && e.push({
            label: f().t("tray.navigation.upcoming"),
            click: () => {
                Xn("/app/upcoming")
            }
        }), li("filters_and_labels") && e.push({
            label: f().t("tray.navigation.filtersLabels"),
            click: () => {
                Xn("/app/filters-labels")
            }
        }), li("completed") && e.push({
            label: f().t("tray.navigation.completed"),
            click: () => {
                Xn("/app/activity?eventType=item:completed")
            }
        }), e) : e
    }
    const pi = {
        data: null
    };

    function hi() {
        return Ce() ? {
            submenu: wi({
                workspaces: pi.data
            }),
            label: f().t("tray.navigation.workspaces")
        } : null
    }

    function wi({
        workspaces: e
    }) {
        return [{
            label: f().t("tray.navigation.myProjects"),
            click: () => {
                Xn("/app/projects")
            }
        }, ...(e ?? []).map((e => ({
            label: e.name,
            click: () => {
                Xn(function(e) {
                    if (!Qe(e)) throw new Error("Invalid workspaceId");
                    return `/app/${e}/projects`
                }(e.id))
            }
        })))]
    }

    function fi() {
        return Ce() ? {
            label: f().t("tray.quickAdd"),
            click: () => At(),
            accelerator: L.getGlobalShortcut("quick_add") ?? void 0
        } : null
    }

    function gi() {
        return Ce() ? {
            label: f().t("tray.quickAddRamble"),
            click: () => At({
                startInRambleMode: !0
            }),
            accelerator: L.getGlobalShortcut("quick_add_ramble") ?? void 0
        } : null
    }

    function mi() {
        return {
            label: f().t("tray.openTodoist"),
            click: () => gt(),
            accelerator: L.getGlobalShortcut("activate") ?? void 0
        }
    }

    function Ai() {
        return Ce() ? {
            label: f().t("tray.settings"),
            click: () => bt()
        } : null
    }

    function bi() {
        return {
            label: `${f().t("tray.viewChangelog")} • v${t.app.getVersion()}`,
            click: () => je(ot)
        }
    }

    function vi() {
        return {
            label: f().t("tray.quit"),
            click: () => t.app.quit()
        }
    }

    function yi() {
        return {
            label: f().t("tray.stayRunningInTray"),
            type: "checkbox",
            checked: L.stayInTray,
            click: e => {
                e.checked = !L.stayInTray, un((() => {
                    L.stayInTray = e.checked
                }))
            }
        }
    }

    function Si() {
        return o.IS_MAS || o.IS_SNAP || o.IS_MSIX ? null : Dt.hasDownloadedUpdate() ? {
            label: f().t("updateDialog.manualCheck.restart"),
            click: e => {
                try {
                    e.enabled = !1, Dt.installUpdate()
                } catch (t) {
                    i().error("Failed to install the update with the error:", t), e.enabled = !0
                }
            }
        } : {
            label: f().t("updateDialog.manualCheck.button"),
            click: e => Dt.checkForUpdatesManually(e)
        }
    }

    function ki() {
        return {
            label: f().t("mainMenu.app.clearCache"),
            click: () => {
                St().catch((() => {}))
            }
        }
    }

    function Ii() {
        return {
            label: f().t("mainMenu.help.sendFeedback"),
            click: () => je(ct(Ve() || ""))
        }
    }

    function Ei(e) {
        return null !== e
    }
    let Ti = null,
        Ri = null;

    function _i() {
        (L.getPreference("show_in_menu_bar") ?? 1) && !Ti && (Ti = function() {
            try {
                return new t.Tray(Ht)
            } catch (e) {
                if (String(e).startsWith("Error: Failed to load image from path")) {
                    z({
                        level: "warn",
                        fingerprint: "tray-failed-image-load",
                        message: "Tray service failed to load the image"
                    });
                    try {
                        return new t.Tray(function() {
                            switch (process.platform) {
                                case "win32":
                                    return t.nativeImage.createFromDataURL("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAAAsTAAALEwEAmpwYAAAH+ElEQVR4nK2XeXAT1wHGF2jpH5QUkmEK5fBQYwyWtZIP+VrJkiVkkPEh2wjb2MaEdAgMYkibNCkTEiUzSUib0rQkaUimSTOhhqknzRAK5XIwh40N+JBtGSxjG9/GJ/J96Elf560OJMukTGFnvnn39/t29faNlmFmuWAwzIVON++pymCYOxvL6wLDzHmsif/nxd8Yw8x51PgcgwM+92qSkm3JTN7Svi0ltz0refsTKSMxtyVz85bSJCVLvZ0M7xBwdMz5q1S6eDBHmz/1vM6OXVnA7uwZypml7zG0KwvUczAnNZ8yKMvrSRTodPNoZ9+25OPYk42pHelkIi+NTGxPs07kpVsntjuVl+YsnXKNu9uueTP68tII9aTelEFZTibD/y60PC6NjBzPTbWO5mjtVGM5WozlUqU6Sy3GaT3H1fewfywvHeN56R59znG3hxYjTl/KOK6IjHSz4UxySS3Ls21PxfC2JDKyLRmPpRwtRrKTMaxVYShFieGMzT84n3pTxhW1LI8PoNPNcwe4Gi/dg1wtHmQkEEvmZlANeZRe9awkDGUnw5KixIBWhZGPPsDYsS9geV6Hoa0aWLISMdOD6kFmAsF2LSjLJ0ChMmKvPTcFAxkaMqjTwKFNGNzqqmv4+oPMRAymqtCn4TD42j5MVlcCsINelmN/Q2+CjN7Ew7Ue6wd0m4gtOwmF6ui9PgHOxMv0k9o49CbJSf9WDfq2bERfejz6XdqqQX+aGj3xUejdmYHR86dht1p58ISpGncPvgJzkhI9aeqHa2aoN01NrJmbcU4ZoX8YAOADXC8q0qP0Krqyk0m3SoJerQq9dJFjIe6rI9Gdpobl70dBLA94sLWzHa2ffIjyBDnqZGJ0pijRQ9elOtTjlKt9P0VJprZuxDn5LAHKrl3RU9PpgX4ycPQv6EiUo0slQZc6Eu3xUeh753VM3WvmwfbhIfR8cwIVmSkoF/0SzRopOnWb0KmOoBB0J8fNqq4kBRlPV+OMLMwjQEEBHyA/Q6ufOHMS9rFRQiGTDfXoMbyK7pf3YOzGdR4MqxWWa0Wo3vsCSsMCUBcVhPtvvIJJ8x3Yhyzof9+ANpUEnckKdCbGOiV31zs2y8hoqgr/5kI8AugYPsBXq5foTRHrUL3/RTJcVgzYbLzshM+Dyfo61L91ACUxLCpZP7T+KhOjxUWw2+2AjWC01oimV/VoVoajPTEWbQlStCdI+dKlVg1HhlIU+I4T+T6BC2+/oR/ctxM3ApeSYqkY5kMGTNXXwdbWgntHj6AknkPpumUwJykw+M9jsI2N8cGmmhpgfu9NFMeGoSZagHsbo9HyCN2LjyIPEmX4Lip4lj1w6xa/B3q/+pzc3hiN4oCfoywxDje3JOBq4C9QExOM7sPvYPp+Fw+29feh7cujKNbEojhwGUyStWhShaNZHemhCK924wYJ6dfE4NuIIN8AhZ8e0WNynHqTqY5WdLx7ENURgagS+aHl17swbqp27IPJCfT95xTKslNRtHYpKsPWoOvQm+j59M9oTJTjriIUjSoJGlXhuKsMx11VOF+naogLIz3xkfgmbJ3e5xw44r9Mf3tnBgYuXSCYnuJZoxU3Ybl6CXbieN9HKm6i6qXdKAz2w/XApWh8MRcjFTcAug8AdH92BKbwNWhQhcOsCIFZEeoUrYegXi4m3RvCURAS4BsgPyJYXyNYjguCVaT6tf0Yr61yG0+3NqP+/bdRGClA0apFMNEj+NS/YJue5sfHaqtg/M0elHIsTFIWd2JFuB1LS2dd5pSUJZ3KUJwQBfj+BNcKC/XWS+dRpY4i3698BoUxItz90yG0fP4xLm+S4cKKhSiPFqDzk8OwDg44D6IONPzxPVyMYXFZsALG6CCYpELUSYV86aq7ZOKCSbtcjBMi/9kOomv8Jpzs6yXtHx7CTUkgCv0W4eLqZ1EiWInmA/sx3tTg2Acjw+g48TUuJyhwcf1ylEeugylW5IY+SrVcMGlTiJHvFaDA8Rp+qdXoR09/C0yM8y/+2B0T/16bd+fCUnLFASYEg5cLcX1HBs4FrUJpqD9qZCLUSlnUUsBMcd7tmphg0uoTQOc4iD5evURfIvbHjd07yFBZCf/72z0Ooon6Ohh/9xLOhgTgitAPVVKWh9dIhajmHKqhknqK9WobOSG5pwiZGUDn2IQhAfpGuRiXBCvJWcl61L51AJPm27C1t6Dho8M4Lwt1PO5oAQ/moS64lHXKVZ8x5gxojBGSZkUIvp4twD9E/nub5GIYZSJyMyoIF9Ytx/cbonE5UYmz65ejVBKI6lgxjBxL78QpFkapEFWcQ0Yp6z1O2+4+ls4hTQoxKMsnwBeC1S/ciRXzk+jjrZKJUCYJxPWwtaiUifhH7gLxdZc82zzEYx43oz+GJZRBWe4ABobh/6f/1n95nJFjrRWc0F7OCe2VnBCVUhEfpJJjPSR01yu8+n1V4TGXelJvyqAs/juE4dkMo2OY+QzDPHtOEnSyLS6MQkg5J7SV0zLmKYhjbZUcS1rjQnFeEnSSspxMx6Vj+DdhgWjxAsGp8MDTtzjWbooVwyynx6dD5icQ9aKe1Fu0YIGAspxM90W/UuYvZpifMQyzImvZc9p3A1a8/IdAv9c/WL/q4A/p9/9jjHpQL+pJvZ0Mevc+34hzwhjmx0FLlvyUYZiFDMM8wzgmL3pCUQ/qtZB6U8ZscK8gBob5kSEoaP6+NWt+8jREvajnbOD/Ahx+/guF3rMfAAAAAElFTkSuQmCC");
                                case "darwin":
                                    return function() {
                                        const e = t.nativeImage.createEmpty(),
                                            n = t.nativeImage.createFromDataURL("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAAXNSR0IArs4c6QAAAERlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAA6ABAAMAAAABAAEAAKACAAQAAAABAAAAEKADAAQAAAABAAAAEAAAAAA0VXHyAAABM0lEQVQ4EaXTP0tCURjH8YOgYC1iZBBIk0MQDS29AMEhaAta8iUo0VpbY7XVUltvodHBaLGhJaKgFlFpjcQkMLO+v1MH4nC8l/DAh3vvef7w6D3XmJ9V5NJAH18xlKNc1dilm3fEFfpx1dgm6uYH/efPMTmqjRy7SXwDGbThN+4n2KzDX/qde1jEB26Qh7+mtJHGGh4xwjnmsYQa3nAJxfwJ9Gxa2EQKKsziGAP8bdbhOdhgm8ArrnCAF1xjFTM4wRChYjvBCsFZnOIOW0iiAtds9/c+1MSOekZCDlol3OMZZahZFT0EGywTqKOLW+iA7GMaavaAUKHbMzsk6A/U+z7CAgq4gEuKutqD9ETyOuZwCL2BqCIX03mxH4bb+O/VHuWJPyZNoSbqppHiplCOclVjvgFIIcGz41gIrgAAAABJRU5ErkJggg=="),
                                            i = t.nativeImage.createFromDataURL("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAAXNSR0IArs4c6QAAAERlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAA6ABAAMAAAABAAEAAKACAAQAAAABAAAAIKADAAQAAAABAAAAIAAAAACshmLzAAADC0lEQVRYCb2WW4hNURjH93G/DHFcJimlcYkHKQ9eeJCayeUB8eJhxCgykiIppbwoJXIpUZRHD0qiDGKe8MCDKCExqWHCuDTuBr//nvNt3zlzzj5nn+Ocr35nfWut77LWt9deZ6eCbEnTbYEmmA7jYBgMhHKkF6dv8A6eQhuchm7oJ42MdMGfKqMc2mCWKPlvqHZyi69c0SJU9lrs3JJbq5xpPdutsAJqLSNJ2D2An6gUFa5AO/qVMIYefdABVpZy2k7810EKGuA2lBpHuYOeBA4+sF6v/VAHJpNRboK3i9OVO/icwMGCncdnqpwzortiDyTdTPjIdOFcAgse197HbhF4WU3nOcT5xc1FsZaiPS4Q6A3jm8DfiHPpt0Nc8FLmghkEMRmMshM+gpx/wCEYAyYTUE6BrllLoMo0wzH46cZtPq4NkxzEaTSY1KNsgGk2QKvF7YAPYAFVmc3gK3PYzZtdXBsF03u8EXQ35MoyBvzjUWWUyFdmIv3cysQltrngBI46jTZwD30BSGbBFbA5tZdhJpgMQcmtjLcvpodx5vDbDt74JX3/B/WI/hLwspzOE/B+SXUfL1hD70VOwPf0t4POgEm+yjxg8hMkXsA5nKZYZNrhsBe04+MwHkzGohwBf9J9ZfSGXIMkiwiNv+C0D0ZAPtEp3wJvwYLnq8xs5u86G7ONa7PKpue+FrwspqPyWhAdWB3c3MocZcxXxuyLtcEkHM+CP3C36G+Di+AD3KCvA2uiyrSCvvm8XRLdYgXz0e4UCPSM8ZWRZZ+SW5kkSb1tMM8FTqE3QyfISKd6NwwFkwaUC+CDVKIH3wmmT+V6MKlD0Tuu281kFMoBkH0lCb1v+Hfckwmo3e4Cv1u64ZfOetpX4J3/h67c/T7J9LxXgf4TFkLS1yrJwjqIX/Di+MpckmDl2F7XLq9qFXlEn1nVljYlSEMXlLODSnyUU7lDaeTXX0SVBC7FV7ma+lL/+9UialEJ5YiS6yo10ek/A7pWdTYGZZBNvq8khotKLxY6zK9Bb9NJaIGHEMpfKnK4x3HOxHEAAAAASUVORK5CYII=");
                                        return e.addRepresentation({
                                            width: 16,
                                            height: 16,
                                            buffer: n.toPNG()
                                        }), e.addRepresentation({
                                            width: 32,
                                            height: 32,
                                            buffer: i.toPNG()
                                        }), e.setTemplateImage(!0), e
                                    }();
                                default:
                                    return t.nativeImage.createFromDataURL("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAATr2AAE69gE6sVc6AAAAGXRFWHRTb2Z0d2FyZQB3d3cuaW5rc2NhcGUub3Jnm+48GgAAAoVJREFUeJzNl0+IzGEYx3d30NoaEjszUZIcpKQUTpy0e3ORwoWLk3JwcBE3XGTYnIiDRMnBTS4SB3FCLopFrV128idlZe08H735vuYxzczvNzM/a596mt877/Pn+z7P8/6e59fTM1cJ6M2S23Wc+wcHyqUCgoTMbBFQAopdcinY8rZbOgYWAmfN7B0wkRGPBZvAQFMgQJ9+ywBmNkNG5Gyd8b4anT4PjEr4J1BNYhn/kSAf9gKNNkwHNQAhZ+MSriYdTIYtTRAUiQ/AYBKAiSQAOnXcD/k9Adz3zhoBACaTAJQSIhBDHkBMASNAQbpDLtf1IOK6kgRgqZm9lnDMqXccDd0G1kunoFszlSICjQHUgdgA3HGKVWfgObBDcguAgwprM8fpAQQC5gHz9bwTeOFydxjo194w8MQV1oiZPe44AtROv0LhHdZ6MbAbWKn1WuCWHIeUXAw62hty163jGhhUVQe6AazW/0uA08B37d0FNjqQp4CvWdXAJuCBTvkZuOIK8yWwS3J9wD4HOJMayMVOCOw1szdS/GJmR927fCvwSCA/ARfM7GlWNXAzONB6GbAfWKP1KjO7KoOBr7s0bc+qBsYlfMkVWN7Mjrs8P3QgQ/84pnRlUgPb3JWaVKXH6/hWEYmdcw/wKssa6IsTkZkdcH3hG3AyVLzkNgP3ovG63tA+AGqnXw5cA7a45nQIWOdq5DIwLc8zKeeG1ACKwHspnHfC/cARM/vYpDdkCmDsj9bvsewc8KxDx22346K7BfFKRTBJec4EQN6PZHI67SafTrn1SDaLQ2nZ+/qLXBQGgqDyX1HYKt2wbJVbjuVNPkwKejt2wwX3/uid+59mkf7bx+ls0y+V+Fs/2zGZswAAAABJRU5ErkJggg==")
                            }
                        }())
                    } catch (e) {
                        V.captureException(e, {
                            tags: {
                                service: "tray",
                                lifeycle: "init"
                            }
                        })
                    }
                } else V.captureException(e, {
                    tags: {
                        service: "tray",
                        lifeycle: "init"
                    }
                })
            }
            return null
        }(), Ti && (Ti.setToolTip(f().t("tray.tooltip")), C && (Ti.removeAllListeners("click"), Ti.on("click", (() => gt()))), Wt.on("update-downloaded", (() => {
            Mi()
        })), Mi()))
    }

    function Mi() {
        if (!Ti) return _i();
        const e = t.Menu.buildFromTemplate(function() {
            let e = [];
            return o.IS_MAC && (e = [fi(), gi(), mi(), ...$n(), {
                type: "separator"
            }, ...ui(), {
                type: "separator"
            }, ri(), hi(), {
                type: "separator"
            }, {
                label: f().t("tray.hideMenuBarItem"),
                click: () => L.setPreference("show_in_menu_bar", !1)
            }, Ai(), bi(), {
                type: "separator"
            }, vi()]), o.IS_WINDOWS && (e = [fi(), gi(), mi(), ...$n(), {
                type: "separator"
            }, ...ui(), {
                type: "separator"
            }, ri(), hi(), {
                type: "separator"
            }, Ai(), yi(), bi(), Si(), ki(), Ii(), Xt(), {
                type: "separator"
            }, vi()]), o.IS_LINUX && (e = [mi(), ...$n(), {
                type: "separator"
            }, ...ui(), {
                type: "separator"
            }, ri(), hi(), {
                type: "separator"
            }, Ai(), yi(), bi(), Si(), ki(), Ii(), Xt(), {
                type: "separator"
            }, vi()]), e.filter(Ei)
        }());
        Ti.setContextMenu(e), Ri = e
    }
    let Ci = function(e) {
        return e.REMINDER = "reminder", e.NOTE_ADDED = "note_added", e.ITEM_ASSIGNED = "item_assigned", e.ITEM_COMPLETED = "item_completed", e.ITEM_UNCOMPLETED = "item_uncompleted", e.SHARE_INVITATION_SENT = "share_invitation_sent", e.SHARE_INVITATION_ACCEPTED = "share_invitation_accepted", e.SHARE_INVITATION_REJECTED = "share_invitation_rejected", e.USER_LEFT_PROJECT = "user_left_project", e.USER_REMOVED_FROM_PROJECT = "user_removed_from_project", e.KARMA_LEVEL = "karma_level", e.MESSAGE = "message", e
    }({});

    function Wi(e) {
        const t = Kn(e);
        if (o.IS_WINDOWS && t) {
            const e = t.mainWindow.browserWindow;
            if (!e || !N(e)) return;
            if (e.isAlwaysOnTop()) return;
            e.setAlwaysOnTop(!0), e.setAlwaysOnTop(!1)
        }
    }
    const Di = {
        [Ci.REMINDER]: function(e, t) {
            t.data.id && Wi(ht(t.data.id))
        },
        [Ci.NOTE_ADDED]: function(e, t) {
            let n;
            if (t.data.item_id && t.data.note_id) n = function(e, t) {
                if (!Qe(e) || !Qe(t)) throw new Error("Invalid taskId or commentId");
                return `/app/task/${e}#comment-${t}`
            }(t.data.item_id, t.data.note_id);
            else {
                if (!t.data.project_id || !t.data.note_id) return;
                n = function(e, t) {
                    if (!Qe(e) || !Qe(t)) throw new Error("Invalid projectId or commentId");
                    return `/app/project/${e}/comments#comment-${t}`
                }(t.data.project_id, t.data.note_id)
            }
            Wi(n)
        },
        [Ci.ITEM_ASSIGNED]: function(e, t) {
            t.data.item_id && Wi(ht(t.data.item_id))
        },
        [Ci.ITEM_COMPLETED]: function(e, t) {
            t.data.item_id && Wi(ht(t.data.item_id))
        },
        [Ci.ITEM_UNCOMPLETED]: function(e, t) {
            t.data.item_id && Wi(ht(t.data.item_id))
        },
        [Ci.SHARE_INVITATION_ACCEPTED]: function(e, t) {
            t.data.project_id && Wi(wt(t.data.project_id))
        },
        [Ci.SHARE_INVITATION_REJECTED]: function(e, t) {
            t.data.project_id && Wi(wt(t.data.project_id))
        },
        [Ci.USER_LEFT_PROJECT]: function(e, t) {
            t.data.project_id && Wi(wt(t.data.project_id))
        },
        [Ci.USER_REMOVED_FROM_PROJECT]: function(e, t) {
            t.data.project_id && Wi(wt(t.data.project_id))
        },
        [Ci.KARMA_LEVEL]: function(e, t) {
            e.reply(g.notificationActivated, {
                ...t,
                type: A,
                method: g.notificationActivated
            })
        },
        [Ci.MESSAGE]: function(e, t) {
            e.reply(g.notificationActivated, {
                ...t,
                type: A,
                method: g.notificationActivated
            })
        },
        [Ci.SHARE_INVITATION_SENT]: function(e, t) {
            e.reply(g.notificationActivated, {
                ...t,
                type: A,
                method: g.notificationActivated
            })
        }
    };

    function Ui(e) {
        if (L.theme = e, o.IS_MAC && ((0, h.widgetsBridgeSetThemeIdentifier)("number" == typeof e ? e : 0), (0, h.widgetsBridgeReloadWidgets)()), o.IS_WINDOWS) {
            const n = dn(e);
            if (n)
                for (const e of Le()) {
                    var t;
                    null === (t = e.mainWindow.browserWindow) || void 0 === t || t.setAccentColor(n)
                }
        }
    }

    function Pi() {
        return void 0 === L.getPreference("show_in_dock") || Boolean(L.getPreference("show_in_dock")) || !1 === Boolean(L.getPreference("show_in_menu_bar"))
    }

    function Li(e) {
        const t = Oe();
        return t ? (on(t, lt(e.pathname)), !0) : (i().info("No active window, skipping universal link:", e.toString()), !1)
    }

    function Oi(e) {
        if (!e) return "";
        try {
            const t = new URL(e);
            return t.searchParams.has("code") && t.searchParams.set("code", "*****"), t.searchParams.has("state") && t.searchParams.set("state", "*****"), t.searchParams.has("content") && t.searchParams.set("content", "*****"), t.searchParams.has("description") && t.searchParams.set("description", "*****"), t.searchParams.has("url") && t.searchParams.set("url", "*****"), t.toString()
        } catch (e) {
            return ""
        }
    }
    const Ni = new class {
        todoistProtocol = "todoist:";
        comTodoistProtocol = "com.todoist:";
        deepLinkEndpoints = {
            today: "today",
            inbox: "inbox",
            upcoming: "upcoming",
            project: "project",
            task: "task",
            openQuickAdd: "openquickadd",
            ramble: "ramble",
            addtask: "addtask",
            notifications: "notifications",
            filtersLabels: "filters-labels",
            filter: "filter",
            label: "label",
            search: "search",
            projects: "projects",
            templates: "templates",
            completeItem: "completeItem",
            notificationTask: "notificationTask",
            navigateTo: "navigate-to"
        };
        init() {
            this.registerListeners(), this.checkArgumentsForDeeplink(), t.app.whenReady().then((() => {
                this.registerDefaultProtocol()
            })).catch((() => {}))
        }
        checkArgumentsForDeeplink() {
            const e = process.argv.find((e => e.startsWith(o.OAUTH_TODOIST_URI_SCHEME)));
            if (e && this.canHandleURL(e)) try {
                i().info("Found deeplink in the starting process arguments, setting as starting URL:", e), this.startURL = new URL(e)
            } catch (t) {
                i().error("Could not set starting deeplink:", e)
            }
        }
        registerDefaultProtocol() {
            ! function(e) {
                let n = e.every((e => process.defaultApp ? !!(process.argv.length >= 2 && process.argv[1]) && t.app.setAsDefaultProtocolClient(e, process.execPath, [Tt().resolve(process.argv[1])]) : t.app.setAsDefaultProtocolClient(e)));
                if (process.env.APPIMAGE && !n) {
                    if (n = Boolean(process.env.DESKTOPINTEGRATION), !n) {
                        const i = process.env.GIO_LAUNCHED_DESKTOP_FILE;
                        null != i && i.endsWith(".desktop") && (process.env.CHROME_DESKTOP = i.substring(i.lastIndexOf("/") + 1), n = e.every((e => t.app.setAsDefaultProtocolClient(e))))
                    }
                    n || (n = e.every((e => t.app.isDefaultProtocolClient(e))))
                }
                return n
            }([o.OAUTH_URI_SCHEME, o.OAUTH_TODOIST_URI_SCHEME]) ? i().info("Could not register custom protocols"): i().info("Successfully registered custom protocols")
        }
        registerListeners() {
            t.app.on("second-instance", ((e, t) => {
                const n = t.find((e => e.startsWith(o.OAUTH_URI_SCHEME) || e.startsWith(o.OAUTH_TODOIST_URI_SCHEME))),
                    a = Oi(n);
                if (i().info("Received deeplink:", a), n && this.canHandleURL(n))
                    if (this.isAuthDeeplink(n)) i().info("Handling auth deeplink:", a), this.handleURL(n);
                    else if (_e()) i().info("Handling application deeplink immediately:", a), this.handleURL(n);
                else try {
                    i().info("The app is not ready to handle the deeplink yet, setting as start URL:", a), this.startURL = new URL(n)
                } catch (e) {
                    i().error("Could not set starting deeplink:", a)
                } else i().info(`Cannot handle the deeplink ${a}, activating the app only`), gt()
            })), t.app.on("open-url", ((e, n) => {
                const o = Oi(n);
                var a;
                if (i().info("Received deeplink:", o), this.isAuthDeeplink(n) && this.canHandleURL(n) && this.handleURL(n)) i().info("Handling auth deeplink:", o), e.preventDefault(), Pi() || (null === (a = t.app.dock) || void 0 === a || a.hide(), gt());
                else if (!_e() && this.canHandleURL(n)) try {
                    i().info("The app is not ready to handle the deeplink yet, setting as start URL:", o), e.preventDefault(), this.startURL = new URL(n)
                } catch (e) {
                    i().error("Could not set starting deeplink:", o)
                } else this.canHandleURL(n) && this.handleURL(n) ? (i().info("Handling application deeplink immediately:", o), e.preventDefault()) : i().info(`Cannot handle the deeplink ${o}, activating the app only`)
            })), t.app.on("continue-activity", ((e, t, n, o) => {
                if ("NSUserActivityTypeBrowsingWeb" !== t || !o.webpageURL) return;
                let a;
                i().info("Received continue activity:", o.webpageURL);
                try {
                    a = new URL(o.webpageURL)
                } catch {
                    return void i().info("Could not parse continue activity URL:", o.webpageURL)
                }
                if (function(e) {
                        if (i().info("Checking if URL can be handled as a universal link:", e.toString()), "https:" !== e.protocol || "app.todoist.com" !== e.hostname) return i().info("URL is not from our configured domain"), !1;
                        const t = e.pathname.split("/").filter(Boolean);
                        if (0 === t.length) return i().info("URL has no path segments"), !1;
                        if ("app" !== t[0]) return i().info("URL path segment is not app"), !1;
                        const n = lt(e.pathname);
                        return !("view" in n && "home" === n.view.type && t.length > 1 && (i().info("Could not construct routfo from URL:", e.toString()), 1))
                    }(a)) {
                    const t = a.toString();
                    if (i().info("Handling universal link:", t), !_e()) return i().info("The app is not ready yet to handle the universal link, waiting for initialization:", t), void ve.once("app-initialized", (() => {
                        Li(a) && (e.preventDefault(), i().info("Successfully handled universal link after initialization:", t))
                    }));
                    Li(a) && (i().info("Successfully handled universal link:", t), e.preventDefault())
                }
            }))
        }
        handleURL(e) {
            let t;
            try {
                t = new URL(e)
            } catch {
                return !1
            }
            switch (t.protocol) {
                case this.todoistProtocol:
                    return this.handleNavigationURL(t);
                case this.comTodoistProtocol:
                    return this.handleAuthURL(t);
                default:
                    return !1
            }
        }
        canHandleNavigationURL(e) {
            return !!Object.values(this.deepLinkEndpoints).includes(e.host)
        }
        canHandleAuthURL(e) {
            const {
                hostname: t,
                pathname: n
            } = new URL(o.OAUTH_REDIRECT_URI);
            return e.hostname === t && e.pathname === n
        }
        canHandleURL(e) {
            let t;
            try {
                t = new URL(e)
            } catch {
                return !1
            }
            switch (t.protocol) {
                case this.todoistProtocol:
                    return this.canHandleNavigationURL(t);
                case this.comTodoistProtocol:
                    return this.canHandleAuthURL(t);
                default:
                    return !1
            }
        }
        isAuthDeeplink(e) {
            if (!e) return !1;
            try {
                return new URL(e).protocol === this.comTodoistProtocol
            } catch {
                return !1
            }
        }
        handleNavigationURL(e) {
            const t = {
                [this.deepLinkEndpoints.today]: () => this.navigateToTodayView(),
                [this.deepLinkEndpoints.inbox]: () => this.navigateToInboxView(),
                [this.deepLinkEndpoints.upcoming]: () => this.navigateToUpcomingView(),
                [this.deepLinkEndpoints.project]: () => this.navigateToProjectView(e.searchParams.get("id")),
                [this.deepLinkEndpoints.task]: () => this.navigateToTaskView(e.searchParams.get("id")),
                [this.deepLinkEndpoints.openQuickAdd]: () => this.openQuickAdd(e.searchParams.get("content"), e.searchParams.get("description")),
                [this.deepLinkEndpoints.ramble]: () => this.openQuickAddRamble(),
                [this.deepLinkEndpoints.addtask]: () => (console.warn("The addtask endpoint is deprecated. Use openquickadd instead."), this.openQuickAdd(e.searchParams.get("content"), e.searchParams.get("description"))),
                [this.deepLinkEndpoints.notifications]: () => (vt({
                    view: {
                        type: "notifications"
                    }
                }), !0),
                [this.deepLinkEndpoints.filtersLabels]: () => (vt({
                    view: {
                        type: "filters-labels"
                    }
                }), !0),
                [this.deepLinkEndpoints.filter]: () => {
                    const t = e.searchParams.get("id");
                    return !!t && (vt({
                        view: {
                            type: "filter",
                            filterId: t
                        }
                    }), !0)
                },
                [this.deepLinkEndpoints.label]: () => {
                    const t = e.searchParams.get("id");
                    return !!t && (vt({
                        view: {
                            type: "label",
                            labelId: t
                        }
                    }), !0)
                },
                [this.deepLinkEndpoints.search]: () => {
                    const t = e.searchParams.get("query");
                    return !!t && (vt({
                        view: {
                            type: "search",
                            searchQuery: t
                        }
                    }), !0)
                },
                [this.deepLinkEndpoints.projects]: () => {
                    const t = e.searchParams.get("workspaceId");
                    return vt(t ? {
                        view: {
                            type: "projects",
                            workspaceId: t
                        }
                    } : {
                        view: {
                            type: "projects"
                        }
                    }), !0
                },
                [this.deepLinkEndpoints.templates]: () => {
                    const t = e.searchParams.get("id");
                    return vt(t ? {
                        view: {
                            type: "templates",
                            templateId: t
                        }
                    } : {
                        view: {
                            type: "templates"
                        }
                    }), !0
                },
                [this.deepLinkEndpoints.completeItem]: () => (this.completeTask(e.searchParams.get("id")), !0),
                [this.deepLinkEndpoints.notificationTask]: () => this.navigateToTaskView(e.searchParams.get("id"), !0),
                [this.deepLinkEndpoints.navigateTo]: () => {
                    const t = e.searchParams.get("url");
                    if (!t) return !1;
                    try {
                        const e = st().origin,
                            n = new URL(decodeURIComponent(t), e);
                        if (n.origin !== e) throw new Error("Invalid origin");
                        const o = lt(n.pathname);
                        vt(o), i().info(`Navigation deeplink successfully navigated to: ${"view"in o?o.view.type:"task"}`)
                    } catch (e) {
                        return i().error("Error parsing navigation URL:", e), !1
                    }
                    return !0
                }
            } [e.host];
            return t && t() || !1
        }
        navigateToTodayView() {
            return vt({
                view: {
                    type: "today"
                }
            }), !0
        }
        navigateToInboxView() {
            return vt({
                view: {
                    type: "inbox"
                }
            }), !0
        }
        navigateToUpcomingView() {
            return vt({
                view: {
                    type: "upcoming"
                }
            }), !0
        }
        navigateToProjectView(e) {
            return null == e || vt({
                view: {
                    type: "project",
                    projectId: e
                }
            }), !0
        }
        navigateToTaskView(e, t = !1) {
            return e && t && Wi(ht(e)), gt(), null == e || vt({
                task: {
                    id: e
                }
            }), !0
        }
        openQuickAdd(e, t) {
            return At({
                content: e || "",
                description: t || ""
            }), !0
        }
        openQuickAddRamble() {
            return At({
                startInRambleMode: !0
            }), !0
        }
        completeTask(e) {
            if (null == e) return !0;
            const t = Fe(),
                n = null == t ? void 0 : t.browserWindow;
            return n && N(n) && v(n.webContents, e), !0
        }
        handleAuthURL(e) {
            const {
                hostname: t,
                pathname: n
            } = new URL(o.OAUTH_REDIRECT_URI);
            if (e.hostname !== t || e.pathname !== n) return i().info("Not valid deeplink auth URL"), !1;
            gt();
            const a = e.searchParams.get("code"),
                r = e.searchParams.get("state"),
                s = e.searchParams.get("prompt");
            return a && r ? Rn().exchangeCodeForToken(a, r).then((e => {
                i().info("Successfully exchanged code for token, opening web app now"), mt(Oe(), dt({
                    token: e,
                    prompt: s
                }), {
                    tags: {
                        action: "login"
                    }
                })
            })).catch((e => {
                if (i().warn("Error during exchanging code for token:", e), e instanceof vn) yt("nostateinmemory");
                else {
                    if (e instanceof In) return e.shouldCaptureDetails() && V.captureException(e, {
                        fingerprint: ["PKCE-authenticator"],
                        extra: e.getDetails()
                    }), void yt("serverError");
                    V.captureException(e, {
                        fingerprint: ["PKCE-authenticator"]
                    }), yt()
                }
            })) : i().warn("No code and state during handling auth deeplink URL"), !0
        }
    };

    function xi(e) {
        const n = t.BrowserWindow.fromWebContents(e.sender);
        if (!n) return !1;
        const i = Ne();
        return !!i && n.id === i.id
    }

    function Bi({
        options: e
    }) {
        t.ipcMain.on(g.login, ((t, n) => {
            i().info("Received login IPC message"), e.onLoginOrUserUpdated(n.data)
        })), t.ipcMain.on(g.logout, (() => {
            i().info("Received logout IPC message"), e.onLogout()
        })), t.ipcMain.on(g.setTheme, ((e, t) => {
            const {
                data: n
            } = t;
            i().info("setting theme:", n), "number" == typeof n && Ui(n)
        })), t.ipcMain.on(g.focusDesktopApp, (() => {
            gt()
        })), t.ipcMain.on(g.bridgeReady, (e => {
            var t;
            const n = null === (i = e.sender.id, t = Le().find((e => e.id === i))) || void 0 === t ? void 0 : t.mainWindow;
            var i;
            null == n || n.setWebBridgeReady()
        })), t.ipcMain.on(g.notify, ((e, t) => {
            i().info("Received IPC message for a notification of type:", t.data.notification_type), xi(e) && Zt(t.data, (() => {
                Be() ? function(e, t) {
                    t.data.notification_type ? (i().info("Handling click of the notification type:", t.data.notification_type), Di[t.data.notification_type](e, t)) : i().info("No notification type found in the message data: ", t)
                }(e, t) : (i().info("Using legacy method to handle notification action"), e.reply(g.notificationActivated, {
                    ...t,
                    type: A,
                    method: g.notificationActivated
                }))
            }))
        })), t.ipcMain.on(g.setBadge, ((e, t) => {
            if (!xi(e)) return;
            const {
                data: n
            } = t, i = parseInt(n);
            J.setNotificationsCount(i)
        })), t.ipcMain.on(g.setTodayItems, ((e, t) => {
            "string" == typeof t.data && (0, h.widgetsBridgeSaveTodayWidgetData)(t.data)
        })), t.ipcMain.on(g.setProductivityWidgetData, ((e, t) => {
            "string" == typeof t.data && (0, h.widgetsBridgeSaveProductivityWidgetData)(t.data)
        })), t.ipcMain.on(g.setAppIntentsData, ((e, t) => {
            "string" == typeof t.data && (0, h.appIntentsSaveGeneralData)(t.data)
        })), t.ipcMain.on(g.setAppIntentsTasksData, ((e, t) => {
            "string" == typeof t.data && (0, h.appIntentsSaveTasksData)(t.data)
        })), t.ipcMain.on(g.setFavourites, ((e, t) => {
            var n;
            xi(e) && (n = t.data, Pt.data = n, Mi())
        })), t.ipcMain.on(g.setWorkspaces, ((e, t) => {
            var n;
            xi(e) && (n = t.data.workspaces, pi.data = n, Mi())
        })), t.ipcMain.on(g.setNavigation, ((e, t) => {
            var n;
            n = t.data, di.data = {
                ...di.data,
                ...n
            }, Mi()
        })), t.ipcMain.on(g.setTrayMenuItems, ((e, t) => {
            var n;
            n = t.data, Ut.data = n, Mi()
        })), t.ipcMain.on(g.changeWindowState, ((e, n) => {
            const i = t.BrowserWindow.fromWebContents(e.sender);
            if (!i) return;
            const {
                data: o
            } = n;
            if (o) switch (o) {
                case "minimize":
                    i.minimize();
                    break;
                case "maximize":
                    Fi(i), i.maximize();
                    break;
                case "restore-down":
                    Fi(i), i.restore();
                    break;
                case "close":
                    i.close()
            }
        })), t.ipcMain.on(g.titleBarDoubleClick, (e => {
            const n = t.BrowserWindow.fromWebContents(e.sender);
            if (!n) return;
            const i = t.systemPreferences.getUserDefault("AppleActionOnDoubleClick", "string");
            "Minimize" === i ? n.minimize() : "Maximize" === i && (n.isMaximized() ? n.unmaximize() : n.maximize())
        })), t.ipcMain.on(g.setIgnoreMouseEvents, ((e, n) => {
            const i = t.BrowserWindow.fromWebContents(e.sender);
            if (!i || !N(i)) return;
            if (!i.isVisible()) return;
            if (fe() && !i.isFocused()) return;
            const {
                data: o
            } = n, {
                ignore: a,
                forward: r = !1
            } = o;
            i.setIgnoreMouseEvents(a, {
                forward: r
            })
        })), t.ipcMain.on(g.getPreference, ((e, t) => {
            const {
                data: n
            } = t, i = n;
            e.reply(g.getPreference, {
                ...t,
                type: m,
                data: L.getPreference(i)
            })
        })), t.ipcMain.on(g.setPreference, ((e, t) => {
            const {
                data: n
            } = t, {
                path: i,
                value: o
            } = n;
            un((() => {
                L.setPreference(i, o)
            }))
        })), t.ipcMain.on(g.setLayout, ((e, t) => {
            const {
                data: n
            } = t, i = Ne();
            if ("darwin" === process.platform) {
                const e = "new" === n ? {
                    x: 22,
                    y: 20
                } : {
                    x: 13,
                    y: 11
                };
                null == i || i.setWindowButtonPosition(e)
            }
        })), t.ipcMain.on(g.setTimeFormat, ((e, t) => {
            const {
                data: n
            } = t;
            L.timeFormat = n
        })), t.ipcMain.on(g.openAuthMagicLink, ((e, t) => {
            const {
                data: n
            } = t;
            i().info("Received openAuthMagicLink IPC message with the link:", Oi(n)), Ni.handleAuthURL(new URL(n))
        })), t.ipcMain.on(g.openNewWindow, ((e, t) => {
            const {
                data: n
            } = t;
            Kn(n.pathname)
        })), t.ipcMain.on(g.openNewWindows, ((e, t) => {
            (async function(e) {
                if (0 !== e.length)
                    for (let t = 0; t < e.length; t++) {
                        const n = Kn(e[t]);
                        await (null == n ? void 0 : n.mainWindow.initializedPromise), await new Promise((e => setTimeout(e, 0)))
                    }
            })(t.data.pathnames).catch((() => {}))
        })), t.ipcMain.on(g.sendCommunicationReadyMessage, (e => {
            const t = (n = e.sender, Le().find((e => {
                var t;
                return (null === (t = e.mainWindow.browserWindow) || void 0 === t ? void 0 : t.webContents) === n
            })));
            var n;
            t && (t.mainWindow.setWebAppInitialized(), function(e) {
                const t = e.mainWindow.browserWindow;
                null != t && t.isFullScreen() && k(t.webContents, !0)
            }(t))
        })), t.ipcMain.on(g.toggleFloatingWindow, (() => {
            const e = Ne();
            e && (Fi(e), Yn(e.id), jn(), Mi())
        })), t.ipcMain.on(g.isMainLogicWindow, ((e, t) => {
            var n;
            e.reply(g.isMainLogicWindow, {
                ...t,
                type: m,
                data: (null === (n = Fe()) || void 0 === n || null === (n = n.browserWindow) || void 0 === n ? void 0 : n.webContents) === e.sender
            })
        })), t.ipcMain.on(g.sendUpdateWebAppRequest, (() => {
            i().info("Updating all web app versions"), ke() || Le().forEach((e => {
                const t = e.mainWindow.browserWindow;
                t && t.webContents.send(g.updateMultiWindowWebAppVersion, {
                    type: A,
                    id: b(),
                    method: "updateMultiWindowWebAppVersion"
                })
            }))
        })), t.ipcMain.on(g.installNewDesktopVersion, (() => {
            i().info("Installing new version, triggered from the app menu"), Dt.installUpdate()
        })), t.ipcMain.on(g.sendGlobalShortcutsEnabled, ((e, n) => {
            n.data ? kt() : t.globalShortcut.unregisterAll()
        })), t.ipcMain.on(g.getShortcuts, ((e, t) => {
            const n = L.getGlobalShortcut("activate"),
                i = L.getGlobalShortcut("quick_add"),
                a = L.getGlobalShortcut("quick_add_ramble"),
                r = [...n ? [{
                    identifier: "PLATFORM_OPEN_TODOIST",
                    name: f().t("tray.openTodoist"),
                    shortcut: n
                }] : [], ...i ? [{
                    identifier: "PLATFORM_QUICK_ADD",
                    name: f().t("tray.quickAdd"),
                    shortcut: i
                }] : [], ...a ? [{
                    identifier: "PLATFORM_QUICK_ADD_RAMBLE",
                    name: f().t("tray.quickAddRamble"),
                    shortcut: a
                }] : [], {
                    identifier: "PLATFORM_ZOOM_IN",
                    shortcut: "CmdOrCtrl+Plus",
                    name: f().t("mainMenu.view.zoomIn")
                }, {
                    identifier: "PLATFORM_ZOOM_OUT",
                    shortcut: "CmdOrCtrl+-",
                    name: f().t("mainMenu.view.zoomOut")
                }, {
                    identifier: "PLATFORM_RESET_ZOOM",
                    shortcut: "CmdOrCtrl+0",
                    name: f().t("mainMenu.view.resetZoom")
                }, {
                    identifier: "PLATFORM_BACK",
                    shortcut: o.IS_MAC ? "Cmd+[" : "Alt+Left",
                    name: f().t("mainMenu.view.back")
                }, {
                    identifier: "PLATFORM_FORWARD",
                    shortcut: o.IS_MAC ? "Cmd+]" : "Alt+Right",
                    name: f().t("mainMenu.view.forward")
                }];
            e.reply(g.getShortcuts, {
                ...t,
                type: m,
                data: r
            })
        }))
    }

    function Fi(e) {
        e && e.isFullScreen() && e.setFullScreen(!1)
    }
    const zi = require("url");
    var Hi = e.n(zi);
    class qi extends Error {
        constructor(e = "Timeout") {
            super(e)
        }
    }
    let ji = !1;
    class QuickAddWindow {
        isDisabled = !1;
        constructor() {
            this.isReady = !1, this.prepareQuickAddWindow(), t.app.on("before-quit", (() => this.beforeQuitHandler())), t.autoUpdater.on("before-quit-for-update", (() => this.beforeQuitHandler()))
        }
        beforeQuitHandler() {
            this.disable(), ji = !0
        }
        prepareQuickAddWindow() {
            ji || this.isDisabled || (this.createBrowserWindow(), this.reload().catch((() => {})))
        }
        createBrowserWindow() {
            const e = new t.BrowserWindow({
                webPreferences: {
                    nodeIntegration: o.DISABLE_SECURITY,
                    contextIsolation: !o.DISABLE_SECURITY,
                    preload: Tt().join(__dirname, "../../webpack/todoist-quick_add-preload/preload.js"),
                    backgroundThrottling: !1
                },
                frame: !1,
                fullscreenable: !1,
                transparent: !0,
                width: 700,
                height: 640,
                center: !0,
                resizable: !1,
                minimizable: !1,
                maximizable: !1,
                show: !1,
                movable: !0,
                skipTaskbar: !0,
                paintWhenInitiallyHidden: !1,
                alwaysOnTop: !0,
                type: "panel",
                hasShadow: !o.IS_MAC && void 0
            });
            e.setAlwaysOnTop(!0, "floating"), e.setVisibleOnAllWorkspaces(!0, {
                visibleOnFullScreen: !0,
                skipTransformProcessType: !0
            }), o.IS_WINDOWS && !se() && (e.on("show", (() => {
                setTimeout((() => {
                    N(e) && e.setOpacity(1)
                }), 10)
            })), e.on("hide", (() => {
                e.setOpacity(0)
            }))), e.on("closed", (() => {
                ji || this.isDisabled || this.prepareQuickAddWindow()
            })), fe() && e.webContents.on("blur", (() => {
                this.browserWindow && N(this.browserWindow) && this.browserWindow.setIgnoreMouseEvents(!1)
            })), e.webContents.setWindowOpenHandler((e => (je(e.url), {
                action: "deny"
            }))), this.browserWindow = e
        }
        async reload() {
            var e, t;
            if (this.isDisabled || ji) return Promise.resolve();
            this.browserWindow || this.createBrowserWindow(), this.isReady = !1, this.isReadyPromise = new Promise((e => {
                this.isReadyPromiseResolve = e
            })), null === (e = this.browserWindow) || void 0 === e || e.webContents.invalidate();
            const n = null === (t = this.browserWindow) || void 0 === t ? void 0 : t.loadURL(Hi().format(et.href));
            i().info("Reloading Quick Add window"), null == n || n.catch((e => {
                V.captureException(e, {
                    tags: {
                        action: "load_quick_add"
                    }
                })
            }));
            const o = new Promise(((e, t) => setTimeout((() => t(new qi("Quick Add timeout"))), 5e3))),
                a = Promise.race([Promise.all([n, this.isReadyPromise]), o]);
            this.isLoadingPromise = a;
            try {
                await a
            } finally {
                this.isLoadingPromise = void 0
            }
        }
        markReady() {
            var e;
            this.isReady = !0, null === (e = this.isReadyPromiseResolve) || void 0 === e || e.call(this), i().info("Quick Add window is initialized and ready")
        }
        getActiveDisplay() {
            const {
                x: e,
                y: n
            } = t.screen.getCursorScreenPoint();
            return t.screen.getDisplayNearestPoint({
                x: e,
                y: n
            })
        }
        setWindowPosition() {
            var e, t;
            const n = this.getActiveDisplay();
            null === (e = this.browserWindow) || void 0 === e || e.setPosition(n.workArea.x, n.workArea.y), null === (t = this.browserWindow) || void 0 === t || t.center()
        }
        reactivate(e) {
            if (this.isActivatingPromise || ji || this.isDisabled) return;
            const t = this.isReady ? Promise.resolve() : this.isLoadingPromise ?? this.reload();
            this.setWindowPosition();
            const n = t.then((() => {
                !this.browserWindow || ji || this.isDisabled || (null != e && e.startInRambleMode ? (i().info("Starting Quick Add in Ramble mode"), this.browserWindow.webContents.send(g.startRambleSession, {
                    type: A,
                    id: b(),
                    method: "startRambleSession"
                })) : this.browserWindow.webContents.send(g.prefillQuickAdd, {
                    type: A,
                    id: b(),
                    method: "prefillQuickAdd",
                    data: {
                        content: null == e ? void 0 : e.content,
                        comment: null == e ? void 0 : e.description
                    }
                }), this.browserWindow.show(), this.browserWindow.webContents.send(g.quickAddOpened, {
                    type: A,
                    id: b(),
                    method: "quickAddOpened",
                    data: e
                }))
            })).catch((e => {
                (0, p.isNetworkError)(e) || e instanceof qi || V.captureException(e), this.showErrorNotification(), z({
                    level: "warn",
                    fingerprint: "quick-add-window",
                    message: "Quick Add window didn't initialize in time",
                    context: {
                        error: String(e)
                    }
                }), this.destroyBrowserWindow()
            }));
            this.isActivatingPromise = n, n.finally((() => {
                this.isActivatingPromise = void 0
            }))
        }
        showErrorNotification() {
            this.isDisabled || ji || Zt({
                id: "1",
                title: "",
                body: (0, w.t)("misc.quickAddError")
            })
        }
        hide() {
            var e;
            null != this && null !== (e = this.browserWindow) && void 0 !== e && e.isVisible() && this.browserWindow.destroy()
        }
        resetQuickAdd() {
            if (!this.browserWindow) return;
            if (this.browserWindow.isDestroyed()) return;
            const e = this.browserWindow.webContents;
            null != e && e.isDestroyed() || (he() ? this.hide() : (this.browserWindow.hide(), e.send(g.resetQuickAdd, {
                type: A,
                id: b(),
                method: "resetQuickAdd"
            })))
        }
        close() {
            var e;
            null === (e = this.browserWindow) || void 0 === e || e.destroy()
        }
        closeBeforeExit() {
            var e;
            ji = !0, null === (e = this.browserWindow) || void 0 === e || e.destroy(), this.browserWindow = void 0
        }
        update() {
            ji || this.isDisabled || this.destroyBrowserWindow()
        }
        destroyBrowserWindow() {
            const e = this.browserWindow;
            this.browserWindow = void 0, null == e || e.destroy()
        }
        disable() {
            var e;
            i().info("Disabling Quick Add window"), this.isDisabled = !0, null === (e = this.browserWindow) || void 0 === e || e.destroy(), this.browserWindow = void 0
        }
        __getReadyPromise() {
            if (this.isReady) return Promise.resolve();
            if (this.isReadyPromise) return this.isReadyPromise;
            throw new Error("Global Quick Add does not have a valid ready promise")
        }
    }

    function Gi(e) {
        e && o.IS_MAC && e.webAppInitialized.then((() => {
            const t = e.browserWindow;
            t && N(t) && t.webContents.send(g.sendWidgetData, {
                type: A,
                id: b(),
                method: "sendWidgetData",
                data: "today"
            })
        })).catch((() => {
            i().info("Web app failed to initialize in order to request widget data")
        }))
    }

    function Qi(e) {
        e && o.IS_MAC && (0, h.appIntentsAvailable)() && e.webAppInitialized.then((() => {
            const t = e.browserWindow;
            t && N(t) && t.webContents.send(g.sendAppIntentsData, {
                type: A,
                id: b(),
                method: "sendAppIntentsData"
            })
        })).catch((() => {
            i().info("Web app failed to initialize in order to request app intents data")
        }))
    }

    function Ki() {
        Bi({
            options: {
                onLoginOrUserUpdated: Yi,
                onLogout: Ji
            }
        }), t.ipcMain.on(g.quickAddReady, (() => {
            var e;
            null === (e = Ee()) || void 0 === e || e.markReady()
        })), t.ipcMain.on(g.quickAddClosed, (() => {
            var e;
            null === (e = Ee()) || void 0 === e || e.hide()
        })), t.ipcMain.on(g.quickAddAdded, (() => {
            var e;
            null === (e = Ee()) || void 0 === e || e.hide()
        })), t.ipcMain.on(g.quickAddAddTask, ((e, t) => {
            var n;
            null === (n = Ee()) || void 0 === n || n.hide(),
                function(e) {
                    const t = Ne();
                    t && t.webContents && function(e, t) {
                        e.send(g.addTask, {
                            type: A,
                            id: b(),
                            method: "addTask",
                            data: t
                        })
                    }(t.webContents, e)
                }(t.data)
        })), t.ipcMain.on(g.quickAddOpen, (() => {
            var e;
            null === (e = Ee()) || void 0 === e || e.reactivate()
        })), t.ipcMain.on(g.sendUpdateWebAppRequest, (() => {
            const e = Ee();
            e ? (i().info("Updating Quick Add window"), e.update()) : i().info("No Quick Add window available for an update")
        })), t.ipcMain.on(g.sendActionFromNewQuickAdd, (() => {
            var e;
            null === (e = Ee()) || void 0 === e || e.resetQuickAdd()
        })), t.ipcMain.on(g.sendOpenPageFromQuickAdd, ((e, t) => {
            var n;
            null === (n = Ee()) || void 0 === n || n.hide(), bt(t.data)
        }))
    }

    function Yi(e) {
        ie.login(e), L.timeFormat = e.time_format, Te(1 === e.beta), Me(!0),
            function() {
                const e = Fe();
                e && (Gi(e), Qi(e))
            }(), We = !0, Ue.emit("multi-window-enabled"), jn();
        const t = Boolean(Ee());
        _ && !t && Ie(new QuickAddWindow), setTimeout((() => {
            Dt.notifyWebAppAboutNewVersion()
        }), 2500), Re(!0)
    }

    function Ji() {
        var e;
        Te(!1), Me(!1), null === (e = Ee()) || void 0 === e || e.disable(), Ie(null), ie.logout(), We = !1, Ue.emit("multi-window-disabled"), jn(), Pt.data = null, pi.data = null, di.data = {
            ...ci
        }, Ut.data = null, Mi(), Ui(void 0), Pe();
        const t = Oe();
        mt(t, Je, {
            tags: {
                action: "logout"
            }
        }), null !== t && J.setNotificationsCount(0), Re(!1)
    }

    function Zi() {
        const e = Boolean(L.getPreference("open_on_system_startup")),
            n = Boolean(L.getPreference("system_startup_minimized"));
        e ? "darwin" === process.platform ? t.app.setLoginItemSettings({
            openAtLogin: !0
        }) : t.app.setLoginItemSettings({
            openAtLogin: !0,
            args: n ? ["--process-start-args", '"--hidden"'] : void 0
        }) : t.app.setLoginItemSettings({
            openAtLogin: !1
        })
    }
    class Xi {
        constructor(e) {
            this.browserWindow = e, this.style = {
                fontColor: "white",
                fontSingleDigit: "lighter 44px Arial",
                fontDoubleDigit: "lighter 40px Arial",
                color: "rgb(52, 46, 44)",
                radius: 32
            }
        }
        generate(e) {
            const t = Math.min(e, 99),
                n = JSON.stringify(this.style);
            return this.browserWindow ? this.browserWindow.webContents.executeJavaScriptInIsolatedWorld(999, [{
                code: `function ${this.drawBadge};drawBadge(${t}, ${n});`
            }]) : Promise.reject(new Error("BrowserWindow not defined"))
        }
        drawBadge(e, t) {
            const n = t.radius,
                i = document.createElement("canvas");
            i.width = Math.ceil(2 * n), i.height = Math.ceil(2 * n);
            const o = i.getContext("2d");
            if (null == o) throw new Error("Couldn't get canvas' context");
            o.imageSmoothingEnabled = !0, o.imageSmoothingQuality = "high", o.clearRect(0, 0, i.width, i.height), o.beginPath(), o.arc(n, n, n, 0, 2 * Math.PI), o.fillStyle = t.color, o.fill();
            const a = e.toString();
            o.font = e <= 9 ? t.fontSingleDigit : t.fontDoubleDigit, o.textAlign = "center", o.textBaseline = "middle", o.fillStyle = t.fontColor;
            const r = e <= 9 ? 1 : 1.5;
            return o.fillText(a, n, n + r), i.toDataURL("image/png")
        }
    }

    function $i(e) {
        var n;
        const i = e > 0,
            o = Ne();
        if (!o) return;
        const a = new Xi(o);
        switch (process.platform) {
            case "win32":
                if (!i) {
                    o.setOverlayIcon(null, f().t("badges.noDueToday"));
                    break
                }
                null == a || a.generate(e).then((e => {
                    var n;
                    if (!e) return;
                    const i = t.nativeImage.createFromDataURL(e);
                    null === (n = Ne()) || void 0 === n || n.setOverlayIcon(i, f().t("badges.hasDueToday"))
                })).catch((() => {}));
                break;
            case "darwin":
                let r = "";
                i && (r = e <= 999 ? e.toString() : "999+"), null === (n = t.app.dock) || void 0 === n || n.setBadge(r);
                break;
            case "linux":
                t.app.setBadgeCount(e)
        }
    }
    t.app.on("second-instance", ((e, t) => {
        Be() && t.slice(1).includes("--new-window") && Kn()
    }));
    const eo = function() {
        o.IS_MAC ? function() {
            var e;
            const n = t.Menu.buildFromTemplate([...Be() ? [{
                label: f().t("mainMenu.file.newHomeWindow"),
                click() {
                    Kn()
                }
            }] : []]);
            null === (e = t.app.dock) || void 0 === e || e.setMenu(n)
        }() : o.IS_WINDOWS && function() {
            const e = [...Be() ? [{
                title: f().t("mainMenu.file.newHomeWindow"),
                description: f().t("mainMenu.file.newHomeWindow"),
                program: process.execPath,
                arguments: "--new-window .",
                iconPath: qt,
                iconIndex: 0,
                workingDirectory: process.cwd()
            }] : []];
            t.app.setUserTasks(e)
        }(), Q.on("notifications-count-changed", $i)
    };

    function to() {
        Mi(),
            function() {
                const e = (0, p.debounce)((function() {
                    var e, n;
                    Pi() ? null === (e = t.app.dock) || void 0 === e || e.show().catch((e => {
                        V.captureException(e)
                    })).finally((() => {
                        var e;
                        null === (e = t.app.dock) || void 0 === e || e.setBadge(""), J.setNotificationsCount(J.getNotificationsCount())
                    })) : (null === (n = t.app.dock) || void 0 === n || n.hide(), gt())
                }), 1e3);
                L.watch("show_in_menu_bar", (t => {
                    t ? Mi() : Ti && (Ti.destroy(), Ti = null, Ri = null), "darwin" === process.platform && e()
                })), "darwin" === process.platform && (e(), L.watch("show_in_dock", e))
            }(),
            function() {
                if ("darwin" === process.platform) {
                    const e = t.app.getLoginItemSettings();
                    Boolean(L.getPreference("open_on_system_startup")) !== e.openAtLogin && L.setPreference("open_on_system_startup", e.openAtLogin)
                }
                L.watch("open_on_system_startup", Zi), L.watch("system_startup_minimized", Zi)
            }(), Ue.on("window-added", (e => {
                ! function(e) {
                    const t = e.mainWindow.browserWindow;
                    t ? (t.on("focus", (() => {
                        t.webContents.send(g.focusWindow, {
                            type: A,
                            id: b(),
                            method: "focusWindow"
                        })
                    })), t.on("blur", (() => {
                        t.webContents.send(g.blurWindow, {
                            type: A,
                            id: b(),
                            method: "blurWindow"
                        })
                    }))) : z({
                        level: "warn",
                        fingerprint: "set-window-listeners",
                        message: "Cannot set window listeners"
                    })
                }(e)
            })), Ue.on("window-removed", (({
                count: e
            }) => {
                var t;
                ke() || 0 === e && (null === (t = Ee()) || void 0 === t || t.close())
            })), Ue.on("window-active-changed", (() => {
                ke() || jn()
            })), Ue.on("multi-window-enabled", (() => {
                eo()
            })), Ue.on("multi-window-disabled", (() => {
                eo()
            })),
            function(e) {
                const t = Ni.startURL;
                if (!t || !e) return;
                const n = new Promise((e => {
                    ve.once("app-initialized", e)
                }));
                Promise.all([e.webAppInitialized, n]).then((() => {
                    i().info("Handling app start navigation to:", function(e) {
                        const t = `${e.protocol}//${e.host}`,
                            n = e.searchParams.keys();
                        return 0 === e.searchParams.size ? t : t + `?${n.reduce(((e,t)=>e+`&${t}=*****`),"").slice(1)}`
                    }(t)), Ni.handleNavigationURL(t)
                })).catch((() => {}))
            }(function() {
                var e;
                const t = null === (e = Kn()) || void 0 === e ? void 0 : e.mainWindow;
                if (!t) {
                    const e = new Error("Error opening initial window");
                    V.captureException(e)
                }
                return t
            }()), Ki(), (0, h.bridgeAPIConnect)((e => {
                const t = JSON.parse(e),
                    n = Ne();
                if ("completeItem" === t.action) {
                    if (null === n) return;
                    v(n.webContents, t.itemId)
                } else if ("uncompleteItem" === t.action) {
                    if (null === n) return;
                    i = n.webContents, o = t.itemId, i.send(g.uncompleteItem, {
                        type: A,
                        id: b(),
                        method: "uncompleteItem",
                        data: o
                    })
                } else t.action;
                var i, o
            })), (0, h.requestInAppPurchaseProducts)(), kt(), L.watch("global_shortcuts", kt), Ue.on("main-window-changed", (e => {
                e && (Gi(e), Qi(e))
            }))
    }

    function no() {
        Dt.init(), o.IS_MAS || o.IS_SNAP || Wt.on("update-downloaded", jn), jn(), ie.init(), eo(), "win32" !== process.platform || o.IS_MSIX || t.app.setAppUserModelId(o.APP_ID), t.Notification.isSupported(), o.IS_PLAYWRIGHT && Ke((e => {
            e.waitForWebApp = () => {
                const e = Oe();
                return e ? e.mainWindow.webAppInitialized : Promise.reject(new Error("no active window"))
            }
        })), t.powerMonitor.on("resume", (() => {
            var e;
            const t = Ne();
            t && setTimeout((() => {
                N(t) && t.webContents.send(g.sendRequestSync, {
                    type: A,
                    id: b(),
                    method: "sendRequestSync"
                })
            }), 500), Le().forEach((e => {
                var t;
                const n = null === (t = e.mainWindow.browserWindow) || void 0 === t ? void 0 : t.webContents;
                n && I(n)
            }));
            const n = Ee(),
                i = null == n || null === (e = n.browserWindow) || void 0 === e ? void 0 : e.webContents;
            i && I(i)
        }))
    }
    V.init(), Ni.init(),
        function() {
            try {
                ae = new(T())({
                    name: "troubleshooting",
                    clearInvalidConfig: !0,
                    defaults: oe
                })
            } catch (e) {
                i().info("Failed to initialize troubleshooting store. Error message is: ", String(e))
            }
        }(),
        function() {
            try {
                K = new(T())({
                    name: "notifications",
                    clearInvalidConfig: !0,
                    defaults: {
                        notificationsCount: 0
                    }
                })
            } catch (e) {
                const t = String(e);
                i().info("Failed to initialize notifications store. Error message is: ", t), z({
                    level: "warn",
                    fingerprint: "notifications-store",
                    message: "Failed to initialize notifications store",
                    context: {
                        error: t
                    }
                })
            }
        }(), F = Oe, t.app.isReady() ? i().info("Could not activate troubleshooting settings: app is ready") : (de() ? (i().info("Disabling hardware acceleration"), t.app.disableHardwareAcceleration()) : async function() {
            if (o.IS_MAS) {
                var e;
                const n = await t.app.getGPUInfo("basic"),
                    o = (null == n || null === (e = n.auxAttributes) || void 0 === e ? void 0 : e.amdSwitchable) ?? !1;
                "iMac" === (null == n ? void 0 : n.machineModelName) && o && (t.app.isReady() ? i().info("Could not disable hardware acceleration for bad AMD GPU on iMac: app is ready") : (i().info("Disabling hardware acceleration"), t.app.disableHardwareAcceleration()))
            }
        }().catch((() => {})), se() && (i().info("Disabling animations"), t.app.commandLine.appendSwitch("wm-window-animations-disabled"))), u()({
            showSaveImageAs: !0
        }), o.IS_MAS || t.app.requestSingleInstanceLock() ? (t.app.on("before-quit", (() => {
            t.app.isReady() && t.globalShortcut.unregisterAll(), Se(!0)
        })), t.autoUpdater.on("before-quit-for-update", (() => Se(!0))), t.app.on("ready", (() => {
            no(), o.IS_PLAYWRIGHT && (Ke((e => {
                e.isQuickAddActive = () => Boolean(Ee()), e.isQuickAddVisible = () => {
                    const e = Ee(),
                        t = null == e ? void 0 : e.browserWindow;
                    return !(!N(t) || !t) && t.isVisible()
                }, e.waitForQuickAdd = () => {
                    const e = Ee();
                    if (!e) throw new Error("Global Quick Add is not active");
                    return e.__getReadyPromise()
                }
            })), Ke((e => {
                e.clickOnTrayMenuItem = e => {
                    if (null === Ri) return;
                    const t = Ri.items.find((t => t.label.includes(e)));
                    t && t.click()
                }
            })), Ke((() => {
                ge(!0)
            }))), f().changeLanguage(t.app.getLocale()).catch((() => {})), "win32" === process.platform && t.app.setAppUserModelId(o.APP_ID), to()
        })), t.app.on("activate", (() => {
            gt()
        })), t.app.on("window-all-closed", (() => {
            t.app.quit()
        }))) : t.app.quit()
})();