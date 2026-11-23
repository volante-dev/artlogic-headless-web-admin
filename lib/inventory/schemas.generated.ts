// Generated from Inventory033 by backend/scripts/generate-contracts.ts. Do not edit.
export const inventorySchemaDocument={
  "$id": "urn:artlogic:inventory:http:v1",
  "components": {
    "schemas": {
      "InventoryUUID": {
        "type": "string",
        "format": "uuid"
      },
      "InventoryRevision": {
        "type": "string",
        "pattern": "^[1-9][0-9]*$",
        "maxLength": 20
      },
      "InventoryReference": {
        "type": "string",
        "minLength": 1,
        "maxLength": 128
      },
      "InventoryLocalizedText": {
        "type": "object",
        "minProperties": 1,
        "maxProperties": 8,
        "propertyNames": {
          "pattern": "^[a-z]{2,3}(?:-[A-Za-z0-9]{2,8})*$"
        },
        "additionalProperties": {
          "type": "string",
          "maxLength": 5000
        }
      },
      "InventoryE_LocalizedRichText": {
        "type": "object",
        "minProperties": 1,
        "maxProperties": 8,
        "patternProperties": {
          "^[a-z]{2,3}(?:-[A-Za-z0-9]{2,8})*$": {
            "$ref": "#/components/schemas/InventoryE_RichText"
          }
        },
        "additionalProperties": false
      },
      "InventoryE_RichText": {
        "type": "object",
        "additionalProperties": false,
        "properties": {
          "type": {
            "const": "doc"
          },
          "content": {
            "type": "array",
            "items": {
              "$ref": "#/components/schemas/InventoryE_RichNode"
            },
            "maxItems": 10000
          }
        },
        "required": [
          "type",
          "content"
        ]
      },
      "InventoryE_RichNode": {
        "oneOf": [
          {
            "type": "object",
            "additionalProperties": false,
            "properties": {
              "type": {
                "const": "text"
              },
              "text": {
                "type": "string",
                "minLength": 1,
                "maxLength": 131072
              },
              "marks": {
                "type": "array",
                "items": {
                  "$ref": "#/components/schemas/InventoryE_RichMark"
                },
                "maxItems": 3
              }
            },
            "required": [
              "type",
              "text"
            ]
          },
          {
            "type": "object",
            "additionalProperties": false,
            "properties": {
              "type": {
                "const": "heading"
              },
              "attrs": {
                "type": "object",
                "additionalProperties": false,
                "properties": {
                  "level": {
                    "enum": [
                      2,
                      3
                    ]
                  }
                },
                "required": [
                  "level"
                ]
              },
              "content": {
                "type": "array",
                "items": {
                  "$ref": "#/components/schemas/InventoryE_RichNode"
                },
                "maxItems": 10000
              }
            },
            "required": [
              "type",
              "attrs"
            ]
          },
          {
            "type": "object",
            "additionalProperties": false,
            "properties": {
              "type": {
                "enum": [
                  "paragraph",
                  "bulletList",
                  "orderedList",
                  "listItem",
                  "blockquote"
                ]
              },
              "content": {
                "type": "array",
                "items": {
                  "$ref": "#/components/schemas/InventoryE_RichNode"
                },
                "maxItems": 10000
              }
            },
            "required": [
              "type"
            ]
          },
          {
            "type": "object",
            "additionalProperties": false,
            "properties": {
              "type": {
                "const": "hardBreak"
              }
            },
            "required": [
              "type"
            ]
          }
        ]
      },
      "InventoryE_RichMark": {
        "oneOf": [
          {
            "type": "object",
            "additionalProperties": false,
            "properties": {
              "type": {
                "enum": [
                  "bold",
                  "italic"
                ]
              }
            },
            "required": [
              "type"
            ]
          },
          {
            "type": "object",
            "additionalProperties": false,
            "properties": {
              "type": {
                "const": "link"
              },
              "attrs": {
                "type": "object",
                "additionalProperties": false,
                "properties": {
                  "href": {
                    "type": "string",
                    "maxLength": 2048,
                    "pattern": "^(?:https://|/(?!/)|#|mailto:|tel:)"
                  }
                },
                "required": [
                  "href"
                ]
              }
            },
            "required": [
              "type",
              "attrs"
            ]
          }
        ]
      },
      "InventoryMoney": {
        "type": "object",
        "additionalProperties": false,
        "properties": {
          "minor": {
            "type": "string",
            "pattern": "^(0|[1-9][0-9]{0,37})$"
          },
          "currency": {
            "type": "string",
            "pattern": "^[A-Z]{3}$"
          },
          "scale": {
            "type": "integer",
            "minimum": 0,
            "maximum": 8
          }
        },
        "required": [
          "minor",
          "currency",
          "scale"
        ]
      },
      "InventoryMediaSelection": {
        "type": "object",
        "additionalProperties": false,
        "properties": {
          "mediaId": {
            "type": "string",
            "format": "uuid"
          },
          "visibility": {
            "type": "string",
            "enum": [
              "internal",
              "public_candidate"
            ]
          },
          "position": {
            "type": "integer",
            "minimum": 0
          },
          "primary": {
            "type": "boolean"
          },
          "alt": {
            "type": "object",
            "minProperties": 1,
            "maxProperties": 8,
            "propertyNames": {
              "pattern": "^[a-z]{2,3}(?:-[A-Za-z0-9]{2,8})*$"
            },
            "additionalProperties": {
              "type": "string",
              "maxLength": 5000
            }
          },
          "caption": {
            "type": "object",
            "minProperties": 1,
            "maxProperties": 8,
            "propertyNames": {
              "pattern": "^[a-z]{2,3}(?:-[A-Za-z0-9]{2,8})*$"
            },
            "additionalProperties": {
              "type": "string",
              "maxLength": 5000
            }
          },
          "credit": {
            "type": "object",
            "minProperties": 1,
            "maxProperties": 8,
            "propertyNames": {
              "pattern": "^[a-z]{2,3}(?:-[A-Za-z0-9]{2,8})*$"
            },
            "additionalProperties": {
              "type": "string",
              "maxLength": 5000
            }
          },
          "focus": {
            "type": "object",
            "additionalProperties": false,
            "properties": {
              "x": {
                "type": "number",
                "minimum": 0,
                "maximum": 1
              },
              "y": {
                "type": "number",
                "minimum": 0,
                "maximum": 1
              }
            },
            "required": [
              "x",
              "y"
            ]
          }
        },
        "required": [
          "mediaId",
          "visibility",
          "position",
          "primary"
        ]
      },
      "InventoryWorkDraft": {
        "type": "object",
        "additionalProperties": false,
        "properties": {
          "title": {
            "type": "object",
            "minProperties": 1,
            "maxProperties": 8,
            "propertyNames": {
              "pattern": "^[a-z]{2,3}(?:-[A-Za-z0-9]{2,8})*$"
            },
            "additionalProperties": {
              "type": "string",
              "maxLength": 5000
            }
          },
          "recordKind": {
            "type": "string",
            "enum": [
              "artwork",
              "object"
            ]
          },
          "artistId": {
            "anyOf": [
              {
                "type": "string",
                "format": "uuid"
              },
              {
                "type": "null"
              }
            ]
          },
          "originId": {
            "anyOf": [
              {
                "type": "string",
                "format": "uuid"
              },
              {
                "type": "null"
              }
            ]
          },
          "attribution": {
            "type": "object",
            "minProperties": 1,
            "maxProperties": 8,
            "propertyNames": {
              "pattern": "^[a-z]{2,3}(?:-[A-Za-z0-9]{2,8})*$"
            },
            "additionalProperties": {
              "type": "string",
              "maxLength": 5000
            }
          },
          "year": {
            "anyOf": [
              {
                "type": "string",
                "maxLength": 200
              },
              {
                "type": "null"
              }
            ]
          },
          "period": {
            "type": "object",
            "minProperties": 1,
            "maxProperties": 8,
            "propertyNames": {
              "pattern": "^[a-z]{2,3}(?:-[A-Za-z0-9]{2,8})*$"
            },
            "additionalProperties": {
              "type": "string",
              "maxLength": 5000
            }
          },
          "medium": {
            "type": "object",
            "minProperties": 1,
            "maxProperties": 8,
            "propertyNames": {
              "pattern": "^[a-z]{2,3}(?:-[A-Za-z0-9]{2,8})*$"
            },
            "additionalProperties": {
              "type": "string",
              "maxLength": 5000
            }
          },
          "materials": {
            "type": "object",
            "minProperties": 1,
            "maxProperties": 8,
            "propertyNames": {
              "pattern": "^[a-z]{2,3}(?:-[A-Za-z0-9]{2,8})*$"
            },
            "additionalProperties": {
              "type": "string",
              "maxLength": 5000
            }
          },
          "technique": {
            "type": "object",
            "minProperties": 1,
            "maxProperties": 8,
            "propertyNames": {
              "pattern": "^[a-z]{2,3}(?:-[A-Za-z0-9]{2,8})*$"
            },
            "additionalProperties": {
              "type": "string",
              "maxLength": 5000
            }
          },
          "dimensions": {
            "anyOf": [
              {
                "type": "object",
                "additionalProperties": false,
                "properties": {
                  "height": {
                    "type": "string",
                    "pattern": "^(0|[1-9][0-9]*)(\\.[0-9]{1,6})?$",
                    "maxLength": 24
                  },
                  "width": {
                    "type": "string",
                    "pattern": "^(0|[1-9][0-9]*)(\\.[0-9]{1,6})?$",
                    "maxLength": 24
                  },
                  "depth": {
                    "type": "string",
                    "pattern": "^(0|[1-9][0-9]*)(\\.[0-9]{1,6})?$",
                    "maxLength": 24
                  },
                  "diameter": {
                    "type": "string",
                    "pattern": "^(0|[1-9][0-9]*)(\\.[0-9]{1,6})?$",
                    "maxLength": 24
                  },
                  "unit": {
                    "type": "string",
                    "enum": [
                      "mm",
                      "cm",
                      "m",
                      "in"
                    ]
                  },
                  "display": {
                    "type": "object",
                    "minProperties": 1,
                    "maxProperties": 8,
                    "propertyNames": {
                      "pattern": "^[a-z]{2,3}(?:-[A-Za-z0-9]{2,8})*$"
                    },
                    "additionalProperties": {
                      "type": "string",
                      "maxLength": 5000
                    }
                  }
                },
                "required": [
                  "unit"
                ]
              },
              {
                "type": "null"
              }
            ]
          },
          "weight": {
            "anyOf": [
              {
                "type": "object",
                "additionalProperties": false,
                "properties": {
                  "value": {
                    "type": "string",
                    "pattern": "^(0|[1-9][0-9]*)(\\.[0-9]{1,6})?$",
                    "maxLength": 24
                  },
                  "unit": {
                    "type": "string",
                    "enum": [
                      "g",
                      "kg",
                      "lb"
                    ]
                  }
                },
                "required": [
                  "value",
                  "unit"
                ]
              },
              {
                "type": "null"
              }
            ]
          },
          "condition": {
            "type": "object",
            "minProperties": 1,
            "maxProperties": 8,
            "propertyNames": {
              "pattern": "^[a-z]{2,3}(?:-[A-Za-z0-9]{2,8})*$"
            },
            "additionalProperties": {
              "type": "string",
              "maxLength": 5000
            }
          },
          "description": {
            "$ref": "#/components/schemas/InventoryE_LocalizedRichText"
          },
          "provenance": {
            "$ref": "#/components/schemas/InventoryE_LocalizedRichText"
          },
          "bibliography": {
            "$ref": "#/components/schemas/InventoryE_LocalizedRichText"
          },
          "exhibitions": {
            "$ref": "#/components/schemas/InventoryE_LocalizedRichText"
          },
          "inscriptions": {
            "$ref": "#/components/schemas/InventoryE_LocalizedRichText"
          },
          "edition": {
            "anyOf": [
              {
                "type": "object",
                "additionalProperties": false,
                "properties": {
                  "size": {
                    "type": "integer",
                    "minimum": 1
                  },
                  "artistProofs": {
                    "type": "integer",
                    "minimum": 0
                  },
                  "notes": {
                    "type": "object",
                    "minProperties": 1,
                    "maxProperties": 8,
                    "propertyNames": {
                      "pattern": "^[a-z]{2,3}(?:-[A-Za-z0-9]{2,8})*$"
                    },
                    "additionalProperties": {
                      "type": "string",
                      "maxLength": 5000
                    }
                  }
                },
                "required": []
              },
              {
                "type": "null"
              }
            ]
          },
          "typeId": {
            "anyOf": [
              {
                "type": "integer",
                "minimum": 1,
                "maximum": 9007199254740991
              },
              {
                "type": "null"
              }
            ]
          },
          "categoryIds": {
            "type": "array",
            "items": {
              "type": "string",
              "format": "uuid"
            },
            "uniqueItems": true
          },
          "media": {
            "type": "array",
            "minItems": 1,
            "maxItems": 100,
            "items": {
              "$ref": "#/components/schemas/InventoryMediaSelection"
            }
          },
          "shortDescription": {
            "type": "object",
            "minProperties": 1,
            "maxProperties": 8,
            "propertyNames": {
              "pattern": "^[a-z]{2,3}(?:-[A-Za-z0-9]{2,8})*$"
            },
            "additionalProperties": {
              "type": "string",
              "maxLength": 5000
            }
          }
        },
        "required": [
          "title",
          "media"
        ]
      },
      "InventoryExpenseAllocation": {
        "type": "object",
        "additionalProperties": false,
        "properties": {
          "unitId": {
            "type": "string",
            "format": "uuid"
          },
          "amount": {
            "$ref": "#/components/schemas/InventoryMoney"
          }
        },
        "required": [
          "unitId",
          "amount"
        ]
      },
      "InventoryDocumentLine": {
        "oneOf": [
          {
            "$ref": "#/components/schemas/InventoryStockDocumentLine"
          },
          {
            "$ref": "#/components/schemas/InventoryChargeDocumentLine"
          }
        ]
      },
      "InventoryDocumentDraft": {
        "oneOf": [
          {
            "type": "object",
            "additionalProperties": false,
            "properties": {
              "kind": {
                "type": "string",
                "const": "quote"
              },
              "saleId": {
                "anyOf": [
                  {
                    "type": "string",
                    "format": "uuid"
                  },
                  {
                    "type": "null"
                  }
                ]
              },
              "customerId": {
                "type": "string",
                "format": "uuid"
              },
              "locale": {
                "type": "string",
                "minLength": 2,
                "maxLength": 35
              },
              "sellerProfileRevision": {
                "type": "string",
                "pattern": "^[1-9][0-9]*$",
                "maxLength": 20
              },
              "lines": {
                "type": "array",
                "minItems": 1,
                "maxItems": 200,
                "items": {
                  "$ref": "#/components/schemas/InventoryDocumentLine"
                }
              },
              "dueDate": {
                "anyOf": [
                  {
                    "type": "string",
                    "format": "date"
                  },
                  {
                    "type": "null"
                  }
                ]
              },
              "deliveryDate": {
                "anyOf": [
                  {
                    "type": "string",
                    "format": "date"
                  },
                  {
                    "type": "null"
                  }
                ]
              },
              "paymentTerms": {
                "type": "string",
                "maxLength": 10000
              }
            },
            "required": [
              "kind",
              "customerId",
              "locale",
              "sellerProfileRevision",
              "lines"
            ]
          },
          {
            "type": "object",
            "additionalProperties": false,
            "properties": {
              "kind": {
                "type": "string",
                "const": "invoice"
              },
              "saleId": {
                "$ref": "#/components/schemas/InventoryUUID"
              },
              "customerId": {
                "type": "string",
                "format": "uuid"
              },
              "locale": {
                "type": "string",
                "minLength": 2,
                "maxLength": 35
              },
              "sellerProfileRevision": {
                "type": "string",
                "pattern": "^[1-9][0-9]*$",
                "maxLength": 20
              },
              "lines": {
                "type": "array",
                "minItems": 1,
                "maxItems": 200,
                "items": {
                  "$ref": "#/components/schemas/InventoryDocumentLine"
                }
              },
              "dueDate": {
                "anyOf": [
                  {
                    "type": "string",
                    "format": "date"
                  },
                  {
                    "type": "null"
                  }
                ]
              },
              "deliveryDate": {
                "anyOf": [
                  {
                    "type": "string",
                    "format": "date"
                  },
                  {
                    "type": "null"
                  }
                ]
              },
              "paymentTerms": {
                "type": "string",
                "maxLength": 10000
              }
            },
            "required": [
              "kind",
              "customerId",
              "locale",
              "sellerProfileRevision",
              "lines",
              "saleId"
            ]
          },
          {
            "type": "object",
            "additionalProperties": false,
            "properties": {
              "kind": {
                "type": "string",
                "const": "invoice"
              },
              "saleId": {
                "type": "null"
              },
              "customerId": {
                "type": "string",
                "format": "uuid"
              },
              "locale": {
                "type": "string",
                "minLength": 2,
                "maxLength": 35
              },
              "sellerProfileRevision": {
                "type": "string",
                "pattern": "^[1-9][0-9]*$",
                "maxLength": 20
              },
              "lines": {
                "type": "array",
                "minItems": 1,
                "maxItems": 200,
                "items": {
                  "$ref": "#/components/schemas/InventoryChargeDocumentLine"
                }
              },
              "dueDate": {
                "anyOf": [
                  {
                    "type": "string",
                    "format": "date"
                  },
                  {
                    "type": "null"
                  }
                ]
              },
              "deliveryDate": {
                "anyOf": [
                  {
                    "type": "string",
                    "format": "date"
                  },
                  {
                    "type": "null"
                  }
                ]
              },
              "paymentTerms": {
                "type": "string",
                "maxLength": 10000
              }
            },
            "required": [
              "kind",
              "customerId",
              "locale",
              "sellerProfileRevision",
              "lines"
            ]
          },
          {
            "type": "object",
            "additionalProperties": false,
            "properties": {
              "kind": {
                "const": "credit_note",
                "type": "string"
              },
              "originalDocumentId": {
                "$ref": "#/components/schemas/InventoryUUID"
              },
              "reason": {
                "type": "string",
                "minLength": 1,
                "maxLength": 2000
              },
              "locale": {
                "type": "string",
                "minLength": 2,
                "maxLength": 35
              },
              "sellerProfileRevision": {
                "$ref": "#/components/schemas/InventoryRevision"
              },
              "lines": {
                "type": "array",
                "minItems": 1,
                "maxItems": 200,
                "items": {
                  "$ref": "#/components/schemas/InventoryCreditLine"
                }
              }
            },
            "required": [
              "kind",
              "originalDocumentId",
              "reason",
              "locale",
              "sellerProfileRevision",
              "lines"
            ]
          }
        ]
      },
      "Inventoryinventory_create_work": {
        "type": "object",
        "additionalProperties": false,
        "properties": {
          "command": {
            "const": "inventory_create_work"
          },
          "workRef": {
            "type": "string",
            "minLength": 1,
            "maxLength": 128
          },
          "draft": {
            "$ref": "#/components/schemas/InventoryWorkDraft"
          },
          "internalNotes": {
            "type": "string",
            "maxLength": 20000
          }
        },
        "required": [
          "command",
          "draft"
        ],
        "x-inventory-effect": "commit_inventory_change",
        "x-inventory-financial": false,
        "x-inventory-role": "contributor",
        "x-inventory-scopes": [
          "site.inventory.write"
        ],
        "x-inventory-public-access-changed": false
      },
      "Inventoryinventory_replace_draft": {
        "type": "object",
        "additionalProperties": false,
        "properties": {
          "command": {
            "const": "inventory_replace_draft"
          },
          "artworkId": {
            "type": "string",
            "format": "uuid"
          },
          "expectedRevision": {
            "type": "string",
            "pattern": "^[1-9][0-9]*$",
            "maxLength": 20
          },
          "draft": {
            "$ref": "#/components/schemas/InventoryWorkDraft"
          },
          "internalNotes": {
            "anyOf": [
              {
                "type": "string",
                "maxLength": 20000
              },
              {
                "type": "null"
              }
            ]
          },
          "workRef": {
            "anyOf": [
              {
                "$ref": "#/components/schemas/InventoryReference"
              },
              {
                "type": "null"
              }
            ],
            "description": "Omettre pour conserver ; null attribue une nouvelle référence automatique. Identité technique et slug conservés."
          }
        },
        "required": [
          "command",
          "artworkId",
          "expectedRevision",
          "draft"
        ],
        "x-inventory-effect": "commit_inventory_change",
        "x-inventory-financial": false,
        "x-inventory-role": "contributor",
        "x-inventory-scopes": [
          "site.inventory.write"
        ],
        "x-inventory-public-access-changed": false
      },
      "Inventoryinventory_publish_work": {
        "type": "object",
        "additionalProperties": false,
        "properties": {
          "command": {
            "const": "inventory_publish_work"
          },
          "artworkId": {
            "type": "string",
            "format": "uuid"
          },
          "expectedRevision": {
            "type": "string",
            "pattern": "^[1-9][0-9]*$",
            "maxLength": 20
          }
        },
        "required": [
          "command",
          "artworkId",
          "expectedRevision"
        ],
        "x-inventory-effect": "apply_public_change",
        "x-inventory-financial": false,
        "x-inventory-role": "contributor",
        "x-inventory-scopes": [
          "site.inventory.publish"
        ],
        "x-inventory-public-access-changed": true
      },
      "Inventoryinventory_unpublish_work": {
        "type": "object",
        "additionalProperties": false,
        "properties": {
          "command": {
            "const": "inventory_unpublish_work"
          },
          "artworkId": {
            "type": "string",
            "format": "uuid"
          },
          "expectedRevision": {
            "type": "string",
            "pattern": "^[1-9][0-9]*$",
            "maxLength": 20
          }
        },
        "required": [
          "command",
          "artworkId",
          "expectedRevision"
        ],
        "x-inventory-effect": "apply_public_change",
        "x-inventory-financial": false,
        "x-inventory-role": "contributor",
        "x-inventory-scopes": [
          "site.inventory.publish"
        ],
        "x-inventory-public-access-changed": true
      },
      "Inventoryinventory_archive_work": {
        "type": "object",
        "additionalProperties": false,
        "properties": {
          "command": {
            "const": "inventory_archive_work"
          },
          "artworkId": {
            "type": "string",
            "format": "uuid"
          },
          "expectedRevision": {
            "type": "string",
            "pattern": "^[1-9][0-9]*$",
            "maxLength": 20
          }
        },
        "required": [
          "command",
          "artworkId",
          "expectedRevision"
        ],
        "x-inventory-effect": "commit_inventory_change",
        "x-inventory-financial": false,
        "x-inventory-role": "administrator",
        "x-inventory-scopes": [
          "site.inventory.write",
          "site.inventory.manage"
        ],
        "x-inventory-public-access-changed": false
      },
      "Inventoryinventory_delete_work": {
        "type": "object",
        "additionalProperties": false,
        "properties": {
          "command": {
            "const": "inventory_delete_work"
          },
          "artworkId": {
            "type": "string",
            "format": "uuid"
          },
          "expectedRevision": {
            "type": "string",
            "pattern": "^[1-9][0-9]*$",
            "maxLength": 20
          }
        },
        "required": [
          "command",
          "artworkId",
          "expectedRevision"
        ],
        "x-inventory-effect": "commit_inventory_change",
        "x-inventory-financial": false,
        "x-inventory-role": "administrator",
        "x-inventory-scopes": [
          "site.inventory.write",
          "site.inventory.manage"
        ],
        "x-inventory-public-access-changed": false
      },
      "Inventoryinventory_create_unit": {
        "type": "object",
        "additionalProperties": false,
        "properties": {
          "command": {
            "const": "inventory_create_unit"
          },
          "artworkId": {
            "type": "string",
            "format": "uuid"
          },
          "expectedRevision": {
            "type": "string",
            "pattern": "^[1-9][0-9]*$",
            "maxLength": 20
          },
          "unitRef": {
            "type": "string",
            "minLength": 1,
            "maxLength": 128
          },
          "editionNumber": {
            "type": "string",
            "maxLength": 100
          }
        },
        "required": [
          "command",
          "artworkId",
          "expectedRevision"
        ],
        "x-inventory-effect": "commit_inventory_change",
        "x-inventory-financial": false,
        "x-inventory-role": "administrator",
        "x-inventory-scopes": [
          "site.inventory.write",
          "site.inventory.manage"
        ],
        "x-inventory-public-access-changed": false
      },
      "Inventoryinventory_update_unit_logistics": {
        "type": "object",
        "additionalProperties": false,
        "properties": {
          "command": {
            "const": "inventory_update_unit_logistics"
          },
          "unitId": {
            "type": "string",
            "format": "uuid"
          },
          "expectedRevision": {
            "type": "string",
            "pattern": "^[1-9][0-9]*$",
            "maxLength": 20
          },
          "locationId": {
            "anyOf": [
              {
                "type": "string",
                "format": "uuid"
              },
              {
                "type": "null"
              }
            ]
          },
          "conditionNotes": {
            "type": "string",
            "maxLength": 10000
          },
          "editionNumber": {
            "anyOf": [
              {
                "type": "string",
                "maxLength": 100
              },
              {
                "type": "null"
              }
            ]
          },
          "qualification": {
            "type": "string",
            "enum": [
              "unqualified",
              "available"
            ]
          },
          "custodyQualification": {
            "type": "string",
            "enum": [
              "unknown",
              "held"
            ]
          },
          "unitRef": {
            "anyOf": [
              {
                "$ref": "#/components/schemas/InventoryReference"
              },
              {
                "type": "null"
              }
            ],
            "description": "Omettre pour conserver ; null attribue une nouvelle référence automatique. Identité technique et slug conservés."
          }
        },
        "required": [
          "command",
          "unitId",
          "expectedRevision"
        ],
        "x-inventory-effect": "commit_inventory_change",
        "x-inventory-financial": false,
        "x-inventory-role": "contributor",
        "x-inventory-scopes": [
          "site.inventory.write"
        ],
        "x-inventory-public-access-changed": false
      },
      "Inventoryinventory_archive_unit": {
        "type": "object",
        "additionalProperties": false,
        "properties": {
          "command": {
            "const": "inventory_archive_unit"
          },
          "unitId": {
            "type": "string",
            "format": "uuid"
          },
          "expectedRevision": {
            "type": "string",
            "pattern": "^[1-9][0-9]*$",
            "maxLength": 20
          }
        },
        "required": [
          "command",
          "unitId",
          "expectedRevision"
        ],
        "x-inventory-effect": "commit_inventory_change",
        "x-inventory-financial": false,
        "x-inventory-role": "administrator",
        "x-inventory-scopes": [
          "site.inventory.write",
          "site.inventory.manage"
        ],
        "x-inventory-public-access-changed": false
      },
      "Inventoryinventory_reserve_unit": {
        "type": "object",
        "additionalProperties": false,
        "properties": {
          "command": {
            "const": "inventory_reserve_unit"
          },
          "unitId": {
            "type": "string",
            "format": "uuid"
          },
          "expectedRevision": {
            "type": "string",
            "pattern": "^[1-9][0-9]*$",
            "maxLength": 20
          },
          "partyId": {
            "type": "string",
            "format": "uuid"
          },
          "until": {
            "anyOf": [
              {
                "type": "string",
                "format": "date-time"
              },
              {
                "type": "null"
              }
            ]
          },
          "notes": {
            "type": "string",
            "maxLength": 5000
          }
        },
        "required": [
          "command",
          "unitId",
          "expectedRevision",
          "partyId"
        ],
        "x-inventory-effect": "commit_inventory_change",
        "x-inventory-financial": false,
        "x-inventory-role": "contributor",
        "x-inventory-scopes": [
          "site.inventory.write"
        ],
        "x-inventory-public-access-changed": false
      },
      "Inventoryinventory_release_reservation": {
        "type": "object",
        "additionalProperties": false,
        "properties": {
          "command": {
            "const": "inventory_release_reservation"
          },
          "operationId": {
            "type": "string",
            "format": "uuid"
          },
          "expectedRevision": {
            "type": "string",
            "pattern": "^[1-9][0-9]*$",
            "maxLength": 20
          }
        },
        "required": [
          "command",
          "operationId",
          "expectedRevision"
        ],
        "x-inventory-effect": "commit_inventory_change",
        "x-inventory-financial": false,
        "x-inventory-role": "contributor",
        "x-inventory-scopes": [
          "site.inventory.write"
        ],
        "x-inventory-public-access-changed": false
      },
      "Inventoryinventory_move_unit": {
        "type": "object",
        "additionalProperties": false,
        "properties": {
          "command": {
            "const": "inventory_move_unit"
          },
          "unitId": {
            "type": "string",
            "format": "uuid"
          },
          "expectedRevision": {
            "type": "string",
            "pattern": "^[1-9][0-9]*$",
            "maxLength": 20
          },
          "toLocationId": {
            "type": "string",
            "format": "uuid"
          },
          "occurredAt": {
            "type": "string",
            "format": "date-time"
          },
          "notes": {
            "type": "string",
            "maxLength": 5000
          }
        },
        "required": [
          "command",
          "unitId",
          "expectedRevision",
          "toLocationId",
          "occurredAt"
        ],
        "x-inventory-effect": "commit_inventory_change",
        "x-inventory-financial": false,
        "x-inventory-role": "contributor",
        "x-inventory-scopes": [
          "site.inventory.write"
        ],
        "x-inventory-public-access-changed": false
      },
      "Inventoryinventory_loan_unit": {
        "type": "object",
        "additionalProperties": false,
        "properties": {
          "command": {
            "const": "inventory_loan_unit"
          },
          "unitId": {
            "type": "string",
            "format": "uuid"
          },
          "expectedRevision": {
            "type": "string",
            "pattern": "^[1-9][0-9]*$",
            "maxLength": 20
          },
          "recipientId": {
            "type": "string",
            "format": "uuid"
          },
          "toLocationId": {
            "anyOf": [
              {
                "type": "string",
                "format": "uuid"
              },
              {
                "type": "null"
              }
            ]
          },
          "departedAt": {
            "type": "string",
            "format": "date-time"
          },
          "expectedReturnAt": {
            "anyOf": [
              {
                "type": "string",
                "format": "date-time"
              },
              {
                "type": "null"
              }
            ]
          },
          "notes": {
            "type": "string",
            "maxLength": 5000
          }
        },
        "required": [
          "command",
          "unitId",
          "expectedRevision",
          "recipientId",
          "departedAt"
        ],
        "x-inventory-effect": "commit_inventory_change",
        "x-inventory-financial": false,
        "x-inventory-role": "contributor",
        "x-inventory-scopes": [
          "site.inventory.write"
        ],
        "x-inventory-public-access-changed": false
      },
      "Inventoryinventory_return_loan": {
        "type": "object",
        "additionalProperties": false,
        "properties": {
          "command": {
            "const": "inventory_return_loan"
          },
          "operationId": {
            "type": "string",
            "format": "uuid"
          },
          "expectedRevision": {
            "type": "string",
            "pattern": "^[1-9][0-9]*$",
            "maxLength": 20
          },
          "toLocationId": {
            "anyOf": [
              {
                "type": "string",
                "format": "uuid"
              },
              {
                "type": "null"
              }
            ]
          },
          "returnedAt": {
            "type": "string",
            "format": "date-time"
          },
          "conditionNotes": {
            "type": "string",
            "maxLength": 10000
          }
        },
        "required": [
          "command",
          "operationId",
          "expectedRevision",
          "returnedAt"
        ],
        "x-inventory-effect": "commit_inventory_change",
        "x-inventory-financial": false,
        "x-inventory-role": "contributor",
        "x-inventory-scopes": [
          "site.inventory.write"
        ],
        "x-inventory-public-access-changed": false,
        "description": "Enregistrer le retour physique des exemplaires d’un prêt ou d’un dépôt, sans annuler le contrat financier, sa commission ou ses règlements. Une restitution de dépôt entrant conserve le propriétaire et utilise returned_to_owner. La forme et le nom historiques de la commande restent compatibles."
      },
      "Inventoryinventory_correct_logistics_operation": {
        "type": "object",
        "additionalProperties": false,
        "properties": {
          "command": {
            "const": "inventory_correct_logistics_operation"
          },
          "operationId": {
            "type": "string",
            "format": "uuid"
          },
          "expectedRevision": {
            "type": "string",
            "pattern": "^[1-9][0-9]*$",
            "maxLength": 20
          },
          "reason": {
            "type": "string",
            "maxLength": 2000
          },
          "notes": {
            "type": "string",
            "maxLength": 5000
          },
          "expectedReturnAt": {
            "anyOf": [
              {
                "type": "string",
                "format": "date-time"
              },
              {
                "type": "null"
              }
            ]
          },
          "action": {
            "type": "string",
            "enum": [
              "annotate",
              "cancel"
            ]
          },
          "toLocationId": {
            "anyOf": [
              {
                "$ref": "#/components/schemas/InventoryUUID"
              },
              {
                "type": "null"
              }
            ]
          },
          "occurredAt": {
            "type": "string",
            "format": "date-time"
          }
        },
        "required": [
          "command",
          "operationId",
          "expectedRevision",
          "reason",
          "action"
        ],
        "x-inventory-effect": "commit_inventory_change",
        "x-inventory-financial": false,
        "x-inventory-role": "contributor",
        "x-inventory-scopes": [
          "site.inventory.write"
        ],
        "x-inventory-public-access-changed": false
      },
      "Inventoryinventory_record_acquisition": {
        "type": "object",
        "additionalProperties": false,
        "properties": {
          "command": {
            "const": "inventory_record_acquisition"
          },
          "unitId": {
            "type": "string",
            "format": "uuid"
          },
          "expectedRevision": {
            "type": "string",
            "pattern": "^[1-9][0-9]*$",
            "maxLength": 20
          },
          "kind": {
            "type": "string",
            "enum": [
              "purchase",
              "creation"
            ]
          },
          "date": {
            "anyOf": [
              {
                "type": "string",
                "format": "date"
              },
              {
                "type": "null"
              }
            ]
          },
          "partyId": {
            "anyOf": [
              {
                "type": "string",
                "format": "uuid"
              },
              {
                "type": "null"
              }
            ]
          },
          "ownerId": {
            "anyOf": [
              {
                "type": "string",
                "format": "uuid"
              },
              {
                "type": "null"
              }
            ]
          },
          "amount": {
            "anyOf": [
              {
                "$ref": "#/components/schemas/InventoryMoney"
              },
              {
                "type": "null"
              }
            ]
          },
          "taxPurchasePrice": {
            "anyOf": [
              {
                "$ref": "#/components/schemas/InventoryMoney"
              },
              {
                "type": "null"
              }
            ]
          },
          "qualificationEvidenceIds": {
            "type": "array",
            "items": {
              "type": "string",
              "format": "uuid"
            }
          }
        },
        "required": [
          "command",
          "unitId",
          "expectedRevision",
          "kind",
          "amount"
        ],
        "x-inventory-effect": "commit_inventory_change",
        "x-inventory-financial": true,
        "x-inventory-role": "administrator",
        "x-inventory-scopes": [
          "site.inventory.write",
          "site.inventory.finance"
        ],
        "x-inventory-public-access-changed": false
      },
      "Inventoryinventory_record_expense": {
        "type": "object",
        "additionalProperties": false,
        "properties": {
          "command": {
            "const": "inventory_record_expense"
          },
          "expenseRef": {
            "type": "string",
            "minLength": 1,
            "maxLength": 128
          },
          "category": {
            "type": "string",
            "enum": [
              "photo",
              "mounting",
              "restoration",
              "transport",
              "insurance",
              "other"
            ]
          },
          "date": {
            "anyOf": [
              {
                "type": "string",
                "format": "date"
              },
              {
                "type": "null"
              }
            ]
          },
          "total": {
            "anyOf": [
              {
                "$ref": "#/components/schemas/InventoryMoney"
              },
              {
                "type": "null"
              }
            ]
          },
          "supplierId": {
            "anyOf": [
              {
                "type": "string",
                "format": "uuid"
              },
              {
                "type": "null"
              }
            ]
          },
          "allocations": {
            "type": "array",
            "maxItems": 1000,
            "items": {
              "$ref": "#/components/schemas/InventoryExpenseAllocation"
            }
          },
          "evidenceIds": {
            "type": "array",
            "items": {
              "type": "string",
              "format": "uuid"
            }
          },
          "targetUnitIds": {
            "type": "array",
            "items": {
              "$ref": "#/components/schemas/InventoryUUID"
            },
            "uniqueItems": true,
            "maxItems": 1000
          }
        },
        "required": [
          "command",
          "expenseRef",
          "category",
          "total",
          "allocations",
          "targetUnitIds"
        ],
        "x-inventory-effect": "commit_inventory_change",
        "x-inventory-financial": true,
        "allOf": [
          {
            "if": {
              "properties": {
                "total": {
                  "type": "null"
                }
              },
              "required": [
                "total"
              ]
            },
            "then": {
              "properties": {
                "allocations": {
                  "maxItems": 0
                }
              }
            }
          }
        ],
        "x-inventory-role": "administrator",
        "x-inventory-scopes": [
          "site.inventory.write",
          "site.inventory.finance"
        ],
        "x-inventory-public-access-changed": false
      },
      "Inventoryinventory_record_deposit": {
        "type": "object",
        "additionalProperties": false,
        "properties": {
          "command": {
            "const": "inventory_record_deposit"
          },
          "direction": {
            "type": "string",
            "enum": [
              "in",
              "out"
            ]
          },
          "units": {
            "type": "array",
            "minItems": 1,
            "maxItems": 1000,
            "items": {
              "type": "object",
              "additionalProperties": false,
              "properties": {
                "unitId": {
                  "type": "string",
                  "format": "uuid"
                },
                "expectedRevision": {
                  "type": "string",
                  "pattern": "^[1-9][0-9]*$",
                  "maxLength": 20
                }
              },
              "required": [
                "unitId",
                "expectedRevision"
              ]
            }
          },
          "ownerId": {
            "type": "string",
            "format": "uuid"
          },
          "counterpartyId": {
            "type": "string",
            "format": "uuid"
          },
          "date": {
            "type": "string",
            "format": "date"
          },
          "expectedReturnAt": {
            "anyOf": [
              {
                "type": "string",
                "format": "date-time"
              },
              {
                "type": "null"
              }
            ]
          },
          "locationId": {
            "anyOf": [
              {
                "type": "string",
                "format": "uuid"
              },
              {
                "type": "null"
              }
            ]
          },
          "commission": {
            "anyOf": [
              {
                "$ref": "#/components/schemas/InventoryMoney"
              },
              {
                "type": "null"
              }
            ]
          },
          "insuranceValue": {
            "anyOf": [
              {
                "$ref": "#/components/schemas/InventoryMoney"
              },
              {
                "type": "null"
              }
            ]
          },
          "terms": {
            "type": "string",
            "maxLength": 20000
          },
          "documentIds": {
            "type": "array",
            "items": {
              "type": "string",
              "format": "uuid"
            }
          },
          "commissionRate": {
            "anyOf": [
              {
                "$ref": "#/components/schemas/InventoryRate"
              },
              {
                "type": "null"
              }
            ]
          }
        },
        "required": [
          "command",
          "direction",
          "units",
          "ownerId",
          "counterpartyId",
          "date"
        ],
        "x-inventory-effect": "commit_inventory_change",
        "x-inventory-financial": true,
        "x-inventory-role": "administrator",
        "x-inventory-scopes": [
          "site.inventory.write",
          "site.inventory.finance"
        ],
        "x-inventory-public-access-changed": false
      },
      "Inventoryinventory_record_sale": {
        "type": "object",
        "additionalProperties": false,
        "properties": {
          "command": {
            "const": "inventory_record_sale"
          },
          "units": {
            "type": "array",
            "minItems": 1,
            "maxItems": 1000,
            "items": {
              "type": "object",
              "additionalProperties": false,
              "properties": {
                "unitId": {
                  "type": "string",
                  "format": "uuid"
                },
                "expectedRevision": {
                  "type": "string",
                  "pattern": "^[1-9][0-9]*$",
                  "maxLength": 20
                },
                "grossAmount": {
                  "$ref": "#/components/schemas/InventoryMoney"
                }
              },
              "required": [
                "unitId",
                "expectedRevision",
                "grossAmount"
              ]
            }
          },
          "customerId": {
            "type": "string",
            "format": "uuid"
          },
          "date": {
            "type": "string",
            "format": "date"
          },
          "sellerRole": {
            "type": "string",
            "enum": [
              "own_account",
              "consignment_principal",
              "agent"
            ]
          },
          "depositOperationId": {
            "anyOf": [
              {
                "type": "string",
                "format": "uuid"
              },
              {
                "type": "null"
              }
            ]
          },
          "amount": {
            "$ref": "#/components/schemas/InventoryMoney"
          },
          "reservationIds": {
            "type": "array",
            "items": {
              "type": "string",
              "format": "uuid"
            }
          }
        },
        "required": [
          "command",
          "units",
          "customerId",
          "date",
          "sellerRole",
          "amount"
        ],
        "x-inventory-effect": "commit_inventory_change",
        "x-inventory-financial": true,
        "x-inventory-role": "administrator",
        "x-inventory-scopes": [
          "site.inventory.write",
          "site.inventory.finance"
        ],
        "x-inventory-public-access-changed": false
      },
      "Inventoryinventory_prepare_document": {
        "type": "object",
        "additionalProperties": false,
        "properties": {
          "command": {
            "const": "inventory_prepare_document"
          },
          "draft": {
            "$ref": "#/components/schemas/InventoryDocumentDraft"
          }
        },
        "required": [
          "command",
          "draft"
        ],
        "x-inventory-effect": "commit_inventory_change",
        "x-inventory-financial": true,
        "x-inventory-role": "administrator",
        "x-inventory-scopes": [
          "site.inventory.write",
          "site.inventory.finance"
        ],
        "x-inventory-public-access-changed": false
      },
      "Inventoryinventory_replace_document_draft": {
        "type": "object",
        "additionalProperties": false,
        "properties": {
          "command": {
            "const": "inventory_replace_document_draft"
          },
          "documentId": {
            "type": "string",
            "format": "uuid"
          },
          "expectedRevision": {
            "type": "string",
            "pattern": "^[1-9][0-9]*$",
            "maxLength": 20
          },
          "draft": {
            "$ref": "#/components/schemas/InventoryDocumentDraft"
          }
        },
        "required": [
          "command",
          "documentId",
          "expectedRevision",
          "draft"
        ],
        "x-inventory-effect": "commit_inventory_change",
        "x-inventory-financial": true,
        "x-inventory-role": "administrator",
        "x-inventory-scopes": [
          "site.inventory.write",
          "site.inventory.finance"
        ],
        "x-inventory-public-access-changed": false
      },
      "Inventoryinventory_issue_document": {
        "type": "object",
        "additionalProperties": false,
        "properties": {
          "command": {
            "const": "inventory_issue_document"
          },
          "documentId": {
            "type": "string",
            "format": "uuid"
          },
          "expectedRevision": {
            "type": "string",
            "pattern": "^[1-9][0-9]*$",
            "maxLength": 20
          },
          "seriesId": {
            "type": "string",
            "format": "uuid"
          },
          "sellerProfileRevision": {
            "type": "string",
            "pattern": "^[1-9][0-9]*$",
            "maxLength": 20
          }
        },
        "required": [
          "command",
          "documentId",
          "expectedRevision",
          "seriesId",
          "sellerProfileRevision"
        ],
        "x-inventory-effect": "commit_inventory_change",
        "x-inventory-financial": true,
        "x-inventory-role": "administrator",
        "x-inventory-scopes": [
          "site.inventory.write",
          "site.inventory.finance"
        ],
        "x-inventory-public-access-changed": false
      },
      "Inventoryinventory_record_payment": {
        "type": "object",
        "additionalProperties": false,
        "properties": {
          "command": {
            "const": "inventory_record_payment"
          },
          "documentId": {
            "type": "string",
            "format": "uuid"
          },
          "expectedRevision": {
            "type": "string",
            "pattern": "^[1-9][0-9]*$",
            "maxLength": 20
          },
          "amount": {
            "$ref": "#/components/schemas/InventoryMoney"
          },
          "date": {
            "type": "string",
            "format": "date"
          },
          "method": {
            "type": "string",
            "enum": [
              "bank_transfer",
              "cash",
              "card_external",
              "cheque",
              "other"
            ]
          },
          "reference": {
            "type": "string",
            "maxLength": 500
          },
          "reason": {
            "type": "string",
            "maxLength": 2000
          },
          "exchange": {
            "anyOf": [
              {
                "type": "object",
                "additionalProperties": false,
                "properties": {
                  "invoiceAmount": {
                    "$ref": "#/components/schemas/InventoryMoney"
                  },
                  "evidenceId": {
                    "type": "string",
                    "format": "uuid"
                  }
                },
                "required": [
                  "invoiceAmount",
                  "evidenceId"
                ]
              },
              {
                "type": "null"
              }
            ]
          }
        },
        "required": [
          "command",
          "documentId",
          "expectedRevision",
          "amount",
          "date",
          "method",
          "reference"
        ],
        "x-inventory-effect": "commit_inventory_change",
        "x-inventory-financial": true,
        "x-inventory-role": "administrator",
        "x-inventory-scopes": [
          "site.inventory.write",
          "site.inventory.finance"
        ],
        "x-inventory-public-access-changed": false
      },
      "Inventoryinventory_record_refund": {
        "type": "object",
        "additionalProperties": false,
        "properties": {
          "command": {
            "const": "inventory_record_refund"
          },
          "documentId": {
            "type": "string",
            "format": "uuid"
          },
          "expectedRevision": {
            "type": "string",
            "pattern": "^[1-9][0-9]*$",
            "maxLength": 20
          },
          "amount": {
            "$ref": "#/components/schemas/InventoryMoney"
          },
          "date": {
            "type": "string",
            "format": "date"
          },
          "method": {
            "type": "string",
            "enum": [
              "bank_transfer",
              "cash",
              "card_external",
              "cheque",
              "other"
            ]
          },
          "reference": {
            "type": "string",
            "maxLength": 500
          },
          "reason": {
            "type": "string",
            "maxLength": 2000
          },
          "exchange": {
            "anyOf": [
              {
                "type": "object",
                "additionalProperties": false,
                "properties": {
                  "invoiceAmount": {
                    "$ref": "#/components/schemas/InventoryMoney"
                  },
                  "evidenceId": {
                    "type": "string",
                    "format": "uuid"
                  }
                },
                "required": [
                  "invoiceAmount",
                  "evidenceId"
                ]
              },
              {
                "type": "null"
              }
            ]
          }
        },
        "required": [
          "command",
          "documentId",
          "expectedRevision",
          "amount",
          "date",
          "method",
          "reference"
        ],
        "x-inventory-effect": "commit_inventory_change",
        "x-inventory-financial": true,
        "x-inventory-role": "administrator",
        "x-inventory-scopes": [
          "site.inventory.write",
          "site.inventory.finance"
        ],
        "x-inventory-public-access-changed": false
      },
      "Inventoryinventory_save_reference": {
        "type": "object",
        "additionalProperties": false,
        "properties": {
          "command": {
            "const": "inventory_save_reference"
          },
          "reference": {
            "oneOf": [
              {
                "type": "object",
                "additionalProperties": false,
                "properties": {
                  "kind": {
                    "const": "artist"
                  },
                  "action": {
                    "const": "create"
                  },
                  "fields": {
                    "type": "object",
                    "additionalProperties": false,
                    "properties": {
                      "name": {
                        "type": "object",
                        "minProperties": 1,
                        "maxProperties": 8,
                        "propertyNames": {
                          "pattern": "^[a-z]{2,3}(?:-[A-Za-z0-9]{2,8})*$"
                        },
                        "additionalProperties": {
                          "type": "string",
                          "maxLength": 5000
                        }
                      },
                      "birthDate": {
                        "anyOf": [
                          {
                            "type": "string",
                            "maxLength": 100
                          },
                          {
                            "type": "null"
                          }
                        ]
                      },
                      "deathDate": {
                        "anyOf": [
                          {
                            "type": "string",
                            "maxLength": 100
                          },
                          {
                            "type": "null"
                          }
                        ]
                      },
                      "nationalities": {
                        "type": "array",
                        "items": {
                          "type": "string",
                          "maxLength": 100
                        }
                      },
                      "biography": {
                        "$ref": "#/components/schemas/InventoryE_LocalizedRichText"
                      },
                      "mediaIds": {
                        "type": "array",
                        "items": {
                          "$ref": "#/components/schemas/InventoryUUID"
                        },
                        "maxItems": 100,
                        "uniqueItems": true
                      }
                    },
                    "required": [
                      "name"
                    ]
                  }
                },
                "required": [
                  "kind",
                  "action",
                  "fields"
                ]
              },
              {
                "type": "object",
                "additionalProperties": false,
                "properties": {
                  "kind": {
                    "const": "artist"
                  },
                  "action": {
                    "const": "update"
                  },
                  "fields": {
                    "type": "object",
                    "additionalProperties": false,
                    "properties": {
                      "name": {
                        "type": "object",
                        "minProperties": 1,
                        "maxProperties": 8,
                        "propertyNames": {
                          "pattern": "^[a-z]{2,3}(?:-[A-Za-z0-9]{2,8})*$"
                        },
                        "additionalProperties": {
                          "type": "string",
                          "maxLength": 5000
                        }
                      },
                      "birthDate": {
                        "anyOf": [
                          {
                            "type": "string",
                            "maxLength": 100
                          },
                          {
                            "type": "null"
                          }
                        ]
                      },
                      "deathDate": {
                        "anyOf": [
                          {
                            "type": "string",
                            "maxLength": 100
                          },
                          {
                            "type": "null"
                          }
                        ]
                      },
                      "nationalities": {
                        "type": "array",
                        "items": {
                          "type": "string",
                          "maxLength": 100
                        }
                      },
                      "biography": {
                        "$ref": "#/components/schemas/InventoryE_LocalizedRichText"
                      },
                      "mediaIds": {
                        "type": "array",
                        "items": {
                          "$ref": "#/components/schemas/InventoryUUID"
                        },
                        "maxItems": 100,
                        "uniqueItems": true
                      }
                    },
                    "required": [
                      "name"
                    ]
                  },
                  "referenceId": {
                    "$ref": "#/components/schemas/InventoryUUID"
                  },
                  "expectedRevision": {
                    "$ref": "#/components/schemas/InventoryRevision"
                  }
                },
                "required": [
                  "kind",
                  "action",
                  "fields",
                  "referenceId",
                  "expectedRevision"
                ]
              },
              {
                "type": "object",
                "additionalProperties": false,
                "properties": {
                  "kind": {
                    "const": "origin"
                  },
                  "action": {
                    "const": "create"
                  },
                  "fields": {
                    "type": "object",
                    "additionalProperties": false,
                    "properties": {
                      "name": {
                        "type": "object",
                        "minProperties": 1,
                        "maxProperties": 8,
                        "propertyNames": {
                          "pattern": "^[a-z]{2,3}(?:-[A-Za-z0-9]{2,8})*$"
                        },
                        "additionalProperties": {
                          "type": "string",
                          "maxLength": 5000
                        }
                      },
                      "culture": {
                        "type": "object",
                        "minProperties": 1,
                        "maxProperties": 8,
                        "propertyNames": {
                          "pattern": "^[a-z]{2,3}(?:-[A-Za-z0-9]{2,8})*$"
                        },
                        "additionalProperties": {
                          "type": "string",
                          "maxLength": 5000
                        }
                      },
                      "country": {
                        "anyOf": [
                          {
                            "type": "string",
                            "maxLength": 100
                          },
                          {
                            "type": "null"
                          }
                        ]
                      },
                      "region": {
                        "type": "object",
                        "minProperties": 1,
                        "maxProperties": 8,
                        "propertyNames": {
                          "pattern": "^[a-z]{2,3}(?:-[A-Za-z0-9]{2,8})*$"
                        },
                        "additionalProperties": {
                          "type": "string",
                          "maxLength": 5000
                        }
                      },
                      "period": {
                        "type": "object",
                        "minProperties": 1,
                        "maxProperties": 8,
                        "propertyNames": {
                          "pattern": "^[a-z]{2,3}(?:-[A-Za-z0-9]{2,8})*$"
                        },
                        "additionalProperties": {
                          "type": "string",
                          "maxLength": 5000
                        }
                      },
                      "description": {
                        "$ref": "#/components/schemas/InventoryE_LocalizedRichText"
                      },
                      "mediaIds": {
                        "type": "array",
                        "items": {
                          "$ref": "#/components/schemas/InventoryUUID"
                        },
                        "maxItems": 100,
                        "uniqueItems": true
                      }
                    },
                    "required": [
                      "name"
                    ]
                  }
                },
                "required": [
                  "kind",
                  "action",
                  "fields"
                ]
              },
              {
                "type": "object",
                "additionalProperties": false,
                "properties": {
                  "kind": {
                    "const": "origin"
                  },
                  "action": {
                    "const": "update"
                  },
                  "fields": {
                    "type": "object",
                    "additionalProperties": false,
                    "properties": {
                      "name": {
                        "type": "object",
                        "minProperties": 1,
                        "maxProperties": 8,
                        "propertyNames": {
                          "pattern": "^[a-z]{2,3}(?:-[A-Za-z0-9]{2,8})*$"
                        },
                        "additionalProperties": {
                          "type": "string",
                          "maxLength": 5000
                        }
                      },
                      "culture": {
                        "type": "object",
                        "minProperties": 1,
                        "maxProperties": 8,
                        "propertyNames": {
                          "pattern": "^[a-z]{2,3}(?:-[A-Za-z0-9]{2,8})*$"
                        },
                        "additionalProperties": {
                          "type": "string",
                          "maxLength": 5000
                        }
                      },
                      "country": {
                        "anyOf": [
                          {
                            "type": "string",
                            "maxLength": 100
                          },
                          {
                            "type": "null"
                          }
                        ]
                      },
                      "region": {
                        "type": "object",
                        "minProperties": 1,
                        "maxProperties": 8,
                        "propertyNames": {
                          "pattern": "^[a-z]{2,3}(?:-[A-Za-z0-9]{2,8})*$"
                        },
                        "additionalProperties": {
                          "type": "string",
                          "maxLength": 5000
                        }
                      },
                      "period": {
                        "type": "object",
                        "minProperties": 1,
                        "maxProperties": 8,
                        "propertyNames": {
                          "pattern": "^[a-z]{2,3}(?:-[A-Za-z0-9]{2,8})*$"
                        },
                        "additionalProperties": {
                          "type": "string",
                          "maxLength": 5000
                        }
                      },
                      "description": {
                        "$ref": "#/components/schemas/InventoryE_LocalizedRichText"
                      },
                      "mediaIds": {
                        "type": "array",
                        "items": {
                          "$ref": "#/components/schemas/InventoryUUID"
                        },
                        "maxItems": 100,
                        "uniqueItems": true
                      }
                    },
                    "required": [
                      "name"
                    ]
                  },
                  "referenceId": {
                    "$ref": "#/components/schemas/InventoryUUID"
                  },
                  "expectedRevision": {
                    "$ref": "#/components/schemas/InventoryRevision"
                  }
                },
                "required": [
                  "kind",
                  "action",
                  "fields",
                  "referenceId",
                  "expectedRevision"
                ]
              },
              {
                "type": "object",
                "additionalProperties": false,
                "properties": {
                  "kind": {
                    "const": "party"
                  },
                  "action": {
                    "const": "create"
                  },
                  "fields": {
                    "type": "object",
                    "additionalProperties": false,
                    "properties": {
                      "name": {
                        "type": "string",
                        "maxLength": 500
                      },
                      "kind": {
                        "type": "string",
                        "enum": [
                          "person",
                          "organization"
                        ]
                      },
                      "roles": {
                        "type": "array",
                        "items": {
                          "type": "string",
                          "enum": [
                            "owner",
                            "supplier",
                            "depositor",
                            "customer",
                            "recipient"
                          ]
                        }
                      },
                      "email": {
                        "anyOf": [
                          {
                            "type": "string",
                            "format": "email"
                          },
                          {
                            "type": "null"
                          }
                        ]
                      },
                      "phone": {
                        "anyOf": [
                          {
                            "type": "string",
                            "maxLength": 100
                          },
                          {
                            "type": "null"
                          }
                        ]
                      },
                      "addressLines": {
                        "type": "array",
                        "maxItems": 8,
                        "items": {
                          "type": "string",
                          "maxLength": 500
                        }
                      },
                      "customerKind": {
                        "type": "string",
                        "enum": [
                          "professional",
                          "private",
                          "public_entity"
                        ]
                      },
                      "companyIdentifier": {
                        "anyOf": [
                          {
                            "type": "string",
                            "maxLength": 100
                          },
                          {
                            "type": "null"
                          }
                        ]
                      },
                      "vatIdentifier": {
                        "anyOf": [
                          {
                            "type": "string",
                            "maxLength": 100
                          },
                          {
                            "type": "null"
                          }
                        ]
                      },
                      "billingAddress": {
                        "type": "object",
                        "additionalProperties": false,
                        "properties": {
                          "line1": {
                            "type": "string",
                            "maxLength": 500
                          },
                          "line2": {
                            "anyOf": [
                              {
                                "type": "string",
                                "maxLength": 500
                              },
                              {
                                "type": "null"
                              }
                            ]
                          },
                          "postalCode": {
                            "type": "string",
                            "maxLength": 100
                          },
                          "city": {
                            "type": "string",
                            "maxLength": 200
                          },
                          "country": {
                            "type": "string",
                            "pattern": "^[A-Z]{2}$"
                          }
                        },
                        "required": [
                          "line1",
                          "city",
                          "country"
                        ]
                      },
                      "shippingAddress": {
                        "anyOf": [
                          {
                            "type": "object",
                            "additionalProperties": false,
                            "properties": {
                              "line1": {
                                "type": "string",
                                "maxLength": 500
                              },
                              "line2": {
                                "anyOf": [
                                  {
                                    "type": "string",
                                    "maxLength": 500
                                  },
                                  {
                                    "type": "null"
                                  }
                                ]
                              },
                              "postalCode": {
                                "type": "string",
                                "maxLength": 100
                              },
                              "city": {
                                "type": "string",
                                "maxLength": 200
                              },
                              "country": {
                                "type": "string",
                                "pattern": "^[A-Z]{2}$"
                              }
                            },
                            "required": [
                              "line1",
                              "city",
                              "country"
                            ]
                          },
                          {
                            "type": "null"
                          }
                        ]
                      }
                    },
                    "required": [
                      "name",
                      "kind",
                      "roles"
                    ]
                  }
                },
                "required": [
                  "kind",
                  "action",
                  "fields"
                ]
              },
              {
                "type": "object",
                "additionalProperties": false,
                "properties": {
                  "kind": {
                    "const": "party"
                  },
                  "action": {
                    "const": "update"
                  },
                  "fields": {
                    "type": "object",
                    "additionalProperties": false,
                    "properties": {
                      "name": {
                        "type": "string",
                        "maxLength": 500
                      },
                      "kind": {
                        "type": "string",
                        "enum": [
                          "person",
                          "organization"
                        ]
                      },
                      "roles": {
                        "type": "array",
                        "items": {
                          "type": "string",
                          "enum": [
                            "owner",
                            "supplier",
                            "depositor",
                            "customer",
                            "recipient"
                          ]
                        }
                      },
                      "email": {
                        "anyOf": [
                          {
                            "type": "string",
                            "format": "email"
                          },
                          {
                            "type": "null"
                          }
                        ]
                      },
                      "phone": {
                        "anyOf": [
                          {
                            "type": "string",
                            "maxLength": 100
                          },
                          {
                            "type": "null"
                          }
                        ]
                      },
                      "addressLines": {
                        "type": "array",
                        "maxItems": 8,
                        "items": {
                          "type": "string",
                          "maxLength": 500
                        }
                      },
                      "customerKind": {
                        "type": "string",
                        "enum": [
                          "professional",
                          "private",
                          "public_entity"
                        ]
                      },
                      "companyIdentifier": {
                        "anyOf": [
                          {
                            "type": "string",
                            "maxLength": 100
                          },
                          {
                            "type": "null"
                          }
                        ]
                      },
                      "vatIdentifier": {
                        "anyOf": [
                          {
                            "type": "string",
                            "maxLength": 100
                          },
                          {
                            "type": "null"
                          }
                        ]
                      },
                      "billingAddress": {
                        "type": "object",
                        "additionalProperties": false,
                        "properties": {
                          "line1": {
                            "type": "string",
                            "maxLength": 500
                          },
                          "line2": {
                            "anyOf": [
                              {
                                "type": "string",
                                "maxLength": 500
                              },
                              {
                                "type": "null"
                              }
                            ]
                          },
                          "postalCode": {
                            "type": "string",
                            "maxLength": 100
                          },
                          "city": {
                            "type": "string",
                            "maxLength": 200
                          },
                          "country": {
                            "type": "string",
                            "pattern": "^[A-Z]{2}$"
                          }
                        },
                        "required": [
                          "line1",
                          "city",
                          "country"
                        ]
                      },
                      "shippingAddress": {
                        "anyOf": [
                          {
                            "type": "object",
                            "additionalProperties": false,
                            "properties": {
                              "line1": {
                                "type": "string",
                                "maxLength": 500
                              },
                              "line2": {
                                "anyOf": [
                                  {
                                    "type": "string",
                                    "maxLength": 500
                                  },
                                  {
                                    "type": "null"
                                  }
                                ]
                              },
                              "postalCode": {
                                "type": "string",
                                "maxLength": 100
                              },
                              "city": {
                                "type": "string",
                                "maxLength": 200
                              },
                              "country": {
                                "type": "string",
                                "pattern": "^[A-Z]{2}$"
                              }
                            },
                            "required": [
                              "line1",
                              "city",
                              "country"
                            ]
                          },
                          {
                            "type": "null"
                          }
                        ]
                      }
                    },
                    "required": [
                      "name",
                      "kind",
                      "roles"
                    ]
                  },
                  "referenceId": {
                    "$ref": "#/components/schemas/InventoryUUID"
                  },
                  "expectedRevision": {
                    "$ref": "#/components/schemas/InventoryRevision"
                  }
                },
                "required": [
                  "kind",
                  "action",
                  "fields",
                  "referenceId",
                  "expectedRevision"
                ]
              },
              {
                "type": "object",
                "additionalProperties": false,
                "properties": {
                  "kind": {
                    "const": "location"
                  },
                  "action": {
                    "const": "create"
                  },
                  "fields": {
                    "type": "object",
                    "additionalProperties": false,
                    "properties": {
                      "name": {
                        "type": "string",
                        "maxLength": 500
                      },
                      "partyId": {
                        "anyOf": [
                          {
                            "type": "string",
                            "format": "uuid"
                          },
                          {
                            "type": "null"
                          }
                        ]
                      },
                      "addressLines": {
                        "type": "array",
                        "maxItems": 8,
                        "items": {
                          "type": "string",
                          "maxLength": 500
                        }
                      },
                      "active": {
                        "type": "boolean"
                      }
                    },
                    "required": [
                      "name"
                    ]
                  }
                },
                "required": [
                  "kind",
                  "action",
                  "fields"
                ]
              },
              {
                "type": "object",
                "additionalProperties": false,
                "properties": {
                  "kind": {
                    "const": "location"
                  },
                  "action": {
                    "const": "update"
                  },
                  "fields": {
                    "type": "object",
                    "additionalProperties": false,
                    "properties": {
                      "name": {
                        "type": "string",
                        "maxLength": 500
                      },
                      "partyId": {
                        "anyOf": [
                          {
                            "type": "string",
                            "format": "uuid"
                          },
                          {
                            "type": "null"
                          }
                        ]
                      },
                      "addressLines": {
                        "type": "array",
                        "maxItems": 8,
                        "items": {
                          "type": "string",
                          "maxLength": 500
                        }
                      },
                      "active": {
                        "type": "boolean"
                      }
                    },
                    "required": [
                      "name"
                    ]
                  },
                  "referenceId": {
                    "$ref": "#/components/schemas/InventoryUUID"
                  },
                  "expectedRevision": {
                    "$ref": "#/components/schemas/InventoryRevision"
                  }
                },
                "required": [
                  "kind",
                  "action",
                  "fields",
                  "referenceId",
                  "expectedRevision"
                ]
              },
              {
                "type": "object",
                "additionalProperties": false,
                "properties": {
                  "kind": {
                    "const": "type"
                  },
                  "action": {
                    "const": "create"
                  },
                  "fields": {
                    "type": "object",
                    "additionalProperties": false,
                    "properties": {
                      "name": {
                        "type": "object",
                        "minProperties": 1,
                        "maxProperties": 8,
                        "propertyNames": {
                          "pattern": "^[a-z]{2,3}(?:-[A-Za-z0-9]{2,8})*$"
                        },
                        "additionalProperties": {
                          "type": "string",
                          "maxLength": 5000
                        }
                      },
                      "active": {
                        "type": "boolean"
                      },
                      "position": {
                        "type": "integer",
                        "minimum": 0
                      }
                    },
                    "required": [
                      "name"
                    ]
                  }
                },
                "required": [
                  "kind",
                  "action",
                  "fields"
                ]
              },
              {
                "type": "object",
                "additionalProperties": false,
                "properties": {
                  "kind": {
                    "const": "type"
                  },
                  "action": {
                    "const": "update"
                  },
                  "fields": {
                    "type": "object",
                    "additionalProperties": false,
                    "properties": {
                      "name": {
                        "type": "object",
                        "minProperties": 1,
                        "maxProperties": 8,
                        "propertyNames": {
                          "pattern": "^[a-z]{2,3}(?:-[A-Za-z0-9]{2,8})*$"
                        },
                        "additionalProperties": {
                          "type": "string",
                          "maxLength": 5000
                        }
                      },
                      "active": {
                        "type": "boolean"
                      },
                      "position": {
                        "type": "integer",
                        "minimum": 0
                      }
                    },
                    "required": [
                      "name"
                    ]
                  },
                  "referenceId": {
                    "type": "integer",
                    "minimum": 1,
                    "maximum": 9007199254740991
                  },
                  "expectedRevision": {
                    "$ref": "#/components/schemas/InventoryRevision"
                  }
                },
                "required": [
                  "kind",
                  "action",
                  "fields",
                  "referenceId",
                  "expectedRevision"
                ]
              },
              {
                "type": "object",
                "additionalProperties": false,
                "properties": {
                  "kind": {
                    "const": "category"
                  },
                  "action": {
                    "const": "create"
                  },
                  "fields": {
                    "type": "object",
                    "additionalProperties": false,
                    "properties": {
                      "name": {
                        "$ref": "#/components/schemas/InventoryLocalizedText"
                      },
                      "active": {
                        "type": "boolean"
                      }
                    },
                    "required": [
                      "name"
                    ]
                  }
                },
                "required": [
                  "kind",
                  "action",
                  "fields"
                ]
              },
              {
                "type": "object",
                "additionalProperties": false,
                "properties": {
                  "kind": {
                    "const": "category"
                  },
                  "action": {
                    "const": "update"
                  },
                  "fields": {
                    "type": "object",
                    "additionalProperties": false,
                    "properties": {
                      "name": {
                        "$ref": "#/components/schemas/InventoryLocalizedText"
                      },
                      "active": {
                        "type": "boolean"
                      }
                    },
                    "required": [
                      "name"
                    ]
                  },
                  "referenceId": {
                    "$ref": "#/components/schemas/InventoryUUID"
                  },
                  "expectedRevision": {
                    "$ref": "#/components/schemas/InventoryRevision"
                  }
                },
                "required": [
                  "kind",
                  "action",
                  "fields",
                  "referenceId",
                  "expectedRevision"
                ]
              }
            ]
          }
        },
        "required": [
          "command",
          "reference"
        ],
        "x-inventory-effect": "commit_inventory_change",
        "x-inventory-financial": false,
        "x-inventory-role": "contributor",
        "x-inventory-scopes": [
          "site.inventory.write"
        ],
        "x-inventory-public-access-changed": false
      },
      "Inventoryinventory_revoke_public_media": {
        "type": "object",
        "additionalProperties": false,
        "properties": {
          "command": {
            "const": "inventory_revoke_public_media"
          },
          "mediaId": {
            "type": "string",
            "format": "uuid"
          },
          "expectedRevision": {
            "type": "string",
            "pattern": "^[1-9][0-9]*$",
            "maxLength": 20
          },
          "reason": {
            "type": "string",
            "maxLength": 2000
          }
        },
        "required": [
          "command",
          "mediaId",
          "expectedRevision"
        ],
        "x-inventory-effect": "commit_inventory_change",
        "x-inventory-financial": false,
        "x-inventory-role": "contributor",
        "x-inventory-scopes": [
          "site.inventory.publish"
        ],
        "x-inventory-public-access-changed": true
      },
      "Inventoryinventory_delete_media": {
        "type": "object",
        "additionalProperties": false,
        "properties": {
          "command": {
            "const": "inventory_delete_media"
          },
          "mediaId": {
            "type": "string",
            "format": "uuid"
          },
          "expectedRevision": {
            "type": "string",
            "pattern": "^[1-9][0-9]*$",
            "maxLength": 20
          }
        },
        "required": [
          "command",
          "mediaId",
          "expectedRevision"
        ],
        "x-inventory-effect": "commit_inventory_change",
        "x-inventory-financial": false,
        "x-inventory-role": "administrator",
        "x-inventory-scopes": [
          "site.inventory.write",
          "site.inventory.manage"
        ],
        "x-inventory-public-access-changed": false
      },
      "Inventoryinventory_confirm_import": {
        "type": "object",
        "additionalProperties": false,
        "properties": {
          "command": {
            "const": "inventory_confirm_import"
          },
          "batchId": {
            "type": "string",
            "format": "uuid"
          },
          "expectedRevision": {
            "type": "string",
            "pattern": "^[1-9][0-9]*$",
            "maxLength": 20
          },
          "simulationDigest": {
            "type": "string",
            "pattern": "^[a-f0-9]{64}$"
          }
        },
        "required": [
          "command",
          "batchId",
          "expectedRevision",
          "simulationDigest"
        ],
        "x-inventory-effect": "commit_inventory_change",
        "x-inventory-financial": false,
        "x-inventory-role": "administrator",
        "x-inventory-scopes": [
          "site.inventory.write",
          "site.inventory.manage",
          "site.inventory.finance"
        ],
        "x-inventory-public-access-changed": false
      },
      "Inventoryinventory_confirm_migration": {
        "type": "object",
        "additionalProperties": false,
        "properties": {
          "command": {
            "const": "inventory_confirm_migration"
          },
          "batchId": {
            "type": "string",
            "format": "uuid"
          },
          "expectedRevision": {
            "type": "string",
            "pattern": "^[1-9][0-9]*$",
            "maxLength": 20
          },
          "simulationDigest": {
            "type": "string",
            "pattern": "^[a-f0-9]{64}$"
          },
          "expectedSource": {
            "const": "artlogic"
          },
          "expectedSourceBindingRevision": {
            "$ref": "#/components/schemas/InventoryRevision"
          },
          "expectedFence": {
            "type": "string",
            "pattern": "^(0|[1-9][0-9]*)$",
            "maxLength": 20
          }
        },
        "required": [
          "command",
          "batchId",
          "expectedRevision",
          "simulationDigest",
          "expectedSource",
          "expectedSourceBindingRevision",
          "expectedFence"
        ],
        "x-inventory-effect": "commit_inventory_change",
        "x-inventory-financial": false,
        "x-inventory-role": "administrator",
        "x-inventory-scopes": [
          "site.inventory.write",
          "site.inventory.manage",
          "site.inventory.finance"
        ],
        "x-inventory-public-access-changed": false
      },
      "InventoryInventoryCommand": {
        "oneOf": [
          {
            "$ref": "#/components/schemas/Inventoryinventory_create_work"
          },
          {
            "$ref": "#/components/schemas/Inventoryinventory_replace_draft"
          },
          {
            "$ref": "#/components/schemas/Inventoryinventory_publish_work"
          },
          {
            "$ref": "#/components/schemas/Inventoryinventory_unpublish_work"
          },
          {
            "$ref": "#/components/schemas/Inventoryinventory_archive_work"
          },
          {
            "$ref": "#/components/schemas/Inventoryinventory_delete_work"
          },
          {
            "$ref": "#/components/schemas/Inventoryinventory_create_unit"
          },
          {
            "$ref": "#/components/schemas/Inventoryinventory_update_unit_logistics"
          },
          {
            "$ref": "#/components/schemas/Inventoryinventory_archive_unit"
          },
          {
            "$ref": "#/components/schemas/Inventoryinventory_reserve_unit"
          },
          {
            "$ref": "#/components/schemas/Inventoryinventory_release_reservation"
          },
          {
            "$ref": "#/components/schemas/Inventoryinventory_move_unit"
          },
          {
            "$ref": "#/components/schemas/Inventoryinventory_loan_unit"
          },
          {
            "$ref": "#/components/schemas/Inventoryinventory_return_loan"
          },
          {
            "$ref": "#/components/schemas/Inventoryinventory_correct_logistics_operation"
          },
          {
            "$ref": "#/components/schemas/Inventoryinventory_record_acquisition"
          },
          {
            "$ref": "#/components/schemas/Inventoryinventory_record_expense"
          },
          {
            "$ref": "#/components/schemas/Inventoryinventory_record_deposit"
          },
          {
            "$ref": "#/components/schemas/Inventoryinventory_record_sale"
          },
          {
            "$ref": "#/components/schemas/Inventoryinventory_prepare_document"
          },
          {
            "$ref": "#/components/schemas/Inventoryinventory_replace_document_draft"
          },
          {
            "$ref": "#/components/schemas/Inventoryinventory_issue_document"
          },
          {
            "$ref": "#/components/schemas/Inventoryinventory_record_payment"
          },
          {
            "$ref": "#/components/schemas/Inventoryinventory_record_refund"
          },
          {
            "$ref": "#/components/schemas/Inventoryinventory_save_reference"
          },
          {
            "$ref": "#/components/schemas/Inventoryinventory_revoke_public_media"
          },
          {
            "$ref": "#/components/schemas/Inventoryinventory_delete_media"
          },
          {
            "$ref": "#/components/schemas/Inventoryinventory_confirm_import"
          },
          {
            "$ref": "#/components/schemas/Inventoryinventory_confirm_migration"
          },
          {
            "$ref": "#/components/schemas/Inventoryinventory_replace_expense"
          },
          {
            "$ref": "#/components/schemas/Inventoryinventory_reallocate_expense"
          },
          {
            "$ref": "#/components/schemas/Inventoryinventory_correct_ledger_entry"
          },
          {
            "$ref": "#/components/schemas/Inventoryinventory_cancel_financial_operation"
          },
          {
            "$ref": "#/components/schemas/Inventoryinventory_update_deposit_terms"
          },
          {
            "$ref": "#/components/schemas/Inventoryinventory_create_seller_profile"
          },
          {
            "$ref": "#/components/schemas/Inventoryinventory_replace_seller_profile"
          },
          {
            "$ref": "#/components/schemas/Inventoryinventory_qualify_seller_profile"
          },
          {
            "$ref": "#/components/schemas/Inventoryinventory_create_tax_treatment"
          },
          {
            "$ref": "#/components/schemas/Inventoryinventory_replace_tax_treatment"
          },
          {
            "$ref": "#/components/schemas/Inventoryinventory_qualify_tax_treatment"
          },
          {
            "$ref": "#/components/schemas/Inventoryinventory_create_document_series"
          },
          {
            "$ref": "#/components/schemas/Inventoryinventory_deactivate_document_series"
          },
          {
            "$ref": "#/components/schemas/Inventoryinventory_set_assignment"
          },
          {
            "$ref": "#/components/schemas/Inventoryinventory_revoke_assignment"
          },
          {
            "$ref": "#/components/schemas/Inventoryinventory_receive_sales_return"
          },
          {
            "$ref": "#/components/schemas/Inventoryinventory_restock_returned_unit"
          },
          {
            "$ref": "#/components/schemas/Inventoryinventory_record_owner_settlement"
          }
        ]
      },
      "Inventoryinventory_replace_expense": {
        "type": "object",
        "additionalProperties": false,
        "properties": {
          "command": {
            "const": "inventory_replace_expense"
          },
          "expenseId": {
            "$ref": "#/components/schemas/InventoryUUID"
          },
          "expectedRevision": {
            "$ref": "#/components/schemas/InventoryRevision"
          },
          "category": {
            "type": "string",
            "enum": [
              "photo",
              "mounting",
              "restoration",
              "transport",
              "insurance",
              "other"
            ]
          },
          "date": {
            "anyOf": [
              {
                "type": "string",
                "format": "date"
              },
              {
                "type": "null"
              }
            ]
          },
          "total": {
            "anyOf": [
              {
                "$ref": "#/components/schemas/InventoryMoney"
              },
              {
                "type": "null"
              }
            ]
          },
          "supplierId": {
            "anyOf": [
              {
                "type": "string",
                "format": "uuid"
              },
              {
                "type": "null"
              }
            ]
          },
          "allocations": {
            "type": "array",
            "maxItems": 1000,
            "items": {
              "$ref": "#/components/schemas/InventoryExpenseAllocation"
            }
          },
          "evidenceIds": {
            "type": "array",
            "items": {
              "type": "string",
              "format": "uuid"
            }
          },
          "targetUnitIds": {
            "type": "array",
            "items": {
              "$ref": "#/components/schemas/InventoryUUID"
            },
            "uniqueItems": true,
            "maxItems": 1000
          }
        },
        "required": [
          "command",
          "expenseId",
          "expectedRevision",
          "category",
          "total",
          "allocations",
          "targetUnitIds"
        ],
        "x-inventory-effect": "commit_inventory_change",
        "x-inventory-financial": true,
        "x-inventory-role": "administrator",
        "x-inventory-scopes": [
          "site.inventory.write",
          "site.inventory.finance"
        ],
        "allOf": [
          {
            "if": {
              "properties": {
                "total": {
                  "type": "null"
                }
              },
              "required": [
                "total"
              ]
            },
            "then": {
              "properties": {
                "allocations": {
                  "maxItems": 0
                }
              }
            }
          }
        ],
        "x-inventory-public-access-changed": false
      },
      "Inventoryinventory_reallocate_expense": {
        "type": "object",
        "additionalProperties": false,
        "properties": {
          "command": {
            "const": "inventory_reallocate_expense"
          },
          "expenseId": {
            "$ref": "#/components/schemas/InventoryUUID"
          },
          "expectedRevision": {
            "$ref": "#/components/schemas/InventoryRevision"
          },
          "allocations": {
            "type": "array",
            "maxItems": 1000,
            "items": {
              "$ref": "#/components/schemas/InventoryExpenseAllocation"
            }
          },
          "reason": {
            "type": "string",
            "maxLength": 2000
          },
          "targetUnitIds": {
            "type": "array",
            "items": {
              "$ref": "#/components/schemas/InventoryUUID"
            },
            "uniqueItems": true,
            "maxItems": 1000
          }
        },
        "required": [
          "command",
          "expenseId",
          "expectedRevision",
          "allocations",
          "reason",
          "targetUnitIds"
        ],
        "x-inventory-effect": "commit_inventory_change",
        "x-inventory-financial": true,
        "x-inventory-role": "administrator",
        "x-inventory-scopes": [
          "site.inventory.write",
          "site.inventory.finance"
        ],
        "x-inventory-public-access-changed": false
      },
      "Inventoryinventory_correct_ledger_entry": {
        "type": "object",
        "additionalProperties": false,
        "properties": {
          "command": {
            "const": "inventory_correct_ledger_entry"
          },
          "entryId": {
            "$ref": "#/components/schemas/InventoryUUID"
          },
          "expectedRevision": {
            "$ref": "#/components/schemas/InventoryRevision"
          },
          "reason": {
            "type": "string",
            "minLength": 1,
            "maxLength": 2000
          },
          "date": {
            "type": "string",
            "format": "date"
          }
        },
        "required": [
          "command",
          "entryId",
          "expectedRevision",
          "reason",
          "date"
        ],
        "x-inventory-effect": "commit_inventory_change",
        "x-inventory-financial": true,
        "x-inventory-role": "administrator",
        "x-inventory-scopes": [
          "site.inventory.write",
          "site.inventory.finance"
        ],
        "x-inventory-public-access-changed": false
      },
      "Inventoryinventory_cancel_financial_operation": {
        "type": "object",
        "additionalProperties": false,
        "properties": {
          "command": {
            "const": "inventory_cancel_financial_operation"
          },
          "operationId": {
            "$ref": "#/components/schemas/InventoryUUID"
          },
          "expectedRevision": {
            "$ref": "#/components/schemas/InventoryRevision"
          },
          "reason": {
            "type": "string",
            "minLength": 1,
            "maxLength": 2000
          }
        },
        "required": [
          "command",
          "operationId",
          "expectedRevision",
          "reason"
        ],
        "x-inventory-effect": "commit_inventory_change",
        "x-inventory-financial": true,
        "x-inventory-role": "administrator",
        "x-inventory-scopes": [
          "site.inventory.write",
          "site.inventory.finance"
        ],
        "x-inventory-public-access-changed": false
      },
      "Inventoryinventory_update_deposit_terms": {
        "type": "object",
        "additionalProperties": false,
        "properties": {
          "command": {
            "const": "inventory_update_deposit_terms"
          },
          "operationId": {
            "$ref": "#/components/schemas/InventoryUUID"
          },
          "expectedRevision": {
            "$ref": "#/components/schemas/InventoryRevision"
          },
          "terms": {
            "type": "object",
            "additionalProperties": false,
            "properties": {
              "commission": {
                "anyOf": [
                  {
                    "$ref": "#/components/schemas/InventoryMoney"
                  },
                  {
                    "type": "null"
                  }
                ]
              },
              "insuranceValue": {
                "anyOf": [
                  {
                    "$ref": "#/components/schemas/InventoryMoney"
                  },
                  {
                    "type": "null"
                  }
                ]
              },
              "text": {
                "type": "string",
                "maxLength": 20000
              },
              "documentIds": {
                "type": "array",
                "items": {
                  "$ref": "#/components/schemas/InventoryUUID"
                },
                "uniqueItems": true
              },
              "commissionRate": {
                "anyOf": [
                  {
                    "$ref": "#/components/schemas/InventoryRate"
                  },
                  {
                    "type": "null"
                  }
                ]
              }
            },
            "required": [],
            "minProperties": 1
          }
        },
        "required": [
          "command",
          "operationId",
          "expectedRevision",
          "terms"
        ],
        "x-inventory-effect": "commit_inventory_change",
        "x-inventory-financial": true,
        "x-inventory-role": "administrator",
        "x-inventory-scopes": [
          "site.inventory.write",
          "site.inventory.finance"
        ],
        "x-inventory-public-access-changed": false
      },
      "InventoryCreditLine": {
        "type": "object",
        "additionalProperties": false,
        "properties": {
          "originalLineId": {
            "$ref": "#/components/schemas/InventoryUUID"
          },
          "amount": {
            "$ref": "#/components/schemas/InventoryMoney"
          },
          "reason": {
            "type": "string",
            "maxLength": 2000
          }
        },
        "required": [
          "originalLineId",
          "amount"
        ]
      },
      "InventorySellerFiscalProfile": {
        "type": "object",
        "additionalProperties": false,
        "properties": {
          "legalName": {
            "type": "string",
            "minLength": 1,
            "maxLength": 500
          },
          "legalForm": {
            "anyOf": [
              {
                "type": "string",
                "maxLength": 200
              },
              {
                "type": "null"
              }
            ]
          },
          "capital": {
            "anyOf": [
              {
                "$ref": "#/components/schemas/InventoryMoney"
              },
              {
                "type": "null"
              }
            ]
          },
          "country": {
            "type": "string",
            "pattern": "^[A-Z]{2}$"
          },
          "companyIdentifier": {
            "type": "string",
            "maxLength": 100
          },
          "registration": {
            "type": "string",
            "maxLength": 500
          },
          "vatIdentifier": {
            "anyOf": [
              {
                "type": "string",
                "maxLength": 100
              },
              {
                "type": "null"
              }
            ]
          },
          "billingAddress": {
            "type": "object",
            "additionalProperties": false,
            "properties": {
              "line1": {
                "type": "string",
                "maxLength": 500
              },
              "line2": {
                "anyOf": [
                  {
                    "type": "string",
                    "maxLength": 500
                  },
                  {
                    "type": "null"
                  }
                ]
              },
              "postalCode": {
                "type": "string",
                "maxLength": 100
              },
              "city": {
                "type": "string",
                "maxLength": 200
              },
              "country": {
                "type": "string",
                "pattern": "^[A-Z]{2}$"
              }
            },
            "required": [
              "line1",
              "city",
              "country"
            ]
          },
          "businessSize": {
            "type": "string",
            "enum": [
              "micro",
              "sme",
              "mid",
              "large",
              "other_qualified"
            ]
          },
          "vatStatus": {
            "type": "string",
            "enum": [
              "registered",
              "exempt",
              "other_qualified"
            ]
          },
          "electronicReceiptFrom": {
            "anyOf": [
              {
                "type": "string",
                "format": "date"
              },
              {
                "type": "null"
              }
            ]
          },
          "electronicIssueFrom": {
            "anyOf": [
              {
                "type": "string",
                "format": "date"
              },
              {
                "type": "null"
              }
            ]
          },
          "eReportingFrom": {
            "anyOf": [
              {
                "type": "string",
                "format": "date"
              },
              {
                "type": "null"
              }
            ]
          },
          "paymentTerms": {
            "type": "string",
            "maxLength": 10000
          },
          "retentionYears": {
            "type": "integer",
            "minimum": 10,
            "maximum": 100
          },
          "fiscalYearEnd": {
            "type": "string",
            "pattern": "^(0[1-9]|1[0-2])-(0[1-9]|[12][0-9]|3[01])$"
          },
          "invoiceChannelId": {
            "anyOf": [
              {
                "$ref": "#/components/schemas/InventoryUUID"
              },
              {
                "type": "null"
              }
            ]
          }
        },
        "required": [
          "legalName",
          "country",
          "billingAddress",
          "businessSize",
          "vatStatus",
          "paymentTerms",
          "retentionYears"
        ]
      },
      "Inventoryinventory_create_seller_profile": {
        "type": "object",
        "additionalProperties": false,
        "properties": {
          "command": {
            "const": "inventory_create_seller_profile"
          },
          "profile": {
            "$ref": "#/components/schemas/InventorySellerFiscalProfile"
          }
        },
        "required": [
          "command",
          "profile"
        ],
        "x-inventory-effect": "commit_inventory_change",
        "x-inventory-financial": true,
        "x-inventory-role": "administrator",
        "x-inventory-scopes": [
          "site.inventory.write",
          "site.inventory.finance",
          "site.inventory.manage"
        ],
        "x-inventory-public-access-changed": false
      },
      "Inventoryinventory_replace_seller_profile": {
        "type": "object",
        "additionalProperties": false,
        "properties": {
          "command": {
            "const": "inventory_replace_seller_profile"
          },
          "expectedRevision": {
            "$ref": "#/components/schemas/InventoryRevision"
          },
          "profile": {
            "$ref": "#/components/schemas/InventorySellerFiscalProfile"
          }
        },
        "required": [
          "command",
          "expectedRevision",
          "profile"
        ],
        "x-inventory-effect": "commit_inventory_change",
        "x-inventory-financial": true,
        "x-inventory-role": "administrator",
        "x-inventory-scopes": [
          "site.inventory.write",
          "site.inventory.finance",
          "site.inventory.manage"
        ],
        "x-inventory-public-access-changed": false
      },
      "Inventoryinventory_qualify_seller_profile": {
        "type": "object",
        "additionalProperties": false,
        "properties": {
          "command": {
            "const": "inventory_qualify_seller_profile"
          },
          "expectedRevision": {
            "$ref": "#/components/schemas/InventoryRevision"
          },
          "validation": {
            "type": "object",
            "additionalProperties": false,
            "properties": {
              "evidenceIds": {
                "type": "array",
                "minItems": 1,
                "items": {
                  "$ref": "#/components/schemas/InventoryUUID"
                },
                "uniqueItems": true
              },
              "scope": {
                "type": "string",
                "minLength": 1,
                "maxLength": 2000
              },
              "note": {
                "type": "string",
                "maxLength": 5000
              }
            },
            "required": [
              "evidenceIds",
              "scope"
            ]
          }
        },
        "required": [
          "command",
          "expectedRevision",
          "validation"
        ],
        "x-inventory-effect": "commit_inventory_change",
        "x-inventory-financial": true,
        "x-inventory-role": "administrator",
        "x-inventory-scopes": [
          "site.inventory.write",
          "site.inventory.finance",
          "site.inventory.manage"
        ],
        "x-inventory-public-access-changed": false
      },
      "InventoryTaxTreatment": {
        "type": "object",
        "additionalProperties": false,
        "properties": {
          "code": {
            "$ref": "#/components/schemas/InventoryReference"
          },
          "name": {
            "$ref": "#/components/schemas/InventoryLocalizedText"
          },
          "basis": {
            "type": "string",
            "enum": [
              "standard",
              "margin",
              "exempt",
              "other_qualified"
            ]
          },
          "rate": {
            "type": "object",
            "additionalProperties": false,
            "properties": {
              "numerator": {
                "type": "string",
                "pattern": "^(0|[1-9][0-9]{0,8})$"
              },
              "denominator": {
                "type": "string",
                "pattern": "^[1-9][0-9]{0,8}$"
              }
            },
            "required": [
              "numerator",
              "denominator"
            ]
          },
          "validFrom": {
            "type": "string",
            "format": "date"
          },
          "validUntil": {
            "anyOf": [
              {
                "type": "string",
                "format": "date"
              },
              {
                "type": "null"
              }
            ]
          },
          "showVatRate": {
            "type": "boolean"
          },
          "showVatAmount": {
            "type": "boolean"
          },
          "legalMentions": {
            "$ref": "#/components/schemas/InventoryLocalizedText"
          },
          "countries": {
            "type": "array",
            "items": {
              "type": "string",
              "pattern": "^[A-Z]{2}$"
            }
          },
          "customerKinds": {
            "type": "array",
            "items": {
              "type": "string",
              "enum": [
                "professional",
                "private",
                "public_entity"
              ]
            }
          },
          "goodsClassifications": {
            "type": "array",
            "items": {
              "type": "string",
              "maxLength": 100
            }
          },
          "sellerRoles": {
            "type": "array",
            "items": {
              "type": "string",
              "enum": [
                "own_account",
                "consignment_principal",
                "agent"
              ]
            }
          },
          "requiredEvidence": {
            "type": "array",
            "items": {
              "type": "string",
              "maxLength": 200
            }
          }
        },
        "required": [
          "code",
          "name",
          "basis",
          "rate",
          "validFrom",
          "showVatRate",
          "showVatAmount",
          "legalMentions"
        ],
        "allOf": [
          {
            "if": {
              "properties": {
                "basis": {
                  "const": "margin"
                }
              },
              "required": [
                "basis"
              ]
            },
            "then": {
              "properties": {
                "showVatRate": {
                  "const": false
                },
                "showVatAmount": {
                  "const": false
                }
              }
            }
          }
        ]
      },
      "Inventoryinventory_create_tax_treatment": {
        "type": "object",
        "additionalProperties": false,
        "properties": {
          "command": {
            "const": "inventory_create_tax_treatment"
          },
          "treatment": {
            "$ref": "#/components/schemas/InventoryTaxTreatment"
          }
        },
        "required": [
          "command",
          "treatment"
        ],
        "x-inventory-effect": "commit_inventory_change",
        "x-inventory-financial": true,
        "x-inventory-role": "administrator",
        "x-inventory-scopes": [
          "site.inventory.write",
          "site.inventory.finance",
          "site.inventory.manage"
        ],
        "x-inventory-public-access-changed": false
      },
      "Inventoryinventory_replace_tax_treatment": {
        "type": "object",
        "additionalProperties": false,
        "properties": {
          "command": {
            "const": "inventory_replace_tax_treatment"
          },
          "treatmentId": {
            "$ref": "#/components/schemas/InventoryUUID"
          },
          "expectedRevision": {
            "$ref": "#/components/schemas/InventoryRevision"
          },
          "treatment": {
            "$ref": "#/components/schemas/InventoryTaxTreatment"
          }
        },
        "required": [
          "command",
          "treatmentId",
          "expectedRevision",
          "treatment"
        ],
        "x-inventory-effect": "commit_inventory_change",
        "x-inventory-financial": true,
        "x-inventory-role": "administrator",
        "x-inventory-scopes": [
          "site.inventory.write",
          "site.inventory.finance",
          "site.inventory.manage"
        ],
        "x-inventory-public-access-changed": false
      },
      "Inventoryinventory_qualify_tax_treatment": {
        "type": "object",
        "additionalProperties": false,
        "properties": {
          "command": {
            "const": "inventory_qualify_tax_treatment"
          },
          "treatmentId": {
            "$ref": "#/components/schemas/InventoryUUID"
          },
          "expectedRevision": {
            "$ref": "#/components/schemas/InventoryRevision"
          },
          "validation": {
            "type": "object",
            "additionalProperties": false,
            "properties": {
              "evidenceIds": {
                "type": "array",
                "minItems": 1,
                "items": {
                  "$ref": "#/components/schemas/InventoryUUID"
                },
                "uniqueItems": true
              },
              "scope": {
                "type": "string",
                "minLength": 1,
                "maxLength": 2000
              },
              "note": {
                "type": "string",
                "maxLength": 5000
              }
            },
            "required": [
              "evidenceIds",
              "scope"
            ]
          }
        },
        "required": [
          "command",
          "treatmentId",
          "expectedRevision",
          "validation"
        ],
        "x-inventory-effect": "commit_inventory_change",
        "x-inventory-financial": true,
        "x-inventory-role": "administrator",
        "x-inventory-scopes": [
          "site.inventory.write",
          "site.inventory.finance",
          "site.inventory.manage"
        ],
        "x-inventory-public-access-changed": false
      },
      "Inventoryinventory_create_document_series": {
        "type": "object",
        "additionalProperties": false,
        "properties": {
          "command": {
            "const": "inventory_create_document_series"
          },
          "series": {
            "type": "object",
            "additionalProperties": false,
            "properties": {
              "kind": {
                "type": "string",
                "enum": [
                  "quote",
                  "invoice",
                  "credit_note"
                ]
              },
              "name": {
                "$ref": "#/components/schemas/InventoryReference"
              },
              "prefix": {
                "type": "string",
                "minLength": 1,
                "maxLength": 32,
                "pattern": "^[A-Za-z0-9/_-]+$"
              },
              "fiscalYear": {
                "type": "integer",
                "minimum": 1900,
                "maximum": 2200
              },
              "legalEntityProfileId": {
                "$ref": "#/components/schemas/InventoryUUID"
              }
            },
            "required": [
              "kind",
              "name",
              "prefix",
              "legalEntityProfileId"
            ]
          }
        },
        "required": [
          "command",
          "series"
        ],
        "x-inventory-effect": "commit_inventory_change",
        "x-inventory-financial": true,
        "x-inventory-role": "administrator",
        "x-inventory-scopes": [
          "site.inventory.write",
          "site.inventory.finance",
          "site.inventory.manage"
        ],
        "x-inventory-public-access-changed": false
      },
      "Inventoryinventory_deactivate_document_series": {
        "type": "object",
        "additionalProperties": false,
        "properties": {
          "command": {
            "const": "inventory_deactivate_document_series"
          },
          "seriesId": {
            "$ref": "#/components/schemas/InventoryUUID"
          },
          "expectedRevision": {
            "$ref": "#/components/schemas/InventoryRevision"
          }
        },
        "required": [
          "command",
          "seriesId",
          "expectedRevision"
        ],
        "x-inventory-effect": "commit_inventory_change",
        "x-inventory-financial": true,
        "x-inventory-role": "administrator",
        "x-inventory-scopes": [
          "site.inventory.write",
          "site.inventory.finance",
          "site.inventory.manage"
        ],
        "x-inventory-public-access-changed": false
      },
      "Inventoryinventory_set_assignment": {
        "type": "object",
        "additionalProperties": false,
        "properties": {
          "command": {
            "const": "inventory_set_assignment"
          },
          "issuer": {
            "type": "string",
            "format": "uri"
          },
          "subject": {
            "type": "string",
            "minLength": 1,
            "maxLength": 500
          },
          "role": {
            "type": "string",
            "enum": [
              "administrator",
              "contributor"
            ]
          },
          "expectedAssignmentRevision": {
            "anyOf": [
              {
                "$ref": "#/components/schemas/InventoryRevision"
              },
              {
                "type": "null"
              }
            ]
          }
        },
        "required": [
          "command",
          "issuer",
          "subject",
          "role",
          "expectedAssignmentRevision"
        ],
        "x-inventory-effect": "commit_inventory_change",
        "x-inventory-financial": false,
        "x-inventory-role": "administrator",
        "x-inventory-scopes": [
          "site.inventory.write",
          "site.inventory.manage"
        ],
        "x-inventory-public-access-changed": false
      },
      "Inventoryinventory_revoke_assignment": {
        "type": "object",
        "additionalProperties": false,
        "properties": {
          "command": {
            "const": "inventory_revoke_assignment"
          },
          "assignmentId": {
            "$ref": "#/components/schemas/InventoryUUID"
          },
          "expectedRevision": {
            "$ref": "#/components/schemas/InventoryRevision"
          },
          "reason": {
            "type": "string",
            "maxLength": 2000
          }
        },
        "required": [
          "command",
          "assignmentId",
          "expectedRevision",
          "reason"
        ],
        "x-inventory-effect": "commit_inventory_change",
        "x-inventory-financial": false,
        "x-inventory-role": "administrator",
        "x-inventory-scopes": [
          "site.inventory.write",
          "site.inventory.manage"
        ],
        "x-inventory-public-access-changed": false
      },
      "Inventoryinventory_receive_sales_return": {
        "type": "object",
        "additionalProperties": false,
        "properties": {
          "command": {
            "const": "inventory_receive_sales_return"
          },
          "saleId": {
            "$ref": "#/components/schemas/InventoryUUID"
          },
          "unitId": {
            "$ref": "#/components/schemas/InventoryUUID"
          },
          "expectedRevision": {
            "$ref": "#/components/schemas/InventoryRevision"
          },
          "receivedAt": {
            "type": "string",
            "format": "date-time"
          },
          "locationId": {
            "anyOf": [
              {
                "$ref": "#/components/schemas/InventoryUUID"
              },
              {
                "type": "null"
              }
            ]
          },
          "conditionNotes": {
            "type": "string",
            "maxLength": 10000
          }
        },
        "required": [
          "command",
          "saleId",
          "unitId",
          "expectedRevision",
          "receivedAt"
        ],
        "x-inventory-effect": "commit_inventory_change",
        "x-inventory-financial": true,
        "x-inventory-role": "administrator",
        "x-inventory-scopes": [
          "site.inventory.write",
          "site.inventory.finance"
        ],
        "x-inventory-public-access-changed": false
      },
      "Inventoryinventory_restock_returned_unit": {
        "type": "object",
        "additionalProperties": false,
        "properties": {
          "command": {
            "const": "inventory_restock_returned_unit"
          },
          "saleId": {
            "$ref": "#/components/schemas/InventoryUUID"
          },
          "unitId": {
            "$ref": "#/components/schemas/InventoryUUID"
          },
          "expectedRevision": {
            "$ref": "#/components/schemas/InventoryRevision"
          },
          "reason": {
            "type": "string",
            "minLength": 1,
            "maxLength": 2000
          }
        },
        "required": [
          "command",
          "saleId",
          "unitId",
          "expectedRevision",
          "reason"
        ],
        "x-inventory-effect": "commit_inventory_change",
        "x-inventory-financial": true,
        "x-inventory-role": "administrator",
        "x-inventory-scopes": [
          "site.inventory.write",
          "site.inventory.finance"
        ],
        "x-inventory-public-access-changed": false
      },
      "Inventoryinventory_record_owner_settlement": {
        "type": "object",
        "additionalProperties": false,
        "properties": {
          "command": {
            "const": "inventory_record_owner_settlement"
          },
          "depositOperationId": {
            "$ref": "#/components/schemas/InventoryUUID"
          },
          "expectedRevision": {
            "$ref": "#/components/schemas/InventoryRevision"
          },
          "amount": {
            "$ref": "#/components/schemas/InventoryMoney"
          },
          "direction": {
            "type": "string",
            "enum": [
              "pay_owner",
              "receive_owner"
            ]
          },
          "date": {
            "type": "string",
            "format": "date"
          },
          "method": {
            "type": "string",
            "enum": [
              "bank_transfer",
              "cash",
              "card_external",
              "cheque",
              "other"
            ]
          },
          "reference": {
            "type": "string",
            "maxLength": 500
          }
        },
        "required": [
          "command",
          "depositOperationId",
          "expectedRevision",
          "amount",
          "direction",
          "date",
          "method",
          "reference"
        ],
        "x-inventory-effect": "commit_inventory_change",
        "x-inventory-financial": true,
        "x-inventory-role": "administrator",
        "x-inventory-scopes": [
          "site.inventory.write",
          "site.inventory.finance"
        ],
        "x-inventory-public-access-changed": false
      },
      "InventoryRate": {
        "type": "object",
        "additionalProperties": false,
        "properties": {
          "numerator": {
            "type": "string",
            "pattern": "^(0|[1-9][0-9]{0,8})$"
          },
          "denominator": {
            "type": "string",
            "pattern": "^[1-9][0-9]{0,8}$"
          }
        },
        "required": [
          "numerator",
          "denominator"
        ]
      },
      "InventoryInventoryResourceRef": {
        "oneOf": [
          {
            "type": "object",
            "additionalProperties": false,
            "properties": {
              "kind": {
                "type": "string",
                "enum": [
                  "artwork",
                  "unit",
                  "artist",
                  "origin",
                  "party",
                  "location",
                  "logistics_operation",
                  "sale",
                  "document",
                  "import_batch",
                  "tax_treatment",
                  "document_series",
                  "ledger_entry",
                  "expense",
                  "deposit",
                  "assignment",
                  "category",
                  "media"
                ]
              },
              "id": {
                "$ref": "#/components/schemas/InventoryUUID"
              }
            },
            "required": [
              "kind",
              "id"
            ]
          },
          {
            "type": "object",
            "additionalProperties": false,
            "properties": {
              "kind": {
                "const": "type"
              },
              "id": {
                "type": "integer",
                "minimum": 1,
                "maximum": 9007199254740991
              }
            },
            "required": [
              "kind",
              "id"
            ]
          },
          {
            "type": "object",
            "additionalProperties": false,
            "properties": {
              "kind": {
                "const": "fiscal_profile"
              },
              "id": {
                "const": "current"
              }
            },
            "required": [
              "kind",
              "id"
            ]
          }
        ]
      },
      "InventoryReadInventoryInput": {
        "type": "object",
        "additionalProperties": false,
        "properties": {
          "resource": {
            "$ref": "#/components/schemas/InventoryInventoryResourceRef"
          },
          "projection": {
            "type": "string",
            "enum": [
              "editorial",
              "logistics",
              "private_notes",
              "finance",
              "management"
            ],
            "description": "Projection explicite compatible avec la ressource. Finance nécessite administrator et le scope finance ; private_notes est réservé à artwork et reste hors du snapshot public."
          },
          "after": {
            "type": "integer",
            "minimum": 0,
            "maximum": 25000,
            "description": "Import batch rows only."
          },
          "limit": {
            "type": "integer",
            "minimum": 1,
            "maximum": 100,
            "description": "Import batch rows only; default 20."
          }
        },
        "required": [
          "resource"
        ]
      },
      "InventoryFindInventoryInput": {
        "type": "object",
        "additionalProperties": false,
        "properties": {
          "kind": {
            "type": "string",
            "enum": [
              "artwork",
              "unit",
              "artist",
              "origin",
              "party",
              "location",
              "logistics_operation",
              "sale",
              "document",
              "import_batch",
              "tax_treatment",
              "document_series",
              "ledger_entry",
              "expense",
              "deposit",
              "assignment",
              "type",
              "category",
              "media"
            ]
          },
          "filters": {
            "type": "object",
            "additionalProperties": false,
            "properties": {
              "query": {
                "type": "string",
                "minLength": 1,
                "maxLength": 500
              },
              "publication": {
                "type": "string",
                "enum": [
                  "hidden",
                  "published"
                ]
              },
              "commercialState": {
                "type": "string",
                "enum": [
                  "unqualified",
                  "available",
                  "reserved",
                  "sold"
                ]
              },
              "custodyState": {
                "type": "string",
                "enum": [
                  "unknown",
                  "held",
                  "loaned_out",
                  "deposited_out",
                  "returned_to_owner"
                ]
              },
              "artworkId": {
                "$ref": "#/components/schemas/InventoryUUID"
              },
              "artistId": {
                "$ref": "#/components/schemas/InventoryUUID"
              },
              "originId": {
                "$ref": "#/components/schemas/InventoryUUID"
              },
              "ownerId": {
                "$ref": "#/components/schemas/InventoryUUID"
              },
              "locationId": {
                "$ref": "#/components/schemas/InventoryUUID"
              },
              "typeIds": {
                "type": "array",
                "maxItems": 100,
                "items": {
                  "type": "integer",
                  "minimum": 1,
                  "maximum": 9007199254740991
                }
              },
              "fromDate": {
                "type": "string",
                "format": "date"
              },
              "toDate": {
                "type": "string",
                "format": "date"
              },
              "categoryIds": {
                "type": "array",
                "items": {
                  "$ref": "#/components/schemas/InventoryUUID"
                },
                "uniqueItems": true,
                "maxItems": 1000
              },
              "unitId": {
                "$ref": "#/components/schemas/InventoryUUID"
              },
              "partyId": {
                "$ref": "#/components/schemas/InventoryUUID"
              },
              "operationStatus": {
                "type": "string",
                "enum": [
                  "draft",
                  "active",
                  "completed",
                  "cancelled"
                ]
              },
              "includeArchived": {
                "type": "boolean"
              },
              "ids": {
                "type": "array",
                "maxItems": 100,
                "minItems": 1,
                "uniqueItems": true,
                "items": {
                  "$ref": "#/components/schemas/InventoryUUID"
                }
              },
              "documentId": {
                "$ref": "#/components/schemas/InventoryUUID"
              },
              "depositOperationId": {
                "$ref": "#/components/schemas/InventoryUUID"
              }
            },
            "required": []
          },
          "limit": {
            "type": "integer",
            "minimum": 1,
            "maximum": 100
          },
          "cursor": {
            "type": "string",
            "minLength": 1,
            "maxLength": 4096
          }
        },
        "required": [
          "kind"
        ]
      },
      "InventoryInventoryClientFile": {
        "type": "object",
        "additionalProperties": false,
        "properties": {
          "download_url": {
            "type": "string",
            "format": "uri",
            "maxLength": 4096
          },
          "file_id": {
            "type": "string",
            "minLength": 1,
            "maxLength": 500
          },
          "mime_type": {
            "type": "string",
            "minLength": 1,
            "maxLength": 200
          },
          "file_name": {
            "type": "string",
            "minLength": 1,
            "maxLength": 500
          }
        },
        "required": [
          "download_url",
          "file_id",
          "mime_type",
          "file_name"
        ]
      },
      "InventoryPrepareInventoryImportInput": {
        "type": "object",
        "additionalProperties": false,
        "properties": {
          "importKey": {
            "type": "string",
            "minLength": 1,
            "maxLength": 128
          },
          "catalogFile": {
            "type": "object",
            "additionalProperties": false,
            "properties": {
              "download_url": {
                "type": "string",
                "format": "uri",
                "maxLength": 4096
              },
              "file_id": {
                "type": "string",
                "minLength": 1,
                "maxLength": 500
              },
              "mime_type": {
                "type": "string",
                "minLength": 1,
                "maxLength": 200
              },
              "file_name": {
                "type": "string",
                "minLength": 1,
                "maxLength": 500
              }
            },
            "required": [
              "download_url",
              "file_id",
              "mime_type",
              "file_name"
            ]
          },
          "imagesZip": {
            "type": "object",
            "additionalProperties": false,
            "properties": {
              "download_url": {
                "type": "string",
                "format": "uri",
                "maxLength": 4096
              },
              "file_id": {
                "type": "string",
                "minLength": 1,
                "maxLength": 500
              },
              "mime_type": {
                "type": "string",
                "minLength": 1,
                "maxLength": 200
              },
              "file_name": {
                "type": "string",
                "minLength": 1,
                "maxLength": 500
              }
            },
            "required": [
              "download_url",
              "file_id",
              "mime_type",
              "file_name"
            ]
          },
          "delimiter": {
            "type": "string",
            "enum": [
              "comma",
              "semicolon"
            ]
          },
          "mapping": {
            "type": "array",
            "maxItems": 500,
            "items": {
              "type": "object",
              "additionalProperties": false,
              "properties": {
                "sourceColumn": {
                  "type": "string",
                  "minLength": 1,
                  "maxLength": 200
                },
                "targetField": {
                  "type": "string",
                  "enum": [
                    "row_type",
                    "work_ref",
                    "copy_ref",
                    "action",
                    "record_kind",
                    "title",
                    "description",
                    "provenance",
                    "artist_ref",
                    "origin_ref",
                    "type_id",
                    "year",
                    "medium",
                    "file_path",
                    "media_ref",
                    "position",
                    "primary",
                    "visibility",
                    "alt",
                    "caption",
                    "credit",
                    "owner_ref",
                    "location_ref",
                    "edition_number",
                    "commercial_state",
                    "custody_state",
                    "acquisition_kind",
                    "acquisition_date",
                    "acquisition_amount_minor",
                    "tax_purchase_price_minor",
                    "currency",
                    "scale",
                    "cost_ref",
                    "category",
                    "date",
                    "total_minor",
                    "allocated_minor",
                    "supplier_ref",
                    "party_ref",
                    "name",
                    "roles",
                    "kind",
                    "culture",
                    "country",
                    "region",
                    "period",
                    "biography",
                    "clear_fields",
                    "category_ref",
                    "category_refs",
                    "active",
                    "ignore",
                    "association",
                    "materials",
                    "technique",
                    "condition",
                    "bibliography",
                    "exhibitions",
                    "inscriptions",
                    "email",
                    "phone",
                    "address",
                    "dates",
                    "nationalities"
                  ]
                },
                "locale": {
                  "type": "string",
                  "pattern": "^[a-z]{2,3}(?:-[A-Za-z0-9]{2,8})*$"
                }
              },
              "required": [
                "sourceColumn",
                "targetField"
              ]
            }
          },
          "mode": {
            "type": "string",
            "enum": [
              "create",
              "update",
              "mixed_explicit"
            ]
          }
        },
        "required": [
          "importKey",
          "catalogFile",
          "delimiter",
          "mapping"
        ]
      },
      "InventoryImportInventoryPhotoInput": {
        "type": "object",
        "additionalProperties": false,
        "properties": {
          "importKey": {
            "type": "string",
            "minLength": 1,
            "maxLength": 128
          },
          "file": {
            "type": "object",
            "additionalProperties": false,
            "properties": {
              "download_url": {
                "type": "string",
                "format": "uri",
                "maxLength": 4096
              },
              "file_id": {
                "type": "string",
                "minLength": 1,
                "maxLength": 500
              },
              "mime_type": {
                "type": "string",
                "minLength": 1,
                "maxLength": 200
              },
              "file_name": {
                "type": "string",
                "minLength": 1,
                "maxLength": 500
              }
            },
            "required": [
              "download_url",
              "file_id",
              "mime_type",
              "file_name"
            ]
          }
        },
        "required": [
          "importKey",
          "file"
        ]
      },
      "InventoryInventoryUploadAttemptInput": {
        "type": "object",
        "additionalProperties": false,
        "properties": {
          "uploadKey": {
            "type": "string",
            "minLength": 1,
            "maxLength": 128
          },
          "fileName": {
            "type": "string",
            "minLength": 1,
            "maxLength": 500
          },
          "mimeType": {
            "type": "string",
            "enum": [
              "image/jpeg",
              "image/png",
              "image/webp"
            ]
          },
          "bytes": {
            "type": "integer",
            "minimum": 1,
            "maximum": 26214400
          },
          "sha256": {
            "type": "string",
            "pattern": "^[a-f0-9]{64}$"
          }
        },
        "required": [
          "uploadKey",
          "fileName",
          "mimeType",
          "bytes"
        ]
      },
      "InventoryInventoryAttachmentUploadInput": {
        "type": "object",
        "additionalProperties": false,
        "properties": {
          "uploadKey": {
            "type": "string",
            "minLength": 1,
            "maxLength": 128
          },
          "fileName": {
            "type": "string",
            "minLength": 1,
            "maxLength": 500
          },
          "mimeType": {
            "type": "string",
            "enum": [
              "image/jpeg",
              "image/png",
              "image/webp",
              "application/pdf"
            ]
          },
          "bytes": {
            "type": "integer",
            "minimum": 1,
            "maximum": 26214400
          },
          "classification": {
            "type": "string",
            "enum": [
              "financial_document",
              "non_financial_document"
            ]
          },
          "sha256": {
            "type": "string",
            "pattern": "^[a-f0-9]{64}$"
          }
        },
        "required": [
          "uploadKey",
          "fileName",
          "mimeType",
          "bytes",
          "classification"
        ]
      },
      "InventoryImportInventoryAttachmentInput": {
        "type": "object",
        "additionalProperties": false,
        "properties": {
          "importKey": {
            "type": "string",
            "minLength": 1,
            "maxLength": 128
          },
          "file": {
            "$ref": "#/components/schemas/InventoryInventoryClientFile"
          },
          "classification": {
            "type": "string",
            "enum": [
              "financial_document",
              "non_financial_document"
            ]
          }
        },
        "required": [
          "importKey",
          "file",
          "classification"
        ]
      },
      "InventoryError": {
        "type": "object",
        "additionalProperties": false,
        "properties": {
          "error": {
            "type": "object",
            "additionalProperties": false,
            "properties": {
              "code": {
                "type": "string",
                "pattern": "^[a-z][a-z0-9_]+$"
              },
              "message": {
                "type": "string"
              },
              "retryable": {
                "type": "boolean"
              },
              "path": {
                "type": "string"
              },
              "operationId": {
                "$ref": "#/components/schemas/InventoryUUID"
              }
            },
            "required": [
              "code",
              "message",
              "retryable"
            ]
          }
        },
        "required": [
          "error"
        ]
      },
      "InventoryReceipt": {
        "type": "object",
        "additionalProperties": false,
        "properties": {
          "operationId": {
            "$ref": "#/components/schemas/InventoryUUID"
          },
          "resource": {
            "$ref": "#/components/schemas/InventoryInventoryResourceRef"
          },
          "revision": {
            "$ref": "#/components/schemas/InventoryRevision"
          },
          "publicationChanged": {
            "type": "boolean"
          },
          "publicAccessChanged": {
            "type": "boolean"
          }
        },
        "required": [
          "operationId",
          "resource",
          "revision",
          "publicationChanged",
          "publicAccessChanged"
        ]
      },
      "InventoryCapabilities": {
        "type": "object",
        "additionalProperties": false,
        "properties": {
          "source": {
            "enum": [
              "artlogic",
              "standalone"
            ]
          },
          "bindingSource": {
            "enum": [
              "artlogic",
              "standalone"
            ]
          },
          "bindingRevision": {
            "$ref": "#/components/schemas/InventoryRevision"
          },
          "fence": {
            "type": "string",
            "pattern": "^(0|[1-9][0-9]*)$"
          },
          "readOnly": {
            "type": "boolean"
          },
          "role": {
            "enum": [
              "administrator",
              "contributor"
            ]
          },
          "commands": {
            "type": "array",
            "items": {
              "type": "string",
              "enum": [
                "inventory_create_work",
                "inventory_replace_draft",
                "inventory_publish_work",
                "inventory_unpublish_work",
                "inventory_archive_work",
                "inventory_delete_work",
                "inventory_create_unit",
                "inventory_update_unit_logistics",
                "inventory_archive_unit",
                "inventory_reserve_unit",
                "inventory_release_reservation",
                "inventory_move_unit",
                "inventory_loan_unit",
                "inventory_return_loan",
                "inventory_correct_logistics_operation",
                "inventory_record_acquisition",
                "inventory_record_expense",
                "inventory_record_deposit",
                "inventory_record_sale",
                "inventory_prepare_document",
                "inventory_replace_document_draft",
                "inventory_issue_document",
                "inventory_record_payment",
                "inventory_record_refund",
                "inventory_save_reference",
                "inventory_revoke_public_media",
                "inventory_delete_media",
                "inventory_confirm_import",
                "inventory_confirm_migration",
                "inventory_replace_expense",
                "inventory_reallocate_expense",
                "inventory_correct_ledger_entry",
                "inventory_cancel_financial_operation",
                "inventory_update_deposit_terms",
                "inventory_create_seller_profile",
                "inventory_replace_seller_profile",
                "inventory_qualify_seller_profile",
                "inventory_create_tax_treatment",
                "inventory_replace_tax_treatment",
                "inventory_qualify_tax_treatment",
                "inventory_create_document_series",
                "inventory_deactivate_document_series",
                "inventory_set_assignment",
                "inventory_revoke_assignment",
                "inventory_receive_sales_return",
                "inventory_restock_returned_unit",
                "inventory_record_owner_settlement"
              ]
            }
          },
          "limits": {
            "type": "object",
            "additionalProperties": false,
            "properties": {
              "imageBytes": {
                "type": "integer",
                "maximum": 26214400
              },
              "imagePixels": {
                "type": "integer",
                "maximum": 40000000
              },
              "listDefault": {
                "const": 50
              },
              "listMaximum": {
                "const": 100
              },
              "mimeTypes": {
                "type": "array",
                "items": {
                  "enum": [
                    "image/jpeg",
                    "image/png",
                    "image/webp"
                  ]
                }
              }
            },
            "required": [
              "imageBytes",
              "imagePixels",
              "listDefault",
              "listMaximum",
              "mimeTypes"
            ]
          },
          "dependencies": {
            "type": "array",
            "items": {
              "$ref": "#/components/schemas/InventoryDependency"
            },
            "minItems": 2,
            "maxItems": 2
          },
          "optionalEditorialFields": {
            "type": "array",
            "items": {
              "enum": [
                "shortDescription"
              ]
            },
            "uniqueItems": true,
            "maxItems": 1
          },
          "importsAvailable": {
            "type": "boolean",
            "description": "Optional additive capability. Missing means imports are unavailable."
          },
          "importColumns": {
            "type": "array",
            "items": {
              "type": "string"
            },
            "maxItems": 500
          },
          "importLimits": {
            "type": "object",
            "additionalProperties": false,
            "properties": {
              "catalogBytes": {
                "type": "integer",
                "minimum": 1
              },
              "imagesBytes": {
                "type": "integer",
                "minimum": 1
              }
            },
            "required": [
              "catalogBytes",
              "imagesBytes"
            ]
          }
        },
        "required": [
          "source",
          "bindingSource",
          "bindingRevision",
          "fence",
          "readOnly",
          "role",
          "commands",
          "limits",
          "dependencies"
        ]
      },
      "InventoryArtwork": {
        "type": "object",
        "additionalProperties": false,
        "properties": {
          "artworkId": {
            "$ref": "#/components/schemas/InventoryUUID"
          },
          "workRef": {
            "$ref": "#/components/schemas/InventoryReference"
          },
          "draftRevision": {
            "$ref": "#/components/schemas/InventoryRevision"
          },
          "publicationRevision": {
            "anyOf": [
              {
                "$ref": "#/components/schemas/InventoryRevision"
              },
              {
                "type": "null"
              }
            ]
          },
          "draft": {
            "$ref": "#/components/schemas/InventoryWorkDraft"
          },
          "publication": {
            "enum": [
              "hidden",
              "published"
            ]
          },
          "sourceId": {
            "type": "string"
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
          "artworkId",
          "workRef",
          "draftRevision",
          "publicationRevision",
          "draft",
          "publication",
          "sourceId",
          "archived",
          "createdAt",
          "updatedAt"
        ]
      },
      "InventoryUnitLogistics": {
        "type": "object",
        "additionalProperties": false,
        "properties": {
          "unitId": {
            "$ref": "#/components/schemas/InventoryUUID"
          },
          "artworkId": {
            "$ref": "#/components/schemas/InventoryUUID"
          },
          "unitRef": {
            "$ref": "#/components/schemas/InventoryReference"
          },
          "editionNumber": {
            "anyOf": [
              {
                "type": "string"
              },
              {
                "type": "null"
              }
            ]
          },
          "ownerPartyId": {
            "anyOf": [
              {
                "$ref": "#/components/schemas/InventoryUUID"
              },
              {
                "type": "null"
              }
            ]
          },
          "locationId": {
            "anyOf": [
              {
                "$ref": "#/components/schemas/InventoryUUID"
              },
              {
                "type": "null"
              }
            ]
          },
          "conditionNotes": {
            "anyOf": [
              {
                "type": "string"
              },
              {
                "type": "null"
              }
            ]
          },
          "commercialState": {
            "enum": [
              "unqualified",
              "available",
              "reserved",
              "sold"
            ]
          },
          "custodyState": {
            "enum": [
              "unknown",
              "held",
              "loaned_out",
              "deposited_out",
              "returned_to_owner"
            ]
          },
          "logisticsRevision": {
            "$ref": "#/components/schemas/InventoryRevision"
          },
          "archived": {
            "type": "boolean"
          }
        },
        "required": [
          "unitId",
          "artworkId",
          "unitRef",
          "editionNumber",
          "ownerPartyId",
          "locationId",
          "conditionNotes",
          "commercialState",
          "custodyState",
          "logisticsRevision",
          "archived"
        ]
      },
      "InventoryMedia": {
        "type": "object",
        "additionalProperties": false,
        "properties": {
          "mediaId": {
            "$ref": "#/components/schemas/InventoryUUID"
          },
          "status": {
            "enum": [
              "pending",
              "processing",
              "ready",
              "rejected",
              "revoked"
            ]
          },
          "createdAt": {
            "type": "string",
            "format": "date-time"
          },
          "mimeType": {
            "enum": [
              "image/jpeg",
              "image/png",
              "image/webp"
            ]
          },
          "fileName": {
            "type": "string"
          },
          "width": {
            "type": [
              "integer",
              "null"
            ],
            "minimum": 1
          },
          "height": {
            "type": [
              "integer",
              "null"
            ],
            "minimum": 1
          },
          "bytes": {
            "type": "integer"
          },
          "revision": {
            "$ref": "#/components/schemas/InventoryRevision"
          },
          "errorCode": {
            "type": [
              "string",
              "null"
            ],
            "maxLength": 80
          }
        },
        "required": [
          "mediaId",
          "status",
          "createdAt",
          "mimeType",
          "fileName",
          "width",
          "height",
          "bytes",
          "revision"
        ]
      },
      "InventoryLogisticsOperation": {
        "type": "object",
        "additionalProperties": false,
        "properties": {
          "operationId": {
            "$ref": "#/components/schemas/InventoryUUID"
          },
          "kind": {
            "enum": [
              "reservation",
              "movement",
              "loan",
              "return",
              "deposit_in",
              "deposit_out",
              "correction"
            ]
          },
          "unitIds": {
            "type": "array",
            "items": {
              "$ref": "#/components/schemas/InventoryUUID"
            }
          },
          "partyId": {
            "anyOf": [
              {
                "$ref": "#/components/schemas/InventoryUUID"
              },
              {
                "type": "null"
              }
            ]
          },
          "fromLocationId": {
            "anyOf": [
              {
                "$ref": "#/components/schemas/InventoryUUID"
              },
              {
                "type": "null"
              }
            ]
          },
          "toLocationId": {
            "anyOf": [
              {
                "$ref": "#/components/schemas/InventoryUUID"
              },
              {
                "type": "null"
              }
            ]
          },
          "status": {
            "enum": [
              "draft",
              "active",
              "completed",
              "cancelled"
            ]
          },
          "occurredAt": {
            "type": "string",
            "format": "date-time"
          },
          "expectedReturnAt": {
            "anyOf": [
              {
                "type": "string",
                "format": "date-time"
              },
              {
                "type": "null"
              }
            ]
          },
          "notes": {
            "anyOf": [
              {
                "type": "string"
              },
              {
                "type": "null"
              }
            ]
          },
          "revision": {
            "$ref": "#/components/schemas/InventoryRevision"
          },
          "relatedOperationId": {
            "anyOf": [
              {
                "$ref": "#/components/schemas/InventoryUUID"
              },
              {
                "type": "null"
              }
            ]
          },
          "cancelledByOperationId": {
            "anyOf": [
              {
                "$ref": "#/components/schemas/InventoryUUID"
              },
              {
                "type": "null"
              }
            ]
          }
        },
        "required": [
          "operationId",
          "kind",
          "unitIds",
          "partyId",
          "fromLocationId",
          "toLocationId",
          "status",
          "occurredAt",
          "expectedReturnAt",
          "notes",
          "revision"
        ]
      },
      "InventoryExpense": {
        "type": "object",
        "additionalProperties": false,
        "properties": {
          "expenseId": {
            "$ref": "#/components/schemas/InventoryUUID"
          },
          "expenseRef": {
            "$ref": "#/components/schemas/InventoryReference"
          },
          "category": {
            "enum": [
              "photo",
              "mounting",
              "restoration",
              "transport",
              "insurance",
              "other"
            ]
          },
          "date": {
            "anyOf": [
              {
                "type": "string",
                "format": "date"
              },
              {
                "type": "null"
              }
            ]
          },
          "total": {
            "anyOf": [
              {
                "$ref": "#/components/schemas/InventoryMoney"
              },
              {
                "type": "null"
              }
            ]
          },
          "supplierId": {
            "anyOf": [
              {
                "$ref": "#/components/schemas/InventoryUUID"
              },
              {
                "type": "null"
              }
            ]
          },
          "targetUnitIds": {
            "type": "array",
            "items": {
              "$ref": "#/components/schemas/InventoryUUID"
            }
          },
          "allocations": {
            "type": "array",
            "items": {
              "$ref": "#/components/schemas/InventoryExpenseAllocation"
            }
          },
          "evidenceIds": {
            "type": "array",
            "items": {
              "$ref": "#/components/schemas/InventoryUUID"
            }
          },
          "revision": {
            "$ref": "#/components/schemas/InventoryRevision"
          },
          "operationId": {
            "$ref": "#/components/schemas/InventoryUUID"
          },
          "status": {
            "enum": [
              "draft",
              "active",
              "completed",
              "cancelled"
            ]
          },
          "allocated": {
            "anyOf": [
              {
                "$ref": "#/components/schemas/InventoryMoney"
              },
              {
                "type": "null"
              }
            ]
          },
          "remainder": {
            "anyOf": [
              {
                "$ref": "#/components/schemas/InventoryMoney"
              },
              {
                "type": "null"
              }
            ]
          }
        },
        "required": [
          "expenseId",
          "expenseRef",
          "category",
          "date",
          "total",
          "supplierId",
          "targetUnitIds",
          "allocations",
          "evidenceIds",
          "revision"
        ]
      },
      "InventorySale": {
        "type": "object",
        "additionalProperties": false,
        "properties": {
          "saleId": {
            "$ref": "#/components/schemas/InventoryUUID"
          },
          "customerId": {
            "$ref": "#/components/schemas/InventoryUUID"
          },
          "date": {
            "type": "string",
            "format": "date"
          },
          "sellerRole": {
            "enum": [
              "own_account",
              "consignment_principal",
              "agent"
            ]
          },
          "depositOperationId": {
            "anyOf": [
              {
                "$ref": "#/components/schemas/InventoryUUID"
              },
              {
                "type": "null"
              }
            ]
          },
          "amount": {
            "$ref": "#/components/schemas/InventoryMoney"
          },
          "units": {
            "type": "array",
            "items": {
              "type": "object",
              "additionalProperties": false,
              "properties": {
                "unitId": {
                  "$ref": "#/components/schemas/InventoryUUID"
                },
                "grossAmount": {
                  "$ref": "#/components/schemas/InventoryMoney"
                }
              },
              "required": [
                "unitId",
                "grossAmount"
              ]
            }
          },
          "status": {
            "enum": [
              "active",
              "cancelled"
            ]
          },
          "revision": {
            "$ref": "#/components/schemas/InventoryRevision"
          },
          "returns": {
            "type": "array",
            "items": {
              "type": "object",
              "additionalProperties": false,
              "properties": {
                "unitId": {
                  "$ref": "#/components/schemas/InventoryUUID"
                },
                "restocked": {
                  "type": "boolean"
                }
              },
              "required": [
                "unitId",
                "restocked"
              ]
            }
          }
        },
        "required": [
          "saleId",
          "customerId",
          "date",
          "sellerRole",
          "depositOperationId",
          "amount",
          "units",
          "status",
          "revision"
        ]
      },
      "InventoryDocument": {
        "type": "object",
        "additionalProperties": false,
        "properties": {
          "documentId": {
            "$ref": "#/components/schemas/InventoryUUID"
          },
          "draft": {
            "anyOf": [
              {
                "$ref": "#/components/schemas/InventoryDocumentDraft"
              },
              {
                "type": "null"
              }
            ]
          },
          "status": {
            "enum": [
              "draft",
              "issued"
            ]
          },
          "number": {
            "anyOf": [
              {
                "type": "string"
              },
              {
                "type": "null"
              }
            ]
          },
          "issuedAt": {
            "anyOf": [
              {
                "type": "string",
                "format": "date-time"
              },
              {
                "type": "null"
              }
            ]
          },
          "revision": {
            "$ref": "#/components/schemas/InventoryRevision"
          },
          "pdfAvailable": {
            "type": "boolean"
          },
          "kind": {
            "enum": [
              "quote",
              "invoice",
              "credit_note"
            ]
          },
          "saleId": {
            "anyOf": [
              {
                "$ref": "#/components/schemas/InventoryUUID"
              },
              {
                "type": "null"
              }
            ]
          },
          "customerId": {
            "$ref": "#/components/schemas/InventoryUUID"
          },
          "profileId": {
            "$ref": "#/components/schemas/InventoryUUID"
          },
          "sellerProfileRevision": {
            "$ref": "#/components/schemas/InventoryRevision"
          },
          "originalDocumentId": {
            "anyOf": [
              {
                "$ref": "#/components/schemas/InventoryUUID"
              },
              {
                "type": "null"
              }
            ]
          },
          "lines": {
            "type": "array",
            "items": {
              "$ref": "#/components/schemas/InventoryDocumentLineView"
            }
          },
          "balanceMinor": {
            "anyOf": [
              {
                "type": "string",
                "pattern": "^-?(0|[1-9][0-9]*)$"
              },
              {
                "type": "null"
              }
            ]
          },
          "due": {
            "anyOf": [
              {
                "$ref": "#/components/schemas/InventoryMoney"
              },
              {
                "type": "null"
              }
            ]
          },
          "customerCredit": {
            "anyOf": [
              {
                "$ref": "#/components/schemas/InventoryMoney"
              },
              {
                "type": "null"
              }
            ]
          },
          "transmissions": {
            "type": "array",
            "items": {
              "$ref": "#/components/schemas/InventoryTransmission"
            }
          },
          "snapshot": {
            "$ref": "#/components/schemas/InventoryClientDocumentSnapshot"
          }
        },
        "required": [
          "documentId",
          "draft",
          "status",
          "number",
          "issuedAt",
          "revision",
          "pdfAvailable"
        ]
      },
      "InventoryLedgerEntry": {
        "type": "object",
        "additionalProperties": false,
        "properties": {
          "entryId": {
            "$ref": "#/components/schemas/InventoryUUID"
          },
          "kind": {
            "enum": [
              "purchase",
              "creation",
              "expense",
              "payment",
              "refund",
              "owner_settlement",
              "correction"
            ]
          },
          "amount": {
            "anyOf": [
              {
                "$ref": "#/components/schemas/InventoryMoney"
              },
              {
                "type": "null"
              }
            ]
          },
          "date": {
            "type": "string",
            "format": "date"
          },
          "documentId": {
            "anyOf": [
              {
                "$ref": "#/components/schemas/InventoryUUID"
              },
              {
                "type": "null"
              }
            ]
          },
          "correctsEntryId": {
            "anyOf": [
              {
                "$ref": "#/components/schemas/InventoryUUID"
              },
              {
                "type": "null"
              }
            ]
          },
          "revision": {
            "$ref": "#/components/schemas/InventoryRevision"
          },
          "invoiceAmount": {
            "anyOf": [
              {
                "$ref": "#/components/schemas/InventoryMoney"
              },
              {
                "type": "null"
              }
            ]
          },
          "depositOperationId": {
            "anyOf": [
              {
                "$ref": "#/components/schemas/InventoryUUID"
              },
              {
                "type": "null"
              }
            ]
          },
          "direction": {
            "anyOf": [
              {
                "enum": [
                  "pay_owner",
                  "receive_owner"
                ]
              },
              {
                "type": "null"
              }
            ]
          },
          "method": {
            "type": "string"
          },
          "reference": {
            "type": "string"
          },
          "reason": {
            "anyOf": [
              {
                "type": "string"
              },
              {
                "type": "null"
              }
            ]
          }
        },
        "required": [
          "entryId",
          "kind",
          "amount",
          "date",
          "documentId",
          "correctsEntryId",
          "revision"
        ]
      },
      "InventoryAssignment": {
        "type": "object",
        "additionalProperties": false,
        "properties": {
          "assignmentId": {
            "$ref": "#/components/schemas/InventoryUUID"
          },
          "issuer": {
            "type": "string",
            "format": "uri"
          },
          "subject": {
            "type": "string"
          },
          "role": {
            "enum": [
              "administrator",
              "contributor"
            ]
          },
          "revision": {
            "$ref": "#/components/schemas/InventoryRevision"
          },
          "revoked": {
            "type": "boolean"
          }
        },
        "required": [
          "assignmentId",
          "issuer",
          "subject",
          "role",
          "revision",
          "revoked"
        ]
      },
      "InventoryBatch": {
        "type": "object",
        "additionalProperties": false,
        "properties": {
          "batchId": {
            "$ref": "#/components/schemas/InventoryUUID"
          },
          "kind": {
            "enum": [
              "csv_zip",
              "artlogic"
            ]
          },
          "status": {
            "enum": [
              "uploaded",
              "validating",
              "invalid",
              "ready",
              "confirmed",
              "staging",
              "applied",
              "failed",
              "cancelled"
            ]
          },
          "revision": {
            "$ref": "#/components/schemas/InventoryRevision"
          },
          "simulationDigest": {
            "anyOf": [
              {
                "type": "string",
                "pattern": "^[a-f0-9]{64}$"
              },
              {
                "type": "null"
              }
            ]
          },
          "progress": {
            "type": "object",
            "additionalProperties": false,
            "properties": {
              "processed": {
                "type": "integer",
                "minimum": 0
              },
              "total": {
                "type": "integer",
                "minimum": 0
              }
            },
            "required": [
              "processed",
              "total"
            ]
          },
          "issues": {
            "type": "array",
            "items": {
              "type": "object",
              "additionalProperties": false,
              "properties": {
                "row": {
                  "type": "integer",
                  "minimum": 1
                },
                "path": {
                  "type": "string"
                },
                "code": {
                  "type": "string"
                },
                "column": {
                  "type": "string"
                },
                "severity": {
                  "type": "string",
                  "enum": [
                    "error",
                    "warning"
                  ]
                }
              },
              "required": [
                "code"
              ]
            }
          },
          "mode": {
            "enum": [
              "create",
              "update",
              "mixed_explicit"
            ]
          },
          "confirmedDigest": {
            "anyOf": [
              {
                "type": "string",
                "pattern": "^[a-f0-9]{64}$"
              },
              {
                "type": "null"
              }
            ]
          },
          "operationId": {
            "anyOf": [
              {
                "$ref": "#/components/schemas/InventoryUUID"
              },
              {
                "type": "null"
              }
            ]
          },
          "detailsRetained": {
            "type": "boolean"
          },
          "mapping": {
            "type": [
              "array",
              "object"
            ]
          },
          "options": {
            "type": "object",
            "additionalProperties": true
          },
          "assumptions": {
            "type": "array",
            "items": {
              "type": "string"
            }
          },
          "nextAfter": {
            "type": [
              "integer",
              "null"
            ],
            "minimum": 0
          },
          "files": {
            "type": "array",
            "items": {
              "type": "object",
              "additionalProperties": false,
              "properties": {
                "uploadId": {
                  "$ref": "#/components/schemas/InventoryUUID"
                },
                "role": {
                  "enum": [
                    "catalog",
                    "images",
                    "export"
                  ]
                },
                "state": {
                  "enum": [
                    "pending",
                    "receiving",
                    "finalizing",
                    "complete",
                    "failed",
                    "cancelled"
                  ]
                },
                "revision": {
                  "$ref": "#/components/schemas/InventoryRevision"
                },
                "fileName": {
                  "type": "string"
                },
                "mimeType": {
                  "type": "string"
                },
                "declaredBytes": {
                  "type": [
                    "integer",
                    "null"
                  ],
                  "minimum": 1
                },
                "receivedBytes": {
                  "type": "integer",
                  "minimum": 0
                },
                "expiresAt": {
                  "type": "string",
                  "format": "date-time"
                }
              },
              "required": [
                "uploadId",
                "role",
                "state",
                "revision",
                "declaredBytes",
                "receivedBytes",
                "expiresAt"
              ]
            }
          },
          "rows": {
            "type": "array",
            "maxItems": 100,
            "items": {
              "type": "object",
              "additionalProperties": false,
              "properties": {
                "index": {
                  "type": "integer",
                  "minimum": 1
                },
                "rowType": {
                  "enum": [
                    "work",
                    "copy",
                    "media",
                    "cost",
                    "party",
                    "location",
                    "artist",
                    "origin",
                    "category"
                  ]
                },
                "action": {
                  "enum": [
                    "create",
                    "update"
                  ]
                },
                "targetId": {
                  "type": "string"
                },
                "state": {
                  "enum": [
                    "pending",
                    "prepared"
                  ]
                },
                "candidate": {
                  "type": "object",
                  "additionalProperties": true
                }
              },
              "required": [
                "index",
                "rowType",
                "action",
                "targetId",
                "state",
                "candidate"
              ]
            }
          },
          "summary": {
            "type": "array",
            "maxItems": 18,
            "items": {
              "type": "object",
              "additionalProperties": false,
              "properties": {
                "rowType": {
                  "enum": [
                    "work",
                    "copy",
                    "media",
                    "cost",
                    "party",
                    "location",
                    "artist",
                    "origin",
                    "category"
                  ]
                },
                "action": {
                  "enum": [
                    "create",
                    "update"
                  ]
                },
                "count": {
                  "type": "integer",
                  "minimum": 0
                }
              },
              "required": [
                "rowType",
                "action",
                "count"
              ]
            }
          }
        },
        "required": [
          "batchId",
          "kind",
          "status",
          "revision",
          "simulationDigest",
          "progress",
          "issues"
        ]
      },
      "InventoryUnitFinance": {
        "type": "object",
        "additionalProperties": false,
        "properties": {
          "unitId": {
            "$ref": "#/components/schemas/InventoryUUID"
          },
          "revision": {
            "$ref": "#/components/schemas/InventoryRevision"
          },
          "costComplete": {
            "type": "boolean"
          },
          "totals": {
            "type": "array",
            "items": {
              "$ref": "#/components/schemas/InventoryMoney"
            }
          },
          "expenses": {
            "type": "array",
            "items": {
              "$ref": "#/components/schemas/InventoryExpense"
            }
          },
          "acquisitions": {
            "type": "array",
            "items": {
              "$ref": "#/components/schemas/InventoryAcquisition"
            }
          }
        },
        "required": [
          "unitId",
          "revision",
          "costComplete",
          "totals",
          "expenses"
        ]
      },
      "InventoryDeposit": {
        "type": "object",
        "additionalProperties": false,
        "properties": {
          "operationId": {
            "$ref": "#/components/schemas/InventoryUUID"
          },
          "unitIds": {
            "type": "array",
            "items": {
              "$ref": "#/components/schemas/InventoryUUID"
            }
          },
          "ownerId": {
            "$ref": "#/components/schemas/InventoryUUID"
          },
          "counterpartyId": {
            "$ref": "#/components/schemas/InventoryUUID"
          },
          "direction": {
            "enum": [
              "in",
              "out"
            ]
          },
          "revision": {
            "$ref": "#/components/schemas/InventoryRevision"
          },
          "commission": {
            "anyOf": [
              {
                "$ref": "#/components/schemas/InventoryMoney"
              },
              {
                "type": "null"
              }
            ]
          },
          "insuranceValue": {
            "anyOf": [
              {
                "$ref": "#/components/schemas/InventoryMoney"
              },
              {
                "type": "null"
              }
            ]
          },
          "status": {
            "enum": [
              "active",
              "cancelled"
            ]
          },
          "date": {
            "type": "string",
            "format": "date"
          },
          "commissionRate": {
            "anyOf": [
              {
                "type": "object",
                "additionalProperties": false,
                "properties": {
                  "numerator": {
                    "type": "string"
                  },
                  "denominator": {
                    "type": "string"
                  }
                },
                "required": [
                  "numerator",
                  "denominator"
                ]
              },
              {
                "type": "null"
              }
            ]
          },
          "terms": {
            "type": "string"
          },
          "documentIds": {
            "type": "array",
            "items": {
              "$ref": "#/components/schemas/InventoryUUID"
            }
          },
          "ownerBalances": {
            "type": "array",
            "items": {
              "$ref": "#/components/schemas/InventoryOwnerBalance"
            }
          },
          "termsEditable": {
            "type": "boolean",
            "description": "Les termes peuvent encore etre remplaces sans activite commerciale ulterieure."
          }
        },
        "required": [
          "operationId",
          "unitIds",
          "ownerId",
          "counterpartyId",
          "direction",
          "revision",
          "commission",
          "insuranceValue"
        ]
      },
      "InventoryTransmission": {
        "type": "object",
        "additionalProperties": false,
        "properties": {
          "submissionId": {
            "$ref": "#/components/schemas/InventoryUUID"
          },
          "documentId": {
            "$ref": "#/components/schemas/InventoryUUID"
          },
          "state": {
            "enum": [
              "pending",
              "submitted",
              "accepted",
              "rejected",
              "uncertain",
              "reconciled"
            ]
          },
          "externalReference": {
            "anyOf": [
              {
                "type": "string"
              },
              {
                "type": "null"
              }
            ]
          },
          "updatedAt": {
            "type": "string",
            "format": "date-time"
          },
          "errorCode": {
            "type": [
              "string",
              "null"
            ]
          },
          "providerReference": {
            "type": [
              "string",
              "null"
            ]
          },
          "flow": {
            "enum": [
              "invoice",
              "credit_note",
              "transaction_reporting",
              "payment_reporting"
            ]
          },
          "attempts": {
            "type": "integer",
            "minimum": 0
          },
          "revision": {
            "$ref": "#/components/schemas/InventoryRevision"
          },
          "ledgerEntryId": {
            "anyOf": [
              {
                "$ref": "#/components/schemas/InventoryUUID"
              },
              {
                "type": "null"
              }
            ]
          }
        },
        "required": [
          "submissionId",
          "documentId",
          "state",
          "externalReference",
          "updatedAt"
        ]
      },
      "InventoryArtist": {
        "type": "object",
        "additionalProperties": false,
        "properties": {
          "kind": {
            "const": "artist"
          },
          "id": {
            "$ref": "#/components/schemas/InventoryUUID"
          },
          "fields": {
            "type": "object",
            "additionalProperties": false,
            "properties": {
              "name": {
                "type": "object",
                "minProperties": 1,
                "maxProperties": 8,
                "propertyNames": {
                  "pattern": "^[a-z]{2,3}(?:-[A-Za-z0-9]{2,8})*$"
                },
                "additionalProperties": {
                  "type": "string",
                  "maxLength": 5000
                }
              },
              "birthDate": {
                "anyOf": [
                  {
                    "type": "string",
                    "maxLength": 100
                  },
                  {
                    "type": "null"
                  }
                ]
              },
              "deathDate": {
                "anyOf": [
                  {
                    "type": "string",
                    "maxLength": 100
                  },
                  {
                    "type": "null"
                  }
                ]
              },
              "nationalities": {
                "type": "array",
                "items": {
                  "type": "string",
                  "maxLength": 100
                }
              },
              "biography": {
                "$ref": "#/components/schemas/InventoryE_LocalizedRichText"
              },
              "mediaIds": {
                "type": "array",
                "items": {
                  "$ref": "#/components/schemas/InventoryUUID"
                },
                "maxItems": 100,
                "uniqueItems": true
              }
            },
            "required": [
              "name"
            ]
          },
          "revision": {
            "$ref": "#/components/schemas/InventoryRevision"
          }
        },
        "required": [
          "kind",
          "id",
          "fields",
          "revision"
        ]
      },
      "InventoryOrigin": {
        "type": "object",
        "additionalProperties": false,
        "properties": {
          "kind": {
            "const": "origin"
          },
          "id": {
            "$ref": "#/components/schemas/InventoryUUID"
          },
          "fields": {
            "type": "object",
            "additionalProperties": false,
            "properties": {
              "name": {
                "type": "object",
                "minProperties": 1,
                "maxProperties": 8,
                "propertyNames": {
                  "pattern": "^[a-z]{2,3}(?:-[A-Za-z0-9]{2,8})*$"
                },
                "additionalProperties": {
                  "type": "string",
                  "maxLength": 5000
                }
              },
              "culture": {
                "type": "object",
                "minProperties": 1,
                "maxProperties": 8,
                "propertyNames": {
                  "pattern": "^[a-z]{2,3}(?:-[A-Za-z0-9]{2,8})*$"
                },
                "additionalProperties": {
                  "type": "string",
                  "maxLength": 5000
                }
              },
              "country": {
                "anyOf": [
                  {
                    "type": "string",
                    "maxLength": 100
                  },
                  {
                    "type": "null"
                  }
                ]
              },
              "region": {
                "type": "object",
                "minProperties": 1,
                "maxProperties": 8,
                "propertyNames": {
                  "pattern": "^[a-z]{2,3}(?:-[A-Za-z0-9]{2,8})*$"
                },
                "additionalProperties": {
                  "type": "string",
                  "maxLength": 5000
                }
              },
              "period": {
                "type": "object",
                "minProperties": 1,
                "maxProperties": 8,
                "propertyNames": {
                  "pattern": "^[a-z]{2,3}(?:-[A-Za-z0-9]{2,8})*$"
                },
                "additionalProperties": {
                  "type": "string",
                  "maxLength": 5000
                }
              },
              "description": {
                "$ref": "#/components/schemas/InventoryE_LocalizedRichText"
              },
              "mediaIds": {
                "type": "array",
                "items": {
                  "$ref": "#/components/schemas/InventoryUUID"
                },
                "maxItems": 100,
                "uniqueItems": true
              }
            },
            "required": [
              "name"
            ]
          },
          "revision": {
            "$ref": "#/components/schemas/InventoryRevision"
          }
        },
        "required": [
          "kind",
          "id",
          "fields",
          "revision"
        ]
      },
      "InventoryParty": {
        "type": "object",
        "additionalProperties": false,
        "properties": {
          "kind": {
            "const": "party"
          },
          "id": {
            "$ref": "#/components/schemas/InventoryUUID"
          },
          "fields": {
            "type": "object",
            "additionalProperties": false,
            "properties": {
              "name": {
                "type": "string",
                "maxLength": 500
              },
              "kind": {
                "type": "string",
                "enum": [
                  "person",
                  "organization"
                ]
              },
              "roles": {
                "type": "array",
                "items": {
                  "type": "string",
                  "enum": [
                    "owner",
                    "supplier",
                    "depositor",
                    "customer",
                    "recipient"
                  ]
                }
              },
              "email": {
                "anyOf": [
                  {
                    "type": "string",
                    "format": "email"
                  },
                  {
                    "type": "null"
                  }
                ]
              },
              "phone": {
                "anyOf": [
                  {
                    "type": "string",
                    "maxLength": 100
                  },
                  {
                    "type": "null"
                  }
                ]
              },
              "addressLines": {
                "type": "array",
                "maxItems": 8,
                "items": {
                  "type": "string",
                  "maxLength": 500
                }
              },
              "customerKind": {
                "type": "string",
                "enum": [
                  "professional",
                  "private",
                  "public_entity"
                ]
              },
              "companyIdentifier": {
                "anyOf": [
                  {
                    "type": "string",
                    "maxLength": 100
                  },
                  {
                    "type": "null"
                  }
                ]
              },
              "vatIdentifier": {
                "anyOf": [
                  {
                    "type": "string",
                    "maxLength": 100
                  },
                  {
                    "type": "null"
                  }
                ]
              },
              "billingAddress": {
                "type": "object",
                "additionalProperties": false,
                "properties": {
                  "line1": {
                    "type": "string",
                    "maxLength": 500
                  },
                  "line2": {
                    "anyOf": [
                      {
                        "type": "string",
                        "maxLength": 500
                      },
                      {
                        "type": "null"
                      }
                    ]
                  },
                  "postalCode": {
                    "type": "string",
                    "maxLength": 100
                  },
                  "city": {
                    "type": "string",
                    "maxLength": 200
                  },
                  "country": {
                    "type": "string",
                    "pattern": "^[A-Z]{2}$"
                  }
                },
                "required": [
                  "line1",
                  "city",
                  "country"
                ]
              },
              "shippingAddress": {
                "anyOf": [
                  {
                    "type": "object",
                    "additionalProperties": false,
                    "properties": {
                      "line1": {
                        "type": "string",
                        "maxLength": 500
                      },
                      "line2": {
                        "anyOf": [
                          {
                            "type": "string",
                            "maxLength": 500
                          },
                          {
                            "type": "null"
                          }
                        ]
                      },
                      "postalCode": {
                        "type": "string",
                        "maxLength": 100
                      },
                      "city": {
                        "type": "string",
                        "maxLength": 200
                      },
                      "country": {
                        "type": "string",
                        "pattern": "^[A-Z]{2}$"
                      }
                    },
                    "required": [
                      "line1",
                      "city",
                      "country"
                    ]
                  },
                  {
                    "type": "null"
                  }
                ]
              }
            },
            "required": [
              "name",
              "kind",
              "roles"
            ]
          },
          "revision": {
            "$ref": "#/components/schemas/InventoryRevision"
          }
        },
        "required": [
          "kind",
          "id",
          "fields",
          "revision"
        ]
      },
      "InventoryLocation": {
        "type": "object",
        "additionalProperties": false,
        "properties": {
          "kind": {
            "const": "location"
          },
          "id": {
            "$ref": "#/components/schemas/InventoryUUID"
          },
          "fields": {
            "type": "object",
            "additionalProperties": false,
            "properties": {
              "name": {
                "type": "string",
                "maxLength": 500
              },
              "partyId": {
                "anyOf": [
                  {
                    "type": "string",
                    "format": "uuid"
                  },
                  {
                    "type": "null"
                  }
                ]
              },
              "addressLines": {
                "type": "array",
                "maxItems": 8,
                "items": {
                  "type": "string",
                  "maxLength": 500
                }
              },
              "active": {
                "type": "boolean"
              }
            },
            "required": [
              "name"
            ]
          },
          "revision": {
            "$ref": "#/components/schemas/InventoryRevision"
          }
        },
        "required": [
          "kind",
          "id",
          "fields",
          "revision"
        ]
      },
      "InventoryType": {
        "type": "object",
        "additionalProperties": false,
        "properties": {
          "kind": {
            "const": "type"
          },
          "id": {
            "type": "integer",
            "minimum": 1,
            "maximum": 9007199254740991
          },
          "fields": {
            "type": "object",
            "additionalProperties": false,
            "properties": {
              "name": {
                "type": "object",
                "minProperties": 1,
                "maxProperties": 8,
                "propertyNames": {
                  "pattern": "^[a-z]{2,3}(?:-[A-Za-z0-9]{2,8})*$"
                },
                "additionalProperties": {
                  "type": "string",
                  "maxLength": 5000
                }
              },
              "active": {
                "type": "boolean"
              },
              "position": {
                "type": "integer",
                "minimum": 0
              }
            },
            "required": [
              "name"
            ]
          },
          "revision": {
            "$ref": "#/components/schemas/InventoryRevision"
          }
        },
        "required": [
          "kind",
          "id",
          "fields",
          "revision"
        ]
      },
      "InventoryCategory": {
        "type": "object",
        "additionalProperties": false,
        "properties": {
          "kind": {
            "const": "category"
          },
          "id": {
            "$ref": "#/components/schemas/InventoryUUID"
          },
          "fields": {
            "type": "object",
            "additionalProperties": false,
            "properties": {
              "name": {
                "$ref": "#/components/schemas/InventoryLocalizedText"
              },
              "active": {
                "type": "boolean"
              }
            },
            "required": [
              "name"
            ]
          },
          "revision": {
            "$ref": "#/components/schemas/InventoryRevision"
          }
        },
        "required": [
          "kind",
          "id",
          "fields",
          "revision"
        ]
      },
      "InventoryFiscalProfile": {
        "type": "object",
        "additionalProperties": false,
        "properties": {
          "id": {
            "const": "current"
          },
          "value": {
            "$ref": "#/components/schemas/InventorySellerFiscalProfile"
          },
          "revision": {
            "$ref": "#/components/schemas/InventoryRevision"
          },
          "qualified": {
            "type": "boolean"
          },
          "profileId": {
            "$ref": "#/components/schemas/InventoryUUID"
          },
          "qualification": {
            "anyOf": [
              {
                "$ref": "#/components/schemas/InventoryFiscalQualification"
              },
              {
                "type": "null"
              }
            ]
          }
        },
        "required": [
          "id",
          "value",
          "revision",
          "qualified"
        ]
      },
      "InventoryTaxTreatmentView": {
        "type": "object",
        "additionalProperties": false,
        "properties": {
          "id": {
            "$ref": "#/components/schemas/InventoryUUID"
          },
          "value": {
            "$ref": "#/components/schemas/InventoryTaxTreatment"
          },
          "revision": {
            "$ref": "#/components/schemas/InventoryRevision"
          },
          "qualified": {
            "type": "boolean"
          },
          "qualification": {
            "anyOf": [
              {
                "$ref": "#/components/schemas/InventoryFiscalQualification"
              },
              {
                "type": "null"
              }
            ]
          }
        },
        "required": [
          "id",
          "value",
          "revision",
          "qualified"
        ]
      },
      "InventoryDocumentSeriesView": {
        "type": "object",
        "additionalProperties": false,
        "properties": {
          "seriesId": {
            "$ref": "#/components/schemas/InventoryUUID"
          },
          "prefix": {
            "type": "string"
          },
          "documentKind": {
            "enum": [
              "quote",
              "invoice",
              "credit_note"
            ]
          },
          "active": {
            "type": "boolean"
          },
          "revision": {
            "$ref": "#/components/schemas/InventoryRevision"
          },
          "profileId": {
            "$ref": "#/components/schemas/InventoryUUID"
          },
          "name": {
            "type": "string"
          },
          "fiscalYear": {
            "anyOf": [
              {
                "type": "integer"
              },
              {
                "type": "null"
              }
            ]
          },
          "nextNumber": {
            "$ref": "#/components/schemas/InventoryRevision"
          },
          "lastIssuedAt": {
            "anyOf": [
              {
                "type": "string",
                "format": "date-time"
              },
              {
                "type": "null"
              }
            ]
          }
        },
        "required": [
          "seriesId",
          "prefix",
          "documentKind",
          "active",
          "revision"
        ]
      },
      "InventoryEditorialProjection": {
        "oneOf": [
          {
            "$ref": "#/components/schemas/InventoryArtwork"
          },
          {
            "$ref": "#/components/schemas/InventoryUnitLogistics"
          },
          {
            "$ref": "#/components/schemas/InventoryArtist"
          },
          {
            "$ref": "#/components/schemas/InventoryOrigin"
          },
          {
            "$ref": "#/components/schemas/InventoryCategory"
          },
          {
            "$ref": "#/components/schemas/InventoryLocation"
          },
          {
            "$ref": "#/components/schemas/InventoryParty"
          },
          {
            "$ref": "#/components/schemas/InventoryType"
          },
          {
            "$ref": "#/components/schemas/InventoryMedia"
          },
          {
            "$ref": "#/components/schemas/InventoryLogisticsOperation"
          }
        ]
      },
      "InventoryReadResult": {
        "type": "object",
        "additionalProperties": false,
        "properties": {
          "resource": {
            "$ref": "#/components/schemas/InventoryInventoryResourceRef"
          },
          "revision": {
            "$ref": "#/components/schemas/InventoryRevision"
          },
          "data": {
            "oneOf": [
              {
                "$ref": "#/components/schemas/InventoryArtwork"
              },
              {
                "$ref": "#/components/schemas/InventoryUnitLogistics"
              },
              {
                "$ref": "#/components/schemas/InventoryArtist"
              },
              {
                "$ref": "#/components/schemas/InventoryOrigin"
              },
              {
                "$ref": "#/components/schemas/InventoryCategory"
              },
              {
                "$ref": "#/components/schemas/InventoryLocation"
              },
              {
                "$ref": "#/components/schemas/InventoryParty"
              },
              {
                "$ref": "#/components/schemas/InventoryType"
              },
              {
                "$ref": "#/components/schemas/InventoryMedia"
              },
              {
                "$ref": "#/components/schemas/InventoryLogisticsOperation"
              },
              {
                "$ref": "#/components/schemas/InventoryUnitFinance"
              },
              {
                "$ref": "#/components/schemas/InventoryExpense"
              },
              {
                "$ref": "#/components/schemas/InventorySale"
              },
              {
                "$ref": "#/components/schemas/InventoryDocument"
              },
              {
                "$ref": "#/components/schemas/InventoryLedgerEntry"
              },
              {
                "$ref": "#/components/schemas/InventoryAssignment"
              },
              {
                "$ref": "#/components/schemas/InventoryBatch"
              },
              {
                "$ref": "#/components/schemas/InventoryFiscalProfile"
              },
              {
                "$ref": "#/components/schemas/InventoryTaxTreatmentView"
              },
              {
                "$ref": "#/components/schemas/InventoryDocumentSeriesView"
              },
              {
                "$ref": "#/components/schemas/InventoryDeposit"
              },
              {
                "$ref": "#/components/schemas/InventoryTransmission"
              },
              {
                "$ref": "#/components/schemas/InventoryPrivateNotes"
              },
              {
                "$ref": "#/components/schemas/InventoryAttachment"
              }
            ]
          },
          "projection": {
            "enum": [
              "editorial",
              "logistics",
              "private_notes",
              "finance",
              "management"
            ]
          }
        },
        "required": [
          "resource",
          "revision",
          "data",
          "projection"
        ],
        "allOf": [
          {
            "if": {
              "properties": {
                "resource": {
                  "properties": {
                    "kind": {
                      "const": "artwork"
                    }
                  },
                  "required": [
                    "kind"
                  ]
                }
              },
              "required": [
                "resource"
              ]
            },
            "then": {
              "oneOf": [
                {
                  "properties": {
                    "projection": {
                      "const": "editorial"
                    },
                    "data": {
                      "$ref": "#/components/schemas/InventoryArtwork"
                    }
                  },
                  "required": [
                    "projection",
                    "data"
                  ]
                },
                {
                  "properties": {
                    "projection": {
                      "const": "private_notes"
                    },
                    "data": {
                      "$ref": "#/components/schemas/InventoryPrivateNotes"
                    }
                  },
                  "required": [
                    "projection",
                    "data"
                  ]
                }
              ]
            }
          },
          {
            "if": {
              "properties": {
                "resource": {
                  "properties": {
                    "kind": {
                      "const": "unit"
                    }
                  },
                  "required": [
                    "kind"
                  ]
                }
              },
              "required": [
                "resource"
              ]
            },
            "then": {
              "oneOf": [
                {
                  "properties": {
                    "projection": {
                      "const": "logistics"
                    },
                    "data": {
                      "$ref": "#/components/schemas/InventoryUnitLogistics"
                    }
                  },
                  "required": [
                    "projection",
                    "data"
                  ]
                },
                {
                  "properties": {
                    "projection": {
                      "const": "finance"
                    },
                    "data": {
                      "$ref": "#/components/schemas/InventoryUnitFinance"
                    }
                  },
                  "required": [
                    "projection",
                    "data"
                  ]
                }
              ]
            }
          },
          {
            "if": {
              "properties": {
                "resource": {
                  "properties": {
                    "kind": {
                      "const": "artist"
                    }
                  },
                  "required": [
                    "kind"
                  ]
                }
              },
              "required": [
                "resource"
              ]
            },
            "then": {
              "oneOf": [
                {
                  "properties": {
                    "projection": {
                      "const": "editorial"
                    },
                    "data": {
                      "$ref": "#/components/schemas/InventoryArtist"
                    }
                  },
                  "required": [
                    "projection",
                    "data"
                  ]
                }
              ]
            }
          },
          {
            "if": {
              "properties": {
                "resource": {
                  "properties": {
                    "kind": {
                      "const": "origin"
                    }
                  },
                  "required": [
                    "kind"
                  ]
                }
              },
              "required": [
                "resource"
              ]
            },
            "then": {
              "oneOf": [
                {
                  "properties": {
                    "projection": {
                      "const": "editorial"
                    },
                    "data": {
                      "$ref": "#/components/schemas/InventoryOrigin"
                    }
                  },
                  "required": [
                    "projection",
                    "data"
                  ]
                }
              ]
            }
          },
          {
            "if": {
              "properties": {
                "resource": {
                  "properties": {
                    "kind": {
                      "const": "category"
                    }
                  },
                  "required": [
                    "kind"
                  ]
                }
              },
              "required": [
                "resource"
              ]
            },
            "then": {
              "oneOf": [
                {
                  "properties": {
                    "projection": {
                      "const": "editorial"
                    },
                    "data": {
                      "$ref": "#/components/schemas/InventoryCategory"
                    }
                  },
                  "required": [
                    "projection",
                    "data"
                  ]
                }
              ]
            }
          },
          {
            "if": {
              "properties": {
                "resource": {
                  "properties": {
                    "kind": {
                      "const": "type"
                    }
                  },
                  "required": [
                    "kind"
                  ]
                }
              },
              "required": [
                "resource"
              ]
            },
            "then": {
              "oneOf": [
                {
                  "properties": {
                    "projection": {
                      "const": "editorial"
                    },
                    "data": {
                      "$ref": "#/components/schemas/InventoryType"
                    }
                  },
                  "required": [
                    "projection",
                    "data"
                  ]
                }
              ]
            }
          },
          {
            "if": {
              "properties": {
                "resource": {
                  "properties": {
                    "kind": {
                      "const": "party"
                    }
                  },
                  "required": [
                    "kind"
                  ]
                }
              },
              "required": [
                "resource"
              ]
            },
            "then": {
              "oneOf": [
                {
                  "properties": {
                    "projection": {
                      "const": "logistics"
                    },
                    "data": {
                      "$ref": "#/components/schemas/InventoryParty"
                    }
                  },
                  "required": [
                    "projection",
                    "data"
                  ]
                }
              ]
            }
          },
          {
            "if": {
              "properties": {
                "resource": {
                  "properties": {
                    "kind": {
                      "const": "location"
                    }
                  },
                  "required": [
                    "kind"
                  ]
                }
              },
              "required": [
                "resource"
              ]
            },
            "then": {
              "oneOf": [
                {
                  "properties": {
                    "projection": {
                      "const": "logistics"
                    },
                    "data": {
                      "$ref": "#/components/schemas/InventoryLocation"
                    }
                  },
                  "required": [
                    "projection",
                    "data"
                  ]
                }
              ]
            }
          },
          {
            "if": {
              "properties": {
                "resource": {
                  "properties": {
                    "kind": {
                      "const": "media"
                    }
                  },
                  "required": [
                    "kind"
                  ]
                }
              },
              "required": [
                "resource"
              ]
            },
            "then": {
              "oneOf": [
                {
                  "properties": {
                    "projection": {
                      "const": "editorial"
                    },
                    "data": {
                      "$ref": "#/components/schemas/InventoryMedia"
                    }
                  },
                  "required": [
                    "projection",
                    "data"
                  ]
                },
                {
                  "properties": {
                    "projection": {
                      "const": "logistics"
                    },
                    "data": {
                      "$ref": "#/components/schemas/InventoryNonFinancialAttachment"
                    }
                  },
                  "required": [
                    "projection",
                    "data"
                  ]
                },
                {
                  "properties": {
                    "projection": {
                      "const": "finance"
                    },
                    "data": {
                      "$ref": "#/components/schemas/InventoryFinancialAttachment"
                    }
                  },
                  "required": [
                    "projection",
                    "data"
                  ]
                }
              ]
            }
          },
          {
            "if": {
              "properties": {
                "resource": {
                  "properties": {
                    "kind": {
                      "const": "logistics_operation"
                    }
                  },
                  "required": [
                    "kind"
                  ]
                }
              },
              "required": [
                "resource"
              ]
            },
            "then": {
              "oneOf": [
                {
                  "properties": {
                    "projection": {
                      "const": "logistics"
                    },
                    "data": {
                      "$ref": "#/components/schemas/InventoryLogisticsOperation"
                    }
                  },
                  "required": [
                    "projection",
                    "data"
                  ]
                }
              ]
            }
          },
          {
            "if": {
              "properties": {
                "resource": {
                  "properties": {
                    "kind": {
                      "const": "sale"
                    }
                  },
                  "required": [
                    "kind"
                  ]
                }
              },
              "required": [
                "resource"
              ]
            },
            "then": {
              "oneOf": [
                {
                  "properties": {
                    "projection": {
                      "const": "finance"
                    },
                    "data": {
                      "$ref": "#/components/schemas/InventorySale"
                    }
                  },
                  "required": [
                    "projection",
                    "data"
                  ]
                }
              ]
            }
          },
          {
            "if": {
              "properties": {
                "resource": {
                  "properties": {
                    "kind": {
                      "const": "document"
                    }
                  },
                  "required": [
                    "kind"
                  ]
                }
              },
              "required": [
                "resource"
              ]
            },
            "then": {
              "oneOf": [
                {
                  "properties": {
                    "projection": {
                      "const": "finance"
                    },
                    "data": {
                      "$ref": "#/components/schemas/InventoryDocument"
                    }
                  },
                  "required": [
                    "projection",
                    "data"
                  ]
                }
              ]
            }
          },
          {
            "if": {
              "properties": {
                "resource": {
                  "properties": {
                    "kind": {
                      "const": "expense"
                    }
                  },
                  "required": [
                    "kind"
                  ]
                }
              },
              "required": [
                "resource"
              ]
            },
            "then": {
              "oneOf": [
                {
                  "properties": {
                    "projection": {
                      "const": "finance"
                    },
                    "data": {
                      "$ref": "#/components/schemas/InventoryExpense"
                    }
                  },
                  "required": [
                    "projection",
                    "data"
                  ]
                }
              ]
            }
          },
          {
            "if": {
              "properties": {
                "resource": {
                  "properties": {
                    "kind": {
                      "const": "deposit"
                    }
                  },
                  "required": [
                    "kind"
                  ]
                }
              },
              "required": [
                "resource"
              ]
            },
            "then": {
              "oneOf": [
                {
                  "properties": {
                    "projection": {
                      "const": "finance"
                    },
                    "data": {
                      "$ref": "#/components/schemas/InventoryDeposit"
                    }
                  },
                  "required": [
                    "projection",
                    "data"
                  ]
                }
              ]
            }
          },
          {
            "if": {
              "properties": {
                "resource": {
                  "properties": {
                    "kind": {
                      "const": "ledger_entry"
                    }
                  },
                  "required": [
                    "kind"
                  ]
                }
              },
              "required": [
                "resource"
              ]
            },
            "then": {
              "oneOf": [
                {
                  "properties": {
                    "projection": {
                      "const": "finance"
                    },
                    "data": {
                      "$ref": "#/components/schemas/InventoryLedgerEntry"
                    }
                  },
                  "required": [
                    "projection",
                    "data"
                  ]
                }
              ]
            }
          },
          {
            "if": {
              "properties": {
                "resource": {
                  "properties": {
                    "kind": {
                      "const": "fiscal_profile"
                    }
                  },
                  "required": [
                    "kind"
                  ]
                }
              },
              "required": [
                "resource"
              ]
            },
            "then": {
              "oneOf": [
                {
                  "properties": {
                    "projection": {
                      "const": "finance"
                    },
                    "data": {
                      "$ref": "#/components/schemas/InventoryFiscalProfile"
                    }
                  },
                  "required": [
                    "projection",
                    "data"
                  ]
                }
              ]
            }
          },
          {
            "if": {
              "properties": {
                "resource": {
                  "properties": {
                    "kind": {
                      "const": "tax_treatment"
                    }
                  },
                  "required": [
                    "kind"
                  ]
                }
              },
              "required": [
                "resource"
              ]
            },
            "then": {
              "oneOf": [
                {
                  "properties": {
                    "projection": {
                      "const": "finance"
                    },
                    "data": {
                      "$ref": "#/components/schemas/InventoryTaxTreatmentView"
                    }
                  },
                  "required": [
                    "projection",
                    "data"
                  ]
                }
              ]
            }
          },
          {
            "if": {
              "properties": {
                "resource": {
                  "properties": {
                    "kind": {
                      "const": "document_series"
                    }
                  },
                  "required": [
                    "kind"
                  ]
                }
              },
              "required": [
                "resource"
              ]
            },
            "then": {
              "oneOf": [
                {
                  "properties": {
                    "projection": {
                      "const": "finance"
                    },
                    "data": {
                      "$ref": "#/components/schemas/InventoryDocumentSeriesView"
                    }
                  },
                  "required": [
                    "projection",
                    "data"
                  ]
                }
              ]
            }
          },
          {
            "if": {
              "properties": {
                "resource": {
                  "properties": {
                    "kind": {
                      "const": "import_batch"
                    }
                  },
                  "required": [
                    "kind"
                  ]
                }
              },
              "required": [
                "resource"
              ]
            },
            "then": {
              "oneOf": [
                {
                  "properties": {
                    "projection": {
                      "const": "management"
                    },
                    "data": {
                      "$ref": "#/components/schemas/InventoryBatch"
                    }
                  },
                  "required": [
                    "projection",
                    "data"
                  ]
                }
              ]
            }
          },
          {
            "if": {
              "properties": {
                "resource": {
                  "properties": {
                    "kind": {
                      "const": "assignment"
                    }
                  },
                  "required": [
                    "kind"
                  ]
                }
              },
              "required": [
                "resource"
              ]
            },
            "then": {
              "oneOf": [
                {
                  "properties": {
                    "projection": {
                      "const": "management"
                    },
                    "data": {
                      "$ref": "#/components/schemas/InventoryAssignment"
                    }
                  },
                  "required": [
                    "projection",
                    "data"
                  ]
                }
              ]
            }
          }
        ]
      },
      "InventoryFindResult": {
        "type": "object",
        "additionalProperties": false,
        "properties": {
          "items": {
            "type": "array",
            "items": {
              "$ref": "#/components/schemas/InventoryReadResult"
            }
          },
          "nextCursor": {
            "anyOf": [
              {
                "type": "string"
              },
              {
                "type": "null"
              }
            ]
          }
        },
        "required": [
          "items",
          "nextCursor"
        ]
      },
      "InventoryMediaList": {
        "type": "object",
        "additionalProperties": false,
        "properties": {
          "items": {
            "type": "array",
            "items": {
              "$ref": "#/components/schemas/InventoryMedia"
            }
          },
          "nextCursor": {
            "anyOf": [
              {
                "type": "string"
              },
              {
                "type": "null"
              }
            ]
          }
        },
        "required": [
          "items",
          "nextCursor"
        ]
      },
      "InventoryUploadResult": {
        "type": "object",
        "additionalProperties": false,
        "properties": {
          "attemptId": {
            "$ref": "#/components/schemas/InventoryUUID"
          },
          "mediaId": {
            "$ref": "#/components/schemas/InventoryUUID"
          },
          "revision": {
            "$ref": "#/components/schemas/InventoryRevision"
          },
          "uploadUrl": {
            "type": [
              "string",
              "null"
            ],
            "format": "uri"
          },
          "expiresAt": {
            "type": "string",
            "format": "date-time"
          },
          "status": {
            "enum": [
              "pending",
              "processing",
              "ready",
              "rejected",
              "expired"
            ]
          }
        },
        "required": [
          "attemptId",
          "mediaId",
          "revision",
          "uploadUrl",
          "expiresAt",
          "status"
        ]
      },
      "InventoryPreviewResult": {
        "type": "object",
        "additionalProperties": false,
        "properties": {
          "previewId": {
            "$ref": "#/components/schemas/InventoryUUID"
          },
          "url": {
            "type": "string",
            "format": "uri"
          },
          "expiresAt": {
            "type": "string",
            "format": "date-time"
          }
        },
        "required": [
          "previewId",
          "url",
          "expiresAt"
        ]
      },
      "InventoryFinalizeInput": {
        "type": "object",
        "additionalProperties": false,
        "properties": {
          "sha256": {
            "type": "string",
            "pattern": "^[a-f0-9]{64}$"
          }
        },
        "required": []
      },
      "InventoryHttpCreateWork": {
        "type": "object",
        "additionalProperties": false,
        "properties": {
          "workRef": {
            "type": "string",
            "minLength": 1,
            "maxLength": 128
          },
          "draft": {
            "$ref": "#/components/schemas/InventoryWorkDraft"
          },
          "internalNotes": {
            "type": "string",
            "maxLength": 20000
          }
        },
        "required": [
          "draft"
        ],
        "x-inventory-effect": "commit_inventory_change",
        "x-inventory-financial": false,
        "x-inventory-role": "contributor",
        "x-inventory-scopes": [
          "site.inventory.write"
        ],
        "x-inventory-public-access-changed": false
      },
      "InventoryHttpReplaceDraft": {
        "type": "object",
        "additionalProperties": false,
        "properties": {
          "draft": {
            "$ref": "#/components/schemas/InventoryWorkDraft"
          },
          "internalNotes": {
            "anyOf": [
              {
                "type": "string",
                "maxLength": 20000
              },
              {
                "type": "null"
              }
            ]
          },
          "workRef": {
            "anyOf": [
              {
                "$ref": "#/components/schemas/InventoryReference"
              },
              {
                "type": "null"
              }
            ],
            "description": "Omettre pour conserver ; null attribue une nouvelle référence automatique. Identité technique et slug conservés."
          }
        },
        "required": [
          "draft"
        ],
        "x-inventory-effect": "commit_inventory_change",
        "x-inventory-financial": false,
        "x-inventory-role": "contributor",
        "x-inventory-scopes": [
          "site.inventory.write"
        ],
        "x-inventory-public-access-changed": false
      },
      "InventoryHttpPublishWork": {
        "type": "object",
        "additionalProperties": false,
        "properties": {},
        "required": [],
        "x-inventory-effect": "apply_public_change",
        "x-inventory-financial": false,
        "x-inventory-role": "contributor",
        "x-inventory-scopes": [
          "site.inventory.publish"
        ],
        "x-inventory-public-access-changed": true
      },
      "InventoryHttpUnpublishWork": {
        "type": "object",
        "additionalProperties": false,
        "properties": {},
        "required": [],
        "x-inventory-effect": "apply_public_change",
        "x-inventory-financial": false,
        "x-inventory-role": "contributor",
        "x-inventory-scopes": [
          "site.inventory.publish"
        ],
        "x-inventory-public-access-changed": true
      },
      "InventoryHttpArchiveWork": {
        "type": "object",
        "additionalProperties": false,
        "properties": {},
        "required": [],
        "x-inventory-effect": "commit_inventory_change",
        "x-inventory-financial": false,
        "x-inventory-role": "administrator",
        "x-inventory-scopes": [
          "site.inventory.write",
          "site.inventory.manage"
        ],
        "x-inventory-public-access-changed": false
      },
      "InventoryHttpDeleteWork": {
        "type": "object",
        "additionalProperties": false,
        "properties": {},
        "required": [],
        "x-inventory-effect": "commit_inventory_change",
        "x-inventory-financial": false,
        "x-inventory-role": "administrator",
        "x-inventory-scopes": [
          "site.inventory.write",
          "site.inventory.manage"
        ],
        "x-inventory-public-access-changed": false
      },
      "InventoryHttpCreateUnit": {
        "type": "object",
        "additionalProperties": false,
        "properties": {
          "unitRef": {
            "type": "string",
            "minLength": 1,
            "maxLength": 128
          },
          "editionNumber": {
            "type": "string",
            "maxLength": 100
          }
        },
        "required": [],
        "x-inventory-effect": "commit_inventory_change",
        "x-inventory-financial": false,
        "x-inventory-role": "administrator",
        "x-inventory-scopes": [
          "site.inventory.write",
          "site.inventory.manage"
        ],
        "x-inventory-public-access-changed": false
      },
      "InventoryHttpUpdateUnitLogistics": {
        "type": "object",
        "additionalProperties": false,
        "properties": {
          "locationId": {
            "anyOf": [
              {
                "type": "string",
                "format": "uuid"
              },
              {
                "type": "null"
              }
            ]
          },
          "conditionNotes": {
            "type": "string",
            "maxLength": 10000
          },
          "editionNumber": {
            "anyOf": [
              {
                "type": "string",
                "maxLength": 100
              },
              {
                "type": "null"
              }
            ]
          },
          "qualification": {
            "type": "string",
            "enum": [
              "unqualified",
              "available"
            ]
          },
          "custodyQualification": {
            "type": "string",
            "enum": [
              "unknown",
              "held"
            ]
          },
          "unitRef": {
            "anyOf": [
              {
                "$ref": "#/components/schemas/InventoryReference"
              },
              {
                "type": "null"
              }
            ],
            "description": "Omettre pour conserver ; null attribue une nouvelle référence automatique. Identité technique et slug conservés."
          }
        },
        "required": [],
        "x-inventory-effect": "commit_inventory_change",
        "x-inventory-financial": false,
        "x-inventory-role": "contributor",
        "x-inventory-scopes": [
          "site.inventory.write"
        ],
        "x-inventory-public-access-changed": false
      },
      "InventoryHttpArchiveUnit": {
        "type": "object",
        "additionalProperties": false,
        "properties": {},
        "required": [],
        "x-inventory-effect": "commit_inventory_change",
        "x-inventory-financial": false,
        "x-inventory-role": "administrator",
        "x-inventory-scopes": [
          "site.inventory.write",
          "site.inventory.manage"
        ],
        "x-inventory-public-access-changed": false
      },
      "InventoryHttpReserveUnit": {
        "type": "object",
        "additionalProperties": false,
        "properties": {
          "partyId": {
            "type": "string",
            "format": "uuid"
          },
          "until": {
            "anyOf": [
              {
                "type": "string",
                "format": "date-time"
              },
              {
                "type": "null"
              }
            ]
          },
          "notes": {
            "type": "string",
            "maxLength": 5000
          }
        },
        "required": [
          "partyId"
        ],
        "x-inventory-effect": "commit_inventory_change",
        "x-inventory-financial": false,
        "x-inventory-role": "contributor",
        "x-inventory-scopes": [
          "site.inventory.write"
        ],
        "x-inventory-public-access-changed": false
      },
      "InventoryHttpReleaseReservation": {
        "type": "object",
        "additionalProperties": false,
        "properties": {},
        "required": [],
        "x-inventory-effect": "commit_inventory_change",
        "x-inventory-financial": false,
        "x-inventory-role": "contributor",
        "x-inventory-scopes": [
          "site.inventory.write"
        ],
        "x-inventory-public-access-changed": false
      },
      "InventoryHttpMoveUnit": {
        "type": "object",
        "additionalProperties": false,
        "properties": {
          "toLocationId": {
            "type": "string",
            "format": "uuid"
          },
          "occurredAt": {
            "type": "string",
            "format": "date-time"
          },
          "notes": {
            "type": "string",
            "maxLength": 5000
          }
        },
        "required": [
          "toLocationId",
          "occurredAt"
        ],
        "x-inventory-effect": "commit_inventory_change",
        "x-inventory-financial": false,
        "x-inventory-role": "contributor",
        "x-inventory-scopes": [
          "site.inventory.write"
        ],
        "x-inventory-public-access-changed": false
      },
      "InventoryHttpLoanUnit": {
        "type": "object",
        "additionalProperties": false,
        "properties": {
          "recipientId": {
            "type": "string",
            "format": "uuid"
          },
          "toLocationId": {
            "anyOf": [
              {
                "type": "string",
                "format": "uuid"
              },
              {
                "type": "null"
              }
            ]
          },
          "departedAt": {
            "type": "string",
            "format": "date-time"
          },
          "expectedReturnAt": {
            "anyOf": [
              {
                "type": "string",
                "format": "date-time"
              },
              {
                "type": "null"
              }
            ]
          },
          "notes": {
            "type": "string",
            "maxLength": 5000
          }
        },
        "required": [
          "recipientId",
          "departedAt"
        ],
        "x-inventory-effect": "commit_inventory_change",
        "x-inventory-financial": false,
        "x-inventory-role": "contributor",
        "x-inventory-scopes": [
          "site.inventory.write"
        ],
        "x-inventory-public-access-changed": false
      },
      "InventoryHttpReturnLoan": {
        "type": "object",
        "additionalProperties": false,
        "properties": {
          "toLocationId": {
            "anyOf": [
              {
                "type": "string",
                "format": "uuid"
              },
              {
                "type": "null"
              }
            ]
          },
          "returnedAt": {
            "type": "string",
            "format": "date-time"
          },
          "conditionNotes": {
            "type": "string",
            "maxLength": 10000
          }
        },
        "required": [
          "returnedAt"
        ],
        "x-inventory-effect": "commit_inventory_change",
        "x-inventory-financial": false,
        "x-inventory-role": "contributor",
        "x-inventory-scopes": [
          "site.inventory.write"
        ],
        "x-inventory-public-access-changed": false
      },
      "InventoryHttpCorrectLogisticsOperation": {
        "type": "object",
        "additionalProperties": false,
        "properties": {
          "reason": {
            "type": "string",
            "maxLength": 2000
          },
          "notes": {
            "type": "string",
            "maxLength": 5000
          },
          "expectedReturnAt": {
            "anyOf": [
              {
                "type": "string",
                "format": "date-time"
              },
              {
                "type": "null"
              }
            ]
          },
          "action": {
            "type": "string",
            "enum": [
              "annotate",
              "cancel"
            ]
          },
          "toLocationId": {
            "anyOf": [
              {
                "$ref": "#/components/schemas/InventoryUUID"
              },
              {
                "type": "null"
              }
            ]
          },
          "occurredAt": {
            "type": "string",
            "format": "date-time"
          }
        },
        "required": [
          "reason",
          "action"
        ],
        "x-inventory-effect": "commit_inventory_change",
        "x-inventory-financial": false,
        "x-inventory-role": "contributor",
        "x-inventory-scopes": [
          "site.inventory.write"
        ],
        "x-inventory-public-access-changed": false
      },
      "InventoryHttpRecordAcquisition": {
        "type": "object",
        "additionalProperties": false,
        "properties": {
          "unitId": {
            "type": "string",
            "format": "uuid"
          },
          "kind": {
            "type": "string",
            "enum": [
              "purchase",
              "creation"
            ]
          },
          "date": {
            "anyOf": [
              {
                "type": "string",
                "format": "date"
              },
              {
                "type": "null"
              }
            ]
          },
          "partyId": {
            "anyOf": [
              {
                "type": "string",
                "format": "uuid"
              },
              {
                "type": "null"
              }
            ]
          },
          "ownerId": {
            "anyOf": [
              {
                "type": "string",
                "format": "uuid"
              },
              {
                "type": "null"
              }
            ]
          },
          "amount": {
            "anyOf": [
              {
                "$ref": "#/components/schemas/InventoryMoney"
              },
              {
                "type": "null"
              }
            ]
          },
          "taxPurchasePrice": {
            "anyOf": [
              {
                "$ref": "#/components/schemas/InventoryMoney"
              },
              {
                "type": "null"
              }
            ]
          },
          "qualificationEvidenceIds": {
            "type": "array",
            "items": {
              "type": "string",
              "format": "uuid"
            }
          }
        },
        "required": [
          "unitId",
          "kind",
          "amount"
        ],
        "x-inventory-effect": "commit_inventory_change",
        "x-inventory-financial": true,
        "x-inventory-role": "administrator",
        "x-inventory-scopes": [
          "site.inventory.write",
          "site.inventory.finance"
        ],
        "x-inventory-public-access-changed": false
      },
      "InventoryHttpRecordExpense": {
        "type": "object",
        "additionalProperties": false,
        "properties": {
          "expenseRef": {
            "type": "string",
            "minLength": 1,
            "maxLength": 128
          },
          "category": {
            "type": "string",
            "enum": [
              "photo",
              "mounting",
              "restoration",
              "transport",
              "insurance",
              "other"
            ]
          },
          "date": {
            "anyOf": [
              {
                "type": "string",
                "format": "date"
              },
              {
                "type": "null"
              }
            ]
          },
          "total": {
            "anyOf": [
              {
                "$ref": "#/components/schemas/InventoryMoney"
              },
              {
                "type": "null"
              }
            ]
          },
          "supplierId": {
            "anyOf": [
              {
                "type": "string",
                "format": "uuid"
              },
              {
                "type": "null"
              }
            ]
          },
          "allocations": {
            "type": "array",
            "maxItems": 1000,
            "items": {
              "$ref": "#/components/schemas/InventoryExpenseAllocation"
            }
          },
          "evidenceIds": {
            "type": "array",
            "items": {
              "type": "string",
              "format": "uuid"
            }
          },
          "targetUnitIds": {
            "type": "array",
            "items": {
              "$ref": "#/components/schemas/InventoryUUID"
            },
            "uniqueItems": true,
            "maxItems": 1000
          }
        },
        "required": [
          "expenseRef",
          "category",
          "total",
          "allocations",
          "targetUnitIds"
        ],
        "x-inventory-effect": "commit_inventory_change",
        "x-inventory-financial": true,
        "x-inventory-role": "administrator",
        "x-inventory-scopes": [
          "site.inventory.write",
          "site.inventory.finance"
        ],
        "x-inventory-public-access-changed": false
      },
      "InventoryHttpRecordDeposit": {
        "type": "object",
        "additionalProperties": false,
        "properties": {
          "direction": {
            "type": "string",
            "enum": [
              "in",
              "out"
            ]
          },
          "units": {
            "type": "array",
            "minItems": 1,
            "maxItems": 1000,
            "items": {
              "type": "object",
              "additionalProperties": false,
              "properties": {
                "unitId": {
                  "type": "string",
                  "format": "uuid"
                },
                "expectedRevision": {
                  "type": "string",
                  "pattern": "^[1-9][0-9]*$",
                  "maxLength": 20
                }
              },
              "required": [
                "unitId",
                "expectedRevision"
              ]
            }
          },
          "ownerId": {
            "type": "string",
            "format": "uuid"
          },
          "counterpartyId": {
            "type": "string",
            "format": "uuid"
          },
          "date": {
            "type": "string",
            "format": "date"
          },
          "expectedReturnAt": {
            "anyOf": [
              {
                "type": "string",
                "format": "date-time"
              },
              {
                "type": "null"
              }
            ]
          },
          "locationId": {
            "anyOf": [
              {
                "type": "string",
                "format": "uuid"
              },
              {
                "type": "null"
              }
            ]
          },
          "commission": {
            "anyOf": [
              {
                "$ref": "#/components/schemas/InventoryMoney"
              },
              {
                "type": "null"
              }
            ]
          },
          "insuranceValue": {
            "anyOf": [
              {
                "$ref": "#/components/schemas/InventoryMoney"
              },
              {
                "type": "null"
              }
            ]
          },
          "terms": {
            "type": "string",
            "maxLength": 20000
          },
          "documentIds": {
            "type": "array",
            "items": {
              "type": "string",
              "format": "uuid"
            }
          },
          "commissionRate": {
            "anyOf": [
              {
                "$ref": "#/components/schemas/InventoryRate"
              },
              {
                "type": "null"
              }
            ]
          }
        },
        "required": [
          "direction",
          "units",
          "ownerId",
          "counterpartyId",
          "date"
        ],
        "x-inventory-effect": "commit_inventory_change",
        "x-inventory-financial": true,
        "x-inventory-role": "administrator",
        "x-inventory-scopes": [
          "site.inventory.write",
          "site.inventory.finance"
        ],
        "x-inventory-public-access-changed": false
      },
      "InventoryHttpRecordSale": {
        "type": "object",
        "additionalProperties": false,
        "properties": {
          "units": {
            "type": "array",
            "minItems": 1,
            "maxItems": 1000,
            "items": {
              "type": "object",
              "additionalProperties": false,
              "properties": {
                "unitId": {
                  "type": "string",
                  "format": "uuid"
                },
                "expectedRevision": {
                  "type": "string",
                  "pattern": "^[1-9][0-9]*$",
                  "maxLength": 20
                },
                "grossAmount": {
                  "$ref": "#/components/schemas/InventoryMoney"
                }
              },
              "required": [
                "unitId",
                "expectedRevision",
                "grossAmount"
              ]
            }
          },
          "customerId": {
            "type": "string",
            "format": "uuid"
          },
          "date": {
            "type": "string",
            "format": "date"
          },
          "sellerRole": {
            "type": "string",
            "enum": [
              "own_account",
              "consignment_principal",
              "agent"
            ]
          },
          "depositOperationId": {
            "anyOf": [
              {
                "type": "string",
                "format": "uuid"
              },
              {
                "type": "null"
              }
            ]
          },
          "amount": {
            "$ref": "#/components/schemas/InventoryMoney"
          },
          "reservationIds": {
            "type": "array",
            "items": {
              "type": "string",
              "format": "uuid"
            }
          }
        },
        "required": [
          "units",
          "customerId",
          "date",
          "sellerRole",
          "amount"
        ],
        "x-inventory-effect": "commit_inventory_change",
        "x-inventory-financial": true,
        "x-inventory-role": "administrator",
        "x-inventory-scopes": [
          "site.inventory.write",
          "site.inventory.finance"
        ],
        "x-inventory-public-access-changed": false
      },
      "InventoryHttpPrepareDocument": {
        "type": "object",
        "additionalProperties": false,
        "properties": {
          "draft": {
            "$ref": "#/components/schemas/InventoryDocumentDraft"
          }
        },
        "required": [
          "draft"
        ],
        "x-inventory-effect": "commit_inventory_change",
        "x-inventory-financial": true,
        "x-inventory-role": "administrator",
        "x-inventory-scopes": [
          "site.inventory.write",
          "site.inventory.finance"
        ],
        "x-inventory-public-access-changed": false
      },
      "InventoryHttpReplaceDocumentDraft": {
        "type": "object",
        "additionalProperties": false,
        "properties": {
          "draft": {
            "$ref": "#/components/schemas/InventoryDocumentDraft"
          }
        },
        "required": [
          "draft"
        ],
        "x-inventory-effect": "commit_inventory_change",
        "x-inventory-financial": true,
        "x-inventory-role": "administrator",
        "x-inventory-scopes": [
          "site.inventory.write",
          "site.inventory.finance"
        ],
        "x-inventory-public-access-changed": false
      },
      "InventoryHttpIssueDocument": {
        "type": "object",
        "additionalProperties": false,
        "properties": {
          "seriesId": {
            "type": "string",
            "format": "uuid"
          },
          "sellerProfileRevision": {
            "type": "string",
            "pattern": "^[1-9][0-9]*$",
            "maxLength": 20
          }
        },
        "required": [
          "seriesId",
          "sellerProfileRevision"
        ],
        "x-inventory-effect": "commit_inventory_change",
        "x-inventory-financial": true,
        "x-inventory-role": "administrator",
        "x-inventory-scopes": [
          "site.inventory.write",
          "site.inventory.finance"
        ],
        "x-inventory-public-access-changed": false
      },
      "InventoryHttpRecordPayment": {
        "type": "object",
        "additionalProperties": false,
        "properties": {
          "documentId": {
            "type": "string",
            "format": "uuid"
          },
          "amount": {
            "$ref": "#/components/schemas/InventoryMoney"
          },
          "date": {
            "type": "string",
            "format": "date"
          },
          "method": {
            "type": "string",
            "enum": [
              "bank_transfer",
              "cash",
              "card_external",
              "cheque",
              "other"
            ]
          },
          "reference": {
            "type": "string",
            "maxLength": 500
          },
          "reason": {
            "type": "string",
            "maxLength": 2000
          },
          "exchange": {
            "anyOf": [
              {
                "type": "object",
                "additionalProperties": false,
                "properties": {
                  "invoiceAmount": {
                    "$ref": "#/components/schemas/InventoryMoney"
                  },
                  "evidenceId": {
                    "type": "string",
                    "format": "uuid"
                  }
                },
                "required": [
                  "invoiceAmount",
                  "evidenceId"
                ]
              },
              {
                "type": "null"
              }
            ]
          }
        },
        "required": [
          "documentId",
          "amount",
          "date",
          "method",
          "reference"
        ],
        "x-inventory-effect": "commit_inventory_change",
        "x-inventory-financial": true,
        "x-inventory-role": "administrator",
        "x-inventory-scopes": [
          "site.inventory.write",
          "site.inventory.finance"
        ],
        "x-inventory-public-access-changed": false
      },
      "InventoryHttpRecordRefund": {
        "type": "object",
        "additionalProperties": false,
        "properties": {
          "documentId": {
            "type": "string",
            "format": "uuid"
          },
          "amount": {
            "$ref": "#/components/schemas/InventoryMoney"
          },
          "date": {
            "type": "string",
            "format": "date"
          },
          "method": {
            "type": "string",
            "enum": [
              "bank_transfer",
              "cash",
              "card_external",
              "cheque",
              "other"
            ]
          },
          "reference": {
            "type": "string",
            "maxLength": 500
          },
          "reason": {
            "type": "string",
            "maxLength": 2000
          },
          "exchange": {
            "anyOf": [
              {
                "type": "object",
                "additionalProperties": false,
                "properties": {
                  "invoiceAmount": {
                    "$ref": "#/components/schemas/InventoryMoney"
                  },
                  "evidenceId": {
                    "type": "string",
                    "format": "uuid"
                  }
                },
                "required": [
                  "invoiceAmount",
                  "evidenceId"
                ]
              },
              {
                "type": "null"
              }
            ]
          }
        },
        "required": [
          "documentId",
          "amount",
          "date",
          "method",
          "reference"
        ],
        "x-inventory-effect": "commit_inventory_change",
        "x-inventory-financial": true,
        "x-inventory-role": "administrator",
        "x-inventory-scopes": [
          "site.inventory.write",
          "site.inventory.finance"
        ],
        "x-inventory-public-access-changed": false
      },
      "InventoryHttpRevokePublicMedia": {
        "type": "object",
        "additionalProperties": false,
        "properties": {
          "reason": {
            "type": "string",
            "maxLength": 2000
          }
        },
        "required": [],
        "x-inventory-effect": "commit_inventory_change",
        "x-inventory-financial": false,
        "x-inventory-role": "contributor",
        "x-inventory-scopes": [
          "site.inventory.publish"
        ],
        "x-inventory-public-access-changed": true
      },
      "InventoryHttpDeleteMedia": {
        "type": "object",
        "additionalProperties": false,
        "properties": {},
        "required": [],
        "x-inventory-effect": "commit_inventory_change",
        "x-inventory-financial": false,
        "x-inventory-role": "administrator",
        "x-inventory-scopes": [
          "site.inventory.write",
          "site.inventory.manage"
        ],
        "x-inventory-public-access-changed": false
      },
      "InventoryHttpConfirmImport": {
        "type": "object",
        "additionalProperties": false,
        "properties": {
          "simulationDigest": {
            "type": "string",
            "pattern": "^[a-f0-9]{64}$"
          }
        },
        "required": [
          "simulationDigest"
        ],
        "x-inventory-effect": "commit_inventory_change",
        "x-inventory-financial": false,
        "x-inventory-role": "administrator",
        "x-inventory-scopes": [
          "site.inventory.write",
          "site.inventory.manage",
          "site.inventory.finance"
        ],
        "x-inventory-public-access-changed": false
      },
      "InventoryHttpConfirmMigration": {
        "type": "object",
        "additionalProperties": false,
        "properties": {
          "simulationDigest": {
            "type": "string",
            "pattern": "^[a-f0-9]{64}$"
          },
          "expectedSource": {
            "const": "artlogic"
          },
          "expectedSourceBindingRevision": {
            "$ref": "#/components/schemas/InventoryRevision"
          },
          "expectedFence": {
            "type": "string",
            "pattern": "^(0|[1-9][0-9]*)$",
            "maxLength": 20
          }
        },
        "required": [
          "simulationDigest",
          "expectedSource",
          "expectedSourceBindingRevision",
          "expectedFence"
        ],
        "x-inventory-effect": "commit_inventory_change",
        "x-inventory-financial": false,
        "x-inventory-role": "administrator",
        "x-inventory-scopes": [
          "site.inventory.write",
          "site.inventory.manage",
          "site.inventory.finance"
        ],
        "x-inventory-public-access-changed": false
      },
      "InventoryHttpReplaceExpense": {
        "type": "object",
        "additionalProperties": false,
        "properties": {
          "category": {
            "type": "string",
            "enum": [
              "photo",
              "mounting",
              "restoration",
              "transport",
              "insurance",
              "other"
            ]
          },
          "date": {
            "anyOf": [
              {
                "type": "string",
                "format": "date"
              },
              {
                "type": "null"
              }
            ]
          },
          "total": {
            "anyOf": [
              {
                "$ref": "#/components/schemas/InventoryMoney"
              },
              {
                "type": "null"
              }
            ]
          },
          "supplierId": {
            "anyOf": [
              {
                "type": "string",
                "format": "uuid"
              },
              {
                "type": "null"
              }
            ]
          },
          "allocations": {
            "type": "array",
            "maxItems": 1000,
            "items": {
              "$ref": "#/components/schemas/InventoryExpenseAllocation"
            }
          },
          "evidenceIds": {
            "type": "array",
            "items": {
              "type": "string",
              "format": "uuid"
            }
          },
          "targetUnitIds": {
            "type": "array",
            "items": {
              "$ref": "#/components/schemas/InventoryUUID"
            },
            "uniqueItems": true,
            "maxItems": 1000
          }
        },
        "required": [
          "category",
          "total",
          "allocations",
          "targetUnitIds"
        ],
        "x-inventory-effect": "commit_inventory_change",
        "x-inventory-financial": true,
        "x-inventory-role": "administrator",
        "x-inventory-scopes": [
          "site.inventory.write",
          "site.inventory.finance"
        ],
        "x-inventory-public-access-changed": false
      },
      "InventoryHttpReallocateExpense": {
        "type": "object",
        "additionalProperties": false,
        "properties": {
          "allocations": {
            "type": "array",
            "maxItems": 1000,
            "items": {
              "$ref": "#/components/schemas/InventoryExpenseAllocation"
            }
          },
          "reason": {
            "type": "string",
            "maxLength": 2000
          },
          "targetUnitIds": {
            "type": "array",
            "items": {
              "$ref": "#/components/schemas/InventoryUUID"
            },
            "uniqueItems": true,
            "maxItems": 1000
          }
        },
        "required": [
          "allocations",
          "reason",
          "targetUnitIds"
        ],
        "x-inventory-effect": "commit_inventory_change",
        "x-inventory-financial": true,
        "x-inventory-role": "administrator",
        "x-inventory-scopes": [
          "site.inventory.write",
          "site.inventory.finance"
        ],
        "x-inventory-public-access-changed": false
      },
      "InventoryHttpCorrectLedgerEntry": {
        "type": "object",
        "additionalProperties": false,
        "properties": {
          "reason": {
            "type": "string",
            "minLength": 1,
            "maxLength": 2000
          },
          "date": {
            "type": "string",
            "format": "date"
          }
        },
        "required": [
          "reason",
          "date"
        ],
        "x-inventory-effect": "commit_inventory_change",
        "x-inventory-financial": true,
        "x-inventory-role": "administrator",
        "x-inventory-scopes": [
          "site.inventory.write",
          "site.inventory.finance"
        ],
        "x-inventory-public-access-changed": false
      },
      "InventoryHttpCancelFinancialOperation": {
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
        ],
        "x-inventory-effect": "commit_inventory_change",
        "x-inventory-financial": true,
        "x-inventory-role": "administrator",
        "x-inventory-scopes": [
          "site.inventory.write",
          "site.inventory.finance"
        ],
        "x-inventory-public-access-changed": false
      },
      "InventoryHttpUpdateDepositTerms": {
        "type": "object",
        "additionalProperties": false,
        "properties": {
          "terms": {
            "type": "object",
            "additionalProperties": false,
            "properties": {
              "commission": {
                "anyOf": [
                  {
                    "$ref": "#/components/schemas/InventoryMoney"
                  },
                  {
                    "type": "null"
                  }
                ]
              },
              "insuranceValue": {
                "anyOf": [
                  {
                    "$ref": "#/components/schemas/InventoryMoney"
                  },
                  {
                    "type": "null"
                  }
                ]
              },
              "text": {
                "type": "string",
                "maxLength": 20000
              },
              "documentIds": {
                "type": "array",
                "items": {
                  "$ref": "#/components/schemas/InventoryUUID"
                },
                "uniqueItems": true
              },
              "commissionRate": {
                "anyOf": [
                  {
                    "$ref": "#/components/schemas/InventoryRate"
                  },
                  {
                    "type": "null"
                  }
                ]
              }
            },
            "required": [],
            "minProperties": 1
          }
        },
        "required": [
          "terms"
        ],
        "x-inventory-effect": "commit_inventory_change",
        "x-inventory-financial": true,
        "x-inventory-role": "administrator",
        "x-inventory-scopes": [
          "site.inventory.write",
          "site.inventory.finance"
        ],
        "x-inventory-public-access-changed": false
      },
      "InventoryHttpCreateSellerProfile": {
        "type": "object",
        "additionalProperties": false,
        "properties": {
          "profile": {
            "$ref": "#/components/schemas/InventorySellerFiscalProfile"
          }
        },
        "required": [
          "profile"
        ],
        "x-inventory-effect": "commit_inventory_change",
        "x-inventory-financial": true,
        "x-inventory-role": "administrator",
        "x-inventory-scopes": [
          "site.inventory.write",
          "site.inventory.finance",
          "site.inventory.manage"
        ],
        "x-inventory-public-access-changed": false
      },
      "InventoryHttpReplaceSellerProfile": {
        "type": "object",
        "additionalProperties": false,
        "properties": {
          "profile": {
            "$ref": "#/components/schemas/InventorySellerFiscalProfile"
          }
        },
        "required": [
          "profile"
        ],
        "x-inventory-effect": "commit_inventory_change",
        "x-inventory-financial": true,
        "x-inventory-role": "administrator",
        "x-inventory-scopes": [
          "site.inventory.write",
          "site.inventory.finance",
          "site.inventory.manage"
        ],
        "x-inventory-public-access-changed": false
      },
      "InventoryHttpQualifySellerProfile": {
        "type": "object",
        "additionalProperties": false,
        "properties": {
          "validation": {
            "type": "object",
            "additionalProperties": false,
            "properties": {
              "evidenceIds": {
                "type": "array",
                "minItems": 1,
                "items": {
                  "$ref": "#/components/schemas/InventoryUUID"
                },
                "uniqueItems": true
              },
              "scope": {
                "type": "string",
                "minLength": 1,
                "maxLength": 2000
              },
              "note": {
                "type": "string",
                "maxLength": 5000
              }
            },
            "required": [
              "evidenceIds",
              "scope"
            ]
          }
        },
        "required": [
          "validation"
        ],
        "x-inventory-effect": "commit_inventory_change",
        "x-inventory-financial": true,
        "x-inventory-role": "administrator",
        "x-inventory-scopes": [
          "site.inventory.write",
          "site.inventory.finance",
          "site.inventory.manage"
        ],
        "x-inventory-public-access-changed": false
      },
      "InventoryHttpCreateTaxTreatment": {
        "type": "object",
        "additionalProperties": false,
        "properties": {
          "treatment": {
            "$ref": "#/components/schemas/InventoryTaxTreatment"
          }
        },
        "required": [
          "treatment"
        ],
        "x-inventory-effect": "commit_inventory_change",
        "x-inventory-financial": true,
        "x-inventory-role": "administrator",
        "x-inventory-scopes": [
          "site.inventory.write",
          "site.inventory.finance",
          "site.inventory.manage"
        ],
        "x-inventory-public-access-changed": false
      },
      "InventoryHttpReplaceTaxTreatment": {
        "type": "object",
        "additionalProperties": false,
        "properties": {
          "treatment": {
            "$ref": "#/components/schemas/InventoryTaxTreatment"
          }
        },
        "required": [
          "treatment"
        ],
        "x-inventory-effect": "commit_inventory_change",
        "x-inventory-financial": true,
        "x-inventory-role": "administrator",
        "x-inventory-scopes": [
          "site.inventory.write",
          "site.inventory.finance",
          "site.inventory.manage"
        ],
        "x-inventory-public-access-changed": false
      },
      "InventoryHttpQualifyTaxTreatment": {
        "type": "object",
        "additionalProperties": false,
        "properties": {
          "validation": {
            "type": "object",
            "additionalProperties": false,
            "properties": {
              "evidenceIds": {
                "type": "array",
                "minItems": 1,
                "items": {
                  "$ref": "#/components/schemas/InventoryUUID"
                },
                "uniqueItems": true
              },
              "scope": {
                "type": "string",
                "minLength": 1,
                "maxLength": 2000
              },
              "note": {
                "type": "string",
                "maxLength": 5000
              }
            },
            "required": [
              "evidenceIds",
              "scope"
            ]
          }
        },
        "required": [
          "validation"
        ],
        "x-inventory-effect": "commit_inventory_change",
        "x-inventory-financial": true,
        "x-inventory-role": "administrator",
        "x-inventory-scopes": [
          "site.inventory.write",
          "site.inventory.finance",
          "site.inventory.manage"
        ],
        "x-inventory-public-access-changed": false
      },
      "InventoryHttpCreateDocumentSeries": {
        "type": "object",
        "additionalProperties": false,
        "properties": {
          "series": {
            "type": "object",
            "additionalProperties": false,
            "properties": {
              "kind": {
                "type": "string",
                "enum": [
                  "quote",
                  "invoice",
                  "credit_note"
                ]
              },
              "name": {
                "$ref": "#/components/schemas/InventoryReference"
              },
              "prefix": {
                "type": "string",
                "minLength": 1,
                "maxLength": 32,
                "pattern": "^[A-Za-z0-9/_-]+$"
              },
              "fiscalYear": {
                "type": "integer",
                "minimum": 1900,
                "maximum": 2200
              },
              "legalEntityProfileId": {
                "$ref": "#/components/schemas/InventoryUUID"
              }
            },
            "required": [
              "kind",
              "name",
              "prefix",
              "legalEntityProfileId"
            ]
          }
        },
        "required": [
          "series"
        ],
        "x-inventory-effect": "commit_inventory_change",
        "x-inventory-financial": true,
        "x-inventory-role": "administrator",
        "x-inventory-scopes": [
          "site.inventory.write",
          "site.inventory.finance",
          "site.inventory.manage"
        ],
        "x-inventory-public-access-changed": false
      },
      "InventoryHttpDeactivateDocumentSeries": {
        "type": "object",
        "additionalProperties": false,
        "properties": {},
        "required": [],
        "x-inventory-effect": "commit_inventory_change",
        "x-inventory-financial": true,
        "x-inventory-role": "administrator",
        "x-inventory-scopes": [
          "site.inventory.write",
          "site.inventory.finance",
          "site.inventory.manage"
        ],
        "x-inventory-public-access-changed": false
      },
      "InventoryHttpSetAssignment": {
        "type": "object",
        "additionalProperties": false,
        "properties": {
          "issuer": {
            "type": "string",
            "format": "uri"
          },
          "subject": {
            "type": "string",
            "minLength": 1,
            "maxLength": 500
          },
          "role": {
            "type": "string",
            "enum": [
              "administrator",
              "contributor"
            ]
          }
        },
        "required": [
          "issuer",
          "subject",
          "role"
        ],
        "x-inventory-effect": "commit_inventory_change",
        "x-inventory-financial": false,
        "x-inventory-role": "administrator",
        "x-inventory-scopes": [
          "site.inventory.write",
          "site.inventory.manage"
        ],
        "x-inventory-public-access-changed": false
      },
      "InventoryHttpRevokeAssignment": {
        "type": "object",
        "additionalProperties": false,
        "properties": {
          "reason": {
            "type": "string",
            "maxLength": 2000
          }
        },
        "required": [
          "reason"
        ],
        "x-inventory-effect": "commit_inventory_change",
        "x-inventory-financial": false,
        "x-inventory-role": "administrator",
        "x-inventory-scopes": [
          "site.inventory.write",
          "site.inventory.manage"
        ],
        "x-inventory-public-access-changed": false
      },
      "InventoryHttpReceiveSalesReturn": {
        "type": "object",
        "additionalProperties": false,
        "properties": {
          "unitId": {
            "$ref": "#/components/schemas/InventoryUUID"
          },
          "receivedAt": {
            "type": "string",
            "format": "date-time"
          },
          "locationId": {
            "anyOf": [
              {
                "$ref": "#/components/schemas/InventoryUUID"
              },
              {
                "type": "null"
              }
            ]
          },
          "conditionNotes": {
            "type": "string",
            "maxLength": 10000
          }
        },
        "required": [
          "unitId",
          "receivedAt"
        ],
        "x-inventory-effect": "commit_inventory_change",
        "x-inventory-financial": true,
        "x-inventory-role": "administrator",
        "x-inventory-scopes": [
          "site.inventory.write",
          "site.inventory.finance"
        ],
        "x-inventory-public-access-changed": false
      },
      "InventoryHttpRestockReturnedUnit": {
        "type": "object",
        "additionalProperties": false,
        "properties": {
          "unitId": {
            "$ref": "#/components/schemas/InventoryUUID"
          },
          "reason": {
            "type": "string",
            "minLength": 1,
            "maxLength": 2000
          }
        },
        "required": [
          "unitId",
          "reason"
        ],
        "x-inventory-effect": "commit_inventory_change",
        "x-inventory-financial": true,
        "x-inventory-role": "administrator",
        "x-inventory-scopes": [
          "site.inventory.write",
          "site.inventory.finance"
        ],
        "x-inventory-public-access-changed": false
      },
      "InventoryHttpRecordOwnerSettlement": {
        "type": "object",
        "additionalProperties": false,
        "properties": {
          "amount": {
            "$ref": "#/components/schemas/InventoryMoney"
          },
          "direction": {
            "type": "string",
            "enum": [
              "pay_owner",
              "receive_owner"
            ]
          },
          "date": {
            "type": "string",
            "format": "date"
          },
          "method": {
            "type": "string",
            "enum": [
              "bank_transfer",
              "cash",
              "card_external",
              "cheque",
              "other"
            ]
          },
          "reference": {
            "type": "string",
            "maxLength": 500
          }
        },
        "required": [
          "amount",
          "direction",
          "date",
          "method",
          "reference"
        ],
        "x-inventory-effect": "commit_inventory_change",
        "x-inventory-financial": true,
        "x-inventory-role": "administrator",
        "x-inventory-scopes": [
          "site.inventory.write",
          "site.inventory.finance"
        ],
        "x-inventory-public-access-changed": false
      },
      "InventoryCreateArtistInput": {
        "type": "object",
        "additionalProperties": false,
        "properties": {
          "fields": {
            "type": "object",
            "additionalProperties": false,
            "properties": {
              "name": {
                "type": "object",
                "minProperties": 1,
                "maxProperties": 8,
                "propertyNames": {
                  "pattern": "^[a-z]{2,3}(?:-[A-Za-z0-9]{2,8})*$"
                },
                "additionalProperties": {
                  "type": "string",
                  "maxLength": 5000
                }
              },
              "birthDate": {
                "anyOf": [
                  {
                    "type": "string",
                    "maxLength": 100
                  },
                  {
                    "type": "null"
                  }
                ]
              },
              "deathDate": {
                "anyOf": [
                  {
                    "type": "string",
                    "maxLength": 100
                  },
                  {
                    "type": "null"
                  }
                ]
              },
              "nationalities": {
                "type": "array",
                "items": {
                  "type": "string",
                  "maxLength": 100
                }
              },
              "biography": {
                "$ref": "#/components/schemas/InventoryE_LocalizedRichText"
              },
              "mediaIds": {
                "type": "array",
                "items": {
                  "$ref": "#/components/schemas/InventoryUUID"
                },
                "maxItems": 100,
                "uniqueItems": true
              }
            },
            "required": [
              "name"
            ]
          }
        },
        "required": [
          "fields"
        ]
      },
      "InventoryUpdateArtistInput": {
        "type": "object",
        "additionalProperties": false,
        "properties": {
          "fields": {
            "type": "object",
            "additionalProperties": false,
            "properties": {
              "name": {
                "type": "object",
                "minProperties": 1,
                "maxProperties": 8,
                "propertyNames": {
                  "pattern": "^[a-z]{2,3}(?:-[A-Za-z0-9]{2,8})*$"
                },
                "additionalProperties": {
                  "type": "string",
                  "maxLength": 5000
                }
              },
              "birthDate": {
                "anyOf": [
                  {
                    "type": "string",
                    "maxLength": 100
                  },
                  {
                    "type": "null"
                  }
                ]
              },
              "deathDate": {
                "anyOf": [
                  {
                    "type": "string",
                    "maxLength": 100
                  },
                  {
                    "type": "null"
                  }
                ]
              },
              "nationalities": {
                "type": "array",
                "items": {
                  "type": "string",
                  "maxLength": 100
                }
              },
              "biography": {
                "$ref": "#/components/schemas/InventoryE_LocalizedRichText"
              },
              "mediaIds": {
                "type": "array",
                "items": {
                  "$ref": "#/components/schemas/InventoryUUID"
                },
                "maxItems": 100,
                "uniqueItems": true
              }
            },
            "required": [
              "name"
            ]
          }
        },
        "required": [
          "fields"
        ]
      },
      "InventoryCreateOriginInput": {
        "type": "object",
        "additionalProperties": false,
        "properties": {
          "fields": {
            "type": "object",
            "additionalProperties": false,
            "properties": {
              "name": {
                "type": "object",
                "minProperties": 1,
                "maxProperties": 8,
                "propertyNames": {
                  "pattern": "^[a-z]{2,3}(?:-[A-Za-z0-9]{2,8})*$"
                },
                "additionalProperties": {
                  "type": "string",
                  "maxLength": 5000
                }
              },
              "culture": {
                "type": "object",
                "minProperties": 1,
                "maxProperties": 8,
                "propertyNames": {
                  "pattern": "^[a-z]{2,3}(?:-[A-Za-z0-9]{2,8})*$"
                },
                "additionalProperties": {
                  "type": "string",
                  "maxLength": 5000
                }
              },
              "country": {
                "anyOf": [
                  {
                    "type": "string",
                    "maxLength": 100
                  },
                  {
                    "type": "null"
                  }
                ]
              },
              "region": {
                "type": "object",
                "minProperties": 1,
                "maxProperties": 8,
                "propertyNames": {
                  "pattern": "^[a-z]{2,3}(?:-[A-Za-z0-9]{2,8})*$"
                },
                "additionalProperties": {
                  "type": "string",
                  "maxLength": 5000
                }
              },
              "period": {
                "type": "object",
                "minProperties": 1,
                "maxProperties": 8,
                "propertyNames": {
                  "pattern": "^[a-z]{2,3}(?:-[A-Za-z0-9]{2,8})*$"
                },
                "additionalProperties": {
                  "type": "string",
                  "maxLength": 5000
                }
              },
              "description": {
                "$ref": "#/components/schemas/InventoryE_LocalizedRichText"
              },
              "mediaIds": {
                "type": "array",
                "items": {
                  "$ref": "#/components/schemas/InventoryUUID"
                },
                "maxItems": 100,
                "uniqueItems": true
              }
            },
            "required": [
              "name"
            ]
          }
        },
        "required": [
          "fields"
        ]
      },
      "InventoryUpdateOriginInput": {
        "type": "object",
        "additionalProperties": false,
        "properties": {
          "fields": {
            "type": "object",
            "additionalProperties": false,
            "properties": {
              "name": {
                "type": "object",
                "minProperties": 1,
                "maxProperties": 8,
                "propertyNames": {
                  "pattern": "^[a-z]{2,3}(?:-[A-Za-z0-9]{2,8})*$"
                },
                "additionalProperties": {
                  "type": "string",
                  "maxLength": 5000
                }
              },
              "culture": {
                "type": "object",
                "minProperties": 1,
                "maxProperties": 8,
                "propertyNames": {
                  "pattern": "^[a-z]{2,3}(?:-[A-Za-z0-9]{2,8})*$"
                },
                "additionalProperties": {
                  "type": "string",
                  "maxLength": 5000
                }
              },
              "country": {
                "anyOf": [
                  {
                    "type": "string",
                    "maxLength": 100
                  },
                  {
                    "type": "null"
                  }
                ]
              },
              "region": {
                "type": "object",
                "minProperties": 1,
                "maxProperties": 8,
                "propertyNames": {
                  "pattern": "^[a-z]{2,3}(?:-[A-Za-z0-9]{2,8})*$"
                },
                "additionalProperties": {
                  "type": "string",
                  "maxLength": 5000
                }
              },
              "period": {
                "type": "object",
                "minProperties": 1,
                "maxProperties": 8,
                "propertyNames": {
                  "pattern": "^[a-z]{2,3}(?:-[A-Za-z0-9]{2,8})*$"
                },
                "additionalProperties": {
                  "type": "string",
                  "maxLength": 5000
                }
              },
              "description": {
                "$ref": "#/components/schemas/InventoryE_LocalizedRichText"
              },
              "mediaIds": {
                "type": "array",
                "items": {
                  "$ref": "#/components/schemas/InventoryUUID"
                },
                "maxItems": 100,
                "uniqueItems": true
              }
            },
            "required": [
              "name"
            ]
          }
        },
        "required": [
          "fields"
        ]
      },
      "InventoryCreatePartyInput": {
        "type": "object",
        "additionalProperties": false,
        "properties": {
          "fields": {
            "type": "object",
            "additionalProperties": false,
            "properties": {
              "name": {
                "type": "string",
                "maxLength": 500
              },
              "kind": {
                "type": "string",
                "enum": [
                  "person",
                  "organization"
                ]
              },
              "roles": {
                "type": "array",
                "items": {
                  "type": "string",
                  "enum": [
                    "owner",
                    "supplier",
                    "depositor",
                    "customer",
                    "recipient"
                  ]
                }
              },
              "email": {
                "anyOf": [
                  {
                    "type": "string",
                    "format": "email"
                  },
                  {
                    "type": "null"
                  }
                ]
              },
              "phone": {
                "anyOf": [
                  {
                    "type": "string",
                    "maxLength": 100
                  },
                  {
                    "type": "null"
                  }
                ]
              },
              "addressLines": {
                "type": "array",
                "maxItems": 8,
                "items": {
                  "type": "string",
                  "maxLength": 500
                }
              },
              "customerKind": {
                "type": "string",
                "enum": [
                  "professional",
                  "private",
                  "public_entity"
                ]
              },
              "companyIdentifier": {
                "anyOf": [
                  {
                    "type": "string",
                    "maxLength": 100
                  },
                  {
                    "type": "null"
                  }
                ]
              },
              "vatIdentifier": {
                "anyOf": [
                  {
                    "type": "string",
                    "maxLength": 100
                  },
                  {
                    "type": "null"
                  }
                ]
              },
              "billingAddress": {
                "type": "object",
                "additionalProperties": false,
                "properties": {
                  "line1": {
                    "type": "string",
                    "maxLength": 500
                  },
                  "line2": {
                    "anyOf": [
                      {
                        "type": "string",
                        "maxLength": 500
                      },
                      {
                        "type": "null"
                      }
                    ]
                  },
                  "postalCode": {
                    "type": "string",
                    "maxLength": 100
                  },
                  "city": {
                    "type": "string",
                    "maxLength": 200
                  },
                  "country": {
                    "type": "string",
                    "pattern": "^[A-Z]{2}$"
                  }
                },
                "required": [
                  "line1",
                  "city",
                  "country"
                ]
              },
              "shippingAddress": {
                "anyOf": [
                  {
                    "type": "object",
                    "additionalProperties": false,
                    "properties": {
                      "line1": {
                        "type": "string",
                        "maxLength": 500
                      },
                      "line2": {
                        "anyOf": [
                          {
                            "type": "string",
                            "maxLength": 500
                          },
                          {
                            "type": "null"
                          }
                        ]
                      },
                      "postalCode": {
                        "type": "string",
                        "maxLength": 100
                      },
                      "city": {
                        "type": "string",
                        "maxLength": 200
                      },
                      "country": {
                        "type": "string",
                        "pattern": "^[A-Z]{2}$"
                      }
                    },
                    "required": [
                      "line1",
                      "city",
                      "country"
                    ]
                  },
                  {
                    "type": "null"
                  }
                ]
              }
            },
            "required": [
              "name",
              "kind",
              "roles"
            ]
          }
        },
        "required": [
          "fields"
        ]
      },
      "InventoryUpdatePartyInput": {
        "type": "object",
        "additionalProperties": false,
        "properties": {
          "fields": {
            "type": "object",
            "additionalProperties": false,
            "properties": {
              "name": {
                "type": "string",
                "maxLength": 500
              },
              "kind": {
                "type": "string",
                "enum": [
                  "person",
                  "organization"
                ]
              },
              "roles": {
                "type": "array",
                "items": {
                  "type": "string",
                  "enum": [
                    "owner",
                    "supplier",
                    "depositor",
                    "customer",
                    "recipient"
                  ]
                }
              },
              "email": {
                "anyOf": [
                  {
                    "type": "string",
                    "format": "email"
                  },
                  {
                    "type": "null"
                  }
                ]
              },
              "phone": {
                "anyOf": [
                  {
                    "type": "string",
                    "maxLength": 100
                  },
                  {
                    "type": "null"
                  }
                ]
              },
              "addressLines": {
                "type": "array",
                "maxItems": 8,
                "items": {
                  "type": "string",
                  "maxLength": 500
                }
              },
              "customerKind": {
                "type": "string",
                "enum": [
                  "professional",
                  "private",
                  "public_entity"
                ]
              },
              "companyIdentifier": {
                "anyOf": [
                  {
                    "type": "string",
                    "maxLength": 100
                  },
                  {
                    "type": "null"
                  }
                ]
              },
              "vatIdentifier": {
                "anyOf": [
                  {
                    "type": "string",
                    "maxLength": 100
                  },
                  {
                    "type": "null"
                  }
                ]
              },
              "billingAddress": {
                "type": "object",
                "additionalProperties": false,
                "properties": {
                  "line1": {
                    "type": "string",
                    "maxLength": 500
                  },
                  "line2": {
                    "anyOf": [
                      {
                        "type": "string",
                        "maxLength": 500
                      },
                      {
                        "type": "null"
                      }
                    ]
                  },
                  "postalCode": {
                    "type": "string",
                    "maxLength": 100
                  },
                  "city": {
                    "type": "string",
                    "maxLength": 200
                  },
                  "country": {
                    "type": "string",
                    "pattern": "^[A-Z]{2}$"
                  }
                },
                "required": [
                  "line1",
                  "city",
                  "country"
                ]
              },
              "shippingAddress": {
                "anyOf": [
                  {
                    "type": "object",
                    "additionalProperties": false,
                    "properties": {
                      "line1": {
                        "type": "string",
                        "maxLength": 500
                      },
                      "line2": {
                        "anyOf": [
                          {
                            "type": "string",
                            "maxLength": 500
                          },
                          {
                            "type": "null"
                          }
                        ]
                      },
                      "postalCode": {
                        "type": "string",
                        "maxLength": 100
                      },
                      "city": {
                        "type": "string",
                        "maxLength": 200
                      },
                      "country": {
                        "type": "string",
                        "pattern": "^[A-Z]{2}$"
                      }
                    },
                    "required": [
                      "line1",
                      "city",
                      "country"
                    ]
                  },
                  {
                    "type": "null"
                  }
                ]
              }
            },
            "required": [
              "name",
              "kind",
              "roles"
            ]
          }
        },
        "required": [
          "fields"
        ]
      },
      "InventoryCreateLocationInput": {
        "type": "object",
        "additionalProperties": false,
        "properties": {
          "fields": {
            "type": "object",
            "additionalProperties": false,
            "properties": {
              "name": {
                "type": "string",
                "maxLength": 500
              },
              "partyId": {
                "anyOf": [
                  {
                    "type": "string",
                    "format": "uuid"
                  },
                  {
                    "type": "null"
                  }
                ]
              },
              "addressLines": {
                "type": "array",
                "maxItems": 8,
                "items": {
                  "type": "string",
                  "maxLength": 500
                }
              },
              "active": {
                "type": "boolean"
              }
            },
            "required": [
              "name"
            ]
          }
        },
        "required": [
          "fields"
        ]
      },
      "InventoryUpdateLocationInput": {
        "type": "object",
        "additionalProperties": false,
        "properties": {
          "fields": {
            "type": "object",
            "additionalProperties": false,
            "properties": {
              "name": {
                "type": "string",
                "maxLength": 500
              },
              "partyId": {
                "anyOf": [
                  {
                    "type": "string",
                    "format": "uuid"
                  },
                  {
                    "type": "null"
                  }
                ]
              },
              "addressLines": {
                "type": "array",
                "maxItems": 8,
                "items": {
                  "type": "string",
                  "maxLength": 500
                }
              },
              "active": {
                "type": "boolean"
              }
            },
            "required": [
              "name"
            ]
          }
        },
        "required": [
          "fields"
        ]
      },
      "InventoryCreateTypeInput": {
        "type": "object",
        "additionalProperties": false,
        "properties": {
          "fields": {
            "type": "object",
            "additionalProperties": false,
            "properties": {
              "name": {
                "type": "object",
                "minProperties": 1,
                "maxProperties": 8,
                "propertyNames": {
                  "pattern": "^[a-z]{2,3}(?:-[A-Za-z0-9]{2,8})*$"
                },
                "additionalProperties": {
                  "type": "string",
                  "maxLength": 5000
                }
              },
              "active": {
                "type": "boolean"
              },
              "position": {
                "type": "integer",
                "minimum": 0
              }
            },
            "required": [
              "name"
            ]
          }
        },
        "required": [
          "fields"
        ]
      },
      "InventoryUpdateTypeInput": {
        "type": "object",
        "additionalProperties": false,
        "properties": {
          "fields": {
            "type": "object",
            "additionalProperties": false,
            "properties": {
              "name": {
                "type": "object",
                "minProperties": 1,
                "maxProperties": 8,
                "propertyNames": {
                  "pattern": "^[a-z]{2,3}(?:-[A-Za-z0-9]{2,8})*$"
                },
                "additionalProperties": {
                  "type": "string",
                  "maxLength": 5000
                }
              },
              "active": {
                "type": "boolean"
              },
              "position": {
                "type": "integer",
                "minimum": 0
              }
            },
            "required": [
              "name"
            ]
          }
        },
        "required": [
          "fields"
        ]
      },
      "InventoryCreateCategoryInput": {
        "type": "object",
        "additionalProperties": false,
        "properties": {
          "fields": {
            "type": "object",
            "additionalProperties": false,
            "properties": {
              "name": {
                "$ref": "#/components/schemas/InventoryLocalizedText"
              },
              "active": {
                "type": "boolean"
              }
            },
            "required": [
              "name"
            ]
          }
        },
        "required": [
          "fields"
        ]
      },
      "InventoryUpdateCategoryInput": {
        "type": "object",
        "additionalProperties": false,
        "properties": {
          "fields": {
            "type": "object",
            "additionalProperties": false,
            "properties": {
              "name": {
                "$ref": "#/components/schemas/InventoryLocalizedText"
              },
              "active": {
                "type": "boolean"
              }
            },
            "required": [
              "name"
            ]
          }
        },
        "required": [
          "fields"
        ]
      },
      "InventoryPrepareMigrationInput": {
        "type": "object",
        "additionalProperties": false,
        "properties": {
          "exportFile": {
            "anyOf": [
              {
                "$ref": "#/components/schemas/InventoryInventoryClientFile"
              },
              {
                "type": "null"
              }
            ]
          },
          "importKey": {
            "type": "string",
            "minLength": 16,
            "maxLength": 128
          }
        },
        "required": [
          "importKey"
        ]
      },
      "InventoryValidateBatchInput": {
        "type": "object",
        "additionalProperties": false,
        "properties": {
          "delimiter": {
            "type": "string",
            "enum": [
              "comma",
              "semicolon"
            ]
          },
          "mapping": {
            "type": "array",
            "maxItems": 500,
            "items": {
              "type": "object",
              "additionalProperties": false,
              "properties": {
                "sourceColumn": {
                  "type": "string",
                  "minLength": 1,
                  "maxLength": 200
                },
                "targetField": {
                  "type": "string",
                  "enum": [
                    "row_type",
                    "work_ref",
                    "copy_ref",
                    "action",
                    "record_kind",
                    "title",
                    "description",
                    "provenance",
                    "artist_ref",
                    "origin_ref",
                    "type_id",
                    "year",
                    "medium",
                    "file_path",
                    "media_ref",
                    "position",
                    "primary",
                    "visibility",
                    "alt",
                    "caption",
                    "credit",
                    "owner_ref",
                    "location_ref",
                    "edition_number",
                    "commercial_state",
                    "custody_state",
                    "acquisition_kind",
                    "acquisition_date",
                    "acquisition_amount_minor",
                    "tax_purchase_price_minor",
                    "currency",
                    "scale",
                    "cost_ref",
                    "category",
                    "date",
                    "total_minor",
                    "allocated_minor",
                    "supplier_ref",
                    "party_ref",
                    "name",
                    "roles",
                    "kind",
                    "culture",
                    "country",
                    "region",
                    "period",
                    "biography",
                    "clear_fields",
                    "category_ref",
                    "category_refs",
                    "active",
                    "ignore",
                    "association",
                    "materials",
                    "technique",
                    "condition",
                    "bibliography",
                    "exhibitions",
                    "inscriptions",
                    "email",
                    "phone",
                    "address",
                    "dates",
                    "nationalities"
                  ]
                },
                "locale": {
                  "type": "string",
                  "pattern": "^[a-z]{2,3}(?:-[A-Za-z0-9]{2,8})*$"
                }
              },
              "required": [
                "sourceColumn",
                "targetField"
              ]
            }
          }
        },
        "required": []
      },
      "InventoryHttpReplaceAssignment": {
        "type": "object",
        "additionalProperties": false,
        "properties": {
          "issuer": {
            "type": "string",
            "format": "uri"
          },
          "subject": {
            "type": "string",
            "minLength": 1,
            "maxLength": 500
          },
          "role": {
            "type": "string",
            "enum": [
              "administrator",
              "contributor"
            ]
          }
        },
        "required": [
          "issuer",
          "subject",
          "role"
        ],
        "x-inventory-effect": "commit_inventory_change",
        "x-inventory-financial": false,
        "x-inventory-role": "administrator",
        "x-inventory-scopes": [
          "site.inventory.write",
          "site.inventory.manage"
        ],
        "x-inventory-public-access-changed": false
      },
      "InventoryPrivateNotes": {
        "type": "object",
        "additionalProperties": false,
        "properties": {
          "artworkId": {
            "$ref": "#/components/schemas/InventoryUUID"
          },
          "revision": {
            "$ref": "#/components/schemas/InventoryRevision"
          },
          "notes": {
            "type": [
              "string",
              "null"
            ],
            "maxLength": 20000
          }
        },
        "required": [
          "artworkId",
          "revision",
          "notes"
        ]
      },
      "InventoryDependency": {
        "type": "object",
        "additionalProperties": false,
        "properties": {
          "resource": {
            "type": "object",
            "additionalProperties": false,
            "properties": {
              "kind": {
                "enum": [
                  "inventory_source_binding",
                  "inventory_assignment"
                ]
              },
              "id": {
                "type": "string",
                "minLength": 1,
                "maxLength": 160
              }
            },
            "required": [
              "kind",
              "id"
            ]
          },
          "revision": {
            "$ref": "#/components/schemas/InventoryRevision"
          },
          "fingerprint": {
            "type": "string",
            "pattern": "^[a-f0-9]{64}$"
          }
        },
        "required": [
          "resource",
          "revision"
        ]
      },
      "InventoryArtworkReadResult": {
        "type": "object",
        "additionalProperties": false,
        "properties": {
          "resource": {
            "type": "object",
            "additionalProperties": false,
            "properties": {
              "kind": {
                "const": "artwork"
              },
              "id": {
                "$ref": "#/components/schemas/InventoryUUID"
              }
            },
            "required": [
              "kind",
              "id"
            ]
          },
          "revision": {
            "$ref": "#/components/schemas/InventoryRevision"
          },
          "projection": {
            "const": "editorial"
          },
          "data": {
            "$ref": "#/components/schemas/InventoryArtwork"
          }
        },
        "required": [
          "resource",
          "revision",
          "projection",
          "data"
        ]
      },
      "InventoryArtworkPage": {
        "type": "object",
        "additionalProperties": false,
        "properties": {
          "items": {
            "type": "array",
            "items": {
              "$ref": "#/components/schemas/InventoryArtworkReadResult"
            }
          },
          "nextCursor": {
            "type": [
              "string",
              "null"
            ]
          }
        },
        "required": [
          "items",
          "nextCursor"
        ]
      },
      "InventoryPrivateNotesReadResult": {
        "type": "object",
        "additionalProperties": false,
        "properties": {
          "resource": {
            "type": "object",
            "additionalProperties": false,
            "properties": {
              "kind": {
                "const": "artwork"
              },
              "id": {
                "$ref": "#/components/schemas/InventoryUUID"
              }
            },
            "required": [
              "kind",
              "id"
            ]
          },
          "revision": {
            "$ref": "#/components/schemas/InventoryRevision"
          },
          "projection": {
            "const": "private_notes"
          },
          "data": {
            "$ref": "#/components/schemas/InventoryPrivateNotes"
          }
        },
        "required": [
          "resource",
          "revision",
          "projection",
          "data"
        ]
      },
      "InventoryPrivateNotesPage": {
        "type": "object",
        "additionalProperties": false,
        "properties": {
          "items": {
            "type": "array",
            "items": {
              "$ref": "#/components/schemas/InventoryPrivateNotesReadResult"
            }
          },
          "nextCursor": {
            "type": [
              "string",
              "null"
            ]
          }
        },
        "required": [
          "items",
          "nextCursor"
        ]
      },
      "InventoryUnitLogisticsReadResult": {
        "type": "object",
        "additionalProperties": false,
        "properties": {
          "resource": {
            "type": "object",
            "additionalProperties": false,
            "properties": {
              "kind": {
                "const": "unit"
              },
              "id": {
                "$ref": "#/components/schemas/InventoryUUID"
              }
            },
            "required": [
              "kind",
              "id"
            ]
          },
          "revision": {
            "$ref": "#/components/schemas/InventoryRevision"
          },
          "projection": {
            "const": "logistics"
          },
          "data": {
            "$ref": "#/components/schemas/InventoryUnitLogistics"
          }
        },
        "required": [
          "resource",
          "revision",
          "projection",
          "data"
        ]
      },
      "InventoryUnitLogisticsPage": {
        "type": "object",
        "additionalProperties": false,
        "properties": {
          "items": {
            "type": "array",
            "items": {
              "$ref": "#/components/schemas/InventoryUnitLogisticsReadResult"
            }
          },
          "nextCursor": {
            "type": [
              "string",
              "null"
            ]
          }
        },
        "required": [
          "items",
          "nextCursor"
        ]
      },
      "InventoryUnitFinanceReadResult": {
        "type": "object",
        "additionalProperties": false,
        "properties": {
          "resource": {
            "type": "object",
            "additionalProperties": false,
            "properties": {
              "kind": {
                "const": "unit"
              },
              "id": {
                "$ref": "#/components/schemas/InventoryUUID"
              }
            },
            "required": [
              "kind",
              "id"
            ]
          },
          "revision": {
            "$ref": "#/components/schemas/InventoryRevision"
          },
          "projection": {
            "const": "finance"
          },
          "data": {
            "$ref": "#/components/schemas/InventoryUnitFinance"
          }
        },
        "required": [
          "resource",
          "revision",
          "projection",
          "data"
        ]
      },
      "InventoryUnitFinancePage": {
        "type": "object",
        "additionalProperties": false,
        "properties": {
          "items": {
            "type": "array",
            "items": {
              "$ref": "#/components/schemas/InventoryUnitFinanceReadResult"
            }
          },
          "nextCursor": {
            "type": [
              "string",
              "null"
            ]
          }
        },
        "required": [
          "items",
          "nextCursor"
        ]
      },
      "InventoryArtistReadResult": {
        "type": "object",
        "additionalProperties": false,
        "properties": {
          "resource": {
            "type": "object",
            "additionalProperties": false,
            "properties": {
              "kind": {
                "const": "artist"
              },
              "id": {
                "$ref": "#/components/schemas/InventoryUUID"
              }
            },
            "required": [
              "kind",
              "id"
            ]
          },
          "revision": {
            "$ref": "#/components/schemas/InventoryRevision"
          },
          "projection": {
            "const": "editorial"
          },
          "data": {
            "$ref": "#/components/schemas/InventoryArtist"
          }
        },
        "required": [
          "resource",
          "revision",
          "projection",
          "data"
        ]
      },
      "InventoryArtistPage": {
        "type": "object",
        "additionalProperties": false,
        "properties": {
          "items": {
            "type": "array",
            "items": {
              "$ref": "#/components/schemas/InventoryArtistReadResult"
            }
          },
          "nextCursor": {
            "type": [
              "string",
              "null"
            ]
          }
        },
        "required": [
          "items",
          "nextCursor"
        ]
      },
      "InventoryOriginReadResult": {
        "type": "object",
        "additionalProperties": false,
        "properties": {
          "resource": {
            "type": "object",
            "additionalProperties": false,
            "properties": {
              "kind": {
                "const": "origin"
              },
              "id": {
                "$ref": "#/components/schemas/InventoryUUID"
              }
            },
            "required": [
              "kind",
              "id"
            ]
          },
          "revision": {
            "$ref": "#/components/schemas/InventoryRevision"
          },
          "projection": {
            "const": "editorial"
          },
          "data": {
            "$ref": "#/components/schemas/InventoryOrigin"
          }
        },
        "required": [
          "resource",
          "revision",
          "projection",
          "data"
        ]
      },
      "InventoryOriginPage": {
        "type": "object",
        "additionalProperties": false,
        "properties": {
          "items": {
            "type": "array",
            "items": {
              "$ref": "#/components/schemas/InventoryOriginReadResult"
            }
          },
          "nextCursor": {
            "type": [
              "string",
              "null"
            ]
          }
        },
        "required": [
          "items",
          "nextCursor"
        ]
      },
      "InventoryCategoryReadResult": {
        "type": "object",
        "additionalProperties": false,
        "properties": {
          "resource": {
            "type": "object",
            "additionalProperties": false,
            "properties": {
              "kind": {
                "const": "category"
              },
              "id": {
                "$ref": "#/components/schemas/InventoryUUID"
              }
            },
            "required": [
              "kind",
              "id"
            ]
          },
          "revision": {
            "$ref": "#/components/schemas/InventoryRevision"
          },
          "projection": {
            "const": "editorial"
          },
          "data": {
            "$ref": "#/components/schemas/InventoryCategory"
          }
        },
        "required": [
          "resource",
          "revision",
          "projection",
          "data"
        ]
      },
      "InventoryCategoryPage": {
        "type": "object",
        "additionalProperties": false,
        "properties": {
          "items": {
            "type": "array",
            "items": {
              "$ref": "#/components/schemas/InventoryCategoryReadResult"
            }
          },
          "nextCursor": {
            "type": [
              "string",
              "null"
            ]
          }
        },
        "required": [
          "items",
          "nextCursor"
        ]
      },
      "InventoryTypeReadResult": {
        "type": "object",
        "additionalProperties": false,
        "properties": {
          "resource": {
            "type": "object",
            "additionalProperties": false,
            "properties": {
              "kind": {
                "const": "type"
              },
              "id": {
                "type": "integer",
                "minimum": 1,
                "maximum": 9007199254740991
              }
            },
            "required": [
              "kind",
              "id"
            ]
          },
          "revision": {
            "$ref": "#/components/schemas/InventoryRevision"
          },
          "projection": {
            "const": "editorial"
          },
          "data": {
            "$ref": "#/components/schemas/InventoryType"
          }
        },
        "required": [
          "resource",
          "revision",
          "projection",
          "data"
        ]
      },
      "InventoryTypePage": {
        "type": "object",
        "additionalProperties": false,
        "properties": {
          "items": {
            "type": "array",
            "items": {
              "$ref": "#/components/schemas/InventoryTypeReadResult"
            }
          },
          "nextCursor": {
            "type": [
              "string",
              "null"
            ]
          }
        },
        "required": [
          "items",
          "nextCursor"
        ]
      },
      "InventoryPartyReadResult": {
        "type": "object",
        "additionalProperties": false,
        "properties": {
          "resource": {
            "type": "object",
            "additionalProperties": false,
            "properties": {
              "kind": {
                "const": "party"
              },
              "id": {
                "$ref": "#/components/schemas/InventoryUUID"
              }
            },
            "required": [
              "kind",
              "id"
            ]
          },
          "revision": {
            "$ref": "#/components/schemas/InventoryRevision"
          },
          "projection": {
            "const": "logistics"
          },
          "data": {
            "$ref": "#/components/schemas/InventoryParty"
          }
        },
        "required": [
          "resource",
          "revision",
          "projection",
          "data"
        ]
      },
      "InventoryPartyPage": {
        "type": "object",
        "additionalProperties": false,
        "properties": {
          "items": {
            "type": "array",
            "items": {
              "$ref": "#/components/schemas/InventoryPartyReadResult"
            }
          },
          "nextCursor": {
            "type": [
              "string",
              "null"
            ]
          }
        },
        "required": [
          "items",
          "nextCursor"
        ]
      },
      "InventoryLocationReadResult": {
        "type": "object",
        "additionalProperties": false,
        "properties": {
          "resource": {
            "type": "object",
            "additionalProperties": false,
            "properties": {
              "kind": {
                "const": "location"
              },
              "id": {
                "$ref": "#/components/schemas/InventoryUUID"
              }
            },
            "required": [
              "kind",
              "id"
            ]
          },
          "revision": {
            "$ref": "#/components/schemas/InventoryRevision"
          },
          "projection": {
            "const": "logistics"
          },
          "data": {
            "$ref": "#/components/schemas/InventoryLocation"
          }
        },
        "required": [
          "resource",
          "revision",
          "projection",
          "data"
        ]
      },
      "InventoryLocationPage": {
        "type": "object",
        "additionalProperties": false,
        "properties": {
          "items": {
            "type": "array",
            "items": {
              "$ref": "#/components/schemas/InventoryLocationReadResult"
            }
          },
          "nextCursor": {
            "type": [
              "string",
              "null"
            ]
          }
        },
        "required": [
          "items",
          "nextCursor"
        ]
      },
      "InventoryMediaReadResult": {
        "type": "object",
        "additionalProperties": false,
        "properties": {
          "resource": {
            "type": "object",
            "additionalProperties": false,
            "properties": {
              "kind": {
                "const": "media"
              },
              "id": {
                "$ref": "#/components/schemas/InventoryUUID"
              }
            },
            "required": [
              "kind",
              "id"
            ]
          },
          "revision": {
            "$ref": "#/components/schemas/InventoryRevision"
          },
          "projection": {
            "enum": [
              "editorial",
              "logistics",
              "finance"
            ]
          },
          "data": {
            "oneOf": [
              {
                "$ref": "#/components/schemas/InventoryMedia"
              },
              {
                "$ref": "#/components/schemas/InventoryNonFinancialAttachment"
              },
              {
                "$ref": "#/components/schemas/InventoryFinancialAttachment"
              }
            ]
          }
        },
        "required": [
          "resource",
          "revision",
          "projection",
          "data"
        ],
        "allOf": [
          {
            "if": {
              "properties": {
                "projection": {
                  "const": "editorial"
                }
              }
            },
            "then": {
              "properties": {
                "data": {
                  "$ref": "#/components/schemas/InventoryMedia"
                }
              }
            }
          },
          {
            "if": {
              "properties": {
                "projection": {
                  "const": "logistics"
                }
              }
            },
            "then": {
              "properties": {
                "data": {
                  "$ref": "#/components/schemas/InventoryNonFinancialAttachment"
                }
              }
            }
          },
          {
            "if": {
              "properties": {
                "projection": {
                  "const": "finance"
                }
              }
            },
            "then": {
              "properties": {
                "data": {
                  "$ref": "#/components/schemas/InventoryFinancialAttachment"
                }
              }
            }
          }
        ]
      },
      "InventoryMediaPage": {
        "type": "object",
        "additionalProperties": false,
        "properties": {
          "items": {
            "type": "array",
            "items": {
              "$ref": "#/components/schemas/InventoryMediaReadResult"
            }
          },
          "nextCursor": {
            "type": [
              "string",
              "null"
            ]
          }
        },
        "required": [
          "items",
          "nextCursor"
        ]
      },
      "InventoryLogisticsOperationReadResult": {
        "type": "object",
        "additionalProperties": false,
        "properties": {
          "resource": {
            "type": "object",
            "additionalProperties": false,
            "properties": {
              "kind": {
                "const": "logistics_operation"
              },
              "id": {
                "$ref": "#/components/schemas/InventoryUUID"
              }
            },
            "required": [
              "kind",
              "id"
            ]
          },
          "revision": {
            "$ref": "#/components/schemas/InventoryRevision"
          },
          "projection": {
            "const": "logistics"
          },
          "data": {
            "$ref": "#/components/schemas/InventoryLogisticsOperation"
          }
        },
        "required": [
          "resource",
          "revision",
          "projection",
          "data"
        ]
      },
      "InventoryLogisticsOperationPage": {
        "type": "object",
        "additionalProperties": false,
        "properties": {
          "items": {
            "type": "array",
            "items": {
              "$ref": "#/components/schemas/InventoryLogisticsOperationReadResult"
            }
          },
          "nextCursor": {
            "type": [
              "string",
              "null"
            ]
          }
        },
        "required": [
          "items",
          "nextCursor"
        ]
      },
      "InventorySaleReadResult": {
        "type": "object",
        "additionalProperties": false,
        "properties": {
          "resource": {
            "type": "object",
            "additionalProperties": false,
            "properties": {
              "kind": {
                "const": "sale"
              },
              "id": {
                "$ref": "#/components/schemas/InventoryUUID"
              }
            },
            "required": [
              "kind",
              "id"
            ]
          },
          "revision": {
            "$ref": "#/components/schemas/InventoryRevision"
          },
          "projection": {
            "const": "finance"
          },
          "data": {
            "$ref": "#/components/schemas/InventorySale"
          }
        },
        "required": [
          "resource",
          "revision",
          "projection",
          "data"
        ]
      },
      "InventorySalePage": {
        "type": "object",
        "additionalProperties": false,
        "properties": {
          "items": {
            "type": "array",
            "items": {
              "$ref": "#/components/schemas/InventorySaleReadResult"
            }
          },
          "nextCursor": {
            "type": [
              "string",
              "null"
            ]
          }
        },
        "required": [
          "items",
          "nextCursor"
        ]
      },
      "InventoryDocumentReadResult": {
        "type": "object",
        "additionalProperties": false,
        "properties": {
          "resource": {
            "type": "object",
            "additionalProperties": false,
            "properties": {
              "kind": {
                "const": "document"
              },
              "id": {
                "$ref": "#/components/schemas/InventoryUUID"
              }
            },
            "required": [
              "kind",
              "id"
            ]
          },
          "revision": {
            "$ref": "#/components/schemas/InventoryRevision"
          },
          "projection": {
            "const": "finance"
          },
          "data": {
            "$ref": "#/components/schemas/InventoryDocument"
          }
        },
        "required": [
          "resource",
          "revision",
          "projection",
          "data"
        ]
      },
      "InventoryDocumentPage": {
        "type": "object",
        "additionalProperties": false,
        "properties": {
          "items": {
            "type": "array",
            "items": {
              "$ref": "#/components/schemas/InventoryDocumentReadResult"
            }
          },
          "nextCursor": {
            "type": [
              "string",
              "null"
            ]
          }
        },
        "required": [
          "items",
          "nextCursor"
        ]
      },
      "InventoryExpenseReadResult": {
        "type": "object",
        "additionalProperties": false,
        "properties": {
          "resource": {
            "type": "object",
            "additionalProperties": false,
            "properties": {
              "kind": {
                "const": "expense"
              },
              "id": {
                "$ref": "#/components/schemas/InventoryUUID"
              }
            },
            "required": [
              "kind",
              "id"
            ]
          },
          "revision": {
            "$ref": "#/components/schemas/InventoryRevision"
          },
          "projection": {
            "const": "finance"
          },
          "data": {
            "$ref": "#/components/schemas/InventoryExpense"
          }
        },
        "required": [
          "resource",
          "revision",
          "projection",
          "data"
        ]
      },
      "InventoryExpensePage": {
        "type": "object",
        "additionalProperties": false,
        "properties": {
          "items": {
            "type": "array",
            "items": {
              "$ref": "#/components/schemas/InventoryExpenseReadResult"
            }
          },
          "nextCursor": {
            "type": [
              "string",
              "null"
            ]
          }
        },
        "required": [
          "items",
          "nextCursor"
        ]
      },
      "InventoryDepositReadResult": {
        "type": "object",
        "additionalProperties": false,
        "properties": {
          "resource": {
            "type": "object",
            "additionalProperties": false,
            "properties": {
              "kind": {
                "const": "deposit"
              },
              "id": {
                "$ref": "#/components/schemas/InventoryUUID"
              }
            },
            "required": [
              "kind",
              "id"
            ]
          },
          "revision": {
            "$ref": "#/components/schemas/InventoryRevision"
          },
          "projection": {
            "const": "finance"
          },
          "data": {
            "$ref": "#/components/schemas/InventoryDeposit"
          }
        },
        "required": [
          "resource",
          "revision",
          "projection",
          "data"
        ]
      },
      "InventoryDepositPage": {
        "type": "object",
        "additionalProperties": false,
        "properties": {
          "items": {
            "type": "array",
            "items": {
              "$ref": "#/components/schemas/InventoryDepositReadResult"
            }
          },
          "nextCursor": {
            "type": [
              "string",
              "null"
            ]
          }
        },
        "required": [
          "items",
          "nextCursor"
        ]
      },
      "InventoryLedgerEntryReadResult": {
        "type": "object",
        "additionalProperties": false,
        "properties": {
          "resource": {
            "type": "object",
            "additionalProperties": false,
            "properties": {
              "kind": {
                "const": "ledger_entry"
              },
              "id": {
                "$ref": "#/components/schemas/InventoryUUID"
              }
            },
            "required": [
              "kind",
              "id"
            ]
          },
          "revision": {
            "$ref": "#/components/schemas/InventoryRevision"
          },
          "projection": {
            "const": "finance"
          },
          "data": {
            "$ref": "#/components/schemas/InventoryLedgerEntry"
          }
        },
        "required": [
          "resource",
          "revision",
          "projection",
          "data"
        ]
      },
      "InventoryLedgerEntryPage": {
        "type": "object",
        "additionalProperties": false,
        "properties": {
          "items": {
            "type": "array",
            "items": {
              "$ref": "#/components/schemas/InventoryLedgerEntryReadResult"
            }
          },
          "nextCursor": {
            "type": [
              "string",
              "null"
            ]
          }
        },
        "required": [
          "items",
          "nextCursor"
        ]
      },
      "InventoryFiscalProfileReadResult": {
        "type": "object",
        "additionalProperties": false,
        "properties": {
          "resource": {
            "type": "object",
            "additionalProperties": false,
            "properties": {
              "kind": {
                "const": "fiscal_profile"
              },
              "id": {
                "const": "current"
              }
            },
            "required": [
              "kind",
              "id"
            ]
          },
          "revision": {
            "$ref": "#/components/schemas/InventoryRevision"
          },
          "projection": {
            "const": "finance"
          },
          "data": {
            "$ref": "#/components/schemas/InventoryFiscalProfile"
          }
        },
        "required": [
          "resource",
          "revision",
          "projection",
          "data"
        ]
      },
      "InventoryFiscalProfilePage": {
        "type": "object",
        "additionalProperties": false,
        "properties": {
          "items": {
            "type": "array",
            "items": {
              "$ref": "#/components/schemas/InventoryFiscalProfileReadResult"
            }
          },
          "nextCursor": {
            "type": [
              "string",
              "null"
            ]
          }
        },
        "required": [
          "items",
          "nextCursor"
        ]
      },
      "InventoryTaxTreatmentViewReadResult": {
        "type": "object",
        "additionalProperties": false,
        "properties": {
          "resource": {
            "type": "object",
            "additionalProperties": false,
            "properties": {
              "kind": {
                "const": "tax_treatment"
              },
              "id": {
                "$ref": "#/components/schemas/InventoryUUID"
              }
            },
            "required": [
              "kind",
              "id"
            ]
          },
          "revision": {
            "$ref": "#/components/schemas/InventoryRevision"
          },
          "projection": {
            "const": "finance"
          },
          "data": {
            "$ref": "#/components/schemas/InventoryTaxTreatmentView"
          }
        },
        "required": [
          "resource",
          "revision",
          "projection",
          "data"
        ]
      },
      "InventoryTaxTreatmentViewPage": {
        "type": "object",
        "additionalProperties": false,
        "properties": {
          "items": {
            "type": "array",
            "items": {
              "$ref": "#/components/schemas/InventoryTaxTreatmentViewReadResult"
            }
          },
          "nextCursor": {
            "type": [
              "string",
              "null"
            ]
          }
        },
        "required": [
          "items",
          "nextCursor"
        ]
      },
      "InventoryDocumentSeriesViewReadResult": {
        "type": "object",
        "additionalProperties": false,
        "properties": {
          "resource": {
            "type": "object",
            "additionalProperties": false,
            "properties": {
              "kind": {
                "const": "document_series"
              },
              "id": {
                "$ref": "#/components/schemas/InventoryUUID"
              }
            },
            "required": [
              "kind",
              "id"
            ]
          },
          "revision": {
            "$ref": "#/components/schemas/InventoryRevision"
          },
          "projection": {
            "const": "finance"
          },
          "data": {
            "$ref": "#/components/schemas/InventoryDocumentSeriesView"
          }
        },
        "required": [
          "resource",
          "revision",
          "projection",
          "data"
        ]
      },
      "InventoryDocumentSeriesViewPage": {
        "type": "object",
        "additionalProperties": false,
        "properties": {
          "items": {
            "type": "array",
            "items": {
              "$ref": "#/components/schemas/InventoryDocumentSeriesViewReadResult"
            }
          },
          "nextCursor": {
            "type": [
              "string",
              "null"
            ]
          }
        },
        "required": [
          "items",
          "nextCursor"
        ]
      },
      "InventoryBatchReadResult": {
        "type": "object",
        "additionalProperties": false,
        "properties": {
          "resource": {
            "type": "object",
            "additionalProperties": false,
            "properties": {
              "kind": {
                "const": "import_batch"
              },
              "id": {
                "$ref": "#/components/schemas/InventoryUUID"
              }
            },
            "required": [
              "kind",
              "id"
            ]
          },
          "revision": {
            "$ref": "#/components/schemas/InventoryRevision"
          },
          "projection": {
            "const": "management"
          },
          "data": {
            "$ref": "#/components/schemas/InventoryBatch"
          }
        },
        "required": [
          "resource",
          "revision",
          "projection",
          "data"
        ]
      },
      "InventoryBatchPage": {
        "type": "object",
        "additionalProperties": false,
        "properties": {
          "items": {
            "type": "array",
            "items": {
              "$ref": "#/components/schemas/InventoryBatchReadResult"
            }
          },
          "nextCursor": {
            "type": [
              "string",
              "null"
            ]
          }
        },
        "required": [
          "items",
          "nextCursor"
        ]
      },
      "InventoryAssignmentReadResult": {
        "type": "object",
        "additionalProperties": false,
        "properties": {
          "resource": {
            "type": "object",
            "additionalProperties": false,
            "properties": {
              "kind": {
                "const": "assignment"
              },
              "id": {
                "$ref": "#/components/schemas/InventoryUUID"
              }
            },
            "required": [
              "kind",
              "id"
            ]
          },
          "revision": {
            "$ref": "#/components/schemas/InventoryRevision"
          },
          "projection": {
            "const": "management"
          },
          "data": {
            "$ref": "#/components/schemas/InventoryAssignment"
          }
        },
        "required": [
          "resource",
          "revision",
          "projection",
          "data"
        ]
      },
      "InventoryAssignmentPage": {
        "type": "object",
        "additionalProperties": false,
        "properties": {
          "items": {
            "type": "array",
            "items": {
              "$ref": "#/components/schemas/InventoryAssignmentReadResult"
            }
          },
          "nextCursor": {
            "type": [
              "string",
              "null"
            ]
          }
        },
        "required": [
          "items",
          "nextCursor"
        ]
      },
      "InventoryTransmissionPage": {
        "type": "object",
        "additionalProperties": false,
        "properties": {
          "items": {
            "type": "array",
            "items": {
              "$ref": "#/components/schemas/InventoryTransmission"
            }
          },
          "nextCursor": {
            "type": [
              "string",
              "null"
            ]
          }
        },
        "required": [
          "items",
          "nextCursor"
        ]
      },
      "InventoryPublishedAttribution": {
        "type": "object",
        "additionalProperties": false,
        "properties": {
          "kind": {
            "enum": [
              "artist",
              "origin",
              "text"
            ]
          },
          "name": {
            "type": "object",
            "additionalProperties": {
              "type": "string",
              "maxLength": 5000
            },
            "maxProperties": 8
          },
          "referenceId": {
            "anyOf": [
              {
                "$ref": "#/components/schemas/InventoryUUID"
              },
              {
                "type": "null"
              }
            ]
          },
          "referenceRevision": {
            "anyOf": [
              {
                "$ref": "#/components/schemas/InventoryRevision"
              },
              {
                "type": "null"
              }
            ]
          }
        },
        "required": [
          "kind",
          "name",
          "referenceId",
          "referenceRevision"
        ]
      },
      "InventoryPreviewReadResult": {
        "type": "object",
        "additionalProperties": false,
        "properties": {
          "previewId": {
            "$ref": "#/components/schemas/InventoryUUID"
          },
          "artworkId": {
            "$ref": "#/components/schemas/InventoryUUID"
          },
          "draftRevision": {
            "$ref": "#/components/schemas/InventoryRevision"
          },
          "publicationRevision": {
            "anyOf": [
              {
                "$ref": "#/components/schemas/InventoryRevision"
              },
              {
                "type": "null"
              }
            ]
          },
          "draft": {
            "$ref": "#/components/schemas/InventoryWorkDraft"
          },
          "draftAttribution": {
            "$ref": "#/components/schemas/InventoryPublishedAttribution"
          },
          "published": {
            "anyOf": [
              {
                "type": "object",
                "additionalProperties": false,
                "properties": {
                  "document": {
                    "$ref": "#/components/schemas/InventoryWorkDraft"
                  },
                  "attribution": {
                    "$ref": "#/components/schemas/InventoryPublishedAttribution"
                  },
                  "revision": {
                    "$ref": "#/components/schemas/InventoryRevision"
                  },
                  "publishedAt": {
                    "type": "string",
                    "format": "date-time"
                  }
                },
                "required": [
                  "document",
                  "attribution",
                  "revision",
                  "publishedAt"
                ]
              },
              {
                "type": "null"
              }
            ]
          },
          "blockers": {
            "type": "array",
            "uniqueItems": true,
            "maxItems": 8,
            "items": {
              "enum": [
                "inventory_publication_invalid",
                "inventory_media_invalid",
                "inventory_reference_in_use"
              ]
            }
          },
          "expiresAt": {
            "type": "string",
            "format": "date-time"
          }
        },
        "required": [
          "previewId",
          "artworkId",
          "draftRevision",
          "publicationRevision",
          "draft",
          "draftAttribution",
          "published",
          "blockers",
          "expiresAt"
        ]
      },
      "InventoryAcquisition": {
        "type": "object",
        "additionalProperties": false,
        "properties": {
          "acquisitionId": {
            "$ref": "#/components/schemas/InventoryUUID"
          },
          "operationId": {
            "$ref": "#/components/schemas/InventoryUUID"
          },
          "unitId": {
            "$ref": "#/components/schemas/InventoryUUID"
          },
          "kind": {
            "enum": [
              "purchase",
              "creation"
            ]
          },
          "amount": {
            "anyOf": [
              {
                "$ref": "#/components/schemas/InventoryMoney"
              },
              {
                "type": "null"
              }
            ]
          },
          "date": {
            "type": [
              "string",
              "null"
            ],
            "format": "date"
          },
          "partyId": {
            "anyOf": [
              {
                "$ref": "#/components/schemas/InventoryUUID"
              },
              {
                "type": "null"
              }
            ]
          },
          "ownerId": {
            "anyOf": [
              {
                "$ref": "#/components/schemas/InventoryUUID"
              },
              {
                "type": "null"
              }
            ]
          },
          "taxPurchasePrice": {
            "anyOf": [
              {
                "$ref": "#/components/schemas/InventoryMoney"
              },
              {
                "type": "null"
              }
            ]
          },
          "qualificationEvidenceIds": {
            "type": "array",
            "items": {
              "$ref": "#/components/schemas/InventoryUUID"
            }
          },
          "revision": {
            "$ref": "#/components/schemas/InventoryRevision"
          },
          "status": {
            "enum": [
              "draft",
              "active",
              "completed",
              "cancelled"
            ]
          }
        },
        "required": [
          "acquisitionId",
          "operationId",
          "unitId",
          "kind",
          "amount",
          "date",
          "partyId",
          "ownerId",
          "taxPurchasePrice",
          "qualificationEvidenceIds",
          "revision",
          "status"
        ]
      },
      "InventoryFiscalQualification": {
        "type": "object",
        "additionalProperties": false,
        "properties": {
          "evidenceIds": {
            "type": "array",
            "items": {
              "$ref": "#/components/schemas/InventoryUUID"
            }
          },
          "scope": {
            "type": "string"
          },
          "note": {
            "type": "string"
          },
          "issuer": {
            "type": "string"
          },
          "subject": {
            "type": "string"
          },
          "qualifiedAt": {
            "type": "string",
            "format": "date-time"
          },
          "qualifiedRevision": {
            "$ref": "#/components/schemas/InventoryRevision"
          }
        },
        "required": [
          "evidenceIds",
          "scope",
          "issuer",
          "subject",
          "qualifiedAt",
          "qualifiedRevision"
        ]
      },
      "InventoryDocumentLineView": {
        "type": "object",
        "additionalProperties": false,
        "properties": {
          "lineId": {
            "$ref": "#/components/schemas/InventoryUUID"
          },
          "unitId": {
            "anyOf": [
              {
                "$ref": "#/components/schemas/InventoryUUID"
              },
              {
                "type": "null"
              }
            ]
          },
          "description": {
            "$ref": "#/components/schemas/InventoryLocalizedText"
          },
          "quantity": {
            "type": "integer",
            "minimum": 1
          },
          "unitPrice": {
            "$ref": "#/components/schemas/InventoryMoney"
          },
          "priceMode": {
            "enum": [
              "net",
              "gross"
            ]
          },
          "discount": {
            "anyOf": [
              {
                "$ref": "#/components/schemas/InventoryMoney"
              },
              {
                "type": "null"
              }
            ]
          },
          "taxTreatmentId": {
            "$ref": "#/components/schemas/InventoryUUID"
          },
          "taxTreatmentRevision": {
            "$ref": "#/components/schemas/InventoryRevision"
          },
          "net": {
            "$ref": "#/components/schemas/InventoryMoney"
          },
          "tax": {
            "$ref": "#/components/schemas/InventoryMoney"
          },
          "gross": {
            "$ref": "#/components/schemas/InventoryMoney"
          },
          "originalDocumentId": {
            "anyOf": [
              {
                "$ref": "#/components/schemas/InventoryUUID"
              },
              {
                "type": "null"
              }
            ]
          },
          "originalLineId": {
            "anyOf": [
              {
                "$ref": "#/components/schemas/InventoryUUID"
              },
              {
                "type": "null"
              }
            ]
          }
        },
        "required": [
          "lineId",
          "description",
          "quantity",
          "unitPrice",
          "priceMode",
          "taxTreatmentId",
          "taxTreatmentRevision",
          "net",
          "tax",
          "gross"
        ]
      },
      "InventoryOwnerBalance": {
        "type": "object",
        "additionalProperties": false,
        "properties": {
          "currency": {
            "type": "string",
            "pattern": "^[A-Z]{3}$"
          },
          "scale": {
            "type": "integer",
            "minimum": 0,
            "maximum": 8
          },
          "complete": {
            "type": "boolean"
          },
          "obligation": {
            "anyOf": [
              {
                "$ref": "#/components/schemas/InventoryMoney"
              },
              {
                "type": "null"
              }
            ]
          },
          "paidMinor": {
            "type": "string",
            "pattern": "^-?(0|[1-9][0-9]*)$"
          },
          "balanceMinor": {
            "anyOf": [
              {
                "type": "string",
                "pattern": "^-?(0|[1-9][0-9]*)$"
              },
              {
                "type": "null"
              }
            ]
          }
        },
        "required": [
          "currency",
          "scale",
          "complete",
          "obligation",
          "paidMinor",
          "balanceMinor"
        ]
      },
      "InventoryStockDocumentLine": {
        "type": "object",
        "additionalProperties": false,
        "properties": {
          "unitId": {
            "$ref": "#/components/schemas/InventoryUUID"
          },
          "description": {
            "type": "object",
            "minProperties": 1,
            "maxProperties": 8,
            "propertyNames": {
              "pattern": "^[a-z]{2,3}(?:-[A-Za-z0-9]{2,8})*$"
            },
            "additionalProperties": {
              "type": "string",
              "maxLength": 5000
            }
          },
          "quantity": {
            "type": "integer",
            "const": 1
          },
          "unitPrice": {
            "$ref": "#/components/schemas/InventoryMoney"
          },
          "priceMode": {
            "type": "string",
            "enum": [
              "net",
              "gross"
            ]
          },
          "discount": {
            "anyOf": [
              {
                "$ref": "#/components/schemas/InventoryMoney"
              },
              {
                "type": "null"
              }
            ]
          },
          "taxTreatmentId": {
            "type": "string",
            "format": "uuid"
          }
        },
        "required": [
          "description",
          "quantity",
          "unitPrice",
          "priceMode",
          "taxTreatmentId",
          "unitId"
        ]
      },
      "InventoryChargeDocumentLine": {
        "type": "object",
        "additionalProperties": false,
        "properties": {
          "unitId": {
            "type": "null"
          },
          "description": {
            "type": "object",
            "minProperties": 1,
            "maxProperties": 8,
            "propertyNames": {
              "pattern": "^[a-z]{2,3}(?:-[A-Za-z0-9]{2,8})*$"
            },
            "additionalProperties": {
              "type": "string",
              "maxLength": 5000
            }
          },
          "quantity": {
            "type": "integer",
            "minimum": 1,
            "maximum": 10000
          },
          "unitPrice": {
            "$ref": "#/components/schemas/InventoryMoney"
          },
          "priceMode": {
            "type": "string",
            "enum": [
              "net",
              "gross"
            ]
          },
          "discount": {
            "anyOf": [
              {
                "$ref": "#/components/schemas/InventoryMoney"
              },
              {
                "type": "null"
              }
            ]
          },
          "taxTreatmentId": {
            "type": "string",
            "format": "uuid"
          }
        },
        "required": [
          "description",
          "quantity",
          "unitPrice",
          "priceMode",
          "taxTreatmentId"
        ]
      },
      "InventoryAttachment": {
        "type": "object",
        "additionalProperties": false,
        "properties": {
          "mediaId": {
            "$ref": "#/components/schemas/InventoryUUID"
          },
          "classification": {
            "type": "string",
            "enum": [
              "financial_document",
              "non_financial_document"
            ]
          },
          "fileName": {
            "type": "string"
          },
          "mimeType": {
            "enum": [
              "application/pdf",
              "image/jpeg",
              "image/png",
              "image/webp"
            ]
          },
          "bytes": {
            "type": "integer",
            "minimum": 1
          },
          "status": {
            "enum": [
              "pending",
              "processing",
              "ready",
              "rejected",
              "revoked"
            ]
          },
          "createdAt": {
            "type": "string",
            "format": "date-time"
          },
          "revision": {
            "$ref": "#/components/schemas/InventoryRevision"
          },
          "originalAvailable": {
            "type": "boolean"
          },
          "errorCode": {
            "type": [
              "string",
              "null"
            ]
          }
        },
        "required": [
          "mediaId",
          "classification",
          "fileName",
          "mimeType",
          "bytes",
          "status",
          "createdAt",
          "revision",
          "originalAvailable"
        ]
      },
      "InventoryFinancialAttachment": {
        "type": "object",
        "additionalProperties": false,
        "properties": {
          "mediaId": {
            "$ref": "#/components/schemas/InventoryUUID"
          },
          "classification": {
            "type": "string",
            "const": "financial_document"
          },
          "fileName": {
            "type": "string"
          },
          "mimeType": {
            "enum": [
              "application/pdf",
              "image/jpeg",
              "image/png",
              "image/webp"
            ]
          },
          "bytes": {
            "type": "integer",
            "minimum": 1
          },
          "status": {
            "enum": [
              "pending",
              "processing",
              "ready",
              "rejected",
              "revoked"
            ]
          },
          "createdAt": {
            "type": "string",
            "format": "date-time"
          },
          "revision": {
            "$ref": "#/components/schemas/InventoryRevision"
          },
          "originalAvailable": {
            "type": "boolean"
          },
          "errorCode": {
            "type": [
              "string",
              "null"
            ]
          }
        },
        "required": [
          "mediaId",
          "classification",
          "fileName",
          "mimeType",
          "bytes",
          "status",
          "createdAt",
          "revision",
          "originalAvailable"
        ]
      },
      "InventoryNonFinancialAttachment": {
        "type": "object",
        "additionalProperties": false,
        "properties": {
          "mediaId": {
            "$ref": "#/components/schemas/InventoryUUID"
          },
          "classification": {
            "type": "string",
            "const": "non_financial_document"
          },
          "fileName": {
            "type": "string"
          },
          "mimeType": {
            "enum": [
              "application/pdf",
              "image/jpeg",
              "image/png",
              "image/webp"
            ]
          },
          "bytes": {
            "type": "integer",
            "minimum": 1
          },
          "status": {
            "enum": [
              "pending",
              "processing",
              "ready",
              "rejected",
              "revoked"
            ]
          },
          "createdAt": {
            "type": "string",
            "format": "date-time"
          },
          "revision": {
            "$ref": "#/components/schemas/InventoryRevision"
          },
          "originalAvailable": {
            "type": "boolean"
          },
          "errorCode": {
            "type": [
              "string",
              "null"
            ]
          }
        },
        "required": [
          "mediaId",
          "classification",
          "fileName",
          "mimeType",
          "bytes",
          "status",
          "createdAt",
          "revision",
          "originalAvailable"
        ]
      },
      "InventoryDocumentPartySnapshot": {
        "type": "object",
        "additionalProperties": false,
        "properties": {
          "name": {
            "type": "string"
          },
          "addressLines": {
            "type": "array",
            "items": {
              "type": "string"
            }
          },
          "country": {
            "type": "string"
          },
          "customerKind": {
            "type": "string"
          },
          "companyIdentifier": {
            "anyOf": [
              {
                "type": "string"
              },
              {
                "type": "null"
              }
            ]
          },
          "vatIdentifier": {
            "anyOf": [
              {
                "type": "string"
              },
              {
                "type": "null"
              }
            ]
          },
          "registration": {
            "anyOf": [
              {
                "type": "string"
              },
              {
                "type": "null"
              }
            ]
          },
          "legalForm": {
            "anyOf": [
              {
                "type": "string"
              },
              {
                "type": "null"
              }
            ]
          }
        },
        "required": [
          "name",
          "addressLines"
        ]
      },
      "InventoryClientDocumentLine": {
        "type": "object",
        "additionalProperties": false,
        "properties": {
          "lineId": {
            "$ref": "#/components/schemas/InventoryUUID"
          },
          "unitId": {
            "anyOf": [
              {
                "$ref": "#/components/schemas/InventoryUUID"
              },
              {
                "type": "null"
              }
            ]
          },
          "description": {
            "$ref": "#/components/schemas/InventoryLocalizedText"
          },
          "quantity": {
            "type": "integer",
            "minimum": 1
          },
          "unitPrice": {
            "$ref": "#/components/schemas/InventoryMoney"
          },
          "priceMode": {
            "enum": [
              "net",
              "gross"
            ]
          },
          "discount": {
            "anyOf": [
              {
                "$ref": "#/components/schemas/InventoryMoney"
              },
              {
                "type": "null"
              }
            ]
          },
          "gross": {
            "$ref": "#/components/schemas/InventoryMoney"
          },
          "net": {
            "$ref": "#/components/schemas/InventoryMoney"
          },
          "vatAmount": {
            "$ref": "#/components/schemas/InventoryMoney"
          },
          "vatRate": {
            "$ref": "#/components/schemas/InventoryRate"
          }
        },
        "required": [
          "lineId",
          "description",
          "quantity",
          "unitPrice",
          "priceMode",
          "gross"
        ]
      },
      "InventoryClientDocumentSnapshot": {
        "type": "object",
        "additionalProperties": false,
        "properties": {
          "kind": {
            "enum": [
              "quote",
              "invoice",
              "credit_note"
            ]
          },
          "number": {
            "type": "string"
          },
          "issuedOn": {
            "type": "string",
            "format": "date"
          },
          "locale": {
            "type": "string"
          },
          "simulation": {
            "type": "boolean"
          },
          "seller": {
            "$ref": "#/components/schemas/InventoryDocumentPartySnapshot"
          },
          "customer": {
            "$ref": "#/components/schemas/InventoryDocumentPartySnapshot"
          },
          "lines": {
            "type": "array",
            "items": {
              "$ref": "#/components/schemas/InventoryClientDocumentLine"
            }
          },
          "gross": {
            "$ref": "#/components/schemas/InventoryMoney"
          },
          "visibleVat": {
            "$ref": "#/components/schemas/InventoryMoney"
          },
          "legalMentions": {
            "type": "array",
            "items": {
              "type": "string"
            }
          },
          "paymentTerms": {
            "type": "string"
          },
          "dueDate": {
            "anyOf": [
              {
                "type": "string"
              },
              {
                "type": "null"
              }
            ]
          },
          "deliveryDate": {
            "anyOf": [
              {
                "type": "string"
              },
              {
                "type": "null"
              }
            ]
          },
          "originalNumber": {
            "anyOf": [
              {
                "type": "string"
              },
              {
                "type": "null"
              }
            ]
          },
          "creditReason": {
            "anyOf": [
              {
                "type": "string"
              },
              {
                "type": "null"
              }
            ]
          }
        },
        "required": [
          "kind",
          "number",
          "issuedOn",
          "locale",
          "simulation",
          "seller",
          "customer",
          "lines",
          "gross",
          "legalMentions",
          "paymentTerms"
        ]
      },
      "InventoryImportDraftInput": {
        "type": "object",
        "additionalProperties": false,
        "properties": {
          "importKey": {
            "type": "string",
            "minLength": 1,
            "maxLength": 128
          },
          "delimiter": {
            "type": "string",
            "enum": [
              "comma",
              "semicolon"
            ]
          },
          "mapping": {
            "type": "array",
            "maxItems": 500,
            "items": {
              "type": "object",
              "additionalProperties": false,
              "properties": {
                "sourceColumn": {
                  "type": "string",
                  "minLength": 1,
                  "maxLength": 200
                },
                "targetField": {
                  "type": "string",
                  "enum": [
                    "row_type",
                    "work_ref",
                    "copy_ref",
                    "action",
                    "record_kind",
                    "title",
                    "description",
                    "provenance",
                    "artist_ref",
                    "origin_ref",
                    "type_id",
                    "year",
                    "medium",
                    "file_path",
                    "media_ref",
                    "position",
                    "primary",
                    "visibility",
                    "alt",
                    "caption",
                    "credit",
                    "owner_ref",
                    "location_ref",
                    "edition_number",
                    "commercial_state",
                    "custody_state",
                    "acquisition_kind",
                    "acquisition_date",
                    "acquisition_amount_minor",
                    "tax_purchase_price_minor",
                    "currency",
                    "scale",
                    "cost_ref",
                    "category",
                    "date",
                    "total_minor",
                    "allocated_minor",
                    "supplier_ref",
                    "party_ref",
                    "name",
                    "roles",
                    "kind",
                    "culture",
                    "country",
                    "region",
                    "period",
                    "biography",
                    "clear_fields",
                    "category_ref",
                    "category_refs",
                    "active",
                    "ignore",
                    "association",
                    "materials",
                    "technique",
                    "condition",
                    "bibliography",
                    "exhibitions",
                    "inscriptions",
                    "email",
                    "phone",
                    "address",
                    "dates",
                    "nationalities"
                  ]
                },
                "locale": {
                  "type": "string",
                  "pattern": "^[a-z]{2,3}(?:-[A-Za-z0-9]{2,8})*$"
                }
              },
              "required": [
                "sourceColumn",
                "targetField"
              ]
            }
          },
          "mode": {
            "type": "string",
            "enum": [
              "create",
              "update",
              "mixed_explicit"
            ]
          }
        },
        "required": [
          "importKey",
          "delimiter",
          "mapping"
        ]
      },
      "InventoryImportTransferInput": {
        "type": "object",
        "additionalProperties": false,
        "properties": {
          "role": {
            "enum": [
              "catalog",
              "images"
            ]
          },
          "fileName": {
            "type": "string",
            "minLength": 1,
            "maxLength": 500
          },
          "mimeType": {
            "type": "string",
            "minLength": 1,
            "maxLength": 200
          },
          "bytes": {
            "type": "integer",
            "minimum": 1,
            "maximum": 1073741824
          },
          "sha256": {
            "type": "string",
            "pattern": "^[a-f0-9]{64}$"
          }
        },
        "required": [
          "role",
          "fileName",
          "mimeType",
          "bytes"
        ]
      },
      "InventoryImportTransfer": {
        "type": "object",
        "additionalProperties": false,
        "properties": {
          "batchId": {
            "$ref": "#/components/schemas/InventoryUUID"
          },
          "uploadId": {
            "$ref": "#/components/schemas/InventoryUUID"
          },
          "revision": {
            "$ref": "#/components/schemas/InventoryRevision"
          },
          "state": {
            "enum": [
              "pending",
              "receiving",
              "finalizing",
              "complete",
              "failed",
              "cancelled"
            ]
          },
          "receivedBytes": {
            "type": "integer",
            "minimum": 0
          },
          "declaredBytes": {
            "type": [
              "integer",
              "null"
            ]
          },
          "sealedBytes": {
            "type": [
              "integer",
              "null"
            ]
          },
          "expiresAt": {
            "type": "string",
            "format": "date-time"
          },
          "chunkBytes": {
            "type": "integer",
            "const": 1048576
          },
          "token": {
            "type": "string",
            "minLength": 32,
            "maxLength": 256
          }
        },
        "required": [
          "batchId",
          "uploadId",
          "revision",
          "state",
          "receivedBytes",
          "declaredBytes",
          "sealedBytes",
          "expiresAt",
          "chunkBytes"
        ]
      },
      "InventoryHttpCancelImport": {
        "type": "object",
        "additionalProperties": false,
        "properties": {},
        "required": []
      },
      "InventoryHttpResumeImport": {
        "type": "object",
        "additionalProperties": false,
        "properties": {
          "simulationDigest": {
            "type": "string",
            "pattern": "^[a-f0-9]{64}$"
          }
        },
        "required": [
          "simulationDigest"
        ]
      }
    },
    "securitySchemes": {
      "AdminSession": {
        "type": "apiKey",
        "in": "header",
        "name": "X-Admin-Session",
        "description": "Handle opaque extrait du cookie HttpOnly par le BFF. Validité et droits courants exigés pour les lectures admin et mutations du catalogue. Exception logout : handle connu du même site et CSRF lié suffisent avec la clé BFF ; voir la description de cette opération."
      },
      "BffKey": {
        "type": "apiKey",
        "in": "header",
        "name": "X-BFF-Key",
        "description": "Secret propre au déploiement, exclusivement backend et serveur web-admin. Jamais transmis par le navigateur."
      }
    }
  }
} as const;
export const inventoryCommandDocument={
  "$schema": "https://json-schema.org/draft/2020-12/schema",
  "$id": "urn:studio-volante:inventory:commands:v1",
  "title": "Commandes canoniques inventaire standalone",
  "description": "Contrat de conception 033, à intégrer aux transports après génération contrôlée. Le rôle et le site proviennent exclusivement du serveur. Les contraintes métier et de rôle restent vérifiées au service.",
  "x-schema-source": {
    "path": "../../027-chatgpt-site-connector/contracts/schemas.json",
    "sha256": "db8ed0df9cc911f08c26c744df08e976faf5c620a0de736ea5836f017974a85e",
    "roots": [
      "E_LocalizedRichText",
      "E_RichMark",
      "E_RichNode",
      "E_RichText"
    ]
  },
  "$ref": "#/$defs/InventoryCommand",
  "$defs": {
    "UUID": {
      "type": "string",
      "format": "uuid"
    },
    "Revision": {
      "type": "string",
      "pattern": "^[1-9][0-9]*$",
      "maxLength": 20
    },
    "Reference": {
      "type": "string",
      "minLength": 1,
      "maxLength": 128
    },
    "LocalizedText": {
      "type": "object",
      "minProperties": 1,
      "maxProperties": 8,
      "propertyNames": {
        "pattern": "^[a-z]{2,3}(?:-[A-Za-z0-9]{2,8})*$"
      },
      "additionalProperties": {
        "type": "string",
        "maxLength": 5000
      }
    },
    "E_LocalizedRichText": {
      "type": "object",
      "minProperties": 1,
      "maxProperties": 8,
      "patternProperties": {
        "^[a-z]{2,3}(?:-[A-Za-z0-9]{2,8})*$": {
          "$ref": "#/$defs/E_RichText"
        }
      },
      "additionalProperties": false
    },
    "E_RichText": {
      "type": "object",
      "additionalProperties": false,
      "properties": {
        "type": {
          "const": "doc"
        },
        "content": {
          "type": "array",
          "items": {
            "$ref": "#/$defs/E_RichNode"
          },
          "maxItems": 10000
        }
      },
      "required": [
        "type",
        "content"
      ]
    },
    "E_RichNode": {
      "oneOf": [
        {
          "type": "object",
          "additionalProperties": false,
          "properties": {
            "type": {
              "const": "text"
            },
            "text": {
              "type": "string",
              "minLength": 1,
              "maxLength": 131072
            },
            "marks": {
              "type": "array",
              "items": {
                "$ref": "#/$defs/E_RichMark"
              },
              "maxItems": 3
            }
          },
          "required": [
            "type",
            "text"
          ]
        },
        {
          "type": "object",
          "additionalProperties": false,
          "properties": {
            "type": {
              "const": "heading"
            },
            "attrs": {
              "type": "object",
              "additionalProperties": false,
              "properties": {
                "level": {
                  "enum": [
                    2,
                    3
                  ]
                }
              },
              "required": [
                "level"
              ]
            },
            "content": {
              "type": "array",
              "items": {
                "$ref": "#/$defs/E_RichNode"
              },
              "maxItems": 10000
            }
          },
          "required": [
            "type",
            "attrs"
          ]
        },
        {
          "type": "object",
          "additionalProperties": false,
          "properties": {
            "type": {
              "enum": [
                "paragraph",
                "bulletList",
                "orderedList",
                "listItem",
                "blockquote"
              ]
            },
            "content": {
              "type": "array",
              "items": {
                "$ref": "#/$defs/E_RichNode"
              },
              "maxItems": 10000
            }
          },
          "required": [
            "type"
          ]
        },
        {
          "type": "object",
          "additionalProperties": false,
          "properties": {
            "type": {
              "const": "hardBreak"
            }
          },
          "required": [
            "type"
          ]
        }
      ]
    },
    "E_RichMark": {
      "oneOf": [
        {
          "type": "object",
          "additionalProperties": false,
          "properties": {
            "type": {
              "enum": [
                "bold",
                "italic"
              ]
            }
          },
          "required": [
            "type"
          ]
        },
        {
          "type": "object",
          "additionalProperties": false,
          "properties": {
            "type": {
              "const": "link"
            },
            "attrs": {
              "type": "object",
              "additionalProperties": false,
              "properties": {
                "href": {
                  "type": "string",
                  "maxLength": 2048,
                  "pattern": "^(?:https://|/(?!/)|#|mailto:|tel:)"
                }
              },
              "required": [
                "href"
              ]
            }
          },
          "required": [
            "type",
            "attrs"
          ]
        }
      ]
    },
    "Money": {
      "type": "object",
      "additionalProperties": false,
      "properties": {
        "minor": {
          "type": "string",
          "pattern": "^(0|[1-9][0-9]{0,37})$"
        },
        "currency": {
          "type": "string",
          "pattern": "^[A-Z]{3}$"
        },
        "scale": {
          "type": "integer",
          "minimum": 0,
          "maximum": 8
        }
      },
      "required": [
        "minor",
        "currency",
        "scale"
      ]
    },
    "MediaSelection": {
      "type": "object",
      "additionalProperties": false,
      "properties": {
        "mediaId": {
          "type": "string",
          "format": "uuid"
        },
        "visibility": {
          "type": "string",
          "enum": [
            "internal",
            "public_candidate"
          ]
        },
        "position": {
          "type": "integer",
          "minimum": 0
        },
        "primary": {
          "type": "boolean"
        },
        "alt": {
          "type": "object",
          "minProperties": 1,
          "maxProperties": 8,
          "propertyNames": {
            "pattern": "^[a-z]{2,3}(?:-[A-Za-z0-9]{2,8})*$"
          },
          "additionalProperties": {
            "type": "string",
            "maxLength": 5000
          }
        },
        "caption": {
          "type": "object",
          "minProperties": 1,
          "maxProperties": 8,
          "propertyNames": {
            "pattern": "^[a-z]{2,3}(?:-[A-Za-z0-9]{2,8})*$"
          },
          "additionalProperties": {
            "type": "string",
            "maxLength": 5000
          }
        },
        "credit": {
          "type": "object",
          "minProperties": 1,
          "maxProperties": 8,
          "propertyNames": {
            "pattern": "^[a-z]{2,3}(?:-[A-Za-z0-9]{2,8})*$"
          },
          "additionalProperties": {
            "type": "string",
            "maxLength": 5000
          }
        },
        "focus": {
          "type": "object",
          "additionalProperties": false,
          "properties": {
            "x": {
              "type": "number",
              "minimum": 0,
              "maximum": 1
            },
            "y": {
              "type": "number",
              "minimum": 0,
              "maximum": 1
            }
          },
          "required": [
            "x",
            "y"
          ]
        }
      },
      "required": [
        "mediaId",
        "visibility",
        "position",
        "primary"
      ]
    },
    "WorkDraft": {
      "type": "object",
      "additionalProperties": false,
      "properties": {
        "title": {
          "type": "object",
          "minProperties": 1,
          "maxProperties": 8,
          "propertyNames": {
            "pattern": "^[a-z]{2,3}(?:-[A-Za-z0-9]{2,8})*$"
          },
          "additionalProperties": {
            "type": "string",
            "maxLength": 5000
          }
        },
        "recordKind": {
          "type": "string",
          "enum": [
            "artwork",
            "object"
          ]
        },
        "artistId": {
          "anyOf": [
            {
              "type": "string",
              "format": "uuid"
            },
            {
              "type": "null"
            }
          ]
        },
        "originId": {
          "anyOf": [
            {
              "type": "string",
              "format": "uuid"
            },
            {
              "type": "null"
            }
          ]
        },
        "attribution": {
          "type": "object",
          "minProperties": 1,
          "maxProperties": 8,
          "propertyNames": {
            "pattern": "^[a-z]{2,3}(?:-[A-Za-z0-9]{2,8})*$"
          },
          "additionalProperties": {
            "type": "string",
            "maxLength": 5000
          }
        },
        "year": {
          "anyOf": [
            {
              "type": "string",
              "maxLength": 200
            },
            {
              "type": "null"
            }
          ]
        },
        "period": {
          "type": "object",
          "minProperties": 1,
          "maxProperties": 8,
          "propertyNames": {
            "pattern": "^[a-z]{2,3}(?:-[A-Za-z0-9]{2,8})*$"
          },
          "additionalProperties": {
            "type": "string",
            "maxLength": 5000
          }
        },
        "medium": {
          "type": "object",
          "minProperties": 1,
          "maxProperties": 8,
          "propertyNames": {
            "pattern": "^[a-z]{2,3}(?:-[A-Za-z0-9]{2,8})*$"
          },
          "additionalProperties": {
            "type": "string",
            "maxLength": 5000
          }
        },
        "materials": {
          "type": "object",
          "minProperties": 1,
          "maxProperties": 8,
          "propertyNames": {
            "pattern": "^[a-z]{2,3}(?:-[A-Za-z0-9]{2,8})*$"
          },
          "additionalProperties": {
            "type": "string",
            "maxLength": 5000
          }
        },
        "technique": {
          "type": "object",
          "minProperties": 1,
          "maxProperties": 8,
          "propertyNames": {
            "pattern": "^[a-z]{2,3}(?:-[A-Za-z0-9]{2,8})*$"
          },
          "additionalProperties": {
            "type": "string",
            "maxLength": 5000
          }
        },
        "dimensions": {
          "anyOf": [
            {
              "type": "object",
              "additionalProperties": false,
              "properties": {
                "height": {
                  "type": "string",
                  "pattern": "^(0|[1-9][0-9]*)(\\.[0-9]{1,6})?$",
                  "maxLength": 24
                },
                "width": {
                  "type": "string",
                  "pattern": "^(0|[1-9][0-9]*)(\\.[0-9]{1,6})?$",
                  "maxLength": 24
                },
                "depth": {
                  "type": "string",
                  "pattern": "^(0|[1-9][0-9]*)(\\.[0-9]{1,6})?$",
                  "maxLength": 24
                },
                "diameter": {
                  "type": "string",
                  "pattern": "^(0|[1-9][0-9]*)(\\.[0-9]{1,6})?$",
                  "maxLength": 24
                },
                "unit": {
                  "type": "string",
                  "enum": [
                    "mm",
                    "cm",
                    "m",
                    "in"
                  ]
                },
                "display": {
                  "type": "object",
                  "minProperties": 1,
                  "maxProperties": 8,
                  "propertyNames": {
                    "pattern": "^[a-z]{2,3}(?:-[A-Za-z0-9]{2,8})*$"
                  },
                  "additionalProperties": {
                    "type": "string",
                    "maxLength": 5000
                  }
                }
              },
              "required": [
                "unit"
              ]
            },
            {
              "type": "null"
            }
          ]
        },
        "weight": {
          "anyOf": [
            {
              "type": "object",
              "additionalProperties": false,
              "properties": {
                "value": {
                  "type": "string",
                  "pattern": "^(0|[1-9][0-9]*)(\\.[0-9]{1,6})?$",
                  "maxLength": 24
                },
                "unit": {
                  "type": "string",
                  "enum": [
                    "g",
                    "kg",
                    "lb"
                  ]
                }
              },
              "required": [
                "value",
                "unit"
              ]
            },
            {
              "type": "null"
            }
          ]
        },
        "condition": {
          "type": "object",
          "minProperties": 1,
          "maxProperties": 8,
          "propertyNames": {
            "pattern": "^[a-z]{2,3}(?:-[A-Za-z0-9]{2,8})*$"
          },
          "additionalProperties": {
            "type": "string",
            "maxLength": 5000
          }
        },
        "description": {
          "$ref": "#/$defs/E_LocalizedRichText"
        },
        "provenance": {
          "$ref": "#/$defs/E_LocalizedRichText"
        },
        "bibliography": {
          "$ref": "#/$defs/E_LocalizedRichText"
        },
        "exhibitions": {
          "$ref": "#/$defs/E_LocalizedRichText"
        },
        "inscriptions": {
          "$ref": "#/$defs/E_LocalizedRichText"
        },
        "edition": {
          "anyOf": [
            {
              "type": "object",
              "additionalProperties": false,
              "properties": {
                "size": {
                  "type": "integer",
                  "minimum": 1
                },
                "artistProofs": {
                  "type": "integer",
                  "minimum": 0
                },
                "notes": {
                  "type": "object",
                  "minProperties": 1,
                  "maxProperties": 8,
                  "propertyNames": {
                    "pattern": "^[a-z]{2,3}(?:-[A-Za-z0-9]{2,8})*$"
                  },
                  "additionalProperties": {
                    "type": "string",
                    "maxLength": 5000
                  }
                }
              },
              "required": []
            },
            {
              "type": "null"
            }
          ]
        },
        "typeId": {
          "anyOf": [
            {
              "type": "integer",
              "minimum": 1,
              "maximum": 9007199254740991
            },
            {
              "type": "null"
            }
          ]
        },
        "categoryIds": {
          "type": "array",
          "items": {
            "type": "string",
            "format": "uuid"
          },
          "uniqueItems": true
        },
        "media": {
          "type": "array",
          "minItems": 1,
          "maxItems": 100,
          "items": {
            "$ref": "#/$defs/MediaSelection"
          }
        },
        "shortDescription": {
          "type": "object",
          "minProperties": 1,
          "maxProperties": 8,
          "propertyNames": {
            "pattern": "^[a-z]{2,3}(?:-[A-Za-z0-9]{2,8})*$"
          },
          "additionalProperties": {
            "type": "string",
            "maxLength": 5000
          }
        }
      },
      "required": [
        "title",
        "media"
      ]
    },
    "ExpenseAllocation": {
      "type": "object",
      "additionalProperties": false,
      "properties": {
        "unitId": {
          "type": "string",
          "format": "uuid"
        },
        "amount": {
          "$ref": "#/$defs/Money"
        }
      },
      "required": [
        "unitId",
        "amount"
      ]
    },
    "DocumentLine": {
      "oneOf": [
        {
          "$ref": "#/$defs/StockDocumentLine"
        },
        {
          "$ref": "#/$defs/ChargeDocumentLine"
        }
      ]
    },
    "DocumentDraft": {
      "oneOf": [
        {
          "type": "object",
          "additionalProperties": false,
          "properties": {
            "kind": {
              "type": "string",
              "const": "quote"
            },
            "saleId": {
              "anyOf": [
                {
                  "type": "string",
                  "format": "uuid"
                },
                {
                  "type": "null"
                }
              ]
            },
            "customerId": {
              "type": "string",
              "format": "uuid"
            },
            "locale": {
              "type": "string",
              "minLength": 2,
              "maxLength": 35
            },
            "sellerProfileRevision": {
              "type": "string",
              "pattern": "^[1-9][0-9]*$",
              "maxLength": 20
            },
            "lines": {
              "type": "array",
              "minItems": 1,
              "maxItems": 200,
              "items": {
                "$ref": "#/$defs/DocumentLine"
              }
            },
            "dueDate": {
              "anyOf": [
                {
                  "type": "string",
                  "format": "date"
                },
                {
                  "type": "null"
                }
              ]
            },
            "deliveryDate": {
              "anyOf": [
                {
                  "type": "string",
                  "format": "date"
                },
                {
                  "type": "null"
                }
              ]
            },
            "paymentTerms": {
              "type": "string",
              "maxLength": 10000
            }
          },
          "required": [
            "kind",
            "customerId",
            "locale",
            "sellerProfileRevision",
            "lines"
          ]
        },
        {
          "type": "object",
          "additionalProperties": false,
          "properties": {
            "kind": {
              "type": "string",
              "const": "invoice"
            },
            "saleId": {
              "$ref": "#/$defs/UUID"
            },
            "customerId": {
              "type": "string",
              "format": "uuid"
            },
            "locale": {
              "type": "string",
              "minLength": 2,
              "maxLength": 35
            },
            "sellerProfileRevision": {
              "type": "string",
              "pattern": "^[1-9][0-9]*$",
              "maxLength": 20
            },
            "lines": {
              "type": "array",
              "minItems": 1,
              "maxItems": 200,
              "items": {
                "$ref": "#/$defs/DocumentLine"
              }
            },
            "dueDate": {
              "anyOf": [
                {
                  "type": "string",
                  "format": "date"
                },
                {
                  "type": "null"
                }
              ]
            },
            "deliveryDate": {
              "anyOf": [
                {
                  "type": "string",
                  "format": "date"
                },
                {
                  "type": "null"
                }
              ]
            },
            "paymentTerms": {
              "type": "string",
              "maxLength": 10000
            }
          },
          "required": [
            "kind",
            "customerId",
            "locale",
            "sellerProfileRevision",
            "lines",
            "saleId"
          ]
        },
        {
          "type": "object",
          "additionalProperties": false,
          "properties": {
            "kind": {
              "type": "string",
              "const": "invoice"
            },
            "saleId": {
              "type": "null"
            },
            "customerId": {
              "type": "string",
              "format": "uuid"
            },
            "locale": {
              "type": "string",
              "minLength": 2,
              "maxLength": 35
            },
            "sellerProfileRevision": {
              "type": "string",
              "pattern": "^[1-9][0-9]*$",
              "maxLength": 20
            },
            "lines": {
              "type": "array",
              "minItems": 1,
              "maxItems": 200,
              "items": {
                "$ref": "#/$defs/ChargeDocumentLine"
              }
            },
            "dueDate": {
              "anyOf": [
                {
                  "type": "string",
                  "format": "date"
                },
                {
                  "type": "null"
                }
              ]
            },
            "deliveryDate": {
              "anyOf": [
                {
                  "type": "string",
                  "format": "date"
                },
                {
                  "type": "null"
                }
              ]
            },
            "paymentTerms": {
              "type": "string",
              "maxLength": 10000
            }
          },
          "required": [
            "kind",
            "customerId",
            "locale",
            "sellerProfileRevision",
            "lines"
          ]
        },
        {
          "type": "object",
          "additionalProperties": false,
          "properties": {
            "kind": {
              "const": "credit_note",
              "type": "string"
            },
            "originalDocumentId": {
              "$ref": "#/$defs/UUID"
            },
            "reason": {
              "type": "string",
              "minLength": 1,
              "maxLength": 2000
            },
            "locale": {
              "type": "string",
              "minLength": 2,
              "maxLength": 35
            },
            "sellerProfileRevision": {
              "$ref": "#/$defs/Revision"
            },
            "lines": {
              "type": "array",
              "minItems": 1,
              "maxItems": 200,
              "items": {
                "$ref": "#/$defs/CreditLine"
              }
            }
          },
          "required": [
            "kind",
            "originalDocumentId",
            "reason",
            "locale",
            "sellerProfileRevision",
            "lines"
          ]
        }
      ]
    },
    "inventory_create_work": {
      "type": "object",
      "additionalProperties": false,
      "properties": {
        "command": {
          "const": "inventory_create_work"
        },
        "workRef": {
          "type": "string",
          "minLength": 1,
          "maxLength": 128
        },
        "draft": {
          "$ref": "#/$defs/WorkDraft"
        },
        "internalNotes": {
          "type": "string",
          "maxLength": 20000
        }
      },
      "required": [
        "command",
        "draft"
      ],
      "x-inventory-effect": "commit_inventory_change",
      "x-inventory-financial": false,
      "x-inventory-role": "contributor",
      "x-inventory-scopes": [
        "site.inventory.write"
      ],
      "x-inventory-public-access-changed": false
    },
    "inventory_replace_draft": {
      "type": "object",
      "additionalProperties": false,
      "properties": {
        "command": {
          "const": "inventory_replace_draft"
        },
        "artworkId": {
          "type": "string",
          "format": "uuid"
        },
        "expectedRevision": {
          "type": "string",
          "pattern": "^[1-9][0-9]*$",
          "maxLength": 20
        },
        "draft": {
          "$ref": "#/$defs/WorkDraft"
        },
        "internalNotes": {
          "anyOf": [
            {
              "type": "string",
              "maxLength": 20000
            },
            {
              "type": "null"
            }
          ]
        },
        "workRef": {
          "anyOf": [
            {
              "$ref": "#/$defs/Reference"
            },
            {
              "type": "null"
            }
          ],
          "description": "Omettre pour conserver ; null attribue une nouvelle référence automatique. Identité technique et slug conservés."
        }
      },
      "required": [
        "command",
        "artworkId",
        "expectedRevision",
        "draft"
      ],
      "x-inventory-effect": "commit_inventory_change",
      "x-inventory-financial": false,
      "x-inventory-role": "contributor",
      "x-inventory-scopes": [
        "site.inventory.write"
      ],
      "x-inventory-public-access-changed": false
    },
    "inventory_publish_work": {
      "type": "object",
      "additionalProperties": false,
      "properties": {
        "command": {
          "const": "inventory_publish_work"
        },
        "artworkId": {
          "type": "string",
          "format": "uuid"
        },
        "expectedRevision": {
          "type": "string",
          "pattern": "^[1-9][0-9]*$",
          "maxLength": 20
        }
      },
      "required": [
        "command",
        "artworkId",
        "expectedRevision"
      ],
      "x-inventory-effect": "apply_public_change",
      "x-inventory-financial": false,
      "x-inventory-role": "contributor",
      "x-inventory-scopes": [
        "site.inventory.publish"
      ],
      "x-inventory-public-access-changed": true
    },
    "inventory_unpublish_work": {
      "type": "object",
      "additionalProperties": false,
      "properties": {
        "command": {
          "const": "inventory_unpublish_work"
        },
        "artworkId": {
          "type": "string",
          "format": "uuid"
        },
        "expectedRevision": {
          "type": "string",
          "pattern": "^[1-9][0-9]*$",
          "maxLength": 20
        }
      },
      "required": [
        "command",
        "artworkId",
        "expectedRevision"
      ],
      "x-inventory-effect": "apply_public_change",
      "x-inventory-financial": false,
      "x-inventory-role": "contributor",
      "x-inventory-scopes": [
        "site.inventory.publish"
      ],
      "x-inventory-public-access-changed": true
    },
    "inventory_archive_work": {
      "type": "object",
      "additionalProperties": false,
      "properties": {
        "command": {
          "const": "inventory_archive_work"
        },
        "artworkId": {
          "type": "string",
          "format": "uuid"
        },
        "expectedRevision": {
          "type": "string",
          "pattern": "^[1-9][0-9]*$",
          "maxLength": 20
        }
      },
      "required": [
        "command",
        "artworkId",
        "expectedRevision"
      ],
      "x-inventory-effect": "commit_inventory_change",
      "x-inventory-financial": false,
      "x-inventory-role": "administrator",
      "x-inventory-scopes": [
        "site.inventory.write",
        "site.inventory.manage"
      ],
      "x-inventory-public-access-changed": false
    },
    "inventory_delete_work": {
      "type": "object",
      "additionalProperties": false,
      "properties": {
        "command": {
          "const": "inventory_delete_work"
        },
        "artworkId": {
          "type": "string",
          "format": "uuid"
        },
        "expectedRevision": {
          "type": "string",
          "pattern": "^[1-9][0-9]*$",
          "maxLength": 20
        }
      },
      "required": [
        "command",
        "artworkId",
        "expectedRevision"
      ],
      "x-inventory-effect": "commit_inventory_change",
      "x-inventory-financial": false,
      "x-inventory-role": "administrator",
      "x-inventory-scopes": [
        "site.inventory.write",
        "site.inventory.manage"
      ],
      "x-inventory-public-access-changed": false
    },
    "inventory_create_unit": {
      "type": "object",
      "additionalProperties": false,
      "properties": {
        "command": {
          "const": "inventory_create_unit"
        },
        "artworkId": {
          "type": "string",
          "format": "uuid"
        },
        "expectedRevision": {
          "type": "string",
          "pattern": "^[1-9][0-9]*$",
          "maxLength": 20
        },
        "unitRef": {
          "type": "string",
          "minLength": 1,
          "maxLength": 128
        },
        "editionNumber": {
          "type": "string",
          "maxLength": 100
        }
      },
      "required": [
        "command",
        "artworkId",
        "expectedRevision"
      ],
      "x-inventory-effect": "commit_inventory_change",
      "x-inventory-financial": false,
      "x-inventory-role": "administrator",
      "x-inventory-scopes": [
        "site.inventory.write",
        "site.inventory.manage"
      ],
      "x-inventory-public-access-changed": false
    },
    "inventory_update_unit_logistics": {
      "type": "object",
      "additionalProperties": false,
      "properties": {
        "command": {
          "const": "inventory_update_unit_logistics"
        },
        "unitId": {
          "type": "string",
          "format": "uuid"
        },
        "expectedRevision": {
          "type": "string",
          "pattern": "^[1-9][0-9]*$",
          "maxLength": 20
        },
        "locationId": {
          "anyOf": [
            {
              "type": "string",
              "format": "uuid"
            },
            {
              "type": "null"
            }
          ]
        },
        "conditionNotes": {
          "type": "string",
          "maxLength": 10000
        },
        "editionNumber": {
          "anyOf": [
            {
              "type": "string",
              "maxLength": 100
            },
            {
              "type": "null"
            }
          ]
        },
        "qualification": {
          "type": "string",
          "enum": [
            "unqualified",
            "available"
          ]
        },
        "custodyQualification": {
          "type": "string",
          "enum": [
            "unknown",
            "held"
          ]
        },
        "unitRef": {
          "anyOf": [
            {
              "$ref": "#/$defs/Reference"
            },
            {
              "type": "null"
            }
          ],
          "description": "Omettre pour conserver ; null attribue une nouvelle référence automatique. Identité technique et slug conservés."
        }
      },
      "required": [
        "command",
        "unitId",
        "expectedRevision"
      ],
      "x-inventory-effect": "commit_inventory_change",
      "x-inventory-financial": false,
      "x-inventory-role": "contributor",
      "x-inventory-scopes": [
        "site.inventory.write"
      ],
      "x-inventory-public-access-changed": false
    },
    "inventory_archive_unit": {
      "type": "object",
      "additionalProperties": false,
      "properties": {
        "command": {
          "const": "inventory_archive_unit"
        },
        "unitId": {
          "type": "string",
          "format": "uuid"
        },
        "expectedRevision": {
          "type": "string",
          "pattern": "^[1-9][0-9]*$",
          "maxLength": 20
        }
      },
      "required": [
        "command",
        "unitId",
        "expectedRevision"
      ],
      "x-inventory-effect": "commit_inventory_change",
      "x-inventory-financial": false,
      "x-inventory-role": "administrator",
      "x-inventory-scopes": [
        "site.inventory.write",
        "site.inventory.manage"
      ],
      "x-inventory-public-access-changed": false
    },
    "inventory_reserve_unit": {
      "type": "object",
      "additionalProperties": false,
      "properties": {
        "command": {
          "const": "inventory_reserve_unit"
        },
        "unitId": {
          "type": "string",
          "format": "uuid"
        },
        "expectedRevision": {
          "type": "string",
          "pattern": "^[1-9][0-9]*$",
          "maxLength": 20
        },
        "partyId": {
          "type": "string",
          "format": "uuid"
        },
        "until": {
          "anyOf": [
            {
              "type": "string",
              "format": "date-time"
            },
            {
              "type": "null"
            }
          ]
        },
        "notes": {
          "type": "string",
          "maxLength": 5000
        }
      },
      "required": [
        "command",
        "unitId",
        "expectedRevision",
        "partyId"
      ],
      "x-inventory-effect": "commit_inventory_change",
      "x-inventory-financial": false,
      "x-inventory-role": "contributor",
      "x-inventory-scopes": [
        "site.inventory.write"
      ],
      "x-inventory-public-access-changed": false
    },
    "inventory_release_reservation": {
      "type": "object",
      "additionalProperties": false,
      "properties": {
        "command": {
          "const": "inventory_release_reservation"
        },
        "operationId": {
          "type": "string",
          "format": "uuid"
        },
        "expectedRevision": {
          "type": "string",
          "pattern": "^[1-9][0-9]*$",
          "maxLength": 20
        }
      },
      "required": [
        "command",
        "operationId",
        "expectedRevision"
      ],
      "x-inventory-effect": "commit_inventory_change",
      "x-inventory-financial": false,
      "x-inventory-role": "contributor",
      "x-inventory-scopes": [
        "site.inventory.write"
      ],
      "x-inventory-public-access-changed": false
    },
    "inventory_move_unit": {
      "type": "object",
      "additionalProperties": false,
      "properties": {
        "command": {
          "const": "inventory_move_unit"
        },
        "unitId": {
          "type": "string",
          "format": "uuid"
        },
        "expectedRevision": {
          "type": "string",
          "pattern": "^[1-9][0-9]*$",
          "maxLength": 20
        },
        "toLocationId": {
          "type": "string",
          "format": "uuid"
        },
        "occurredAt": {
          "type": "string",
          "format": "date-time"
        },
        "notes": {
          "type": "string",
          "maxLength": 5000
        }
      },
      "required": [
        "command",
        "unitId",
        "expectedRevision",
        "toLocationId",
        "occurredAt"
      ],
      "x-inventory-effect": "commit_inventory_change",
      "x-inventory-financial": false,
      "x-inventory-role": "contributor",
      "x-inventory-scopes": [
        "site.inventory.write"
      ],
      "x-inventory-public-access-changed": false
    },
    "inventory_loan_unit": {
      "type": "object",
      "additionalProperties": false,
      "properties": {
        "command": {
          "const": "inventory_loan_unit"
        },
        "unitId": {
          "type": "string",
          "format": "uuid"
        },
        "expectedRevision": {
          "type": "string",
          "pattern": "^[1-9][0-9]*$",
          "maxLength": 20
        },
        "recipientId": {
          "type": "string",
          "format": "uuid"
        },
        "toLocationId": {
          "anyOf": [
            {
              "type": "string",
              "format": "uuid"
            },
            {
              "type": "null"
            }
          ]
        },
        "departedAt": {
          "type": "string",
          "format": "date-time"
        },
        "expectedReturnAt": {
          "anyOf": [
            {
              "type": "string",
              "format": "date-time"
            },
            {
              "type": "null"
            }
          ]
        },
        "notes": {
          "type": "string",
          "maxLength": 5000
        }
      },
      "required": [
        "command",
        "unitId",
        "expectedRevision",
        "recipientId",
        "departedAt"
      ],
      "x-inventory-effect": "commit_inventory_change",
      "x-inventory-financial": false,
      "x-inventory-role": "contributor",
      "x-inventory-scopes": [
        "site.inventory.write"
      ],
      "x-inventory-public-access-changed": false
    },
    "inventory_return_loan": {
      "type": "object",
      "additionalProperties": false,
      "properties": {
        "command": {
          "const": "inventory_return_loan"
        },
        "operationId": {
          "type": "string",
          "format": "uuid"
        },
        "expectedRevision": {
          "type": "string",
          "pattern": "^[1-9][0-9]*$",
          "maxLength": 20
        },
        "toLocationId": {
          "anyOf": [
            {
              "type": "string",
              "format": "uuid"
            },
            {
              "type": "null"
            }
          ]
        },
        "returnedAt": {
          "type": "string",
          "format": "date-time"
        },
        "conditionNotes": {
          "type": "string",
          "maxLength": 10000
        }
      },
      "required": [
        "command",
        "operationId",
        "expectedRevision",
        "returnedAt"
      ],
      "x-inventory-effect": "commit_inventory_change",
      "x-inventory-financial": false,
      "x-inventory-role": "contributor",
      "x-inventory-scopes": [
        "site.inventory.write"
      ],
      "x-inventory-public-access-changed": false,
      "description": "Enregistrer le retour physique des exemplaires d’un prêt ou d’un dépôt, sans annuler le contrat financier, sa commission ou ses règlements. Une restitution de dépôt entrant conserve le propriétaire et utilise returned_to_owner. La forme et le nom historiques de la commande restent compatibles."
    },
    "inventory_correct_logistics_operation": {
      "type": "object",
      "additionalProperties": false,
      "properties": {
        "command": {
          "const": "inventory_correct_logistics_operation"
        },
        "operationId": {
          "type": "string",
          "format": "uuid"
        },
        "expectedRevision": {
          "type": "string",
          "pattern": "^[1-9][0-9]*$",
          "maxLength": 20
        },
        "reason": {
          "type": "string",
          "maxLength": 2000
        },
        "notes": {
          "type": "string",
          "maxLength": 5000
        },
        "expectedReturnAt": {
          "anyOf": [
            {
              "type": "string",
              "format": "date-time"
            },
            {
              "type": "null"
            }
          ]
        },
        "action": {
          "type": "string",
          "enum": [
            "annotate",
            "cancel"
          ]
        },
        "toLocationId": {
          "anyOf": [
            {
              "$ref": "#/$defs/UUID"
            },
            {
              "type": "null"
            }
          ]
        },
        "occurredAt": {
          "type": "string",
          "format": "date-time"
        }
      },
      "required": [
        "command",
        "operationId",
        "expectedRevision",
        "reason",
        "action"
      ],
      "x-inventory-effect": "commit_inventory_change",
      "x-inventory-financial": false,
      "x-inventory-role": "contributor",
      "x-inventory-scopes": [
        "site.inventory.write"
      ],
      "x-inventory-public-access-changed": false
    },
    "inventory_record_acquisition": {
      "type": "object",
      "additionalProperties": false,
      "properties": {
        "command": {
          "const": "inventory_record_acquisition"
        },
        "unitId": {
          "type": "string",
          "format": "uuid"
        },
        "expectedRevision": {
          "type": "string",
          "pattern": "^[1-9][0-9]*$",
          "maxLength": 20
        },
        "kind": {
          "type": "string",
          "enum": [
            "purchase",
            "creation"
          ]
        },
        "date": {
          "anyOf": [
            {
              "type": "string",
              "format": "date"
            },
            {
              "type": "null"
            }
          ]
        },
        "partyId": {
          "anyOf": [
            {
              "type": "string",
              "format": "uuid"
            },
            {
              "type": "null"
            }
          ]
        },
        "ownerId": {
          "anyOf": [
            {
              "type": "string",
              "format": "uuid"
            },
            {
              "type": "null"
            }
          ]
        },
        "amount": {
          "anyOf": [
            {
              "$ref": "#/$defs/Money"
            },
            {
              "type": "null"
            }
          ]
        },
        "taxPurchasePrice": {
          "anyOf": [
            {
              "$ref": "#/$defs/Money"
            },
            {
              "type": "null"
            }
          ]
        },
        "qualificationEvidenceIds": {
          "type": "array",
          "items": {
            "type": "string",
            "format": "uuid"
          }
        }
      },
      "required": [
        "command",
        "unitId",
        "expectedRevision",
        "kind",
        "amount"
      ],
      "x-inventory-effect": "commit_inventory_change",
      "x-inventory-financial": true,
      "x-inventory-role": "administrator",
      "x-inventory-scopes": [
        "site.inventory.write",
        "site.inventory.finance"
      ],
      "x-inventory-public-access-changed": false
    },
    "inventory_record_expense": {
      "type": "object",
      "additionalProperties": false,
      "properties": {
        "command": {
          "const": "inventory_record_expense"
        },
        "expenseRef": {
          "type": "string",
          "minLength": 1,
          "maxLength": 128
        },
        "category": {
          "type": "string",
          "enum": [
            "photo",
            "mounting",
            "restoration",
            "transport",
            "insurance",
            "other"
          ]
        },
        "date": {
          "anyOf": [
            {
              "type": "string",
              "format": "date"
            },
            {
              "type": "null"
            }
          ]
        },
        "total": {
          "anyOf": [
            {
              "$ref": "#/$defs/Money"
            },
            {
              "type": "null"
            }
          ]
        },
        "supplierId": {
          "anyOf": [
            {
              "type": "string",
              "format": "uuid"
            },
            {
              "type": "null"
            }
          ]
        },
        "allocations": {
          "type": "array",
          "maxItems": 1000,
          "items": {
            "$ref": "#/$defs/ExpenseAllocation"
          }
        },
        "evidenceIds": {
          "type": "array",
          "items": {
            "type": "string",
            "format": "uuid"
          }
        },
        "targetUnitIds": {
          "type": "array",
          "items": {
            "$ref": "#/$defs/UUID"
          },
          "uniqueItems": true,
          "maxItems": 1000
        }
      },
      "required": [
        "command",
        "expenseRef",
        "category",
        "total",
        "allocations",
        "targetUnitIds"
      ],
      "x-inventory-effect": "commit_inventory_change",
      "x-inventory-financial": true,
      "allOf": [
        {
          "if": {
            "properties": {
              "total": {
                "type": "null"
              }
            },
            "required": [
              "total"
            ]
          },
          "then": {
            "properties": {
              "allocations": {
                "maxItems": 0
              }
            }
          }
        }
      ],
      "x-inventory-role": "administrator",
      "x-inventory-scopes": [
        "site.inventory.write",
        "site.inventory.finance"
      ],
      "x-inventory-public-access-changed": false
    },
    "inventory_record_deposit": {
      "type": "object",
      "additionalProperties": false,
      "properties": {
        "command": {
          "const": "inventory_record_deposit"
        },
        "direction": {
          "type": "string",
          "enum": [
            "in",
            "out"
          ]
        },
        "units": {
          "type": "array",
          "minItems": 1,
          "maxItems": 1000,
          "items": {
            "type": "object",
            "additionalProperties": false,
            "properties": {
              "unitId": {
                "type": "string",
                "format": "uuid"
              },
              "expectedRevision": {
                "type": "string",
                "pattern": "^[1-9][0-9]*$",
                "maxLength": 20
              }
            },
            "required": [
              "unitId",
              "expectedRevision"
            ]
          }
        },
        "ownerId": {
          "type": "string",
          "format": "uuid"
        },
        "counterpartyId": {
          "type": "string",
          "format": "uuid"
        },
        "date": {
          "type": "string",
          "format": "date"
        },
        "expectedReturnAt": {
          "anyOf": [
            {
              "type": "string",
              "format": "date-time"
            },
            {
              "type": "null"
            }
          ]
        },
        "locationId": {
          "anyOf": [
            {
              "type": "string",
              "format": "uuid"
            },
            {
              "type": "null"
            }
          ]
        },
        "commission": {
          "anyOf": [
            {
              "$ref": "#/$defs/Money"
            },
            {
              "type": "null"
            }
          ]
        },
        "insuranceValue": {
          "anyOf": [
            {
              "$ref": "#/$defs/Money"
            },
            {
              "type": "null"
            }
          ]
        },
        "terms": {
          "type": "string",
          "maxLength": 20000
        },
        "documentIds": {
          "type": "array",
          "items": {
            "type": "string",
            "format": "uuid"
          }
        },
        "commissionRate": {
          "anyOf": [
            {
              "$ref": "#/$defs/Rate"
            },
            {
              "type": "null"
            }
          ]
        }
      },
      "required": [
        "command",
        "direction",
        "units",
        "ownerId",
        "counterpartyId",
        "date"
      ],
      "x-inventory-effect": "commit_inventory_change",
      "x-inventory-financial": true,
      "x-inventory-role": "administrator",
      "x-inventory-scopes": [
        "site.inventory.write",
        "site.inventory.finance"
      ],
      "x-inventory-public-access-changed": false
    },
    "inventory_record_sale": {
      "type": "object",
      "additionalProperties": false,
      "properties": {
        "command": {
          "const": "inventory_record_sale"
        },
        "units": {
          "type": "array",
          "minItems": 1,
          "maxItems": 1000,
          "items": {
            "type": "object",
            "additionalProperties": false,
            "properties": {
              "unitId": {
                "type": "string",
                "format": "uuid"
              },
              "expectedRevision": {
                "type": "string",
                "pattern": "^[1-9][0-9]*$",
                "maxLength": 20
              },
              "grossAmount": {
                "$ref": "#/$defs/Money"
              }
            },
            "required": [
              "unitId",
              "expectedRevision",
              "grossAmount"
            ]
          }
        },
        "customerId": {
          "type": "string",
          "format": "uuid"
        },
        "date": {
          "type": "string",
          "format": "date"
        },
        "sellerRole": {
          "type": "string",
          "enum": [
            "own_account",
            "consignment_principal",
            "agent"
          ]
        },
        "depositOperationId": {
          "anyOf": [
            {
              "type": "string",
              "format": "uuid"
            },
            {
              "type": "null"
            }
          ]
        },
        "amount": {
          "$ref": "#/$defs/Money"
        },
        "reservationIds": {
          "type": "array",
          "items": {
            "type": "string",
            "format": "uuid"
          }
        }
      },
      "required": [
        "command",
        "units",
        "customerId",
        "date",
        "sellerRole",
        "amount"
      ],
      "x-inventory-effect": "commit_inventory_change",
      "x-inventory-financial": true,
      "x-inventory-role": "administrator",
      "x-inventory-scopes": [
        "site.inventory.write",
        "site.inventory.finance"
      ],
      "x-inventory-public-access-changed": false
    },
    "inventory_prepare_document": {
      "type": "object",
      "additionalProperties": false,
      "properties": {
        "command": {
          "const": "inventory_prepare_document"
        },
        "draft": {
          "$ref": "#/$defs/DocumentDraft"
        }
      },
      "required": [
        "command",
        "draft"
      ],
      "x-inventory-effect": "commit_inventory_change",
      "x-inventory-financial": true,
      "x-inventory-role": "administrator",
      "x-inventory-scopes": [
        "site.inventory.write",
        "site.inventory.finance"
      ],
      "x-inventory-public-access-changed": false
    },
    "inventory_replace_document_draft": {
      "type": "object",
      "additionalProperties": false,
      "properties": {
        "command": {
          "const": "inventory_replace_document_draft"
        },
        "documentId": {
          "type": "string",
          "format": "uuid"
        },
        "expectedRevision": {
          "type": "string",
          "pattern": "^[1-9][0-9]*$",
          "maxLength": 20
        },
        "draft": {
          "$ref": "#/$defs/DocumentDraft"
        }
      },
      "required": [
        "command",
        "documentId",
        "expectedRevision",
        "draft"
      ],
      "x-inventory-effect": "commit_inventory_change",
      "x-inventory-financial": true,
      "x-inventory-role": "administrator",
      "x-inventory-scopes": [
        "site.inventory.write",
        "site.inventory.finance"
      ],
      "x-inventory-public-access-changed": false
    },
    "inventory_issue_document": {
      "type": "object",
      "additionalProperties": false,
      "properties": {
        "command": {
          "const": "inventory_issue_document"
        },
        "documentId": {
          "type": "string",
          "format": "uuid"
        },
        "expectedRevision": {
          "type": "string",
          "pattern": "^[1-9][0-9]*$",
          "maxLength": 20
        },
        "seriesId": {
          "type": "string",
          "format": "uuid"
        },
        "sellerProfileRevision": {
          "type": "string",
          "pattern": "^[1-9][0-9]*$",
          "maxLength": 20
        }
      },
      "required": [
        "command",
        "documentId",
        "expectedRevision",
        "seriesId",
        "sellerProfileRevision"
      ],
      "x-inventory-effect": "commit_inventory_change",
      "x-inventory-financial": true,
      "x-inventory-role": "administrator",
      "x-inventory-scopes": [
        "site.inventory.write",
        "site.inventory.finance"
      ],
      "x-inventory-public-access-changed": false
    },
    "inventory_record_payment": {
      "type": "object",
      "additionalProperties": false,
      "properties": {
        "command": {
          "const": "inventory_record_payment"
        },
        "documentId": {
          "type": "string",
          "format": "uuid"
        },
        "expectedRevision": {
          "type": "string",
          "pattern": "^[1-9][0-9]*$",
          "maxLength": 20
        },
        "amount": {
          "$ref": "#/$defs/Money"
        },
        "date": {
          "type": "string",
          "format": "date"
        },
        "method": {
          "type": "string",
          "enum": [
            "bank_transfer",
            "cash",
            "card_external",
            "cheque",
            "other"
          ]
        },
        "reference": {
          "type": "string",
          "maxLength": 500
        },
        "reason": {
          "type": "string",
          "maxLength": 2000
        },
        "exchange": {
          "anyOf": [
            {
              "type": "object",
              "additionalProperties": false,
              "properties": {
                "invoiceAmount": {
                  "$ref": "#/$defs/Money"
                },
                "evidenceId": {
                  "type": "string",
                  "format": "uuid"
                }
              },
              "required": [
                "invoiceAmount",
                "evidenceId"
              ]
            },
            {
              "type": "null"
            }
          ]
        }
      },
      "required": [
        "command",
        "documentId",
        "expectedRevision",
        "amount",
        "date",
        "method",
        "reference"
      ],
      "x-inventory-effect": "commit_inventory_change",
      "x-inventory-financial": true,
      "x-inventory-role": "administrator",
      "x-inventory-scopes": [
        "site.inventory.write",
        "site.inventory.finance"
      ],
      "x-inventory-public-access-changed": false
    },
    "inventory_record_refund": {
      "type": "object",
      "additionalProperties": false,
      "properties": {
        "command": {
          "const": "inventory_record_refund"
        },
        "documentId": {
          "type": "string",
          "format": "uuid"
        },
        "expectedRevision": {
          "type": "string",
          "pattern": "^[1-9][0-9]*$",
          "maxLength": 20
        },
        "amount": {
          "$ref": "#/$defs/Money"
        },
        "date": {
          "type": "string",
          "format": "date"
        },
        "method": {
          "type": "string",
          "enum": [
            "bank_transfer",
            "cash",
            "card_external",
            "cheque",
            "other"
          ]
        },
        "reference": {
          "type": "string",
          "maxLength": 500
        },
        "reason": {
          "type": "string",
          "maxLength": 2000
        },
        "exchange": {
          "anyOf": [
            {
              "type": "object",
              "additionalProperties": false,
              "properties": {
                "invoiceAmount": {
                  "$ref": "#/$defs/Money"
                },
                "evidenceId": {
                  "type": "string",
                  "format": "uuid"
                }
              },
              "required": [
                "invoiceAmount",
                "evidenceId"
              ]
            },
            {
              "type": "null"
            }
          ]
        }
      },
      "required": [
        "command",
        "documentId",
        "expectedRevision",
        "amount",
        "date",
        "method",
        "reference"
      ],
      "x-inventory-effect": "commit_inventory_change",
      "x-inventory-financial": true,
      "x-inventory-role": "administrator",
      "x-inventory-scopes": [
        "site.inventory.write",
        "site.inventory.finance"
      ],
      "x-inventory-public-access-changed": false
    },
    "inventory_save_reference": {
      "type": "object",
      "additionalProperties": false,
      "properties": {
        "command": {
          "const": "inventory_save_reference"
        },
        "reference": {
          "oneOf": [
            {
              "type": "object",
              "additionalProperties": false,
              "properties": {
                "kind": {
                  "const": "artist"
                },
                "action": {
                  "const": "create"
                },
                "fields": {
                  "type": "object",
                  "additionalProperties": false,
                  "properties": {
                    "name": {
                      "type": "object",
                      "minProperties": 1,
                      "maxProperties": 8,
                      "propertyNames": {
                        "pattern": "^[a-z]{2,3}(?:-[A-Za-z0-9]{2,8})*$"
                      },
                      "additionalProperties": {
                        "type": "string",
                        "maxLength": 5000
                      }
                    },
                    "birthDate": {
                      "anyOf": [
                        {
                          "type": "string",
                          "maxLength": 100
                        },
                        {
                          "type": "null"
                        }
                      ]
                    },
                    "deathDate": {
                      "anyOf": [
                        {
                          "type": "string",
                          "maxLength": 100
                        },
                        {
                          "type": "null"
                        }
                      ]
                    },
                    "nationalities": {
                      "type": "array",
                      "items": {
                        "type": "string",
                        "maxLength": 100
                      }
                    },
                    "biography": {
                      "$ref": "#/$defs/E_LocalizedRichText"
                    },
                    "mediaIds": {
                      "type": "array",
                      "items": {
                        "$ref": "#/$defs/UUID"
                      },
                      "maxItems": 100,
                      "uniqueItems": true
                    }
                  },
                  "required": [
                    "name"
                  ]
                }
              },
              "required": [
                "kind",
                "action",
                "fields"
              ]
            },
            {
              "type": "object",
              "additionalProperties": false,
              "properties": {
                "kind": {
                  "const": "artist"
                },
                "action": {
                  "const": "update"
                },
                "fields": {
                  "type": "object",
                  "additionalProperties": false,
                  "properties": {
                    "name": {
                      "type": "object",
                      "minProperties": 1,
                      "maxProperties": 8,
                      "propertyNames": {
                        "pattern": "^[a-z]{2,3}(?:-[A-Za-z0-9]{2,8})*$"
                      },
                      "additionalProperties": {
                        "type": "string",
                        "maxLength": 5000
                      }
                    },
                    "birthDate": {
                      "anyOf": [
                        {
                          "type": "string",
                          "maxLength": 100
                        },
                        {
                          "type": "null"
                        }
                      ]
                    },
                    "deathDate": {
                      "anyOf": [
                        {
                          "type": "string",
                          "maxLength": 100
                        },
                        {
                          "type": "null"
                        }
                      ]
                    },
                    "nationalities": {
                      "type": "array",
                      "items": {
                        "type": "string",
                        "maxLength": 100
                      }
                    },
                    "biography": {
                      "$ref": "#/$defs/E_LocalizedRichText"
                    },
                    "mediaIds": {
                      "type": "array",
                      "items": {
                        "$ref": "#/$defs/UUID"
                      },
                      "maxItems": 100,
                      "uniqueItems": true
                    }
                  },
                  "required": [
                    "name"
                  ]
                },
                "referenceId": {
                  "$ref": "#/$defs/UUID"
                },
                "expectedRevision": {
                  "$ref": "#/$defs/Revision"
                }
              },
              "required": [
                "kind",
                "action",
                "fields",
                "referenceId",
                "expectedRevision"
              ]
            },
            {
              "type": "object",
              "additionalProperties": false,
              "properties": {
                "kind": {
                  "const": "origin"
                },
                "action": {
                  "const": "create"
                },
                "fields": {
                  "type": "object",
                  "additionalProperties": false,
                  "properties": {
                    "name": {
                      "type": "object",
                      "minProperties": 1,
                      "maxProperties": 8,
                      "propertyNames": {
                        "pattern": "^[a-z]{2,3}(?:-[A-Za-z0-9]{2,8})*$"
                      },
                      "additionalProperties": {
                        "type": "string",
                        "maxLength": 5000
                      }
                    },
                    "culture": {
                      "type": "object",
                      "minProperties": 1,
                      "maxProperties": 8,
                      "propertyNames": {
                        "pattern": "^[a-z]{2,3}(?:-[A-Za-z0-9]{2,8})*$"
                      },
                      "additionalProperties": {
                        "type": "string",
                        "maxLength": 5000
                      }
                    },
                    "country": {
                      "anyOf": [
                        {
                          "type": "string",
                          "maxLength": 100
                        },
                        {
                          "type": "null"
                        }
                      ]
                    },
                    "region": {
                      "type": "object",
                      "minProperties": 1,
                      "maxProperties": 8,
                      "propertyNames": {
                        "pattern": "^[a-z]{2,3}(?:-[A-Za-z0-9]{2,8})*$"
                      },
                      "additionalProperties": {
                        "type": "string",
                        "maxLength": 5000
                      }
                    },
                    "period": {
                      "type": "object",
                      "minProperties": 1,
                      "maxProperties": 8,
                      "propertyNames": {
                        "pattern": "^[a-z]{2,3}(?:-[A-Za-z0-9]{2,8})*$"
                      },
                      "additionalProperties": {
                        "type": "string",
                        "maxLength": 5000
                      }
                    },
                    "description": {
                      "$ref": "#/$defs/E_LocalizedRichText"
                    },
                    "mediaIds": {
                      "type": "array",
                      "items": {
                        "$ref": "#/$defs/UUID"
                      },
                      "maxItems": 100,
                      "uniqueItems": true
                    }
                  },
                  "required": [
                    "name"
                  ]
                }
              },
              "required": [
                "kind",
                "action",
                "fields"
              ]
            },
            {
              "type": "object",
              "additionalProperties": false,
              "properties": {
                "kind": {
                  "const": "origin"
                },
                "action": {
                  "const": "update"
                },
                "fields": {
                  "type": "object",
                  "additionalProperties": false,
                  "properties": {
                    "name": {
                      "type": "object",
                      "minProperties": 1,
                      "maxProperties": 8,
                      "propertyNames": {
                        "pattern": "^[a-z]{2,3}(?:-[A-Za-z0-9]{2,8})*$"
                      },
                      "additionalProperties": {
                        "type": "string",
                        "maxLength": 5000
                      }
                    },
                    "culture": {
                      "type": "object",
                      "minProperties": 1,
                      "maxProperties": 8,
                      "propertyNames": {
                        "pattern": "^[a-z]{2,3}(?:-[A-Za-z0-9]{2,8})*$"
                      },
                      "additionalProperties": {
                        "type": "string",
                        "maxLength": 5000
                      }
                    },
                    "country": {
                      "anyOf": [
                        {
                          "type": "string",
                          "maxLength": 100
                        },
                        {
                          "type": "null"
                        }
                      ]
                    },
                    "region": {
                      "type": "object",
                      "minProperties": 1,
                      "maxProperties": 8,
                      "propertyNames": {
                        "pattern": "^[a-z]{2,3}(?:-[A-Za-z0-9]{2,8})*$"
                      },
                      "additionalProperties": {
                        "type": "string",
                        "maxLength": 5000
                      }
                    },
                    "period": {
                      "type": "object",
                      "minProperties": 1,
                      "maxProperties": 8,
                      "propertyNames": {
                        "pattern": "^[a-z]{2,3}(?:-[A-Za-z0-9]{2,8})*$"
                      },
                      "additionalProperties": {
                        "type": "string",
                        "maxLength": 5000
                      }
                    },
                    "description": {
                      "$ref": "#/$defs/E_LocalizedRichText"
                    },
                    "mediaIds": {
                      "type": "array",
                      "items": {
                        "$ref": "#/$defs/UUID"
                      },
                      "maxItems": 100,
                      "uniqueItems": true
                    }
                  },
                  "required": [
                    "name"
                  ]
                },
                "referenceId": {
                  "$ref": "#/$defs/UUID"
                },
                "expectedRevision": {
                  "$ref": "#/$defs/Revision"
                }
              },
              "required": [
                "kind",
                "action",
                "fields",
                "referenceId",
                "expectedRevision"
              ]
            },
            {
              "type": "object",
              "additionalProperties": false,
              "properties": {
                "kind": {
                  "const": "party"
                },
                "action": {
                  "const": "create"
                },
                "fields": {
                  "type": "object",
                  "additionalProperties": false,
                  "properties": {
                    "name": {
                      "type": "string",
                      "maxLength": 500
                    },
                    "kind": {
                      "type": "string",
                      "enum": [
                        "person",
                        "organization"
                      ]
                    },
                    "roles": {
                      "type": "array",
                      "items": {
                        "type": "string",
                        "enum": [
                          "owner",
                          "supplier",
                          "depositor",
                          "customer",
                          "recipient"
                        ]
                      }
                    },
                    "email": {
                      "anyOf": [
                        {
                          "type": "string",
                          "format": "email"
                        },
                        {
                          "type": "null"
                        }
                      ]
                    },
                    "phone": {
                      "anyOf": [
                        {
                          "type": "string",
                          "maxLength": 100
                        },
                        {
                          "type": "null"
                        }
                      ]
                    },
                    "addressLines": {
                      "type": "array",
                      "maxItems": 8,
                      "items": {
                        "type": "string",
                        "maxLength": 500
                      }
                    },
                    "customerKind": {
                      "type": "string",
                      "enum": [
                        "professional",
                        "private",
                        "public_entity"
                      ]
                    },
                    "companyIdentifier": {
                      "anyOf": [
                        {
                          "type": "string",
                          "maxLength": 100
                        },
                        {
                          "type": "null"
                        }
                      ]
                    },
                    "vatIdentifier": {
                      "anyOf": [
                        {
                          "type": "string",
                          "maxLength": 100
                        },
                        {
                          "type": "null"
                        }
                      ]
                    },
                    "billingAddress": {
                      "type": "object",
                      "additionalProperties": false,
                      "properties": {
                        "line1": {
                          "type": "string",
                          "maxLength": 500
                        },
                        "line2": {
                          "anyOf": [
                            {
                              "type": "string",
                              "maxLength": 500
                            },
                            {
                              "type": "null"
                            }
                          ]
                        },
                        "postalCode": {
                          "type": "string",
                          "maxLength": 100
                        },
                        "city": {
                          "type": "string",
                          "maxLength": 200
                        },
                        "country": {
                          "type": "string",
                          "pattern": "^[A-Z]{2}$"
                        }
                      },
                      "required": [
                        "line1",
                        "city",
                        "country"
                      ]
                    },
                    "shippingAddress": {
                      "anyOf": [
                        {
                          "type": "object",
                          "additionalProperties": false,
                          "properties": {
                            "line1": {
                              "type": "string",
                              "maxLength": 500
                            },
                            "line2": {
                              "anyOf": [
                                {
                                  "type": "string",
                                  "maxLength": 500
                                },
                                {
                                  "type": "null"
                                }
                              ]
                            },
                            "postalCode": {
                              "type": "string",
                              "maxLength": 100
                            },
                            "city": {
                              "type": "string",
                              "maxLength": 200
                            },
                            "country": {
                              "type": "string",
                              "pattern": "^[A-Z]{2}$"
                            }
                          },
                          "required": [
                            "line1",
                            "city",
                            "country"
                          ]
                        },
                        {
                          "type": "null"
                        }
                      ]
                    }
                  },
                  "required": [
                    "name",
                    "kind",
                    "roles"
                  ]
                }
              },
              "required": [
                "kind",
                "action",
                "fields"
              ]
            },
            {
              "type": "object",
              "additionalProperties": false,
              "properties": {
                "kind": {
                  "const": "party"
                },
                "action": {
                  "const": "update"
                },
                "fields": {
                  "type": "object",
                  "additionalProperties": false,
                  "properties": {
                    "name": {
                      "type": "string",
                      "maxLength": 500
                    },
                    "kind": {
                      "type": "string",
                      "enum": [
                        "person",
                        "organization"
                      ]
                    },
                    "roles": {
                      "type": "array",
                      "items": {
                        "type": "string",
                        "enum": [
                          "owner",
                          "supplier",
                          "depositor",
                          "customer",
                          "recipient"
                        ]
                      }
                    },
                    "email": {
                      "anyOf": [
                        {
                          "type": "string",
                          "format": "email"
                        },
                        {
                          "type": "null"
                        }
                      ]
                    },
                    "phone": {
                      "anyOf": [
                        {
                          "type": "string",
                          "maxLength": 100
                        },
                        {
                          "type": "null"
                        }
                      ]
                    },
                    "addressLines": {
                      "type": "array",
                      "maxItems": 8,
                      "items": {
                        "type": "string",
                        "maxLength": 500
                      }
                    },
                    "customerKind": {
                      "type": "string",
                      "enum": [
                        "professional",
                        "private",
                        "public_entity"
                      ]
                    },
                    "companyIdentifier": {
                      "anyOf": [
                        {
                          "type": "string",
                          "maxLength": 100
                        },
                        {
                          "type": "null"
                        }
                      ]
                    },
                    "vatIdentifier": {
                      "anyOf": [
                        {
                          "type": "string",
                          "maxLength": 100
                        },
                        {
                          "type": "null"
                        }
                      ]
                    },
                    "billingAddress": {
                      "type": "object",
                      "additionalProperties": false,
                      "properties": {
                        "line1": {
                          "type": "string",
                          "maxLength": 500
                        },
                        "line2": {
                          "anyOf": [
                            {
                              "type": "string",
                              "maxLength": 500
                            },
                            {
                              "type": "null"
                            }
                          ]
                        },
                        "postalCode": {
                          "type": "string",
                          "maxLength": 100
                        },
                        "city": {
                          "type": "string",
                          "maxLength": 200
                        },
                        "country": {
                          "type": "string",
                          "pattern": "^[A-Z]{2}$"
                        }
                      },
                      "required": [
                        "line1",
                        "city",
                        "country"
                      ]
                    },
                    "shippingAddress": {
                      "anyOf": [
                        {
                          "type": "object",
                          "additionalProperties": false,
                          "properties": {
                            "line1": {
                              "type": "string",
                              "maxLength": 500
                            },
                            "line2": {
                              "anyOf": [
                                {
                                  "type": "string",
                                  "maxLength": 500
                                },
                                {
                                  "type": "null"
                                }
                              ]
                            },
                            "postalCode": {
                              "type": "string",
                              "maxLength": 100
                            },
                            "city": {
                              "type": "string",
                              "maxLength": 200
                            },
                            "country": {
                              "type": "string",
                              "pattern": "^[A-Z]{2}$"
                            }
                          },
                          "required": [
                            "line1",
                            "city",
                            "country"
                          ]
                        },
                        {
                          "type": "null"
                        }
                      ]
                    }
                  },
                  "required": [
                    "name",
                    "kind",
                    "roles"
                  ]
                },
                "referenceId": {
                  "$ref": "#/$defs/UUID"
                },
                "expectedRevision": {
                  "$ref": "#/$defs/Revision"
                }
              },
              "required": [
                "kind",
                "action",
                "fields",
                "referenceId",
                "expectedRevision"
              ]
            },
            {
              "type": "object",
              "additionalProperties": false,
              "properties": {
                "kind": {
                  "const": "location"
                },
                "action": {
                  "const": "create"
                },
                "fields": {
                  "type": "object",
                  "additionalProperties": false,
                  "properties": {
                    "name": {
                      "type": "string",
                      "maxLength": 500
                    },
                    "partyId": {
                      "anyOf": [
                        {
                          "type": "string",
                          "format": "uuid"
                        },
                        {
                          "type": "null"
                        }
                      ]
                    },
                    "addressLines": {
                      "type": "array",
                      "maxItems": 8,
                      "items": {
                        "type": "string",
                        "maxLength": 500
                      }
                    },
                    "active": {
                      "type": "boolean"
                    }
                  },
                  "required": [
                    "name"
                  ]
                }
              },
              "required": [
                "kind",
                "action",
                "fields"
              ]
            },
            {
              "type": "object",
              "additionalProperties": false,
              "properties": {
                "kind": {
                  "const": "location"
                },
                "action": {
                  "const": "update"
                },
                "fields": {
                  "type": "object",
                  "additionalProperties": false,
                  "properties": {
                    "name": {
                      "type": "string",
                      "maxLength": 500
                    },
                    "partyId": {
                      "anyOf": [
                        {
                          "type": "string",
                          "format": "uuid"
                        },
                        {
                          "type": "null"
                        }
                      ]
                    },
                    "addressLines": {
                      "type": "array",
                      "maxItems": 8,
                      "items": {
                        "type": "string",
                        "maxLength": 500
                      }
                    },
                    "active": {
                      "type": "boolean"
                    }
                  },
                  "required": [
                    "name"
                  ]
                },
                "referenceId": {
                  "$ref": "#/$defs/UUID"
                },
                "expectedRevision": {
                  "$ref": "#/$defs/Revision"
                }
              },
              "required": [
                "kind",
                "action",
                "fields",
                "referenceId",
                "expectedRevision"
              ]
            },
            {
              "type": "object",
              "additionalProperties": false,
              "properties": {
                "kind": {
                  "const": "type"
                },
                "action": {
                  "const": "create"
                },
                "fields": {
                  "type": "object",
                  "additionalProperties": false,
                  "properties": {
                    "name": {
                      "type": "object",
                      "minProperties": 1,
                      "maxProperties": 8,
                      "propertyNames": {
                        "pattern": "^[a-z]{2,3}(?:-[A-Za-z0-9]{2,8})*$"
                      },
                      "additionalProperties": {
                        "type": "string",
                        "maxLength": 5000
                      }
                    },
                    "active": {
                      "type": "boolean"
                    },
                    "position": {
                      "type": "integer",
                      "minimum": 0
                    }
                  },
                  "required": [
                    "name"
                  ]
                }
              },
              "required": [
                "kind",
                "action",
                "fields"
              ]
            },
            {
              "type": "object",
              "additionalProperties": false,
              "properties": {
                "kind": {
                  "const": "type"
                },
                "action": {
                  "const": "update"
                },
                "fields": {
                  "type": "object",
                  "additionalProperties": false,
                  "properties": {
                    "name": {
                      "type": "object",
                      "minProperties": 1,
                      "maxProperties": 8,
                      "propertyNames": {
                        "pattern": "^[a-z]{2,3}(?:-[A-Za-z0-9]{2,8})*$"
                      },
                      "additionalProperties": {
                        "type": "string",
                        "maxLength": 5000
                      }
                    },
                    "active": {
                      "type": "boolean"
                    },
                    "position": {
                      "type": "integer",
                      "minimum": 0
                    }
                  },
                  "required": [
                    "name"
                  ]
                },
                "referenceId": {
                  "type": "integer",
                  "minimum": 1,
                  "maximum": 9007199254740991
                },
                "expectedRevision": {
                  "$ref": "#/$defs/Revision"
                }
              },
              "required": [
                "kind",
                "action",
                "fields",
                "referenceId",
                "expectedRevision"
              ]
            },
            {
              "type": "object",
              "additionalProperties": false,
              "properties": {
                "kind": {
                  "const": "category"
                },
                "action": {
                  "const": "create"
                },
                "fields": {
                  "type": "object",
                  "additionalProperties": false,
                  "properties": {
                    "name": {
                      "$ref": "#/$defs/LocalizedText"
                    },
                    "active": {
                      "type": "boolean"
                    }
                  },
                  "required": [
                    "name"
                  ]
                }
              },
              "required": [
                "kind",
                "action",
                "fields"
              ]
            },
            {
              "type": "object",
              "additionalProperties": false,
              "properties": {
                "kind": {
                  "const": "category"
                },
                "action": {
                  "const": "update"
                },
                "fields": {
                  "type": "object",
                  "additionalProperties": false,
                  "properties": {
                    "name": {
                      "$ref": "#/$defs/LocalizedText"
                    },
                    "active": {
                      "type": "boolean"
                    }
                  },
                  "required": [
                    "name"
                  ]
                },
                "referenceId": {
                  "$ref": "#/$defs/UUID"
                },
                "expectedRevision": {
                  "$ref": "#/$defs/Revision"
                }
              },
              "required": [
                "kind",
                "action",
                "fields",
                "referenceId",
                "expectedRevision"
              ]
            }
          ]
        }
      },
      "required": [
        "command",
        "reference"
      ],
      "x-inventory-effect": "commit_inventory_change",
      "x-inventory-financial": false,
      "x-inventory-role": "contributor",
      "x-inventory-scopes": [
        "site.inventory.write"
      ],
      "x-inventory-public-access-changed": false
    },
    "inventory_revoke_public_media": {
      "type": "object",
      "additionalProperties": false,
      "properties": {
        "command": {
          "const": "inventory_revoke_public_media"
        },
        "mediaId": {
          "type": "string",
          "format": "uuid"
        },
        "expectedRevision": {
          "type": "string",
          "pattern": "^[1-9][0-9]*$",
          "maxLength": 20
        },
        "reason": {
          "type": "string",
          "maxLength": 2000
        }
      },
      "required": [
        "command",
        "mediaId",
        "expectedRevision"
      ],
      "x-inventory-effect": "commit_inventory_change",
      "x-inventory-financial": false,
      "x-inventory-role": "contributor",
      "x-inventory-scopes": [
        "site.inventory.publish"
      ],
      "x-inventory-public-access-changed": true
    },
    "inventory_delete_media": {
      "type": "object",
      "additionalProperties": false,
      "properties": {
        "command": {
          "const": "inventory_delete_media"
        },
        "mediaId": {
          "type": "string",
          "format": "uuid"
        },
        "expectedRevision": {
          "type": "string",
          "pattern": "^[1-9][0-9]*$",
          "maxLength": 20
        }
      },
      "required": [
        "command",
        "mediaId",
        "expectedRevision"
      ],
      "x-inventory-effect": "commit_inventory_change",
      "x-inventory-financial": false,
      "x-inventory-role": "administrator",
      "x-inventory-scopes": [
        "site.inventory.write",
        "site.inventory.manage"
      ],
      "x-inventory-public-access-changed": false
    },
    "inventory_confirm_import": {
      "type": "object",
      "additionalProperties": false,
      "properties": {
        "command": {
          "const": "inventory_confirm_import"
        },
        "batchId": {
          "type": "string",
          "format": "uuid"
        },
        "expectedRevision": {
          "type": "string",
          "pattern": "^[1-9][0-9]*$",
          "maxLength": 20
        },
        "simulationDigest": {
          "type": "string",
          "pattern": "^[a-f0-9]{64}$"
        }
      },
      "required": [
        "command",
        "batchId",
        "expectedRevision",
        "simulationDigest"
      ],
      "x-inventory-effect": "commit_inventory_change",
      "x-inventory-financial": false,
      "x-inventory-role": "administrator",
      "x-inventory-scopes": [
        "site.inventory.write",
        "site.inventory.manage",
        "site.inventory.finance"
      ],
      "x-inventory-public-access-changed": false
    },
    "inventory_confirm_migration": {
      "type": "object",
      "additionalProperties": false,
      "properties": {
        "command": {
          "const": "inventory_confirm_migration"
        },
        "batchId": {
          "type": "string",
          "format": "uuid"
        },
        "expectedRevision": {
          "type": "string",
          "pattern": "^[1-9][0-9]*$",
          "maxLength": 20
        },
        "simulationDigest": {
          "type": "string",
          "pattern": "^[a-f0-9]{64}$"
        },
        "expectedSource": {
          "const": "artlogic"
        },
        "expectedSourceBindingRevision": {
          "$ref": "#/$defs/Revision"
        },
        "expectedFence": {
          "type": "string",
          "pattern": "^(0|[1-9][0-9]*)$",
          "maxLength": 20
        }
      },
      "required": [
        "command",
        "batchId",
        "expectedRevision",
        "simulationDigest",
        "expectedSource",
        "expectedSourceBindingRevision",
        "expectedFence"
      ],
      "x-inventory-effect": "commit_inventory_change",
      "x-inventory-financial": false,
      "x-inventory-role": "administrator",
      "x-inventory-scopes": [
        "site.inventory.write",
        "site.inventory.manage",
        "site.inventory.finance"
      ],
      "x-inventory-public-access-changed": false
    },
    "InventoryCommand": {
      "oneOf": [
        {
          "$ref": "#/$defs/inventory_create_work"
        },
        {
          "$ref": "#/$defs/inventory_replace_draft"
        },
        {
          "$ref": "#/$defs/inventory_publish_work"
        },
        {
          "$ref": "#/$defs/inventory_unpublish_work"
        },
        {
          "$ref": "#/$defs/inventory_archive_work"
        },
        {
          "$ref": "#/$defs/inventory_delete_work"
        },
        {
          "$ref": "#/$defs/inventory_create_unit"
        },
        {
          "$ref": "#/$defs/inventory_update_unit_logistics"
        },
        {
          "$ref": "#/$defs/inventory_archive_unit"
        },
        {
          "$ref": "#/$defs/inventory_reserve_unit"
        },
        {
          "$ref": "#/$defs/inventory_release_reservation"
        },
        {
          "$ref": "#/$defs/inventory_move_unit"
        },
        {
          "$ref": "#/$defs/inventory_loan_unit"
        },
        {
          "$ref": "#/$defs/inventory_return_loan"
        },
        {
          "$ref": "#/$defs/inventory_correct_logistics_operation"
        },
        {
          "$ref": "#/$defs/inventory_record_acquisition"
        },
        {
          "$ref": "#/$defs/inventory_record_expense"
        },
        {
          "$ref": "#/$defs/inventory_record_deposit"
        },
        {
          "$ref": "#/$defs/inventory_record_sale"
        },
        {
          "$ref": "#/$defs/inventory_prepare_document"
        },
        {
          "$ref": "#/$defs/inventory_replace_document_draft"
        },
        {
          "$ref": "#/$defs/inventory_issue_document"
        },
        {
          "$ref": "#/$defs/inventory_record_payment"
        },
        {
          "$ref": "#/$defs/inventory_record_refund"
        },
        {
          "$ref": "#/$defs/inventory_save_reference"
        },
        {
          "$ref": "#/$defs/inventory_revoke_public_media"
        },
        {
          "$ref": "#/$defs/inventory_delete_media"
        },
        {
          "$ref": "#/$defs/inventory_confirm_import"
        },
        {
          "$ref": "#/$defs/inventory_confirm_migration"
        },
        {
          "$ref": "#/$defs/inventory_replace_expense"
        },
        {
          "$ref": "#/$defs/inventory_reallocate_expense"
        },
        {
          "$ref": "#/$defs/inventory_correct_ledger_entry"
        },
        {
          "$ref": "#/$defs/inventory_cancel_financial_operation"
        },
        {
          "$ref": "#/$defs/inventory_update_deposit_terms"
        },
        {
          "$ref": "#/$defs/inventory_create_seller_profile"
        },
        {
          "$ref": "#/$defs/inventory_replace_seller_profile"
        },
        {
          "$ref": "#/$defs/inventory_qualify_seller_profile"
        },
        {
          "$ref": "#/$defs/inventory_create_tax_treatment"
        },
        {
          "$ref": "#/$defs/inventory_replace_tax_treatment"
        },
        {
          "$ref": "#/$defs/inventory_qualify_tax_treatment"
        },
        {
          "$ref": "#/$defs/inventory_create_document_series"
        },
        {
          "$ref": "#/$defs/inventory_deactivate_document_series"
        },
        {
          "$ref": "#/$defs/inventory_set_assignment"
        },
        {
          "$ref": "#/$defs/inventory_revoke_assignment"
        },
        {
          "$ref": "#/$defs/inventory_receive_sales_return"
        },
        {
          "$ref": "#/$defs/inventory_restock_returned_unit"
        },
        {
          "$ref": "#/$defs/inventory_record_owner_settlement"
        }
      ]
    },
    "inventory_replace_expense": {
      "type": "object",
      "additionalProperties": false,
      "properties": {
        "command": {
          "const": "inventory_replace_expense"
        },
        "expenseId": {
          "$ref": "#/$defs/UUID"
        },
        "expectedRevision": {
          "$ref": "#/$defs/Revision"
        },
        "category": {
          "type": "string",
          "enum": [
            "photo",
            "mounting",
            "restoration",
            "transport",
            "insurance",
            "other"
          ]
        },
        "date": {
          "anyOf": [
            {
              "type": "string",
              "format": "date"
            },
            {
              "type": "null"
            }
          ]
        },
        "total": {
          "anyOf": [
            {
              "$ref": "#/$defs/Money"
            },
            {
              "type": "null"
            }
          ]
        },
        "supplierId": {
          "anyOf": [
            {
              "type": "string",
              "format": "uuid"
            },
            {
              "type": "null"
            }
          ]
        },
        "allocations": {
          "type": "array",
          "maxItems": 1000,
          "items": {
            "$ref": "#/$defs/ExpenseAllocation"
          }
        },
        "evidenceIds": {
          "type": "array",
          "items": {
            "type": "string",
            "format": "uuid"
          }
        },
        "targetUnitIds": {
          "type": "array",
          "items": {
            "$ref": "#/$defs/UUID"
          },
          "uniqueItems": true,
          "maxItems": 1000
        }
      },
      "required": [
        "command",
        "expenseId",
        "expectedRevision",
        "category",
        "total",
        "allocations",
        "targetUnitIds"
      ],
      "x-inventory-effect": "commit_inventory_change",
      "x-inventory-financial": true,
      "x-inventory-role": "administrator",
      "x-inventory-scopes": [
        "site.inventory.write",
        "site.inventory.finance"
      ],
      "allOf": [
        {
          "if": {
            "properties": {
              "total": {
                "type": "null"
              }
            },
            "required": [
              "total"
            ]
          },
          "then": {
            "properties": {
              "allocations": {
                "maxItems": 0
              }
            }
          }
        }
      ],
      "x-inventory-public-access-changed": false
    },
    "inventory_reallocate_expense": {
      "type": "object",
      "additionalProperties": false,
      "properties": {
        "command": {
          "const": "inventory_reallocate_expense"
        },
        "expenseId": {
          "$ref": "#/$defs/UUID"
        },
        "expectedRevision": {
          "$ref": "#/$defs/Revision"
        },
        "allocations": {
          "type": "array",
          "maxItems": 1000,
          "items": {
            "$ref": "#/$defs/ExpenseAllocation"
          }
        },
        "reason": {
          "type": "string",
          "maxLength": 2000
        },
        "targetUnitIds": {
          "type": "array",
          "items": {
            "$ref": "#/$defs/UUID"
          },
          "uniqueItems": true,
          "maxItems": 1000
        }
      },
      "required": [
        "command",
        "expenseId",
        "expectedRevision",
        "allocations",
        "reason",
        "targetUnitIds"
      ],
      "x-inventory-effect": "commit_inventory_change",
      "x-inventory-financial": true,
      "x-inventory-role": "administrator",
      "x-inventory-scopes": [
        "site.inventory.write",
        "site.inventory.finance"
      ],
      "x-inventory-public-access-changed": false
    },
    "inventory_correct_ledger_entry": {
      "type": "object",
      "additionalProperties": false,
      "properties": {
        "command": {
          "const": "inventory_correct_ledger_entry"
        },
        "entryId": {
          "$ref": "#/$defs/UUID"
        },
        "expectedRevision": {
          "$ref": "#/$defs/Revision"
        },
        "reason": {
          "type": "string",
          "minLength": 1,
          "maxLength": 2000
        },
        "date": {
          "type": "string",
          "format": "date"
        }
      },
      "required": [
        "command",
        "entryId",
        "expectedRevision",
        "reason",
        "date"
      ],
      "x-inventory-effect": "commit_inventory_change",
      "x-inventory-financial": true,
      "x-inventory-role": "administrator",
      "x-inventory-scopes": [
        "site.inventory.write",
        "site.inventory.finance"
      ],
      "x-inventory-public-access-changed": false
    },
    "inventory_cancel_financial_operation": {
      "type": "object",
      "additionalProperties": false,
      "properties": {
        "command": {
          "const": "inventory_cancel_financial_operation"
        },
        "operationId": {
          "$ref": "#/$defs/UUID"
        },
        "expectedRevision": {
          "$ref": "#/$defs/Revision"
        },
        "reason": {
          "type": "string",
          "minLength": 1,
          "maxLength": 2000
        }
      },
      "required": [
        "command",
        "operationId",
        "expectedRevision",
        "reason"
      ],
      "x-inventory-effect": "commit_inventory_change",
      "x-inventory-financial": true,
      "x-inventory-role": "administrator",
      "x-inventory-scopes": [
        "site.inventory.write",
        "site.inventory.finance"
      ],
      "x-inventory-public-access-changed": false
    },
    "inventory_update_deposit_terms": {
      "type": "object",
      "additionalProperties": false,
      "properties": {
        "command": {
          "const": "inventory_update_deposit_terms"
        },
        "operationId": {
          "$ref": "#/$defs/UUID"
        },
        "expectedRevision": {
          "$ref": "#/$defs/Revision"
        },
        "terms": {
          "type": "object",
          "additionalProperties": false,
          "properties": {
            "commission": {
              "anyOf": [
                {
                  "$ref": "#/$defs/Money"
                },
                {
                  "type": "null"
                }
              ]
            },
            "insuranceValue": {
              "anyOf": [
                {
                  "$ref": "#/$defs/Money"
                },
                {
                  "type": "null"
                }
              ]
            },
            "text": {
              "type": "string",
              "maxLength": 20000
            },
            "documentIds": {
              "type": "array",
              "items": {
                "$ref": "#/$defs/UUID"
              },
              "uniqueItems": true
            },
            "commissionRate": {
              "anyOf": [
                {
                  "$ref": "#/$defs/Rate"
                },
                {
                  "type": "null"
                }
              ]
            }
          },
          "required": [],
          "minProperties": 1
        }
      },
      "required": [
        "command",
        "operationId",
        "expectedRevision",
        "terms"
      ],
      "x-inventory-effect": "commit_inventory_change",
      "x-inventory-financial": true,
      "x-inventory-role": "administrator",
      "x-inventory-scopes": [
        "site.inventory.write",
        "site.inventory.finance"
      ],
      "x-inventory-public-access-changed": false
    },
    "CreditLine": {
      "type": "object",
      "additionalProperties": false,
      "properties": {
        "originalLineId": {
          "$ref": "#/$defs/UUID"
        },
        "amount": {
          "$ref": "#/$defs/Money"
        },
        "reason": {
          "type": "string",
          "maxLength": 2000
        }
      },
      "required": [
        "originalLineId",
        "amount"
      ]
    },
    "SellerFiscalProfile": {
      "type": "object",
      "additionalProperties": false,
      "properties": {
        "legalName": {
          "type": "string",
          "minLength": 1,
          "maxLength": 500
        },
        "legalForm": {
          "anyOf": [
            {
              "type": "string",
              "maxLength": 200
            },
            {
              "type": "null"
            }
          ]
        },
        "capital": {
          "anyOf": [
            {
              "$ref": "#/$defs/Money"
            },
            {
              "type": "null"
            }
          ]
        },
        "country": {
          "type": "string",
          "pattern": "^[A-Z]{2}$"
        },
        "companyIdentifier": {
          "type": "string",
          "maxLength": 100
        },
        "registration": {
          "type": "string",
          "maxLength": 500
        },
        "vatIdentifier": {
          "anyOf": [
            {
              "type": "string",
              "maxLength": 100
            },
            {
              "type": "null"
            }
          ]
        },
        "billingAddress": {
          "type": "object",
          "additionalProperties": false,
          "properties": {
            "line1": {
              "type": "string",
              "maxLength": 500
            },
            "line2": {
              "anyOf": [
                {
                  "type": "string",
                  "maxLength": 500
                },
                {
                  "type": "null"
                }
              ]
            },
            "postalCode": {
              "type": "string",
              "maxLength": 100
            },
            "city": {
              "type": "string",
              "maxLength": 200
            },
            "country": {
              "type": "string",
              "pattern": "^[A-Z]{2}$"
            }
          },
          "required": [
            "line1",
            "city",
            "country"
          ]
        },
        "businessSize": {
          "type": "string",
          "enum": [
            "micro",
            "sme",
            "mid",
            "large",
            "other_qualified"
          ]
        },
        "vatStatus": {
          "type": "string",
          "enum": [
            "registered",
            "exempt",
            "other_qualified"
          ]
        },
        "electronicReceiptFrom": {
          "anyOf": [
            {
              "type": "string",
              "format": "date"
            },
            {
              "type": "null"
            }
          ]
        },
        "electronicIssueFrom": {
          "anyOf": [
            {
              "type": "string",
              "format": "date"
            },
            {
              "type": "null"
            }
          ]
        },
        "eReportingFrom": {
          "anyOf": [
            {
              "type": "string",
              "format": "date"
            },
            {
              "type": "null"
            }
          ]
        },
        "paymentTerms": {
          "type": "string",
          "maxLength": 10000
        },
        "retentionYears": {
          "type": "integer",
          "minimum": 10,
          "maximum": 100
        },
        "fiscalYearEnd": {
          "type": "string",
          "pattern": "^(0[1-9]|1[0-2])-(0[1-9]|[12][0-9]|3[01])$"
        },
        "invoiceChannelId": {
          "anyOf": [
            {
              "$ref": "#/$defs/UUID"
            },
            {
              "type": "null"
            }
          ]
        }
      },
      "required": [
        "legalName",
        "country",
        "billingAddress",
        "businessSize",
        "vatStatus",
        "paymentTerms",
        "retentionYears"
      ]
    },
    "inventory_create_seller_profile": {
      "type": "object",
      "additionalProperties": false,
      "properties": {
        "command": {
          "const": "inventory_create_seller_profile"
        },
        "profile": {
          "$ref": "#/$defs/SellerFiscalProfile"
        }
      },
      "required": [
        "command",
        "profile"
      ],
      "x-inventory-effect": "commit_inventory_change",
      "x-inventory-financial": true,
      "x-inventory-role": "administrator",
      "x-inventory-scopes": [
        "site.inventory.write",
        "site.inventory.finance",
        "site.inventory.manage"
      ],
      "x-inventory-public-access-changed": false
    },
    "inventory_replace_seller_profile": {
      "type": "object",
      "additionalProperties": false,
      "properties": {
        "command": {
          "const": "inventory_replace_seller_profile"
        },
        "expectedRevision": {
          "$ref": "#/$defs/Revision"
        },
        "profile": {
          "$ref": "#/$defs/SellerFiscalProfile"
        }
      },
      "required": [
        "command",
        "expectedRevision",
        "profile"
      ],
      "x-inventory-effect": "commit_inventory_change",
      "x-inventory-financial": true,
      "x-inventory-role": "administrator",
      "x-inventory-scopes": [
        "site.inventory.write",
        "site.inventory.finance",
        "site.inventory.manage"
      ],
      "x-inventory-public-access-changed": false
    },
    "inventory_qualify_seller_profile": {
      "type": "object",
      "additionalProperties": false,
      "properties": {
        "command": {
          "const": "inventory_qualify_seller_profile"
        },
        "expectedRevision": {
          "$ref": "#/$defs/Revision"
        },
        "validation": {
          "type": "object",
          "additionalProperties": false,
          "properties": {
            "evidenceIds": {
              "type": "array",
              "minItems": 1,
              "items": {
                "$ref": "#/$defs/UUID"
              },
              "uniqueItems": true
            },
            "scope": {
              "type": "string",
              "minLength": 1,
              "maxLength": 2000
            },
            "note": {
              "type": "string",
              "maxLength": 5000
            }
          },
          "required": [
            "evidenceIds",
            "scope"
          ]
        }
      },
      "required": [
        "command",
        "expectedRevision",
        "validation"
      ],
      "x-inventory-effect": "commit_inventory_change",
      "x-inventory-financial": true,
      "x-inventory-role": "administrator",
      "x-inventory-scopes": [
        "site.inventory.write",
        "site.inventory.finance",
        "site.inventory.manage"
      ],
      "x-inventory-public-access-changed": false
    },
    "TaxTreatment": {
      "type": "object",
      "additionalProperties": false,
      "properties": {
        "code": {
          "$ref": "#/$defs/Reference"
        },
        "name": {
          "$ref": "#/$defs/LocalizedText"
        },
        "basis": {
          "type": "string",
          "enum": [
            "standard",
            "margin",
            "exempt",
            "other_qualified"
          ]
        },
        "rate": {
          "type": "object",
          "additionalProperties": false,
          "properties": {
            "numerator": {
              "type": "string",
              "pattern": "^(0|[1-9][0-9]{0,8})$"
            },
            "denominator": {
              "type": "string",
              "pattern": "^[1-9][0-9]{0,8}$"
            }
          },
          "required": [
            "numerator",
            "denominator"
          ]
        },
        "validFrom": {
          "type": "string",
          "format": "date"
        },
        "validUntil": {
          "anyOf": [
            {
              "type": "string",
              "format": "date"
            },
            {
              "type": "null"
            }
          ]
        },
        "showVatRate": {
          "type": "boolean"
        },
        "showVatAmount": {
          "type": "boolean"
        },
        "legalMentions": {
          "$ref": "#/$defs/LocalizedText"
        },
        "countries": {
          "type": "array",
          "items": {
            "type": "string",
            "pattern": "^[A-Z]{2}$"
          }
        },
        "customerKinds": {
          "type": "array",
          "items": {
            "type": "string",
            "enum": [
              "professional",
              "private",
              "public_entity"
            ]
          }
        },
        "goodsClassifications": {
          "type": "array",
          "items": {
            "type": "string",
            "maxLength": 100
          }
        },
        "sellerRoles": {
          "type": "array",
          "items": {
            "type": "string",
            "enum": [
              "own_account",
              "consignment_principal",
              "agent"
            ]
          }
        },
        "requiredEvidence": {
          "type": "array",
          "items": {
            "type": "string",
            "maxLength": 200
          }
        }
      },
      "required": [
        "code",
        "name",
        "basis",
        "rate",
        "validFrom",
        "showVatRate",
        "showVatAmount",
        "legalMentions"
      ],
      "allOf": [
        {
          "if": {
            "properties": {
              "basis": {
                "const": "margin"
              }
            },
            "required": [
              "basis"
            ]
          },
          "then": {
            "properties": {
              "showVatRate": {
                "const": false
              },
              "showVatAmount": {
                "const": false
              }
            }
          }
        }
      ]
    },
    "inventory_create_tax_treatment": {
      "type": "object",
      "additionalProperties": false,
      "properties": {
        "command": {
          "const": "inventory_create_tax_treatment"
        },
        "treatment": {
          "$ref": "#/$defs/TaxTreatment"
        }
      },
      "required": [
        "command",
        "treatment"
      ],
      "x-inventory-effect": "commit_inventory_change",
      "x-inventory-financial": true,
      "x-inventory-role": "administrator",
      "x-inventory-scopes": [
        "site.inventory.write",
        "site.inventory.finance",
        "site.inventory.manage"
      ],
      "x-inventory-public-access-changed": false
    },
    "inventory_replace_tax_treatment": {
      "type": "object",
      "additionalProperties": false,
      "properties": {
        "command": {
          "const": "inventory_replace_tax_treatment"
        },
        "treatmentId": {
          "$ref": "#/$defs/UUID"
        },
        "expectedRevision": {
          "$ref": "#/$defs/Revision"
        },
        "treatment": {
          "$ref": "#/$defs/TaxTreatment"
        }
      },
      "required": [
        "command",
        "treatmentId",
        "expectedRevision",
        "treatment"
      ],
      "x-inventory-effect": "commit_inventory_change",
      "x-inventory-financial": true,
      "x-inventory-role": "administrator",
      "x-inventory-scopes": [
        "site.inventory.write",
        "site.inventory.finance",
        "site.inventory.manage"
      ],
      "x-inventory-public-access-changed": false
    },
    "inventory_qualify_tax_treatment": {
      "type": "object",
      "additionalProperties": false,
      "properties": {
        "command": {
          "const": "inventory_qualify_tax_treatment"
        },
        "treatmentId": {
          "$ref": "#/$defs/UUID"
        },
        "expectedRevision": {
          "$ref": "#/$defs/Revision"
        },
        "validation": {
          "type": "object",
          "additionalProperties": false,
          "properties": {
            "evidenceIds": {
              "type": "array",
              "minItems": 1,
              "items": {
                "$ref": "#/$defs/UUID"
              },
              "uniqueItems": true
            },
            "scope": {
              "type": "string",
              "minLength": 1,
              "maxLength": 2000
            },
            "note": {
              "type": "string",
              "maxLength": 5000
            }
          },
          "required": [
            "evidenceIds",
            "scope"
          ]
        }
      },
      "required": [
        "command",
        "treatmentId",
        "expectedRevision",
        "validation"
      ],
      "x-inventory-effect": "commit_inventory_change",
      "x-inventory-financial": true,
      "x-inventory-role": "administrator",
      "x-inventory-scopes": [
        "site.inventory.write",
        "site.inventory.finance",
        "site.inventory.manage"
      ],
      "x-inventory-public-access-changed": false
    },
    "inventory_create_document_series": {
      "type": "object",
      "additionalProperties": false,
      "properties": {
        "command": {
          "const": "inventory_create_document_series"
        },
        "series": {
          "type": "object",
          "additionalProperties": false,
          "properties": {
            "kind": {
              "type": "string",
              "enum": [
                "quote",
                "invoice",
                "credit_note"
              ]
            },
            "name": {
              "$ref": "#/$defs/Reference"
            },
            "prefix": {
              "type": "string",
              "minLength": 1,
              "maxLength": 32,
              "pattern": "^[A-Za-z0-9/_-]+$"
            },
            "fiscalYear": {
              "type": "integer",
              "minimum": 1900,
              "maximum": 2200
            },
            "legalEntityProfileId": {
              "$ref": "#/$defs/UUID"
            }
          },
          "required": [
            "kind",
            "name",
            "prefix",
            "legalEntityProfileId"
          ]
        }
      },
      "required": [
        "command",
        "series"
      ],
      "x-inventory-effect": "commit_inventory_change",
      "x-inventory-financial": true,
      "x-inventory-role": "administrator",
      "x-inventory-scopes": [
        "site.inventory.write",
        "site.inventory.finance",
        "site.inventory.manage"
      ],
      "x-inventory-public-access-changed": false
    },
    "inventory_deactivate_document_series": {
      "type": "object",
      "additionalProperties": false,
      "properties": {
        "command": {
          "const": "inventory_deactivate_document_series"
        },
        "seriesId": {
          "$ref": "#/$defs/UUID"
        },
        "expectedRevision": {
          "$ref": "#/$defs/Revision"
        }
      },
      "required": [
        "command",
        "seriesId",
        "expectedRevision"
      ],
      "x-inventory-effect": "commit_inventory_change",
      "x-inventory-financial": true,
      "x-inventory-role": "administrator",
      "x-inventory-scopes": [
        "site.inventory.write",
        "site.inventory.finance",
        "site.inventory.manage"
      ],
      "x-inventory-public-access-changed": false
    },
    "inventory_set_assignment": {
      "type": "object",
      "additionalProperties": false,
      "properties": {
        "command": {
          "const": "inventory_set_assignment"
        },
        "issuer": {
          "type": "string",
          "format": "uri"
        },
        "subject": {
          "type": "string",
          "minLength": 1,
          "maxLength": 500
        },
        "role": {
          "type": "string",
          "enum": [
            "administrator",
            "contributor"
          ]
        },
        "expectedAssignmentRevision": {
          "anyOf": [
            {
              "$ref": "#/$defs/Revision"
            },
            {
              "type": "null"
            }
          ]
        }
      },
      "required": [
        "command",
        "issuer",
        "subject",
        "role",
        "expectedAssignmentRevision"
      ],
      "x-inventory-effect": "commit_inventory_change",
      "x-inventory-financial": false,
      "x-inventory-role": "administrator",
      "x-inventory-scopes": [
        "site.inventory.write",
        "site.inventory.manage"
      ],
      "x-inventory-public-access-changed": false
    },
    "inventory_revoke_assignment": {
      "type": "object",
      "additionalProperties": false,
      "properties": {
        "command": {
          "const": "inventory_revoke_assignment"
        },
        "assignmentId": {
          "$ref": "#/$defs/UUID"
        },
        "expectedRevision": {
          "$ref": "#/$defs/Revision"
        },
        "reason": {
          "type": "string",
          "maxLength": 2000
        }
      },
      "required": [
        "command",
        "assignmentId",
        "expectedRevision",
        "reason"
      ],
      "x-inventory-effect": "commit_inventory_change",
      "x-inventory-financial": false,
      "x-inventory-role": "administrator",
      "x-inventory-scopes": [
        "site.inventory.write",
        "site.inventory.manage"
      ],
      "x-inventory-public-access-changed": false
    },
    "inventory_receive_sales_return": {
      "type": "object",
      "additionalProperties": false,
      "properties": {
        "command": {
          "const": "inventory_receive_sales_return"
        },
        "saleId": {
          "$ref": "#/$defs/UUID"
        },
        "unitId": {
          "$ref": "#/$defs/UUID"
        },
        "expectedRevision": {
          "$ref": "#/$defs/Revision"
        },
        "receivedAt": {
          "type": "string",
          "format": "date-time"
        },
        "locationId": {
          "anyOf": [
            {
              "$ref": "#/$defs/UUID"
            },
            {
              "type": "null"
            }
          ]
        },
        "conditionNotes": {
          "type": "string",
          "maxLength": 10000
        }
      },
      "required": [
        "command",
        "saleId",
        "unitId",
        "expectedRevision",
        "receivedAt"
      ],
      "x-inventory-effect": "commit_inventory_change",
      "x-inventory-financial": true,
      "x-inventory-role": "administrator",
      "x-inventory-scopes": [
        "site.inventory.write",
        "site.inventory.finance"
      ],
      "x-inventory-public-access-changed": false
    },
    "inventory_restock_returned_unit": {
      "type": "object",
      "additionalProperties": false,
      "properties": {
        "command": {
          "const": "inventory_restock_returned_unit"
        },
        "saleId": {
          "$ref": "#/$defs/UUID"
        },
        "unitId": {
          "$ref": "#/$defs/UUID"
        },
        "expectedRevision": {
          "$ref": "#/$defs/Revision"
        },
        "reason": {
          "type": "string",
          "minLength": 1,
          "maxLength": 2000
        }
      },
      "required": [
        "command",
        "saleId",
        "unitId",
        "expectedRevision",
        "reason"
      ],
      "x-inventory-effect": "commit_inventory_change",
      "x-inventory-financial": true,
      "x-inventory-role": "administrator",
      "x-inventory-scopes": [
        "site.inventory.write",
        "site.inventory.finance"
      ],
      "x-inventory-public-access-changed": false
    },
    "inventory_record_owner_settlement": {
      "type": "object",
      "additionalProperties": false,
      "properties": {
        "command": {
          "const": "inventory_record_owner_settlement"
        },
        "depositOperationId": {
          "$ref": "#/$defs/UUID"
        },
        "expectedRevision": {
          "$ref": "#/$defs/Revision"
        },
        "amount": {
          "$ref": "#/$defs/Money"
        },
        "direction": {
          "type": "string",
          "enum": [
            "pay_owner",
            "receive_owner"
          ]
        },
        "date": {
          "type": "string",
          "format": "date"
        },
        "method": {
          "type": "string",
          "enum": [
            "bank_transfer",
            "cash",
            "card_external",
            "cheque",
            "other"
          ]
        },
        "reference": {
          "type": "string",
          "maxLength": 500
        }
      },
      "required": [
        "command",
        "depositOperationId",
        "expectedRevision",
        "amount",
        "direction",
        "date",
        "method",
        "reference"
      ],
      "x-inventory-effect": "commit_inventory_change",
      "x-inventory-financial": true,
      "x-inventory-role": "administrator",
      "x-inventory-scopes": [
        "site.inventory.write",
        "site.inventory.finance"
      ],
      "x-inventory-public-access-changed": false
    },
    "Rate": {
      "type": "object",
      "additionalProperties": false,
      "properties": {
        "numerator": {
          "type": "string",
          "pattern": "^(0|[1-9][0-9]{0,8})$"
        },
        "denominator": {
          "type": "string",
          "pattern": "^[1-9][0-9]{0,8}$"
        }
      },
      "required": [
        "numerator",
        "denominator"
      ]
    },
    "InventoryResourceRef": {
      "oneOf": [
        {
          "type": "object",
          "additionalProperties": false,
          "properties": {
            "kind": {
              "type": "string",
              "enum": [
                "artwork",
                "unit",
                "artist",
                "origin",
                "party",
                "location",
                "logistics_operation",
                "sale",
                "document",
                "import_batch",
                "tax_treatment",
                "document_series",
                "ledger_entry",
                "expense",
                "deposit",
                "assignment",
                "category",
                "media"
              ]
            },
            "id": {
              "$ref": "#/$defs/UUID"
            }
          },
          "required": [
            "kind",
            "id"
          ]
        },
        {
          "type": "object",
          "additionalProperties": false,
          "properties": {
            "kind": {
              "const": "type"
            },
            "id": {
              "type": "integer",
              "minimum": 1,
              "maximum": 9007199254740991
            }
          },
          "required": [
            "kind",
            "id"
          ]
        },
        {
          "type": "object",
          "additionalProperties": false,
          "properties": {
            "kind": {
              "const": "fiscal_profile"
            },
            "id": {
              "const": "current"
            }
          },
          "required": [
            "kind",
            "id"
          ]
        }
      ]
    },
    "ReadInventoryInput": {
      "type": "object",
      "additionalProperties": false,
      "properties": {
        "resource": {
          "$ref": "#/$defs/InventoryResourceRef"
        },
        "projection": {
          "type": "string",
          "enum": [
            "editorial",
            "logistics",
            "private_notes",
            "finance",
            "management"
          ],
          "description": "Projection explicite compatible avec la ressource. Finance nécessite administrator et le scope finance ; private_notes est réservé à artwork et reste hors du snapshot public."
        },
        "after": {
          "type": "integer",
          "minimum": 0,
          "maximum": 25000,
          "description": "Import batch rows only."
        },
        "limit": {
          "type": "integer",
          "minimum": 1,
          "maximum": 100,
          "description": "Import batch rows only; default 20."
        }
      },
      "required": [
        "resource"
      ]
    },
    "FindInventoryInput": {
      "type": "object",
      "additionalProperties": false,
      "properties": {
        "kind": {
          "type": "string",
          "enum": [
            "artwork",
            "unit",
            "artist",
            "origin",
            "party",
            "location",
            "logistics_operation",
            "sale",
            "document",
            "import_batch",
            "tax_treatment",
            "document_series",
            "ledger_entry",
            "expense",
            "deposit",
            "assignment",
            "type",
            "category",
            "media"
          ]
        },
        "filters": {
          "type": "object",
          "additionalProperties": false,
          "properties": {
            "query": {
              "type": "string",
              "minLength": 1,
              "maxLength": 500
            },
            "publication": {
              "type": "string",
              "enum": [
                "hidden",
                "published"
              ]
            },
            "commercialState": {
              "type": "string",
              "enum": [
                "unqualified",
                "available",
                "reserved",
                "sold"
              ]
            },
            "custodyState": {
              "type": "string",
              "enum": [
                "unknown",
                "held",
                "loaned_out",
                "deposited_out",
                "returned_to_owner"
              ]
            },
            "artworkId": {
              "$ref": "#/$defs/UUID"
            },
            "artistId": {
              "$ref": "#/$defs/UUID"
            },
            "originId": {
              "$ref": "#/$defs/UUID"
            },
            "ownerId": {
              "$ref": "#/$defs/UUID"
            },
            "locationId": {
              "$ref": "#/$defs/UUID"
            },
            "typeIds": {
              "type": "array",
              "maxItems": 100,
              "items": {
                "type": "integer",
                "minimum": 1,
                "maximum": 9007199254740991
              }
            },
            "fromDate": {
              "type": "string",
              "format": "date"
            },
            "toDate": {
              "type": "string",
              "format": "date"
            },
            "categoryIds": {
              "type": "array",
              "items": {
                "$ref": "#/$defs/UUID"
              },
              "uniqueItems": true,
              "maxItems": 1000
            },
            "unitId": {
              "$ref": "#/$defs/UUID"
            },
            "partyId": {
              "$ref": "#/$defs/UUID"
            },
            "operationStatus": {
              "type": "string",
              "enum": [
                "draft",
                "active",
                "completed",
                "cancelled"
              ]
            },
            "includeArchived": {
              "type": "boolean"
            },
            "ids": {
              "type": "array",
              "maxItems": 100,
              "minItems": 1,
              "uniqueItems": true,
              "items": {
                "$ref": "#/$defs/UUID"
              }
            },
            "documentId": {
              "$ref": "#/$defs/UUID"
            },
            "depositOperationId": {
              "$ref": "#/$defs/UUID"
            }
          },
          "required": []
        },
        "limit": {
          "type": "integer",
          "minimum": 1,
          "maximum": 100
        },
        "cursor": {
          "type": "string",
          "minLength": 1,
          "maxLength": 4096
        }
      },
      "required": [
        "kind"
      ]
    },
    "InventoryClientFile": {
      "type": "object",
      "additionalProperties": false,
      "properties": {
        "download_url": {
          "type": "string",
          "format": "uri",
          "maxLength": 4096
        },
        "file_id": {
          "type": "string",
          "minLength": 1,
          "maxLength": 500
        },
        "mime_type": {
          "type": "string",
          "minLength": 1,
          "maxLength": 200
        },
        "file_name": {
          "type": "string",
          "minLength": 1,
          "maxLength": 500
        }
      },
      "required": [
        "download_url",
        "file_id",
        "mime_type",
        "file_name"
      ]
    },
    "PrepareInventoryImportInput": {
      "type": "object",
      "additionalProperties": false,
      "properties": {
        "importKey": {
          "type": "string",
          "minLength": 1,
          "maxLength": 128
        },
        "catalogFile": {
          "type": "object",
          "additionalProperties": false,
          "properties": {
            "download_url": {
              "type": "string",
              "format": "uri",
              "maxLength": 4096
            },
            "file_id": {
              "type": "string",
              "minLength": 1,
              "maxLength": 500
            },
            "mime_type": {
              "type": "string",
              "minLength": 1,
              "maxLength": 200
            },
            "file_name": {
              "type": "string",
              "minLength": 1,
              "maxLength": 500
            }
          },
          "required": [
            "download_url",
            "file_id",
            "mime_type",
            "file_name"
          ]
        },
        "imagesZip": {
          "type": "object",
          "additionalProperties": false,
          "properties": {
            "download_url": {
              "type": "string",
              "format": "uri",
              "maxLength": 4096
            },
            "file_id": {
              "type": "string",
              "minLength": 1,
              "maxLength": 500
            },
            "mime_type": {
              "type": "string",
              "minLength": 1,
              "maxLength": 200
            },
            "file_name": {
              "type": "string",
              "minLength": 1,
              "maxLength": 500
            }
          },
          "required": [
            "download_url",
            "file_id",
            "mime_type",
            "file_name"
          ]
        },
        "delimiter": {
          "type": "string",
          "enum": [
            "comma",
            "semicolon"
          ]
        },
        "mapping": {
          "type": "array",
          "maxItems": 500,
          "items": {
            "type": "object",
            "additionalProperties": false,
            "properties": {
              "sourceColumn": {
                "type": "string",
                "minLength": 1,
                "maxLength": 200
              },
              "targetField": {
                "type": "string",
                "enum": [
                  "row_type",
                  "work_ref",
                  "copy_ref",
                  "action",
                  "record_kind",
                  "title",
                  "description",
                  "provenance",
                  "artist_ref",
                  "origin_ref",
                  "type_id",
                  "year",
                  "medium",
                  "file_path",
                  "media_ref",
                  "position",
                  "primary",
                  "visibility",
                  "alt",
                  "caption",
                  "credit",
                  "owner_ref",
                  "location_ref",
                  "edition_number",
                  "commercial_state",
                  "custody_state",
                  "acquisition_kind",
                  "acquisition_date",
                  "acquisition_amount_minor",
                  "tax_purchase_price_minor",
                  "currency",
                  "scale",
                  "cost_ref",
                  "category",
                  "date",
                  "total_minor",
                  "allocated_minor",
                  "supplier_ref",
                  "party_ref",
                  "name",
                  "roles",
                  "kind",
                  "culture",
                  "country",
                  "region",
                  "period",
                  "biography",
                  "clear_fields",
                  "category_ref",
                  "category_refs",
                  "active",
                  "ignore",
                  "association",
                  "materials",
                  "technique",
                  "condition",
                  "bibliography",
                  "exhibitions",
                  "inscriptions",
                  "email",
                  "phone",
                  "address",
                  "dates",
                  "nationalities"
                ]
              },
              "locale": {
                "type": "string",
                "pattern": "^[a-z]{2,3}(?:-[A-Za-z0-9]{2,8})*$"
              }
            },
            "required": [
              "sourceColumn",
              "targetField"
            ]
          }
        },
        "mode": {
          "type": "string",
          "enum": [
            "create",
            "update",
            "mixed_explicit"
          ]
        }
      },
      "required": [
        "importKey",
        "catalogFile",
        "delimiter",
        "mapping"
      ]
    },
    "ImportInventoryPhotoInput": {
      "type": "object",
      "additionalProperties": false,
      "properties": {
        "importKey": {
          "type": "string",
          "minLength": 1,
          "maxLength": 128
        },
        "file": {
          "type": "object",
          "additionalProperties": false,
          "properties": {
            "download_url": {
              "type": "string",
              "format": "uri",
              "maxLength": 4096
            },
            "file_id": {
              "type": "string",
              "minLength": 1,
              "maxLength": 500
            },
            "mime_type": {
              "type": "string",
              "minLength": 1,
              "maxLength": 200
            },
            "file_name": {
              "type": "string",
              "minLength": 1,
              "maxLength": 500
            }
          },
          "required": [
            "download_url",
            "file_id",
            "mime_type",
            "file_name"
          ]
        }
      },
      "required": [
        "importKey",
        "file"
      ]
    },
    "InventoryUploadAttemptInput": {
      "type": "object",
      "additionalProperties": false,
      "properties": {
        "uploadKey": {
          "type": "string",
          "minLength": 1,
          "maxLength": 128
        },
        "fileName": {
          "type": "string",
          "minLength": 1,
          "maxLength": 500
        },
        "mimeType": {
          "type": "string",
          "enum": [
            "image/jpeg",
            "image/png",
            "image/webp"
          ]
        },
        "bytes": {
          "type": "integer",
          "minimum": 1,
          "maximum": 26214400
        },
        "sha256": {
          "type": "string",
          "pattern": "^[a-f0-9]{64}$"
        }
      },
      "required": [
        "uploadKey",
        "fileName",
        "mimeType",
        "bytes"
      ]
    },
    "InventoryAttachmentUploadInput": {
      "type": "object",
      "additionalProperties": false,
      "properties": {
        "uploadKey": {
          "type": "string",
          "minLength": 1,
          "maxLength": 128
        },
        "fileName": {
          "type": "string",
          "minLength": 1,
          "maxLength": 500
        },
        "mimeType": {
          "type": "string",
          "enum": [
            "image/jpeg",
            "image/png",
            "image/webp",
            "application/pdf"
          ]
        },
        "bytes": {
          "type": "integer",
          "minimum": 1,
          "maximum": 26214400
        },
        "classification": {
          "type": "string",
          "enum": [
            "financial_document",
            "non_financial_document"
          ]
        },
        "sha256": {
          "type": "string",
          "pattern": "^[a-f0-9]{64}$"
        }
      },
      "required": [
        "uploadKey",
        "fileName",
        "mimeType",
        "bytes",
        "classification"
      ]
    },
    "ImportInventoryAttachmentInput": {
      "type": "object",
      "additionalProperties": false,
      "properties": {
        "importKey": {
          "type": "string",
          "minLength": 1,
          "maxLength": 128
        },
        "file": {
          "$ref": "#/$defs/InventoryClientFile"
        },
        "classification": {
          "type": "string",
          "enum": [
            "financial_document",
            "non_financial_document"
          ]
        }
      },
      "required": [
        "importKey",
        "file",
        "classification"
      ]
    },
    "Acquisition": {
      "type": "object",
      "additionalProperties": false,
      "properties": {
        "acquisitionId": {
          "$ref": "#/$defs/UUID"
        },
        "operationId": {
          "$ref": "#/$defs/UUID"
        },
        "unitId": {
          "$ref": "#/$defs/UUID"
        },
        "kind": {
          "enum": [
            "purchase",
            "creation"
          ]
        },
        "amount": {
          "anyOf": [
            {
              "$ref": "#/$defs/Money"
            },
            {
              "type": "null"
            }
          ]
        },
        "date": {
          "type": [
            "string",
            "null"
          ],
          "format": "date"
        },
        "partyId": {
          "anyOf": [
            {
              "$ref": "#/$defs/UUID"
            },
            {
              "type": "null"
            }
          ]
        },
        "ownerId": {
          "anyOf": [
            {
              "$ref": "#/$defs/UUID"
            },
            {
              "type": "null"
            }
          ]
        },
        "taxPurchasePrice": {
          "anyOf": [
            {
              "$ref": "#/$defs/Money"
            },
            {
              "type": "null"
            }
          ]
        },
        "qualificationEvidenceIds": {
          "type": "array",
          "items": {
            "$ref": "#/$defs/UUID"
          }
        },
        "revision": {
          "$ref": "#/$defs/Revision"
        },
        "status": {
          "enum": [
            "draft",
            "active",
            "completed",
            "cancelled"
          ]
        }
      },
      "required": [
        "acquisitionId",
        "operationId",
        "unitId",
        "kind",
        "amount",
        "date",
        "partyId",
        "ownerId",
        "taxPurchasePrice",
        "qualificationEvidenceIds",
        "revision",
        "status"
      ]
    },
    "Expense": {
      "type": "object",
      "additionalProperties": false,
      "properties": {
        "expenseId": {
          "$ref": "#/$defs/UUID"
        },
        "expenseRef": {
          "$ref": "#/$defs/Reference"
        },
        "category": {
          "enum": [
            "photo",
            "mounting",
            "restoration",
            "transport",
            "insurance",
            "other"
          ]
        },
        "date": {
          "anyOf": [
            {
              "type": "string",
              "format": "date"
            },
            {
              "type": "null"
            }
          ]
        },
        "total": {
          "anyOf": [
            {
              "$ref": "#/$defs/Money"
            },
            {
              "type": "null"
            }
          ]
        },
        "supplierId": {
          "anyOf": [
            {
              "$ref": "#/$defs/UUID"
            },
            {
              "type": "null"
            }
          ]
        },
        "targetUnitIds": {
          "type": "array",
          "items": {
            "$ref": "#/$defs/UUID"
          }
        },
        "allocations": {
          "type": "array",
          "items": {
            "$ref": "#/$defs/ExpenseAllocation"
          }
        },
        "evidenceIds": {
          "type": "array",
          "items": {
            "$ref": "#/$defs/UUID"
          }
        },
        "revision": {
          "$ref": "#/$defs/Revision"
        },
        "operationId": {
          "$ref": "#/$defs/UUID"
        },
        "status": {
          "enum": [
            "draft",
            "active",
            "completed",
            "cancelled"
          ]
        },
        "allocated": {
          "anyOf": [
            {
              "$ref": "#/$defs/Money"
            },
            {
              "type": "null"
            }
          ]
        },
        "remainder": {
          "anyOf": [
            {
              "$ref": "#/$defs/Money"
            },
            {
              "type": "null"
            }
          ]
        }
      },
      "required": [
        "expenseId",
        "expenseRef",
        "category",
        "date",
        "total",
        "supplierId",
        "targetUnitIds",
        "allocations",
        "evidenceIds",
        "revision"
      ]
    },
    "UnitFinance": {
      "type": "object",
      "additionalProperties": false,
      "properties": {
        "unitId": {
          "$ref": "#/$defs/UUID"
        },
        "revision": {
          "$ref": "#/$defs/Revision"
        },
        "costComplete": {
          "type": "boolean"
        },
        "totals": {
          "type": "array",
          "items": {
            "$ref": "#/$defs/Money"
          }
        },
        "expenses": {
          "type": "array",
          "items": {
            "$ref": "#/$defs/Expense"
          }
        },
        "acquisitions": {
          "type": "array",
          "items": {
            "$ref": "#/$defs/Acquisition"
          }
        }
      },
      "required": [
        "unitId",
        "revision",
        "costComplete",
        "totals",
        "expenses"
      ]
    },
    "LogisticsOperation": {
      "type": "object",
      "additionalProperties": false,
      "properties": {
        "operationId": {
          "$ref": "#/$defs/UUID"
        },
        "kind": {
          "enum": [
            "reservation",
            "movement",
            "loan",
            "return",
            "deposit_in",
            "deposit_out",
            "correction"
          ]
        },
        "unitIds": {
          "type": "array",
          "items": {
            "$ref": "#/$defs/UUID"
          }
        },
        "partyId": {
          "anyOf": [
            {
              "$ref": "#/$defs/UUID"
            },
            {
              "type": "null"
            }
          ]
        },
        "fromLocationId": {
          "anyOf": [
            {
              "$ref": "#/$defs/UUID"
            },
            {
              "type": "null"
            }
          ]
        },
        "toLocationId": {
          "anyOf": [
            {
              "$ref": "#/$defs/UUID"
            },
            {
              "type": "null"
            }
          ]
        },
        "status": {
          "enum": [
            "draft",
            "active",
            "completed",
            "cancelled"
          ]
        },
        "occurredAt": {
          "type": "string",
          "format": "date-time"
        },
        "expectedReturnAt": {
          "anyOf": [
            {
              "type": "string",
              "format": "date-time"
            },
            {
              "type": "null"
            }
          ]
        },
        "notes": {
          "anyOf": [
            {
              "type": "string"
            },
            {
              "type": "null"
            }
          ]
        },
        "revision": {
          "$ref": "#/$defs/Revision"
        },
        "relatedOperationId": {
          "anyOf": [
            {
              "$ref": "#/$defs/UUID"
            },
            {
              "type": "null"
            }
          ]
        },
        "cancelledByOperationId": {
          "anyOf": [
            {
              "$ref": "#/$defs/UUID"
            },
            {
              "type": "null"
            }
          ]
        }
      },
      "required": [
        "operationId",
        "kind",
        "unitIds",
        "partyId",
        "fromLocationId",
        "toLocationId",
        "status",
        "occurredAt",
        "expectedReturnAt",
        "notes",
        "revision"
      ]
    },
    "StockDocumentLine": {
      "type": "object",
      "additionalProperties": false,
      "properties": {
        "unitId": {
          "$ref": "#/$defs/UUID"
        },
        "description": {
          "type": "object",
          "minProperties": 1,
          "maxProperties": 8,
          "propertyNames": {
            "pattern": "^[a-z]{2,3}(?:-[A-Za-z0-9]{2,8})*$"
          },
          "additionalProperties": {
            "type": "string",
            "maxLength": 5000
          }
        },
        "quantity": {
          "type": "integer",
          "const": 1
        },
        "unitPrice": {
          "$ref": "#/$defs/Money"
        },
        "priceMode": {
          "type": "string",
          "enum": [
            "net",
            "gross"
          ]
        },
        "discount": {
          "anyOf": [
            {
              "$ref": "#/$defs/Money"
            },
            {
              "type": "null"
            }
          ]
        },
        "taxTreatmentId": {
          "type": "string",
          "format": "uuid"
        }
      },
      "required": [
        "description",
        "quantity",
        "unitPrice",
        "priceMode",
        "taxTreatmentId",
        "unitId"
      ]
    },
    "ChargeDocumentLine": {
      "type": "object",
      "additionalProperties": false,
      "properties": {
        "unitId": {
          "type": "null"
        },
        "description": {
          "type": "object",
          "minProperties": 1,
          "maxProperties": 8,
          "propertyNames": {
            "pattern": "^[a-z]{2,3}(?:-[A-Za-z0-9]{2,8})*$"
          },
          "additionalProperties": {
            "type": "string",
            "maxLength": 5000
          }
        },
        "quantity": {
          "type": "integer",
          "minimum": 1,
          "maximum": 10000
        },
        "unitPrice": {
          "$ref": "#/$defs/Money"
        },
        "priceMode": {
          "type": "string",
          "enum": [
            "net",
            "gross"
          ]
        },
        "discount": {
          "anyOf": [
            {
              "$ref": "#/$defs/Money"
            },
            {
              "type": "null"
            }
          ]
        },
        "taxTreatmentId": {
          "type": "string",
          "format": "uuid"
        }
      },
      "required": [
        "description",
        "quantity",
        "unitPrice",
        "priceMode",
        "taxTreatmentId"
      ]
    }
  }
} as const;
export const inventorySourceDigest="9314465ea39a2a8998def06d3dcb5f8e978b75d150fb2c3200dc6224706cbf08";
