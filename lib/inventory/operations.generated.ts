// Generated from Inventory033 by backend/scripts/generate-contracts.ts. Do not edit.
export const inventoryOperations=[
  {
    "id": "inventoryCreateWork",
    "method": "POST",
    "path": "/v1/admin/inventory/artworks",
    "bodySchema": "InventoryHttpCreateWork",
    "command": "inventory_create_work",
    "referenceKind": null,
    "ifMatch": null,
    "role": "contributor",
    "scopes": [
      "site.inventory.write"
    ],
    "headers": [
      "Idempotency-Key",
      "X-CSRF-Token"
    ],
    "query": [],
    "statuses": [
      200,
      400,
      401,
      403,
      404,
      409,
      412,
      413,
      422,
      428,
      503
    ]
  },
  {
    "id": "inventoryGetArtworks",
    "method": "GET",
    "path": "/v1/admin/inventory/artworks",
    "bodySchema": null,
    "command": null,
    "referenceKind": null,
    "ifMatch": null,
    "role": "contributor",
    "scopes": [
      "site.inventory.read"
    ],
    "headers": [],
    "query": [
      "limit",
      "cursor",
      "q",
      "artistId",
      "originId",
      "ownerId",
      "locationId",
      "categoryId",
      "typeId",
      "publication",
      "commercialState",
      "custodyState",
      "includeArchived"
    ],
    "statuses": [
      200,
      400,
      401,
      403,
      404,
      409,
      412,
      413,
      422,
      428,
      503
    ]
  },
  {
    "id": "inventoryReplaceDraft",
    "method": "PUT",
    "path": "/v1/admin/inventory/artworks/{artworkId}/draft",
    "bodySchema": "InventoryHttpReplaceDraft",
    "command": "inventory_replace_draft",
    "referenceKind": null,
    "ifMatch": "expectedRevision",
    "role": "contributor",
    "scopes": [
      "site.inventory.write"
    ],
    "headers": [
      "Idempotency-Key",
      "If-Match",
      "X-CSRF-Token"
    ],
    "query": [],
    "statuses": [
      200,
      400,
      401,
      403,
      404,
      409,
      412,
      413,
      422,
      428,
      503
    ]
  },
  {
    "id": "inventoryPublishWork",
    "method": "POST",
    "path": "/v1/admin/inventory/artworks/{artworkId}/publish",
    "bodySchema": "InventoryHttpPublishWork",
    "command": "inventory_publish_work",
    "referenceKind": null,
    "ifMatch": "expectedRevision",
    "role": "contributor",
    "scopes": [
      "site.inventory.publish"
    ],
    "headers": [
      "Idempotency-Key",
      "If-Match",
      "X-CSRF-Token"
    ],
    "query": [],
    "statuses": [
      200,
      400,
      401,
      403,
      404,
      409,
      412,
      413,
      422,
      428,
      503
    ]
  },
  {
    "id": "inventoryUnpublishWork",
    "method": "POST",
    "path": "/v1/admin/inventory/artworks/{artworkId}/unpublish",
    "bodySchema": "InventoryHttpUnpublishWork",
    "command": "inventory_unpublish_work",
    "referenceKind": null,
    "ifMatch": "expectedRevision",
    "role": "contributor",
    "scopes": [
      "site.inventory.publish"
    ],
    "headers": [
      "Idempotency-Key",
      "If-Match",
      "X-CSRF-Token"
    ],
    "query": [],
    "statuses": [
      200,
      400,
      401,
      403,
      404,
      409,
      412,
      413,
      422,
      428,
      503
    ]
  },
  {
    "id": "inventoryArchiveWork",
    "method": "POST",
    "path": "/v1/admin/inventory/artworks/{artworkId}/archive",
    "bodySchema": "InventoryHttpArchiveWork",
    "command": "inventory_archive_work",
    "referenceKind": null,
    "ifMatch": "expectedRevision",
    "role": "administrator",
    "scopes": [
      "site.inventory.write",
      "site.inventory.manage"
    ],
    "headers": [
      "Idempotency-Key",
      "If-Match",
      "X-CSRF-Token"
    ],
    "query": [],
    "statuses": [
      200,
      400,
      401,
      403,
      404,
      409,
      412,
      413,
      422,
      428,
      503
    ]
  },
  {
    "id": "inventoryDeleteWork",
    "method": "DELETE",
    "path": "/v1/admin/inventory/artworks/{artworkId}",
    "bodySchema": "InventoryHttpDeleteWork",
    "command": "inventory_delete_work",
    "referenceKind": null,
    "ifMatch": "expectedRevision",
    "role": "administrator",
    "scopes": [
      "site.inventory.write",
      "site.inventory.manage"
    ],
    "headers": [
      "Idempotency-Key",
      "If-Match",
      "X-CSRF-Token"
    ],
    "query": [],
    "statuses": [
      200,
      400,
      401,
      403,
      404,
      409,
      412,
      413,
      422,
      428,
      503
    ]
  },
  {
    "id": "inventoryGetArtworksArtworkD",
    "method": "GET",
    "path": "/v1/admin/inventory/artworks/{artworkId}",
    "bodySchema": null,
    "command": null,
    "referenceKind": null,
    "ifMatch": null,
    "role": "contributor",
    "scopes": [
      "site.inventory.read"
    ],
    "headers": [],
    "query": [],
    "statuses": [
      200,
      400,
      401,
      403,
      404,
      409,
      412,
      413,
      422,
      428,
      503
    ]
  },
  {
    "id": "inventoryCreateUnit",
    "method": "POST",
    "path": "/v1/admin/inventory/artworks/{artworkId}/units",
    "bodySchema": "InventoryHttpCreateUnit",
    "command": "inventory_create_unit",
    "referenceKind": null,
    "ifMatch": "expectedRevision",
    "role": "administrator",
    "scopes": [
      "site.inventory.write",
      "site.inventory.manage"
    ],
    "headers": [
      "Idempotency-Key",
      "If-Match",
      "X-CSRF-Token"
    ],
    "query": [],
    "statuses": [
      200,
      400,
      401,
      403,
      404,
      409,
      412,
      413,
      422,
      428,
      503
    ]
  },
  {
    "id": "inventoryGetArtworksArtworkDUnits",
    "method": "GET",
    "path": "/v1/admin/inventory/artworks/{artworkId}/units",
    "bodySchema": null,
    "command": null,
    "referenceKind": null,
    "ifMatch": null,
    "role": "contributor",
    "scopes": [
      "site.inventory.read"
    ],
    "headers": [],
    "query": [
      "limit",
      "cursor",
      "q",
      "includeArchived"
    ],
    "statuses": [
      200,
      400,
      401,
      403,
      404,
      409,
      412,
      413,
      422,
      428,
      503
    ]
  },
  {
    "id": "inventoryUpdateUnitLogistics",
    "method": "PATCH",
    "path": "/v1/admin/inventory/units/{unitId}/logistics",
    "bodySchema": "InventoryHttpUpdateUnitLogistics",
    "command": "inventory_update_unit_logistics",
    "referenceKind": null,
    "ifMatch": "expectedRevision",
    "role": "contributor",
    "scopes": [
      "site.inventory.write"
    ],
    "headers": [
      "Idempotency-Key",
      "If-Match",
      "X-CSRF-Token"
    ],
    "query": [],
    "statuses": [
      200,
      400,
      401,
      403,
      404,
      409,
      412,
      413,
      422,
      428,
      503
    ]
  },
  {
    "id": "inventoryArchiveUnit",
    "method": "POST",
    "path": "/v1/admin/inventory/units/{unitId}/archive",
    "bodySchema": "InventoryHttpArchiveUnit",
    "command": "inventory_archive_unit",
    "referenceKind": null,
    "ifMatch": "expectedRevision",
    "role": "administrator",
    "scopes": [
      "site.inventory.write",
      "site.inventory.manage"
    ],
    "headers": [
      "Idempotency-Key",
      "If-Match",
      "X-CSRF-Token"
    ],
    "query": [],
    "statuses": [
      200,
      400,
      401,
      403,
      404,
      409,
      412,
      413,
      422,
      428,
      503
    ]
  },
  {
    "id": "inventoryReserveUnit",
    "method": "POST",
    "path": "/v1/admin/inventory/units/{unitId}/reservations",
    "bodySchema": "InventoryHttpReserveUnit",
    "command": "inventory_reserve_unit",
    "referenceKind": null,
    "ifMatch": "expectedRevision",
    "role": "contributor",
    "scopes": [
      "site.inventory.write"
    ],
    "headers": [
      "Idempotency-Key",
      "If-Match",
      "X-CSRF-Token"
    ],
    "query": [],
    "statuses": [
      200,
      400,
      401,
      403,
      404,
      409,
      412,
      413,
      422,
      428,
      503
    ]
  },
  {
    "id": "inventoryReleaseReservation",
    "method": "POST",
    "path": "/v1/admin/inventory/operations/{operationId}/release",
    "bodySchema": "InventoryHttpReleaseReservation",
    "command": "inventory_release_reservation",
    "referenceKind": null,
    "ifMatch": "expectedRevision",
    "role": "contributor",
    "scopes": [
      "site.inventory.write"
    ],
    "headers": [
      "Idempotency-Key",
      "If-Match",
      "X-CSRF-Token"
    ],
    "query": [],
    "statuses": [
      200,
      400,
      401,
      403,
      404,
      409,
      412,
      413,
      422,
      428,
      503
    ]
  },
  {
    "id": "inventoryMoveUnit",
    "method": "POST",
    "path": "/v1/admin/inventory/units/{unitId}/movements",
    "bodySchema": "InventoryHttpMoveUnit",
    "command": "inventory_move_unit",
    "referenceKind": null,
    "ifMatch": "expectedRevision",
    "role": "contributor",
    "scopes": [
      "site.inventory.write"
    ],
    "headers": [
      "Idempotency-Key",
      "If-Match",
      "X-CSRF-Token"
    ],
    "query": [],
    "statuses": [
      200,
      400,
      401,
      403,
      404,
      409,
      412,
      413,
      422,
      428,
      503
    ]
  },
  {
    "id": "inventoryLoanUnit",
    "method": "POST",
    "path": "/v1/admin/inventory/units/{unitId}/loans",
    "bodySchema": "InventoryHttpLoanUnit",
    "command": "inventory_loan_unit",
    "referenceKind": null,
    "ifMatch": "expectedRevision",
    "role": "contributor",
    "scopes": [
      "site.inventory.write"
    ],
    "headers": [
      "Idempotency-Key",
      "If-Match",
      "X-CSRF-Token"
    ],
    "query": [],
    "statuses": [
      200,
      400,
      401,
      403,
      404,
      409,
      412,
      413,
      422,
      428,
      503
    ]
  },
  {
    "id": "inventoryReturnLoan",
    "method": "POST",
    "path": "/v1/admin/inventory/operations/{operationId}/return",
    "bodySchema": "InventoryHttpReturnLoan",
    "command": "inventory_return_loan",
    "referenceKind": null,
    "ifMatch": "expectedRevision",
    "role": "contributor",
    "scopes": [
      "site.inventory.write"
    ],
    "headers": [
      "Idempotency-Key",
      "If-Match",
      "X-CSRF-Token"
    ],
    "query": [],
    "statuses": [
      200,
      400,
      401,
      403,
      404,
      409,
      412,
      413,
      422,
      428,
      503
    ]
  },
  {
    "id": "inventoryCorrectLogisticsOperation",
    "method": "POST",
    "path": "/v1/admin/inventory/operations/{operationId}/correct",
    "bodySchema": "InventoryHttpCorrectLogisticsOperation",
    "command": "inventory_correct_logistics_operation",
    "referenceKind": null,
    "ifMatch": "expectedRevision",
    "role": "contributor",
    "scopes": [
      "site.inventory.write"
    ],
    "headers": [
      "Idempotency-Key",
      "If-Match",
      "X-CSRF-Token"
    ],
    "query": [],
    "statuses": [
      200,
      400,
      401,
      403,
      404,
      409,
      412,
      413,
      422,
      428,
      503
    ]
  },
  {
    "id": "inventoryRecordAcquisition",
    "method": "POST",
    "path": "/v1/admin/inventory/acquisitions",
    "bodySchema": "InventoryHttpRecordAcquisition",
    "command": "inventory_record_acquisition",
    "referenceKind": null,
    "ifMatch": "expectedRevision",
    "role": "administrator",
    "scopes": [
      "site.inventory.write",
      "site.inventory.finance"
    ],
    "headers": [
      "Idempotency-Key",
      "If-Match",
      "X-CSRF-Token"
    ],
    "query": [],
    "statuses": [
      200,
      400,
      401,
      403,
      404,
      409,
      412,
      413,
      422,
      428,
      503
    ]
  },
  {
    "id": "inventoryRecordExpense",
    "method": "POST",
    "path": "/v1/admin/inventory/expenses",
    "bodySchema": "InventoryHttpRecordExpense",
    "command": "inventory_record_expense",
    "referenceKind": null,
    "ifMatch": null,
    "role": "administrator",
    "scopes": [
      "site.inventory.write",
      "site.inventory.finance"
    ],
    "headers": [
      "Idempotency-Key",
      "X-CSRF-Token"
    ],
    "query": [],
    "statuses": [
      200,
      400,
      401,
      403,
      404,
      409,
      412,
      413,
      422,
      428,
      503
    ]
  },
  {
    "id": "inventoryListExpenses",
    "method": "GET",
    "path": "/v1/admin/inventory/expenses",
    "bodySchema": null,
    "command": null,
    "referenceKind": null,
    "ifMatch": null,
    "role": "administrator",
    "scopes": [
      "site.inventory.read",
      "site.inventory.finance"
    ],
    "headers": [],
    "query": [
      "limit",
      "cursor",
      "q",
      "unitId",
      "fromDate",
      "toDate"
    ],
    "statuses": [
      200,
      400,
      401,
      403,
      404,
      409,
      412,
      413,
      422,
      428,
      503
    ]
  },
  {
    "id": "inventoryListDeposits",
    "method": "GET",
    "path": "/v1/admin/inventory/deposits",
    "bodySchema": null,
    "command": null,
    "referenceKind": null,
    "ifMatch": null,
    "role": "administrator",
    "scopes": [
      "site.inventory.read",
      "site.inventory.finance"
    ],
    "headers": [],
    "query": [
      "limit",
      "cursor",
      "q",
      "unitId",
      "partyId"
    ],
    "statuses": [
      200,
      400,
      401,
      403,
      404,
      409,
      412,
      413,
      422,
      428,
      503
    ]
  },
  {
    "id": "inventoryRecordDeposit",
    "method": "POST",
    "path": "/v1/admin/inventory/deposits",
    "bodySchema": "InventoryHttpRecordDeposit",
    "command": "inventory_record_deposit",
    "referenceKind": null,
    "ifMatch": null,
    "role": "administrator",
    "scopes": [
      "site.inventory.write",
      "site.inventory.finance"
    ],
    "headers": [
      "Idempotency-Key",
      "X-CSRF-Token"
    ],
    "query": [],
    "statuses": [
      200,
      400,
      401,
      403,
      404,
      409,
      412,
      413,
      422,
      428,
      503
    ]
  },
  {
    "id": "inventoryListSales",
    "method": "GET",
    "path": "/v1/admin/inventory/sales",
    "bodySchema": null,
    "command": null,
    "referenceKind": null,
    "ifMatch": null,
    "role": "administrator",
    "scopes": [
      "site.inventory.read",
      "site.inventory.finance"
    ],
    "headers": [],
    "query": [
      "limit",
      "cursor",
      "q",
      "unitId",
      "partyId"
    ],
    "statuses": [
      200,
      400,
      401,
      403,
      404,
      409,
      412,
      413,
      422,
      428,
      503
    ]
  },
  {
    "id": "inventoryRecordSale",
    "method": "POST",
    "path": "/v1/admin/inventory/sales",
    "bodySchema": "InventoryHttpRecordSale",
    "command": "inventory_record_sale",
    "referenceKind": null,
    "ifMatch": null,
    "role": "administrator",
    "scopes": [
      "site.inventory.write",
      "site.inventory.finance"
    ],
    "headers": [
      "Idempotency-Key",
      "X-CSRF-Token"
    ],
    "query": [],
    "statuses": [
      200,
      400,
      401,
      403,
      404,
      409,
      412,
      413,
      422,
      428,
      503
    ]
  },
  {
    "id": "inventoryPrepareDocument",
    "method": "POST",
    "path": "/v1/admin/inventory/documents",
    "bodySchema": "InventoryHttpPrepareDocument",
    "command": "inventory_prepare_document",
    "referenceKind": null,
    "ifMatch": null,
    "role": "administrator",
    "scopes": [
      "site.inventory.write",
      "site.inventory.finance"
    ],
    "headers": [
      "Idempotency-Key",
      "X-CSRF-Token"
    ],
    "query": [],
    "statuses": [
      200,
      400,
      401,
      403,
      404,
      409,
      412,
      413,
      422,
      428,
      503
    ]
  },
  {
    "id": "inventoryGetDocuments",
    "method": "GET",
    "path": "/v1/admin/inventory/documents",
    "bodySchema": null,
    "command": null,
    "referenceKind": null,
    "ifMatch": null,
    "role": "administrator",
    "scopes": [
      "site.inventory.read",
      "site.inventory.finance"
    ],
    "headers": [],
    "query": [
      "limit",
      "cursor",
      "q"
    ],
    "statuses": [
      200,
      400,
      401,
      403,
      404,
      409,
      412,
      413,
      422,
      428,
      503
    ]
  },
  {
    "id": "inventoryReplaceDocumentDraft",
    "method": "PUT",
    "path": "/v1/admin/inventory/documents/{documentId}/draft",
    "bodySchema": "InventoryHttpReplaceDocumentDraft",
    "command": "inventory_replace_document_draft",
    "referenceKind": null,
    "ifMatch": "expectedRevision",
    "role": "administrator",
    "scopes": [
      "site.inventory.write",
      "site.inventory.finance"
    ],
    "headers": [
      "Idempotency-Key",
      "If-Match",
      "X-CSRF-Token"
    ],
    "query": [],
    "statuses": [
      200,
      400,
      401,
      403,
      404,
      409,
      412,
      413,
      422,
      428,
      503
    ]
  },
  {
    "id": "inventoryIssueDocument",
    "method": "POST",
    "path": "/v1/admin/inventory/documents/{documentId}/issue",
    "bodySchema": "InventoryHttpIssueDocument",
    "command": "inventory_issue_document",
    "referenceKind": null,
    "ifMatch": "expectedRevision",
    "role": "administrator",
    "scopes": [
      "site.inventory.write",
      "site.inventory.finance"
    ],
    "headers": [
      "Idempotency-Key",
      "If-Match",
      "X-CSRF-Token"
    ],
    "query": [],
    "statuses": [
      200,
      400,
      401,
      403,
      404,
      409,
      412,
      413,
      422,
      428,
      503
    ]
  },
  {
    "id": "inventoryRecordPayment",
    "method": "POST",
    "path": "/v1/admin/inventory/payments",
    "bodySchema": "InventoryHttpRecordPayment",
    "command": "inventory_record_payment",
    "referenceKind": null,
    "ifMatch": "expectedRevision",
    "role": "administrator",
    "scopes": [
      "site.inventory.write",
      "site.inventory.finance"
    ],
    "headers": [
      "Idempotency-Key",
      "If-Match",
      "X-CSRF-Token"
    ],
    "query": [],
    "statuses": [
      200,
      400,
      401,
      403,
      404,
      409,
      412,
      413,
      422,
      428,
      503
    ]
  },
  {
    "id": "inventoryRecordRefund",
    "method": "POST",
    "path": "/v1/admin/inventory/refunds",
    "bodySchema": "InventoryHttpRecordRefund",
    "command": "inventory_record_refund",
    "referenceKind": null,
    "ifMatch": "expectedRevision",
    "role": "administrator",
    "scopes": [
      "site.inventory.write",
      "site.inventory.finance"
    ],
    "headers": [
      "Idempotency-Key",
      "If-Match",
      "X-CSRF-Token"
    ],
    "query": [],
    "statuses": [
      200,
      400,
      401,
      403,
      404,
      409,
      412,
      413,
      422,
      428,
      503
    ]
  },
  {
    "id": "inventoryRevokePublicMedia",
    "method": "POST",
    "path": "/v1/admin/inventory/media/{mediaId}/revoke-public",
    "bodySchema": "InventoryHttpRevokePublicMedia",
    "command": "inventory_revoke_public_media",
    "referenceKind": null,
    "ifMatch": "expectedRevision",
    "role": "contributor",
    "scopes": [
      "site.inventory.publish"
    ],
    "headers": [
      "Idempotency-Key",
      "If-Match",
      "X-CSRF-Token"
    ],
    "query": [],
    "statuses": [
      200,
      400,
      401,
      403,
      404,
      409,
      412,
      413,
      422,
      428,
      503
    ]
  },
  {
    "id": "inventoryReadMedia",
    "method": "GET",
    "path": "/v1/admin/inventory/media/{mediaId}",
    "bodySchema": null,
    "command": null,
    "referenceKind": null,
    "ifMatch": null,
    "role": "contributor",
    "scopes": [
      "site.inventory.read"
    ],
    "headers": [],
    "query": [
      "projection"
    ],
    "statuses": [
      200,
      400,
      401,
      403,
      404,
      409,
      412,
      413,
      422,
      428,
      503
    ]
  },
  {
    "id": "inventoryDeleteMedia",
    "method": "DELETE",
    "path": "/v1/admin/inventory/media/{mediaId}",
    "bodySchema": "InventoryHttpDeleteMedia",
    "command": "inventory_delete_media",
    "referenceKind": null,
    "ifMatch": "expectedRevision",
    "role": "administrator",
    "scopes": [
      "site.inventory.write",
      "site.inventory.manage"
    ],
    "headers": [
      "Idempotency-Key",
      "If-Match",
      "X-CSRF-Token"
    ],
    "query": [],
    "statuses": [
      200,
      400,
      401,
      403,
      404,
      409,
      412,
      413,
      422,
      428,
      503
    ]
  },
  {
    "id": "inventoryConfirmImport",
    "method": "POST",
    "path": "/v1/admin/inventory/imports/{batchId}/confirm",
    "bodySchema": "InventoryHttpConfirmImport",
    "command": "inventory_confirm_import",
    "referenceKind": null,
    "ifMatch": "expectedRevision",
    "role": "administrator",
    "scopes": [
      "site.inventory.write",
      "site.inventory.manage",
      "site.inventory.finance"
    ],
    "headers": [
      "Idempotency-Key",
      "If-Match",
      "X-CSRF-Token"
    ],
    "query": [],
    "statuses": [
      200,
      400,
      401,
      403,
      404,
      409,
      412,
      413,
      422,
      428,
      503
    ]
  },
  {
    "id": "inventoryConfirmMigration",
    "method": "POST",
    "path": "/v1/admin/inventory/migrations/{batchId}/confirm",
    "bodySchema": "InventoryHttpConfirmMigration",
    "command": "inventory_confirm_migration",
    "referenceKind": null,
    "ifMatch": "expectedRevision",
    "role": "administrator",
    "scopes": [
      "site.inventory.write",
      "site.inventory.manage",
      "site.inventory.finance"
    ],
    "headers": [
      "Idempotency-Key",
      "If-Match",
      "X-CSRF-Token"
    ],
    "query": [],
    "statuses": [
      200,
      400,
      401,
      403,
      404,
      409,
      412,
      413,
      422,
      428,
      503
    ]
  },
  {
    "id": "inventoryReplaceExpense",
    "method": "PUT",
    "path": "/v1/admin/inventory/expenses/{expenseId}",
    "bodySchema": "InventoryHttpReplaceExpense",
    "command": "inventory_replace_expense",
    "referenceKind": null,
    "ifMatch": "expectedRevision",
    "role": "administrator",
    "scopes": [
      "site.inventory.write",
      "site.inventory.finance"
    ],
    "headers": [
      "Idempotency-Key",
      "If-Match",
      "X-CSRF-Token"
    ],
    "query": [],
    "statuses": [
      200,
      400,
      401,
      403,
      404,
      409,
      412,
      413,
      422,
      428,
      503
    ]
  },
  {
    "id": "inventoryReadExpense",
    "method": "GET",
    "path": "/v1/admin/inventory/expenses/{expenseId}",
    "bodySchema": null,
    "command": null,
    "referenceKind": null,
    "ifMatch": null,
    "role": "administrator",
    "scopes": [
      "site.inventory.read",
      "site.inventory.finance"
    ],
    "headers": [],
    "query": [],
    "statuses": [
      200,
      400,
      401,
      403,
      404,
      409,
      412,
      413,
      422,
      428,
      503
    ]
  },
  {
    "id": "inventoryReallocateExpense",
    "method": "POST",
    "path": "/v1/admin/inventory/expenses/{expenseId}/reallocate",
    "bodySchema": "InventoryHttpReallocateExpense",
    "command": "inventory_reallocate_expense",
    "referenceKind": null,
    "ifMatch": "expectedRevision",
    "role": "administrator",
    "scopes": [
      "site.inventory.write",
      "site.inventory.finance"
    ],
    "headers": [
      "Idempotency-Key",
      "If-Match",
      "X-CSRF-Token"
    ],
    "query": [],
    "statuses": [
      200,
      400,
      401,
      403,
      404,
      409,
      412,
      413,
      422,
      428,
      503
    ]
  },
  {
    "id": "inventoryCorrectLedgerEntry",
    "method": "POST",
    "path": "/v1/admin/inventory/finance/entries/{entryId}/correct",
    "bodySchema": "InventoryHttpCorrectLedgerEntry",
    "command": "inventory_correct_ledger_entry",
    "referenceKind": null,
    "ifMatch": "expectedRevision",
    "role": "administrator",
    "scopes": [
      "site.inventory.write",
      "site.inventory.finance"
    ],
    "headers": [
      "Idempotency-Key",
      "If-Match",
      "X-CSRF-Token"
    ],
    "query": [],
    "statuses": [
      200,
      400,
      401,
      403,
      404,
      409,
      412,
      413,
      422,
      428,
      503
    ]
  },
  {
    "id": "inventoryCancelFinancialOperation",
    "method": "POST",
    "path": "/v1/admin/inventory/finance/operations/{operationId}/cancel",
    "bodySchema": "InventoryHttpCancelFinancialOperation",
    "command": "inventory_cancel_financial_operation",
    "referenceKind": null,
    "ifMatch": "expectedRevision",
    "role": "administrator",
    "scopes": [
      "site.inventory.write",
      "site.inventory.finance"
    ],
    "headers": [
      "Idempotency-Key",
      "If-Match",
      "X-CSRF-Token"
    ],
    "query": [],
    "statuses": [
      200,
      400,
      401,
      403,
      404,
      409,
      412,
      413,
      422,
      428,
      503
    ]
  },
  {
    "id": "inventoryUpdateDepositTerms",
    "method": "PUT",
    "path": "/v1/admin/inventory/deposits/{operationId}/financial-terms",
    "bodySchema": "InventoryHttpUpdateDepositTerms",
    "command": "inventory_update_deposit_terms",
    "referenceKind": null,
    "ifMatch": "expectedRevision",
    "role": "administrator",
    "scopes": [
      "site.inventory.write",
      "site.inventory.finance"
    ],
    "headers": [
      "Idempotency-Key",
      "If-Match",
      "X-CSRF-Token"
    ],
    "query": [],
    "statuses": [
      200,
      400,
      401,
      403,
      404,
      409,
      412,
      413,
      422,
      428,
      503
    ]
  },
  {
    "id": "inventoryCreateSellerProfile",
    "method": "POST",
    "path": "/v1/admin/inventory/seller-fiscal-profile",
    "bodySchema": "InventoryHttpCreateSellerProfile",
    "command": "inventory_create_seller_profile",
    "referenceKind": null,
    "ifMatch": null,
    "role": "administrator",
    "scopes": [
      "site.inventory.write",
      "site.inventory.finance",
      "site.inventory.manage"
    ],
    "headers": [
      "Idempotency-Key",
      "X-CSRF-Token"
    ],
    "query": [],
    "statuses": [
      200,
      400,
      401,
      403,
      404,
      409,
      412,
      413,
      422,
      428,
      503
    ]
  },
  {
    "id": "inventoryReplaceSellerProfile",
    "method": "PUT",
    "path": "/v1/admin/inventory/seller-fiscal-profile",
    "bodySchema": "InventoryHttpReplaceSellerProfile",
    "command": "inventory_replace_seller_profile",
    "referenceKind": null,
    "ifMatch": "expectedRevision",
    "role": "administrator",
    "scopes": [
      "site.inventory.write",
      "site.inventory.finance",
      "site.inventory.manage"
    ],
    "headers": [
      "Idempotency-Key",
      "If-Match",
      "X-CSRF-Token"
    ],
    "query": [],
    "statuses": [
      200,
      400,
      401,
      403,
      404,
      409,
      412,
      413,
      422,
      428,
      503
    ]
  },
  {
    "id": "inventoryGetSellerFiscalProfile",
    "method": "GET",
    "path": "/v1/admin/inventory/seller-fiscal-profile",
    "bodySchema": null,
    "command": null,
    "referenceKind": null,
    "ifMatch": null,
    "role": "administrator",
    "scopes": [
      "site.inventory.read",
      "site.inventory.finance"
    ],
    "headers": [],
    "query": [],
    "statuses": [
      200,
      400,
      401,
      403,
      404,
      409,
      412,
      413,
      422,
      428,
      503
    ]
  },
  {
    "id": "inventoryQualifySellerProfile",
    "method": "POST",
    "path": "/v1/admin/inventory/seller-fiscal-profile/qualify",
    "bodySchema": "InventoryHttpQualifySellerProfile",
    "command": "inventory_qualify_seller_profile",
    "referenceKind": null,
    "ifMatch": "expectedRevision",
    "role": "administrator",
    "scopes": [
      "site.inventory.write",
      "site.inventory.finance",
      "site.inventory.manage"
    ],
    "headers": [
      "Idempotency-Key",
      "If-Match",
      "X-CSRF-Token"
    ],
    "query": [],
    "statuses": [
      200,
      400,
      401,
      403,
      404,
      409,
      412,
      413,
      422,
      428,
      503
    ]
  },
  {
    "id": "inventoryCreateTaxTreatment",
    "method": "POST",
    "path": "/v1/admin/inventory/tax-treatments",
    "bodySchema": "InventoryHttpCreateTaxTreatment",
    "command": "inventory_create_tax_treatment",
    "referenceKind": null,
    "ifMatch": null,
    "role": "administrator",
    "scopes": [
      "site.inventory.write",
      "site.inventory.finance",
      "site.inventory.manage"
    ],
    "headers": [
      "Idempotency-Key",
      "X-CSRF-Token"
    ],
    "query": [],
    "statuses": [
      200,
      400,
      401,
      403,
      404,
      409,
      412,
      413,
      422,
      428,
      503
    ]
  },
  {
    "id": "inventoryGetTaxTreatments",
    "method": "GET",
    "path": "/v1/admin/inventory/tax-treatments",
    "bodySchema": null,
    "command": null,
    "referenceKind": null,
    "ifMatch": null,
    "role": "administrator",
    "scopes": [
      "site.inventory.read",
      "site.inventory.finance"
    ],
    "headers": [],
    "query": [
      "limit",
      "cursor",
      "q"
    ],
    "statuses": [
      200,
      400,
      401,
      403,
      404,
      409,
      412,
      413,
      422,
      428,
      503
    ]
  },
  {
    "id": "inventoryReplaceTaxTreatment",
    "method": "PUT",
    "path": "/v1/admin/inventory/tax-treatments/{treatmentId}",
    "bodySchema": "InventoryHttpReplaceTaxTreatment",
    "command": "inventory_replace_tax_treatment",
    "referenceKind": null,
    "ifMatch": "expectedRevision",
    "role": "administrator",
    "scopes": [
      "site.inventory.write",
      "site.inventory.finance",
      "site.inventory.manage"
    ],
    "headers": [
      "Idempotency-Key",
      "If-Match",
      "X-CSRF-Token"
    ],
    "query": [],
    "statuses": [
      200,
      400,
      401,
      403,
      404,
      409,
      412,
      413,
      422,
      428,
      503
    ]
  },
  {
    "id": "inventoryReadTaxTreatment",
    "method": "GET",
    "path": "/v1/admin/inventory/tax-treatments/{treatmentId}",
    "bodySchema": null,
    "command": null,
    "referenceKind": null,
    "ifMatch": null,
    "role": "administrator",
    "scopes": [
      "site.inventory.read",
      "site.inventory.finance"
    ],
    "headers": [],
    "query": [],
    "statuses": [
      200,
      400,
      401,
      403,
      404,
      409,
      412,
      413,
      422,
      428,
      503
    ]
  },
  {
    "id": "inventoryQualifyTaxTreatment",
    "method": "POST",
    "path": "/v1/admin/inventory/tax-treatments/{treatmentId}/qualify",
    "bodySchema": "InventoryHttpQualifyTaxTreatment",
    "command": "inventory_qualify_tax_treatment",
    "referenceKind": null,
    "ifMatch": "expectedRevision",
    "role": "administrator",
    "scopes": [
      "site.inventory.write",
      "site.inventory.finance",
      "site.inventory.manage"
    ],
    "headers": [
      "Idempotency-Key",
      "If-Match",
      "X-CSRF-Token"
    ],
    "query": [],
    "statuses": [
      200,
      400,
      401,
      403,
      404,
      409,
      412,
      413,
      422,
      428,
      503
    ]
  },
  {
    "id": "inventoryCreateDocumentSeries",
    "method": "POST",
    "path": "/v1/admin/inventory/document-series",
    "bodySchema": "InventoryHttpCreateDocumentSeries",
    "command": "inventory_create_document_series",
    "referenceKind": null,
    "ifMatch": null,
    "role": "administrator",
    "scopes": [
      "site.inventory.write",
      "site.inventory.finance",
      "site.inventory.manage"
    ],
    "headers": [
      "Idempotency-Key",
      "X-CSRF-Token"
    ],
    "query": [],
    "statuses": [
      200,
      400,
      401,
      403,
      404,
      409,
      412,
      413,
      422,
      428,
      503
    ]
  },
  {
    "id": "inventoryGetDocumentSeries",
    "method": "GET",
    "path": "/v1/admin/inventory/document-series",
    "bodySchema": null,
    "command": null,
    "referenceKind": null,
    "ifMatch": null,
    "role": "administrator",
    "scopes": [
      "site.inventory.read",
      "site.inventory.finance"
    ],
    "headers": [],
    "query": [
      "limit",
      "cursor",
      "q"
    ],
    "statuses": [
      200,
      400,
      401,
      403,
      404,
      409,
      412,
      413,
      422,
      428,
      503
    ]
  },
  {
    "id": "inventoryDeactivateDocumentSeries",
    "method": "POST",
    "path": "/v1/admin/inventory/document-series/{seriesId}/deactivate",
    "bodySchema": "InventoryHttpDeactivateDocumentSeries",
    "command": "inventory_deactivate_document_series",
    "referenceKind": null,
    "ifMatch": "expectedRevision",
    "role": "administrator",
    "scopes": [
      "site.inventory.write",
      "site.inventory.finance",
      "site.inventory.manage"
    ],
    "headers": [
      "Idempotency-Key",
      "If-Match",
      "X-CSRF-Token"
    ],
    "query": [],
    "statuses": [
      200,
      400,
      401,
      403,
      404,
      409,
      412,
      413,
      422,
      428,
      503
    ]
  },
  {
    "id": "inventorySetAssignment",
    "method": "POST",
    "path": "/v1/admin/inventory/access",
    "bodySchema": "InventoryHttpSetAssignment",
    "command": "inventory_set_assignment",
    "referenceKind": null,
    "ifMatch": null,
    "role": "administrator",
    "scopes": [
      "site.inventory.write",
      "site.inventory.manage"
    ],
    "headers": [
      "Idempotency-Key",
      "X-CSRF-Token"
    ],
    "query": [],
    "statuses": [
      200,
      400,
      401,
      403,
      404,
      409,
      412,
      413,
      422,
      428,
      503
    ]
  },
  {
    "id": "inventoryGetAccess",
    "method": "GET",
    "path": "/v1/admin/inventory/access",
    "bodySchema": null,
    "command": null,
    "referenceKind": null,
    "ifMatch": null,
    "role": "administrator",
    "scopes": [
      "site.inventory.read",
      "site.inventory.manage"
    ],
    "headers": [],
    "query": [
      "limit",
      "cursor",
      "q"
    ],
    "statuses": [
      200,
      400,
      401,
      403,
      404,
      409,
      412,
      413,
      422,
      428,
      503
    ]
  },
  {
    "id": "inventoryRevokeAssignment",
    "method": "POST",
    "path": "/v1/admin/inventory/access/{assignmentId}/revoke",
    "bodySchema": "InventoryHttpRevokeAssignment",
    "command": "inventory_revoke_assignment",
    "referenceKind": null,
    "ifMatch": "expectedRevision",
    "role": "administrator",
    "scopes": [
      "site.inventory.write",
      "site.inventory.manage"
    ],
    "headers": [
      "Idempotency-Key",
      "If-Match",
      "X-CSRF-Token"
    ],
    "query": [],
    "statuses": [
      200,
      400,
      401,
      403,
      404,
      409,
      412,
      413,
      422,
      428,
      503
    ]
  },
  {
    "id": "inventoryReceiveSalesReturn",
    "method": "POST",
    "path": "/v1/admin/inventory/sales/{saleId}/returns",
    "bodySchema": "InventoryHttpReceiveSalesReturn",
    "command": "inventory_receive_sales_return",
    "referenceKind": null,
    "ifMatch": "expectedRevision",
    "role": "administrator",
    "scopes": [
      "site.inventory.write",
      "site.inventory.finance"
    ],
    "headers": [
      "Idempotency-Key",
      "If-Match",
      "X-CSRF-Token"
    ],
    "query": [],
    "statuses": [
      200,
      400,
      401,
      403,
      404,
      409,
      412,
      413,
      422,
      428,
      503
    ]
  },
  {
    "id": "inventoryRestockReturnedUnit",
    "method": "POST",
    "path": "/v1/admin/inventory/sales/{saleId}/restock",
    "bodySchema": "InventoryHttpRestockReturnedUnit",
    "command": "inventory_restock_returned_unit",
    "referenceKind": null,
    "ifMatch": "expectedRevision",
    "role": "administrator",
    "scopes": [
      "site.inventory.write",
      "site.inventory.finance"
    ],
    "headers": [
      "Idempotency-Key",
      "If-Match",
      "X-CSRF-Token"
    ],
    "query": [],
    "statuses": [
      200,
      400,
      401,
      403,
      404,
      409,
      412,
      413,
      422,
      428,
      503
    ]
  },
  {
    "id": "inventoryRecordOwnerSettlement",
    "method": "POST",
    "path": "/v1/admin/inventory/deposits/{depositOperationId}/settlements",
    "bodySchema": "InventoryHttpRecordOwnerSettlement",
    "command": "inventory_record_owner_settlement",
    "referenceKind": null,
    "ifMatch": "expectedRevision",
    "role": "administrator",
    "scopes": [
      "site.inventory.write",
      "site.inventory.finance"
    ],
    "headers": [
      "Idempotency-Key",
      "If-Match",
      "X-CSRF-Token"
    ],
    "query": [],
    "statuses": [
      200,
      400,
      401,
      403,
      404,
      409,
      412,
      413,
      422,
      428,
      503
    ]
  },
  {
    "id": "inventoryListArtists",
    "method": "GET",
    "path": "/v1/admin/inventory/artists",
    "bodySchema": null,
    "command": null,
    "referenceKind": null,
    "ifMatch": null,
    "role": "contributor",
    "scopes": [
      "site.inventory.read"
    ],
    "headers": [],
    "query": [
      "limit",
      "cursor",
      "q"
    ],
    "statuses": [
      200,
      400,
      401,
      403,
      404,
      409,
      412,
      413,
      422,
      428,
      503
    ]
  },
  {
    "id": "inventoryCreateArtist",
    "method": "POST",
    "path": "/v1/admin/inventory/artists",
    "bodySchema": "InventoryCreateArtistInput",
    "command": "inventory_save_reference",
    "referenceKind": "artist",
    "ifMatch": null,
    "role": "contributor",
    "scopes": [],
    "headers": [
      "Idempotency-Key",
      "X-CSRF-Token"
    ],
    "query": [],
    "statuses": [
      200,
      400,
      401,
      403,
      404,
      409,
      412,
      413,
      422,
      428,
      503
    ]
  },
  {
    "id": "inventoryReadArtist",
    "method": "GET",
    "path": "/v1/admin/inventory/artists/{id}",
    "bodySchema": null,
    "command": null,
    "referenceKind": null,
    "ifMatch": null,
    "role": "contributor",
    "scopes": [
      "site.inventory.read"
    ],
    "headers": [],
    "query": [],
    "statuses": [
      200,
      400,
      401,
      403,
      404,
      409,
      412,
      413,
      422,
      428,
      503
    ]
  },
  {
    "id": "inventoryUpdateArtist",
    "method": "PUT",
    "path": "/v1/admin/inventory/artists/{id}",
    "bodySchema": "InventoryUpdateArtistInput",
    "command": "inventory_save_reference",
    "referenceKind": "artist",
    "ifMatch": "reference.expectedRevision",
    "role": "contributor",
    "scopes": [],
    "headers": [
      "Idempotency-Key",
      "If-Match",
      "X-CSRF-Token"
    ],
    "query": [],
    "statuses": [
      200,
      400,
      401,
      403,
      404,
      409,
      412,
      413,
      422,
      428,
      503
    ]
  },
  {
    "id": "inventoryListOrigins",
    "method": "GET",
    "path": "/v1/admin/inventory/origins",
    "bodySchema": null,
    "command": null,
    "referenceKind": null,
    "ifMatch": null,
    "role": "contributor",
    "scopes": [
      "site.inventory.read"
    ],
    "headers": [],
    "query": [
      "limit",
      "cursor",
      "q"
    ],
    "statuses": [
      200,
      400,
      401,
      403,
      404,
      409,
      412,
      413,
      422,
      428,
      503
    ]
  },
  {
    "id": "inventoryCreateOrigin",
    "method": "POST",
    "path": "/v1/admin/inventory/origins",
    "bodySchema": "InventoryCreateOriginInput",
    "command": "inventory_save_reference",
    "referenceKind": "origin",
    "ifMatch": null,
    "role": "contributor",
    "scopes": [],
    "headers": [
      "Idempotency-Key",
      "X-CSRF-Token"
    ],
    "query": [],
    "statuses": [
      200,
      400,
      401,
      403,
      404,
      409,
      412,
      413,
      422,
      428,
      503
    ]
  },
  {
    "id": "inventoryReadOrigin",
    "method": "GET",
    "path": "/v1/admin/inventory/origins/{id}",
    "bodySchema": null,
    "command": null,
    "referenceKind": null,
    "ifMatch": null,
    "role": "contributor",
    "scopes": [
      "site.inventory.read"
    ],
    "headers": [],
    "query": [],
    "statuses": [
      200,
      400,
      401,
      403,
      404,
      409,
      412,
      413,
      422,
      428,
      503
    ]
  },
  {
    "id": "inventoryUpdateOrigin",
    "method": "PUT",
    "path": "/v1/admin/inventory/origins/{id}",
    "bodySchema": "InventoryUpdateOriginInput",
    "command": "inventory_save_reference",
    "referenceKind": "origin",
    "ifMatch": "reference.expectedRevision",
    "role": "contributor",
    "scopes": [],
    "headers": [
      "Idempotency-Key",
      "If-Match",
      "X-CSRF-Token"
    ],
    "query": [],
    "statuses": [
      200,
      400,
      401,
      403,
      404,
      409,
      412,
      413,
      422,
      428,
      503
    ]
  },
  {
    "id": "inventoryListParties",
    "method": "GET",
    "path": "/v1/admin/inventory/parties",
    "bodySchema": null,
    "command": null,
    "referenceKind": null,
    "ifMatch": null,
    "role": "contributor",
    "scopes": [
      "site.inventory.read"
    ],
    "headers": [],
    "query": [
      "limit",
      "cursor",
      "q",
      "ids"
    ],
    "statuses": [
      200,
      400,
      401,
      403,
      404,
      409,
      412,
      413,
      422,
      428,
      503
    ]
  },
  {
    "id": "inventoryCreateParty",
    "method": "POST",
    "path": "/v1/admin/inventory/parties",
    "bodySchema": "InventoryCreatePartyInput",
    "command": "inventory_save_reference",
    "referenceKind": "party",
    "ifMatch": null,
    "role": "contributor",
    "scopes": [],
    "headers": [
      "Idempotency-Key",
      "X-CSRF-Token"
    ],
    "query": [],
    "statuses": [
      200,
      400,
      401,
      403,
      404,
      409,
      412,
      413,
      422,
      428,
      503
    ]
  },
  {
    "id": "inventoryReadParty",
    "method": "GET",
    "path": "/v1/admin/inventory/parties/{id}",
    "bodySchema": null,
    "command": null,
    "referenceKind": null,
    "ifMatch": null,
    "role": "contributor",
    "scopes": [
      "site.inventory.read"
    ],
    "headers": [],
    "query": [],
    "statuses": [
      200,
      400,
      401,
      403,
      404,
      409,
      412,
      413,
      422,
      428,
      503
    ]
  },
  {
    "id": "inventoryUpdateParty",
    "method": "PUT",
    "path": "/v1/admin/inventory/parties/{id}",
    "bodySchema": "InventoryUpdatePartyInput",
    "command": "inventory_save_reference",
    "referenceKind": "party",
    "ifMatch": "reference.expectedRevision",
    "role": "contributor",
    "scopes": [],
    "headers": [
      "Idempotency-Key",
      "If-Match",
      "X-CSRF-Token"
    ],
    "query": [],
    "statuses": [
      200,
      400,
      401,
      403,
      404,
      409,
      412,
      413,
      422,
      428,
      503
    ]
  },
  {
    "id": "inventoryListLocations",
    "method": "GET",
    "path": "/v1/admin/inventory/locations",
    "bodySchema": null,
    "command": null,
    "referenceKind": null,
    "ifMatch": null,
    "role": "contributor",
    "scopes": [
      "site.inventory.read"
    ],
    "headers": [],
    "query": [
      "limit",
      "cursor",
      "q",
      "ids"
    ],
    "statuses": [
      200,
      400,
      401,
      403,
      404,
      409,
      412,
      413,
      422,
      428,
      503
    ]
  },
  {
    "id": "inventoryCreateLocation",
    "method": "POST",
    "path": "/v1/admin/inventory/locations",
    "bodySchema": "InventoryCreateLocationInput",
    "command": "inventory_save_reference",
    "referenceKind": "location",
    "ifMatch": null,
    "role": "contributor",
    "scopes": [],
    "headers": [
      "Idempotency-Key",
      "X-CSRF-Token"
    ],
    "query": [],
    "statuses": [
      200,
      400,
      401,
      403,
      404,
      409,
      412,
      413,
      422,
      428,
      503
    ]
  },
  {
    "id": "inventoryReadLocation",
    "method": "GET",
    "path": "/v1/admin/inventory/locations/{id}",
    "bodySchema": null,
    "command": null,
    "referenceKind": null,
    "ifMatch": null,
    "role": "contributor",
    "scopes": [
      "site.inventory.read"
    ],
    "headers": [],
    "query": [],
    "statuses": [
      200,
      400,
      401,
      403,
      404,
      409,
      412,
      413,
      422,
      428,
      503
    ]
  },
  {
    "id": "inventoryUpdateLocation",
    "method": "PUT",
    "path": "/v1/admin/inventory/locations/{id}",
    "bodySchema": "InventoryUpdateLocationInput",
    "command": "inventory_save_reference",
    "referenceKind": "location",
    "ifMatch": "reference.expectedRevision",
    "role": "contributor",
    "scopes": [],
    "headers": [
      "Idempotency-Key",
      "If-Match",
      "X-CSRF-Token"
    ],
    "query": [],
    "statuses": [
      200,
      400,
      401,
      403,
      404,
      409,
      412,
      413,
      422,
      428,
      503
    ]
  },
  {
    "id": "inventoryListTypes",
    "method": "GET",
    "path": "/v1/admin/inventory/types",
    "bodySchema": null,
    "command": null,
    "referenceKind": null,
    "ifMatch": null,
    "role": "contributor",
    "scopes": [
      "site.inventory.read"
    ],
    "headers": [],
    "query": [
      "limit",
      "cursor",
      "q"
    ],
    "statuses": [
      200,
      400,
      401,
      403,
      404,
      409,
      412,
      413,
      422,
      428,
      503
    ]
  },
  {
    "id": "inventoryCreateType",
    "method": "POST",
    "path": "/v1/admin/inventory/types",
    "bodySchema": "InventoryCreateTypeInput",
    "command": "inventory_save_reference",
    "referenceKind": "type",
    "ifMatch": null,
    "role": "contributor",
    "scopes": [],
    "headers": [
      "Idempotency-Key",
      "X-CSRF-Token"
    ],
    "query": [],
    "statuses": [
      200,
      400,
      401,
      403,
      404,
      409,
      412,
      413,
      422,
      428,
      503
    ]
  },
  {
    "id": "inventoryReadType",
    "method": "GET",
    "path": "/v1/admin/inventory/types/{id}",
    "bodySchema": null,
    "command": null,
    "referenceKind": null,
    "ifMatch": null,
    "role": "contributor",
    "scopes": [
      "site.inventory.read"
    ],
    "headers": [],
    "query": [],
    "statuses": [
      200,
      400,
      401,
      403,
      404,
      409,
      412,
      413,
      422,
      428,
      503
    ]
  },
  {
    "id": "inventoryUpdateType",
    "method": "PUT",
    "path": "/v1/admin/inventory/types/{id}",
    "bodySchema": "InventoryUpdateTypeInput",
    "command": "inventory_save_reference",
    "referenceKind": "type",
    "ifMatch": "reference.expectedRevision",
    "role": "contributor",
    "scopes": [],
    "headers": [
      "Idempotency-Key",
      "If-Match",
      "X-CSRF-Token"
    ],
    "query": [],
    "statuses": [
      200,
      400,
      401,
      403,
      404,
      409,
      412,
      413,
      422,
      428,
      503
    ]
  },
  {
    "id": "inventoryListCategories",
    "method": "GET",
    "path": "/v1/admin/inventory/categories",
    "bodySchema": null,
    "command": null,
    "referenceKind": null,
    "ifMatch": null,
    "role": "contributor",
    "scopes": [
      "site.inventory.read"
    ],
    "headers": [],
    "query": [
      "limit",
      "cursor",
      "q"
    ],
    "statuses": [
      200,
      400,
      401,
      403,
      404,
      409,
      412,
      413,
      422,
      428,
      503
    ]
  },
  {
    "id": "inventoryCreateCategory",
    "method": "POST",
    "path": "/v1/admin/inventory/categories",
    "bodySchema": "InventoryCreateCategoryInput",
    "command": "inventory_save_reference",
    "referenceKind": "category",
    "ifMatch": null,
    "role": "contributor",
    "scopes": [],
    "headers": [
      "Idempotency-Key",
      "X-CSRF-Token"
    ],
    "query": [],
    "statuses": [
      200,
      400,
      401,
      403,
      404,
      409,
      412,
      413,
      422,
      428,
      503
    ]
  },
  {
    "id": "inventoryReadCategory",
    "method": "GET",
    "path": "/v1/admin/inventory/categories/{id}",
    "bodySchema": null,
    "command": null,
    "referenceKind": null,
    "ifMatch": null,
    "role": "contributor",
    "scopes": [
      "site.inventory.read"
    ],
    "headers": [],
    "query": [],
    "statuses": [
      200,
      400,
      401,
      403,
      404,
      409,
      412,
      413,
      422,
      428,
      503
    ]
  },
  {
    "id": "inventoryUpdateCategory",
    "method": "PUT",
    "path": "/v1/admin/inventory/categories/{id}",
    "bodySchema": "InventoryUpdateCategoryInput",
    "command": "inventory_save_reference",
    "referenceKind": "category",
    "ifMatch": "reference.expectedRevision",
    "role": "contributor",
    "scopes": [],
    "headers": [
      "Idempotency-Key",
      "If-Match",
      "X-CSRF-Token"
    ],
    "query": [],
    "statuses": [
      200,
      400,
      401,
      403,
      404,
      409,
      412,
      413,
      422,
      428,
      503
    ]
  },
  {
    "id": "inventoryGetCapabilities",
    "method": "GET",
    "path": "/v1/admin/inventory/capabilities",
    "bodySchema": null,
    "command": null,
    "referenceKind": null,
    "ifMatch": null,
    "role": "contributor",
    "scopes": [],
    "headers": [],
    "query": [],
    "statuses": [
      200,
      400,
      401,
      403,
      404,
      409,
      412,
      413,
      422,
      428,
      503
    ]
  },
  {
    "id": "inventoryGetUnitsUnitD",
    "method": "GET",
    "path": "/v1/admin/inventory/units/{unitId}",
    "bodySchema": null,
    "command": null,
    "referenceKind": null,
    "ifMatch": null,
    "role": "contributor",
    "scopes": [
      "site.inventory.read"
    ],
    "headers": [],
    "query": [],
    "statuses": [
      200,
      400,
      401,
      403,
      404,
      409,
      412,
      413,
      422,
      428,
      503
    ]
  },
  {
    "id": "inventoryGetOperations",
    "method": "GET",
    "path": "/v1/admin/inventory/operations",
    "bodySchema": null,
    "command": null,
    "referenceKind": null,
    "ifMatch": null,
    "role": "contributor",
    "scopes": [
      "site.inventory.read"
    ],
    "headers": [],
    "query": [
      "limit",
      "cursor",
      "q",
      "unitId",
      "partyId",
      "locationId",
      "fromDate",
      "toDate",
      "status"
    ],
    "statuses": [
      200,
      400,
      401,
      403,
      404,
      409,
      412,
      413,
      422,
      428,
      503
    ]
  },
  {
    "id": "inventoryGetMedia",
    "method": "GET",
    "path": "/v1/admin/inventory/media",
    "bodySchema": null,
    "command": null,
    "referenceKind": null,
    "ifMatch": null,
    "role": "contributor",
    "scopes": [],
    "headers": [],
    "query": [
      "limit",
      "cursor",
      "q"
    ],
    "statuses": [
      200,
      400,
      401,
      403,
      404,
      409,
      412,
      413,
      422,
      428,
      503
    ]
  },
  {
    "id": "inventoryGetUnitsUnitDFinance",
    "method": "GET",
    "path": "/v1/admin/inventory/units/{unitId}/finance",
    "bodySchema": null,
    "command": null,
    "referenceKind": null,
    "ifMatch": null,
    "role": "administrator",
    "scopes": [
      "site.inventory.read",
      "site.inventory.finance"
    ],
    "headers": [],
    "query": [],
    "statuses": [
      200,
      400,
      401,
      403,
      404,
      409,
      412,
      413,
      422,
      428,
      503
    ]
  },
  {
    "id": "inventoryGetSalesSaleD",
    "method": "GET",
    "path": "/v1/admin/inventory/sales/{saleId}",
    "bodySchema": null,
    "command": null,
    "referenceKind": null,
    "ifMatch": null,
    "role": "administrator",
    "scopes": [
      "site.inventory.read",
      "site.inventory.finance"
    ],
    "headers": [],
    "query": [],
    "statuses": [
      200,
      400,
      401,
      403,
      404,
      409,
      412,
      413,
      422,
      428,
      503
    ]
  },
  {
    "id": "inventoryGetFinanceLedger",
    "method": "GET",
    "path": "/v1/admin/inventory/finance/ledger",
    "bodySchema": null,
    "command": null,
    "referenceKind": null,
    "ifMatch": null,
    "role": "administrator",
    "scopes": [
      "site.inventory.read",
      "site.inventory.finance"
    ],
    "headers": [],
    "query": [
      "limit",
      "cursor",
      "q",
      "documentId",
      "depositOperationId"
    ],
    "statuses": [
      200,
      400,
      401,
      403,
      404,
      409,
      412,
      413,
      422,
      428,
      503
    ]
  },
  {
    "id": "inventoryGetDocumentsDocumentD",
    "method": "GET",
    "path": "/v1/admin/inventory/documents/{documentId}",
    "bodySchema": null,
    "command": null,
    "referenceKind": null,
    "ifMatch": null,
    "role": "administrator",
    "scopes": [
      "site.inventory.read",
      "site.inventory.finance"
    ],
    "headers": [],
    "query": [],
    "statuses": [
      200,
      400,
      401,
      403,
      404,
      409,
      412,
      413,
      422,
      428,
      503
    ]
  },
  {
    "id": "inventoryGetDocumentsDocumentDTransmissions",
    "method": "GET",
    "path": "/v1/admin/inventory/documents/{documentId}/transmissions",
    "bodySchema": null,
    "command": null,
    "referenceKind": null,
    "ifMatch": null,
    "role": "administrator",
    "scopes": [
      "site.inventory.read",
      "site.inventory.finance"
    ],
    "headers": [],
    "query": [
      "limit",
      "cursor",
      "q"
    ],
    "statuses": [
      200,
      400,
      401,
      403,
      404,
      409,
      412,
      413,
      422,
      428,
      503
    ]
  },
  {
    "id": "inventoryGetImportsBatchD",
    "method": "GET",
    "path": "/v1/admin/inventory/imports/{batchId}",
    "bodySchema": null,
    "command": null,
    "referenceKind": null,
    "ifMatch": null,
    "role": "administrator",
    "scopes": [
      "site.inventory.read",
      "site.inventory.manage"
    ],
    "headers": [],
    "query": [
      "after",
      "limit"
    ],
    "statuses": [
      200,
      400,
      401,
      403,
      404,
      409,
      412,
      413,
      422,
      428,
      503
    ]
  },
  {
    "id": "inventoryPreviewArtwork",
    "method": "POST",
    "path": "/v1/admin/inventory/artworks/{artworkId}/preview",
    "bodySchema": "InventoryReadInventoryInput",
    "command": null,
    "referenceKind": null,
    "ifMatch": null,
    "role": "contributor",
    "scopes": [],
    "headers": [
      "Idempotency-Key",
      "X-CSRF-Token"
    ],
    "query": [],
    "statuses": [
      200,
      400,
      401,
      403,
      404,
      409,
      412,
      413,
      422,
      428,
      503
    ]
  },
  {
    "id": "inventoryCreateMediaUpload",
    "method": "POST",
    "path": "/v1/admin/inventory/media/upload-attempts",
    "bodySchema": "InventoryInventoryUploadAttemptInput",
    "command": null,
    "referenceKind": null,
    "ifMatch": null,
    "role": "contributor",
    "scopes": [],
    "headers": [
      "Idempotency-Key",
      "X-CSRF-Token"
    ],
    "query": [],
    "statuses": [
      200,
      400,
      401,
      403,
      404,
      409,
      412,
      413,
      422,
      428,
      503
    ]
  },
  {
    "id": "inventoryFinalizeMediaUpload",
    "method": "POST",
    "path": "/v1/admin/inventory/media/upload-attempts/{attemptId}/finalize",
    "bodySchema": "InventoryFinalizeInput",
    "command": null,
    "referenceKind": null,
    "ifMatch": null,
    "role": "contributor",
    "scopes": [],
    "headers": [
      "Idempotency-Key",
      "If-Match",
      "X-CSRF-Token"
    ],
    "query": [],
    "statuses": [
      202,
      400,
      401,
      403,
      404,
      409,
      412,
      413,
      422,
      428,
      503
    ]
  },
  {
    "id": "inventoryCreateAttachmentsUpload",
    "method": "POST",
    "path": "/v1/admin/inventory/attachments/upload-attempts",
    "bodySchema": "InventoryInventoryAttachmentUploadInput",
    "command": null,
    "referenceKind": null,
    "ifMatch": null,
    "role": "contributor",
    "scopes": [],
    "headers": [
      "Idempotency-Key",
      "X-CSRF-Token"
    ],
    "query": [],
    "statuses": [
      200,
      400,
      401,
      403,
      404,
      409,
      412,
      413,
      422,
      428,
      503
    ]
  },
  {
    "id": "inventoryFinalizeAttachmentsUpload",
    "method": "POST",
    "path": "/v1/admin/inventory/attachments/upload-attempts/{attemptId}/finalize",
    "bodySchema": "InventoryFinalizeInput",
    "command": null,
    "referenceKind": null,
    "ifMatch": null,
    "role": "contributor",
    "scopes": [],
    "headers": [
      "Idempotency-Key",
      "If-Match",
      "X-CSRF-Token"
    ],
    "query": [],
    "statuses": [
      202,
      400,
      401,
      403,
      404,
      409,
      412,
      413,
      422,
      428,
      503
    ]
  },
  {
    "id": "inventoryGetMediaMediaDOriginal",
    "method": "GET",
    "path": "/v1/admin/inventory/media/{mediaId}/original",
    "bodySchema": null,
    "command": null,
    "referenceKind": null,
    "ifMatch": null,
    "role": "contributor",
    "scopes": [],
    "headers": [],
    "query": [],
    "statuses": [
      200,
      400,
      401,
      403,
      404,
      409,
      412,
      413,
      422,
      428,
      503
    ]
  },
  {
    "id": "inventoryHeadMediaMediaDOriginal",
    "method": "HEAD",
    "path": "/v1/admin/inventory/media/{mediaId}/original",
    "bodySchema": null,
    "command": null,
    "referenceKind": null,
    "ifMatch": null,
    "role": "contributor",
    "scopes": [],
    "headers": [],
    "query": [],
    "statuses": [
      200,
      400,
      401,
      403,
      404,
      409,
      412,
      413,
      422,
      428,
      503
    ]
  },
  {
    "id": "inventoryGetMediaMediaDPreview",
    "method": "GET",
    "path": "/v1/admin/inventory/media/{mediaId}/preview",
    "bodySchema": null,
    "command": null,
    "referenceKind": null,
    "ifMatch": null,
    "role": "contributor",
    "scopes": [],
    "headers": [],
    "query": [],
    "statuses": [
      200,
      400,
      401,
      403,
      404,
      409,
      412,
      413,
      422,
      428,
      503
    ]
  },
  {
    "id": "inventoryHeadMediaMediaDPreview",
    "method": "HEAD",
    "path": "/v1/admin/inventory/media/{mediaId}/preview",
    "bodySchema": null,
    "command": null,
    "referenceKind": null,
    "ifMatch": null,
    "role": "contributor",
    "scopes": [],
    "headers": [],
    "query": [],
    "statuses": [
      200,
      400,
      401,
      403,
      404,
      409,
      412,
      413,
      422,
      428,
      503
    ]
  },
  {
    "id": "inventoryGetDocumentsDocumentDPdf",
    "method": "GET",
    "path": "/v1/admin/inventory/documents/{documentId}/pdf",
    "bodySchema": null,
    "command": null,
    "referenceKind": null,
    "ifMatch": null,
    "role": "contributor",
    "scopes": [],
    "headers": [],
    "query": [],
    "statuses": [
      200,
      400,
      401,
      403,
      404,
      409,
      412,
      413,
      422,
      428,
      503
    ]
  },
  {
    "id": "inventoryHeadDocumentsDocumentDPdf",
    "method": "HEAD",
    "path": "/v1/admin/inventory/documents/{documentId}/pdf",
    "bodySchema": null,
    "command": null,
    "referenceKind": null,
    "ifMatch": null,
    "role": "contributor",
    "scopes": [],
    "headers": [],
    "query": [],
    "statuses": [
      200,
      400,
      401,
      403,
      404,
      409,
      412,
      413,
      422,
      428,
      503
    ]
  },
  {
    "id": "inventoryPrepareImport",
    "method": "POST",
    "path": "/v1/admin/inventory/imports",
    "bodySchema": "InventoryPrepareInventoryImportInput",
    "command": null,
    "referenceKind": null,
    "ifMatch": null,
    "role": "contributor",
    "scopes": [],
    "headers": [
      "Idempotency-Key",
      "X-CSRF-Token"
    ],
    "query": [],
    "statuses": [
      202,
      400,
      401,
      403,
      404,
      409,
      412,
      413,
      422,
      428,
      503
    ]
  },
  {
    "id": "inventoryValidateImport",
    "method": "POST",
    "path": "/v1/admin/inventory/imports/{batchId}/validate",
    "bodySchema": "InventoryValidateBatchInput",
    "command": null,
    "referenceKind": null,
    "ifMatch": null,
    "role": "contributor",
    "scopes": [],
    "headers": [
      "Idempotency-Key",
      "If-Match",
      "X-CSRF-Token"
    ],
    "query": [],
    "statuses": [
      202,
      400,
      401,
      403,
      404,
      409,
      412,
      413,
      422,
      428,
      503
    ]
  },
  {
    "id": "inventoryPrepareMigration",
    "method": "POST",
    "path": "/v1/admin/inventory/migrations/artlogic",
    "bodySchema": "InventoryPrepareMigrationInput",
    "command": null,
    "referenceKind": null,
    "ifMatch": null,
    "role": "contributor",
    "scopes": [],
    "headers": [
      "Idempotency-Key",
      "X-CSRF-Token"
    ],
    "query": [],
    "statuses": [
      202,
      400,
      401,
      403,
      404,
      409,
      412,
      413,
      422,
      428,
      503
    ]
  },
  {
    "id": "inventoryValidateMigration",
    "method": "POST",
    "path": "/v1/admin/inventory/migrations/{batchId}/validate",
    "bodySchema": "InventoryValidateBatchInput",
    "command": null,
    "referenceKind": null,
    "ifMatch": null,
    "role": "contributor",
    "scopes": [],
    "headers": [
      "Idempotency-Key",
      "If-Match",
      "X-CSRF-Token"
    ],
    "query": [],
    "statuses": [
      202,
      400,
      401,
      403,
      404,
      409,
      412,
      413,
      422,
      428,
      503
    ]
  },
  {
    "id": "inventoryReplaceAssignment",
    "method": "PUT",
    "path": "/v1/admin/inventory/access/{assignmentId}",
    "bodySchema": "InventoryHttpReplaceAssignment",
    "command": "inventory_set_assignment",
    "referenceKind": null,
    "ifMatch": "expectedAssignmentRevision",
    "role": "administrator",
    "scopes": [
      "site.inventory.write",
      "site.inventory.manage"
    ],
    "headers": [
      "Idempotency-Key",
      "If-Match",
      "X-CSRF-Token"
    ],
    "query": [],
    "statuses": [
      200,
      400,
      401,
      403,
      404,
      409,
      412,
      413,
      422,
      428,
      503
    ]
  },
  {
    "id": "inventoryGetPrivateNotes",
    "method": "GET",
    "path": "/v1/admin/inventory/artworks/{artworkId}/private-notes",
    "bodySchema": null,
    "command": null,
    "referenceKind": null,
    "ifMatch": null,
    "role": "contributor",
    "scopes": [],
    "headers": [],
    "query": [],
    "statuses": [
      200,
      400,
      401,
      403,
      404,
      409,
      412,
      413,
      422,
      428,
      503
    ]
  },
  {
    "id": "inventoryReadPreview",
    "method": "GET",
    "path": "/v1/admin/inventory/previews/{previewId}",
    "bodySchema": null,
    "command": null,
    "referenceKind": null,
    "ifMatch": null,
    "role": "contributor",
    "scopes": [
      "site.inventory.read"
    ],
    "headers": [],
    "query": [],
    "statuses": [
      200,
      400,
      401,
      403,
      404,
      409,
      412,
      413,
      422,
      428,
      503
    ]
  },
  {
    "id": "inventoryReadLogisticsOperation",
    "method": "GET",
    "path": "/v1/admin/inventory/operations/{operationId}",
    "bodySchema": null,
    "command": null,
    "referenceKind": null,
    "ifMatch": null,
    "role": "contributor",
    "scopes": [
      "site.inventory.read"
    ],
    "headers": [],
    "query": [],
    "statuses": [
      200,
      400,
      401,
      403,
      404,
      409,
      412,
      413,
      422,
      428,
      503
    ]
  },
  {
    "id": "inventoryListUnits",
    "method": "GET",
    "path": "/v1/admin/inventory/units",
    "bodySchema": null,
    "command": null,
    "referenceKind": null,
    "ifMatch": null,
    "role": "contributor",
    "scopes": [
      "site.inventory.read"
    ],
    "headers": [],
    "query": [
      "limit",
      "cursor",
      "q",
      "artworkId",
      "ownerId",
      "locationId",
      "commercialState",
      "custodyState",
      "includeArchived",
      "ids"
    ],
    "statuses": [
      200,
      400,
      401,
      403,
      404,
      409,
      412,
      413,
      422,
      428,
      503
    ]
  },
  {
    "id": "inventoryReadDeposit",
    "method": "GET",
    "path": "/v1/admin/inventory/deposits/{operationId}",
    "bodySchema": null,
    "command": null,
    "referenceKind": null,
    "ifMatch": null,
    "role": "administrator",
    "scopes": [
      "site.inventory.read",
      "site.inventory.finance"
    ],
    "headers": [],
    "query": [],
    "statuses": [
      200,
      400,
      401,
      403,
      404,
      409,
      412,
      413,
      422,
      428,
      503
    ]
  },
  {
    "id": "inventoryReadDocumentSeries",
    "method": "GET",
    "path": "/v1/admin/inventory/document-series/{seriesId}",
    "bodySchema": null,
    "command": null,
    "referenceKind": null,
    "ifMatch": null,
    "role": "administrator",
    "scopes": [
      "site.inventory.read",
      "site.inventory.finance"
    ],
    "headers": [],
    "query": [],
    "statuses": [
      200,
      400,
      401,
      403,
      404,
      409,
      412,
      413,
      422,
      428,
      503
    ]
  },
  {
    "id": "inventoryCreateImportDraft",
    "method": "POST",
    "path": "/v1/admin/inventory/imports/drafts",
    "bodySchema": "InventoryImportDraftInput",
    "command": null,
    "referenceKind": null,
    "ifMatch": null,
    "role": "contributor",
    "scopes": [],
    "headers": [
      "Idempotency-Key",
      "X-CSRF-Token"
    ],
    "query": [],
    "statuses": [
      202,
      400,
      401,
      403,
      404,
      409,
      412,
      413,
      422,
      428,
      503
    ]
  },
  {
    "id": "inventoryCreateImportTransfer",
    "method": "POST",
    "path": "/v1/admin/inventory/imports/{batchId}/uploads",
    "bodySchema": "InventoryImportTransferInput",
    "command": null,
    "referenceKind": null,
    "ifMatch": null,
    "role": "contributor",
    "scopes": [],
    "headers": [
      "Idempotency-Key",
      "X-CSRF-Token"
    ],
    "query": [],
    "statuses": [
      202,
      400,
      401,
      403,
      404,
      409,
      412,
      413,
      422,
      428,
      503
    ]
  },
  {
    "id": "inventoryCancelImport",
    "method": "POST",
    "path": "/v1/admin/inventory/imports/{batchId}/cancel",
    "bodySchema": "InventoryHttpCancelImport",
    "command": null,
    "referenceKind": null,
    "ifMatch": null,
    "role": "contributor",
    "scopes": [],
    "headers": [
      "Idempotency-Key",
      "If-Match",
      "X-CSRF-Token"
    ],
    "query": [],
    "statuses": [
      202,
      400,
      401,
      403,
      404,
      409,
      412,
      413,
      422,
      428,
      503
    ]
  },
  {
    "id": "inventoryResumeImport",
    "method": "POST",
    "path": "/v1/admin/inventory/imports/{batchId}/resume",
    "bodySchema": "InventoryHttpResumeImport",
    "command": null,
    "referenceKind": null,
    "ifMatch": null,
    "role": "contributor",
    "scopes": [],
    "headers": [
      "Idempotency-Key",
      "If-Match",
      "X-CSRF-Token"
    ],
    "query": [],
    "statuses": [
      202,
      400,
      401,
      403,
      404,
      409,
      412,
      413,
      422,
      428,
      503
    ]
  },
  {
    "id": "inventoryUploadImportChunk",
    "method": "PUT",
    "path": "/v1/admin/inventory/imports/{batchId}/uploads/{uploadId}/chunks/{index}",
    "bodySchema": null,
    "command": null,
    "referenceKind": null,
    "ifMatch": null,
    "role": "contributor",
    "scopes": [],
    "headers": [
      "Authorization"
    ],
    "query": [],
    "statuses": [
      202,
      400,
      401,
      403,
      404,
      409,
      412,
      413,
      422,
      428,
      503
    ]
  },
  {
    "id": "inventorySealImportTransfer",
    "method": "POST",
    "path": "/v1/admin/inventory/imports/{batchId}/uploads/{uploadId}/seal",
    "bodySchema": "undefined",
    "command": null,
    "referenceKind": null,
    "ifMatch": null,
    "role": "contributor",
    "scopes": [],
    "headers": [
      "Authorization"
    ],
    "query": [],
    "statuses": [
      202,
      400,
      401,
      403,
      404,
      409,
      412,
      413,
      422,
      428,
      503
    ]
  },
  {
    "id": "inventoryGetImportTemplate",
    "method": "GET",
    "path": "/v1/admin/inventory/imports/template",
    "bodySchema": null,
    "command": null,
    "referenceKind": null,
    "ifMatch": null,
    "role": "administrator",
    "scopes": [
      "site.inventory.read",
      "site.inventory.manage"
    ],
    "headers": [],
    "query": [
      "example",
      "delimiter"
    ],
    "statuses": [
      200,
      400,
      401,
      403,
      404,
      409,
      412,
      413,
      422,
      428,
      503
    ]
  }
] as const;
