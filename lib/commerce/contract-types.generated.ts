// Generated from Commerce032 by backend/scripts/generate-contracts.ts. Do not edit.
export interface paths {
    "/v1/public/store": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: operations["commerceCapabilities"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v1/public/store/products": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: operations["commerceListProducts"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v1/public/store/products/{productId}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: operations["commerceReadProduct"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v1/public/store/documents/{kind}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: operations["commerceReadLegalDocument"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v1/public/store/consent-policy": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: operations["commerceConsentPolicy"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v1/internal/store/guest-sessions": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post: operations["commerceCreateGuestSession"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v1/internal/store/cart/validate": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post: operations["commerceValidateCart"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v1/internal/store/quotes": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post: operations["commerceCreateQuote"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v1/internal/store/attempts": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post: operations["commerceStartAttempt"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v1/internal/store/attempts/{attemptId}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: operations["commerceReadAttempt"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v1/internal/store/attempts/{attemptId}/cancel": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post: operations["commerceCancelAttempt"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v1/internal/store/order-documents/read": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post: operations["commerceReadOrderDocument"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v1/internal/store/orders/lookup": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post: operations["commerceLookupOrder"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v1/internal/store/withdrawals": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post: operations["commerceSubmitWithdrawal"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v1/internal/store/consent-receipts": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post: operations["commerceRecordConsent"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v1/admin/store/settings": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: operations["commerceAdminReadSettings"];
        put: operations["commerceAdminUpdateSettings"];
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v1/admin/store/products": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: operations["commerceAdminListProducts"];
        put?: never;
        post: operations["commerceAdminCreateProduct"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v1/admin/store/products/{productId}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: operations["commerceAdminReadProduct"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch: operations["commerceAdminUpdateProduct"];
        trace?: never;
    };
    "/v1/admin/store/products/{productId}/inventory": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: operations["commerceAdminReadInventory"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v1/admin/store/products/{productId}/inventory-adjustments": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post: operations["commerceAdminAdjustInventory"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v1/admin/store/shipping-zones": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: operations["commerceAdminReadShippingZones"];
        put: operations["commerceAdminUpdateShippingZones"];
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v1/admin/store/tax-rules": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: operations["commerceAdminReadTaxRules"];
        put: operations["commerceAdminUpdateTaxRules"];
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v1/admin/store/orders": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: operations["commerceAdminListOrders"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v1/admin/store/orders/{orderId}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: operations["commerceAdminReadOrder"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v1/admin/store/orders/{orderId}/transitions": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post: operations["commerceAdminTransitionOrder"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v1/admin/store/orders/{orderId}/corrections": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post: operations["commerceAdminCorrectOrder"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v1/admin/store/orders/{orderId}/cancellation": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post: operations["commerceAdminCancelOrder"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v1/admin/store/orders/{orderId}/allocation-retry": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post: operations["commerceAdminRetryAllocation"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v1/admin/store/orders/{orderId}/returns": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post: operations["commerceAdminRecordReturn"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v1/admin/store/orders/{orderId}/refund-allocations": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post: operations["commerceAdminAllocateRefund"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v1/admin/store/orders/{orderId}/notifications/{notificationId}/retry": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post: operations["commerceAdminRetryNotification"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v1/admin/store/withdrawals": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: operations["commerceAdminListWithdrawals"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v1/admin/store/withdrawals/{id}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: operations["commerceAdminReadWithdrawal"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch: operations["commerceAdminUpdateWithdrawal"];
        trace?: never;
    };
    "/v1/admin/store/documents": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: operations["commerceAdminListLegalDocuments"];
        put?: never;
        post: operations["commerceAdminCreateLegalDocument"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v1/admin/store/documents/{id}/publish": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post: operations["commerceAdminPublishLegalDocument"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v1/admin/store/incidents": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: operations["commerceAdminListIncidents"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v1/admin/store/attempts/{attemptId}/reconcile": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post: operations["commerceAdminReconcileAttempt"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v1/webhooks/stripe": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post: operations["commerceStripeWebhook"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v1/public/store/checkout-options": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: operations["commerceCheckoutOptions"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v1/internal/store/attempts/{attemptId}/mock-confirm": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /** @description Registered only in mock/test with authenticated local synthetic dependencies. Never available for real sales. */
        post: operations["commerceMockConfirmAttempt"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v1/admin/store/orders/{orderId}/documents/{documentId}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: operations["commerceAdminReadOrderDocument"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v1/admin/store/withdrawals/{id}/notifications/{notificationId}/retry": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /** Retry a withdrawal acknowledgement with fresh authority and explicit human decision */
        post: operations["commerceAdminRetryWithdrawalNotification"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v1/public/store/delivery-capabilities": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * commerceDeliveryCapabilities
         * @description Optional delivery capability. Legacy routes and response shapes remain unchanged.
         */
        get: operations["commerceDeliveryCapabilities"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v1/admin/store/delivery-methods": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * commerceAdminListDeliveryMethods
         * @description Optional delivery capability. Legacy routes and response shapes remain unchanged.
         */
        get: operations["commerceAdminListDeliveryMethods"];
        put?: never;
        /**
         * commerceAdminCreateDeliveryMethod
         * @description Optional delivery capability. Legacy routes and response shapes remain unchanged.
         */
        post: operations["commerceAdminCreateDeliveryMethod"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v1/admin/store/delivery-methods/{methodId}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * commerceAdminReadDeliveryMethod
         * @description Optional delivery capability. Legacy routes and response shapes remain unchanged.
         */
        get: operations["commerceAdminReadDeliveryMethod"];
        /**
         * commerceAdminUpdateDeliveryMethod
         * @description Optional delivery capability. Legacy routes and response shapes remain unchanged.
         */
        put: operations["commerceAdminUpdateDeliveryMethod"];
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v1/admin/store/pickup": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * commerceAdminReadPickup
         * @description Optional delivery capability. Legacy routes and response shapes remain unchanged.
         */
        get: operations["commerceAdminReadPickup"];
        /**
         * commerceAdminUpdatePickup
         * @description Optional delivery capability. Legacy routes and response shapes remain unchanged.
         */
        put: operations["commerceAdminUpdatePickup"];
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v1/admin/store/delivery/products/{productId}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * commerceAdminReadDeliveryProduct
         * @description Optional delivery capability. Legacy routes and response shapes remain unchanged.
         */
        get: operations["commerceAdminReadDeliveryProduct"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        /**
         * commerceAdminUpdateDeliveryProduct
         * @description Optional delivery capability. Legacy routes and response shapes remain unchanged.
         */
        patch: operations["commerceAdminUpdateDeliveryProduct"];
        trace?: never;
    };
    "/v1/admin/store/delivery/products": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * commerceAdminCreateDeliveryProduct
         * @description Optional delivery capability. Legacy routes and response shapes remain unchanged.
         */
        post: operations["commerceAdminCreateDeliveryProduct"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v1/internal/store/delivery-plan": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * commerceDeliveryPlan
         * @description Optional delivery capability. Legacy routes and response shapes remain unchanged.
         */
        post: operations["commerceDeliveryPlan"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v1/internal/store/delivery-quotes": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * commerceDeliveryQuote
         * @description Optional delivery capability. Legacy routes and response shapes remain unchanged.
         */
        post: operations["commerceDeliveryQuote"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v1/admin/store/delivery-capabilities": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * commerceAdminDeliveryCapabilities
         * @description Optional delivery capability. Legacy routes and response shapes remain unchanged.
         */
        get: operations["commerceAdminDeliveryCapabilities"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v1/internal/store/delivery-capabilities": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * commerceInternalDeliveryCapabilities
         * @description Optional delivery capability. Legacy routes and response shapes remain unchanged.
         */
        get: operations["commerceInternalDeliveryCapabilities"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v1/admin/store/orders/{orderId}/delivery": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * commerceAdminReadOrderDelivery
         * @description Optional delivery capability. Legacy routes and response shapes remain unchanged.
         */
        get: operations["commerceAdminReadOrderDelivery"];
        put?: never;
        /**
         * commerceAdminFulfillDelivery
         * @description Optional delivery capability. Legacy routes and response shapes remain unchanged.
         */
        post: operations["commerceAdminFulfillDelivery"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v1/internal/store/orders/delivery-lookup": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * commerceDeliveryLookupOrder
         * @description Optional delivery capability. Legacy routes and response shapes remain unchanged.
         */
        post: operations["commerceDeliveryLookupOrder"];
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
        CommerceError: {
            error: {
                /** @enum {string} */
                code: "validation_failed" | "unauthorized" | "forbidden" | "not_found" | "order_not_found" | "revision_conflict" | "quote_changed" | "out_of_stock" | "idempotency_conflict" | "attempt_in_progress" | "quote_expired" | "checkout_expired" | "destination_unavailable" | "tax_rule_missing" | "terms_not_current" | "amount_out_of_range" | "rate_limited" | "checkout_unavailable" | "provider_unavailable" | "persistence_unavailable";
                requestId: string;
                issues?: {
                    path: string;
                    code: string;
                }[];
            };
        };
        CommerceAddress: {
            fullName: string;
            line1: string;
            line2?: string;
            locality: string;
            region?: string;
            postalCode?: string;
            country: string;
            phone?: string;
        };
        CommerceMoneyBreakdown: {
            /** @enum {string} */
            currency: "EUR";
            itemsGross: number;
            itemsNet: number;
            itemsTax: number;
            shippingGross: number;
            shippingNet: number;
            shippingTax: number;
            totalGross: number;
        };
        CommerceCartLineInput: {
            /** Format: uuid */
            productId: string;
            quantity: number;
        };
        CommerceCartInput: {
            items: components["schemas"]["CommerceCartLineInput"][];
            locale: string;
            cartRevision: string;
        };
        CommerceCartValidation: {
            cartRevision: string;
            /** @enum {string} */
            currency: "EUR";
            lines: {
                /** Format: uuid */
                productId: string;
                requestedQuantity: number;
                maxPurchasableQuantity: number;
                /** @enum {string} */
                status: "valid" | "insufficient" | "unavailable";
                grossUnitAmount?: number;
            }[];
        };
        CommerceProductTranslation: {
            title: string;
            description: string;
        };
        CommerceProductImageInput: {
            /** Format: uuid */
            assetId: string;
            alt: {
                [key: string]: string;
            };
        };
        CommerceImageVariant: {
            /** Format: uri */
            url: string;
            width: number;
            height?: number;
        };
        CommerceProductImage: {
            /** Format: uuid */
            assetId: string;
            alt: string;
            width: number;
            height: number;
            /** Format: uri */
            src: string;
            variants: components["schemas"]["CommerceImageVariant"][];
        };
        CommerceProductInput: {
            sku: string;
            /** @enum {string} */
            kind: "book" | "goodie";
            isNewBook: boolean;
            translations: {
                [key: string]: components["schemas"]["CommerceProductTranslation"];
            };
            images: components["schemas"]["CommerceProductImageInput"][];
            attributes?: {
                author?: string;
                publisher?: string;
                isbn?: string;
                format?: string;
            };
            grossUnitAmount: number;
            publisherGrossAmount?: number;
            taxCategory: string;
            /** @enum {string} */
            status: "draft" | "published" | "archived";
        };
        CommerceProductPatch: {
            sku?: string;
            /** @enum {string} */
            kind?: "book" | "goodie";
            isNewBook?: boolean;
            translations?: {
                [key: string]: components["schemas"]["CommerceProductTranslation"];
            };
            images?: components["schemas"]["CommerceProductImageInput"][];
            attributes?: {
                author?: string;
                publisher?: string;
                isbn?: string;
                format?: string;
            };
            grossUnitAmount?: number;
            publisherGrossAmount?: number;
            taxCategory?: string;
            /** @enum {string} */
            status?: "draft" | "published" | "archived";
        };
        CommerceInventory: {
            /** Format: uuid */
            productId: string;
            onHand: number;
            reserved: number;
            allocated: number;
            available: number;
            revision: number;
        };
        CommerceProductAdmin: {
            /** Format: uuid */
            id: string;
            sku: string;
            /** @enum {string} */
            kind: "book" | "goodie";
            isNewBook: boolean;
            translations: {
                [key: string]: components["schemas"]["CommerceProductTranslation"];
            };
            images: components["schemas"]["CommerceProductImageInput"][];
            attributes?: {
                author?: string;
                publisher?: string;
                isbn?: string;
                format?: string;
            };
            grossUnitAmount: number;
            publisherGrossAmount?: number;
            taxCategory: string;
            /** @enum {string} */
            status: "draft" | "published" | "archived";
            revision: number;
            /** Format: date-time */
            createdAt: string;
            /** Format: date-time */
            updatedAt: string;
            inventory: components["schemas"]["CommerceInventory"];
        };
        CommerceProductCreate: {
            sku: string;
            /** @enum {string} */
            kind: "book" | "goodie";
            isNewBook: boolean;
            translations: {
                [key: string]: components["schemas"]["CommerceProductTranslation"];
            };
            images: components["schemas"]["CommerceProductImageInput"][];
            attributes?: {
                author?: string;
                publisher?: string;
                isbn?: string;
                format?: string;
            };
            grossUnitAmount: number;
            publisherGrossAmount?: number;
            taxCategory: string;
            /** @enum {string} */
            status: "draft" | "published" | "archived";
            initialStock: number;
        };
        CommerceProductPublic: {
            /** Format: uuid */
            id: string;
            sku: string;
            /** @enum {string} */
            kind: "book" | "goodie";
            title: string;
            description: string;
            attributes: {
                author?: string;
                publisher?: string;
                isbn?: string;
                format?: string;
            };
            grossUnitAmount: number;
            /** @enum {string} */
            currency: "EUR";
            taxDisplayLabel: string;
            /** @enum {string} */
            availability: "available" | "out_of_stock";
            maxPurchasableQuantity: number;
            images: components["schemas"]["CommerceProductImage"][];
        };
        CommerceLegalLinks: {
            legal: string;
            terms: string;
            privacy: string;
            withdrawal: string;
        };
        CommerceCapabilities: {
            enabled: boolean;
            checkoutReady: boolean;
            trackingAvailable: boolean;
            siteName: string;
            locale: string;
            /** @enum {string} */
            currency: "EUR";
            legalLinks: components["schemas"]["CommerceLegalLinks"];
            consentPolicyVersion: string;
        };
        CommerceGuestSessionInput: {
            locale: string;
            /** @enum {string} */
            purpose: "checkout" | "withdrawal";
        };
        CommerceGuestSession: {
            /** Format: uuid */
            id: string;
            capability: string;
            /** @enum {string} */
            purpose: "checkout" | "withdrawal";
            /** Format: date-time */
            expiresAt: string;
            /** Format: uuid */
            activeAttemptId?: string;
        };
        CommerceQuoteInput: {
            items: components["schemas"]["CommerceCartLineInput"][];
            locale: string;
            /** Format: email */
            email: string;
            shippingAddress: components["schemas"]["CommerceAddress"];
            billingSameAsShipping: boolean;
            billingAddress?: components["schemas"]["CommerceAddress"];
        };
        CommerceTaxLine: {
            rateBps: number;
            category: string;
            gross: number;
            net: number;
            tax: number;
            exemptionReason?: string;
        };
        CommerceQuoteLine: {
            /** Format: uuid */
            productId: string;
            sku: string;
            title: string;
            quantity: number;
            unitGross: number;
            gross: number;
            net: number;
            tax: number;
            rateBps: number;
            taxCategory: string;
            productRevision: number;
        };
        CommerceShippingOption: {
            /** Format: uuid */
            zoneId: string;
            label: string;
            gross: number;
            deliveryEstimate: string;
            phoneRequired: boolean;
        };
        CommerceQuote: {
            /** Format: uuid */
            id: string;
            /** Format: date-time */
            expiresAt: string;
            locale: string;
            lines: components["schemas"]["CommerceQuoteLine"][];
            shippingAddress: components["schemas"]["CommerceAddress"];
            billingAddress: components["schemas"]["CommerceAddress"];
            shippingOption: components["schemas"]["CommerceShippingOption"];
            amounts: components["schemas"]["CommerceMoneyBreakdown"];
            shippingTaxLines: components["schemas"]["CommerceTaxLine"][];
            importDisclosure: string;
            termsVersion: string;
            termsHash: string;
            fingerprint: string;
        };
        CommerceAcceptedTerms: {
            version: string;
            hash: string;
            /** @enum {boolean} */
            accepted: true;
        };
        CommerceAttemptInput: {
            /** Format: uuid */
            quoteId: string;
            quoteFingerprint: string;
            acceptedTerms: components["schemas"]["CommerceAcceptedTerms"];
        };
        CommercePayment: {
            /** @enum {string} */
            mode: "mock" | "stripe";
            publishableKey: string;
            clientSecret: string;
            providerSessionId: string;
        };
        CommerceAttempt: {
            /** Format: uuid */
            id: string;
            /** @enum {string} */
            status: "creating" | "payable" | "processing" | "reconciling" | "cancel_requested" | "paid" | "failed" | "expired" | "cancelled" | "paid_unfulfillable";
            /** Format: date-time */
            expiresAt: string;
            /** @enum {string} */
            paymentState: "unpaid" | "processing" | "paid" | "unknown" | "failed";
            orderNumber?: string;
            /** @enum {string} */
            nextAction: "pay" | "wait" | "confirmed" | "retry" | "contact";
            payment?: components["schemas"]["CommercePayment"];
            order?: components["schemas"]["CommerceOrderConfirmation"];
            checkout?: {
                quote: components["schemas"]["CommerceQuote"];
                /** Format: email */
                email: string;
            };
        };
        CommerceShipmentInput: {
            /** Format: date-time */
            shippedAt: string;
            carrier: string;
            trackingNumber?: string;
            /** Format: uri */
            trackingUrl?: string;
        };
        CommerceOrderTracking: {
            orderNumber: string;
            items: {
                title: string;
                quantity: number;
            }[];
            totalGross: number;
            /** @enum {string} */
            currency: "EUR";
            /** @enum {string|null} */
            fulfillmentStatus: "confirmed" | "processing" | "shipped" | "delivered" | null;
            steps: {
                /** @enum {string} */
                status: "confirmed" | "processing" | "shipped" | "delivered";
                /** Format: date-time */
                at: string;
            }[];
            exception?: string;
            shipment?: components["schemas"]["CommerceShipmentInput"];
            documents: components["schemas"]["CommerceOrderDocumentSummary"][];
        };
        CommerceLookup: {
            orderNumber: string;
            email: string;
        };
        CommerceDocumentRead: {
            /** Format: uuid */
            attemptId: string;
            /** Format: uuid */
            documentId: string;
        } | {
            orderNumber: string;
            email: string;
            /** Format: uuid */
            documentId: string;
        };
        CommerceWithdrawalInput: {
            fullName: string;
            contractReference: string;
            /** Format: email */
            receiptEmail: string;
            declaration: string;
            /** @enum {boolean} */
            confirmed: true;
            locale: string;
        };
        CommerceWithdrawalReceipt: {
            /** Format: uuid */
            id: string;
            reference: string;
            /** Format: date-time */
            receivedAt: string;
            declaration: string;
            fullName: string;
            contractReference: string;
        };
        CommerceWithdrawalAdmin: {
            /** Format: uuid */
            id: string;
            /** Format: date-time */
            receivedAt: string;
            fullName: string;
            contractReference: string;
            /** Format: email */
            receiptEmail: string;
            declaration: string;
            /** @enum {string} */
            status: "received" | "reviewing" | "resolved";
            note: string;
            revision: number;
            /** Format: uuid */
            orderId?: string;
            submissions?: components["schemas"]["CommerceWithdrawalReceipt"][];
            notifications?: components["schemas"]["CommerceNotification"][];
        };
        CommerceConsentCategory: {
            id: string;
            label: string;
            description: string;
            required: boolean;
            providers: string[];
        };
        CommerceConsentPolicy: {
            version: string;
            locale: string;
            categories: components["schemas"]["CommerceConsentCategory"][];
            expiresInSeconds: number;
        };
        CommerceConsentInput: {
            policyVersion: string;
            categories: string[];
            /** @enum {string} */
            choice: "accept" | "reject" | "customize";
            /** Format: uuid */
            pseudonymousId: string;
            locale: string;
        };
        CommerceConsentReceipt: {
            /** Format: uuid */
            id: string;
            /** Format: date-time */
            receivedAt: string;
            /** Format: date-time */
            expiresAt: string;
        };
        CommerceLegalDocumentInput: {
            /** @enum {string} */
            kind: "legal" | "terms" | "privacy" | "withdrawal";
            locale: string;
            title: string;
            content: string;
            sellerValidated: boolean;
        };
        CommerceLegalDocument: {
            /** Format: uuid */
            id: string;
            /** @enum {string} */
            kind: "legal" | "terms" | "privacy" | "withdrawal";
            locale: string;
            version: string;
            title: string;
            content: string;
            hash: string;
            /** @enum {string} */
            status: "draft" | "published";
            sellerValidated: boolean;
            revision: number;
            /** Format: date-time */
            publishedAt?: string;
        };
        CommerceSellerProfile: {
            legalName: string;
            tradeName: string;
            legalForm?: string;
            registeredAddress: components["schemas"]["CommerceAddress"];
            registrationNumber?: string;
            registrationCity?: string;
            capital?: string;
            vatNumber?: string;
            /** Format: email */
            email: string;
            phone: string;
            publicationDirector: string;
            returnAddress: components["schemas"]["CommerceAddress"];
            complaintsContact: string;
            mediator?: string;
            country: string;
            validated: boolean;
        };
        CommerceSettingsInput: {
            seller: components["schemas"]["CommerceSellerProfile"];
            minimumCharge: number;
            maximumCharge: number;
            accountQualified: boolean;
            notificationQualified: boolean;
            invoiceRequired: boolean;
            invoiceSeries: string;
            destinationsQualified: string[];
            retentionPolicyValidated: boolean;
            addressRules: {
                [key: string]: components["schemas"]["CommerceCountryAddressRule"];
            };
        };
        CommerceSettings: {
            settings: components["schemas"]["CommerceSettingsInput"];
            revision: number;
            enabled: boolean;
            checkoutReady: boolean;
            reasons: string[];
            historicalOrders: boolean;
        };
        CommerceShippingZone: {
            /** Format: uuid */
            id: string;
            label: {
                [key: string]: string;
            };
            countries: string[];
            active: boolean;
            grossAmount: number;
            deliveryEstimate: {
                [key: string]: string;
            };
            importDisclosure: {
                [key: string]: string;
            };
            phoneRequired: boolean;
        };
        CommerceShippingZones: {
            zones: components["schemas"]["CommerceShippingZone"][];
            revision: number;
        };
        CommerceShippingZonesInput: {
            zones: components["schemas"]["CommerceShippingZone"][];
        };
        CommerceTaxRule: {
            /** Format: uuid */
            id: string;
            country: string;
            category: string;
            rateBps: number;
            exemptionReason: string;
            validated: boolean;
        };
        CommerceTaxRules: {
            rules: components["schemas"]["CommerceTaxRule"][];
            revision: number;
        };
        CommerceTaxRulesInput: {
            rules: components["schemas"]["CommerceTaxRule"][];
        };
        CommerceInventoryMovement: {
            /** Format: uuid */
            id: string;
            /** Format: uuid */
            productId: string;
            deltaOnHand: number;
            deltaReserved: number;
            deltaAllocated: number;
            reason: string;
            /** Format: uuid */
            actorId?: string;
            /** Format: date-time */
            createdAt: string;
            /** Format: uuid */
            referenceId?: string;
        };
        CommerceInventoryHistory: {
            balance: components["schemas"]["CommerceInventory"];
            movements: components["schemas"]["CommerceInventoryMovement"][];
            nextCursor: string | null;
        };
        CommerceNotification: {
            /** Format: uuid */
            id: string;
            kind: string;
            /** @enum {string} */
            status: "pending" | "sending" | "accepted" | "uncertain" | "failed";
            attempts: number;
            /** Format: date-time */
            nextRetryAt?: string;
            errorCode?: string;
            manualRetryRequired: boolean;
        };
        CommerceOrderEvent: {
            /** Format: uuid */
            id: string;
            /** Format: date-time */
            at: string;
            /** Format: uuid */
            actorId?: string;
            kind: string;
            reason?: string;
            previousStatus?: string;
            nextStatus?: string;
        };
        CommerceOrderDocumentSummary: {
            /** Format: uuid */
            id: string;
            /** @enum {string} */
            kind: "receipt" | "invoice" | "credit_note";
            number: string;
            /** Format: date-time */
            issuedAt: string;
        };
        CommerceAdminOrder: {
            /** Format: uuid */
            id: string;
            orderNumber: string;
            /** Format: date-time */
            createdAt: string;
            revision: number;
            /** Format: email */
            email: string;
            shippingAddress: components["schemas"]["CommerceAddress"];
            billingAddress: components["schemas"]["CommerceAddress"];
            lines: components["schemas"]["CommerceQuoteLine"][];
            amounts: components["schemas"]["CommerceMoneyBreakdown"];
            /** @enum {string|null} */
            fulfillmentStatus: "confirmed" | "processing" | "shipped" | "delivered" | null;
            /** @enum {string} */
            financialStatus: "paid" | "partially_refunded" | "refunded";
            /** Format: date-time */
            cancelledAt?: string;
            shipment?: components["schemas"]["CommerceShipmentInput"];
            notifications: components["schemas"]["CommerceNotification"][];
            documents: components["schemas"]["CommerceOrderDocumentSummary"][];
            events: components["schemas"]["CommerceOrderEvent"][];
            allowedActions: string[];
            exception?: string;
            hasDispute: boolean;
            paidUnfulfillable: boolean;
            financialUncertain: boolean;
            lineQuantities: {
                /** Format: uuid */
                productId: string;
                quantity: number;
                allocatedQuantity: number;
                shippedQuantity: number;
                receivedQuantity: number;
                restockedQuantity: number;
            }[];
            refunds: {
                id: string;
                grossAmount: number;
                /** @enum {string} */
                status: "pending" | "succeeded" | "failed";
                allocationComplete: boolean;
                allocation?: {
                    lines: {
                        /** Format: uuid */
                        productId: string;
                        grossAmount: number;
                    }[];
                    shippingGross: number;
                };
            }[];
            disputes: {
                id: string;
                grossAmount: number;
                status: string;
            }[];
            /** Format: uuid */
            attemptId: string;
        };
        CommerceOrderSummary: {
            /** Format: uuid */
            id: string;
            orderNumber: string;
            /** Format: date-time */
            createdAt: string;
            totalGross: number;
            /** @enum {string} */
            currency: "EUR";
            /** @enum {string|null} */
            fulfillmentStatus: "confirmed" | "processing" | "shipped" | "delivered" | null;
            /** @enum {string} */
            financialStatus: "paid" | "partially_refunded" | "refunded";
            exception?: string;
            hasDispute: boolean;
            paidUnfulfillable: boolean;
            financialUncertain: boolean;
        };
        CommerceIncident: {
            /** Format: uuid */
            id: string;
            /** Format: uuid */
            entityId: string;
            /** @enum {string} */
            kind: "attempt" | "stock" | "notification" | "document" | "configuration" | "finance" | "retention";
            code: string;
            /** Format: date-time */
            since: string;
            /** Format: date-time */
            nextRetryAt?: string;
            requiresAction: boolean;
            /** @enum {string} */
            entityKind?: "order" | "withdrawal" | "attempt" | "site";
        };
        CommerceActionReceipt: {
            /** Format: uuid */
            id: string;
            /** Format: uuid */
            entityId: string;
            status: string;
            revision?: number;
        };
        CommerceWebhookAck: {
            received: boolean;
            ignored?: boolean;
        };
        CommerceProductPublicPage: {
            items: components["schemas"]["CommerceProductPublic"][];
            nextCursor: string | null;
        };
        CommerceProductAdminPage: {
            items: components["schemas"]["CommerceProductAdmin"][];
            nextCursor: string | null;
        };
        CommerceOrderSummaryPage: {
            items: components["schemas"]["CommerceOrderSummary"][];
            nextCursor: string | null;
        };
        CommerceWithdrawalAdminPage: {
            items: components["schemas"]["CommerceWithdrawalAdmin"][];
            nextCursor: string | null;
        };
        CommerceLegalDocumentPage: {
            items: components["schemas"]["CommerceLegalDocument"][];
            nextCursor: string | null;
        };
        CommerceIncidentPage: {
            items: components["schemas"]["CommerceIncident"][];
            nextCursor: string | null;
        };
        CommerceCountryAddressRule: {
            postalCodeRequired: boolean;
            regionRequired: boolean;
        };
        CommerceCheckoutOptions: {
            destinations: string[];
            addressRules: {
                [key: string]: components["schemas"]["CommerceCountryAddressRule"];
            };
            phoneRequiredCountries: string[];
        };
        CommerceOrderConfirmation: {
            orderNumber: string;
            /** Format: date-time */
            createdAt: string;
            /** @enum {string|null} */
            fulfillmentStatus: "confirmed" | "processing" | "shipped" | "delivered" | null;
            paidUnfulfillable: boolean;
            lines: components["schemas"]["CommerceQuoteLine"][];
            amounts: components["schemas"]["CommerceMoneyBreakdown"];
            documents: components["schemas"]["CommerceOrderDocumentSummary"][];
        };
        CommerceMockConfirmInput: {
            /** @enum {string} */
            outcome: "paid" | "declined";
        };
        CommerceCancelAttemptInput: {
            /** @enum {string} */
            reason: "edit_checkout" | "customer_cancel";
        };
        CommerceAdminAdjustInventoryInput: {
            delta: number;
            reason: string;
            expectedRevision: number;
        };
        CommerceAdminTransitionOrderInput: {
            /** @enum {string} */
            target: "processing" | "shipped" | "delivered";
            shipment?: components["schemas"]["CommerceShipmentInput"];
            expectedRevision: number;
        };
        CommerceAdminCorrectOrderInput: {
            /** @enum {string} */
            target: "confirmed" | "processing" | "shipped" | "delivered";
            expectedRevision: number;
            reason: string;
        };
        CommerceAdminCancelOrderInput: {
            expectedRevision: number;
            reason: string;
        };
        CommerceAdminRetryAllocationInput: {
            expectedRevision: number;
        };
        CommerceAdminRecordReturnInput: {
            lines: {
                /** Format: uuid */
                productId: string;
                receivedQuantity: number;
                restockedQuantity: number;
            }[];
            expectedRevision: number;
            reason: string;
        };
        CommerceAdminAllocateRefundInput: {
            refundId: string;
            lines: {
                /** Format: uuid */
                productId: string;
                grossAmount: number;
            }[];
            shippingGross: number;
            expectedRevision: number;
            reason: string;
        };
        CommerceAdminRetryNotificationInput: {
            /** @enum {boolean} */
            confirmed: true;
            reason: string;
        };
        CommerceAdminUpdateWithdrawalInput: {
            /** @enum {string} */
            status: "received" | "reviewing" | "resolved";
            note: string;
        };
        CommerceAdminPublishLegalDocumentInput: {
            expectedRevision: number;
            /** @enum {boolean} */
            sellerValidated: true;
        };
        CommerceAdminReconcileAttemptInput: {
            reason: string;
        };
        /**
         * Format: binary
         * @description Exact raw body, signature verified before JSON parsing
         */
        CommerceStripeWebhookInput: string;
        CommerceDeliveryCalendar: {
            timeZone: string;
            workingDays: number[];
            cutoff: string;
            /** @enum {string} */
            holidayRegion: "fr-metropole" | "none";
            extraClosedDates: string[];
        };
        CommerceDeliveryZone: {
            /** Format: uuid */
            id: string;
            active: boolean;
            countries: string[];
            label: {
                [key: string]: string;
            };
            grossAmount: number;
            phoneRequired: boolean;
            importDisclosure: {
                [key: string]: string;
            };
            leadTimeHours?: number;
        };
        CommerceDeliveryMethodInput: {
            label: {
                [key: string]: string;
            };
            active: boolean;
            leadTimeHours: number;
            calendar: components["schemas"]["CommerceDeliveryCalendar"];
            zones: components["schemas"]["CommerceDeliveryZone"][];
        };
        CommerceDeliveryMethod: {
            label: {
                [key: string]: string;
            };
            active: boolean;
            leadTimeHours: number;
            calendar: components["schemas"]["CommerceDeliveryCalendar"];
            zones: components["schemas"]["CommerceDeliveryZone"][];
            /** Format: uuid */
            id: string;
            revision: number;
            legacyRates: boolean;
            qualified: boolean;
            archived: boolean;
            /** Format: date-time */
            createdAt: string;
            /** Format: date-time */
            updatedAt: string;
        };
        CommerceDeliveryMethods: {
            items: components["schemas"]["CommerceDeliveryMethod"][];
        };
        CommercePickupSettingsInput: {
            label: {
                [key: string]: string;
            };
            address: components["schemas"]["CommerceAddress"];
            leadTimeHours: number;
            calendar: components["schemas"]["CommerceDeliveryCalendar"];
        };
        CommercePickupSettings: {
            settings: components["schemas"]["CommercePickupDraftSettings"];
            revision: number;
        };
        CommerceDeliveryCapabilities: {
            supported: boolean;
            enabled: boolean;
            calendarDefaults: components["schemas"]["CommerceDeliveryCalendar"];
        };
        CommerceProductDeliveryPolicy: {
            /** Format: uuid */
            productId: string;
            revision: number;
            allowedMethodIds: string[];
            /** @constant */
            pickupAvailable: true;
        };
        CommerceProductDeliveryPatch: {
            allowedMethodIds: string[];
            expectedPolicyRevision: number;
        };
        CommerceDeliveryProduct: {
            product: components["schemas"]["CommerceProductAdmin"];
            delivery: components["schemas"]["CommerceProductDeliveryPolicy"];
            methods: components["schemas"]["CommerceDeliveryMethod"][];
        };
        CommerceDeliveryProductCreate: {
            product: components["schemas"]["CommerceProductCreate"];
            allowedMethodIds: string[];
        };
        CommerceDeliveryProductPatch: {
            product: components["schemas"]["CommerceProductPatch"];
            delivery: components["schemas"]["CommerceProductDeliveryPatch"];
        };
        CommerceDeliveryEstimate: {
            /** Format: date */
            date: string;
            /** Format: date-time */
            cutoffAt: string;
            /** Format: date-time */
            estimatedAt: string;
            timeZone: string;
            leadTimeHours: number;
            calendarFingerprint: string;
        };
        CommerceDeliveryGroup: {
            id: string;
            methodId: string;
            label: string;
            /** Format: uuid */
            zoneId: string | null;
            items: components["schemas"]["CommerceCartLineInput"][];
            grossAmount: number;
            estimate: components["schemas"]["CommerceDeliveryEstimate"];
            phoneRequired: boolean;
            importDisclosure: string;
            productTitles: {
                [key: string]: string;
            };
            alternatives: {
                /** Format: uuid */
                methodId: string;
                label: string;
                grossAmount: number;
                estimate: components["schemas"]["CommerceDeliveryEstimate"];
            }[];
        };
        CommerceDeliveryPlanInput: {
            items: components["schemas"]["CommerceCartLineInput"][];
            locale: string;
            country?: string;
            /** @enum {string} */
            mode?: "shipping" | "pickup";
            selections?: {
                groupId: string;
                /** Format: uuid */
                methodId: string;
            }[];
        };
        CommerceDeliveryPlan: {
            /** @enum {string} */
            mode: "shipping" | "pickup";
            pickupOnly: boolean;
            separateShipments: boolean;
            groups: components["schemas"]["CommerceDeliveryGroup"][];
            shippingGross: number;
            fingerprint: string;
            shippingRevision: number;
            pickupAddress: components["schemas"]["CommerceAddress"] | null;
            /** Format: date-time */
            calculatedAt: string;
        };
        CommerceDeliveryQuoteInput: {
            checkout: components["schemas"]["CommerceQuoteInput"];
            delivery: components["schemas"]["CommerceDeliveryPlanInput"];
        };
        CommerceDeliveryQuote: {
            quote: components["schemas"]["CommerceQuote"];
            delivery: components["schemas"]["CommerceDeliveryPlan"];
        };
        CommerceDeliveryFulfillmentEvent: {
            groupId: string;
            /** @enum {string} */
            action: "shipped" | "delivered" | "collected";
            /** Format: date-time */
            at: string;
            shipment?: components["schemas"]["CommerceShipmentInput"];
        };
        CommerceDeliveryOrder: {
            order: components["schemas"]["CommerceAdminOrder"];
            delivery: components["schemas"]["CommerceDeliveryPlan"] | null;
            events: components["schemas"]["CommerceDeliveryFulfillmentEvent"][];
        };
        CommerceDeliveryFulfillmentInput: {
            groupId: string;
            /** @enum {string} */
            action: "shipped" | "delivered" | "collected";
            shipment?: components["schemas"]["CommerceShipmentInput"];
            expectedRevision: number;
        };
        CommerceDeliveryTracking: {
            order: components["schemas"]["CommerceOrderTracking"];
            delivery: components["schemas"]["CommerceDeliveryPlan"] | null;
            events: components["schemas"]["CommerceDeliveryFulfillmentEvent"][];
        };
        CommercePickupDraftAddress: {
            fullName: string;
            line1: string;
            line2?: string;
            locality: string;
            region?: string;
            postalCode?: string;
            country: string;
            phone?: string;
        };
        CommercePickupDraftSettings: {
            label: {
                [key: string]: string;
            };
            address: components["schemas"]["CommercePickupDraftAddress"];
            leadTimeHours: number;
            calendar: components["schemas"]["CommerceDeliveryCalendar"];
        };
    };
    responses: never;
    parameters: {
        CommerceLocale: string;
        CommerceCursor: string;
        CommerceLimit: number;
        CommerceIdempotency: string;
        CommerceRevision: string;
        CommerceCapability: string;
        CommerceAdminSession: string;
        CommerceCSRF: string;
        /** @description Trusted ingress address relayed only by the authenticated Commerce BFF. Never taken from a browser value. */
        CommerceVisitorIP: string;
    };
    requestBodies: never;
    headers: never;
    pathItems: never;
}
export type $defs = Record<string, never>;
export interface operations {
    commerceCapabilities: {
        parameters: {
            query: {
                locale: components["parameters"]["CommerceLocale"];
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
                    "Cache-Control"?: string;
                    ETag?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["CommerceCapabilities"];
                };
            };
            /** @description Normalized Commerce error */
            400: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["CommerceError"];
                };
            };
            /** @description Normalized Commerce error */
            401: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["CommerceError"];
                };
            };
            /** @description Normalized Commerce error */
            403: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["CommerceError"];
                };
            };
            /** @description Normalized Commerce error */
            404: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["CommerceError"];
                };
            };
            /** @description Normalized Commerce error */
            409: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["CommerceError"];
                };
            };
            /** @description Normalized Commerce error */
            410: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["CommerceError"];
                };
            };
            /** @description Normalized Commerce error */
            422: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["CommerceError"];
                };
            };
            /** @description Normalized Commerce error */
            429: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    "Retry-After"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["CommerceError"];
                };
            };
            /** @description Normalized Commerce error */
            503: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["CommerceError"];
                };
            };
        };
    };
    commerceListProducts: {
        parameters: {
            query: {
                locale: components["parameters"]["CommerceLocale"];
                cursor?: components["parameters"]["CommerceCursor"];
                limit?: components["parameters"]["CommerceLimit"];
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
                    "Cache-Control"?: string;
                    ETag?: string;
                    [name: string]: unknown;
                };
                content: {
                    /**
                     * @example {
                     *       "items": [
                     *         {
                     *           "id": "32000000-0000-4000-8000-000000000001",
                     *           "sku": "BOOK-LOCAL",
                     *           "kind": "book",
                     *           "title": "Livre de recette",
                     *           "description": "Livre de démonstration",
                     *           "attributes": {},
                     *           "grossUnitAmount": 2000,
                     *           "currency": "EUR",
                     *           "taxDisplayLabel": "Taxes incluses",
                     *           "availability": "available",
                     *           "maxPurchasableQuantity": 1,
                     *           "images": [
                     *             {
                     *               "assetId": "32000000-0000-4000-8000-000000000003",
                     *               "alt": "Couverture",
                     *               "width": 400,
                     *               "height": 500,
                     *               "src": "http://127.0.0.1:57321/commerce/images/book.svg",
                     *               "variants": []
                     *             }
                     *           ]
                     *         }
                     *       ],
                     *       "nextCursor": null
                     *     }
                     */
                    "application/json": components["schemas"]["CommerceProductPublicPage"];
                };
            };
            /** @description Normalized Commerce error */
            400: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["CommerceError"];
                };
            };
            /** @description Normalized Commerce error */
            401: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["CommerceError"];
                };
            };
            /** @description Normalized Commerce error */
            403: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["CommerceError"];
                };
            };
            /** @description Normalized Commerce error */
            404: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["CommerceError"];
                };
            };
            /** @description Normalized Commerce error */
            409: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["CommerceError"];
                };
            };
            /** @description Normalized Commerce error */
            410: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["CommerceError"];
                };
            };
            /** @description Normalized Commerce error */
            422: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["CommerceError"];
                };
            };
            /** @description Normalized Commerce error */
            429: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    "Retry-After"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["CommerceError"];
                };
            };
            /** @description Normalized Commerce error */
            503: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["CommerceError"];
                };
            };
        };
    };
    commerceReadProduct: {
        parameters: {
            query: {
                locale: components["parameters"]["CommerceLocale"];
            };
            header?: never;
            path: {
                productId: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Success */
            200: {
                headers: {
                    "Cache-Control"?: string;
                    ETag?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["CommerceProductPublic"];
                };
            };
            /** @description Normalized Commerce error */
            400: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["CommerceError"];
                };
            };
            /** @description Normalized Commerce error */
            401: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["CommerceError"];
                };
            };
            /** @description Normalized Commerce error */
            403: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["CommerceError"];
                };
            };
            /** @description Normalized Commerce error */
            404: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["CommerceError"];
                };
            };
            /** @description Normalized Commerce error */
            409: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["CommerceError"];
                };
            };
            /** @description Normalized Commerce error */
            410: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["CommerceError"];
                };
            };
            /** @description Normalized Commerce error */
            422: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["CommerceError"];
                };
            };
            /** @description Normalized Commerce error */
            429: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    "Retry-After"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["CommerceError"];
                };
            };
            /** @description Normalized Commerce error */
            503: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["CommerceError"];
                };
            };
        };
    };
    commerceReadLegalDocument: {
        parameters: {
            query: {
                locale: components["parameters"]["CommerceLocale"];
                version?: string;
                test?: boolean;
            };
            header?: never;
            path: {
                kind: "legal" | "terms" | "privacy" | "withdrawal";
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Success */
            200: {
                headers: {
                    "Cache-Control"?: string;
                    ETag?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["CommerceLegalDocument"];
                };
            };
            /** @description Normalized Commerce error */
            400: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["CommerceError"];
                };
            };
            /** @description Normalized Commerce error */
            401: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["CommerceError"];
                };
            };
            /** @description Normalized Commerce error */
            403: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["CommerceError"];
                };
            };
            /** @description Normalized Commerce error */
            404: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["CommerceError"];
                };
            };
            /** @description Normalized Commerce error */
            409: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["CommerceError"];
                };
            };
            /** @description Normalized Commerce error */
            410: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["CommerceError"];
                };
            };
            /** @description Normalized Commerce error */
            422: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["CommerceError"];
                };
            };
            /** @description Normalized Commerce error */
            429: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    "Retry-After"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["CommerceError"];
                };
            };
            /** @description Normalized Commerce error */
            503: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["CommerceError"];
                };
            };
        };
    };
    commerceConsentPolicy: {
        parameters: {
            query: {
                locale: components["parameters"]["CommerceLocale"];
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
                    "Cache-Control"?: string;
                    ETag?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["CommerceConsentPolicy"];
                };
            };
            /** @description Normalized Commerce error */
            400: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["CommerceError"];
                };
            };
            /** @description Normalized Commerce error */
            401: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["CommerceError"];
                };
            };
            /** @description Normalized Commerce error */
            403: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["CommerceError"];
                };
            };
            /** @description Normalized Commerce error */
            404: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["CommerceError"];
                };
            };
            /** @description Normalized Commerce error */
            409: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["CommerceError"];
                };
            };
            /** @description Normalized Commerce error */
            410: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["CommerceError"];
                };
            };
            /** @description Normalized Commerce error */
            422: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["CommerceError"];
                };
            };
            /** @description Normalized Commerce error */
            429: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    "Retry-After"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["CommerceError"];
                };
            };
            /** @description Normalized Commerce error */
            503: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["CommerceError"];
                };
            };
        };
    };
    commerceCreateGuestSession: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["CommerceGuestSessionInput"];
            };
        };
        responses: {
            /** @description Authorized exact replay */
            200: {
                headers: {
                    "Cache-Control"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["CommerceGuestSession"];
                };
            };
            /** @description Success */
            201: {
                headers: {
                    "Cache-Control"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["CommerceGuestSession"];
                };
            };
            /** @description Normalized Commerce error */
            400: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["CommerceError"];
                };
            };
            /** @description Normalized Commerce error */
            401: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["CommerceError"];
                };
            };
            /** @description Normalized Commerce error */
            403: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["CommerceError"];
                };
            };
            /** @description Normalized Commerce error */
            404: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["CommerceError"];
                };
            };
            /** @description Normalized Commerce error */
            409: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["CommerceError"];
                };
            };
            /** @description Normalized Commerce error */
            410: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["CommerceError"];
                };
            };
            /** @description Normalized Commerce error */
            422: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["CommerceError"];
                };
            };
            /** @description Normalized Commerce error */
            429: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    "Retry-After"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["CommerceError"];
                };
            };
            /** @description Normalized Commerce error */
            503: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["CommerceError"];
                };
            };
        };
    };
    commerceValidateCart: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                /**
                 * @example {
                 *       "items": [
                 *         {
                 *           "productId": "32000000-0000-4000-8000-000000000001",
                 *           "quantity": 2
                 *         }
                 *       ],
                 *       "locale": "fr",
                 *       "cartRevision": "local-cart-1"
                 *     }
                 */
                "application/json": components["schemas"]["CommerceCartInput"];
            };
        };
        responses: {
            /** @description Success */
            200: {
                headers: {
                    "Cache-Control"?: string;
                    [name: string]: unknown;
                };
                content: {
                    /**
                     * @example {
                     *       "cartRevision": "local-cart-1",
                     *       "currency": "EUR",
                     *       "lines": [
                     *         {
                     *           "productId": "32000000-0000-4000-8000-000000000001",
                     *           "requestedQuantity": 2,
                     *           "maxPurchasableQuantity": 1,
                     *           "status": "insufficient",
                     *           "grossUnitAmount": 2000
                     *         }
                     *       ]
                     *     }
                     */
                    "application/json": components["schemas"]["CommerceCartValidation"];
                };
            };
            /** @description Normalized Commerce error */
            400: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["CommerceError"];
                };
            };
            /** @description Normalized Commerce error */
            401: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["CommerceError"];
                };
            };
            /** @description Normalized Commerce error */
            403: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["CommerceError"];
                };
            };
            /** @description Normalized Commerce error */
            404: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["CommerceError"];
                };
            };
            /** @description Normalized Commerce error */
            409: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["CommerceError"];
                };
            };
            /** @description Normalized Commerce error */
            410: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["CommerceError"];
                };
            };
            /** @description Normalized Commerce error */
            422: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["CommerceError"];
                };
            };
            /** @description Normalized Commerce error */
            429: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    "Retry-After"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["CommerceError"];
                };
            };
            /** @description Normalized Commerce error */
            503: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["CommerceError"];
                };
            };
        };
    };
    commerceCreateQuote: {
        parameters: {
            query?: never;
            header: {
                "x-commerce-capability": components["parameters"]["CommerceCapability"];
            };
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["CommerceQuoteInput"];
            };
        };
        responses: {
            /** @description Authorized exact replay */
            200: {
                headers: {
                    "Cache-Control"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["CommerceQuote"];
                };
            };
            /** @description Success */
            201: {
                headers: {
                    "Cache-Control"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["CommerceQuote"];
                };
            };
            /** @description Normalized Commerce error */
            400: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["CommerceError"];
                };
            };
            /** @description Normalized Commerce error */
            401: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["CommerceError"];
                };
            };
            /** @description Normalized Commerce error */
            403: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["CommerceError"];
                };
            };
            /** @description Normalized Commerce error */
            404: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["CommerceError"];
                };
            };
            /** @description Normalized Commerce error */
            409: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["CommerceError"];
                };
            };
            /** @description Normalized Commerce error */
            410: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["CommerceError"];
                };
            };
            /** @description Normalized Commerce error */
            422: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["CommerceError"];
                };
            };
            /** @description Normalized Commerce error */
            429: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    "Retry-After"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["CommerceError"];
                };
            };
            /** @description Normalized Commerce error */
            503: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["CommerceError"];
                };
            };
        };
    };
    commerceStartAttempt: {
        parameters: {
            query?: never;
            header: {
                "x-commerce-capability": components["parameters"]["CommerceCapability"];
                "Idempotency-Key": components["parameters"]["CommerceIdempotency"];
            };
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["CommerceAttemptInput"];
            };
        };
        responses: {
            /** @description Authorized exact replay */
            200: {
                headers: {
                    "Cache-Control"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["CommerceAttempt"];
                };
            };
            /** @description Success */
            201: {
                headers: {
                    "Cache-Control"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["CommerceAttempt"];
                };
            };
            /** @description Durable operation pending reconciliation */
            202: {
                headers: {
                    "Cache-Control"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["CommerceAttempt"];
                };
            };
            /** @description Normalized Commerce error */
            400: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["CommerceError"];
                };
            };
            /** @description Normalized Commerce error */
            401: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["CommerceError"];
                };
            };
            /** @description Normalized Commerce error */
            403: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["CommerceError"];
                };
            };
            /** @description Normalized Commerce error */
            404: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["CommerceError"];
                };
            };
            /** @description Normalized Commerce error */
            409: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["CommerceError"];
                };
            };
            /** @description Normalized Commerce error */
            410: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["CommerceError"];
                };
            };
            /** @description Normalized Commerce error */
            422: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["CommerceError"];
                };
            };
            /** @description Normalized Commerce error */
            429: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    "Retry-After"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["CommerceError"];
                };
            };
            /** @description Normalized Commerce error */
            503: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["CommerceError"];
                };
            };
        };
    };
    commerceReadAttempt: {
        parameters: {
            query?: never;
            header: {
                "x-commerce-capability": components["parameters"]["CommerceCapability"];
            };
            path: {
                attemptId: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Success */
            200: {
                headers: {
                    "Cache-Control"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["CommerceAttempt"];
                };
            };
            /** @description Normalized Commerce error */
            400: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["CommerceError"];
                };
            };
            /** @description Normalized Commerce error */
            401: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["CommerceError"];
                };
            };
            /** @description Normalized Commerce error */
            403: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["CommerceError"];
                };
            };
            /** @description Normalized Commerce error */
            404: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["CommerceError"];
                };
            };
            /** @description Normalized Commerce error */
            409: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["CommerceError"];
                };
            };
            /** @description Normalized Commerce error */
            410: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["CommerceError"];
                };
            };
            /** @description Normalized Commerce error */
            422: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["CommerceError"];
                };
            };
            /** @description Normalized Commerce error */
            429: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    "Retry-After"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["CommerceError"];
                };
            };
            /** @description Normalized Commerce error */
            503: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["CommerceError"];
                };
            };
        };
    };
    commerceCancelAttempt: {
        parameters: {
            query?: never;
            header: {
                "x-commerce-capability": components["parameters"]["CommerceCapability"];
                "Idempotency-Key": components["parameters"]["CommerceIdempotency"];
            };
            path: {
                attemptId: string;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["CommerceCancelAttemptInput"];
            };
        };
        responses: {
            /** @description Success */
            200: {
                headers: {
                    "Cache-Control"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["CommerceAttempt"];
                };
            };
            /** @description Durable operation pending reconciliation */
            202: {
                headers: {
                    "Cache-Control"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["CommerceAttempt"];
                };
            };
            /** @description Normalized Commerce error */
            400: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["CommerceError"];
                };
            };
            /** @description Normalized Commerce error */
            401: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["CommerceError"];
                };
            };
            /** @description Normalized Commerce error */
            403: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["CommerceError"];
                };
            };
            /** @description Normalized Commerce error */
            404: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["CommerceError"];
                };
            };
            /** @description Normalized Commerce error */
            409: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["CommerceError"];
                };
            };
            /** @description Normalized Commerce error */
            410: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["CommerceError"];
                };
            };
            /** @description Normalized Commerce error */
            422: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["CommerceError"];
                };
            };
            /** @description Normalized Commerce error */
            429: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    "Retry-After"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["CommerceError"];
                };
            };
            /** @description Normalized Commerce error */
            503: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["CommerceError"];
                };
            };
        };
    };
    commerceReadOrderDocument: {
        parameters: {
            query?: never;
            header: {
                /** @description Trusted ingress address relayed only by the authenticated Commerce BFF. Never taken from a browser value. */
                "X-Commerce-Visitor-IP": components["parameters"]["CommerceVisitorIP"];
            };
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["CommerceDocumentRead"];
            };
        };
        responses: {
            /** @description Success */
            200: {
                headers: {
                    "Cache-Control"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "text/html": string;
                };
            };
            /** @description Normalized Commerce error */
            400: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["CommerceError"];
                };
            };
            /** @description Normalized Commerce error */
            401: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["CommerceError"];
                };
            };
            /** @description Normalized Commerce error */
            403: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["CommerceError"];
                };
            };
            /** @description Normalized Commerce error */
            404: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["CommerceError"];
                };
            };
            /** @description Normalized Commerce error */
            409: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["CommerceError"];
                };
            };
            /** @description Normalized Commerce error */
            410: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["CommerceError"];
                };
            };
            /** @description Normalized Commerce error */
            422: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["CommerceError"];
                };
            };
            /** @description Normalized Commerce error */
            429: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    "Retry-After"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["CommerceError"];
                };
            };
            /** @description Normalized Commerce error */
            503: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["CommerceError"];
                };
            };
        };
    };
    commerceLookupOrder: {
        parameters: {
            query?: never;
            header: {
                /** @description Trusted ingress address relayed only by the authenticated Commerce BFF. Never taken from a browser value. */
                "X-Commerce-Visitor-IP": components["parameters"]["CommerceVisitorIP"];
            };
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["CommerceLookup"];
            };
        };
        responses: {
            /** @description Success */
            200: {
                headers: {
                    "Cache-Control"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["CommerceOrderTracking"];
                };
            };
            /** @description Normalized Commerce error */
            400: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["CommerceError"];
                };
            };
            /** @description Normalized Commerce error */
            401: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["CommerceError"];
                };
            };
            /** @description Normalized Commerce error */
            403: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["CommerceError"];
                };
            };
            /** @description Normalized Commerce error */
            404: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["CommerceError"];
                };
            };
            /** @description Normalized Commerce error */
            409: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["CommerceError"];
                };
            };
            /** @description Normalized Commerce error */
            410: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["CommerceError"];
                };
            };
            /** @description Normalized Commerce error */
            422: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["CommerceError"];
                };
            };
            /** @description Normalized Commerce error */
            429: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    "Retry-After"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["CommerceError"];
                };
            };
            /** @description Normalized Commerce error */
            503: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["CommerceError"];
                };
            };
        };
    };
    commerceSubmitWithdrawal: {
        parameters: {
            query?: never;
            header: {
                "x-commerce-capability": components["parameters"]["CommerceCapability"];
                "Idempotency-Key": components["parameters"]["CommerceIdempotency"];
                "x-commerce-visitor-ip": string;
            };
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["CommerceWithdrawalInput"];
            };
        };
        responses: {
            /** @description Authorized exact replay */
            200: {
                headers: {
                    "Cache-Control"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["CommerceWithdrawalReceipt"];
                };
            };
            /** @description Success */
            201: {
                headers: {
                    "Cache-Control"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["CommerceWithdrawalReceipt"];
                };
            };
            /** @description Normalized Commerce error */
            400: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["CommerceError"];
                };
            };
            /** @description Normalized Commerce error */
            401: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["CommerceError"];
                };
            };
            /** @description Normalized Commerce error */
            403: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["CommerceError"];
                };
            };
            /** @description Normalized Commerce error */
            404: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["CommerceError"];
                };
            };
            /** @description Normalized Commerce error */
            409: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["CommerceError"];
                };
            };
            /** @description Normalized Commerce error */
            410: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["CommerceError"];
                };
            };
            /** @description Normalized Commerce error */
            422: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["CommerceError"];
                };
            };
            /** @description Normalized Commerce error */
            429: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    "Retry-After"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["CommerceError"];
                };
            };
            /** @description Normalized Commerce error */
            503: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["CommerceError"];
                };
            };
        };
    };
    commerceRecordConsent: {
        parameters: {
            query?: never;
            header: {
                "Idempotency-Key": components["parameters"]["CommerceIdempotency"];
            };
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["CommerceConsentInput"];
            };
        };
        responses: {
            /** @description Authorized exact replay */
            200: {
                headers: {
                    "Cache-Control"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["CommerceConsentReceipt"];
                };
            };
            /** @description Success */
            201: {
                headers: {
                    "Cache-Control"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["CommerceConsentReceipt"];
                };
            };
            /** @description Normalized Commerce error */
            400: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["CommerceError"];
                };
            };
            /** @description Normalized Commerce error */
            401: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["CommerceError"];
                };
            };
            /** @description Normalized Commerce error */
            403: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["CommerceError"];
                };
            };
            /** @description Normalized Commerce error */
            404: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["CommerceError"];
                };
            };
            /** @description Normalized Commerce error */
            409: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["CommerceError"];
                };
            };
            /** @description Normalized Commerce error */
            410: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["CommerceError"];
                };
            };
            /** @description Normalized Commerce error */
            422: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["CommerceError"];
                };
            };
            /** @description Normalized Commerce error */
            429: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    "Retry-After"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["CommerceError"];
                };
            };
            /** @description Normalized Commerce error */
            503: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["CommerceError"];
                };
            };
        };
    };
    commerceAdminReadSettings: {
        parameters: {
            query?: never;
            header: {
                "x-admin-session": components["parameters"]["CommerceAdminSession"];
            };
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Success */
            200: {
                headers: {
                    "Cache-Control"?: string;
                    ETag?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["CommerceSettings"];
                };
            };
            /** @description Normalized Commerce error */
            400: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["CommerceError"];
                };
            };
            /** @description Normalized Commerce error */
            401: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["CommerceError"];
                };
            };
            /** @description Normalized Commerce error */
            403: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["CommerceError"];
                };
            };
            /** @description Normalized Commerce error */
            404: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["CommerceError"];
                };
            };
            /** @description Normalized Commerce error */
            409: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["CommerceError"];
                };
            };
            /** @description Normalized Commerce error */
            410: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["CommerceError"];
                };
            };
            /** @description Normalized Commerce error */
            422: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["CommerceError"];
                };
            };
            /** @description Normalized Commerce error */
            429: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    "Retry-After"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["CommerceError"];
                };
            };
            /** @description Normalized Commerce error */
            503: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["CommerceError"];
                };
            };
        };
    };
    commerceAdminUpdateSettings: {
        parameters: {
            query?: never;
            header: {
                "If-Match": components["parameters"]["CommerceRevision"];
                "x-admin-session": components["parameters"]["CommerceAdminSession"];
                "x-csrf-token": components["parameters"]["CommerceCSRF"];
            };
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["CommerceSettingsInput"];
            };
        };
        responses: {
            /** @description Success */
            200: {
                headers: {
                    "Cache-Control"?: string;
                    ETag?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["CommerceSettings"];
                };
            };
            /** @description Normalized Commerce error */
            400: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["CommerceError"];
                };
            };
            /** @description Normalized Commerce error */
            401: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["CommerceError"];
                };
            };
            /** @description Normalized Commerce error */
            403: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["CommerceError"];
                };
            };
            /** @description Normalized Commerce error */
            404: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["CommerceError"];
                };
            };
            /** @description Normalized Commerce error */
            409: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["CommerceError"];
                };
            };
            /** @description Normalized Commerce error */
            410: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["CommerceError"];
                };
            };
            /** @description Normalized Commerce error */
            422: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["CommerceError"];
                };
            };
            /** @description Normalized Commerce error */
            429: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    "Retry-After"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["CommerceError"];
                };
            };
            /** @description Normalized Commerce error */
            503: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["CommerceError"];
                };
            };
        };
    };
    commerceAdminListProducts: {
        parameters: {
            query?: {
                cursor?: components["parameters"]["CommerceCursor"];
                limit?: components["parameters"]["CommerceLimit"];
                status?: "draft" | "published" | "archived";
                kind?: "book" | "goodie";
            };
            header: {
                "x-admin-session": components["parameters"]["CommerceAdminSession"];
            };
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Success */
            200: {
                headers: {
                    "Cache-Control"?: string;
                    ETag?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["CommerceProductAdminPage"];
                };
            };
            /** @description Normalized Commerce error */
            400: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["CommerceError"];
                };
            };
            /** @description Normalized Commerce error */
            401: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["CommerceError"];
                };
            };
            /** @description Normalized Commerce error */
            403: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["CommerceError"];
                };
            };
            /** @description Normalized Commerce error */
            404: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["CommerceError"];
                };
            };
            /** @description Normalized Commerce error */
            409: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["CommerceError"];
                };
            };
            /** @description Normalized Commerce error */
            410: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["CommerceError"];
                };
            };
            /** @description Normalized Commerce error */
            422: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["CommerceError"];
                };
            };
            /** @description Normalized Commerce error */
            429: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    "Retry-After"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["CommerceError"];
                };
            };
            /** @description Normalized Commerce error */
            503: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["CommerceError"];
                };
            };
        };
    };
    commerceAdminCreateProduct: {
        parameters: {
            query?: never;
            header: {
                "Idempotency-Key": components["parameters"]["CommerceIdempotency"];
                "x-admin-session": components["parameters"]["CommerceAdminSession"];
                "x-csrf-token": components["parameters"]["CommerceCSRF"];
            };
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["CommerceProductCreate"];
            };
        };
        responses: {
            /** @description Authorized exact replay */
            200: {
                headers: {
                    "Cache-Control"?: string;
                    ETag?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["CommerceProductAdmin"];
                };
            };
            /** @description Success */
            201: {
                headers: {
                    "Cache-Control"?: string;
                    ETag?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["CommerceProductAdmin"];
                };
            };
            /** @description Normalized Commerce error */
            400: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["CommerceError"];
                };
            };
            /** @description Normalized Commerce error */
            401: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["CommerceError"];
                };
            };
            /** @description Normalized Commerce error */
            403: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["CommerceError"];
                };
            };
            /** @description Normalized Commerce error */
            404: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["CommerceError"];
                };
            };
            /** @description Normalized Commerce error */
            409: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["CommerceError"];
                };
            };
            /** @description Normalized Commerce error */
            410: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["CommerceError"];
                };
            };
            /** @description Normalized Commerce error */
            422: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["CommerceError"];
                };
            };
            /** @description Normalized Commerce error */
            429: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    "Retry-After"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["CommerceError"];
                };
            };
            /** @description Normalized Commerce error */
            503: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["CommerceError"];
                };
            };
        };
    };
    commerceAdminReadProduct: {
        parameters: {
            query?: never;
            header: {
                "x-admin-session": components["parameters"]["CommerceAdminSession"];
            };
            path: {
                productId: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Success */
            200: {
                headers: {
                    "Cache-Control"?: string;
                    ETag?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["CommerceProductAdmin"];
                };
            };
            /** @description Normalized Commerce error */
            400: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["CommerceError"];
                };
            };
            /** @description Normalized Commerce error */
            401: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["CommerceError"];
                };
            };
            /** @description Normalized Commerce error */
            403: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["CommerceError"];
                };
            };
            /** @description Normalized Commerce error */
            404: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["CommerceError"];
                };
            };
            /** @description Normalized Commerce error */
            409: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["CommerceError"];
                };
            };
            /** @description Normalized Commerce error */
            410: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["CommerceError"];
                };
            };
            /** @description Normalized Commerce error */
            422: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["CommerceError"];
                };
            };
            /** @description Normalized Commerce error */
            429: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    "Retry-After"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["CommerceError"];
                };
            };
            /** @description Normalized Commerce error */
            503: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["CommerceError"];
                };
            };
        };
    };
    commerceAdminUpdateProduct: {
        parameters: {
            query?: never;
            header: {
                "If-Match": components["parameters"]["CommerceRevision"];
                "x-admin-session": components["parameters"]["CommerceAdminSession"];
                "x-csrf-token": components["parameters"]["CommerceCSRF"];
            };
            path: {
                productId: string;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["CommerceProductPatch"];
            };
        };
        responses: {
            /** @description Success */
            200: {
                headers: {
                    "Cache-Control"?: string;
                    ETag?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["CommerceProductAdmin"];
                };
            };
            /** @description Normalized Commerce error */
            400: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["CommerceError"];
                };
            };
            /** @description Normalized Commerce error */
            401: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["CommerceError"];
                };
            };
            /** @description Normalized Commerce error */
            403: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["CommerceError"];
                };
            };
            /** @description Normalized Commerce error */
            404: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["CommerceError"];
                };
            };
            /** @description Normalized Commerce error */
            409: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["CommerceError"];
                };
            };
            /** @description Normalized Commerce error */
            410: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["CommerceError"];
                };
            };
            /** @description Normalized Commerce error */
            422: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["CommerceError"];
                };
            };
            /** @description Normalized Commerce error */
            429: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    "Retry-After"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["CommerceError"];
                };
            };
            /** @description Normalized Commerce error */
            503: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["CommerceError"];
                };
            };
        };
    };
    commerceAdminReadInventory: {
        parameters: {
            query?: {
                cursor?: components["parameters"]["CommerceCursor"];
                limit?: components["parameters"]["CommerceLimit"];
            };
            header: {
                "x-admin-session": components["parameters"]["CommerceAdminSession"];
            };
            path: {
                productId: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Success */
            200: {
                headers: {
                    "Cache-Control"?: string;
                    ETag?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["CommerceInventoryHistory"];
                };
            };
            /** @description Normalized Commerce error */
            400: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["CommerceError"];
                };
            };
            /** @description Normalized Commerce error */
            401: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["CommerceError"];
                };
            };
            /** @description Normalized Commerce error */
            403: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["CommerceError"];
                };
            };
            /** @description Normalized Commerce error */
            404: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["CommerceError"];
                };
            };
            /** @description Normalized Commerce error */
            409: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["CommerceError"];
                };
            };
            /** @description Normalized Commerce error */
            410: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["CommerceError"];
                };
            };
            /** @description Normalized Commerce error */
            422: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["CommerceError"];
                };
            };
            /** @description Normalized Commerce error */
            429: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    "Retry-After"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["CommerceError"];
                };
            };
            /** @description Normalized Commerce error */
            503: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["CommerceError"];
                };
            };
        };
    };
    commerceAdminAdjustInventory: {
        parameters: {
            query?: never;
            header: {
                "Idempotency-Key": components["parameters"]["CommerceIdempotency"];
                "If-Match": components["parameters"]["CommerceRevision"];
                "x-admin-session": components["parameters"]["CommerceAdminSession"];
                "x-csrf-token": components["parameters"]["CommerceCSRF"];
            };
            path: {
                productId: string;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["CommerceAdminAdjustInventoryInput"];
            };
        };
        responses: {
            /** @description Success */
            200: {
                headers: {
                    "Cache-Control"?: string;
                    ETag?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["CommerceInventory"];
                };
            };
            /** @description Normalized Commerce error */
            400: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["CommerceError"];
                };
            };
            /** @description Normalized Commerce error */
            401: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["CommerceError"];
                };
            };
            /** @description Normalized Commerce error */
            403: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["CommerceError"];
                };
            };
            /** @description Normalized Commerce error */
            404: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["CommerceError"];
                };
            };
            /** @description Normalized Commerce error */
            409: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["CommerceError"];
                };
            };
            /** @description Normalized Commerce error */
            410: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["CommerceError"];
                };
            };
            /** @description Normalized Commerce error */
            422: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["CommerceError"];
                };
            };
            /** @description Normalized Commerce error */
            429: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    "Retry-After"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["CommerceError"];
                };
            };
            /** @description Normalized Commerce error */
            503: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["CommerceError"];
                };
            };
        };
    };
    commerceAdminReadShippingZones: {
        parameters: {
            query?: never;
            header: {
                "x-admin-session": components["parameters"]["CommerceAdminSession"];
            };
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Success */
            200: {
                headers: {
                    "Cache-Control"?: string;
                    ETag?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["CommerceShippingZones"];
                };
            };
            /** @description Normalized Commerce error */
            400: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["CommerceError"];
                };
            };
            /** @description Normalized Commerce error */
            401: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["CommerceError"];
                };
            };
            /** @description Normalized Commerce error */
            403: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["CommerceError"];
                };
            };
            /** @description Normalized Commerce error */
            404: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["CommerceError"];
                };
            };
            /** @description Normalized Commerce error */
            409: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["CommerceError"];
                };
            };
            /** @description Normalized Commerce error */
            410: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["CommerceError"];
                };
            };
            /** @description Normalized Commerce error */
            422: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["CommerceError"];
                };
            };
            /** @description Normalized Commerce error */
            429: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    "Retry-After"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["CommerceError"];
                };
            };
            /** @description Normalized Commerce error */
            503: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["CommerceError"];
                };
            };
        };
    };
    commerceAdminUpdateShippingZones: {
        parameters: {
            query?: never;
            header: {
                "If-Match": components["parameters"]["CommerceRevision"];
                "x-admin-session": components["parameters"]["CommerceAdminSession"];
                "x-csrf-token": components["parameters"]["CommerceCSRF"];
            };
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["CommerceShippingZonesInput"];
            };
        };
        responses: {
            /** @description Success */
            200: {
                headers: {
                    "Cache-Control"?: string;
                    ETag?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["CommerceShippingZones"];
                };
            };
            /** @description Normalized Commerce error */
            400: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["CommerceError"];
                };
            };
            /** @description Normalized Commerce error */
            401: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["CommerceError"];
                };
            };
            /** @description Normalized Commerce error */
            403: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["CommerceError"];
                };
            };
            /** @description Normalized Commerce error */
            404: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["CommerceError"];
                };
            };
            /** @description Normalized Commerce error */
            409: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["CommerceError"];
                };
            };
            /** @description Normalized Commerce error */
            410: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["CommerceError"];
                };
            };
            /** @description Normalized Commerce error */
            422: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["CommerceError"];
                };
            };
            /** @description Normalized Commerce error */
            429: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    "Retry-After"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["CommerceError"];
                };
            };
            /** @description Normalized Commerce error */
            503: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["CommerceError"];
                };
            };
        };
    };
    commerceAdminReadTaxRules: {
        parameters: {
            query?: never;
            header: {
                "x-admin-session": components["parameters"]["CommerceAdminSession"];
            };
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Success */
            200: {
                headers: {
                    "Cache-Control"?: string;
                    ETag?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["CommerceTaxRules"];
                };
            };
            /** @description Normalized Commerce error */
            400: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["CommerceError"];
                };
            };
            /** @description Normalized Commerce error */
            401: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["CommerceError"];
                };
            };
            /** @description Normalized Commerce error */
            403: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["CommerceError"];
                };
            };
            /** @description Normalized Commerce error */
            404: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["CommerceError"];
                };
            };
            /** @description Normalized Commerce error */
            409: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["CommerceError"];
                };
            };
            /** @description Normalized Commerce error */
            410: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["CommerceError"];
                };
            };
            /** @description Normalized Commerce error */
            422: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["CommerceError"];
                };
            };
            /** @description Normalized Commerce error */
            429: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    "Retry-After"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["CommerceError"];
                };
            };
            /** @description Normalized Commerce error */
            503: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["CommerceError"];
                };
            };
        };
    };
    commerceAdminUpdateTaxRules: {
        parameters: {
            query?: never;
            header: {
                "If-Match": components["parameters"]["CommerceRevision"];
                "x-admin-session": components["parameters"]["CommerceAdminSession"];
                "x-csrf-token": components["parameters"]["CommerceCSRF"];
            };
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["CommerceTaxRulesInput"];
            };
        };
        responses: {
            /** @description Success */
            200: {
                headers: {
                    "Cache-Control"?: string;
                    ETag?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["CommerceTaxRules"];
                };
            };
            /** @description Normalized Commerce error */
            400: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["CommerceError"];
                };
            };
            /** @description Normalized Commerce error */
            401: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["CommerceError"];
                };
            };
            /** @description Normalized Commerce error */
            403: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["CommerceError"];
                };
            };
            /** @description Normalized Commerce error */
            404: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["CommerceError"];
                };
            };
            /** @description Normalized Commerce error */
            409: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["CommerceError"];
                };
            };
            /** @description Normalized Commerce error */
            410: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["CommerceError"];
                };
            };
            /** @description Normalized Commerce error */
            422: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["CommerceError"];
                };
            };
            /** @description Normalized Commerce error */
            429: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    "Retry-After"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["CommerceError"];
                };
            };
            /** @description Normalized Commerce error */
            503: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["CommerceError"];
                };
            };
        };
    };
    commerceAdminListOrders: {
        parameters: {
            query?: {
                cursor?: components["parameters"]["CommerceCursor"];
                limit?: components["parameters"]["CommerceLimit"];
                query?: string;
                fulfillmentStatus?: "confirmed" | "processing" | "shipped" | "delivered";
                financialStatus?: "paid" | "partially_refunded" | "refunded";
            };
            header: {
                "x-admin-session": components["parameters"]["CommerceAdminSession"];
            };
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Success */
            200: {
                headers: {
                    "Cache-Control"?: string;
                    ETag?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["CommerceOrderSummaryPage"];
                };
            };
            /** @description Normalized Commerce error */
            400: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["CommerceError"];
                };
            };
            /** @description Normalized Commerce error */
            401: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["CommerceError"];
                };
            };
            /** @description Normalized Commerce error */
            403: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["CommerceError"];
                };
            };
            /** @description Normalized Commerce error */
            404: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["CommerceError"];
                };
            };
            /** @description Normalized Commerce error */
            409: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["CommerceError"];
                };
            };
            /** @description Normalized Commerce error */
            410: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["CommerceError"];
                };
            };
            /** @description Normalized Commerce error */
            422: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["CommerceError"];
                };
            };
            /** @description Normalized Commerce error */
            429: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    "Retry-After"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["CommerceError"];
                };
            };
            /** @description Normalized Commerce error */
            503: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["CommerceError"];
                };
            };
        };
    };
    commerceAdminReadOrder: {
        parameters: {
            query?: never;
            header: {
                "x-admin-session": components["parameters"]["CommerceAdminSession"];
            };
            path: {
                orderId: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Success */
            200: {
                headers: {
                    "Cache-Control"?: string;
                    ETag?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["CommerceAdminOrder"];
                };
            };
            /** @description Normalized Commerce error */
            400: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["CommerceError"];
                };
            };
            /** @description Normalized Commerce error */
            401: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["CommerceError"];
                };
            };
            /** @description Normalized Commerce error */
            403: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["CommerceError"];
                };
            };
            /** @description Normalized Commerce error */
            404: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["CommerceError"];
                };
            };
            /** @description Normalized Commerce error */
            409: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["CommerceError"];
                };
            };
            /** @description Normalized Commerce error */
            410: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["CommerceError"];
                };
            };
            /** @description Normalized Commerce error */
            422: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["CommerceError"];
                };
            };
            /** @description Normalized Commerce error */
            429: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    "Retry-After"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["CommerceError"];
                };
            };
            /** @description Normalized Commerce error */
            503: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["CommerceError"];
                };
            };
        };
    };
    commerceAdminTransitionOrder: {
        parameters: {
            query?: never;
            header: {
                "Idempotency-Key": components["parameters"]["CommerceIdempotency"];
                "If-Match": components["parameters"]["CommerceRevision"];
                "x-admin-session": components["parameters"]["CommerceAdminSession"];
                "x-csrf-token": components["parameters"]["CommerceCSRF"];
            };
            path: {
                orderId: string;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["CommerceAdminTransitionOrderInput"];
            };
        };
        responses: {
            /** @description Success */
            200: {
                headers: {
                    "Cache-Control"?: string;
                    ETag?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["CommerceAdminOrder"];
                };
            };
            /** @description Normalized Commerce error */
            400: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["CommerceError"];
                };
            };
            /** @description Normalized Commerce error */
            401: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["CommerceError"];
                };
            };
            /** @description Normalized Commerce error */
            403: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["CommerceError"];
                };
            };
            /** @description Normalized Commerce error */
            404: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["CommerceError"];
                };
            };
            /** @description Normalized Commerce error */
            409: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["CommerceError"];
                };
            };
            /** @description Normalized Commerce error */
            410: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["CommerceError"];
                };
            };
            /** @description Normalized Commerce error */
            422: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["CommerceError"];
                };
            };
            /** @description Normalized Commerce error */
            429: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    "Retry-After"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["CommerceError"];
                };
            };
            /** @description Normalized Commerce error */
            503: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["CommerceError"];
                };
            };
        };
    };
    commerceAdminCorrectOrder: {
        parameters: {
            query?: never;
            header: {
                "Idempotency-Key": components["parameters"]["CommerceIdempotency"];
                "If-Match": components["parameters"]["CommerceRevision"];
                "x-admin-session": components["parameters"]["CommerceAdminSession"];
                "x-csrf-token": components["parameters"]["CommerceCSRF"];
            };
            path: {
                orderId: string;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["CommerceAdminCorrectOrderInput"];
            };
        };
        responses: {
            /** @description Success */
            200: {
                headers: {
                    "Cache-Control"?: string;
                    ETag?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["CommerceAdminOrder"];
                };
            };
            /** @description Normalized Commerce error */
            400: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["CommerceError"];
                };
            };
            /** @description Normalized Commerce error */
            401: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["CommerceError"];
                };
            };
            /** @description Normalized Commerce error */
            403: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["CommerceError"];
                };
            };
            /** @description Normalized Commerce error */
            404: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["CommerceError"];
                };
            };
            /** @description Normalized Commerce error */
            409: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["CommerceError"];
                };
            };
            /** @description Normalized Commerce error */
            410: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["CommerceError"];
                };
            };
            /** @description Normalized Commerce error */
            422: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["CommerceError"];
                };
            };
            /** @description Normalized Commerce error */
            429: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    "Retry-After"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["CommerceError"];
                };
            };
            /** @description Normalized Commerce error */
            503: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["CommerceError"];
                };
            };
        };
    };
    commerceAdminCancelOrder: {
        parameters: {
            query?: never;
            header: {
                "Idempotency-Key": components["parameters"]["CommerceIdempotency"];
                "If-Match": components["parameters"]["CommerceRevision"];
                "x-admin-session": components["parameters"]["CommerceAdminSession"];
                "x-csrf-token": components["parameters"]["CommerceCSRF"];
            };
            path: {
                orderId: string;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["CommerceAdminCancelOrderInput"];
            };
        };
        responses: {
            /** @description Success */
            200: {
                headers: {
                    "Cache-Control"?: string;
                    ETag?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["CommerceAdminOrder"];
                };
            };
            /** @description Normalized Commerce error */
            400: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["CommerceError"];
                };
            };
            /** @description Normalized Commerce error */
            401: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["CommerceError"];
                };
            };
            /** @description Normalized Commerce error */
            403: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["CommerceError"];
                };
            };
            /** @description Normalized Commerce error */
            404: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["CommerceError"];
                };
            };
            /** @description Normalized Commerce error */
            409: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["CommerceError"];
                };
            };
            /** @description Normalized Commerce error */
            410: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["CommerceError"];
                };
            };
            /** @description Normalized Commerce error */
            422: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["CommerceError"];
                };
            };
            /** @description Normalized Commerce error */
            429: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    "Retry-After"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["CommerceError"];
                };
            };
            /** @description Normalized Commerce error */
            503: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["CommerceError"];
                };
            };
        };
    };
    commerceAdminRetryAllocation: {
        parameters: {
            query?: never;
            header: {
                "Idempotency-Key": components["parameters"]["CommerceIdempotency"];
                "If-Match": components["parameters"]["CommerceRevision"];
                "x-admin-session": components["parameters"]["CommerceAdminSession"];
                "x-csrf-token": components["parameters"]["CommerceCSRF"];
            };
            path: {
                orderId: string;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["CommerceAdminRetryAllocationInput"];
            };
        };
        responses: {
            /** @description Success */
            200: {
                headers: {
                    "Cache-Control"?: string;
                    ETag?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["CommerceAdminOrder"];
                };
            };
            /** @description Normalized Commerce error */
            400: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["CommerceError"];
                };
            };
            /** @description Normalized Commerce error */
            401: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["CommerceError"];
                };
            };
            /** @description Normalized Commerce error */
            403: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["CommerceError"];
                };
            };
            /** @description Normalized Commerce error */
            404: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["CommerceError"];
                };
            };
            /** @description Normalized Commerce error */
            409: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["CommerceError"];
                };
            };
            /** @description Normalized Commerce error */
            410: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["CommerceError"];
                };
            };
            /** @description Normalized Commerce error */
            422: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["CommerceError"];
                };
            };
            /** @description Normalized Commerce error */
            429: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    "Retry-After"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["CommerceError"];
                };
            };
            /** @description Normalized Commerce error */
            503: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["CommerceError"];
                };
            };
        };
    };
    commerceAdminRecordReturn: {
        parameters: {
            query?: never;
            header: {
                "Idempotency-Key": components["parameters"]["CommerceIdempotency"];
                "If-Match": components["parameters"]["CommerceRevision"];
                "x-admin-session": components["parameters"]["CommerceAdminSession"];
                "x-csrf-token": components["parameters"]["CommerceCSRF"];
            };
            path: {
                orderId: string;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["CommerceAdminRecordReturnInput"];
            };
        };
        responses: {
            /** @description Success */
            200: {
                headers: {
                    "Cache-Control"?: string;
                    ETag?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["CommerceAdminOrder"];
                };
            };
            /** @description Normalized Commerce error */
            400: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["CommerceError"];
                };
            };
            /** @description Normalized Commerce error */
            401: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["CommerceError"];
                };
            };
            /** @description Normalized Commerce error */
            403: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["CommerceError"];
                };
            };
            /** @description Normalized Commerce error */
            404: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["CommerceError"];
                };
            };
            /** @description Normalized Commerce error */
            409: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["CommerceError"];
                };
            };
            /** @description Normalized Commerce error */
            410: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["CommerceError"];
                };
            };
            /** @description Normalized Commerce error */
            422: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["CommerceError"];
                };
            };
            /** @description Normalized Commerce error */
            429: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    "Retry-After"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["CommerceError"];
                };
            };
            /** @description Normalized Commerce error */
            503: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["CommerceError"];
                };
            };
        };
    };
    commerceAdminAllocateRefund: {
        parameters: {
            query?: never;
            header: {
                "Idempotency-Key": components["parameters"]["CommerceIdempotency"];
                "If-Match": components["parameters"]["CommerceRevision"];
                "x-admin-session": components["parameters"]["CommerceAdminSession"];
                "x-csrf-token": components["parameters"]["CommerceCSRF"];
            };
            path: {
                orderId: string;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["CommerceAdminAllocateRefundInput"];
            };
        };
        responses: {
            /** @description Success */
            200: {
                headers: {
                    "Cache-Control"?: string;
                    ETag?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["CommerceAdminOrder"];
                };
            };
            /** @description Normalized Commerce error */
            400: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["CommerceError"];
                };
            };
            /** @description Normalized Commerce error */
            401: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["CommerceError"];
                };
            };
            /** @description Normalized Commerce error */
            403: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["CommerceError"];
                };
            };
            /** @description Normalized Commerce error */
            404: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["CommerceError"];
                };
            };
            /** @description Normalized Commerce error */
            409: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["CommerceError"];
                };
            };
            /** @description Normalized Commerce error */
            410: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["CommerceError"];
                };
            };
            /** @description Normalized Commerce error */
            422: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["CommerceError"];
                };
            };
            /** @description Normalized Commerce error */
            429: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    "Retry-After"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["CommerceError"];
                };
            };
            /** @description Normalized Commerce error */
            503: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["CommerceError"];
                };
            };
        };
    };
    commerceAdminRetryNotification: {
        parameters: {
            query?: never;
            header: {
                "Idempotency-Key": components["parameters"]["CommerceIdempotency"];
                "x-admin-session": components["parameters"]["CommerceAdminSession"];
                "x-csrf-token": components["parameters"]["CommerceCSRF"];
            };
            path: {
                orderId: string;
                notificationId: string;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["CommerceAdminRetryNotificationInput"];
            };
        };
        responses: {
            /** @description Success */
            200: {
                headers: {
                    "Cache-Control"?: string;
                    ETag?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["CommerceAdminOrder"];
                };
            };
            /** @description Normalized Commerce error */
            400: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["CommerceError"];
                };
            };
            /** @description Normalized Commerce error */
            401: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["CommerceError"];
                };
            };
            /** @description Normalized Commerce error */
            403: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["CommerceError"];
                };
            };
            /** @description Normalized Commerce error */
            404: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["CommerceError"];
                };
            };
            /** @description Normalized Commerce error */
            409: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["CommerceError"];
                };
            };
            /** @description Normalized Commerce error */
            410: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["CommerceError"];
                };
            };
            /** @description Normalized Commerce error */
            422: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["CommerceError"];
                };
            };
            /** @description Normalized Commerce error */
            429: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    "Retry-After"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["CommerceError"];
                };
            };
            /** @description Normalized Commerce error */
            503: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["CommerceError"];
                };
            };
        };
    };
    commerceAdminListWithdrawals: {
        parameters: {
            query?: {
                cursor?: components["parameters"]["CommerceCursor"];
                limit?: components["parameters"]["CommerceLimit"];
            };
            header: {
                "x-admin-session": components["parameters"]["CommerceAdminSession"];
            };
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Success */
            200: {
                headers: {
                    "Cache-Control"?: string;
                    ETag?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["CommerceWithdrawalAdminPage"];
                };
            };
            /** @description Normalized Commerce error */
            400: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["CommerceError"];
                };
            };
            /** @description Normalized Commerce error */
            401: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["CommerceError"];
                };
            };
            /** @description Normalized Commerce error */
            403: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["CommerceError"];
                };
            };
            /** @description Normalized Commerce error */
            404: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["CommerceError"];
                };
            };
            /** @description Normalized Commerce error */
            409: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["CommerceError"];
                };
            };
            /** @description Normalized Commerce error */
            410: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["CommerceError"];
                };
            };
            /** @description Normalized Commerce error */
            422: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["CommerceError"];
                };
            };
            /** @description Normalized Commerce error */
            429: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    "Retry-After"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["CommerceError"];
                };
            };
            /** @description Normalized Commerce error */
            503: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["CommerceError"];
                };
            };
        };
    };
    commerceAdminReadWithdrawal: {
        parameters: {
            query?: never;
            header: {
                "x-admin-session": components["parameters"]["CommerceAdminSession"];
            };
            path: {
                id: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Success */
            200: {
                headers: {
                    "Cache-Control"?: string;
                    ETag?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["CommerceWithdrawalAdmin"];
                };
            };
            /** @description Normalized Commerce error */
            400: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["CommerceError"];
                };
            };
            /** @description Normalized Commerce error */
            401: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["CommerceError"];
                };
            };
            /** @description Normalized Commerce error */
            403: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["CommerceError"];
                };
            };
            /** @description Normalized Commerce error */
            404: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["CommerceError"];
                };
            };
            /** @description Normalized Commerce error */
            409: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["CommerceError"];
                };
            };
            /** @description Normalized Commerce error */
            410: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["CommerceError"];
                };
            };
            /** @description Normalized Commerce error */
            422: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["CommerceError"];
                };
            };
            /** @description Normalized Commerce error */
            429: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    "Retry-After"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["CommerceError"];
                };
            };
            /** @description Normalized Commerce error */
            503: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["CommerceError"];
                };
            };
        };
    };
    commerceAdminUpdateWithdrawal: {
        parameters: {
            query?: never;
            header: {
                "If-Match": components["parameters"]["CommerceRevision"];
                "x-admin-session": components["parameters"]["CommerceAdminSession"];
                "x-csrf-token": components["parameters"]["CommerceCSRF"];
            };
            path: {
                id: string;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["CommerceAdminUpdateWithdrawalInput"];
            };
        };
        responses: {
            /** @description Success */
            200: {
                headers: {
                    "Cache-Control"?: string;
                    ETag?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["CommerceWithdrawalAdmin"];
                };
            };
            /** @description Normalized Commerce error */
            400: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["CommerceError"];
                };
            };
            /** @description Normalized Commerce error */
            401: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["CommerceError"];
                };
            };
            /** @description Normalized Commerce error */
            403: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["CommerceError"];
                };
            };
            /** @description Normalized Commerce error */
            404: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["CommerceError"];
                };
            };
            /** @description Normalized Commerce error */
            409: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["CommerceError"];
                };
            };
            /** @description Normalized Commerce error */
            410: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["CommerceError"];
                };
            };
            /** @description Normalized Commerce error */
            422: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["CommerceError"];
                };
            };
            /** @description Normalized Commerce error */
            429: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    "Retry-After"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["CommerceError"];
                };
            };
            /** @description Normalized Commerce error */
            503: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["CommerceError"];
                };
            };
        };
    };
    commerceAdminListLegalDocuments: {
        parameters: {
            query?: {
                cursor?: components["parameters"]["CommerceCursor"];
                limit?: components["parameters"]["CommerceLimit"];
            };
            header: {
                "x-admin-session": components["parameters"]["CommerceAdminSession"];
            };
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Success */
            200: {
                headers: {
                    "Cache-Control"?: string;
                    ETag?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["CommerceLegalDocumentPage"];
                };
            };
            /** @description Normalized Commerce error */
            400: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["CommerceError"];
                };
            };
            /** @description Normalized Commerce error */
            401: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["CommerceError"];
                };
            };
            /** @description Normalized Commerce error */
            403: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["CommerceError"];
                };
            };
            /** @description Normalized Commerce error */
            404: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["CommerceError"];
                };
            };
            /** @description Normalized Commerce error */
            409: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["CommerceError"];
                };
            };
            /** @description Normalized Commerce error */
            410: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["CommerceError"];
                };
            };
            /** @description Normalized Commerce error */
            422: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["CommerceError"];
                };
            };
            /** @description Normalized Commerce error */
            429: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    "Retry-After"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["CommerceError"];
                };
            };
            /** @description Normalized Commerce error */
            503: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["CommerceError"];
                };
            };
        };
    };
    commerceAdminCreateLegalDocument: {
        parameters: {
            query?: never;
            header: {
                "Idempotency-Key": components["parameters"]["CommerceIdempotency"];
                "x-admin-session": components["parameters"]["CommerceAdminSession"];
                "x-csrf-token": components["parameters"]["CommerceCSRF"];
            };
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["CommerceLegalDocumentInput"];
            };
        };
        responses: {
            /** @description Authorized exact replay */
            200: {
                headers: {
                    "Cache-Control"?: string;
                    ETag?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["CommerceLegalDocument"];
                };
            };
            /** @description Success */
            201: {
                headers: {
                    "Cache-Control"?: string;
                    ETag?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["CommerceLegalDocument"];
                };
            };
            /** @description Normalized Commerce error */
            400: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["CommerceError"];
                };
            };
            /** @description Normalized Commerce error */
            401: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["CommerceError"];
                };
            };
            /** @description Normalized Commerce error */
            403: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["CommerceError"];
                };
            };
            /** @description Normalized Commerce error */
            404: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["CommerceError"];
                };
            };
            /** @description Normalized Commerce error */
            409: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["CommerceError"];
                };
            };
            /** @description Normalized Commerce error */
            410: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["CommerceError"];
                };
            };
            /** @description Normalized Commerce error */
            422: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["CommerceError"];
                };
            };
            /** @description Normalized Commerce error */
            429: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    "Retry-After"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["CommerceError"];
                };
            };
            /** @description Normalized Commerce error */
            503: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["CommerceError"];
                };
            };
        };
    };
    commerceAdminPublishLegalDocument: {
        parameters: {
            query?: never;
            header: {
                "Idempotency-Key": components["parameters"]["CommerceIdempotency"];
                "If-Match": components["parameters"]["CommerceRevision"];
                "x-admin-session": components["parameters"]["CommerceAdminSession"];
                "x-csrf-token": components["parameters"]["CommerceCSRF"];
            };
            path: {
                id: string;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["CommerceAdminPublishLegalDocumentInput"];
            };
        };
        responses: {
            /** @description Success */
            200: {
                headers: {
                    "Cache-Control"?: string;
                    ETag?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["CommerceLegalDocument"];
                };
            };
            /** @description Normalized Commerce error */
            400: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["CommerceError"];
                };
            };
            /** @description Normalized Commerce error */
            401: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["CommerceError"];
                };
            };
            /** @description Normalized Commerce error */
            403: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["CommerceError"];
                };
            };
            /** @description Normalized Commerce error */
            404: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["CommerceError"];
                };
            };
            /** @description Normalized Commerce error */
            409: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["CommerceError"];
                };
            };
            /** @description Normalized Commerce error */
            410: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["CommerceError"];
                };
            };
            /** @description Normalized Commerce error */
            422: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["CommerceError"];
                };
            };
            /** @description Normalized Commerce error */
            429: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    "Retry-After"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["CommerceError"];
                };
            };
            /** @description Normalized Commerce error */
            503: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["CommerceError"];
                };
            };
        };
    };
    commerceAdminListIncidents: {
        parameters: {
            query?: {
                cursor?: components["parameters"]["CommerceCursor"];
                limit?: components["parameters"]["CommerceLimit"];
            };
            header: {
                "x-admin-session": components["parameters"]["CommerceAdminSession"];
            };
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Success */
            200: {
                headers: {
                    "Cache-Control"?: string;
                    ETag?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["CommerceIncidentPage"];
                };
            };
            /** @description Normalized Commerce error */
            400: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["CommerceError"];
                };
            };
            /** @description Normalized Commerce error */
            401: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["CommerceError"];
                };
            };
            /** @description Normalized Commerce error */
            403: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["CommerceError"];
                };
            };
            /** @description Normalized Commerce error */
            404: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["CommerceError"];
                };
            };
            /** @description Normalized Commerce error */
            409: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["CommerceError"];
                };
            };
            /** @description Normalized Commerce error */
            410: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["CommerceError"];
                };
            };
            /** @description Normalized Commerce error */
            422: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["CommerceError"];
                };
            };
            /** @description Normalized Commerce error */
            429: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    "Retry-After"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["CommerceError"];
                };
            };
            /** @description Normalized Commerce error */
            503: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["CommerceError"];
                };
            };
        };
    };
    commerceAdminReconcileAttempt: {
        parameters: {
            query?: never;
            header: {
                "Idempotency-Key": components["parameters"]["CommerceIdempotency"];
                "x-admin-session": components["parameters"]["CommerceAdminSession"];
                "x-csrf-token": components["parameters"]["CommerceCSRF"];
            };
            path: {
                attemptId: string;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["CommerceAdminReconcileAttemptInput"];
            };
        };
        responses: {
            /** @description Success */
            200: {
                headers: {
                    "Cache-Control"?: string;
                    ETag?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["CommerceActionReceipt"];
                };
            };
            /** @description Normalized Commerce error */
            400: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["CommerceError"];
                };
            };
            /** @description Normalized Commerce error */
            401: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["CommerceError"];
                };
            };
            /** @description Normalized Commerce error */
            403: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["CommerceError"];
                };
            };
            /** @description Normalized Commerce error */
            404: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["CommerceError"];
                };
            };
            /** @description Normalized Commerce error */
            409: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["CommerceError"];
                };
            };
            /** @description Normalized Commerce error */
            410: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["CommerceError"];
                };
            };
            /** @description Normalized Commerce error */
            422: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["CommerceError"];
                };
            };
            /** @description Normalized Commerce error */
            429: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    "Retry-After"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["CommerceError"];
                };
            };
            /** @description Normalized Commerce error */
            503: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["CommerceError"];
                };
            };
        };
    };
    commerceStripeWebhook: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["CommerceStripeWebhookInput"];
            };
        };
        responses: {
            /** @description Success */
            200: {
                headers: {
                    "Cache-Control"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["CommerceWebhookAck"];
                };
            };
            /** @description Normalized Commerce error */
            400: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["CommerceError"];
                };
            };
            /** @description Normalized Commerce error */
            401: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["CommerceError"];
                };
            };
            /** @description Normalized Commerce error */
            403: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["CommerceError"];
                };
            };
            /** @description Normalized Commerce error */
            404: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["CommerceError"];
                };
            };
            /** @description Normalized Commerce error */
            409: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["CommerceError"];
                };
            };
            /** @description Normalized Commerce error */
            410: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["CommerceError"];
                };
            };
            /** @description Normalized Commerce error */
            422: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["CommerceError"];
                };
            };
            /** @description Normalized Commerce error */
            429: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    "Retry-After"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["CommerceError"];
                };
            };
            /** @description Normalized Commerce error */
            503: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["CommerceError"];
                };
            };
        };
    };
    commerceCheckoutOptions: {
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
                    "Cache-Control"?: string;
                    ETag?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["CommerceCheckoutOptions"];
                };
            };
            /** @description Normalized Commerce error */
            400: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["CommerceError"];
                };
            };
            /** @description Normalized Commerce error */
            401: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["CommerceError"];
                };
            };
            /** @description Normalized Commerce error */
            403: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["CommerceError"];
                };
            };
            /** @description Normalized Commerce error */
            404: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["CommerceError"];
                };
            };
            /** @description Normalized Commerce error */
            409: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["CommerceError"];
                };
            };
            /** @description Normalized Commerce error */
            410: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["CommerceError"];
                };
            };
            /** @description Normalized Commerce error */
            422: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["CommerceError"];
                };
            };
            /** @description Normalized Commerce error */
            429: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    "Retry-After"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["CommerceError"];
                };
            };
            /** @description Normalized Commerce error */
            503: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["CommerceError"];
                };
            };
        };
    };
    commerceMockConfirmAttempt: {
        parameters: {
            query?: never;
            header: {
                "x-commerce-capability": components["parameters"]["CommerceCapability"];
                "Idempotency-Key": components["parameters"]["CommerceIdempotency"];
            };
            path: {
                attemptId: string;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["CommerceMockConfirmInput"];
            };
        };
        responses: {
            /** @description Success */
            200: {
                headers: {
                    "Cache-Control"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["CommerceAttempt"];
                };
            };
            /** @description Durable operation pending reconciliation */
            202: {
                headers: {
                    "Cache-Control"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["CommerceAttempt"];
                };
            };
            /** @description Normalized Commerce error */
            400: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["CommerceError"];
                };
            };
            /** @description Normalized Commerce error */
            401: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["CommerceError"];
                };
            };
            /** @description Normalized Commerce error */
            403: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["CommerceError"];
                };
            };
            /** @description Normalized Commerce error */
            404: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["CommerceError"];
                };
            };
            /** @description Normalized Commerce error */
            409: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["CommerceError"];
                };
            };
            /** @description Normalized Commerce error */
            410: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["CommerceError"];
                };
            };
            /** @description Normalized Commerce error */
            422: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["CommerceError"];
                };
            };
            /** @description Normalized Commerce error */
            429: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    "Retry-After"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["CommerceError"];
                };
            };
            /** @description Normalized Commerce error */
            503: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["CommerceError"];
                };
            };
        };
    };
    commerceAdminReadOrderDocument: {
        parameters: {
            query?: never;
            header: {
                "x-admin-session": components["parameters"]["CommerceAdminSession"];
            };
            path: {
                orderId: string;
                documentId: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Success */
            200: {
                headers: {
                    "Cache-Control"?: string;
                    ETag?: string;
                    [name: string]: unknown;
                };
                content: {
                    "text/html": string;
                };
            };
            /** @description Normalized Commerce error */
            400: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["CommerceError"];
                };
            };
            /** @description Normalized Commerce error */
            401: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["CommerceError"];
                };
            };
            /** @description Normalized Commerce error */
            403: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["CommerceError"];
                };
            };
            /** @description Normalized Commerce error */
            404: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["CommerceError"];
                };
            };
            /** @description Normalized Commerce error */
            409: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["CommerceError"];
                };
            };
            /** @description Normalized Commerce error */
            410: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["CommerceError"];
                };
            };
            /** @description Normalized Commerce error */
            422: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["CommerceError"];
                };
            };
            /** @description Normalized Commerce error */
            429: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    "Retry-After"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["CommerceError"];
                };
            };
            /** @description Normalized Commerce error */
            503: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["CommerceError"];
                };
            };
        };
    };
    commerceAdminRetryWithdrawalNotification: {
        parameters: {
            query?: never;
            header: {
                "If-Match": components["parameters"]["CommerceRevision"];
                "Idempotency-Key": components["parameters"]["CommerceIdempotency"];
                "x-admin-session": components["parameters"]["CommerceAdminSession"];
                "x-csrf-token": components["parameters"]["CommerceCSRF"];
            };
            path: {
                id: string;
                notificationId: string;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["CommerceAdminRetryNotificationInput"];
            };
        };
        responses: {
            /** @description Success */
            200: {
                headers: {
                    "Cache-Control"?: string;
                    ETag?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["CommerceWithdrawalAdmin"];
                };
            };
            /** @description Normalized Commerce error */
            400: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["CommerceError"];
                };
            };
            /** @description Normalized Commerce error */
            401: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["CommerceError"];
                };
            };
            /** @description Normalized Commerce error */
            403: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["CommerceError"];
                };
            };
            /** @description Normalized Commerce error */
            404: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["CommerceError"];
                };
            };
            /** @description Normalized Commerce error */
            409: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["CommerceError"];
                };
            };
            /** @description Normalized Commerce error */
            410: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["CommerceError"];
                };
            };
            /** @description Normalized Commerce error */
            422: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["CommerceError"];
                };
            };
            /** @description Normalized Commerce error */
            429: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    "Retry-After"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["CommerceError"];
                };
            };
            /** @description Normalized Commerce error */
            503: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["CommerceError"];
                };
            };
        };
    };
    commerceDeliveryCapabilities: {
        parameters: {
            query: {
                locale: components["parameters"]["CommerceLocale"];
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
                    "application/json": components["schemas"]["CommerceDeliveryCapabilities"];
                };
            };
            /** @description Normalized Commerce error */
            400: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["CommerceError"];
                };
            };
            /** @description Normalized Commerce error */
            401: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["CommerceError"];
                };
            };
            /** @description Normalized Commerce error */
            403: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["CommerceError"];
                };
            };
            /** @description Normalized Commerce error */
            404: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["CommerceError"];
                };
            };
            /** @description Normalized Commerce error */
            409: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["CommerceError"];
                };
            };
            /** @description Normalized Commerce error */
            410: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["CommerceError"];
                };
            };
            /** @description Normalized Commerce error */
            422: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["CommerceError"];
                };
            };
            /** @description Normalized Commerce error */
            429: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    "Retry-After"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["CommerceError"];
                };
            };
            /** @description Normalized Commerce error */
            503: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["CommerceError"];
                };
            };
        };
    };
    commerceAdminListDeliveryMethods: {
        parameters: {
            query?: never;
            header: {
                "x-admin-session": components["parameters"]["CommerceAdminSession"];
            };
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
                    "application/json": components["schemas"]["CommerceDeliveryMethods"];
                };
            };
            /** @description Normalized Commerce error */
            400: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["CommerceError"];
                };
            };
            /** @description Normalized Commerce error */
            401: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["CommerceError"];
                };
            };
            /** @description Normalized Commerce error */
            403: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["CommerceError"];
                };
            };
            /** @description Normalized Commerce error */
            404: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["CommerceError"];
                };
            };
            /** @description Normalized Commerce error */
            409: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["CommerceError"];
                };
            };
            /** @description Normalized Commerce error */
            410: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["CommerceError"];
                };
            };
            /** @description Normalized Commerce error */
            422: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["CommerceError"];
                };
            };
            /** @description Normalized Commerce error */
            429: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    "Retry-After"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["CommerceError"];
                };
            };
            /** @description Normalized Commerce error */
            503: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["CommerceError"];
                };
            };
        };
    };
    commerceAdminCreateDeliveryMethod: {
        parameters: {
            query?: never;
            header: {
                "Idempotency-Key": components["parameters"]["CommerceIdempotency"];
                "x-admin-session": components["parameters"]["CommerceAdminSession"];
                "x-csrf-token": components["parameters"]["CommerceCSRF"];
            };
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["CommerceDeliveryMethodInput"];
            };
        };
        responses: {
            /** @description Success */
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["CommerceDeliveryMethod"];
                };
            };
            /** @description Normalized Commerce error */
            400: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["CommerceError"];
                };
            };
            /** @description Normalized Commerce error */
            401: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["CommerceError"];
                };
            };
            /** @description Normalized Commerce error */
            403: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["CommerceError"];
                };
            };
            /** @description Normalized Commerce error */
            404: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["CommerceError"];
                };
            };
            /** @description Normalized Commerce error */
            409: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["CommerceError"];
                };
            };
            /** @description Normalized Commerce error */
            410: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["CommerceError"];
                };
            };
            /** @description Normalized Commerce error */
            422: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["CommerceError"];
                };
            };
            /** @description Normalized Commerce error */
            429: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    "Retry-After"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["CommerceError"];
                };
            };
            /** @description Normalized Commerce error */
            503: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["CommerceError"];
                };
            };
        };
    };
    commerceAdminReadDeliveryMethod: {
        parameters: {
            query?: never;
            header: {
                "x-admin-session": components["parameters"]["CommerceAdminSession"];
            };
            path: {
                methodId: string;
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
                    "application/json": components["schemas"]["CommerceDeliveryMethod"];
                };
            };
            /** @description Normalized Commerce error */
            400: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["CommerceError"];
                };
            };
            /** @description Normalized Commerce error */
            401: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["CommerceError"];
                };
            };
            /** @description Normalized Commerce error */
            403: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["CommerceError"];
                };
            };
            /** @description Normalized Commerce error */
            404: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["CommerceError"];
                };
            };
            /** @description Normalized Commerce error */
            409: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["CommerceError"];
                };
            };
            /** @description Normalized Commerce error */
            410: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["CommerceError"];
                };
            };
            /** @description Normalized Commerce error */
            422: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["CommerceError"];
                };
            };
            /** @description Normalized Commerce error */
            429: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    "Retry-After"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["CommerceError"];
                };
            };
            /** @description Normalized Commerce error */
            503: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["CommerceError"];
                };
            };
        };
    };
    commerceAdminUpdateDeliveryMethod: {
        parameters: {
            query?: never;
            header: {
                "If-Match": components["parameters"]["CommerceRevision"];
                "x-admin-session": components["parameters"]["CommerceAdminSession"];
                "x-csrf-token": components["parameters"]["CommerceCSRF"];
            };
            path: {
                methodId: string;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["CommerceDeliveryMethodInput"];
            };
        };
        responses: {
            /** @description Success */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["CommerceDeliveryMethod"];
                };
            };
            /** @description Normalized Commerce error */
            400: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["CommerceError"];
                };
            };
            /** @description Normalized Commerce error */
            401: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["CommerceError"];
                };
            };
            /** @description Normalized Commerce error */
            403: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["CommerceError"];
                };
            };
            /** @description Normalized Commerce error */
            404: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["CommerceError"];
                };
            };
            /** @description Normalized Commerce error */
            409: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["CommerceError"];
                };
            };
            /** @description Normalized Commerce error */
            410: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["CommerceError"];
                };
            };
            /** @description Normalized Commerce error */
            422: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["CommerceError"];
                };
            };
            /** @description Normalized Commerce error */
            429: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    "Retry-After"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["CommerceError"];
                };
            };
            /** @description Normalized Commerce error */
            503: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["CommerceError"];
                };
            };
        };
    };
    commerceAdminReadPickup: {
        parameters: {
            query?: never;
            header: {
                "x-admin-session": components["parameters"]["CommerceAdminSession"];
            };
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
                    "application/json": components["schemas"]["CommercePickupSettings"];
                };
            };
            /** @description Normalized Commerce error */
            400: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["CommerceError"];
                };
            };
            /** @description Normalized Commerce error */
            401: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["CommerceError"];
                };
            };
            /** @description Normalized Commerce error */
            403: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["CommerceError"];
                };
            };
            /** @description Normalized Commerce error */
            404: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["CommerceError"];
                };
            };
            /** @description Normalized Commerce error */
            409: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["CommerceError"];
                };
            };
            /** @description Normalized Commerce error */
            410: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["CommerceError"];
                };
            };
            /** @description Normalized Commerce error */
            422: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["CommerceError"];
                };
            };
            /** @description Normalized Commerce error */
            429: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    "Retry-After"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["CommerceError"];
                };
            };
            /** @description Normalized Commerce error */
            503: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["CommerceError"];
                };
            };
        };
    };
    commerceAdminUpdatePickup: {
        parameters: {
            query?: never;
            header: {
                "If-Match": components["parameters"]["CommerceRevision"];
                "x-admin-session": components["parameters"]["CommerceAdminSession"];
                "x-csrf-token": components["parameters"]["CommerceCSRF"];
            };
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["CommercePickupSettingsInput"];
            };
        };
        responses: {
            /** @description Success */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["CommercePickupSettings"];
                };
            };
            /** @description Normalized Commerce error */
            400: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["CommerceError"];
                };
            };
            /** @description Normalized Commerce error */
            401: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["CommerceError"];
                };
            };
            /** @description Normalized Commerce error */
            403: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["CommerceError"];
                };
            };
            /** @description Normalized Commerce error */
            404: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["CommerceError"];
                };
            };
            /** @description Normalized Commerce error */
            409: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["CommerceError"];
                };
            };
            /** @description Normalized Commerce error */
            410: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["CommerceError"];
                };
            };
            /** @description Normalized Commerce error */
            422: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["CommerceError"];
                };
            };
            /** @description Normalized Commerce error */
            429: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    "Retry-After"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["CommerceError"];
                };
            };
            /** @description Normalized Commerce error */
            503: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["CommerceError"];
                };
            };
        };
    };
    commerceAdminReadDeliveryProduct: {
        parameters: {
            query?: never;
            header: {
                "x-admin-session": components["parameters"]["CommerceAdminSession"];
            };
            path: {
                productId: string;
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
                    "application/json": components["schemas"]["CommerceDeliveryProduct"];
                };
            };
            /** @description Normalized Commerce error */
            400: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["CommerceError"];
                };
            };
            /** @description Normalized Commerce error */
            401: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["CommerceError"];
                };
            };
            /** @description Normalized Commerce error */
            403: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["CommerceError"];
                };
            };
            /** @description Normalized Commerce error */
            404: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["CommerceError"];
                };
            };
            /** @description Normalized Commerce error */
            409: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["CommerceError"];
                };
            };
            /** @description Normalized Commerce error */
            410: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["CommerceError"];
                };
            };
            /** @description Normalized Commerce error */
            422: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["CommerceError"];
                };
            };
            /** @description Normalized Commerce error */
            429: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    "Retry-After"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["CommerceError"];
                };
            };
            /** @description Normalized Commerce error */
            503: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["CommerceError"];
                };
            };
        };
    };
    commerceAdminUpdateDeliveryProduct: {
        parameters: {
            query?: never;
            header: {
                "If-Match": components["parameters"]["CommerceRevision"];
                "x-admin-session": components["parameters"]["CommerceAdminSession"];
                "x-csrf-token": components["parameters"]["CommerceCSRF"];
            };
            path: {
                productId: string;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["CommerceDeliveryProductPatch"];
            };
        };
        responses: {
            /** @description Success */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["CommerceDeliveryProduct"];
                };
            };
            /** @description Normalized Commerce error */
            400: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["CommerceError"];
                };
            };
            /** @description Normalized Commerce error */
            401: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["CommerceError"];
                };
            };
            /** @description Normalized Commerce error */
            403: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["CommerceError"];
                };
            };
            /** @description Normalized Commerce error */
            404: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["CommerceError"];
                };
            };
            /** @description Normalized Commerce error */
            409: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["CommerceError"];
                };
            };
            /** @description Normalized Commerce error */
            410: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["CommerceError"];
                };
            };
            /** @description Normalized Commerce error */
            422: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["CommerceError"];
                };
            };
            /** @description Normalized Commerce error */
            429: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    "Retry-After"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["CommerceError"];
                };
            };
            /** @description Normalized Commerce error */
            503: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["CommerceError"];
                };
            };
        };
    };
    commerceAdminCreateDeliveryProduct: {
        parameters: {
            query?: never;
            header: {
                "Idempotency-Key": components["parameters"]["CommerceIdempotency"];
                "x-admin-session": components["parameters"]["CommerceAdminSession"];
                "x-csrf-token": components["parameters"]["CommerceCSRF"];
            };
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["CommerceDeliveryProductCreate"];
            };
        };
        responses: {
            /** @description Success */
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["CommerceDeliveryProduct"];
                };
            };
            /** @description Normalized Commerce error */
            400: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["CommerceError"];
                };
            };
            /** @description Normalized Commerce error */
            401: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["CommerceError"];
                };
            };
            /** @description Normalized Commerce error */
            403: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["CommerceError"];
                };
            };
            /** @description Normalized Commerce error */
            404: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["CommerceError"];
                };
            };
            /** @description Normalized Commerce error */
            409: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["CommerceError"];
                };
            };
            /** @description Normalized Commerce error */
            410: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["CommerceError"];
                };
            };
            /** @description Normalized Commerce error */
            422: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["CommerceError"];
                };
            };
            /** @description Normalized Commerce error */
            429: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    "Retry-After"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["CommerceError"];
                };
            };
            /** @description Normalized Commerce error */
            503: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["CommerceError"];
                };
            };
        };
    };
    commerceDeliveryPlan: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["CommerceDeliveryPlanInput"];
            };
        };
        responses: {
            /** @description Success */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["CommerceDeliveryPlan"];
                };
            };
            /** @description Normalized Commerce error */
            400: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["CommerceError"];
                };
            };
            /** @description Normalized Commerce error */
            401: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["CommerceError"];
                };
            };
            /** @description Normalized Commerce error */
            403: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["CommerceError"];
                };
            };
            /** @description Normalized Commerce error */
            404: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["CommerceError"];
                };
            };
            /** @description Normalized Commerce error */
            409: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["CommerceError"];
                };
            };
            /** @description Normalized Commerce error */
            410: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["CommerceError"];
                };
            };
            /** @description Normalized Commerce error */
            422: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["CommerceError"];
                };
            };
            /** @description Normalized Commerce error */
            429: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    "Retry-After"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["CommerceError"];
                };
            };
            /** @description Normalized Commerce error */
            503: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["CommerceError"];
                };
            };
        };
    };
    commerceDeliveryQuote: {
        parameters: {
            query?: never;
            header: {
                "x-commerce-capability": components["parameters"]["CommerceCapability"];
            };
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["CommerceDeliveryQuoteInput"];
            };
        };
        responses: {
            /** @description Success */
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["CommerceDeliveryQuote"];
                };
            };
            /** @description Normalized Commerce error */
            400: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["CommerceError"];
                };
            };
            /** @description Normalized Commerce error */
            401: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["CommerceError"];
                };
            };
            /** @description Normalized Commerce error */
            403: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["CommerceError"];
                };
            };
            /** @description Normalized Commerce error */
            404: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["CommerceError"];
                };
            };
            /** @description Normalized Commerce error */
            409: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["CommerceError"];
                };
            };
            /** @description Normalized Commerce error */
            410: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["CommerceError"];
                };
            };
            /** @description Normalized Commerce error */
            422: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["CommerceError"];
                };
            };
            /** @description Normalized Commerce error */
            429: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    "Retry-After"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["CommerceError"];
                };
            };
            /** @description Normalized Commerce error */
            503: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["CommerceError"];
                };
            };
        };
    };
    commerceAdminDeliveryCapabilities: {
        parameters: {
            query?: never;
            header: {
                "x-admin-session": components["parameters"]["CommerceAdminSession"];
            };
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
                    "application/json": components["schemas"]["CommerceDeliveryCapabilities"];
                };
            };
            /** @description Normalized Commerce error */
            400: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["CommerceError"];
                };
            };
            /** @description Normalized Commerce error */
            401: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["CommerceError"];
                };
            };
            /** @description Normalized Commerce error */
            403: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["CommerceError"];
                };
            };
            /** @description Normalized Commerce error */
            404: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["CommerceError"];
                };
            };
            /** @description Normalized Commerce error */
            409: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["CommerceError"];
                };
            };
            /** @description Normalized Commerce error */
            410: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["CommerceError"];
                };
            };
            /** @description Normalized Commerce error */
            422: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["CommerceError"];
                };
            };
            /** @description Normalized Commerce error */
            429: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    "Retry-After"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["CommerceError"];
                };
            };
            /** @description Normalized Commerce error */
            503: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["CommerceError"];
                };
            };
        };
    };
    commerceInternalDeliveryCapabilities: {
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
                    "application/json": components["schemas"]["CommerceDeliveryCapabilities"];
                };
            };
            /** @description Normalized Commerce error */
            400: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["CommerceError"];
                };
            };
            /** @description Normalized Commerce error */
            401: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["CommerceError"];
                };
            };
            /** @description Normalized Commerce error */
            403: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["CommerceError"];
                };
            };
            /** @description Normalized Commerce error */
            404: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["CommerceError"];
                };
            };
            /** @description Normalized Commerce error */
            409: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["CommerceError"];
                };
            };
            /** @description Normalized Commerce error */
            410: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["CommerceError"];
                };
            };
            /** @description Normalized Commerce error */
            422: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["CommerceError"];
                };
            };
            /** @description Normalized Commerce error */
            429: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    "Retry-After"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["CommerceError"];
                };
            };
            /** @description Normalized Commerce error */
            503: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["CommerceError"];
                };
            };
        };
    };
    commerceAdminReadOrderDelivery: {
        parameters: {
            query?: never;
            header: {
                "x-admin-session": components["parameters"]["CommerceAdminSession"];
            };
            path: {
                orderId: string;
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
                    "application/json": components["schemas"]["CommerceDeliveryOrder"];
                };
            };
            /** @description Normalized Commerce error */
            400: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["CommerceError"];
                };
            };
            /** @description Normalized Commerce error */
            401: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["CommerceError"];
                };
            };
            /** @description Normalized Commerce error */
            403: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["CommerceError"];
                };
            };
            /** @description Normalized Commerce error */
            404: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["CommerceError"];
                };
            };
            /** @description Normalized Commerce error */
            409: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["CommerceError"];
                };
            };
            /** @description Normalized Commerce error */
            410: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["CommerceError"];
                };
            };
            /** @description Normalized Commerce error */
            422: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["CommerceError"];
                };
            };
            /** @description Normalized Commerce error */
            429: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    "Retry-After"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["CommerceError"];
                };
            };
            /** @description Normalized Commerce error */
            503: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["CommerceError"];
                };
            };
        };
    };
    commerceAdminFulfillDelivery: {
        parameters: {
            query?: never;
            header: {
                "Idempotency-Key": components["parameters"]["CommerceIdempotency"];
                "If-Match": components["parameters"]["CommerceRevision"];
                "x-admin-session": components["parameters"]["CommerceAdminSession"];
                "x-csrf-token": components["parameters"]["CommerceCSRF"];
            };
            path: {
                orderId: string;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["CommerceDeliveryFulfillmentInput"];
            };
        };
        responses: {
            /** @description Success */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["CommerceDeliveryOrder"];
                };
            };
            /** @description Normalized Commerce error */
            400: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["CommerceError"];
                };
            };
            /** @description Normalized Commerce error */
            401: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["CommerceError"];
                };
            };
            /** @description Normalized Commerce error */
            403: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["CommerceError"];
                };
            };
            /** @description Normalized Commerce error */
            404: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["CommerceError"];
                };
            };
            /** @description Normalized Commerce error */
            409: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["CommerceError"];
                };
            };
            /** @description Normalized Commerce error */
            410: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["CommerceError"];
                };
            };
            /** @description Normalized Commerce error */
            422: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["CommerceError"];
                };
            };
            /** @description Normalized Commerce error */
            429: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    "Retry-After"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["CommerceError"];
                };
            };
            /** @description Normalized Commerce error */
            503: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["CommerceError"];
                };
            };
        };
    };
    commerceDeliveryLookupOrder: {
        parameters: {
            query?: never;
            header: {
                /** @description Trusted ingress address relayed only by the authenticated Commerce BFF. Never taken from a browser value. */
                "X-Commerce-Visitor-IP": components["parameters"]["CommerceVisitorIP"];
            };
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["CommerceLookup"];
            };
        };
        responses: {
            /** @description Success */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["CommerceDeliveryTracking"];
                };
            };
            /** @description Normalized Commerce error */
            400: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["CommerceError"];
                };
            };
            /** @description Normalized Commerce error */
            401: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["CommerceError"];
                };
            };
            /** @description Normalized Commerce error */
            403: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["CommerceError"];
                };
            };
            /** @description Normalized Commerce error */
            404: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["CommerceError"];
                };
            };
            /** @description Normalized Commerce error */
            409: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["CommerceError"];
                };
            };
            /** @description Normalized Commerce error */
            410: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["CommerceError"];
                };
            };
            /** @description Normalized Commerce error */
            422: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["CommerceError"];
                };
            };
            /** @description Normalized Commerce error */
            429: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    "Retry-After"?: string;
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["CommerceError"];
                };
            };
            /** @description Normalized Commerce error */
            503: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["CommerceError"];
                };
            };
        };
    };
}

export const commerceSourceSha256="74a1f6ea725a1a463ad22d8fa31b3b78edccebffe4b4e2c5fb68fc6afb40c267";
