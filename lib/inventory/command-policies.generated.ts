// Generated from Inventory033 by backend/scripts/generate-contracts.ts. Do not edit.
export const inventoryCommandPolicies={
  "inventory_create_work": {
    "role": "contributor",
    "financial": false,
    "scopes": [
      "site.inventory.write"
    ],
    "effect": "commit_inventory_change"
  },
  "inventory_replace_draft": {
    "role": "contributor",
    "financial": false,
    "scopes": [
      "site.inventory.write"
    ],
    "effect": "commit_inventory_change"
  },
  "inventory_publish_work": {
    "role": "contributor",
    "financial": false,
    "scopes": [
      "site.inventory.publish"
    ],
    "effect": "apply_public_change"
  },
  "inventory_unpublish_work": {
    "role": "contributor",
    "financial": false,
    "scopes": [
      "site.inventory.publish"
    ],
    "effect": "apply_public_change"
  },
  "inventory_archive_work": {
    "role": "administrator",
    "financial": false,
    "scopes": [
      "site.inventory.write",
      "site.inventory.manage"
    ],
    "effect": "commit_inventory_change"
  },
  "inventory_delete_work": {
    "role": "administrator",
    "financial": false,
    "scopes": [
      "site.inventory.write",
      "site.inventory.manage"
    ],
    "effect": "commit_inventory_change"
  },
  "inventory_create_unit": {
    "role": "administrator",
    "financial": false,
    "scopes": [
      "site.inventory.write",
      "site.inventory.manage"
    ],
    "effect": "commit_inventory_change"
  },
  "inventory_update_unit_logistics": {
    "role": "contributor",
    "financial": false,
    "scopes": [
      "site.inventory.write"
    ],
    "effect": "commit_inventory_change"
  },
  "inventory_archive_unit": {
    "role": "administrator",
    "financial": false,
    "scopes": [
      "site.inventory.write",
      "site.inventory.manage"
    ],
    "effect": "commit_inventory_change"
  },
  "inventory_reserve_unit": {
    "role": "contributor",
    "financial": false,
    "scopes": [
      "site.inventory.write"
    ],
    "effect": "commit_inventory_change"
  },
  "inventory_release_reservation": {
    "role": "contributor",
    "financial": false,
    "scopes": [
      "site.inventory.write"
    ],
    "effect": "commit_inventory_change"
  },
  "inventory_move_unit": {
    "role": "contributor",
    "financial": false,
    "scopes": [
      "site.inventory.write"
    ],
    "effect": "commit_inventory_change"
  },
  "inventory_loan_unit": {
    "role": "contributor",
    "financial": false,
    "scopes": [
      "site.inventory.write"
    ],
    "effect": "commit_inventory_change"
  },
  "inventory_return_loan": {
    "role": "contributor",
    "financial": false,
    "scopes": [
      "site.inventory.write"
    ],
    "effect": "commit_inventory_change"
  },
  "inventory_correct_logistics_operation": {
    "role": "contributor",
    "financial": false,
    "scopes": [
      "site.inventory.write"
    ],
    "effect": "commit_inventory_change"
  },
  "inventory_record_acquisition": {
    "role": "administrator",
    "financial": true,
    "scopes": [
      "site.inventory.write",
      "site.inventory.finance"
    ],
    "effect": "commit_inventory_change"
  },
  "inventory_record_expense": {
    "role": "administrator",
    "financial": true,
    "scopes": [
      "site.inventory.write",
      "site.inventory.finance"
    ],
    "effect": "commit_inventory_change"
  },
  "inventory_record_deposit": {
    "role": "administrator",
    "financial": true,
    "scopes": [
      "site.inventory.write",
      "site.inventory.finance"
    ],
    "effect": "commit_inventory_change"
  },
  "inventory_record_sale": {
    "role": "administrator",
    "financial": true,
    "scopes": [
      "site.inventory.write",
      "site.inventory.finance"
    ],
    "effect": "commit_inventory_change"
  },
  "inventory_prepare_document": {
    "role": "administrator",
    "financial": true,
    "scopes": [
      "site.inventory.write",
      "site.inventory.finance"
    ],
    "effect": "commit_inventory_change"
  },
  "inventory_replace_document_draft": {
    "role": "administrator",
    "financial": true,
    "scopes": [
      "site.inventory.write",
      "site.inventory.finance"
    ],
    "effect": "commit_inventory_change"
  },
  "inventory_issue_document": {
    "role": "administrator",
    "financial": true,
    "scopes": [
      "site.inventory.write",
      "site.inventory.finance"
    ],
    "effect": "commit_inventory_change"
  },
  "inventory_record_payment": {
    "role": "administrator",
    "financial": true,
    "scopes": [
      "site.inventory.write",
      "site.inventory.finance"
    ],
    "effect": "commit_inventory_change"
  },
  "inventory_record_refund": {
    "role": "administrator",
    "financial": true,
    "scopes": [
      "site.inventory.write",
      "site.inventory.finance"
    ],
    "effect": "commit_inventory_change"
  },
  "inventory_save_reference": {
    "role": "contributor",
    "financial": false,
    "scopes": [
      "site.inventory.write"
    ],
    "effect": "commit_inventory_change"
  },
  "inventory_revoke_public_media": {
    "role": "contributor",
    "financial": false,
    "scopes": [
      "site.inventory.publish"
    ],
    "effect": "commit_inventory_change"
  },
  "inventory_delete_media": {
    "role": "administrator",
    "financial": false,
    "scopes": [
      "site.inventory.write",
      "site.inventory.manage"
    ],
    "effect": "commit_inventory_change"
  },
  "inventory_confirm_import": {
    "role": "administrator",
    "financial": false,
    "scopes": [
      "site.inventory.write",
      "site.inventory.manage",
      "site.inventory.finance"
    ],
    "effect": "commit_inventory_change"
  },
  "inventory_confirm_migration": {
    "role": "administrator",
    "financial": false,
    "scopes": [
      "site.inventory.write",
      "site.inventory.manage",
      "site.inventory.finance"
    ],
    "effect": "commit_inventory_change"
  },
  "inventory_replace_expense": {
    "role": "administrator",
    "financial": true,
    "scopes": [
      "site.inventory.write",
      "site.inventory.finance"
    ],
    "effect": "commit_inventory_change"
  },
  "inventory_reallocate_expense": {
    "role": "administrator",
    "financial": true,
    "scopes": [
      "site.inventory.write",
      "site.inventory.finance"
    ],
    "effect": "commit_inventory_change"
  },
  "inventory_correct_ledger_entry": {
    "role": "administrator",
    "financial": true,
    "scopes": [
      "site.inventory.write",
      "site.inventory.finance"
    ],
    "effect": "commit_inventory_change"
  },
  "inventory_cancel_financial_operation": {
    "role": "administrator",
    "financial": true,
    "scopes": [
      "site.inventory.write",
      "site.inventory.finance"
    ],
    "effect": "commit_inventory_change"
  },
  "inventory_update_deposit_terms": {
    "role": "administrator",
    "financial": true,
    "scopes": [
      "site.inventory.write",
      "site.inventory.finance"
    ],
    "effect": "commit_inventory_change"
  },
  "inventory_create_seller_profile": {
    "role": "administrator",
    "financial": true,
    "scopes": [
      "site.inventory.write",
      "site.inventory.finance",
      "site.inventory.manage"
    ],
    "effect": "commit_inventory_change"
  },
  "inventory_replace_seller_profile": {
    "role": "administrator",
    "financial": true,
    "scopes": [
      "site.inventory.write",
      "site.inventory.finance",
      "site.inventory.manage"
    ],
    "effect": "commit_inventory_change"
  },
  "inventory_qualify_seller_profile": {
    "role": "administrator",
    "financial": true,
    "scopes": [
      "site.inventory.write",
      "site.inventory.finance",
      "site.inventory.manage"
    ],
    "effect": "commit_inventory_change"
  },
  "inventory_create_tax_treatment": {
    "role": "administrator",
    "financial": true,
    "scopes": [
      "site.inventory.write",
      "site.inventory.finance",
      "site.inventory.manage"
    ],
    "effect": "commit_inventory_change"
  },
  "inventory_replace_tax_treatment": {
    "role": "administrator",
    "financial": true,
    "scopes": [
      "site.inventory.write",
      "site.inventory.finance",
      "site.inventory.manage"
    ],
    "effect": "commit_inventory_change"
  },
  "inventory_qualify_tax_treatment": {
    "role": "administrator",
    "financial": true,
    "scopes": [
      "site.inventory.write",
      "site.inventory.finance",
      "site.inventory.manage"
    ],
    "effect": "commit_inventory_change"
  },
  "inventory_create_document_series": {
    "role": "administrator",
    "financial": true,
    "scopes": [
      "site.inventory.write",
      "site.inventory.finance",
      "site.inventory.manage"
    ],
    "effect": "commit_inventory_change"
  },
  "inventory_deactivate_document_series": {
    "role": "administrator",
    "financial": true,
    "scopes": [
      "site.inventory.write",
      "site.inventory.finance",
      "site.inventory.manage"
    ],
    "effect": "commit_inventory_change"
  },
  "inventory_set_assignment": {
    "role": "administrator",
    "financial": false,
    "scopes": [
      "site.inventory.write",
      "site.inventory.manage"
    ],
    "effect": "commit_inventory_change"
  },
  "inventory_revoke_assignment": {
    "role": "administrator",
    "financial": false,
    "scopes": [
      "site.inventory.write",
      "site.inventory.manage"
    ],
    "effect": "commit_inventory_change"
  },
  "inventory_receive_sales_return": {
    "role": "administrator",
    "financial": true,
    "scopes": [
      "site.inventory.write",
      "site.inventory.finance"
    ],
    "effect": "commit_inventory_change"
  },
  "inventory_restock_returned_unit": {
    "role": "administrator",
    "financial": true,
    "scopes": [
      "site.inventory.write",
      "site.inventory.finance"
    ],
    "effect": "commit_inventory_change"
  },
  "inventory_record_owner_settlement": {
    "role": "administrator",
    "financial": true,
    "scopes": [
      "site.inventory.write",
      "site.inventory.finance"
    ],
    "effect": "commit_inventory_change"
  }
} as const;
