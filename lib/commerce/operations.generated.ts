// Generated from Commerce032 by backend/scripts/generate-contracts.ts. Do not edit.
export const commerceOperations=[
  {
    "id": "commerceCreateGuestSession",
    "method": "POST",
    "area": "internal",
    "path": "/v1/internal/store/guest-sessions",
    "bodyLimit": 65536,
    "bodySchema": "CommerceGuestSessionInput",
    "responseSchemas": {
      "200": "CommerceGuestSession",
      "201": "CommerceGuestSession"
    },
    "query": [],
    "headers": [],
    "statuses": [
      200,
      201,
      400,
      401,
      403,
      404,
      409,
      410,
      422,
      429,
      503
    ]
  },
  {
    "id": "commerceValidateCart",
    "method": "POST",
    "area": "internal",
    "path": "/v1/internal/store/cart/validate",
    "bodyLimit": 65536,
    "bodySchema": "CommerceCartInput",
    "responseSchemas": {
      "200": "CommerceCartValidation"
    },
    "query": [],
    "headers": [],
    "statuses": [
      200,
      400,
      401,
      403,
      404,
      409,
      410,
      422,
      429,
      503
    ]
  },
  {
    "id": "commerceCreateQuote",
    "method": "POST",
    "area": "internal",
    "path": "/v1/internal/store/quotes",
    "bodyLimit": 65536,
    "bodySchema": "CommerceQuoteInput",
    "responseSchemas": {
      "200": "CommerceQuote",
      "201": "CommerceQuote"
    },
    "query": [],
    "headers": [
      "x-commerce-capability"
    ],
    "statuses": [
      200,
      201,
      400,
      401,
      403,
      404,
      409,
      410,
      422,
      429,
      503
    ]
  },
  {
    "id": "commerceStartAttempt",
    "method": "POST",
    "area": "internal",
    "path": "/v1/internal/store/attempts",
    "bodyLimit": 65536,
    "bodySchema": "CommerceAttemptInput",
    "responseSchemas": {
      "200": "CommerceAttempt",
      "201": "CommerceAttempt",
      "202": "CommerceAttempt"
    },
    "query": [],
    "headers": [
      "x-commerce-capability",
      "idempotency-key"
    ],
    "statuses": [
      200,
      201,
      202,
      400,
      401,
      403,
      404,
      409,
      410,
      422,
      429,
      503
    ]
  },
  {
    "id": "commerceReadAttempt",
    "method": "GET",
    "area": "internal",
    "path": "/v1/internal/store/attempts/{attemptId}",
    "bodyLimit": 0,
    "bodySchema": null,
    "responseSchemas": {
      "200": "CommerceAttempt"
    },
    "query": [],
    "headers": [
      "x-commerce-capability"
    ],
    "statuses": [
      200,
      400,
      401,
      403,
      404,
      409,
      410,
      422,
      429,
      503
    ]
  },
  {
    "id": "commerceCancelAttempt",
    "method": "POST",
    "area": "internal",
    "path": "/v1/internal/store/attempts/{attemptId}/cancel",
    "bodyLimit": 65536,
    "bodySchema": "CommerceCancelAttemptInput",
    "responseSchemas": {
      "200": "CommerceAttempt",
      "202": "CommerceAttempt"
    },
    "query": [],
    "headers": [
      "x-commerce-capability",
      "idempotency-key"
    ],
    "statuses": [
      200,
      202,
      400,
      401,
      403,
      404,
      409,
      410,
      422,
      429,
      503
    ]
  },
  {
    "id": "commerceReadOrderDocument",
    "method": "POST",
    "area": "internal",
    "path": "/v1/internal/store/order-documents/read",
    "bodyLimit": 65536,
    "bodySchema": "CommerceDocumentRead",
    "responseSchemas": {
      "200": null
    },
    "query": [],
    "headers": [
      "x-commerce-visitor-ip"
    ],
    "statuses": [
      200,
      400,
      401,
      403,
      404,
      409,
      410,
      422,
      429,
      503
    ]
  },
  {
    "id": "commerceLookupOrder",
    "method": "POST",
    "area": "internal",
    "path": "/v1/internal/store/orders/lookup",
    "bodyLimit": 65536,
    "bodySchema": "CommerceLookup",
    "responseSchemas": {
      "200": "CommerceOrderTracking"
    },
    "query": [],
    "headers": [
      "x-commerce-visitor-ip"
    ],
    "statuses": [
      200,
      400,
      401,
      403,
      404,
      409,
      410,
      422,
      429,
      503
    ]
  },
  {
    "id": "commerceSubmitWithdrawal",
    "method": "POST",
    "area": "internal",
    "path": "/v1/internal/store/withdrawals",
    "bodyLimit": 16384,
    "bodySchema": "CommerceWithdrawalInput",
    "responseSchemas": {
      "200": "CommerceWithdrawalReceipt",
      "201": "CommerceWithdrawalReceipt"
    },
    "query": [],
    "headers": [
      "x-commerce-capability",
      "idempotency-key",
      "x-commerce-visitor-ip"
    ],
    "statuses": [
      200,
      201,
      400,
      401,
      403,
      404,
      409,
      410,
      422,
      429,
      503
    ]
  },
  {
    "id": "commerceRecordConsent",
    "method": "POST",
    "area": "internal",
    "path": "/v1/internal/store/consent-receipts",
    "bodyLimit": 65536,
    "bodySchema": "CommerceConsentInput",
    "responseSchemas": {
      "200": "CommerceConsentReceipt",
      "201": "CommerceConsentReceipt"
    },
    "query": [],
    "headers": [
      "idempotency-key"
    ],
    "statuses": [
      200,
      201,
      400,
      401,
      403,
      404,
      409,
      410,
      422,
      429,
      503
    ]
  },
  {
    "id": "commerceAdminReadSettings",
    "method": "GET",
    "area": "admin",
    "path": "/v1/admin/store/settings",
    "bodyLimit": 0,
    "bodySchema": null,
    "responseSchemas": {
      "200": "CommerceSettings"
    },
    "query": [],
    "headers": [
      "x-admin-session"
    ],
    "statuses": [
      200,
      400,
      401,
      403,
      404,
      409,
      410,
      422,
      429,
      503
    ]
  },
  {
    "id": "commerceAdminUpdateSettings",
    "method": "PUT",
    "area": "admin",
    "path": "/v1/admin/store/settings",
    "bodyLimit": 65536,
    "bodySchema": "CommerceSettingsInput",
    "responseSchemas": {
      "200": "CommerceSettings"
    },
    "query": [],
    "headers": [
      "if-match",
      "x-admin-session",
      "x-csrf-token"
    ],
    "statuses": [
      200,
      400,
      401,
      403,
      404,
      409,
      410,
      422,
      429,
      503
    ]
  },
  {
    "id": "commerceAdminListProducts",
    "method": "GET",
    "area": "admin",
    "path": "/v1/admin/store/products",
    "bodyLimit": 0,
    "bodySchema": null,
    "responseSchemas": {
      "200": "CommerceProductAdminPage"
    },
    "query": [
      "cursor",
      "limit",
      "status",
      "kind"
    ],
    "headers": [
      "x-admin-session"
    ],
    "statuses": [
      200,
      400,
      401,
      403,
      404,
      409,
      410,
      422,
      429,
      503
    ]
  },
  {
    "id": "commerceAdminCreateProduct",
    "method": "POST",
    "area": "admin",
    "path": "/v1/admin/store/products",
    "bodyLimit": 65536,
    "bodySchema": "CommerceProductCreate",
    "responseSchemas": {
      "200": "CommerceProductAdmin",
      "201": "CommerceProductAdmin"
    },
    "query": [],
    "headers": [
      "idempotency-key",
      "x-admin-session",
      "x-csrf-token"
    ],
    "statuses": [
      200,
      201,
      400,
      401,
      403,
      404,
      409,
      410,
      422,
      429,
      503
    ]
  },
  {
    "id": "commerceAdminReadProduct",
    "method": "GET",
    "area": "admin",
    "path": "/v1/admin/store/products/{productId}",
    "bodyLimit": 0,
    "bodySchema": null,
    "responseSchemas": {
      "200": "CommerceProductAdmin"
    },
    "query": [],
    "headers": [
      "x-admin-session"
    ],
    "statuses": [
      200,
      400,
      401,
      403,
      404,
      409,
      410,
      422,
      429,
      503
    ]
  },
  {
    "id": "commerceAdminUpdateProduct",
    "method": "PATCH",
    "area": "admin",
    "path": "/v1/admin/store/products/{productId}",
    "bodyLimit": 65536,
    "bodySchema": "CommerceProductPatch",
    "responseSchemas": {
      "200": "CommerceProductAdmin"
    },
    "query": [],
    "headers": [
      "if-match",
      "x-admin-session",
      "x-csrf-token"
    ],
    "statuses": [
      200,
      400,
      401,
      403,
      404,
      409,
      410,
      422,
      429,
      503
    ]
  },
  {
    "id": "commerceAdminReadInventory",
    "method": "GET",
    "area": "admin",
    "path": "/v1/admin/store/products/{productId}/inventory",
    "bodyLimit": 0,
    "bodySchema": null,
    "responseSchemas": {
      "200": "CommerceInventoryHistory"
    },
    "query": [
      "cursor",
      "limit"
    ],
    "headers": [
      "x-admin-session"
    ],
    "statuses": [
      200,
      400,
      401,
      403,
      404,
      409,
      410,
      422,
      429,
      503
    ]
  },
  {
    "id": "commerceAdminAdjustInventory",
    "method": "POST",
    "area": "admin",
    "path": "/v1/admin/store/products/{productId}/inventory-adjustments",
    "bodyLimit": 65536,
    "bodySchema": "CommerceAdminAdjustInventoryInput",
    "responseSchemas": {
      "200": "CommerceInventory"
    },
    "query": [],
    "headers": [
      "idempotency-key",
      "if-match",
      "x-admin-session",
      "x-csrf-token"
    ],
    "statuses": [
      200,
      400,
      401,
      403,
      404,
      409,
      410,
      422,
      429,
      503
    ]
  },
  {
    "id": "commerceAdminReadShippingZones",
    "method": "GET",
    "area": "admin",
    "path": "/v1/admin/store/shipping-zones",
    "bodyLimit": 0,
    "bodySchema": null,
    "responseSchemas": {
      "200": "CommerceShippingZones"
    },
    "query": [],
    "headers": [
      "x-admin-session"
    ],
    "statuses": [
      200,
      400,
      401,
      403,
      404,
      409,
      410,
      422,
      429,
      503
    ]
  },
  {
    "id": "commerceAdminUpdateShippingZones",
    "method": "PUT",
    "area": "admin",
    "path": "/v1/admin/store/shipping-zones",
    "bodyLimit": 65536,
    "bodySchema": "CommerceShippingZonesInput",
    "responseSchemas": {
      "200": "CommerceShippingZones"
    },
    "query": [],
    "headers": [
      "if-match",
      "x-admin-session",
      "x-csrf-token"
    ],
    "statuses": [
      200,
      400,
      401,
      403,
      404,
      409,
      410,
      422,
      429,
      503
    ]
  },
  {
    "id": "commerceAdminReadTaxRules",
    "method": "GET",
    "area": "admin",
    "path": "/v1/admin/store/tax-rules",
    "bodyLimit": 0,
    "bodySchema": null,
    "responseSchemas": {
      "200": "CommerceTaxRules"
    },
    "query": [],
    "headers": [
      "x-admin-session"
    ],
    "statuses": [
      200,
      400,
      401,
      403,
      404,
      409,
      410,
      422,
      429,
      503
    ]
  },
  {
    "id": "commerceAdminUpdateTaxRules",
    "method": "PUT",
    "area": "admin",
    "path": "/v1/admin/store/tax-rules",
    "bodyLimit": 65536,
    "bodySchema": "CommerceTaxRulesInput",
    "responseSchemas": {
      "200": "CommerceTaxRules"
    },
    "query": [],
    "headers": [
      "if-match",
      "x-admin-session",
      "x-csrf-token"
    ],
    "statuses": [
      200,
      400,
      401,
      403,
      404,
      409,
      410,
      422,
      429,
      503
    ]
  },
  {
    "id": "commerceAdminListOrders",
    "method": "GET",
    "area": "admin",
    "path": "/v1/admin/store/orders",
    "bodyLimit": 0,
    "bodySchema": null,
    "responseSchemas": {
      "200": "CommerceOrderSummaryPage"
    },
    "query": [
      "cursor",
      "limit",
      "query",
      "fulfillmentStatus",
      "financialStatus"
    ],
    "headers": [
      "x-admin-session"
    ],
    "statuses": [
      200,
      400,
      401,
      403,
      404,
      409,
      410,
      422,
      429,
      503
    ]
  },
  {
    "id": "commerceAdminReadOrder",
    "method": "GET",
    "area": "admin",
    "path": "/v1/admin/store/orders/{orderId}",
    "bodyLimit": 0,
    "bodySchema": null,
    "responseSchemas": {
      "200": "CommerceAdminOrder"
    },
    "query": [],
    "headers": [
      "x-admin-session"
    ],
    "statuses": [
      200,
      400,
      401,
      403,
      404,
      409,
      410,
      422,
      429,
      503
    ]
  },
  {
    "id": "commerceAdminTransitionOrder",
    "method": "POST",
    "area": "admin",
    "path": "/v1/admin/store/orders/{orderId}/transitions",
    "bodyLimit": 65536,
    "bodySchema": "CommerceAdminTransitionOrderInput",
    "responseSchemas": {
      "200": "CommerceAdminOrder"
    },
    "query": [],
    "headers": [
      "idempotency-key",
      "if-match",
      "x-admin-session",
      "x-csrf-token"
    ],
    "statuses": [
      200,
      400,
      401,
      403,
      404,
      409,
      410,
      422,
      429,
      503
    ]
  },
  {
    "id": "commerceAdminCorrectOrder",
    "method": "POST",
    "area": "admin",
    "path": "/v1/admin/store/orders/{orderId}/corrections",
    "bodyLimit": 65536,
    "bodySchema": "CommerceAdminCorrectOrderInput",
    "responseSchemas": {
      "200": "CommerceAdminOrder"
    },
    "query": [],
    "headers": [
      "idempotency-key",
      "if-match",
      "x-admin-session",
      "x-csrf-token"
    ],
    "statuses": [
      200,
      400,
      401,
      403,
      404,
      409,
      410,
      422,
      429,
      503
    ]
  },
  {
    "id": "commerceAdminCancelOrder",
    "method": "POST",
    "area": "admin",
    "path": "/v1/admin/store/orders/{orderId}/cancellation",
    "bodyLimit": 65536,
    "bodySchema": "CommerceAdminCancelOrderInput",
    "responseSchemas": {
      "200": "CommerceAdminOrder"
    },
    "query": [],
    "headers": [
      "idempotency-key",
      "if-match",
      "x-admin-session",
      "x-csrf-token"
    ],
    "statuses": [
      200,
      400,
      401,
      403,
      404,
      409,
      410,
      422,
      429,
      503
    ]
  },
  {
    "id": "commerceAdminRetryAllocation",
    "method": "POST",
    "area": "admin",
    "path": "/v1/admin/store/orders/{orderId}/allocation-retry",
    "bodyLimit": 65536,
    "bodySchema": "CommerceAdminRetryAllocationInput",
    "responseSchemas": {
      "200": "CommerceAdminOrder"
    },
    "query": [],
    "headers": [
      "idempotency-key",
      "if-match",
      "x-admin-session",
      "x-csrf-token"
    ],
    "statuses": [
      200,
      400,
      401,
      403,
      404,
      409,
      410,
      422,
      429,
      503
    ]
  },
  {
    "id": "commerceAdminRecordReturn",
    "method": "POST",
    "area": "admin",
    "path": "/v1/admin/store/orders/{orderId}/returns",
    "bodyLimit": 65536,
    "bodySchema": "CommerceAdminRecordReturnInput",
    "responseSchemas": {
      "200": "CommerceAdminOrder"
    },
    "query": [],
    "headers": [
      "idempotency-key",
      "if-match",
      "x-admin-session",
      "x-csrf-token"
    ],
    "statuses": [
      200,
      400,
      401,
      403,
      404,
      409,
      410,
      422,
      429,
      503
    ]
  },
  {
    "id": "commerceAdminAllocateRefund",
    "method": "POST",
    "area": "admin",
    "path": "/v1/admin/store/orders/{orderId}/refund-allocations",
    "bodyLimit": 65536,
    "bodySchema": "CommerceAdminAllocateRefundInput",
    "responseSchemas": {
      "200": "CommerceAdminOrder"
    },
    "query": [],
    "headers": [
      "idempotency-key",
      "if-match",
      "x-admin-session",
      "x-csrf-token"
    ],
    "statuses": [
      200,
      400,
      401,
      403,
      404,
      409,
      410,
      422,
      429,
      503
    ]
  },
  {
    "id": "commerceAdminRetryNotification",
    "method": "POST",
    "area": "admin",
    "path": "/v1/admin/store/orders/{orderId}/notifications/{notificationId}/retry",
    "bodyLimit": 65536,
    "bodySchema": "CommerceAdminRetryNotificationInput",
    "responseSchemas": {
      "200": "CommerceAdminOrder"
    },
    "query": [],
    "headers": [
      "idempotency-key",
      "x-admin-session",
      "x-csrf-token"
    ],
    "statuses": [
      200,
      400,
      401,
      403,
      404,
      409,
      410,
      422,
      429,
      503
    ]
  },
  {
    "id": "commerceAdminListWithdrawals",
    "method": "GET",
    "area": "admin",
    "path": "/v1/admin/store/withdrawals",
    "bodyLimit": 0,
    "bodySchema": null,
    "responseSchemas": {
      "200": "CommerceWithdrawalAdminPage"
    },
    "query": [
      "cursor",
      "limit"
    ],
    "headers": [
      "x-admin-session"
    ],
    "statuses": [
      200,
      400,
      401,
      403,
      404,
      409,
      410,
      422,
      429,
      503
    ]
  },
  {
    "id": "commerceAdminReadWithdrawal",
    "method": "GET",
    "area": "admin",
    "path": "/v1/admin/store/withdrawals/{id}",
    "bodyLimit": 0,
    "bodySchema": null,
    "responseSchemas": {
      "200": "CommerceWithdrawalAdmin"
    },
    "query": [],
    "headers": [
      "x-admin-session"
    ],
    "statuses": [
      200,
      400,
      401,
      403,
      404,
      409,
      410,
      422,
      429,
      503
    ]
  },
  {
    "id": "commerceAdminUpdateWithdrawal",
    "method": "PATCH",
    "area": "admin",
    "path": "/v1/admin/store/withdrawals/{id}",
    "bodyLimit": 65536,
    "bodySchema": "CommerceAdminUpdateWithdrawalInput",
    "responseSchemas": {
      "200": "CommerceWithdrawalAdmin"
    },
    "query": [],
    "headers": [
      "if-match",
      "x-admin-session",
      "x-csrf-token"
    ],
    "statuses": [
      200,
      400,
      401,
      403,
      404,
      409,
      410,
      422,
      429,
      503
    ]
  },
  {
    "id": "commerceAdminListLegalDocuments",
    "method": "GET",
    "area": "admin",
    "path": "/v1/admin/store/documents",
    "bodyLimit": 0,
    "bodySchema": null,
    "responseSchemas": {
      "200": "CommerceLegalDocumentPage"
    },
    "query": [
      "cursor",
      "limit"
    ],
    "headers": [
      "x-admin-session"
    ],
    "statuses": [
      200,
      400,
      401,
      403,
      404,
      409,
      410,
      422,
      429,
      503
    ]
  },
  {
    "id": "commerceAdminCreateLegalDocument",
    "method": "POST",
    "area": "admin",
    "path": "/v1/admin/store/documents",
    "bodyLimit": 65536,
    "bodySchema": "CommerceLegalDocumentInput",
    "responseSchemas": {
      "200": "CommerceLegalDocument",
      "201": "CommerceLegalDocument"
    },
    "query": [],
    "headers": [
      "idempotency-key",
      "x-admin-session",
      "x-csrf-token"
    ],
    "statuses": [
      200,
      201,
      400,
      401,
      403,
      404,
      409,
      410,
      422,
      429,
      503
    ]
  },
  {
    "id": "commerceAdminPublishLegalDocument",
    "method": "POST",
    "area": "admin",
    "path": "/v1/admin/store/documents/{id}/publish",
    "bodyLimit": 65536,
    "bodySchema": "CommerceAdminPublishLegalDocumentInput",
    "responseSchemas": {
      "200": "CommerceLegalDocument"
    },
    "query": [],
    "headers": [
      "idempotency-key",
      "if-match",
      "x-admin-session",
      "x-csrf-token"
    ],
    "statuses": [
      200,
      400,
      401,
      403,
      404,
      409,
      410,
      422,
      429,
      503
    ]
  },
  {
    "id": "commerceAdminListIncidents",
    "method": "GET",
    "area": "admin",
    "path": "/v1/admin/store/incidents",
    "bodyLimit": 0,
    "bodySchema": null,
    "responseSchemas": {
      "200": "CommerceIncidentPage"
    },
    "query": [
      "cursor",
      "limit"
    ],
    "headers": [
      "x-admin-session"
    ],
    "statuses": [
      200,
      400,
      401,
      403,
      404,
      409,
      410,
      422,
      429,
      503
    ]
  },
  {
    "id": "commerceAdminReconcileAttempt",
    "method": "POST",
    "area": "admin",
    "path": "/v1/admin/store/attempts/{attemptId}/reconcile",
    "bodyLimit": 65536,
    "bodySchema": "CommerceAdminReconcileAttemptInput",
    "responseSchemas": {
      "200": "CommerceActionReceipt"
    },
    "query": [],
    "headers": [
      "idempotency-key",
      "x-admin-session",
      "x-csrf-token"
    ],
    "statuses": [
      200,
      400,
      401,
      403,
      404,
      409,
      410,
      422,
      429,
      503
    ]
  },
  {
    "id": "commerceMockConfirmAttempt",
    "method": "POST",
    "area": "internal",
    "path": "/v1/internal/store/attempts/{attemptId}/mock-confirm",
    "bodyLimit": 65536,
    "bodySchema": "CommerceMockConfirmInput",
    "responseSchemas": {
      "200": "CommerceAttempt",
      "202": "CommerceAttempt"
    },
    "query": [],
    "headers": [
      "x-commerce-capability",
      "idempotency-key"
    ],
    "statuses": [
      200,
      202,
      400,
      401,
      403,
      404,
      409,
      410,
      422,
      429,
      503
    ]
  },
  {
    "id": "commerceAdminReadOrderDocument",
    "method": "GET",
    "area": "admin",
    "path": "/v1/admin/store/orders/{orderId}/documents/{documentId}",
    "bodyLimit": 0,
    "bodySchema": null,
    "responseSchemas": {
      "200": null
    },
    "query": [],
    "headers": [
      "x-admin-session"
    ],
    "statuses": [
      200,
      400,
      401,
      403,
      404,
      409,
      410,
      422,
      429,
      503
    ]
  },
  {
    "id": "commerceAdminRetryWithdrawalNotification",
    "method": "POST",
    "area": "admin",
    "path": "/v1/admin/store/withdrawals/{id}/notifications/{notificationId}/retry",
    "bodyLimit": 65536,
    "bodySchema": "CommerceAdminRetryNotificationInput",
    "responseSchemas": {
      "200": "CommerceWithdrawalAdmin"
    },
    "query": [],
    "headers": [
      "if-match",
      "idempotency-key",
      "x-admin-session",
      "x-csrf-token"
    ],
    "statuses": [
      200,
      400,
      401,
      403,
      404,
      409,
      410,
      422,
      429,
      503
    ]
  }
] as const;
