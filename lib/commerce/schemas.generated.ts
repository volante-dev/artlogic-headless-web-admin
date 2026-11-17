// Generated from Commerce032 by backend/scripts/generate-contracts.ts. Do not edit.
export const commerceSchemaDocument={
  "$id": "urn:artlogic:commerce",
  "components": {
    "schemas": {
      "CommerceError": {
        "type": "object",
        "additionalProperties": false,
        "properties": {
          "error": {
            "type": "object",
            "additionalProperties": false,
            "properties": {
              "code": {
                "type": "string",
                "enum": [
                  "validation_failed",
                  "unauthorized",
                  "forbidden",
                  "not_found",
                  "order_not_found",
                  "revision_conflict",
                  "quote_changed",
                  "out_of_stock",
                  "idempotency_conflict",
                  "attempt_in_progress",
                  "quote_expired",
                  "checkout_expired",
                  "destination_unavailable",
                  "tax_rule_missing",
                  "terms_not_current",
                  "amount_out_of_range",
                  "rate_limited",
                  "checkout_unavailable",
                  "provider_unavailable",
                  "persistence_unavailable"
                ]
              },
              "requestId": {
                "type": "string",
                "minLength": 1,
                "maxLength": 100
              },
              "issues": {
                "type": "array",
                "items": {
                  "type": "object",
                  "additionalProperties": false,
                  "properties": {
                    "path": {
                      "type": "string",
                      "minLength": 1,
                      "maxLength": 250
                    },
                    "code": {
                      "type": "string",
                      "minLength": 1,
                      "maxLength": 64
                    }
                  },
                  "required": [
                    "path",
                    "code"
                  ]
                },
                "minItems": 0,
                "maxItems": 100
              }
            },
            "required": [
              "code",
              "requestId"
            ]
          }
        },
        "required": [
          "error"
        ]
      },
      "CommerceAddress": {
        "type": "object",
        "additionalProperties": false,
        "properties": {
          "fullName": {
            "type": "string",
            "minLength": 1,
            "maxLength": 200
          },
          "line1": {
            "type": "string",
            "minLength": 1,
            "maxLength": 250
          },
          "line2": {
            "type": "string",
            "minLength": 0,
            "maxLength": 250
          },
          "locality": {
            "type": "string",
            "minLength": 1,
            "maxLength": 150
          },
          "region": {
            "type": "string",
            "minLength": 0,
            "maxLength": 150
          },
          "postalCode": {
            "type": "string",
            "minLength": 0,
            "maxLength": 32
          },
          "country": {
            "type": "string",
            "minLength": 2,
            "maxLength": 2,
            "pattern": "^[A-Z]{2}$"
          },
          "phone": {
            "type": "string",
            "minLength": 0,
            "maxLength": 40
          }
        },
        "required": [
          "fullName",
          "line1",
          "locality",
          "country"
        ]
      },
      "CommerceMoneyBreakdown": {
        "type": "object",
        "additionalProperties": false,
        "properties": {
          "currency": {
            "type": "string",
            "enum": [
              "EUR"
            ]
          },
          "itemsGross": {
            "type": "integer",
            "minimum": 0,
            "maximum": 99999999
          },
          "itemsNet": {
            "type": "integer",
            "minimum": 0,
            "maximum": 99999999
          },
          "itemsTax": {
            "type": "integer",
            "minimum": 0,
            "maximum": 99999999
          },
          "shippingGross": {
            "type": "integer",
            "minimum": 0,
            "maximum": 99999999
          },
          "shippingNet": {
            "type": "integer",
            "minimum": 0,
            "maximum": 99999999
          },
          "shippingTax": {
            "type": "integer",
            "minimum": 0,
            "maximum": 99999999
          },
          "totalGross": {
            "type": "integer",
            "minimum": 0,
            "maximum": 99999999
          }
        },
        "required": [
          "currency",
          "itemsGross",
          "itemsNet",
          "itemsTax",
          "shippingGross",
          "shippingNet",
          "shippingTax",
          "totalGross"
        ]
      },
      "CommerceCartLineInput": {
        "type": "object",
        "additionalProperties": false,
        "properties": {
          "productId": {
            "type": "string",
            "minLength": 36,
            "maxLength": 36,
            "format": "uuid"
          },
          "quantity": {
            "type": "integer",
            "minimum": 1,
            "maximum": 99
          }
        },
        "required": [
          "productId",
          "quantity"
        ]
      },
      "CommerceCartInput": {
        "type": "object",
        "additionalProperties": false,
        "properties": {
          "items": {
            "type": "array",
            "items": {
              "$ref": "#/components/schemas/CommerceCartLineInput"
            },
            "minItems": 1,
            "maxItems": 50
          },
          "locale": {
            "type": "string",
            "minLength": 2,
            "maxLength": 35,
            "pattern": "^[a-z]{2,3}(?:-[A-Za-z0-9]{2,8})*$"
          },
          "cartRevision": {
            "type": "string",
            "minLength": 1,
            "maxLength": 100
          }
        },
        "required": [
          "items",
          "locale",
          "cartRevision"
        ]
      },
      "CommerceCartValidation": {
        "type": "object",
        "additionalProperties": false,
        "properties": {
          "cartRevision": {
            "type": "string",
            "minLength": 1,
            "maxLength": 100
          },
          "currency": {
            "type": "string",
            "enum": [
              "EUR"
            ]
          },
          "lines": {
            "type": "array",
            "items": {
              "type": "object",
              "additionalProperties": false,
              "properties": {
                "productId": {
                  "type": "string",
                  "minLength": 36,
                  "maxLength": 36,
                  "format": "uuid"
                },
                "requestedQuantity": {
                  "type": "integer",
                  "minimum": 1,
                  "maximum": 99
                },
                "maxPurchasableQuantity": {
                  "type": "integer",
                  "minimum": 0,
                  "maximum": 99
                },
                "status": {
                  "type": "string",
                  "enum": [
                    "valid",
                    "insufficient",
                    "unavailable"
                  ]
                },
                "grossUnitAmount": {
                  "type": "integer",
                  "minimum": 1,
                  "maximum": 99999999
                }
              },
              "required": [
                "productId",
                "requestedQuantity",
                "maxPurchasableQuantity",
                "status"
              ]
            },
            "minItems": 1,
            "maxItems": 50
          }
        },
        "required": [
          "cartRevision",
          "currency",
          "lines"
        ]
      },
      "CommerceProductTranslation": {
        "type": "object",
        "additionalProperties": false,
        "properties": {
          "title": {
            "type": "string",
            "minLength": 1,
            "maxLength": 200
          },
          "description": {
            "type": "string",
            "minLength": 0,
            "maxLength": 10000
          }
        },
        "required": [
          "title",
          "description"
        ]
      },
      "CommerceProductImageInput": {
        "type": "object",
        "additionalProperties": false,
        "properties": {
          "assetId": {
            "type": "string",
            "minLength": 36,
            "maxLength": 36,
            "format": "uuid"
          },
          "alt": {
            "type": "object",
            "minProperties": 1,
            "maxProperties": 20,
            "patternProperties": {
              "^[a-z]{2,3}(?:-[A-Za-z0-9]{2,8})*$": {
                "type": "string",
                "minLength": 0,
                "maxLength": 500
              }
            },
            "additionalProperties": false
          }
        },
        "required": [
          "assetId",
          "alt"
        ]
      },
      "CommerceImageVariant": {
        "type": "object",
        "additionalProperties": false,
        "properties": {
          "url": {
            "type": "string",
            "minLength": 1,
            "maxLength": 8192,
            "format": "uri"
          },
          "width": {
            "type": "integer",
            "minimum": 1,
            "maximum": 10000
          },
          "height": {
            "type": "integer",
            "minimum": 1,
            "maximum": 10000
          }
        },
        "required": [
          "url",
          "width"
        ]
      },
      "CommerceProductImage": {
        "type": "object",
        "additionalProperties": false,
        "properties": {
          "assetId": {
            "type": "string",
            "minLength": 36,
            "maxLength": 36,
            "format": "uuid"
          },
          "alt": {
            "type": "string",
            "minLength": 0,
            "maxLength": 500
          },
          "width": {
            "type": "integer",
            "minimum": 1,
            "maximum": 100000
          },
          "height": {
            "type": "integer",
            "minimum": 1,
            "maximum": 100000
          },
          "src": {
            "type": "string",
            "minLength": 1,
            "maxLength": 8192,
            "format": "uri"
          },
          "variants": {
            "type": "array",
            "items": {
              "$ref": "#/components/schemas/CommerceImageVariant"
            },
            "minItems": 0,
            "maxItems": 20
          }
        },
        "required": [
          "assetId",
          "alt",
          "width",
          "height",
          "src",
          "variants"
        ]
      },
      "CommerceProductInput": {
        "type": "object",
        "additionalProperties": false,
        "properties": {
          "sku": {
            "type": "string",
            "minLength": 1,
            "maxLength": 100
          },
          "kind": {
            "type": "string",
            "enum": [
              "book",
              "goodie"
            ]
          },
          "isNewBook": {
            "type": "boolean"
          },
          "translations": {
            "type": "object",
            "minProperties": 1,
            "maxProperties": 20,
            "patternProperties": {
              "^[a-z]{2,3}(?:-[A-Za-z0-9]{2,8})*$": {
                "$ref": "#/components/schemas/CommerceProductTranslation"
              }
            },
            "additionalProperties": false
          },
          "images": {
            "type": "array",
            "items": {
              "$ref": "#/components/schemas/CommerceProductImageInput"
            },
            "minItems": 0,
            "maxItems": 10
          },
          "attributes": {
            "type": "object",
            "additionalProperties": false,
            "properties": {
              "author": {
                "type": "string",
                "minLength": 0,
                "maxLength": 200
              },
              "publisher": {
                "type": "string",
                "minLength": 0,
                "maxLength": 200
              },
              "isbn": {
                "type": "string",
                "minLength": 0,
                "maxLength": 32
              },
              "format": {
                "type": "string",
                "minLength": 0,
                "maxLength": 200
              }
            },
            "required": []
          },
          "grossUnitAmount": {
            "type": "integer",
            "minimum": 1,
            "maximum": 99999999
          },
          "publisherGrossAmount": {
            "type": "integer",
            "minimum": 1,
            "maximum": 99999999
          },
          "taxCategory": {
            "type": "string",
            "minLength": 1,
            "maxLength": 80
          },
          "status": {
            "type": "string",
            "enum": [
              "draft",
              "published",
              "archived"
            ]
          }
        },
        "required": [
          "sku",
          "kind",
          "isNewBook",
          "translations",
          "images",
          "grossUnitAmount",
          "taxCategory",
          "status"
        ]
      },
      "CommerceProductPatch": {
        "type": "object",
        "additionalProperties": false,
        "properties": {
          "sku": {
            "type": "string",
            "minLength": 1,
            "maxLength": 100
          },
          "kind": {
            "type": "string",
            "enum": [
              "book",
              "goodie"
            ]
          },
          "isNewBook": {
            "type": "boolean"
          },
          "translations": {
            "type": "object",
            "minProperties": 1,
            "maxProperties": 20,
            "patternProperties": {
              "^[a-z]{2,3}(?:-[A-Za-z0-9]{2,8})*$": {
                "$ref": "#/components/schemas/CommerceProductTranslation"
              }
            },
            "additionalProperties": false
          },
          "images": {
            "type": "array",
            "items": {
              "$ref": "#/components/schemas/CommerceProductImageInput"
            },
            "minItems": 0,
            "maxItems": 10
          },
          "attributes": {
            "type": "object",
            "additionalProperties": false,
            "properties": {
              "author": {
                "type": "string",
                "minLength": 0,
                "maxLength": 200
              },
              "publisher": {
                "type": "string",
                "minLength": 0,
                "maxLength": 200
              },
              "isbn": {
                "type": "string",
                "minLength": 0,
                "maxLength": 32
              },
              "format": {
                "type": "string",
                "minLength": 0,
                "maxLength": 200
              }
            },
            "required": []
          },
          "grossUnitAmount": {
            "type": "integer",
            "minimum": 1,
            "maximum": 99999999
          },
          "publisherGrossAmount": {
            "type": "integer",
            "minimum": 1,
            "maximum": 99999999
          },
          "taxCategory": {
            "type": "string",
            "minLength": 1,
            "maxLength": 80
          },
          "status": {
            "type": "string",
            "enum": [
              "draft",
              "published",
              "archived"
            ]
          }
        },
        "required": []
      },
      "CommerceInventory": {
        "type": "object",
        "additionalProperties": false,
        "properties": {
          "productId": {
            "type": "string",
            "minLength": 36,
            "maxLength": 36,
            "format": "uuid"
          },
          "onHand": {
            "type": "integer",
            "minimum": 0,
            "maximum": 2147483647
          },
          "reserved": {
            "type": "integer",
            "minimum": 0,
            "maximum": 2147483647
          },
          "allocated": {
            "type": "integer",
            "minimum": 0,
            "maximum": 2147483647
          },
          "available": {
            "type": "integer",
            "minimum": 0,
            "maximum": 2147483647
          },
          "revision": {
            "type": "integer",
            "minimum": 1,
            "maximum": 2147483647
          }
        },
        "required": [
          "productId",
          "onHand",
          "reserved",
          "allocated",
          "available",
          "revision"
        ]
      },
      "CommerceProductAdmin": {
        "type": "object",
        "additionalProperties": false,
        "properties": {
          "id": {
            "type": "string",
            "minLength": 36,
            "maxLength": 36,
            "format": "uuid"
          },
          "sku": {
            "type": "string",
            "minLength": 1,
            "maxLength": 100
          },
          "kind": {
            "type": "string",
            "enum": [
              "book",
              "goodie"
            ]
          },
          "isNewBook": {
            "type": "boolean"
          },
          "translations": {
            "type": "object",
            "minProperties": 1,
            "maxProperties": 20,
            "patternProperties": {
              "^[a-z]{2,3}(?:-[A-Za-z0-9]{2,8})*$": {
                "$ref": "#/components/schemas/CommerceProductTranslation"
              }
            },
            "additionalProperties": false
          },
          "images": {
            "type": "array",
            "items": {
              "$ref": "#/components/schemas/CommerceProductImageInput"
            },
            "minItems": 0,
            "maxItems": 10
          },
          "attributes": {
            "type": "object",
            "additionalProperties": false,
            "properties": {
              "author": {
                "type": "string",
                "minLength": 0,
                "maxLength": 200
              },
              "publisher": {
                "type": "string",
                "minLength": 0,
                "maxLength": 200
              },
              "isbn": {
                "type": "string",
                "minLength": 0,
                "maxLength": 32
              },
              "format": {
                "type": "string",
                "minLength": 0,
                "maxLength": 200
              }
            },
            "required": []
          },
          "grossUnitAmount": {
            "type": "integer",
            "minimum": 1,
            "maximum": 99999999
          },
          "publisherGrossAmount": {
            "type": "integer",
            "minimum": 1,
            "maximum": 99999999
          },
          "taxCategory": {
            "type": "string",
            "minLength": 1,
            "maxLength": 80
          },
          "status": {
            "type": "string",
            "enum": [
              "draft",
              "published",
              "archived"
            ]
          },
          "revision": {
            "type": "integer",
            "minimum": 1,
            "maximum": 2147483647
          },
          "createdAt": {
            "type": "string",
            "minLength": 20,
            "maxLength": 35,
            "format": "date-time"
          },
          "updatedAt": {
            "type": "string",
            "minLength": 20,
            "maxLength": 35,
            "format": "date-time"
          },
          "inventory": {
            "$ref": "#/components/schemas/CommerceInventory"
          }
        },
        "required": [
          "id",
          "sku",
          "kind",
          "isNewBook",
          "translations",
          "images",
          "grossUnitAmount",
          "taxCategory",
          "status",
          "revision",
          "createdAt",
          "updatedAt",
          "inventory"
        ]
      },
      "CommerceProductCreate": {
        "type": "object",
        "additionalProperties": false,
        "properties": {
          "sku": {
            "type": "string",
            "minLength": 1,
            "maxLength": 100
          },
          "kind": {
            "type": "string",
            "enum": [
              "book",
              "goodie"
            ]
          },
          "isNewBook": {
            "type": "boolean"
          },
          "translations": {
            "type": "object",
            "minProperties": 1,
            "maxProperties": 20,
            "patternProperties": {
              "^[a-z]{2,3}(?:-[A-Za-z0-9]{2,8})*$": {
                "$ref": "#/components/schemas/CommerceProductTranslation"
              }
            },
            "additionalProperties": false
          },
          "images": {
            "type": "array",
            "items": {
              "$ref": "#/components/schemas/CommerceProductImageInput"
            },
            "minItems": 0,
            "maxItems": 10
          },
          "attributes": {
            "type": "object",
            "additionalProperties": false,
            "properties": {
              "author": {
                "type": "string",
                "minLength": 0,
                "maxLength": 200
              },
              "publisher": {
                "type": "string",
                "minLength": 0,
                "maxLength": 200
              },
              "isbn": {
                "type": "string",
                "minLength": 0,
                "maxLength": 32
              },
              "format": {
                "type": "string",
                "minLength": 0,
                "maxLength": 200
              }
            },
            "required": []
          },
          "grossUnitAmount": {
            "type": "integer",
            "minimum": 1,
            "maximum": 99999999
          },
          "publisherGrossAmount": {
            "type": "integer",
            "minimum": 1,
            "maximum": 99999999
          },
          "taxCategory": {
            "type": "string",
            "minLength": 1,
            "maxLength": 80
          },
          "status": {
            "type": "string",
            "enum": [
              "draft",
              "published",
              "archived"
            ]
          },
          "initialStock": {
            "type": "integer",
            "minimum": 0,
            "maximum": 2147483647
          }
        },
        "required": [
          "sku",
          "kind",
          "isNewBook",
          "translations",
          "images",
          "grossUnitAmount",
          "taxCategory",
          "status",
          "initialStock"
        ]
      },
      "CommerceProductPublic": {
        "type": "object",
        "additionalProperties": false,
        "properties": {
          "id": {
            "type": "string",
            "minLength": 36,
            "maxLength": 36,
            "format": "uuid"
          },
          "sku": {
            "type": "string",
            "minLength": 1,
            "maxLength": 100
          },
          "kind": {
            "type": "string",
            "enum": [
              "book",
              "goodie"
            ]
          },
          "title": {
            "type": "string",
            "minLength": 1,
            "maxLength": 200
          },
          "description": {
            "type": "string",
            "minLength": 0,
            "maxLength": 10000
          },
          "attributes": {
            "type": "object",
            "additionalProperties": false,
            "properties": {
              "author": {
                "type": "string",
                "minLength": 0,
                "maxLength": 200
              },
              "publisher": {
                "type": "string",
                "minLength": 0,
                "maxLength": 200
              },
              "isbn": {
                "type": "string",
                "minLength": 0,
                "maxLength": 32
              },
              "format": {
                "type": "string",
                "minLength": 0,
                "maxLength": 200
              }
            },
            "required": []
          },
          "grossUnitAmount": {
            "type": "integer",
            "minimum": 1,
            "maximum": 99999999
          },
          "currency": {
            "type": "string",
            "enum": [
              "EUR"
            ]
          },
          "taxDisplayLabel": {
            "type": "string",
            "minLength": 1,
            "maxLength": 200
          },
          "availability": {
            "type": "string",
            "enum": [
              "available",
              "out_of_stock"
            ]
          },
          "maxPurchasableQuantity": {
            "type": "integer",
            "minimum": 0,
            "maximum": 99
          },
          "images": {
            "type": "array",
            "items": {
              "$ref": "#/components/schemas/CommerceProductImage"
            },
            "minItems": 1,
            "maxItems": 10
          }
        },
        "required": [
          "id",
          "sku",
          "kind",
          "title",
          "description",
          "attributes",
          "grossUnitAmount",
          "currency",
          "taxDisplayLabel",
          "availability",
          "maxPurchasableQuantity",
          "images"
        ]
      },
      "CommerceLegalLinks": {
        "type": "object",
        "additionalProperties": false,
        "properties": {
          "legal": {
            "type": "string",
            "minLength": 1,
            "maxLength": 2048
          },
          "terms": {
            "type": "string",
            "minLength": 1,
            "maxLength": 2048
          },
          "privacy": {
            "type": "string",
            "minLength": 1,
            "maxLength": 2048
          },
          "withdrawal": {
            "type": "string",
            "minLength": 1,
            "maxLength": 2048
          }
        },
        "required": [
          "legal",
          "terms",
          "privacy",
          "withdrawal"
        ]
      },
      "CommerceCapabilities": {
        "type": "object",
        "additionalProperties": false,
        "properties": {
          "enabled": {
            "type": "boolean"
          },
          "checkoutReady": {
            "type": "boolean"
          },
          "trackingAvailable": {
            "type": "boolean"
          },
          "siteName": {
            "type": "string",
            "minLength": 1,
            "maxLength": 200
          },
          "locale": {
            "type": "string",
            "minLength": 2,
            "maxLength": 35,
            "pattern": "^[a-z]{2,3}(?:-[A-Za-z0-9]{2,8})*$"
          },
          "currency": {
            "type": "string",
            "enum": [
              "EUR"
            ]
          },
          "legalLinks": {
            "$ref": "#/components/schemas/CommerceLegalLinks"
          },
          "consentPolicyVersion": {
            "type": "string",
            "minLength": 1,
            "maxLength": 100
          }
        },
        "required": [
          "enabled",
          "checkoutReady",
          "trackingAvailable",
          "siteName",
          "locale",
          "currency",
          "legalLinks",
          "consentPolicyVersion"
        ]
      },
      "CommerceGuestSessionInput": {
        "type": "object",
        "additionalProperties": false,
        "properties": {
          "locale": {
            "type": "string",
            "minLength": 2,
            "maxLength": 35,
            "pattern": "^[a-z]{2,3}(?:-[A-Za-z0-9]{2,8})*$"
          },
          "purpose": {
            "type": "string",
            "enum": [
              "checkout",
              "withdrawal"
            ]
          }
        },
        "required": [
          "locale",
          "purpose"
        ]
      },
      "CommerceGuestSession": {
        "type": "object",
        "additionalProperties": false,
        "properties": {
          "id": {
            "type": "string",
            "minLength": 36,
            "maxLength": 36,
            "format": "uuid"
          },
          "capability": {
            "type": "string",
            "minLength": 43,
            "maxLength": 128
          },
          "purpose": {
            "type": "string",
            "enum": [
              "checkout",
              "withdrawal"
            ]
          },
          "expiresAt": {
            "type": "string",
            "minLength": 20,
            "maxLength": 35,
            "format": "date-time"
          },
          "activeAttemptId": {
            "type": "string",
            "format": "uuid"
          }
        },
        "required": [
          "id",
          "capability",
          "purpose",
          "expiresAt"
        ]
      },
      "CommerceQuoteInput": {
        "type": "object",
        "additionalProperties": false,
        "properties": {
          "items": {
            "type": "array",
            "items": {
              "$ref": "#/components/schemas/CommerceCartLineInput"
            },
            "minItems": 1,
            "maxItems": 50
          },
          "locale": {
            "type": "string",
            "minLength": 2,
            "maxLength": 35,
            "pattern": "^[a-z]{2,3}(?:-[A-Za-z0-9]{2,8})*$"
          },
          "email": {
            "type": "string",
            "minLength": 3,
            "maxLength": 254,
            "format": "email"
          },
          "shippingAddress": {
            "$ref": "#/components/schemas/CommerceAddress"
          },
          "billingSameAsShipping": {
            "type": "boolean"
          },
          "billingAddress": {
            "$ref": "#/components/schemas/CommerceAddress"
          }
        },
        "required": [
          "items",
          "locale",
          "email",
          "shippingAddress",
          "billingSameAsShipping"
        ]
      },
      "CommerceTaxLine": {
        "type": "object",
        "additionalProperties": false,
        "properties": {
          "rateBps": {
            "type": "integer",
            "minimum": 0,
            "maximum": 10000
          },
          "category": {
            "type": "string",
            "minLength": 1,
            "maxLength": 80
          },
          "gross": {
            "type": "integer",
            "minimum": 0,
            "maximum": 99999999
          },
          "net": {
            "type": "integer",
            "minimum": 0,
            "maximum": 99999999
          },
          "tax": {
            "type": "integer",
            "minimum": 0,
            "maximum": 99999999
          },
          "exemptionReason": {
            "type": "string",
            "minLength": 1,
            "maxLength": 2000
          }
        },
        "required": [
          "rateBps",
          "category",
          "gross",
          "net",
          "tax"
        ]
      },
      "CommerceQuoteLine": {
        "type": "object",
        "additionalProperties": false,
        "properties": {
          "productId": {
            "type": "string",
            "minLength": 36,
            "maxLength": 36,
            "format": "uuid"
          },
          "sku": {
            "type": "string",
            "minLength": 1,
            "maxLength": 100
          },
          "title": {
            "type": "string",
            "minLength": 1,
            "maxLength": 200
          },
          "quantity": {
            "type": "integer",
            "minimum": 1,
            "maximum": 99
          },
          "unitGross": {
            "type": "integer",
            "minimum": 1,
            "maximum": 99999999
          },
          "gross": {
            "type": "integer",
            "minimum": 1,
            "maximum": 99999999
          },
          "net": {
            "type": "integer",
            "minimum": 0,
            "maximum": 99999999
          },
          "tax": {
            "type": "integer",
            "minimum": 0,
            "maximum": 99999999
          },
          "rateBps": {
            "type": "integer",
            "minimum": 0,
            "maximum": 10000
          },
          "taxCategory": {
            "type": "string",
            "minLength": 1,
            "maxLength": 80
          },
          "productRevision": {
            "type": "integer",
            "minimum": 1,
            "maximum": 2147483647
          }
        },
        "required": [
          "productId",
          "sku",
          "title",
          "quantity",
          "unitGross",
          "gross",
          "net",
          "tax",
          "rateBps",
          "taxCategory",
          "productRevision"
        ]
      },
      "CommerceShippingOption": {
        "type": "object",
        "additionalProperties": false,
        "properties": {
          "zoneId": {
            "type": "string",
            "minLength": 36,
            "maxLength": 36,
            "format": "uuid"
          },
          "label": {
            "type": "string",
            "minLength": 1,
            "maxLength": 200
          },
          "gross": {
            "type": "integer",
            "minimum": 0,
            "maximum": 99999999
          },
          "deliveryEstimate": {
            "type": "string",
            "minLength": 1,
            "maxLength": 1000
          },
          "phoneRequired": {
            "type": "boolean"
          }
        },
        "required": [
          "zoneId",
          "label",
          "gross",
          "deliveryEstimate",
          "phoneRequired"
        ]
      },
      "CommerceQuote": {
        "type": "object",
        "additionalProperties": false,
        "properties": {
          "id": {
            "type": "string",
            "minLength": 36,
            "maxLength": 36,
            "format": "uuid"
          },
          "expiresAt": {
            "type": "string",
            "minLength": 20,
            "maxLength": 35,
            "format": "date-time"
          },
          "locale": {
            "type": "string",
            "minLength": 2,
            "maxLength": 35,
            "pattern": "^[a-z]{2,3}(?:-[A-Za-z0-9]{2,8})*$"
          },
          "lines": {
            "type": "array",
            "items": {
              "$ref": "#/components/schemas/CommerceQuoteLine"
            },
            "minItems": 1,
            "maxItems": 50
          },
          "shippingAddress": {
            "$ref": "#/components/schemas/CommerceAddress"
          },
          "billingAddress": {
            "$ref": "#/components/schemas/CommerceAddress"
          },
          "shippingOption": {
            "$ref": "#/components/schemas/CommerceShippingOption"
          },
          "amounts": {
            "$ref": "#/components/schemas/CommerceMoneyBreakdown"
          },
          "shippingTaxLines": {
            "type": "array",
            "items": {
              "$ref": "#/components/schemas/CommerceTaxLine"
            },
            "minItems": 0,
            "maxItems": 50
          },
          "importDisclosure": {
            "type": "string",
            "minLength": 0,
            "maxLength": 4000
          },
          "termsVersion": {
            "type": "string",
            "minLength": 1,
            "maxLength": 100
          },
          "termsHash": {
            "type": "string",
            "minLength": 64,
            "maxLength": 64,
            "pattern": "^[a-f0-9]{64}$"
          },
          "fingerprint": {
            "type": "string",
            "minLength": 1,
            "maxLength": 128
          }
        },
        "required": [
          "id",
          "expiresAt",
          "locale",
          "lines",
          "shippingAddress",
          "billingAddress",
          "shippingOption",
          "amounts",
          "shippingTaxLines",
          "importDisclosure",
          "termsVersion",
          "termsHash",
          "fingerprint"
        ]
      },
      "CommerceAcceptedTerms": {
        "type": "object",
        "additionalProperties": false,
        "properties": {
          "version": {
            "type": "string",
            "minLength": 1,
            "maxLength": 100
          },
          "hash": {
            "type": "string",
            "minLength": 64,
            "maxLength": 64,
            "pattern": "^[a-f0-9]{64}$"
          },
          "accepted": {
            "type": "boolean",
            "enum": [
              true
            ]
          }
        },
        "required": [
          "version",
          "hash",
          "accepted"
        ]
      },
      "CommerceAttemptInput": {
        "type": "object",
        "additionalProperties": false,
        "properties": {
          "quoteId": {
            "type": "string",
            "minLength": 36,
            "maxLength": 36,
            "format": "uuid"
          },
          "quoteFingerprint": {
            "type": "string",
            "minLength": 1,
            "maxLength": 128
          },
          "acceptedTerms": {
            "$ref": "#/components/schemas/CommerceAcceptedTerms"
          }
        },
        "required": [
          "quoteId",
          "quoteFingerprint",
          "acceptedTerms"
        ]
      },
      "CommercePayment": {
        "type": "object",
        "additionalProperties": false,
        "properties": {
          "mode": {
            "type": "string",
            "enum": [
              "mock",
              "stripe"
            ]
          },
          "publishableKey": {
            "type": "string",
            "minLength": 1,
            "maxLength": 200
          },
          "clientSecret": {
            "type": "string",
            "minLength": 1,
            "maxLength": 500
          },
          "providerSessionId": {
            "type": "string",
            "minLength": 1,
            "maxLength": 200
          }
        },
        "required": [
          "mode",
          "publishableKey",
          "clientSecret",
          "providerSessionId"
        ]
      },
      "CommerceAttempt": {
        "type": "object",
        "additionalProperties": false,
        "properties": {
          "id": {
            "type": "string",
            "minLength": 36,
            "maxLength": 36,
            "format": "uuid"
          },
          "status": {
            "type": "string",
            "enum": [
              "creating",
              "payable",
              "processing",
              "reconciling",
              "cancel_requested",
              "paid",
              "failed",
              "expired",
              "cancelled",
              "paid_unfulfillable"
            ]
          },
          "expiresAt": {
            "type": "string",
            "minLength": 20,
            "maxLength": 35,
            "format": "date-time"
          },
          "paymentState": {
            "type": "string",
            "enum": [
              "unpaid",
              "processing",
              "paid",
              "unknown",
              "failed"
            ]
          },
          "orderNumber": {
            "type": "string",
            "minLength": 1,
            "maxLength": 100
          },
          "nextAction": {
            "type": "string",
            "enum": [
              "pay",
              "wait",
              "confirmed",
              "retry",
              "contact"
            ]
          },
          "payment": {
            "$ref": "#/components/schemas/CommercePayment"
          },
          "order": {
            "$ref": "#/components/schemas/CommerceOrderConfirmation"
          },
          "checkout": {
            "type": "object",
            "additionalProperties": false,
            "properties": {
              "quote": {
                "$ref": "#/components/schemas/CommerceQuote"
              },
              "email": {
                "type": "string",
                "format": "email",
                "maxLength": 254
              }
            },
            "required": [
              "quote",
              "email"
            ]
          }
        },
        "required": [
          "id",
          "status",
          "expiresAt",
          "paymentState",
          "nextAction"
        ]
      },
      "CommerceShipmentInput": {
        "type": "object",
        "additionalProperties": false,
        "properties": {
          "shippedAt": {
            "type": "string",
            "minLength": 20,
            "maxLength": 35,
            "format": "date-time"
          },
          "carrier": {
            "type": "string",
            "minLength": 1,
            "maxLength": 200
          },
          "trackingNumber": {
            "type": "string",
            "minLength": 0,
            "maxLength": 200
          },
          "trackingUrl": {
            "type": "string",
            "minLength": 1,
            "maxLength": 2048,
            "format": "uri"
          }
        },
        "required": [
          "shippedAt",
          "carrier"
        ]
      },
      "CommerceOrderTracking": {
        "type": "object",
        "additionalProperties": false,
        "properties": {
          "orderNumber": {
            "type": "string",
            "minLength": 1,
            "maxLength": 100
          },
          "items": {
            "type": "array",
            "items": {
              "type": "object",
              "additionalProperties": false,
              "properties": {
                "title": {
                  "type": "string",
                  "minLength": 1,
                  "maxLength": 200
                },
                "quantity": {
                  "type": "integer",
                  "minimum": 1,
                  "maximum": 99
                }
              },
              "required": [
                "title",
                "quantity"
              ]
            },
            "minItems": 1,
            "maxItems": 50
          },
          "totalGross": {
            "type": "integer",
            "minimum": 0,
            "maximum": 99999999
          },
          "currency": {
            "type": "string",
            "enum": [
              "EUR"
            ]
          },
          "fulfillmentStatus": {
            "type": "string",
            "enum": [
              "confirmed",
              "processing",
              "shipped",
              "delivered"
            ],
            "nullable": true
          },
          "steps": {
            "type": "array",
            "items": {
              "type": "object",
              "additionalProperties": false,
              "properties": {
                "status": {
                  "type": "string",
                  "enum": [
                    "confirmed",
                    "processing",
                    "shipped",
                    "delivered"
                  ]
                },
                "at": {
                  "type": "string",
                  "minLength": 20,
                  "maxLength": 35,
                  "format": "date-time"
                }
              },
              "required": [
                "status",
                "at"
              ]
            },
            "minItems": 0,
            "maxItems": 4
          },
          "exception": {
            "type": "string",
            "minLength": 1,
            "maxLength": 1000
          },
          "shipment": {
            "$ref": "#/components/schemas/CommerceShipmentInput"
          },
          "documents": {
            "type": "array",
            "maxItems": 501,
            "items": {
              "$ref": "#/components/schemas/CommerceOrderDocumentSummary"
            }
          }
        },
        "required": [
          "orderNumber",
          "items",
          "totalGross",
          "currency",
          "fulfillmentStatus",
          "steps",
          "documents"
        ]
      },
      "CommerceLookup": {
        "type": "object",
        "additionalProperties": false,
        "properties": {
          "orderNumber": {
            "type": "string",
            "minLength": 1,
            "maxLength": 100
          },
          "email": {
            "type": "string",
            "minLength": 3,
            "maxLength": 254
          }
        },
        "required": [
          "orderNumber",
          "email"
        ]
      },
      "CommerceDocumentRead": {
        "oneOf": [
          {
            "type": "object",
            "additionalProperties": false,
            "properties": {
              "attemptId": {
                "type": "string",
                "minLength": 36,
                "maxLength": 36,
                "format": "uuid"
              },
              "documentId": {
                "type": "string",
                "minLength": 36,
                "maxLength": 36,
                "format": "uuid"
              }
            },
            "required": [
              "attemptId",
              "documentId"
            ]
          },
          {
            "type": "object",
            "additionalProperties": false,
            "properties": {
              "orderNumber": {
                "type": "string",
                "minLength": 1,
                "maxLength": 100
              },
              "email": {
                "type": "string",
                "minLength": 3,
                "maxLength": 254
              },
              "documentId": {
                "type": "string",
                "minLength": 36,
                "maxLength": 36,
                "format": "uuid"
              }
            },
            "required": [
              "orderNumber",
              "email",
              "documentId"
            ]
          }
        ]
      },
      "CommerceWithdrawalInput": {
        "type": "object",
        "additionalProperties": false,
        "properties": {
          "fullName": {
            "type": "string",
            "minLength": 1,
            "maxLength": 200
          },
          "contractReference": {
            "type": "string",
            "minLength": 1,
            "maxLength": 2000
          },
          "receiptEmail": {
            "type": "string",
            "minLength": 3,
            "maxLength": 254,
            "format": "email"
          },
          "declaration": {
            "type": "string",
            "minLength": 1,
            "maxLength": 10000
          },
          "confirmed": {
            "type": "boolean",
            "enum": [
              true
            ]
          },
          "locale": {
            "type": "string",
            "minLength": 2,
            "maxLength": 35,
            "pattern": "^[a-z]{2,3}(?:-[A-Za-z0-9]{2,8})*$"
          }
        },
        "required": [
          "fullName",
          "contractReference",
          "receiptEmail",
          "declaration",
          "confirmed",
          "locale"
        ]
      },
      "CommerceWithdrawalReceipt": {
        "type": "object",
        "additionalProperties": false,
        "properties": {
          "id": {
            "type": "string",
            "minLength": 36,
            "maxLength": 36,
            "format": "uuid"
          },
          "reference": {
            "type": "string",
            "minLength": 1,
            "maxLength": 100
          },
          "receivedAt": {
            "type": "string",
            "minLength": 20,
            "maxLength": 35,
            "format": "date-time"
          },
          "declaration": {
            "type": "string",
            "minLength": 1,
            "maxLength": 10000
          },
          "fullName": {
            "type": "string",
            "minLength": 1,
            "maxLength": 200
          },
          "contractReference": {
            "type": "string",
            "minLength": 1,
            "maxLength": 2000
          }
        },
        "required": [
          "id",
          "reference",
          "receivedAt",
          "declaration",
          "fullName",
          "contractReference"
        ]
      },
      "CommerceWithdrawalAdmin": {
        "type": "object",
        "additionalProperties": false,
        "properties": {
          "id": {
            "type": "string",
            "minLength": 36,
            "maxLength": 36,
            "format": "uuid"
          },
          "receivedAt": {
            "type": "string",
            "minLength": 20,
            "maxLength": 35,
            "format": "date-time"
          },
          "fullName": {
            "type": "string",
            "minLength": 1,
            "maxLength": 200
          },
          "contractReference": {
            "type": "string",
            "minLength": 1,
            "maxLength": 2000
          },
          "receiptEmail": {
            "type": "string",
            "minLength": 3,
            "maxLength": 254,
            "format": "email"
          },
          "declaration": {
            "type": "string",
            "minLength": 1,
            "maxLength": 10000
          },
          "status": {
            "type": "string",
            "enum": [
              "received",
              "reviewing",
              "resolved"
            ]
          },
          "note": {
            "type": "string",
            "minLength": 0,
            "maxLength": 4000
          },
          "revision": {
            "type": "integer",
            "minimum": 1,
            "maximum": 2147483647
          },
          "orderId": {
            "type": "string",
            "format": "uuid",
            "minLength": 36,
            "maxLength": 36
          },
          "submissions": {
            "type": "array",
            "items": {
              "$ref": "#/components/schemas/CommerceWithdrawalReceipt"
            },
            "minItems": 0,
            "maxItems": 20
          },
          "notifications": {
            "type": "array",
            "items": {
              "$ref": "#/components/schemas/CommerceNotification"
            },
            "minItems": 0,
            "maxItems": 50
          }
        },
        "required": [
          "id",
          "receivedAt",
          "fullName",
          "contractReference",
          "receiptEmail",
          "declaration",
          "status",
          "note",
          "revision"
        ]
      },
      "CommerceConsentCategory": {
        "type": "object",
        "additionalProperties": false,
        "properties": {
          "id": {
            "type": "string",
            "minLength": 1,
            "maxLength": 64
          },
          "label": {
            "type": "string",
            "minLength": 1,
            "maxLength": 200
          },
          "description": {
            "type": "string",
            "minLength": 1,
            "maxLength": 4000
          },
          "required": {
            "type": "boolean"
          },
          "providers": {
            "type": "array",
            "items": {
              "type": "string",
              "minLength": 1,
              "maxLength": 200
            },
            "minItems": 0,
            "maxItems": 20
          }
        },
        "required": [
          "id",
          "label",
          "description",
          "required",
          "providers"
        ]
      },
      "CommerceConsentPolicy": {
        "type": "object",
        "additionalProperties": false,
        "properties": {
          "version": {
            "type": "string",
            "minLength": 1,
            "maxLength": 100
          },
          "locale": {
            "type": "string",
            "minLength": 2,
            "maxLength": 35,
            "pattern": "^[a-z]{2,3}(?:-[A-Za-z0-9]{2,8})*$"
          },
          "categories": {
            "type": "array",
            "items": {
              "$ref": "#/components/schemas/CommerceConsentCategory"
            },
            "minItems": 0,
            "maxItems": 10
          },
          "expiresInSeconds": {
            "type": "integer",
            "minimum": 1,
            "maximum": 15811200
          }
        },
        "required": [
          "version",
          "locale",
          "categories",
          "expiresInSeconds"
        ]
      },
      "CommerceConsentInput": {
        "type": "object",
        "additionalProperties": false,
        "properties": {
          "policyVersion": {
            "type": "string",
            "minLength": 1,
            "maxLength": 100
          },
          "categories": {
            "type": "array",
            "items": {
              "type": "string",
              "minLength": 1,
              "maxLength": 64
            },
            "minItems": 0,
            "maxItems": 10
          },
          "choice": {
            "type": "string",
            "enum": [
              "accept",
              "reject",
              "customize"
            ]
          },
          "pseudonymousId": {
            "type": "string",
            "minLength": 36,
            "maxLength": 36,
            "format": "uuid"
          },
          "locale": {
            "type": "string",
            "minLength": 2,
            "maxLength": 35,
            "pattern": "^[a-z]{2,3}(?:-[A-Za-z0-9]{2,8})*$"
          }
        },
        "required": [
          "policyVersion",
          "categories",
          "choice",
          "pseudonymousId",
          "locale"
        ]
      },
      "CommerceConsentReceipt": {
        "type": "object",
        "additionalProperties": false,
        "properties": {
          "id": {
            "type": "string",
            "minLength": 36,
            "maxLength": 36,
            "format": "uuid"
          },
          "receivedAt": {
            "type": "string",
            "minLength": 20,
            "maxLength": 35,
            "format": "date-time"
          },
          "expiresAt": {
            "type": "string",
            "minLength": 20,
            "maxLength": 35,
            "format": "date-time"
          }
        },
        "required": [
          "id",
          "receivedAt",
          "expiresAt"
        ]
      },
      "CommerceLegalDocumentInput": {
        "type": "object",
        "additionalProperties": false,
        "properties": {
          "kind": {
            "type": "string",
            "enum": [
              "legal",
              "terms",
              "privacy",
              "withdrawal"
            ]
          },
          "locale": {
            "type": "string",
            "minLength": 2,
            "maxLength": 35,
            "pattern": "^[a-z]{2,3}(?:-[A-Za-z0-9]{2,8})*$"
          },
          "title": {
            "type": "string",
            "minLength": 1,
            "maxLength": 200
          },
          "content": {
            "type": "string",
            "minLength": 1,
            "maxLength": 30000
          },
          "sellerValidated": {
            "type": "boolean"
          }
        },
        "required": [
          "kind",
          "locale",
          "title",
          "content",
          "sellerValidated"
        ]
      },
      "CommerceLegalDocument": {
        "type": "object",
        "additionalProperties": false,
        "properties": {
          "id": {
            "type": "string",
            "minLength": 36,
            "maxLength": 36,
            "format": "uuid"
          },
          "kind": {
            "type": "string",
            "enum": [
              "legal",
              "terms",
              "privacy",
              "withdrawal"
            ]
          },
          "locale": {
            "type": "string",
            "minLength": 2,
            "maxLength": 35,
            "pattern": "^[a-z]{2,3}(?:-[A-Za-z0-9]{2,8})*$"
          },
          "version": {
            "type": "string",
            "minLength": 1,
            "maxLength": 100
          },
          "title": {
            "type": "string",
            "minLength": 1,
            "maxLength": 200
          },
          "content": {
            "type": "string",
            "minLength": 1,
            "maxLength": 30000
          },
          "hash": {
            "type": "string",
            "minLength": 64,
            "maxLength": 64
          },
          "status": {
            "type": "string",
            "enum": [
              "draft",
              "published"
            ]
          },
          "sellerValidated": {
            "type": "boolean"
          },
          "revision": {
            "type": "integer",
            "minimum": 1,
            "maximum": 2147483647
          },
          "publishedAt": {
            "type": "string",
            "minLength": 20,
            "maxLength": 35,
            "format": "date-time"
          }
        },
        "required": [
          "id",
          "kind",
          "locale",
          "version",
          "title",
          "content",
          "hash",
          "status",
          "sellerValidated",
          "revision"
        ]
      },
      "CommerceSellerProfile": {
        "type": "object",
        "additionalProperties": false,
        "properties": {
          "legalName": {
            "type": "string",
            "minLength": 1,
            "maxLength": 200
          },
          "tradeName": {
            "type": "string",
            "minLength": 1,
            "maxLength": 200
          },
          "legalForm": {
            "type": "string",
            "minLength": 0,
            "maxLength": 200
          },
          "registeredAddress": {
            "$ref": "#/components/schemas/CommerceAddress"
          },
          "registrationNumber": {
            "type": "string",
            "minLength": 0,
            "maxLength": 100
          },
          "registrationCity": {
            "type": "string",
            "minLength": 0,
            "maxLength": 200
          },
          "capital": {
            "type": "string",
            "minLength": 0,
            "maxLength": 100
          },
          "vatNumber": {
            "type": "string",
            "minLength": 0,
            "maxLength": 100
          },
          "email": {
            "type": "string",
            "minLength": 3,
            "maxLength": 254,
            "format": "email"
          },
          "phone": {
            "type": "string",
            "minLength": 1,
            "maxLength": 40
          },
          "publicationDirector": {
            "type": "string",
            "minLength": 1,
            "maxLength": 200
          },
          "returnAddress": {
            "$ref": "#/components/schemas/CommerceAddress"
          },
          "complaintsContact": {
            "type": "string",
            "minLength": 1,
            "maxLength": 1000
          },
          "mediator": {
            "type": "string",
            "minLength": 0,
            "maxLength": 2000
          },
          "country": {
            "type": "string",
            "minLength": 2,
            "maxLength": 2
          },
          "validated": {
            "type": "boolean"
          }
        },
        "required": [
          "legalName",
          "tradeName",
          "registeredAddress",
          "email",
          "phone",
          "publicationDirector",
          "returnAddress",
          "complaintsContact",
          "country",
          "validated"
        ]
      },
      "CommerceSettingsInput": {
        "type": "object",
        "additionalProperties": false,
        "properties": {
          "seller": {
            "$ref": "#/components/schemas/CommerceSellerProfile"
          },
          "minimumCharge": {
            "type": "integer",
            "minimum": 50,
            "maximum": 99999999
          },
          "maximumCharge": {
            "type": "integer",
            "minimum": 50,
            "maximum": 99999999
          },
          "accountQualified": {
            "type": "boolean"
          },
          "notificationQualified": {
            "type": "boolean"
          },
          "invoiceRequired": {
            "type": "boolean"
          },
          "invoiceSeries": {
            "type": "string",
            "minLength": 1,
            "maxLength": 40
          },
          "destinationsQualified": {
            "type": "array",
            "items": {
              "type": "string",
              "minLength": 2,
              "maxLength": 2
            },
            "minItems": 0,
            "maxItems": 249
          },
          "retentionPolicyValidated": {
            "type": "boolean"
          },
          "addressRules": {
            "type": "object",
            "maxProperties": 249,
            "patternProperties": {
              "^[A-Z]{2}$": {
                "$ref": "#/components/schemas/CommerceCountryAddressRule"
              }
            },
            "additionalProperties": false
          }
        },
        "required": [
          "seller",
          "minimumCharge",
          "maximumCharge",
          "accountQualified",
          "notificationQualified",
          "invoiceRequired",
          "invoiceSeries",
          "destinationsQualified",
          "retentionPolicyValidated",
          "addressRules"
        ]
      },
      "CommerceSettings": {
        "type": "object",
        "additionalProperties": false,
        "properties": {
          "settings": {
            "$ref": "#/components/schemas/CommerceSettingsInput"
          },
          "revision": {
            "type": "integer",
            "minimum": 1,
            "maximum": 2147483647
          },
          "enabled": {
            "type": "boolean"
          },
          "checkoutReady": {
            "type": "boolean"
          },
          "reasons": {
            "type": "array",
            "items": {
              "type": "string",
              "minLength": 1,
              "maxLength": 100
            },
            "minItems": 0,
            "maxItems": 50
          },
          "historicalOrders": {
            "type": "boolean"
          }
        },
        "required": [
          "settings",
          "revision",
          "enabled",
          "checkoutReady",
          "reasons",
          "historicalOrders"
        ]
      },
      "CommerceShippingZone": {
        "type": "object",
        "additionalProperties": false,
        "properties": {
          "id": {
            "type": "string",
            "minLength": 36,
            "maxLength": 36,
            "format": "uuid"
          },
          "label": {
            "type": "object",
            "minProperties": 1,
            "maxProperties": 20,
            "patternProperties": {
              "^[a-z]{2,3}(?:-[A-Za-z0-9]{2,8})*$": {
                "type": "string",
                "minLength": 1,
                "maxLength": 200
              }
            },
            "additionalProperties": false
          },
          "countries": {
            "type": "array",
            "items": {
              "type": "string",
              "minLength": 2,
              "maxLength": 2,
              "pattern": "^[A-Z]{2}$"
            },
            "minItems": 1,
            "maxItems": 249
          },
          "active": {
            "type": "boolean"
          },
          "grossAmount": {
            "type": "integer",
            "minimum": 0,
            "maximum": 99999999
          },
          "deliveryEstimate": {
            "type": "object",
            "minProperties": 1,
            "maxProperties": 20,
            "patternProperties": {
              "^[a-z]{2,3}(?:-[A-Za-z0-9]{2,8})*$": {
                "type": "string",
                "minLength": 1,
                "maxLength": 1000
              }
            },
            "additionalProperties": false
          },
          "importDisclosure": {
            "type": "object",
            "minProperties": 1,
            "maxProperties": 20,
            "patternProperties": {
              "^[a-z]{2,3}(?:-[A-Za-z0-9]{2,8})*$": {
                "type": "string",
                "minLength": 0,
                "maxLength": 4000
              }
            },
            "additionalProperties": false
          },
          "phoneRequired": {
            "type": "boolean"
          }
        },
        "required": [
          "id",
          "label",
          "countries",
          "active",
          "grossAmount",
          "deliveryEstimate",
          "importDisclosure",
          "phoneRequired"
        ]
      },
      "CommerceShippingZones": {
        "type": "object",
        "additionalProperties": false,
        "properties": {
          "zones": {
            "type": "array",
            "items": {
              "$ref": "#/components/schemas/CommerceShippingZone"
            },
            "minItems": 0,
            "maxItems": 100
          },
          "revision": {
            "type": "integer",
            "minimum": 0,
            "maximum": 2147483647
          }
        },
        "required": [
          "zones",
          "revision"
        ]
      },
      "CommerceShippingZonesInput": {
        "type": "object",
        "additionalProperties": false,
        "properties": {
          "zones": {
            "type": "array",
            "items": {
              "$ref": "#/components/schemas/CommerceShippingZone"
            },
            "minItems": 0,
            "maxItems": 100
          }
        },
        "required": [
          "zones"
        ]
      },
      "CommerceTaxRule": {
        "type": "object",
        "additionalProperties": false,
        "properties": {
          "id": {
            "type": "string",
            "minLength": 36,
            "maxLength": 36,
            "format": "uuid"
          },
          "country": {
            "type": "string",
            "minLength": 2,
            "maxLength": 2
          },
          "category": {
            "type": "string",
            "minLength": 1,
            "maxLength": 80
          },
          "rateBps": {
            "type": "integer",
            "minimum": 0,
            "maximum": 10000
          },
          "exemptionReason": {
            "type": "string",
            "minLength": 0,
            "maxLength": 2000
          },
          "validated": {
            "type": "boolean"
          }
        },
        "required": [
          "id",
          "country",
          "category",
          "rateBps",
          "exemptionReason",
          "validated"
        ]
      },
      "CommerceTaxRules": {
        "type": "object",
        "additionalProperties": false,
        "properties": {
          "rules": {
            "type": "array",
            "items": {
              "$ref": "#/components/schemas/CommerceTaxRule"
            },
            "minItems": 0,
            "maxItems": 1000
          },
          "revision": {
            "type": "integer",
            "minimum": 0,
            "maximum": 2147483647
          }
        },
        "required": [
          "rules",
          "revision"
        ]
      },
      "CommerceTaxRulesInput": {
        "type": "object",
        "additionalProperties": false,
        "properties": {
          "rules": {
            "type": "array",
            "items": {
              "$ref": "#/components/schemas/CommerceTaxRule"
            },
            "minItems": 0,
            "maxItems": 1000
          }
        },
        "required": [
          "rules"
        ]
      },
      "CommerceInventoryMovement": {
        "type": "object",
        "additionalProperties": false,
        "properties": {
          "id": {
            "type": "string",
            "minLength": 36,
            "maxLength": 36,
            "format": "uuid"
          },
          "productId": {
            "type": "string",
            "minLength": 36,
            "maxLength": 36,
            "format": "uuid"
          },
          "deltaOnHand": {
            "type": "integer",
            "minimum": -2147483647,
            "maximum": 2147483647
          },
          "deltaReserved": {
            "type": "integer",
            "minimum": -2147483647,
            "maximum": 2147483647
          },
          "deltaAllocated": {
            "type": "integer",
            "minimum": -2147483647,
            "maximum": 2147483647
          },
          "reason": {
            "type": "string",
            "minLength": 1,
            "maxLength": 2000
          },
          "actorId": {
            "type": "string",
            "minLength": 36,
            "maxLength": 36,
            "format": "uuid"
          },
          "createdAt": {
            "type": "string",
            "minLength": 20,
            "maxLength": 35,
            "format": "date-time"
          },
          "referenceId": {
            "type": "string",
            "minLength": 36,
            "maxLength": 36,
            "format": "uuid"
          }
        },
        "required": [
          "id",
          "productId",
          "deltaOnHand",
          "deltaReserved",
          "deltaAllocated",
          "reason",
          "createdAt"
        ]
      },
      "CommerceInventoryHistory": {
        "type": "object",
        "additionalProperties": false,
        "properties": {
          "balance": {
            "$ref": "#/components/schemas/CommerceInventory"
          },
          "movements": {
            "type": "array",
            "items": {
              "$ref": "#/components/schemas/CommerceInventoryMovement"
            },
            "minItems": 0,
            "maxItems": 48
          },
          "nextCursor": {
            "type": "string",
            "minLength": 1,
            "maxLength": 1024,
            "nullable": true
          }
        },
        "required": [
          "balance",
          "movements",
          "nextCursor"
        ]
      },
      "CommerceNotification": {
        "type": "object",
        "additionalProperties": false,
        "properties": {
          "id": {
            "type": "string",
            "minLength": 36,
            "maxLength": 36,
            "format": "uuid"
          },
          "kind": {
            "type": "string",
            "minLength": 1,
            "maxLength": 80
          },
          "status": {
            "type": "string",
            "enum": [
              "pending",
              "sending",
              "accepted",
              "uncertain",
              "failed"
            ]
          },
          "attempts": {
            "type": "integer",
            "minimum": 0,
            "maximum": 1000000
          },
          "nextRetryAt": {
            "type": "string",
            "minLength": 20,
            "maxLength": 35,
            "format": "date-time"
          },
          "errorCode": {
            "type": "string",
            "minLength": 1,
            "maxLength": 100
          },
          "manualRetryRequired": {
            "type": "boolean"
          }
        },
        "required": [
          "id",
          "kind",
          "status",
          "attempts",
          "manualRetryRequired"
        ]
      },
      "CommerceOrderEvent": {
        "type": "object",
        "additionalProperties": false,
        "properties": {
          "id": {
            "type": "string",
            "minLength": 36,
            "maxLength": 36,
            "format": "uuid"
          },
          "at": {
            "type": "string",
            "minLength": 20,
            "maxLength": 35,
            "format": "date-time"
          },
          "actorId": {
            "type": "string",
            "minLength": 36,
            "maxLength": 36,
            "format": "uuid"
          },
          "kind": {
            "type": "string",
            "minLength": 1,
            "maxLength": 100
          },
          "reason": {
            "type": "string",
            "minLength": 0,
            "maxLength": 2000
          },
          "previousStatus": {
            "type": "string",
            "minLength": 1,
            "maxLength": 100
          },
          "nextStatus": {
            "type": "string",
            "minLength": 1,
            "maxLength": 100
          }
        },
        "required": [
          "id",
          "at",
          "kind"
        ]
      },
      "CommerceOrderDocumentSummary": {
        "type": "object",
        "additionalProperties": false,
        "properties": {
          "id": {
            "type": "string",
            "minLength": 36,
            "maxLength": 36,
            "format": "uuid"
          },
          "kind": {
            "type": "string",
            "enum": [
              "receipt",
              "invoice",
              "credit_note"
            ]
          },
          "number": {
            "type": "string",
            "minLength": 1,
            "maxLength": 100
          },
          "issuedAt": {
            "type": "string",
            "minLength": 20,
            "maxLength": 35,
            "format": "date-time"
          }
        },
        "required": [
          "id",
          "kind",
          "number",
          "issuedAt"
        ]
      },
      "CommerceAdminOrder": {
        "type": "object",
        "additionalProperties": false,
        "properties": {
          "id": {
            "type": "string",
            "minLength": 36,
            "maxLength": 36,
            "format": "uuid"
          },
          "orderNumber": {
            "type": "string",
            "minLength": 1,
            "maxLength": 100
          },
          "createdAt": {
            "type": "string",
            "minLength": 20,
            "maxLength": 35,
            "format": "date-time"
          },
          "revision": {
            "type": "integer",
            "minimum": 1,
            "maximum": 2147483647
          },
          "email": {
            "type": "string",
            "minLength": 3,
            "maxLength": 254,
            "format": "email"
          },
          "shippingAddress": {
            "$ref": "#/components/schemas/CommerceAddress"
          },
          "billingAddress": {
            "$ref": "#/components/schemas/CommerceAddress"
          },
          "lines": {
            "type": "array",
            "items": {
              "$ref": "#/components/schemas/CommerceQuoteLine"
            },
            "minItems": 1,
            "maxItems": 50
          },
          "amounts": {
            "$ref": "#/components/schemas/CommerceMoneyBreakdown"
          },
          "fulfillmentStatus": {
            "type": "string",
            "enum": [
              "confirmed",
              "processing",
              "shipped",
              "delivered"
            ],
            "nullable": true
          },
          "financialStatus": {
            "type": "string",
            "enum": [
              "paid",
              "partially_refunded",
              "refunded"
            ]
          },
          "cancelledAt": {
            "type": "string",
            "minLength": 20,
            "maxLength": 35,
            "format": "date-time"
          },
          "shipment": {
            "$ref": "#/components/schemas/CommerceShipmentInput"
          },
          "notifications": {
            "type": "array",
            "items": {
              "$ref": "#/components/schemas/CommerceNotification"
            },
            "minItems": 0,
            "maxItems": 50
          },
          "documents": {
            "type": "array",
            "items": {
              "$ref": "#/components/schemas/CommerceOrderDocumentSummary"
            },
            "minItems": 0,
            "maxItems": 501
          },
          "events": {
            "type": "array",
            "items": {
              "$ref": "#/components/schemas/CommerceOrderEvent"
            },
            "minItems": 0,
            "maxItems": 200
          },
          "allowedActions": {
            "type": "array",
            "items": {
              "type": "string",
              "minLength": 1,
              "maxLength": 100
            },
            "minItems": 0,
            "maxItems": 30
          },
          "exception": {
            "type": "string",
            "minLength": 1,
            "maxLength": 1000
          },
          "hasDispute": {
            "type": "boolean"
          },
          "paidUnfulfillable": {
            "type": "boolean"
          },
          "financialUncertain": {
            "type": "boolean"
          },
          "lineQuantities": {
            "type": "array",
            "minItems": 1,
            "maxItems": 50,
            "items": {
              "type": "object",
              "additionalProperties": false,
              "properties": {
                "productId": {
                  "type": "string",
                  "minLength": 36,
                  "maxLength": 36,
                  "format": "uuid"
                },
                "quantity": {
                  "type": "integer",
                  "minimum": 0,
                  "maximum": 99
                },
                "allocatedQuantity": {
                  "type": "integer",
                  "minimum": 0,
                  "maximum": 99
                },
                "shippedQuantity": {
                  "type": "integer",
                  "minimum": 0,
                  "maximum": 99
                },
                "receivedQuantity": {
                  "type": "integer",
                  "minimum": 0,
                  "maximum": 99
                },
                "restockedQuantity": {
                  "type": "integer",
                  "minimum": 0,
                  "maximum": 99
                }
              },
              "required": [
                "productId",
                "quantity",
                "allocatedQuantity",
                "shippedQuantity",
                "receivedQuantity",
                "restockedQuantity"
              ]
            }
          },
          "refunds": {
            "type": "array",
            "minItems": 0,
            "maxItems": 500,
            "items": {
              "type": "object",
              "additionalProperties": false,
              "properties": {
                "id": {
                  "type": "string",
                  "minLength": 1,
                  "maxLength": 200
                },
                "grossAmount": {
                  "type": "integer",
                  "minimum": 1,
                  "maximum": 99999999
                },
                "status": {
                  "type": "string",
                  "enum": [
                    "pending",
                    "succeeded",
                    "failed"
                  ]
                },
                "allocationComplete": {
                  "type": "boolean"
                },
                "allocation": {
                  "type": "object",
                  "additionalProperties": false,
                  "properties": {
                    "lines": {
                      "type": "array",
                      "items": {
                        "type": "object",
                        "additionalProperties": false,
                        "properties": {
                          "productId": {
                            "type": "string",
                            "minLength": 36,
                            "maxLength": 36,
                            "format": "uuid"
                          },
                          "grossAmount": {
                            "type": "integer",
                            "minimum": 0,
                            "maximum": 99999999
                          }
                        },
                        "required": [
                          "productId",
                          "grossAmount"
                        ]
                      },
                      "minItems": 0,
                      "maxItems": 50
                    },
                    "shippingGross": {
                      "type": "integer",
                      "minimum": 0,
                      "maximum": 99999999
                    }
                  },
                  "required": [
                    "lines",
                    "shippingGross"
                  ]
                }
              },
              "required": [
                "id",
                "grossAmount",
                "status",
                "allocationComplete"
              ]
            }
          },
          "disputes": {
            "type": "array",
            "minItems": 0,
            "maxItems": 500,
            "items": {
              "type": "object",
              "additionalProperties": false,
              "properties": {
                "id": {
                  "type": "string",
                  "minLength": 1,
                  "maxLength": 200
                },
                "grossAmount": {
                  "type": "integer",
                  "minimum": 1,
                  "maximum": 99999999
                },
                "status": {
                  "type": "string",
                  "minLength": 1,
                  "maxLength": 100
                }
              },
              "required": [
                "id",
                "grossAmount",
                "status"
              ]
            }
          },
          "attemptId": {
            "type": "string",
            "minLength": 36,
            "maxLength": 36,
            "format": "uuid"
          }
        },
        "required": [
          "id",
          "orderNumber",
          "createdAt",
          "revision",
          "email",
          "shippingAddress",
          "billingAddress",
          "lines",
          "amounts",
          "fulfillmentStatus",
          "financialStatus",
          "notifications",
          "documents",
          "events",
          "allowedActions",
          "hasDispute",
          "paidUnfulfillable",
          "financialUncertain",
          "lineQuantities",
          "refunds",
          "disputes",
          "attemptId"
        ]
      },
      "CommerceOrderSummary": {
        "type": "object",
        "additionalProperties": false,
        "properties": {
          "id": {
            "type": "string",
            "minLength": 36,
            "maxLength": 36,
            "format": "uuid"
          },
          "orderNumber": {
            "type": "string",
            "minLength": 1,
            "maxLength": 100
          },
          "createdAt": {
            "type": "string",
            "minLength": 20,
            "maxLength": 35,
            "format": "date-time"
          },
          "totalGross": {
            "type": "integer",
            "minimum": 0,
            "maximum": 99999999
          },
          "currency": {
            "type": "string",
            "enum": [
              "EUR"
            ]
          },
          "fulfillmentStatus": {
            "type": "string",
            "enum": [
              "confirmed",
              "processing",
              "shipped",
              "delivered"
            ],
            "nullable": true
          },
          "financialStatus": {
            "type": "string",
            "enum": [
              "paid",
              "partially_refunded",
              "refunded"
            ]
          },
          "exception": {
            "type": "string",
            "minLength": 1,
            "maxLength": 1000
          },
          "hasDispute": {
            "type": "boolean"
          },
          "paidUnfulfillable": {
            "type": "boolean"
          },
          "financialUncertain": {
            "type": "boolean"
          }
        },
        "required": [
          "id",
          "orderNumber",
          "createdAt",
          "totalGross",
          "currency",
          "fulfillmentStatus",
          "financialStatus",
          "hasDispute",
          "paidUnfulfillable",
          "financialUncertain"
        ]
      },
      "CommerceIncident": {
        "type": "object",
        "additionalProperties": false,
        "properties": {
          "id": {
            "type": "string",
            "minLength": 36,
            "maxLength": 36,
            "format": "uuid"
          },
          "entityId": {
            "type": "string",
            "minLength": 36,
            "maxLength": 36,
            "format": "uuid"
          },
          "kind": {
            "type": "string",
            "enum": [
              "attempt",
              "stock",
              "notification",
              "document",
              "configuration",
              "finance",
              "retention"
            ]
          },
          "code": {
            "type": "string",
            "minLength": 1,
            "maxLength": 100
          },
          "since": {
            "type": "string",
            "minLength": 20,
            "maxLength": 35,
            "format": "date-time"
          },
          "nextRetryAt": {
            "type": "string",
            "minLength": 20,
            "maxLength": 35,
            "format": "date-time"
          },
          "requiresAction": {
            "type": "boolean"
          },
          "entityKind": {
            "type": "string",
            "enum": [
              "order",
              "withdrawal",
              "attempt",
              "site"
            ]
          }
        },
        "required": [
          "id",
          "entityId",
          "kind",
          "code",
          "since",
          "requiresAction"
        ]
      },
      "CommerceActionReceipt": {
        "type": "object",
        "additionalProperties": false,
        "properties": {
          "id": {
            "type": "string",
            "minLength": 36,
            "maxLength": 36,
            "format": "uuid"
          },
          "entityId": {
            "type": "string",
            "minLength": 36,
            "maxLength": 36,
            "format": "uuid"
          },
          "status": {
            "type": "string",
            "minLength": 1,
            "maxLength": 100
          },
          "revision": {
            "type": "integer",
            "minimum": 1,
            "maximum": 2147483647
          }
        },
        "required": [
          "id",
          "entityId",
          "status"
        ]
      },
      "CommerceWebhookAck": {
        "type": "object",
        "additionalProperties": false,
        "properties": {
          "received": {
            "type": "boolean"
          },
          "ignored": {
            "type": "boolean"
          }
        },
        "required": [
          "received"
        ]
      },
      "CommerceProductPublicPage": {
        "type": "object",
        "additionalProperties": false,
        "properties": {
          "items": {
            "type": "array",
            "items": {
              "$ref": "#/components/schemas/CommerceProductPublic"
            },
            "minItems": 0,
            "maxItems": 48
          },
          "nextCursor": {
            "type": "string",
            "minLength": 1,
            "maxLength": 1024,
            "nullable": true
          }
        },
        "required": [
          "items",
          "nextCursor"
        ]
      },
      "CommerceProductAdminPage": {
        "type": "object",
        "additionalProperties": false,
        "properties": {
          "items": {
            "type": "array",
            "items": {
              "$ref": "#/components/schemas/CommerceProductAdmin"
            },
            "minItems": 0,
            "maxItems": 48
          },
          "nextCursor": {
            "type": "string",
            "minLength": 1,
            "maxLength": 1024,
            "nullable": true
          }
        },
        "required": [
          "items",
          "nextCursor"
        ]
      },
      "CommerceOrderSummaryPage": {
        "type": "object",
        "additionalProperties": false,
        "properties": {
          "items": {
            "type": "array",
            "items": {
              "$ref": "#/components/schemas/CommerceOrderSummary"
            },
            "minItems": 0,
            "maxItems": 48
          },
          "nextCursor": {
            "type": "string",
            "minLength": 1,
            "maxLength": 1024,
            "nullable": true
          }
        },
        "required": [
          "items",
          "nextCursor"
        ]
      },
      "CommerceWithdrawalAdminPage": {
        "type": "object",
        "additionalProperties": false,
        "properties": {
          "items": {
            "type": "array",
            "items": {
              "$ref": "#/components/schemas/CommerceWithdrawalAdmin"
            },
            "minItems": 0,
            "maxItems": 48
          },
          "nextCursor": {
            "type": "string",
            "minLength": 1,
            "maxLength": 1024,
            "nullable": true
          }
        },
        "required": [
          "items",
          "nextCursor"
        ]
      },
      "CommerceLegalDocumentPage": {
        "type": "object",
        "additionalProperties": false,
        "properties": {
          "items": {
            "type": "array",
            "items": {
              "$ref": "#/components/schemas/CommerceLegalDocument"
            },
            "minItems": 0,
            "maxItems": 48
          },
          "nextCursor": {
            "type": "string",
            "minLength": 1,
            "maxLength": 1024,
            "nullable": true
          }
        },
        "required": [
          "items",
          "nextCursor"
        ]
      },
      "CommerceIncidentPage": {
        "type": "object",
        "additionalProperties": false,
        "properties": {
          "items": {
            "type": "array",
            "items": {
              "$ref": "#/components/schemas/CommerceIncident"
            },
            "minItems": 0,
            "maxItems": 48
          },
          "nextCursor": {
            "type": "string",
            "minLength": 1,
            "maxLength": 1024,
            "nullable": true
          }
        },
        "required": [
          "items",
          "nextCursor"
        ]
      },
      "CommerceCountryAddressRule": {
        "type": "object",
        "additionalProperties": false,
        "properties": {
          "postalCodeRequired": {
            "type": "boolean"
          },
          "regionRequired": {
            "type": "boolean"
          }
        },
        "required": [
          "postalCodeRequired",
          "regionRequired"
        ]
      },
      "CommerceCheckoutOptions": {
        "type": "object",
        "additionalProperties": false,
        "properties": {
          "destinations": {
            "type": "array",
            "items": {
              "type": "string",
              "pattern": "^[A-Z]{2}$"
            },
            "maxItems": 249
          },
          "addressRules": {
            "type": "object",
            "maxProperties": 249,
            "patternProperties": {
              "^[A-Z]{2}$": {
                "$ref": "#/components/schemas/CommerceCountryAddressRule"
              }
            },
            "additionalProperties": false
          },
          "phoneRequiredCountries": {
            "type": "array",
            "items": {
              "type": "string",
              "pattern": "^[A-Z]{2}$"
            },
            "maxItems": 249
          }
        },
        "required": [
          "destinations",
          "addressRules",
          "phoneRequiredCountries"
        ]
      },
      "CommerceOrderConfirmation": {
        "type": "object",
        "additionalProperties": false,
        "properties": {
          "orderNumber": {
            "type": "string",
            "pattern": "^[A-Z2-7]{20}$"
          },
          "createdAt": {
            "type": "string",
            "format": "date-time"
          },
          "fulfillmentStatus": {
            "type": "string",
            "enum": [
              "confirmed",
              "processing",
              "shipped",
              "delivered"
            ],
            "nullable": true
          },
          "paidUnfulfillable": {
            "type": "boolean"
          },
          "lines": {
            "type": "array",
            "minItems": 1,
            "maxItems": 50,
            "items": {
              "$ref": "#/components/schemas/CommerceQuoteLine"
            }
          },
          "amounts": {
            "$ref": "#/components/schemas/CommerceMoneyBreakdown"
          },
          "documents": {
            "type": "array",
            "maxItems": 501,
            "items": {
              "$ref": "#/components/schemas/CommerceOrderDocumentSummary"
            }
          }
        },
        "required": [
          "orderNumber",
          "createdAt",
          "fulfillmentStatus",
          "paidUnfulfillable",
          "lines",
          "amounts",
          "documents"
        ]
      },
      "CommerceMockConfirmInput": {
        "type": "object",
        "additionalProperties": false,
        "properties": {
          "outcome": {
            "type": "string",
            "enum": [
              "paid",
              "declined"
            ]
          }
        },
        "required": [
          "outcome"
        ]
      },
      "CommerceCancelAttemptInput": {
        "type": "object",
        "additionalProperties": false,
        "properties": {
          "reason": {
            "type": "string",
            "enum": [
              "edit_checkout",
              "customer_cancel"
            ]
          }
        },
        "required": [
          "reason"
        ]
      },
      "CommerceAdminAdjustInventoryInput": {
        "type": "object",
        "additionalProperties": false,
        "properties": {
          "delta": {
            "type": "integer",
            "minimum": -2147483647,
            "maximum": 2147483647
          },
          "reason": {
            "type": "string",
            "minLength": 1,
            "maxLength": 2000
          },
          "expectedRevision": {
            "type": "integer",
            "minimum": 1,
            "maximum": 2147483647
          }
        },
        "required": [
          "delta",
          "reason",
          "expectedRevision"
        ]
      },
      "CommerceAdminTransitionOrderInput": {
        "type": "object",
        "additionalProperties": false,
        "properties": {
          "target": {
            "type": "string",
            "enum": [
              "processing",
              "shipped",
              "delivered"
            ]
          },
          "shipment": {
            "$ref": "#/components/schemas/CommerceShipmentInput"
          },
          "expectedRevision": {
            "type": "integer",
            "minimum": 1,
            "maximum": 2147483647
          }
        },
        "required": [
          "target",
          "expectedRevision"
        ]
      },
      "CommerceAdminCorrectOrderInput": {
        "type": "object",
        "additionalProperties": false,
        "properties": {
          "target": {
            "type": "string",
            "enum": [
              "confirmed",
              "processing",
              "shipped",
              "delivered"
            ]
          },
          "expectedRevision": {
            "type": "integer",
            "minimum": 1,
            "maximum": 2147483647
          },
          "reason": {
            "type": "string",
            "minLength": 1,
            "maxLength": 2000
          }
        },
        "required": [
          "target",
          "expectedRevision",
          "reason"
        ]
      },
      "CommerceAdminCancelOrderInput": {
        "type": "object",
        "additionalProperties": false,
        "properties": {
          "expectedRevision": {
            "type": "integer",
            "minimum": 1,
            "maximum": 2147483647
          },
          "reason": {
            "type": "string",
            "minLength": 1,
            "maxLength": 2000
          }
        },
        "required": [
          "expectedRevision",
          "reason"
        ]
      },
      "CommerceAdminRetryAllocationInput": {
        "type": "object",
        "additionalProperties": false,
        "properties": {
          "expectedRevision": {
            "type": "integer",
            "minimum": 1,
            "maximum": 2147483647
          }
        },
        "required": [
          "expectedRevision"
        ]
      },
      "CommerceAdminRecordReturnInput": {
        "type": "object",
        "additionalProperties": false,
        "properties": {
          "lines": {
            "type": "array",
            "items": {
              "type": "object",
              "additionalProperties": false,
              "properties": {
                "productId": {
                  "type": "string",
                  "minLength": 36,
                  "maxLength": 36,
                  "format": "uuid"
                },
                "receivedQuantity": {
                  "type": "integer",
                  "minimum": 0,
                  "maximum": 99
                },
                "restockedQuantity": {
                  "type": "integer",
                  "minimum": 0,
                  "maximum": 99
                }
              },
              "required": [
                "productId",
                "receivedQuantity",
                "restockedQuantity"
              ]
            },
            "minItems": 1,
            "maxItems": 50
          },
          "expectedRevision": {
            "type": "integer",
            "minimum": 1,
            "maximum": 2147483647
          },
          "reason": {
            "type": "string",
            "minLength": 1,
            "maxLength": 2000
          }
        },
        "required": [
          "lines",
          "expectedRevision",
          "reason"
        ]
      },
      "CommerceAdminAllocateRefundInput": {
        "type": "object",
        "additionalProperties": false,
        "properties": {
          "refundId": {
            "type": "string",
            "minLength": 1,
            "maxLength": 200
          },
          "lines": {
            "type": "array",
            "items": {
              "type": "object",
              "additionalProperties": false,
              "properties": {
                "productId": {
                  "type": "string",
                  "minLength": 36,
                  "maxLength": 36,
                  "format": "uuid"
                },
                "grossAmount": {
                  "type": "integer",
                  "minimum": 0,
                  "maximum": 99999999
                }
              },
              "required": [
                "productId",
                "grossAmount"
              ]
            },
            "minItems": 0,
            "maxItems": 50
          },
          "shippingGross": {
            "type": "integer",
            "minimum": 0,
            "maximum": 99999999
          },
          "expectedRevision": {
            "type": "integer",
            "minimum": 1,
            "maximum": 2147483647
          },
          "reason": {
            "type": "string",
            "minLength": 1,
            "maxLength": 2000
          }
        },
        "required": [
          "refundId",
          "lines",
          "shippingGross",
          "expectedRevision",
          "reason"
        ]
      },
      "CommerceAdminRetryNotificationInput": {
        "type": "object",
        "additionalProperties": false,
        "properties": {
          "confirmed": {
            "type": "boolean",
            "enum": [
              true
            ]
          },
          "reason": {
            "type": "string",
            "minLength": 1,
            "maxLength": 2000
          }
        },
        "required": [
          "confirmed",
          "reason"
        ]
      },
      "CommerceAdminUpdateWithdrawalInput": {
        "type": "object",
        "additionalProperties": false,
        "properties": {
          "status": {
            "type": "string",
            "enum": [
              "received",
              "reviewing",
              "resolved"
            ]
          },
          "note": {
            "type": "string",
            "minLength": 0,
            "maxLength": 4000
          }
        },
        "required": [
          "status",
          "note"
        ]
      },
      "CommerceAdminPublishLegalDocumentInput": {
        "type": "object",
        "additionalProperties": false,
        "properties": {
          "expectedRevision": {
            "type": "integer",
            "minimum": 1,
            "maximum": 2147483647
          },
          "sellerValidated": {
            "type": "boolean",
            "enum": [
              true
            ]
          }
        },
        "required": [
          "expectedRevision",
          "sellerValidated"
        ]
      },
      "CommerceAdminReconcileAttemptInput": {
        "type": "object",
        "additionalProperties": false,
        "properties": {
          "reason": {
            "type": "string",
            "minLength": 1,
            "maxLength": 2000
          }
        },
        "required": [
          "reason"
        ]
      },
      "CommerceStripeWebhookInput": {
        "type": "string",
        "format": "binary",
        "description": "Exact raw body, signature verified before JSON parsing"
      },
      "CommerceDeliveryCalendar": {
        "type": "object",
        "additionalProperties": false,
        "properties": {
          "timeZone": {
            "type": "string",
            "minLength": 1,
            "maxLength": 100
          },
          "workingDays": {
            "type": "array",
            "items": {
              "type": "integer",
              "minimum": 1,
              "maximum": 7
            },
            "maxItems": 7,
            "minItems": 1,
            "uniqueItems": true
          },
          "cutoff": {
            "type": "string",
            "pattern": "^(?:[01][0-9]|2[0-3]):[0-5][0-9]$"
          },
          "holidayRegion": {
            "type": "string",
            "enum": [
              "fr-metropole",
              "none"
            ]
          },
          "extraClosedDates": {
            "type": "array",
            "items": {
              "type": "string",
              "format": "date"
            },
            "maxItems": 1000,
            "uniqueItems": true
          }
        },
        "required": [
          "timeZone",
          "workingDays",
          "cutoff",
          "holidayRegion",
          "extraClosedDates"
        ]
      },
      "CommerceDeliveryZone": {
        "type": "object",
        "additionalProperties": false,
        "properties": {
          "id": {
            "type": "string",
            "format": "uuid"
          },
          "active": {
            "type": "boolean"
          },
          "countries": {
            "type": "array",
            "items": {
              "type": "string",
              "pattern": "^[A-Z]{2}$"
            },
            "maxItems": 250,
            "uniqueItems": true,
            "minItems": 1
          },
          "label": {
            "type": "object",
            "additionalProperties": false,
            "patternProperties": {
              "^[a-z]{2,3}(?:-[A-Za-z0-9]{2,8})*$": {
                "type": "string",
                "minLength": 1,
                "maxLength": 200
              }
            },
            "minProperties": 1
          },
          "grossAmount": {
            "type": "integer",
            "minimum": 0,
            "maximum": 99999999
          },
          "phoneRequired": {
            "type": "boolean"
          },
          "importDisclosure": {
            "type": "object",
            "additionalProperties": {
              "type": "string",
              "maxLength": 4000
            }
          },
          "leadTimeHours": {
            "type": "integer",
            "minimum": 0,
            "maximum": 8760
          }
        },
        "required": [
          "id",
          "active",
          "countries",
          "label",
          "grossAmount",
          "phoneRequired",
          "importDisclosure"
        ]
      },
      "CommerceDeliveryMethodInput": {
        "type": "object",
        "additionalProperties": false,
        "properties": {
          "label": {
            "type": "object",
            "additionalProperties": false,
            "patternProperties": {
              "^[a-z]{2,3}(?:-[A-Za-z0-9]{2,8})*$": {
                "type": "string",
                "minLength": 1,
                "maxLength": 200
              }
            },
            "minProperties": 1
          },
          "active": {
            "type": "boolean"
          },
          "leadTimeHours": {
            "type": "integer",
            "minimum": 0,
            "maximum": 8760
          },
          "calendar": {
            "$ref": "#/components/schemas/CommerceDeliveryCalendar"
          },
          "zones": {
            "type": "array",
            "items": {
              "$ref": "#/components/schemas/CommerceDeliveryZone"
            },
            "maxItems": 100
          }
        },
        "required": [
          "label",
          "active",
          "leadTimeHours",
          "calendar",
          "zones"
        ]
      },
      "CommerceDeliveryMethod": {
        "type": "object",
        "additionalProperties": false,
        "properties": {
          "label": {
            "type": "object",
            "additionalProperties": false,
            "patternProperties": {
              "^[a-z]{2,3}(?:-[A-Za-z0-9]{2,8})*$": {
                "type": "string",
                "minLength": 1,
                "maxLength": 200
              }
            },
            "minProperties": 1
          },
          "active": {
            "type": "boolean"
          },
          "leadTimeHours": {
            "type": "integer",
            "minimum": 0,
            "maximum": 8760
          },
          "calendar": {
            "$ref": "#/components/schemas/CommerceDeliveryCalendar"
          },
          "zones": {
            "type": "array",
            "items": {
              "$ref": "#/components/schemas/CommerceDeliveryZone"
            },
            "maxItems": 100
          },
          "id": {
            "type": "string",
            "format": "uuid"
          },
          "revision": {
            "type": "integer",
            "minimum": 1
          },
          "legacyRates": {
            "type": "boolean"
          },
          "qualified": {
            "type": "boolean"
          },
          "archived": {
            "type": "boolean"
          },
          "createdAt": {
            "type": "string",
            "format": "date-time"
          },
          "updatedAt": {
            "type": "string",
            "format": "date-time"
          }
        },
        "required": [
          "label",
          "active",
          "leadTimeHours",
          "calendar",
          "zones",
          "id",
          "revision",
          "legacyRates",
          "qualified",
          "archived",
          "createdAt",
          "updatedAt"
        ]
      },
      "CommerceDeliveryMethods": {
        "type": "object",
        "additionalProperties": false,
        "properties": {
          "items": {
            "type": "array",
            "items": {
              "$ref": "#/components/schemas/CommerceDeliveryMethod"
            },
            "maxItems": 100
          }
        },
        "required": [
          "items"
        ]
      },
      "CommercePickupSettingsInput": {
        "type": "object",
        "additionalProperties": false,
        "properties": {
          "label": {
            "type": "object",
            "additionalProperties": false,
            "patternProperties": {
              "^[a-z]{2,3}(?:-[A-Za-z0-9]{2,8})*$": {
                "type": "string",
                "minLength": 1,
                "maxLength": 200
              }
            },
            "minProperties": 1
          },
          "address": {
            "$ref": "#/components/schemas/CommerceAddress"
          },
          "leadTimeHours": {
            "type": "integer",
            "minimum": 0,
            "maximum": 8760
          },
          "calendar": {
            "$ref": "#/components/schemas/CommerceDeliveryCalendar"
          }
        },
        "required": [
          "label",
          "address",
          "leadTimeHours",
          "calendar"
        ]
      },
      "CommercePickupSettings": {
        "type": "object",
        "additionalProperties": false,
        "properties": {
          "settings": {
            "$ref": "#/components/schemas/CommercePickupDraftSettings"
          },
          "revision": {
            "type": "integer",
            "minimum": 0
          }
        },
        "required": [
          "settings",
          "revision"
        ]
      },
      "CommerceDeliveryCapabilities": {
        "type": "object",
        "additionalProperties": false,
        "properties": {
          "supported": {
            "type": "boolean"
          },
          "enabled": {
            "type": "boolean"
          },
          "calendarDefaults": {
            "$ref": "#/components/schemas/CommerceDeliveryCalendar"
          }
        },
        "required": [
          "supported",
          "enabled",
          "calendarDefaults"
        ]
      },
      "CommerceProductDeliveryPolicy": {
        "type": "object",
        "additionalProperties": false,
        "properties": {
          "productId": {
            "type": "string",
            "format": "uuid"
          },
          "revision": {
            "type": "integer",
            "minimum": 0
          },
          "allowedMethodIds": {
            "type": "array",
            "items": {
              "type": "string",
              "format": "uuid"
            },
            "maxItems": 100,
            "uniqueItems": true
          },
          "pickupAvailable": {
            "const": true
          }
        },
        "required": [
          "productId",
          "revision",
          "allowedMethodIds",
          "pickupAvailable"
        ]
      },
      "CommerceProductDeliveryPatch": {
        "type": "object",
        "additionalProperties": false,
        "properties": {
          "allowedMethodIds": {
            "type": "array",
            "items": {
              "type": "string",
              "format": "uuid"
            },
            "maxItems": 100,
            "uniqueItems": true
          },
          "expectedPolicyRevision": {
            "type": "integer",
            "minimum": 0
          }
        },
        "required": [
          "allowedMethodIds",
          "expectedPolicyRevision"
        ]
      },
      "CommerceDeliveryProduct": {
        "type": "object",
        "additionalProperties": false,
        "properties": {
          "product": {
            "$ref": "#/components/schemas/CommerceProductAdmin"
          },
          "delivery": {
            "$ref": "#/components/schemas/CommerceProductDeliveryPolicy"
          },
          "methods": {
            "type": "array",
            "items": {
              "$ref": "#/components/schemas/CommerceDeliveryMethod"
            },
            "maxItems": 100
          }
        },
        "required": [
          "product",
          "delivery",
          "methods"
        ]
      },
      "CommerceDeliveryProductCreate": {
        "type": "object",
        "additionalProperties": false,
        "properties": {
          "product": {
            "$ref": "#/components/schemas/CommerceProductCreate"
          },
          "allowedMethodIds": {
            "type": "array",
            "items": {
              "type": "string",
              "format": "uuid"
            },
            "maxItems": 100,
            "uniqueItems": true
          }
        },
        "required": [
          "product",
          "allowedMethodIds"
        ]
      },
      "CommerceDeliveryProductPatch": {
        "type": "object",
        "additionalProperties": false,
        "properties": {
          "product": {
            "$ref": "#/components/schemas/CommerceProductPatch"
          },
          "delivery": {
            "$ref": "#/components/schemas/CommerceProductDeliveryPatch"
          }
        },
        "required": [
          "product",
          "delivery"
        ]
      },
      "CommerceDeliveryEstimate": {
        "type": "object",
        "additionalProperties": false,
        "properties": {
          "date": {
            "type": "string",
            "format": "date"
          },
          "cutoffAt": {
            "type": "string",
            "format": "date-time"
          },
          "estimatedAt": {
            "type": "string",
            "format": "date-time"
          },
          "timeZone": {
            "type": "string"
          },
          "leadTimeHours": {
            "type": "integer",
            "minimum": 0
          },
          "calendarFingerprint": {
            "type": "string",
            "pattern": "^[0-9a-f]{64}$"
          }
        },
        "required": [
          "date",
          "cutoffAt",
          "estimatedAt",
          "timeZone",
          "leadTimeHours",
          "calendarFingerprint"
        ]
      },
      "CommerceDeliveryGroup": {
        "type": "object",
        "additionalProperties": false,
        "properties": {
          "id": {
            "type": "string",
            "minLength": 1,
            "maxLength": 100
          },
          "methodId": {
            "type": "string",
            "minLength": 1,
            "maxLength": 100
          },
          "label": {
            "type": "string"
          },
          "zoneId": {
            "type": [
              "string",
              "null"
            ],
            "format": "uuid"
          },
          "items": {
            "type": "array",
            "items": {
              "$ref": "#/components/schemas/CommerceCartLineInput"
            },
            "maxItems": 50
          },
          "grossAmount": {
            "type": "integer",
            "minimum": 0
          },
          "estimate": {
            "$ref": "#/components/schemas/CommerceDeliveryEstimate"
          },
          "phoneRequired": {
            "type": "boolean"
          },
          "importDisclosure": {
            "type": "string"
          },
          "productTitles": {
            "type": "object",
            "additionalProperties": {
              "type": "string",
              "maxLength": 200
            }
          },
          "alternatives": {
            "type": "array",
            "items": {
              "type": "object",
              "additionalProperties": false,
              "properties": {
                "methodId": {
                  "type": "string",
                  "format": "uuid"
                },
                "label": {
                  "type": "string"
                },
                "grossAmount": {
                  "type": "integer",
                  "minimum": 0
                },
                "estimate": {
                  "$ref": "#/components/schemas/CommerceDeliveryEstimate"
                }
              },
              "required": [
                "methodId",
                "label",
                "grossAmount",
                "estimate"
              ]
            },
            "maxItems": 100
          }
        },
        "required": [
          "id",
          "methodId",
          "label",
          "zoneId",
          "items",
          "grossAmount",
          "estimate",
          "phoneRequired",
          "importDisclosure",
          "productTitles",
          "alternatives"
        ]
      },
      "CommerceDeliveryPlanInput": {
        "type": "object",
        "additionalProperties": false,
        "properties": {
          "items": {
            "type": "array",
            "items": {
              "$ref": "#/components/schemas/CommerceCartLineInput"
            },
            "maxItems": 50
          },
          "locale": {
            "type": "string"
          },
          "country": {
            "type": "string",
            "pattern": "^[A-Z]{2}$"
          },
          "mode": {
            "type": "string",
            "enum": [
              "shipping",
              "pickup"
            ]
          },
          "selections": {
            "type": "array",
            "items": {
              "type": "object",
              "additionalProperties": false,
              "properties": {
                "groupId": {
                  "type": "string",
                  "maxLength": 100
                },
                "methodId": {
                  "type": "string",
                  "format": "uuid"
                }
              },
              "required": [
                "groupId",
                "methodId"
              ]
            },
            "maxItems": 50
          }
        },
        "required": [
          "items",
          "locale"
        ]
      },
      "CommerceDeliveryPlan": {
        "type": "object",
        "additionalProperties": false,
        "properties": {
          "mode": {
            "type": "string",
            "enum": [
              "shipping",
              "pickup"
            ]
          },
          "pickupOnly": {
            "type": "boolean"
          },
          "separateShipments": {
            "type": "boolean"
          },
          "groups": {
            "type": "array",
            "items": {
              "$ref": "#/components/schemas/CommerceDeliveryGroup"
            },
            "maxItems": 50
          },
          "shippingGross": {
            "type": "integer",
            "minimum": 0
          },
          "fingerprint": {
            "type": "string",
            "pattern": "^[0-9a-f]{64}$"
          },
          "shippingRevision": {
            "type": "integer",
            "minimum": 0
          },
          "pickupAddress": {
            "anyOf": [
              {
                "$ref": "#/components/schemas/CommerceAddress"
              },
              {
                "type": "null"
              }
            ]
          },
          "calculatedAt": {
            "type": "string",
            "format": "date-time"
          }
        },
        "required": [
          "mode",
          "pickupOnly",
          "separateShipments",
          "groups",
          "shippingGross",
          "fingerprint",
          "shippingRevision",
          "pickupAddress",
          "calculatedAt"
        ]
      },
      "CommerceDeliveryQuoteInput": {
        "type": "object",
        "additionalProperties": false,
        "properties": {
          "checkout": {
            "$ref": "#/components/schemas/CommerceQuoteInput"
          },
          "delivery": {
            "$ref": "#/components/schemas/CommerceDeliveryPlanInput"
          }
        },
        "required": [
          "checkout",
          "delivery"
        ]
      },
      "CommerceDeliveryQuote": {
        "type": "object",
        "additionalProperties": false,
        "properties": {
          "quote": {
            "$ref": "#/components/schemas/CommerceQuote"
          },
          "delivery": {
            "$ref": "#/components/schemas/CommerceDeliveryPlan"
          }
        },
        "required": [
          "quote",
          "delivery"
        ]
      },
      "CommerceDeliveryFulfillmentEvent": {
        "type": "object",
        "additionalProperties": false,
        "properties": {
          "groupId": {
            "type": "string",
            "maxLength": 100
          },
          "action": {
            "type": "string",
            "enum": [
              "shipped",
              "delivered",
              "collected"
            ]
          },
          "at": {
            "type": "string",
            "format": "date-time"
          },
          "shipment": {
            "$ref": "#/components/schemas/CommerceShipmentInput"
          }
        },
        "required": [
          "groupId",
          "action",
          "at"
        ]
      },
      "CommerceDeliveryOrder": {
        "type": "object",
        "additionalProperties": false,
        "properties": {
          "order": {
            "$ref": "#/components/schemas/CommerceAdminOrder"
          },
          "delivery": {
            "anyOf": [
              {
                "$ref": "#/components/schemas/CommerceDeliveryPlan"
              },
              {
                "type": "null"
              }
            ]
          },
          "events": {
            "type": "array",
            "items": {
              "$ref": "#/components/schemas/CommerceDeliveryFulfillmentEvent"
            },
            "maxItems": 100
          }
        },
        "required": [
          "order",
          "delivery",
          "events"
        ]
      },
      "CommerceDeliveryFulfillmentInput": {
        "type": "object",
        "additionalProperties": false,
        "properties": {
          "groupId": {
            "type": "string",
            "maxLength": 100
          },
          "action": {
            "type": "string",
            "enum": [
              "shipped",
              "delivered",
              "collected"
            ]
          },
          "shipment": {
            "$ref": "#/components/schemas/CommerceShipmentInput"
          },
          "expectedRevision": {
            "type": "integer",
            "minimum": 1
          }
        },
        "required": [
          "groupId",
          "action",
          "expectedRevision"
        ]
      },
      "CommerceDeliveryTracking": {
        "type": "object",
        "additionalProperties": false,
        "properties": {
          "order": {
            "$ref": "#/components/schemas/CommerceOrderTracking"
          },
          "delivery": {
            "anyOf": [
              {
                "$ref": "#/components/schemas/CommerceDeliveryPlan"
              },
              {
                "type": "null"
              }
            ]
          },
          "events": {
            "type": "array",
            "items": {
              "$ref": "#/components/schemas/CommerceDeliveryFulfillmentEvent"
            },
            "maxItems": 100
          }
        },
        "required": [
          "order",
          "delivery",
          "events"
        ]
      },
      "CommercePickupDraftAddress": {
        "type": "object",
        "additionalProperties": false,
        "properties": {
          "fullName": {
            "type": "string",
            "minLength": 0,
            "maxLength": 200
          },
          "line1": {
            "type": "string",
            "minLength": 0,
            "maxLength": 250
          },
          "line2": {
            "type": "string",
            "minLength": 0,
            "maxLength": 250
          },
          "locality": {
            "type": "string",
            "minLength": 0,
            "maxLength": 150
          },
          "region": {
            "type": "string",
            "minLength": 0,
            "maxLength": 150
          },
          "postalCode": {
            "type": "string",
            "minLength": 0,
            "maxLength": 32
          },
          "country": {
            "type": "string",
            "minLength": 0,
            "maxLength": 2,
            "pattern": "^(?:[A-Z]{2})?$"
          },
          "phone": {
            "type": "string",
            "minLength": 0,
            "maxLength": 40
          }
        },
        "required": [
          "fullName",
          "line1",
          "locality",
          "country"
        ]
      },
      "CommercePickupDraftSettings": {
        "type": "object",
        "additionalProperties": false,
        "properties": {
          "label": {
            "type": "object",
            "additionalProperties": false,
            "patternProperties": {
              "^[a-z]{2,3}(?:-[A-Za-z0-9]{2,8})*$": {
                "type": "string",
                "minLength": 1,
                "maxLength": 200
              }
            },
            "minProperties": 1
          },
          "address": {
            "$ref": "#/components/schemas/CommercePickupDraftAddress"
          },
          "leadTimeHours": {
            "type": "integer",
            "minimum": 0,
            "maximum": 8760
          },
          "calendar": {
            "$ref": "#/components/schemas/CommerceDeliveryCalendar"
          }
        },
        "required": [
          "label",
          "address",
          "leadTimeHours",
          "calendar"
        ]
      }
    },
    "parameters": {
      "CommerceLocale": {
        "name": "locale",
        "in": "query",
        "required": true,
        "schema": {
          "type": "string",
          "minLength": 2,
          "maxLength": 35,
          "pattern": "^[a-z]{2,3}(?:-[A-Za-z0-9]{2,8})*$"
        }
      },
      "CommerceCursor": {
        "name": "cursor",
        "in": "query",
        "schema": {
          "type": "string",
          "minLength": 1,
          "maxLength": 1024
        }
      },
      "CommerceLimit": {
        "name": "limit",
        "in": "query",
        "schema": {
          "type": "integer",
          "minimum": 1,
          "maximum": 48,
          "default": 24
        }
      },
      "CommerceIdempotency": {
        "name": "Idempotency-Key",
        "in": "header",
        "required": true,
        "schema": {
          "type": "string",
          "minLength": 36,
          "maxLength": 36,
          "format": "uuid"
        }
      },
      "CommerceRevision": {
        "name": "If-Match",
        "in": "header",
        "required": true,
        "schema": {
          "type": "string",
          "minLength": 3,
          "maxLength": 150,
          "pattern": "^\"(?:0|[1-9][0-9]*)\"$"
        }
      },
      "CommerceCapability": {
        "name": "x-commerce-capability",
        "in": "header",
        "required": true,
        "schema": {
          "type": "string",
          "minLength": 43,
          "maxLength": 128
        }
      },
      "CommerceAdminSession": {
        "name": "x-admin-session",
        "in": "header",
        "required": true,
        "schema": {
          "type": "string",
          "minLength": 1,
          "maxLength": 8192
        }
      },
      "CommerceCSRF": {
        "name": "x-csrf-token",
        "in": "header",
        "required": true,
        "schema": {
          "type": "string",
          "minLength": 1,
          "maxLength": 200
        }
      },
      "CommerceVisitorIP": {
        "name": "X-Commerce-Visitor-IP",
        "in": "header",
        "required": true,
        "schema": {
          "type": "string",
          "minLength": 2,
          "maxLength": 45
        },
        "description": "Trusted ingress address relayed only by the authenticated Commerce BFF. Never taken from a browser value."
      }
    },
    "securitySchemes": {
      "CommerceServiceKey": {
        "type": "apiKey",
        "in": "header",
        "name": "x-commerce-key"
      },
      "CommerceAdminKey": {
        "type": "apiKey",
        "in": "header",
        "name": "x-bff-key"
      },
      "CommerceStripeSignature": {
        "type": "apiKey",
        "in": "header",
        "name": "Stripe-Signature"
      }
    }
  }
} as const;
