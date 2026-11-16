// Generated from Commerce032 by backend/scripts/generate-contracts.ts. Do not edit.
export const commerceRules={
  "currency": "EUR",
  "minimumCharge": 50,
  "maximumCharge": 99999999,
  "maxCartLines": 50,
  "maxQuantity": 99,
  "maxImages": 10,
  "maxBodyBytes": 65536,
  "maxWithdrawalBytes": 16384,
  "maxWebhookBytes": 524288,
  "quoteSeconds": 600,
  "reservationSeconds": 2100,
  "creationWindowSeconds": 240,
  "guestSeconds": 604800,
  "cartSeconds": 604800,
  "abandonedLogicalSeconds": 86400,
  "abandonedPhysicalNominalSeconds": 172800,
  "consentSeconds": 15811200,
  "operationalDays": 90,
  "addressLimits": {
    "fullName": 200,
    "line1": 250,
    "line2": 250,
    "locality": 150,
    "region": 150,
    "postalCode": 32,
    "email": 254
  },
  "stripeEvents": [
    "checkout.session.completed",
    "checkout.session.expired",
    "checkout.session.async_payment_succeeded",
    "checkout.session.async_payment_failed",
    "refund.created",
    "refund.updated",
    "refund.failed",
    "charge.refunded",
    "charge.dispute.created",
    "charge.dispute.updated",
    "charge.dispute.closed"
  ]
} as const;
