const codes:Record<number,readonly string[]>={
 400:["invalid_request","inventory_invalid_input"],401:["unauthorized"],403:["forbidden","csrf_invalid","inventory_access_required","inventory_finance_required","inventory_scope_required","inventory_subject_ineligible"],404:["not_found","inventory_not_found","inventory_command_unavailable"],409:["inventory_source_mismatch","inventory_idempotency_conflict","inventory_last_administrator","inventory_commitment_conflict","inventory_cursor_stale","inventory_batch_stale"],412:["inventory_revision_conflict"],413:["payload_too_large"],422:["inventory_invalid_input","inventory_media_invalid","inventory_reference_in_use","inventory_publication_invalid","inventory_invalid_money","inventory_currency_mismatch","inventory_cost_allocation_invalid","inventory_fiscal_qualification_required"],428:["inventory_precondition_required"],429:["rate_limited"],503:["service_unavailable","inventory_authority_unavailable","inventory_storage_unavailable"]
};
export function inventoryError(status:number,body:unknown){
 const error=body&&typeof body==="object"&&"error" in body&&body.error&&typeof body.error==="object"?body.error as Record<string,unknown>:null;
 return error&&typeof error.code==="string"&&codes[status]?.includes(error.code)?{status,code:error.code,retryable:status===503||status===429}:{status:503,code:"service_unavailable",retryable:true};
}
