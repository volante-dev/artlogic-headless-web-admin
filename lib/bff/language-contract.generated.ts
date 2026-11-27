// Generated from feature038. Independent of all legacy contract fingerprints.
export interface paths {
    "/v1/public/languages/policy": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Active projection only, no preparatory data. Absolute validity lease is 30 seconds.
         * @description Application responses are 200 only, no ETag/304 negotiation; issuedAt/validUntil identify the absolute lease.
         */
        get: operations["readPublicLanguagePolicy"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v1/public/languages/content": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** readRuntimeLanguageContent */
        get: operations["readRuntimeLanguageContent"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v1/public/languages/redirects/resolve": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Resolve an ever-public retired locale address by current public identity; never an arbitrary redirect URL. private, no-store. */
        get: operations["resolveRetiredLanguageAddress"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v1/admin/languages/capabilities": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** readLanguageCapabilities */
        get: operations["readLanguageCapabilities"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v1/admin/languages": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** readAdminLanguages */
        get: operations["readAdminLanguages"];
        put?: never;
        /** createLanguage */
        post: operations["createLanguage"];
        delete?: never;
        options?: never;
        head?: never;
        /** updateLanguageLabelsAndOrder */
        patch: operations["updateLanguageLabelsAndOrder"];
        trace?: never;
    };
    "/v1/admin/languages/{languageId}/prepare": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /** prepareDisabledLanguage */
        post: operations["prepareDisabledLanguage"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v1/admin/languages/{languageId}/targets": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** listLanguageTargets */
        get: operations["listLanguageTargets"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v1/admin/languages/{languageId}/workspaces": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /** openLanguageWorkspace */
        post: operations["openLanguageWorkspace"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v1/admin/languages/workspaces/{workspaceId}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** readLanguageWorkspace */
        get: operations["readLanguageWorkspace"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        /** updateLanguageWorkspace */
        patch: operations["updateLanguageWorkspace"];
        trace?: never;
    };
    "/v1/admin/languages/workspaces/{workspaceId}/approve": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /** approveLanguageWorkspace */
        post: operations["approveLanguageWorkspace"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v1/admin/languages/workspaces/{workspaceId}/rebase": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /** rebaseLanguageWorkspace */
        post: operations["rebaseLanguageWorkspace"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v1/admin/languages/{languageId}/checks": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /** startLanguageReadinessCheck */
        post: operations["startLanguageReadinessCheck"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v1/admin/languages/checks/{checkId}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** readLanguageReadinessCheck */
        get: operations["readLanguageReadinessCheck"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v1/admin/languages/checks/{checkId}/issues": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** listLanguageReadinessIssues */
        get: operations["listLanguageReadinessIssues"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v1/admin/languages/{languageId}/transitions": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /** transitionLanguage */
        post: operations["transitionLanguage"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v1/admin/languages/operations/{operationId}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** readLanguageOperation */
        get: operations["readLanguageOperation"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v1/admin/languages/operations/by-key/{key}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** readLanguageOperationByKey */
        get: operations["readLanguageOperationByKey"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v1/admin/languages/history": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** readLanguageHistory */
        get: operations["readLanguageHistory"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v1/internal/languages/ready": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Operator-enrolled readiness challenge; no admin/session data. Frontend and admin expose /api/internal/languages/ready using the same contract. */
        get: operations["probeLanguageConsumer"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/api/languages/policy": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Anonymous frontend route, bypassed before locale resolution. Direct API upstream; explicit Vercel CDN TTL at most 10 seconds.
         * @description Application responses are 200 only, no ETag/304 negotiation; issuedAt/validUntil identify the absolute lease.
         */
        get: operations["readFrontendCachedLanguagePolicy"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
}
export type webhooks = Record<string, never>;
export interface components {
    schemas: {
        Revision: string;
        LocaleCode: string;
        Digest: string;
        PublicLanguage: {
            code: string;
            intlLocale: string;
            label: string;
            /** @enum {string} */
            direction: "ltr";
        };
        PublicPolicy: {
            /** @constant */
            contractVersion: 1;
            /** Format: uuid */
            siteId: string;
            /** @enum {string} */
            mode: "bootstrap" | "managed";
            publicRevision: string;
            defaultLocale: string;
            locales: components["schemas"]["PublicLanguage"][];
            retiredCodes: string[];
            catalogueId: string;
            /** Format: date-time */
            issuedAt: string;
            /** Format: date-time */
            validUntil: string;
        };
        Logo: {
            /** Format: uuid */
            id: string;
            width: number;
            height: number;
            byteSize: number;
            /** @enum {string} */
            mimeType: "image/webp";
        };
        /** @description Runtime profile only. No new properties or message keys are injected into the legacy SiteContentPublic contract. */
        RuntimeContent: {
            /** @constant */
            contractVersion: 1;
            contentRevision: string;
            locale: string;
            policy: components["schemas"]["PublicPolicy"];
            messages: {
                [key: string]: string;
            };
            logo: components["schemas"]["Logo"] | null;
            whiteLogo: components["schemas"]["Logo"] | null;
            legalPage: components["schemas"]["SiteLegalPageResolved"] | null;
            selectedCatalogueId: string;
        };
        Reason: {
            code: string;
            message: string;
            field?: string;
        };
        Capabilities: {
            /** @constant */
            contractVersion: 1;
            enabled: boolean;
            /** @enum {string} */
            mode: "dormant" | "managed";
            canManage: boolean;
            canTranslate: boolean;
            /** @constant */
            maxLiveLanguages: 8;
            reasons: components["schemas"]["Reason"][];
        };
        Language: {
            /** Format: uuid */
            id: string;
            code: string;
            intlLocale: string;
            label: string;
            /** @enum {string} */
            state: "preparing" | "active" | "disabled";
            isDefault: boolean;
            position: number;
            everPublic: boolean;
            /** @enum {string} */
            supportStatus: "supported" | "restricted";
            restrictions: components["schemas"]["Reason"][];
        };
        AdminPolicy: {
            /** Format: uuid */
            siteId: string;
            revision: string;
            publicRevision: string;
            defaultLocale: string;
            /** @enum {string} */
            mode: "bootstrap" | "managed";
            languages: components["schemas"]["Language"][];
            /** Format: date-time */
            updatedAt: string;
        };
        CreateLanguage: {
            code: string;
            label: string;
        };
        PatchPolicy: {
            labels?: {
                /** Format: uuid */
                languageId: string;
                label: string;
            }[];
            orderedLanguageIds?: string[];
        };
        Source: {
            /** Format: uuid */
            targetId: string;
            /** @enum {string} */
            family: "interface" | "legal_site" | "presentation" | "artwork" | "team" | "editorial" | "taxonomy" | "form" | "commerce_product" | "delivery" | "commerce_legal" | "link_in_bio" | "notification";
            ownerId: string;
            namespace?: string;
            /** @enum {string} */
            scope: "public" | "scheduled" | "draft";
            sourceVersionId: string;
            sourceDigest: string;
            descriptorVersion: string;
            correctionPath: string;
            /** @enum {string} */
            publicationMode: "immediate" | "explicit" | "external_legal";
        };
        TargetPage: {
            items: components["schemas"]["Source"][];
            nextCursor: string | null;
        };
        Field: {
            fieldId: string;
            /** @enum {string} */
            kind: "plain" | "slug" | "rich_text" | "message";
            label: string;
            required: boolean;
            fallbackAllowed: boolean;
            maxLength?: number;
            /** @description Only the value kind authorized by the server-owned field descriptor; native rich-text schema and semantic sanitizer remain mandatory. */
            referenceValue: string | null | components["schemas"]["RichText"] | components["schemas"]["PresentationFooterRichText"];
            /** @description Only the value kind authorized by the server-owned field descriptor; native rich-text schema and semantic sanitizer remain mandatory. */
            value: string | null | components["schemas"]["RichText"] | components["schemas"]["PresentationFooterRichText"];
            /**
             * @description Optional native length unit. Absent means Unicode code points; utf16 preserves validators based on JavaScript string length.
             * @enum {string}
             */
            lengthUnit?: "unicode" | "utf16";
        };
        WorkspaceReceipt: {
            /** Format: uuid */
            id: string;
            revision: components["schemas"]["Revision"];
            /** @enum {string} */
            state: "editing" | "approved" | "stale" | "source_missing";
        };
        Workspace: {
            /** Format: uuid */
            id: string;
            /** Format: uuid */
            languageId: string;
            revision: string;
            source: components["schemas"]["Source"];
            rebaseFieldIds?: string[];
            currentSource?: components["schemas"]["Source"];
            /** @enum {string} */
            state: "editing" | "approved" | "stale" | "source_missing";
            fields: components["schemas"]["Field"][];
            /** Format: date-time */
            updatedAt: string;
        };
        WorkspaceCreate: {
            /** Format: uuid */
            targetId: string;
        };
        WorkspacePatch: {
            values: {
                fieldId: string;
                /** @description Only the value kind authorized by the server-owned field descriptor; native rich-text schema and semantic sanitizer remain mandatory. */
                value: string | null | components["schemas"]["RichText"] | components["schemas"]["PresentationFooterRichText"];
            }[];
        };
        WorkspaceRebase: {
            /** Format: uuid */
            targetId: string;
            selectedFieldIds: string[];
        };
        Counts: {
            expected: number;
            complete: number;
            missing: number;
            fallback: number;
            warnings: number;
        };
        FamilyCounts: {
            /** @enum {string} */
            family: "interface" | "legal_site" | "presentation" | "artwork" | "team" | "editorial" | "taxonomy" | "form" | "commerce_product" | "delivery" | "commerce_legal" | "link_in_bio" | "notification";
            counts: components["schemas"]["Counts"];
        };
        CheckInput: {
            /** @enum {string} */
            scope: "activation" | "edition_update";
            workspaceIds?: string[];
        };
        Check: {
            /** Format: uuid */
            id: string;
            revision: string;
            /** Format: uuid */
            languageId: string;
            /** @enum {string} */
            scope: "activation" | "edition_update";
            /** @enum {string} */
            state: "queued" | "running" | "complete" | "obsolete" | "failed";
            policyRevision: string;
            sourceRevision: string;
            counts: components["schemas"]["Counts"];
            families: components["schemas"]["FamilyCounts"][];
            scannedTargets: number;
            totalTargets: number;
            digest: string | null;
            expiresAt: string | null;
            /** Format: date-time */
            updatedAt: string;
            reasons: components["schemas"]["Reason"][];
        };
        Issue: {
            /** Format: uuid */
            id: string;
            /** Format: uuid */
            languageId: string;
            /** @enum {string} */
            family: "interface" | "legal_site" | "presentation" | "artwork" | "team" | "editorial" | "taxonomy" | "form" | "commerce_product" | "delivery" | "commerce_legal" | "link_in_bio" | "notification";
            ownerId: string;
            sourceVersionId: string;
            fieldId: string;
            /** @enum {string} */
            severity: "blocking" | "warning" | "fallback";
            reason: string;
            correctionPath?: string;
        };
        IssuePage: {
            items: components["schemas"]["Issue"][];
            total: number;
            nextCursor: string | null;
        };
        TransitionInput: {
            /** @enum {string} */
            action: "activate" | "publish_translations";
            /** Format: uuid */
            checkId: string;
            checkDigest: string;
        } | {
            /** @enum {string} */
            action: "deactivate";
        };
        Operation: {
            /** Format: uuid */
            id: string;
            /** Format: uuid */
            key: string;
            /** Format: uuid */
            languageId: string;
            /** @enum {string} */
            action: "activate" | "deactivate" | "publish_translations";
            /** @enum {string} */
            state: "accepted" | "checking" | "committed" | "propagating" | "effective" | "failed" | "unconfirmed";
            expectedRevision: string;
            committedRevision: string | null;
            /** Format: date-time */
            createdAt: string;
            /** Format: date-time */
            deadlineAt: string;
            /** Format: date-time */
            updatedAt: string;
            reasons: components["schemas"]["Reason"][];
        };
        HistoryItem: {
            /** Format: uuid */
            id: string;
            action: string;
            actor: string;
            /** Format: date-time */
            at: string;
            beforeRevision: string;
            afterRevision: string;
            /** @enum {string} */
            result: "effective" | "failed" | "unconfirmed" | "saved";
            operationId: string | null;
        };
        HistoryPage: {
            items: components["schemas"]["HistoryItem"][];
            nextCursor: string | null;
        };
        ErrorDetail: {
            field: string;
            reason: string;
            /** Format: uuid */
            languageId?: string;
            /** @enum {string} */
            family?: "interface" | "legal_site" | "presentation" | "artwork" | "team" | "editorial" | "taxonomy" | "form" | "commerce_product" | "delivery" | "commerce_legal" | "link_in_bio" | "notification";
            ownerId?: string;
            sourceVersionId?: string;
            correctionPath?: string;
        };
        Error: {
            error: {
                code: string;
                message: string;
                /** Format: uuid */
                requestId: string;
                /** Format: uuid */
                operationId?: string;
                details?: components["schemas"]["ErrorDetail"][];
            };
        };
        RedirectResolution: {
            publicRevision: string;
            targetPath: string;
            /** @enum {string} */
            targetKind: "equivalent" | "section" | "home";
        };
        Empty: Record<string, never>;
        ConsumerReceipt: {
            /** Format: uuid */
            siteId: string;
            /** Format: uuid */
            slotId: string;
            deploymentId: string;
            /** Format: uuid */
            challengeId: string;
            /** @constant */
            contractVersion: 1;
            /** @constant */
            runtimeRequired: true;
            observedPublicRevision: components["schemas"]["Revision"];
            catalogueIds: string[];
            descriptorVersion: components["schemas"]["Revision"];
            modules: string[];
            /** Format: date-time */
            observedAt: string;
        };
        SiteLegalRichMark: {
            /** @enum {unknown} */
            type: "bold" | "italic";
        } | {
            /** @constant */
            type: "link";
            attrs: {
                href: string;
            };
        };
        SiteLegalRichNode: {
            /** @constant */
            type: "text";
            text: string;
            marks?: components["schemas"]["SiteLegalRichMark"][];
        } | {
            /** @constant */
            type: "heading";
            attrs: {
                /** @enum {unknown} */
                level: 2 | 3;
            };
            content?: components["schemas"]["SiteLegalRichNode"][];
        } | {
            /** @enum {unknown} */
            type: "paragraph" | "bulletList" | "orderedList" | "listItem" | "blockquote";
            content?: components["schemas"]["SiteLegalRichNode"][];
        } | {
            /** @constant */
            type: "hardBreak";
        };
        SiteLegalRichText: {
            /** @constant */
            type: "doc";
            content: components["schemas"]["SiteLegalRichNode"][];
        };
        SiteLegalPageResolved: {
            title: string;
            body: components["schemas"]["SiteLegalRichText"];
            locale: string;
        };
        RichMark: {
            /** @enum {unknown} */
            type: "bold" | "italic";
        } | {
            /** @constant */
            type: "link";
            attrs: {
                href: string;
            };
        };
        RichNode: {
            /** @constant */
            type: "text";
            text: string;
            marks?: components["schemas"]["RichMark"][];
        } | {
            /** @constant */
            type: "heading";
            attrs: {
                /** @enum {unknown} */
                level: 2 | 3;
            };
            content?: components["schemas"]["RichNode"][];
        } | {
            /** @enum {unknown} */
            type: "paragraph" | "bulletList" | "orderedList" | "listItem" | "blockquote";
            content?: components["schemas"]["RichNode"][];
        } | {
            /** @constant */
            type: "hardBreak";
        };
        RichText: {
            /** @constant */
            type: "doc";
            content: components["schemas"]["RichNode"][];
        };
        PresentationFooterRichMark: {
            /** @enum {unknown} */
            type: "bold" | "italic";
        } | {
            /** @constant */
            type: "link";
            attrs: {
                href: string;
            };
        };
        PresentationFooterRichNode: {
            /** @constant */
            type: "text";
            text: string;
            marks?: components["schemas"]["PresentationFooterRichMark"][];
        } | {
            /** @constant */
            type: "heading";
            attrs: {
                /** @enum {unknown} */
                level: 2 | 3;
            };
            content?: components["schemas"]["PresentationFooterRichNode"][];
        } | {
            /** @enum {unknown} */
            type: "paragraph" | "bulletList" | "orderedList" | "listItem" | "blockquote";
            content?: components["schemas"]["PresentationFooterRichNode"][];
        } | {
            /** @constant */
            type: "hardBreak";
        };
        PresentationFooterRichText: {
            /** @constant */
            type: "doc";
            content: components["schemas"]["PresentationFooterRichNode"][];
        };
    };
    responses: {
        /** @description BadRequest; safe envelope, detailed semantics in http.md. */
        BadRequest: {
            headers: {
                [name: string]: unknown;
            };
            content: {
                "application/json": components["schemas"]["Error"];
            };
        };
        /** @description Unauthorized; safe envelope, detailed semantics in http.md. */
        Unauthorized: {
            headers: {
                [name: string]: unknown;
            };
            content: {
                "application/json": components["schemas"]["Error"];
            };
        };
        /** @description Forbidden; safe envelope, detailed semantics in http.md. */
        Forbidden: {
            headers: {
                [name: string]: unknown;
            };
            content: {
                "application/json": components["schemas"]["Error"];
            };
        };
        /** @description NotFound; safe envelope, detailed semantics in http.md. */
        NotFound: {
            headers: {
                [name: string]: unknown;
            };
            content: {
                "application/json": components["schemas"]["Error"];
            };
        };
        /** @description Conflict; safe envelope, detailed semantics in http.md. */
        Conflict: {
            headers: {
                [name: string]: unknown;
            };
            content: {
                "application/json": components["schemas"]["Error"];
            };
        };
        /** @description PreconditionFailed; safe envelope, detailed semantics in http.md. */
        PreconditionFailed: {
            headers: {
                [name: string]: unknown;
            };
            content: {
                "application/json": components["schemas"]["Error"];
            };
        };
        /** @description PayloadTooLarge; safe envelope, detailed semantics in http.md. */
        PayloadTooLarge: {
            headers: {
                [name: string]: unknown;
            };
            content: {
                "application/json": components["schemas"]["Error"];
            };
        };
        /** @description UnsupportedMediaType; safe envelope, detailed semantics in http.md. */
        UnsupportedMediaType: {
            headers: {
                [name: string]: unknown;
            };
            content: {
                "application/json": components["schemas"]["Error"];
            };
        };
        /** @description UnprocessableContent; safe envelope, detailed semantics in http.md. */
        UnprocessableContent: {
            headers: {
                [name: string]: unknown;
            };
            content: {
                "application/json": components["schemas"]["Error"];
            };
        };
        /** @description PreconditionRequired; safe envelope, detailed semantics in http.md. */
        PreconditionRequired: {
            headers: {
                [name: string]: unknown;
            };
            content: {
                "application/json": components["schemas"]["Error"];
            };
        };
        /** @description RateLimited; safe envelope, detailed semantics in http.md. */
        RateLimited: {
            headers: {
                [name: string]: unknown;
            };
            content: {
                "application/json": components["schemas"]["Error"];
            };
        };
        /** @description Unavailable; safe envelope, detailed semantics in http.md. */
        Unavailable: {
            headers: {
                [name: string]: unknown;
            };
            content: {
                "application/json": components["schemas"]["Error"];
            };
        };
    };
    parameters: {
        IfMatch: string;
        Idempotency: string;
        Cursor: string;
        Limit: number;
        Family: "interface" | "legal_site" | "presentation" | "artwork" | "team" | "editorial" | "taxonomy" | "form" | "commerce_product" | "delivery" | "commerce_legal" | "link_in_bio" | "notification";
    };
    requestBodies: never;
    headers: never;
    pathItems: never;
}
export type $defs = Record<string, never>;
export interface operations {
    readPublicLanguagePolicy: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Success */
            200: {
                headers: {
                    /** @description Public policy envelope; actual shared Vercel cache is /api/languages/policy. */
                    "Cache-Control"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["PublicPolicy"];
                };
            };
            400: components["responses"]["BadRequest"];
            404: components["responses"]["NotFound"];
            409: components["responses"]["Conflict"];
            429: components["responses"]["RateLimited"];
            503: components["responses"]["Unavailable"];
        };
    };
    readRuntimeLanguageContent: {
        parameters: {
            query: {
                locale: string;
                revision: string;
                catalogue: string;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Success */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["RuntimeContent"];
                };
            };
            400: components["responses"]["BadRequest"];
            404: components["responses"]["NotFound"];
            409: components["responses"]["Conflict"];
            429: components["responses"]["RateLimited"];
            503: components["responses"]["Unavailable"];
        };
    };
    resolveRetiredLanguageAddress: {
        parameters: {
            query: {
                path: string;
                revision: string;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Success */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["RedirectResolution"];
                };
            };
            400: components["responses"]["BadRequest"];
            404: components["responses"]["NotFound"];
            409: components["responses"]["Conflict"];
            429: components["responses"]["RateLimited"];
            503: components["responses"]["Unavailable"];
        };
    };
    readLanguageCapabilities: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Success */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Capabilities"];
                };
            };
            400: components["responses"]["BadRequest"];
            401: components["responses"]["Unauthorized"];
            403: components["responses"]["Forbidden"];
            404: components["responses"]["NotFound"];
            409: components["responses"]["Conflict"];
            412: components["responses"]["PreconditionFailed"];
            413: components["responses"]["PayloadTooLarge"];
            415: components["responses"]["UnsupportedMediaType"];
            422: components["responses"]["UnprocessableContent"];
            428: components["responses"]["PreconditionRequired"];
            429: components["responses"]["RateLimited"];
            503: components["responses"]["Unavailable"];
        };
    };
    readAdminLanguages: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Success */
            200: {
                headers: {
                    /** @description Strong resource revision; mandatory on private versioned resources. */
                    ETag?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["AdminPolicy"];
                };
            };
            400: components["responses"]["BadRequest"];
            401: components["responses"]["Unauthorized"];
            403: components["responses"]["Forbidden"];
            404: components["responses"]["NotFound"];
            409: components["responses"]["Conflict"];
            412: components["responses"]["PreconditionFailed"];
            413: components["responses"]["PayloadTooLarge"];
            415: components["responses"]["UnsupportedMediaType"];
            422: components["responses"]["UnprocessableContent"];
            428: components["responses"]["PreconditionRequired"];
            429: components["responses"]["RateLimited"];
            503: components["responses"]["Unavailable"];
        };
    };
    createLanguage: {
        parameters: {
            query?: never;
            header: {
                "Idempotency-Key": components["parameters"]["Idempotency"];
                "If-Match": components["parameters"]["IfMatch"];
                "X-CSRF-Token": string;
            };
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["CreateLanguage"];
            };
        };
        responses: {
            /** @description Success */
            201: {
                headers: {
                    /** @description Strong resource revision; mandatory on private versioned resources. */
                    ETag?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["AdminPolicy"];
                };
            };
            400: components["responses"]["BadRequest"];
            401: components["responses"]["Unauthorized"];
            403: components["responses"]["Forbidden"];
            404: components["responses"]["NotFound"];
            409: components["responses"]["Conflict"];
            412: components["responses"]["PreconditionFailed"];
            413: components["responses"]["PayloadTooLarge"];
            415: components["responses"]["UnsupportedMediaType"];
            422: components["responses"]["UnprocessableContent"];
            428: components["responses"]["PreconditionRequired"];
            429: components["responses"]["RateLimited"];
            503: components["responses"]["Unavailable"];
        };
    };
    updateLanguageLabelsAndOrder: {
        parameters: {
            query?: never;
            header: {
                "If-Match": components["parameters"]["IfMatch"];
                "X-CSRF-Token": string;
            };
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["PatchPolicy"];
            };
        };
        responses: {
            /** @description Success */
            200: {
                headers: {
                    /** @description Strong resource revision; mandatory on private versioned resources. */
                    ETag?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["AdminPolicy"];
                };
            };
            400: components["responses"]["BadRequest"];
            401: components["responses"]["Unauthorized"];
            403: components["responses"]["Forbidden"];
            404: components["responses"]["NotFound"];
            409: components["responses"]["Conflict"];
            412: components["responses"]["PreconditionFailed"];
            413: components["responses"]["PayloadTooLarge"];
            415: components["responses"]["UnsupportedMediaType"];
            422: components["responses"]["UnprocessableContent"];
            428: components["responses"]["PreconditionRequired"];
            429: components["responses"]["RateLimited"];
            503: components["responses"]["Unavailable"];
        };
    };
    prepareDisabledLanguage: {
        parameters: {
            query?: never;
            header: {
                "Idempotency-Key": components["parameters"]["Idempotency"];
                "If-Match": components["parameters"]["IfMatch"];
                "X-CSRF-Token": string;
            };
            path: {
                languageId: string;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["Empty"];
            };
        };
        responses: {
            /** @description Success */
            200: {
                headers: {
                    /** @description Strong resource revision; mandatory on private versioned resources. */
                    ETag?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["AdminPolicy"];
                };
            };
            400: components["responses"]["BadRequest"];
            401: components["responses"]["Unauthorized"];
            403: components["responses"]["Forbidden"];
            404: components["responses"]["NotFound"];
            409: components["responses"]["Conflict"];
            412: components["responses"]["PreconditionFailed"];
            413: components["responses"]["PayloadTooLarge"];
            415: components["responses"]["UnsupportedMediaType"];
            422: components["responses"]["UnprocessableContent"];
            428: components["responses"]["PreconditionRequired"];
            429: components["responses"]["RateLimited"];
            503: components["responses"]["Unavailable"];
        };
    };
    listLanguageTargets: {
        parameters: {
            query?: {
                cursor?: components["parameters"]["Cursor"];
                limit?: components["parameters"]["Limit"];
                family?: components["parameters"]["Family"];
                scope?: "public" | "scheduled" | "draft";
            };
            header?: never;
            path: {
                languageId: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Success */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["TargetPage"];
                };
            };
            400: components["responses"]["BadRequest"];
            401: components["responses"]["Unauthorized"];
            403: components["responses"]["Forbidden"];
            404: components["responses"]["NotFound"];
            409: components["responses"]["Conflict"];
            412: components["responses"]["PreconditionFailed"];
            413: components["responses"]["PayloadTooLarge"];
            415: components["responses"]["UnsupportedMediaType"];
            422: components["responses"]["UnprocessableContent"];
            428: components["responses"]["PreconditionRequired"];
            429: components["responses"]["RateLimited"];
            503: components["responses"]["Unavailable"];
        };
    };
    openLanguageWorkspace: {
        parameters: {
            query?: never;
            header: {
                "Idempotency-Key": components["parameters"]["Idempotency"];
                "X-CSRF-Token": string;
            };
            path: {
                languageId: string;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["WorkspaceCreate"];
            };
        };
        responses: {
            /** @description Success */
            201: {
                headers: {
                    /** @description Strong resource revision; mandatory on private versioned resources. */
                    ETag?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["WorkspaceReceipt"];
                };
            };
            400: components["responses"]["BadRequest"];
            401: components["responses"]["Unauthorized"];
            403: components["responses"]["Forbidden"];
            404: components["responses"]["NotFound"];
            409: components["responses"]["Conflict"];
            412: components["responses"]["PreconditionFailed"];
            413: components["responses"]["PayloadTooLarge"];
            415: components["responses"]["UnsupportedMediaType"];
            422: components["responses"]["UnprocessableContent"];
            428: components["responses"]["PreconditionRequired"];
            429: components["responses"]["RateLimited"];
            503: components["responses"]["Unavailable"];
        };
    };
    readLanguageWorkspace: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                workspaceId: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Success */
            200: {
                headers: {
                    /** @description Strong resource revision; mandatory on private versioned resources. */
                    ETag?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Workspace"];
                };
            };
            400: components["responses"]["BadRequest"];
            401: components["responses"]["Unauthorized"];
            403: components["responses"]["Forbidden"];
            404: components["responses"]["NotFound"];
            409: components["responses"]["Conflict"];
            412: components["responses"]["PreconditionFailed"];
            413: components["responses"]["PayloadTooLarge"];
            415: components["responses"]["UnsupportedMediaType"];
            422: components["responses"]["UnprocessableContent"];
            428: components["responses"]["PreconditionRequired"];
            429: components["responses"]["RateLimited"];
            503: components["responses"]["Unavailable"];
        };
    };
    updateLanguageWorkspace: {
        parameters: {
            query?: never;
            header: {
                "If-Match": components["parameters"]["IfMatch"];
                "X-CSRF-Token": string;
            };
            path: {
                workspaceId: string;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["WorkspacePatch"];
            };
        };
        responses: {
            /** @description Success */
            200: {
                headers: {
                    /** @description Strong resource revision; mandatory on private versioned resources. */
                    ETag?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["WorkspaceReceipt"];
                };
            };
            400: components["responses"]["BadRequest"];
            401: components["responses"]["Unauthorized"];
            403: components["responses"]["Forbidden"];
            404: components["responses"]["NotFound"];
            409: components["responses"]["Conflict"];
            412: components["responses"]["PreconditionFailed"];
            413: components["responses"]["PayloadTooLarge"];
            415: components["responses"]["UnsupportedMediaType"];
            422: components["responses"]["UnprocessableContent"];
            428: components["responses"]["PreconditionRequired"];
            429: components["responses"]["RateLimited"];
            503: components["responses"]["Unavailable"];
        };
    };
    approveLanguageWorkspace: {
        parameters: {
            query?: never;
            header: {
                "Idempotency-Key": components["parameters"]["Idempotency"];
                "If-Match": components["parameters"]["IfMatch"];
                "X-CSRF-Token": string;
            };
            path: {
                workspaceId: string;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["Empty"];
            };
        };
        responses: {
            /** @description Success */
            200: {
                headers: {
                    /** @description Strong resource revision; mandatory on private versioned resources. */
                    ETag?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["WorkspaceReceipt"];
                };
            };
            400: components["responses"]["BadRequest"];
            401: components["responses"]["Unauthorized"];
            403: components["responses"]["Forbidden"];
            404: components["responses"]["NotFound"];
            409: components["responses"]["Conflict"];
            412: components["responses"]["PreconditionFailed"];
            413: components["responses"]["PayloadTooLarge"];
            415: components["responses"]["UnsupportedMediaType"];
            422: components["responses"]["UnprocessableContent"];
            428: components["responses"]["PreconditionRequired"];
            429: components["responses"]["RateLimited"];
            503: components["responses"]["Unavailable"];
        };
    };
    rebaseLanguageWorkspace: {
        parameters: {
            query?: never;
            header: {
                "Idempotency-Key": components["parameters"]["Idempotency"];
                "If-Match": components["parameters"]["IfMatch"];
                "X-CSRF-Token": string;
            };
            path: {
                workspaceId: string;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["WorkspaceRebase"];
            };
        };
        responses: {
            /** @description Success */
            200: {
                headers: {
                    /** @description Strong resource revision; mandatory on private versioned resources. */
                    ETag?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["WorkspaceReceipt"];
                };
            };
            400: components["responses"]["BadRequest"];
            401: components["responses"]["Unauthorized"];
            403: components["responses"]["Forbidden"];
            404: components["responses"]["NotFound"];
            409: components["responses"]["Conflict"];
            412: components["responses"]["PreconditionFailed"];
            413: components["responses"]["PayloadTooLarge"];
            415: components["responses"]["UnsupportedMediaType"];
            422: components["responses"]["UnprocessableContent"];
            428: components["responses"]["PreconditionRequired"];
            429: components["responses"]["RateLimited"];
            503: components["responses"]["Unavailable"];
        };
    };
    startLanguageReadinessCheck: {
        parameters: {
            query?: never;
            header: {
                "Idempotency-Key": components["parameters"]["Idempotency"];
                "If-Match": components["parameters"]["IfMatch"];
                "X-CSRF-Token": string;
            };
            path: {
                languageId: string;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["CheckInput"];
            };
        };
        responses: {
            /** @description Success */
            202: {
                headers: {
                    /** @description Strong resource revision; mandatory on private versioned resources. */
                    ETag?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Check"];
                };
            };
            400: components["responses"]["BadRequest"];
            401: components["responses"]["Unauthorized"];
            403: components["responses"]["Forbidden"];
            404: components["responses"]["NotFound"];
            409: components["responses"]["Conflict"];
            412: components["responses"]["PreconditionFailed"];
            413: components["responses"]["PayloadTooLarge"];
            415: components["responses"]["UnsupportedMediaType"];
            422: components["responses"]["UnprocessableContent"];
            428: components["responses"]["PreconditionRequired"];
            429: components["responses"]["RateLimited"];
            503: components["responses"]["Unavailable"];
        };
    };
    readLanguageReadinessCheck: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                checkId: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Success */
            200: {
                headers: {
                    /** @description Strong resource revision; mandatory on private versioned resources. */
                    ETag?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Check"];
                };
            };
            400: components["responses"]["BadRequest"];
            401: components["responses"]["Unauthorized"];
            403: components["responses"]["Forbidden"];
            404: components["responses"]["NotFound"];
            409: components["responses"]["Conflict"];
            412: components["responses"]["PreconditionFailed"];
            413: components["responses"]["PayloadTooLarge"];
            415: components["responses"]["UnsupportedMediaType"];
            422: components["responses"]["UnprocessableContent"];
            428: components["responses"]["PreconditionRequired"];
            429: components["responses"]["RateLimited"];
            503: components["responses"]["Unavailable"];
        };
    };
    listLanguageReadinessIssues: {
        parameters: {
            query?: {
                cursor?: components["parameters"]["Cursor"];
                limit?: components["parameters"]["Limit"];
                family?: components["parameters"]["Family"];
                severity?: "blocking" | "warning" | "fallback";
            };
            header?: never;
            path: {
                checkId: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Success */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["IssuePage"];
                };
            };
            400: components["responses"]["BadRequest"];
            401: components["responses"]["Unauthorized"];
            403: components["responses"]["Forbidden"];
            404: components["responses"]["NotFound"];
            409: components["responses"]["Conflict"];
            412: components["responses"]["PreconditionFailed"];
            413: components["responses"]["PayloadTooLarge"];
            415: components["responses"]["UnsupportedMediaType"];
            422: components["responses"]["UnprocessableContent"];
            428: components["responses"]["PreconditionRequired"];
            429: components["responses"]["RateLimited"];
            503: components["responses"]["Unavailable"];
        };
    };
    transitionLanguage: {
        parameters: {
            query?: never;
            header: {
                "Idempotency-Key": components["parameters"]["Idempotency"];
                "If-Match": components["parameters"]["IfMatch"];
                "X-CSRF-Token": string;
            };
            path: {
                languageId: string;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["TransitionInput"];
            };
        };
        responses: {
            /** @description Success */
            202: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Operation"];
                };
            };
            400: components["responses"]["BadRequest"];
            401: components["responses"]["Unauthorized"];
            403: components["responses"]["Forbidden"];
            404: components["responses"]["NotFound"];
            409: components["responses"]["Conflict"];
            412: components["responses"]["PreconditionFailed"];
            413: components["responses"]["PayloadTooLarge"];
            415: components["responses"]["UnsupportedMediaType"];
            422: components["responses"]["UnprocessableContent"];
            428: components["responses"]["PreconditionRequired"];
            429: components["responses"]["RateLimited"];
            503: components["responses"]["Unavailable"];
        };
    };
    readLanguageOperation: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                operationId: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Success */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Operation"];
                };
            };
            400: components["responses"]["BadRequest"];
            401: components["responses"]["Unauthorized"];
            403: components["responses"]["Forbidden"];
            404: components["responses"]["NotFound"];
            409: components["responses"]["Conflict"];
            412: components["responses"]["PreconditionFailed"];
            413: components["responses"]["PayloadTooLarge"];
            415: components["responses"]["UnsupportedMediaType"];
            422: components["responses"]["UnprocessableContent"];
            428: components["responses"]["PreconditionRequired"];
            429: components["responses"]["RateLimited"];
            503: components["responses"]["Unavailable"];
        };
    };
    readLanguageOperationByKey: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                key: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Success */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Operation"];
                };
            };
            400: components["responses"]["BadRequest"];
            401: components["responses"]["Unauthorized"];
            403: components["responses"]["Forbidden"];
            404: components["responses"]["NotFound"];
            409: components["responses"]["Conflict"];
            412: components["responses"]["PreconditionFailed"];
            413: components["responses"]["PayloadTooLarge"];
            415: components["responses"]["UnsupportedMediaType"];
            422: components["responses"]["UnprocessableContent"];
            428: components["responses"]["PreconditionRequired"];
            429: components["responses"]["RateLimited"];
            503: components["responses"]["Unavailable"];
        };
    };
    readLanguageHistory: {
        parameters: {
            query?: {
                cursor?: components["parameters"]["Cursor"];
                limit?: components["parameters"]["Limit"];
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Success */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["HistoryPage"];
                };
            };
            400: components["responses"]["BadRequest"];
            401: components["responses"]["Unauthorized"];
            403: components["responses"]["Forbidden"];
            404: components["responses"]["NotFound"];
            409: components["responses"]["Conflict"];
            412: components["responses"]["PreconditionFailed"];
            413: components["responses"]["PayloadTooLarge"];
            415: components["responses"]["UnsupportedMediaType"];
            422: components["responses"]["UnprocessableContent"];
            428: components["responses"]["PreconditionRequired"];
            429: components["responses"]["RateLimited"];
            503: components["responses"]["Unavailable"];
        };
    };
    probeLanguageConsumer: {
        parameters: {
            query: {
                challengeId: string;
            };
            header: {
                /** @description Server-issued challenge expiry, at most eight seconds ahead plus clock tolerance. Never an admin session. */
                "X-Site-Languages-Probe-Expires-At": string;
            };
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Bounded authenticated observation; private, no-store. */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ConsumerReceipt"];
                };
            };
            401: components["responses"]["Unauthorized"];
            503: components["responses"]["Unavailable"];
        };
    };
    readFrontendCachedLanguagePolicy: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Success */
            200: {
                headers: {
                    /** @description Public policy envelope; actual shared Vercel cache is /api/languages/policy. */
                    "Cache-Control"?: string;
                    /** @description max-age=min(10, remaining lease seconds), must-revalidate; no SWR or personalization. */
                    "Vercel-CDN-Cache-Control"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["PublicPolicy"];
                };
            };
            400: components["responses"]["BadRequest"];
            404: components["responses"]["NotFound"];
            409: components["responses"]["Conflict"];
            429: components["responses"]["RateLimited"];
            503: components["responses"]["Unavailable"];
        };
    };
}

export const languageContractDigest="ede54b907fc5860443b592ea434e3b2e7a3d9fb94426667e5250ccb2554e5ab2";
