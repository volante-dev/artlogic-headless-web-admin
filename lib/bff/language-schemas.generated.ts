// Generated from feature038. Independent of all legacy contract fingerprints.
export const languageSchemas={
  "Revision": {
    "type": "string",
    "pattern": "^[1-9][0-9]{0,18}$"
  },
  "LocaleCode": {
    "type": "string",
    "pattern": "^[a-z]{2,3}(?:-[a-z0-9]{2,8})*$",
    "maxLength": 35
  },
  "Digest": {
    "type": "string",
    "pattern": "^[a-f0-9]{64}$"
  },
  "PublicLanguage": {
    "type": "object",
    "additionalProperties": false,
    "properties": {
      "code": {
        "type": "string",
        "pattern": "^[a-z]{2,3}(?:-[a-z0-9]{2,8})*$",
        "maxLength": 35
      },
      "intlLocale": {
        "type": "string",
        "maxLength": 35
      },
      "label": {
        "type": "string",
        "minLength": 1,
        "maxLength": 80
      },
      "direction": {
        "type": "string",
        "enum": [
          "ltr"
        ]
      }
    },
    "required": [
      "code",
      "intlLocale",
      "label",
      "direction"
    ]
  },
  "PublicPolicy": {
    "type": "object",
    "additionalProperties": false,
    "properties": {
      "contractVersion": {
        "type": "integer",
        "const": 1
      },
      "siteId": {
        "type": "string",
        "format": "uuid"
      },
      "mode": {
        "type": "string",
        "enum": [
          "bootstrap",
          "managed"
        ]
      },
      "publicRevision": {
        "type": "string",
        "pattern": "^[1-9][0-9]{0,18}$"
      },
      "defaultLocale": {
        "type": "string",
        "pattern": "^[a-z]{2,3}(?:-[a-z0-9]{2,8})*$",
        "maxLength": 35
      },
      "locales": {
        "type": "array",
        "items": {
          "$ref": "#/$defs/Lc930bf0efb5201b3fc169083"
        },
        "maxItems": 8,
        "minItems": 1
      },
      "retiredCodes": {
        "type": "array",
        "items": {
          "type": "string",
          "pattern": "^[a-z]{2,3}(?:-[a-z0-9]{2,8})*$",
          "maxLength": 35
        }
      },
      "catalogueId": {
        "type": "string",
        "minLength": 1,
        "maxLength": 160
      },
      "issuedAt": {
        "type": "string",
        "format": "date-time"
      },
      "validUntil": {
        "type": "string",
        "format": "date-time"
      }
    },
    "required": [
      "contractVersion",
      "siteId",
      "mode",
      "publicRevision",
      "defaultLocale",
      "locales",
      "retiredCodes",
      "catalogueId",
      "issuedAt",
      "validUntil"
    ],
    "$defs": {
      "Lc930bf0efb5201b3fc169083": {
        "type": "object",
        "additionalProperties": false,
        "properties": {
          "code": {
            "type": "string",
            "pattern": "^[a-z]{2,3}(?:-[a-z0-9]{2,8})*$",
            "maxLength": 35
          },
          "intlLocale": {
            "type": "string",
            "maxLength": 35
          },
          "label": {
            "type": "string",
            "minLength": 1,
            "maxLength": 80
          },
          "direction": {
            "type": "string",
            "enum": [
              "ltr"
            ]
          }
        },
        "required": [
          "code",
          "intlLocale",
          "label",
          "direction"
        ]
      }
    }
  },
  "Logo": {
    "type": "object",
    "additionalProperties": false,
    "properties": {
      "id": {
        "type": "string",
        "format": "uuid"
      },
      "width": {
        "type": "integer",
        "minimum": 1
      },
      "height": {
        "type": "integer",
        "minimum": 1
      },
      "byteSize": {
        "type": "integer",
        "minimum": 1
      },
      "mimeType": {
        "type": "string",
        "enum": [
          "image/webp"
        ]
      }
    },
    "required": [
      "id",
      "width",
      "height",
      "byteSize",
      "mimeType"
    ]
  },
  "RuntimeContent": {
    "type": "object",
    "additionalProperties": false,
    "properties": {
      "contractVersion": {
        "type": "integer",
        "const": 1
      },
      "contentRevision": {
        "type": "string",
        "pattern": "^[1-9][0-9]{0,18}$"
      },
      "locale": {
        "type": "string",
        "pattern": "^[a-z]{2,3}(?:-[a-z0-9]{2,8})*$",
        "maxLength": 35
      },
      "policy": {
        "$ref": "#/$defs/L86b16b620b19895d98662d9d"
      },
      "messages": {
        "type": "object",
        "maxProperties": 5000,
        "additionalProperties": {
          "type": "string",
          "maxLength": 20000
        }
      },
      "logo": {
        "anyOf": [
          {
            "$ref": "#/$defs/L1c70fdf6ece3d8c2a9b37403"
          },
          {
            "type": "null"
          }
        ]
      },
      "whiteLogo": {
        "anyOf": [
          {
            "$ref": "#/$defs/L1c70fdf6ece3d8c2a9b37403"
          },
          {
            "type": "null"
          }
        ]
      },
      "legalPage": {
        "anyOf": [
          {
            "$ref": "#/$defs/L8c56f85cd5762622f3610933"
          },
          {
            "type": "null"
          }
        ]
      },
      "selectedCatalogueId": {
        "type": "string",
        "minLength": 1,
        "maxLength": 160
      }
    },
    "required": [
      "contractVersion",
      "contentRevision",
      "locale",
      "policy",
      "messages",
      "logo",
      "whiteLogo",
      "legalPage",
      "selectedCatalogueId"
    ],
    "description": "Runtime profile only. No new properties or message keys are injected into the legacy SiteContentPublic contract.",
    "$defs": {
      "L1c70fdf6ece3d8c2a9b37403": {
        "type": "object",
        "additionalProperties": false,
        "properties": {
          "id": {
            "type": "string",
            "format": "uuid"
          },
          "width": {
            "type": "integer",
            "minimum": 1
          },
          "height": {
            "type": "integer",
            "minimum": 1
          },
          "byteSize": {
            "type": "integer",
            "minimum": 1
          },
          "mimeType": {
            "type": "string",
            "enum": [
              "image/webp"
            ]
          }
        },
        "required": [
          "id",
          "width",
          "height",
          "byteSize",
          "mimeType"
        ]
      },
      "L224f209b9c4018c1dcfdb81e": {
        "type": "object",
        "additionalProperties": false,
        "properties": {
          "type": {
            "const": "doc"
          },
          "content": {
            "type": "array",
            "items": {
              "$ref": "#/$defs/Lc3b184bffa7e5fdc29c6e6c5"
            },
            "maxItems": 10000
          }
        },
        "required": [
          "type",
          "content"
        ]
      },
      "L86b16b620b19895d98662d9d": {
        "type": "object",
        "additionalProperties": false,
        "properties": {
          "contractVersion": {
            "type": "integer",
            "const": 1
          },
          "siteId": {
            "type": "string",
            "format": "uuid"
          },
          "mode": {
            "type": "string",
            "enum": [
              "bootstrap",
              "managed"
            ]
          },
          "publicRevision": {
            "type": "string",
            "pattern": "^[1-9][0-9]{0,18}$"
          },
          "defaultLocale": {
            "type": "string",
            "pattern": "^[a-z]{2,3}(?:-[a-z0-9]{2,8})*$",
            "maxLength": 35
          },
          "locales": {
            "type": "array",
            "items": {
              "$ref": "#/$defs/Lc930bf0efb5201b3fc169083"
            },
            "maxItems": 8,
            "minItems": 1
          },
          "retiredCodes": {
            "type": "array",
            "items": {
              "type": "string",
              "pattern": "^[a-z]{2,3}(?:-[a-z0-9]{2,8})*$",
              "maxLength": 35
            }
          },
          "catalogueId": {
            "type": "string",
            "minLength": 1,
            "maxLength": 160
          },
          "issuedAt": {
            "type": "string",
            "format": "date-time"
          },
          "validUntil": {
            "type": "string",
            "format": "date-time"
          }
        },
        "required": [
          "contractVersion",
          "siteId",
          "mode",
          "publicRevision",
          "defaultLocale",
          "locales",
          "retiredCodes",
          "catalogueId",
          "issuedAt",
          "validUntil"
        ]
      },
      "L8c56f85cd5762622f3610933": {
        "type": "object",
        "additionalProperties": false,
        "properties": {
          "title": {
            "type": "string",
            "minLength": 1,
            "maxLength": 160
          },
          "body": {
            "$ref": "#/$defs/L224f209b9c4018c1dcfdb81e"
          },
          "locale": {
            "type": "string",
            "pattern": "^[a-z]{2,3}(?:-[a-z0-9]{2,8})*$",
            "maxLength": 35
          }
        },
        "required": [
          "title",
          "body",
          "locale"
        ]
      },
      "La091aba45f3b19a703a51a0b": {
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
      "Lc3b184bffa7e5fdc29c6e6c5": {
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
                  "$ref": "#/$defs/La091aba45f3b19a703a51a0b"
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
                  "$ref": "#/$defs/Lc3b184bffa7e5fdc29c6e6c5"
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
                  "$ref": "#/$defs/Lc3b184bffa7e5fdc29c6e6c5"
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
      "Lc930bf0efb5201b3fc169083": {
        "type": "object",
        "additionalProperties": false,
        "properties": {
          "code": {
            "type": "string",
            "pattern": "^[a-z]{2,3}(?:-[a-z0-9]{2,8})*$",
            "maxLength": 35
          },
          "intlLocale": {
            "type": "string",
            "maxLength": 35
          },
          "label": {
            "type": "string",
            "minLength": 1,
            "maxLength": 80
          },
          "direction": {
            "type": "string",
            "enum": [
              "ltr"
            ]
          }
        },
        "required": [
          "code",
          "intlLocale",
          "label",
          "direction"
        ]
      }
    }
  },
  "Reason": {
    "type": "object",
    "additionalProperties": false,
    "properties": {
      "code": {
        "type": "string",
        "maxLength": 80
      },
      "message": {
        "type": "string",
        "maxLength": 500
      },
      "field": {
        "type": "string",
        "maxLength": 200
      }
    },
    "required": [
      "code",
      "message"
    ]
  },
  "Capabilities": {
    "type": "object",
    "additionalProperties": false,
    "properties": {
      "contractVersion": {
        "type": "integer",
        "const": 1
      },
      "enabled": {
        "type": "boolean"
      },
      "mode": {
        "type": "string",
        "enum": [
          "dormant",
          "managed"
        ]
      },
      "canManage": {
        "type": "boolean"
      },
      "canTranslate": {
        "type": "boolean"
      },
      "maxLiveLanguages": {
        "type": "integer",
        "const": 8
      },
      "reasons": {
        "type": "array",
        "items": {
          "$ref": "#/$defs/La5d434e8764b588ed2bd69e5"
        },
        "maxItems": 64
      }
    },
    "required": [
      "contractVersion",
      "enabled",
      "mode",
      "canManage",
      "canTranslate",
      "maxLiveLanguages",
      "reasons"
    ],
    "$defs": {
      "La5d434e8764b588ed2bd69e5": {
        "type": "object",
        "additionalProperties": false,
        "properties": {
          "code": {
            "type": "string",
            "maxLength": 80
          },
          "message": {
            "type": "string",
            "maxLength": 500
          },
          "field": {
            "type": "string",
            "maxLength": 200
          }
        },
        "required": [
          "code",
          "message"
        ]
      }
    }
  },
  "Language": {
    "type": "object",
    "additionalProperties": false,
    "properties": {
      "id": {
        "type": "string",
        "format": "uuid"
      },
      "code": {
        "type": "string",
        "pattern": "^[a-z]{2,3}(?:-[a-z0-9]{2,8})*$",
        "maxLength": 35
      },
      "intlLocale": {
        "type": "string",
        "maxLength": 35
      },
      "label": {
        "type": "string",
        "minLength": 1,
        "maxLength": 80
      },
      "state": {
        "type": "string",
        "enum": [
          "preparing",
          "active",
          "disabled"
        ]
      },
      "isDefault": {
        "type": "boolean"
      },
      "position": {
        "type": "integer",
        "minimum": 0
      },
      "everPublic": {
        "type": "boolean"
      },
      "supportStatus": {
        "type": "string",
        "enum": [
          "supported",
          "restricted"
        ]
      },
      "restrictions": {
        "type": "array",
        "items": {
          "$ref": "#/$defs/La5d434e8764b588ed2bd69e5"
        },
        "maxItems": 64
      }
    },
    "required": [
      "id",
      "code",
      "intlLocale",
      "label",
      "state",
      "isDefault",
      "position",
      "everPublic",
      "supportStatus",
      "restrictions"
    ],
    "$defs": {
      "La5d434e8764b588ed2bd69e5": {
        "type": "object",
        "additionalProperties": false,
        "properties": {
          "code": {
            "type": "string",
            "maxLength": 80
          },
          "message": {
            "type": "string",
            "maxLength": 500
          },
          "field": {
            "type": "string",
            "maxLength": 200
          }
        },
        "required": [
          "code",
          "message"
        ]
      }
    }
  },
  "AdminPolicy": {
    "type": "object",
    "additionalProperties": false,
    "properties": {
      "siteId": {
        "type": "string",
        "format": "uuid"
      },
      "revision": {
        "type": "string",
        "pattern": "^[1-9][0-9]{0,18}$"
      },
      "publicRevision": {
        "type": "string",
        "pattern": "^[1-9][0-9]{0,18}$"
      },
      "defaultLocale": {
        "type": "string",
        "pattern": "^[a-z]{2,3}(?:-[a-z0-9]{2,8})*$",
        "maxLength": 35
      },
      "mode": {
        "type": "string",
        "enum": [
          "bootstrap",
          "managed"
        ]
      },
      "languages": {
        "type": "array",
        "items": {
          "$ref": "#/$defs/Ld827de283a55e53bca34368c"
        },
        "minItems": 1
      },
      "updatedAt": {
        "type": "string",
        "format": "date-time"
      }
    },
    "required": [
      "siteId",
      "revision",
      "publicRevision",
      "defaultLocale",
      "mode",
      "languages",
      "updatedAt"
    ],
    "$defs": {
      "La5d434e8764b588ed2bd69e5": {
        "type": "object",
        "additionalProperties": false,
        "properties": {
          "code": {
            "type": "string",
            "maxLength": 80
          },
          "message": {
            "type": "string",
            "maxLength": 500
          },
          "field": {
            "type": "string",
            "maxLength": 200
          }
        },
        "required": [
          "code",
          "message"
        ]
      },
      "Ld827de283a55e53bca34368c": {
        "type": "object",
        "additionalProperties": false,
        "properties": {
          "id": {
            "type": "string",
            "format": "uuid"
          },
          "code": {
            "type": "string",
            "pattern": "^[a-z]{2,3}(?:-[a-z0-9]{2,8})*$",
            "maxLength": 35
          },
          "intlLocale": {
            "type": "string",
            "maxLength": 35
          },
          "label": {
            "type": "string",
            "minLength": 1,
            "maxLength": 80
          },
          "state": {
            "type": "string",
            "enum": [
              "preparing",
              "active",
              "disabled"
            ]
          },
          "isDefault": {
            "type": "boolean"
          },
          "position": {
            "type": "integer",
            "minimum": 0
          },
          "everPublic": {
            "type": "boolean"
          },
          "supportStatus": {
            "type": "string",
            "enum": [
              "supported",
              "restricted"
            ]
          },
          "restrictions": {
            "type": "array",
            "items": {
              "$ref": "#/$defs/La5d434e8764b588ed2bd69e5"
            },
            "maxItems": 64
          }
        },
        "required": [
          "id",
          "code",
          "intlLocale",
          "label",
          "state",
          "isDefault",
          "position",
          "everPublic",
          "supportStatus",
          "restrictions"
        ]
      }
    }
  },
  "CreateLanguage": {
    "type": "object",
    "additionalProperties": false,
    "properties": {
      "code": {
        "type": "string",
        "pattern": "^[a-z]{2,3}(?:-[a-z0-9]{2,8})*$",
        "maxLength": 35
      },
      "label": {
        "type": "string",
        "minLength": 1,
        "maxLength": 80
      }
    },
    "required": [
      "code",
      "label"
    ]
  },
  "PatchPolicy": {
    "type": "object",
    "additionalProperties": false,
    "properties": {
      "labels": {
        "type": "array",
        "items": {
          "type": "object",
          "additionalProperties": false,
          "properties": {
            "languageId": {
              "type": "string",
              "format": "uuid"
            },
            "label": {
              "type": "string",
              "minLength": 1,
              "maxLength": 80
            }
          },
          "required": [
            "languageId",
            "label"
          ]
        },
        "maxItems": 64
      },
      "orderedLanguageIds": {
        "type": "array",
        "items": {
          "type": "string",
          "format": "uuid"
        },
        "maxItems": 8
      }
    },
    "required": []
  },
  "Source": {
    "type": "object",
    "additionalProperties": false,
    "properties": {
      "targetId": {
        "type": "string",
        "format": "uuid"
      },
      "family": {
        "type": "string",
        "enum": [
          "interface",
          "legal_site",
          "presentation",
          "artwork",
          "team",
          "editorial",
          "taxonomy",
          "form",
          "commerce_product",
          "delivery",
          "commerce_legal",
          "link_in_bio",
          "notification"
        ]
      },
      "ownerId": {
        "type": "string",
        "minLength": 1,
        "maxLength": 160
      },
      "namespace": {
        "type": "string",
        "maxLength": 100
      },
      "scope": {
        "type": "string",
        "enum": [
          "public",
          "scheduled",
          "draft"
        ]
      },
      "sourceVersionId": {
        "type": "string",
        "minLength": 1,
        "maxLength": 160
      },
      "sourceDigest": {
        "type": "string",
        "pattern": "^[a-f0-9]{64}$"
      },
      "descriptorVersion": {
        "type": "string",
        "pattern": "^[1-9][0-9]{0,18}$"
      },
      "correctionPath": {
        "type": "string",
        "pattern": "^/(?!/)[^\\r\\n]*$",
        "maxLength": 2048
      },
      "publicationMode": {
        "type": "string",
        "enum": [
          "immediate",
          "explicit",
          "external_legal"
        ]
      }
    },
    "required": [
      "targetId",
      "family",
      "ownerId",
      "scope",
      "sourceVersionId",
      "sourceDigest",
      "descriptorVersion",
      "correctionPath",
      "publicationMode"
    ]
  },
  "TargetPage": {
    "type": "object",
    "additionalProperties": false,
    "properties": {
      "items": {
        "type": "array",
        "items": {
          "$ref": "#/$defs/L4fdd9c7fd80a4c4b2bb68bbe"
        },
        "maxItems": 100
      },
      "nextCursor": {
        "type": [
          "string",
          "null"
        ],
        "maxLength": 4096
      }
    },
    "required": [
      "items",
      "nextCursor"
    ],
    "$defs": {
      "L4fdd9c7fd80a4c4b2bb68bbe": {
        "type": "object",
        "additionalProperties": false,
        "properties": {
          "targetId": {
            "type": "string",
            "format": "uuid"
          },
          "family": {
            "type": "string",
            "enum": [
              "interface",
              "legal_site",
              "presentation",
              "artwork",
              "team",
              "editorial",
              "taxonomy",
              "form",
              "commerce_product",
              "delivery",
              "commerce_legal",
              "link_in_bio",
              "notification"
            ]
          },
          "ownerId": {
            "type": "string",
            "minLength": 1,
            "maxLength": 160
          },
          "namespace": {
            "type": "string",
            "maxLength": 100
          },
          "scope": {
            "type": "string",
            "enum": [
              "public",
              "scheduled",
              "draft"
            ]
          },
          "sourceVersionId": {
            "type": "string",
            "minLength": 1,
            "maxLength": 160
          },
          "sourceDigest": {
            "type": "string",
            "pattern": "^[a-f0-9]{64}$"
          },
          "descriptorVersion": {
            "type": "string",
            "pattern": "^[1-9][0-9]{0,18}$"
          },
          "correctionPath": {
            "type": "string",
            "pattern": "^/(?!/)[^\\r\\n]*$",
            "maxLength": 2048
          },
          "publicationMode": {
            "type": "string",
            "enum": [
              "immediate",
              "explicit",
              "external_legal"
            ]
          }
        },
        "required": [
          "targetId",
          "family",
          "ownerId",
          "scope",
          "sourceVersionId",
          "sourceDigest",
          "descriptorVersion",
          "correctionPath",
          "publicationMode"
        ]
      }
    }
  },
  "Field": {
    "type": "object",
    "additionalProperties": false,
    "properties": {
      "fieldId": {
        "type": "string",
        "minLength": 1,
        "maxLength": 160
      },
      "kind": {
        "type": "string",
        "enum": [
          "plain",
          "slug",
          "rich_text",
          "message"
        ]
      },
      "label": {
        "type": "string",
        "maxLength": 200
      },
      "required": {
        "type": "boolean"
      },
      "fallbackAllowed": {
        "type": "boolean"
      },
      "maxLength": {
        "type": "integer",
        "minimum": 1
      },
      "referenceValue": {
        "anyOf": [
          {
            "type": "string",
            "maxLength": 100000
          },
          {
            "type": "null"
          },
          {
            "$ref": "#/$defs/Ld80b5448acfac763a5f1aa0a"
          },
          {
            "$ref": "#/$defs/L4a8194985b02dc4add1a35fb"
          }
        ],
        "description": "Only the value kind authorized by the server-owned field descriptor; native rich-text schema and semantic sanitizer remain mandatory."
      },
      "value": {
        "anyOf": [
          {
            "type": "string",
            "maxLength": 100000
          },
          {
            "type": "null"
          },
          {
            "$ref": "#/$defs/Ld80b5448acfac763a5f1aa0a"
          },
          {
            "$ref": "#/$defs/L4a8194985b02dc4add1a35fb"
          }
        ],
        "description": "Only the value kind authorized by the server-owned field descriptor; native rich-text schema and semantic sanitizer remain mandatory."
      },
      "lengthUnit": {
        "type": "string",
        "enum": [
          "unicode",
          "utf16"
        ],
        "description": "Optional native length unit. Absent means Unicode code points; utf16 preserves validators based on JavaScript string length."
      }
    },
    "required": [
      "fieldId",
      "kind",
      "label",
      "required",
      "fallbackAllowed",
      "referenceValue",
      "value"
    ],
    "$defs": {
      "L278ee13fb67ca112c729bb7a": {
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
      "L3942e16f085f5ba91a3b9171": {
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
                  "$ref": "#/$defs/L4906b6e034cbef132f95c157"
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
                  "$ref": "#/$defs/L3942e16f085f5ba91a3b9171"
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
                  "$ref": "#/$defs/L3942e16f085f5ba91a3b9171"
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
      "L4906b6e034cbef132f95c157": {
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
      "L4a8194985b02dc4add1a35fb": {
        "type": "object",
        "additionalProperties": false,
        "properties": {
          "type": {
            "const": "doc"
          },
          "content": {
            "type": "array",
            "items": {
              "$ref": "#/$defs/L3942e16f085f5ba91a3b9171"
            },
            "maxItems": 10000
          }
        },
        "required": [
          "type",
          "content"
        ]
      },
      "Ld4f7a5911742edb5b29565cc": {
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
                  "$ref": "#/$defs/L278ee13fb67ca112c729bb7a"
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
                  "$ref": "#/$defs/Ld4f7a5911742edb5b29565cc"
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
                  "$ref": "#/$defs/Ld4f7a5911742edb5b29565cc"
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
      "Ld80b5448acfac763a5f1aa0a": {
        "type": "object",
        "additionalProperties": false,
        "properties": {
          "type": {
            "const": "doc"
          },
          "content": {
            "type": "array",
            "items": {
              "$ref": "#/$defs/Ld4f7a5911742edb5b29565cc"
            },
            "maxItems": 10000
          }
        },
        "required": [
          "type",
          "content"
        ]
      }
    }
  },
  "WorkspaceReceipt": {
    "type": "object",
    "additionalProperties": false,
    "required": [
      "id",
      "revision",
      "state"
    ],
    "properties": {
      "id": {
        "type": "string",
        "format": "uuid"
      },
      "revision": {
        "$ref": "#/$defs/L01463977cf9c734f224f8dff"
      },
      "state": {
        "type": "string",
        "enum": [
          "editing",
          "approved",
          "stale",
          "source_missing"
        ]
      }
    },
    "$defs": {
      "L01463977cf9c734f224f8dff": {
        "type": "string",
        "pattern": "^[1-9][0-9]{0,18}$"
      }
    }
  },
  "Workspace": {
    "type": "object",
    "additionalProperties": false,
    "properties": {
      "id": {
        "type": "string",
        "format": "uuid"
      },
      "languageId": {
        "type": "string",
        "format": "uuid"
      },
      "revision": {
        "type": "string",
        "pattern": "^[1-9][0-9]{0,18}$"
      },
      "source": {
        "$ref": "#/$defs/L4fdd9c7fd80a4c4b2bb68bbe"
      },
      "rebaseFieldIds": {
        "type": "array",
        "maxItems": 10000,
        "uniqueItems": true,
        "items": {
          "type": "string",
          "minLength": 1,
          "maxLength": 160
        }
      },
      "currentSource": {
        "$ref": "#/$defs/L4fdd9c7fd80a4c4b2bb68bbe"
      },
      "state": {
        "type": "string",
        "enum": [
          "editing",
          "approved",
          "stale",
          "source_missing"
        ]
      },
      "fields": {
        "type": "array",
        "items": {
          "$ref": "#/$defs/L64debc8686329d306e41569c"
        }
      },
      "updatedAt": {
        "type": "string",
        "format": "date-time"
      }
    },
    "required": [
      "id",
      "languageId",
      "revision",
      "source",
      "state",
      "fields",
      "updatedAt"
    ],
    "$defs": {
      "L278ee13fb67ca112c729bb7a": {
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
      "L3942e16f085f5ba91a3b9171": {
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
                  "$ref": "#/$defs/L4906b6e034cbef132f95c157"
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
                  "$ref": "#/$defs/L3942e16f085f5ba91a3b9171"
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
                  "$ref": "#/$defs/L3942e16f085f5ba91a3b9171"
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
      "L4906b6e034cbef132f95c157": {
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
      "L4a8194985b02dc4add1a35fb": {
        "type": "object",
        "additionalProperties": false,
        "properties": {
          "type": {
            "const": "doc"
          },
          "content": {
            "type": "array",
            "items": {
              "$ref": "#/$defs/L3942e16f085f5ba91a3b9171"
            },
            "maxItems": 10000
          }
        },
        "required": [
          "type",
          "content"
        ]
      },
      "L4fdd9c7fd80a4c4b2bb68bbe": {
        "type": "object",
        "additionalProperties": false,
        "properties": {
          "targetId": {
            "type": "string",
            "format": "uuid"
          },
          "family": {
            "type": "string",
            "enum": [
              "interface",
              "legal_site",
              "presentation",
              "artwork",
              "team",
              "editorial",
              "taxonomy",
              "form",
              "commerce_product",
              "delivery",
              "commerce_legal",
              "link_in_bio",
              "notification"
            ]
          },
          "ownerId": {
            "type": "string",
            "minLength": 1,
            "maxLength": 160
          },
          "namespace": {
            "type": "string",
            "maxLength": 100
          },
          "scope": {
            "type": "string",
            "enum": [
              "public",
              "scheduled",
              "draft"
            ]
          },
          "sourceVersionId": {
            "type": "string",
            "minLength": 1,
            "maxLength": 160
          },
          "sourceDigest": {
            "type": "string",
            "pattern": "^[a-f0-9]{64}$"
          },
          "descriptorVersion": {
            "type": "string",
            "pattern": "^[1-9][0-9]{0,18}$"
          },
          "correctionPath": {
            "type": "string",
            "pattern": "^/(?!/)[^\\r\\n]*$",
            "maxLength": 2048
          },
          "publicationMode": {
            "type": "string",
            "enum": [
              "immediate",
              "explicit",
              "external_legal"
            ]
          }
        },
        "required": [
          "targetId",
          "family",
          "ownerId",
          "scope",
          "sourceVersionId",
          "sourceDigest",
          "descriptorVersion",
          "correctionPath",
          "publicationMode"
        ]
      },
      "L64debc8686329d306e41569c": {
        "type": "object",
        "additionalProperties": false,
        "properties": {
          "fieldId": {
            "type": "string",
            "minLength": 1,
            "maxLength": 160
          },
          "kind": {
            "type": "string",
            "enum": [
              "plain",
              "slug",
              "rich_text",
              "message"
            ]
          },
          "label": {
            "type": "string",
            "maxLength": 200
          },
          "required": {
            "type": "boolean"
          },
          "fallbackAllowed": {
            "type": "boolean"
          },
          "maxLength": {
            "type": "integer",
            "minimum": 1
          },
          "referenceValue": {
            "anyOf": [
              {
                "type": "string",
                "maxLength": 100000
              },
              {
                "type": "null"
              },
              {
                "$ref": "#/$defs/Ld80b5448acfac763a5f1aa0a"
              },
              {
                "$ref": "#/$defs/L4a8194985b02dc4add1a35fb"
              }
            ],
            "description": "Only the value kind authorized by the server-owned field descriptor; native rich-text schema and semantic sanitizer remain mandatory."
          },
          "value": {
            "anyOf": [
              {
                "type": "string",
                "maxLength": 100000
              },
              {
                "type": "null"
              },
              {
                "$ref": "#/$defs/Ld80b5448acfac763a5f1aa0a"
              },
              {
                "$ref": "#/$defs/L4a8194985b02dc4add1a35fb"
              }
            ],
            "description": "Only the value kind authorized by the server-owned field descriptor; native rich-text schema and semantic sanitizer remain mandatory."
          },
          "lengthUnit": {
            "type": "string",
            "enum": [
              "unicode",
              "utf16"
            ],
            "description": "Optional native length unit. Absent means Unicode code points; utf16 preserves validators based on JavaScript string length."
          }
        },
        "required": [
          "fieldId",
          "kind",
          "label",
          "required",
          "fallbackAllowed",
          "referenceValue",
          "value"
        ]
      },
      "Ld4f7a5911742edb5b29565cc": {
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
                  "$ref": "#/$defs/L278ee13fb67ca112c729bb7a"
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
                  "$ref": "#/$defs/Ld4f7a5911742edb5b29565cc"
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
                  "$ref": "#/$defs/Ld4f7a5911742edb5b29565cc"
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
      "Ld80b5448acfac763a5f1aa0a": {
        "type": "object",
        "additionalProperties": false,
        "properties": {
          "type": {
            "const": "doc"
          },
          "content": {
            "type": "array",
            "items": {
              "$ref": "#/$defs/Ld4f7a5911742edb5b29565cc"
            },
            "maxItems": 10000
          }
        },
        "required": [
          "type",
          "content"
        ]
      }
    }
  },
  "WorkspaceCreate": {
    "type": "object",
    "additionalProperties": false,
    "properties": {
      "targetId": {
        "type": "string",
        "format": "uuid"
      }
    },
    "required": [
      "targetId"
    ]
  },
  "WorkspacePatch": {
    "type": "object",
    "additionalProperties": false,
    "properties": {
      "values": {
        "type": "array",
        "items": {
          "type": "object",
          "additionalProperties": false,
          "properties": {
            "fieldId": {
              "type": "string",
              "minLength": 1,
              "maxLength": 160
            },
            "value": {
              "anyOf": [
                {
                  "type": "string",
                  "maxLength": 100000
                },
                {
                  "type": "null"
                },
                {
                  "$ref": "#/$defs/Ld80b5448acfac763a5f1aa0a"
                },
                {
                  "$ref": "#/$defs/L4a8194985b02dc4add1a35fb"
                }
              ],
              "description": "Only the value kind authorized by the server-owned field descriptor; native rich-text schema and semantic sanitizer remain mandatory."
            }
          },
          "required": [
            "fieldId",
            "value"
          ]
        },
        "maxItems": 64
      }
    },
    "required": [
      "values"
    ],
    "$defs": {
      "L278ee13fb67ca112c729bb7a": {
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
      "L3942e16f085f5ba91a3b9171": {
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
                  "$ref": "#/$defs/L4906b6e034cbef132f95c157"
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
                  "$ref": "#/$defs/L3942e16f085f5ba91a3b9171"
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
                  "$ref": "#/$defs/L3942e16f085f5ba91a3b9171"
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
      "L4906b6e034cbef132f95c157": {
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
      "L4a8194985b02dc4add1a35fb": {
        "type": "object",
        "additionalProperties": false,
        "properties": {
          "type": {
            "const": "doc"
          },
          "content": {
            "type": "array",
            "items": {
              "$ref": "#/$defs/L3942e16f085f5ba91a3b9171"
            },
            "maxItems": 10000
          }
        },
        "required": [
          "type",
          "content"
        ]
      },
      "Ld4f7a5911742edb5b29565cc": {
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
                  "$ref": "#/$defs/L278ee13fb67ca112c729bb7a"
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
                  "$ref": "#/$defs/Ld4f7a5911742edb5b29565cc"
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
                  "$ref": "#/$defs/Ld4f7a5911742edb5b29565cc"
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
      "Ld80b5448acfac763a5f1aa0a": {
        "type": "object",
        "additionalProperties": false,
        "properties": {
          "type": {
            "const": "doc"
          },
          "content": {
            "type": "array",
            "items": {
              "$ref": "#/$defs/Ld4f7a5911742edb5b29565cc"
            },
            "maxItems": 10000
          }
        },
        "required": [
          "type",
          "content"
        ]
      }
    }
  },
  "WorkspaceRebase": {
    "type": "object",
    "additionalProperties": false,
    "properties": {
      "targetId": {
        "type": "string",
        "format": "uuid"
      },
      "selectedFieldIds": {
        "type": "array",
        "items": {
          "type": "string",
          "minLength": 1,
          "maxLength": 160
        },
        "maxItems": 10000
      }
    },
    "required": [
      "targetId",
      "selectedFieldIds"
    ]
  },
  "Counts": {
    "type": "object",
    "additionalProperties": false,
    "properties": {
      "expected": {
        "type": "integer",
        "minimum": 0
      },
      "complete": {
        "type": "integer",
        "minimum": 0
      },
      "missing": {
        "type": "integer",
        "minimum": 0
      },
      "fallback": {
        "type": "integer",
        "minimum": 0
      },
      "warnings": {
        "type": "integer",
        "minimum": 0
      }
    },
    "required": [
      "expected",
      "complete",
      "missing",
      "fallback",
      "warnings"
    ]
  },
  "FamilyCounts": {
    "type": "object",
    "additionalProperties": false,
    "properties": {
      "family": {
        "type": "string",
        "enum": [
          "interface",
          "legal_site",
          "presentation",
          "artwork",
          "team",
          "editorial",
          "taxonomy",
          "form",
          "commerce_product",
          "delivery",
          "commerce_legal",
          "link_in_bio",
          "notification"
        ]
      },
      "counts": {
        "$ref": "#/$defs/L78c881b5e934f60f62beaa05"
      }
    },
    "required": [
      "family",
      "counts"
    ],
    "$defs": {
      "L78c881b5e934f60f62beaa05": {
        "type": "object",
        "additionalProperties": false,
        "properties": {
          "expected": {
            "type": "integer",
            "minimum": 0
          },
          "complete": {
            "type": "integer",
            "minimum": 0
          },
          "missing": {
            "type": "integer",
            "minimum": 0
          },
          "fallback": {
            "type": "integer",
            "minimum": 0
          },
          "warnings": {
            "type": "integer",
            "minimum": 0
          }
        },
        "required": [
          "expected",
          "complete",
          "missing",
          "fallback",
          "warnings"
        ]
      }
    }
  },
  "CheckInput": {
    "type": "object",
    "additionalProperties": false,
    "properties": {
      "scope": {
        "type": "string",
        "enum": [
          "activation",
          "edition_update"
        ]
      },
      "workspaceIds": {
        "type": "array",
        "items": {
          "type": "string",
          "format": "uuid"
        },
        "maxItems": 10000
      }
    },
    "required": [
      "scope"
    ]
  },
  "Check": {
    "type": "object",
    "additionalProperties": false,
    "properties": {
      "id": {
        "type": "string",
        "format": "uuid"
      },
      "revision": {
        "type": "string",
        "pattern": "^[1-9][0-9]{0,18}$"
      },
      "languageId": {
        "type": "string",
        "format": "uuid"
      },
      "scope": {
        "type": "string",
        "enum": [
          "activation",
          "edition_update"
        ]
      },
      "state": {
        "type": "string",
        "enum": [
          "queued",
          "running",
          "complete",
          "obsolete",
          "failed"
        ]
      },
      "policyRevision": {
        "type": "string",
        "pattern": "^[1-9][0-9]{0,18}$"
      },
      "sourceRevision": {
        "type": "string",
        "pattern": "^[1-9][0-9]{0,18}$"
      },
      "counts": {
        "$ref": "#/$defs/L78c881b5e934f60f62beaa05"
      },
      "families": {
        "type": "array",
        "items": {
          "$ref": "#/$defs/L349f414d9026d9e509edaa46"
        },
        "maxItems": 13
      },
      "scannedTargets": {
        "type": "integer",
        "minimum": 0
      },
      "totalTargets": {
        "type": "integer",
        "minimum": 0
      },
      "digest": {
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
      "expiresAt": {
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
      "updatedAt": {
        "type": "string",
        "format": "date-time"
      },
      "reasons": {
        "type": "array",
        "items": {
          "$ref": "#/$defs/La5d434e8764b588ed2bd69e5"
        },
        "maxItems": 64
      }
    },
    "required": [
      "id",
      "revision",
      "languageId",
      "scope",
      "state",
      "policyRevision",
      "sourceRevision",
      "counts",
      "families",
      "scannedTargets",
      "totalTargets",
      "digest",
      "expiresAt",
      "updatedAt",
      "reasons"
    ],
    "$defs": {
      "L349f414d9026d9e509edaa46": {
        "type": "object",
        "additionalProperties": false,
        "properties": {
          "family": {
            "type": "string",
            "enum": [
              "interface",
              "legal_site",
              "presentation",
              "artwork",
              "team",
              "editorial",
              "taxonomy",
              "form",
              "commerce_product",
              "delivery",
              "commerce_legal",
              "link_in_bio",
              "notification"
            ]
          },
          "counts": {
            "$ref": "#/$defs/L78c881b5e934f60f62beaa05"
          }
        },
        "required": [
          "family",
          "counts"
        ]
      },
      "L78c881b5e934f60f62beaa05": {
        "type": "object",
        "additionalProperties": false,
        "properties": {
          "expected": {
            "type": "integer",
            "minimum": 0
          },
          "complete": {
            "type": "integer",
            "minimum": 0
          },
          "missing": {
            "type": "integer",
            "minimum": 0
          },
          "fallback": {
            "type": "integer",
            "minimum": 0
          },
          "warnings": {
            "type": "integer",
            "minimum": 0
          }
        },
        "required": [
          "expected",
          "complete",
          "missing",
          "fallback",
          "warnings"
        ]
      },
      "La5d434e8764b588ed2bd69e5": {
        "type": "object",
        "additionalProperties": false,
        "properties": {
          "code": {
            "type": "string",
            "maxLength": 80
          },
          "message": {
            "type": "string",
            "maxLength": 500
          },
          "field": {
            "type": "string",
            "maxLength": 200
          }
        },
        "required": [
          "code",
          "message"
        ]
      }
    }
  },
  "Issue": {
    "type": "object",
    "additionalProperties": false,
    "properties": {
      "id": {
        "type": "string",
        "format": "uuid"
      },
      "languageId": {
        "type": "string",
        "format": "uuid"
      },
      "family": {
        "type": "string",
        "enum": [
          "interface",
          "legal_site",
          "presentation",
          "artwork",
          "team",
          "editorial",
          "taxonomy",
          "form",
          "commerce_product",
          "delivery",
          "commerce_legal",
          "link_in_bio",
          "notification"
        ]
      },
      "ownerId": {
        "type": "string",
        "minLength": 1,
        "maxLength": 160
      },
      "sourceVersionId": {
        "type": "string",
        "minLength": 1,
        "maxLength": 160
      },
      "fieldId": {
        "type": "string",
        "minLength": 1,
        "maxLength": 160
      },
      "severity": {
        "type": "string",
        "enum": [
          "blocking",
          "warning",
          "fallback"
        ]
      },
      "reason": {
        "type": "string",
        "maxLength": 100
      },
      "correctionPath": {
        "type": "string",
        "pattern": "^/(?!/)[^\\r\\n]*$",
        "maxLength": 2048
      }
    },
    "required": [
      "id",
      "languageId",
      "family",
      "ownerId",
      "sourceVersionId",
      "fieldId",
      "severity",
      "reason"
    ]
  },
  "IssuePage": {
    "type": "object",
    "additionalProperties": false,
    "properties": {
      "items": {
        "type": "array",
        "items": {
          "$ref": "#/$defs/L9d74dc9c4a8881e4f8c8514d"
        },
        "maxItems": 100
      },
      "total": {
        "type": "integer",
        "minimum": 0
      },
      "nextCursor": {
        "type": [
          "string",
          "null"
        ],
        "maxLength": 4096
      }
    },
    "required": [
      "items",
      "total",
      "nextCursor"
    ],
    "$defs": {
      "L9d74dc9c4a8881e4f8c8514d": {
        "type": "object",
        "additionalProperties": false,
        "properties": {
          "id": {
            "type": "string",
            "format": "uuid"
          },
          "languageId": {
            "type": "string",
            "format": "uuid"
          },
          "family": {
            "type": "string",
            "enum": [
              "interface",
              "legal_site",
              "presentation",
              "artwork",
              "team",
              "editorial",
              "taxonomy",
              "form",
              "commerce_product",
              "delivery",
              "commerce_legal",
              "link_in_bio",
              "notification"
            ]
          },
          "ownerId": {
            "type": "string",
            "minLength": 1,
            "maxLength": 160
          },
          "sourceVersionId": {
            "type": "string",
            "minLength": 1,
            "maxLength": 160
          },
          "fieldId": {
            "type": "string",
            "minLength": 1,
            "maxLength": 160
          },
          "severity": {
            "type": "string",
            "enum": [
              "blocking",
              "warning",
              "fallback"
            ]
          },
          "reason": {
            "type": "string",
            "maxLength": 100
          },
          "correctionPath": {
            "type": "string",
            "pattern": "^/(?!/)[^\\r\\n]*$",
            "maxLength": 2048
          }
        },
        "required": [
          "id",
          "languageId",
          "family",
          "ownerId",
          "sourceVersionId",
          "fieldId",
          "severity",
          "reason"
        ]
      }
    }
  },
  "TransitionInput": {
    "oneOf": [
      {
        "type": "object",
        "additionalProperties": false,
        "properties": {
          "action": {
            "type": "string",
            "enum": [
              "activate",
              "publish_translations"
            ]
          },
          "checkId": {
            "type": "string",
            "format": "uuid"
          },
          "checkDigest": {
            "type": "string",
            "pattern": "^[a-f0-9]{64}$"
          }
        },
        "required": [
          "action",
          "checkId",
          "checkDigest"
        ]
      },
      {
        "type": "object",
        "additionalProperties": false,
        "properties": {
          "action": {
            "type": "string",
            "enum": [
              "deactivate"
            ]
          }
        },
        "required": [
          "action"
        ]
      }
    ]
  },
  "Operation": {
    "type": "object",
    "additionalProperties": false,
    "properties": {
      "id": {
        "type": "string",
        "format": "uuid"
      },
      "key": {
        "type": "string",
        "format": "uuid"
      },
      "languageId": {
        "type": "string",
        "format": "uuid"
      },
      "action": {
        "type": "string",
        "enum": [
          "activate",
          "deactivate",
          "publish_translations"
        ]
      },
      "state": {
        "type": "string",
        "enum": [
          "accepted",
          "checking",
          "committed",
          "propagating",
          "effective",
          "failed",
          "unconfirmed"
        ]
      },
      "expectedRevision": {
        "type": "string",
        "pattern": "^[1-9][0-9]{0,18}$"
      },
      "committedRevision": {
        "anyOf": [
          {
            "type": "string",
            "pattern": "^[1-9][0-9]{0,18}$"
          },
          {
            "type": "null"
          }
        ]
      },
      "createdAt": {
        "type": "string",
        "format": "date-time"
      },
      "deadlineAt": {
        "type": "string",
        "format": "date-time"
      },
      "updatedAt": {
        "type": "string",
        "format": "date-time"
      },
      "reasons": {
        "type": "array",
        "items": {
          "$ref": "#/$defs/La5d434e8764b588ed2bd69e5"
        },
        "maxItems": 64
      }
    },
    "required": [
      "id",
      "key",
      "languageId",
      "action",
      "state",
      "expectedRevision",
      "committedRevision",
      "createdAt",
      "deadlineAt",
      "updatedAt",
      "reasons"
    ],
    "$defs": {
      "La5d434e8764b588ed2bd69e5": {
        "type": "object",
        "additionalProperties": false,
        "properties": {
          "code": {
            "type": "string",
            "maxLength": 80
          },
          "message": {
            "type": "string",
            "maxLength": 500
          },
          "field": {
            "type": "string",
            "maxLength": 200
          }
        },
        "required": [
          "code",
          "message"
        ]
      }
    }
  },
  "HistoryItem": {
    "type": "object",
    "additionalProperties": false,
    "properties": {
      "id": {
        "type": "string",
        "format": "uuid"
      },
      "action": {
        "type": "string",
        "minLength": 1,
        "maxLength": 160
      },
      "actor": {
        "type": "string",
        "maxLength": 200
      },
      "at": {
        "type": "string",
        "format": "date-time"
      },
      "beforeRevision": {
        "type": "string",
        "pattern": "^[1-9][0-9]{0,18}$"
      },
      "afterRevision": {
        "type": "string",
        "pattern": "^[1-9][0-9]{0,18}$"
      },
      "result": {
        "type": "string",
        "enum": [
          "effective",
          "failed",
          "unconfirmed",
          "saved"
        ]
      },
      "operationId": {
        "anyOf": [
          {
            "type": "string",
            "format": "uuid"
          },
          {
            "type": "null"
          }
        ]
      }
    },
    "required": [
      "id",
      "action",
      "actor",
      "at",
      "beforeRevision",
      "afterRevision",
      "result",
      "operationId"
    ]
  },
  "HistoryPage": {
    "type": "object",
    "additionalProperties": false,
    "properties": {
      "items": {
        "type": "array",
        "items": {
          "$ref": "#/$defs/Lfe135a249903e01b23e32e70"
        },
        "maxItems": 100
      },
      "nextCursor": {
        "type": [
          "string",
          "null"
        ],
        "maxLength": 4096
      }
    },
    "required": [
      "items",
      "nextCursor"
    ],
    "$defs": {
      "Lfe135a249903e01b23e32e70": {
        "type": "object",
        "additionalProperties": false,
        "properties": {
          "id": {
            "type": "string",
            "format": "uuid"
          },
          "action": {
            "type": "string",
            "minLength": 1,
            "maxLength": 160
          },
          "actor": {
            "type": "string",
            "maxLength": 200
          },
          "at": {
            "type": "string",
            "format": "date-time"
          },
          "beforeRevision": {
            "type": "string",
            "pattern": "^[1-9][0-9]{0,18}$"
          },
          "afterRevision": {
            "type": "string",
            "pattern": "^[1-9][0-9]{0,18}$"
          },
          "result": {
            "type": "string",
            "enum": [
              "effective",
              "failed",
              "unconfirmed",
              "saved"
            ]
          },
          "operationId": {
            "anyOf": [
              {
                "type": "string",
                "format": "uuid"
              },
              {
                "type": "null"
              }
            ]
          }
        },
        "required": [
          "id",
          "action",
          "actor",
          "at",
          "beforeRevision",
          "afterRevision",
          "result",
          "operationId"
        ]
      }
    }
  },
  "ErrorDetail": {
    "type": "object",
    "additionalProperties": false,
    "properties": {
      "field": {
        "type": "string",
        "maxLength": 200
      },
      "reason": {
        "type": "string",
        "maxLength": 100
      },
      "languageId": {
        "type": "string",
        "format": "uuid"
      },
      "family": {
        "type": "string",
        "enum": [
          "interface",
          "legal_site",
          "presentation",
          "artwork",
          "team",
          "editorial",
          "taxonomy",
          "form",
          "commerce_product",
          "delivery",
          "commerce_legal",
          "link_in_bio",
          "notification"
        ]
      },
      "ownerId": {
        "type": "string",
        "minLength": 1,
        "maxLength": 160
      },
      "sourceVersionId": {
        "type": "string",
        "minLength": 1,
        "maxLength": 160
      },
      "correctionPath": {
        "type": "string",
        "pattern": "^/(?!/)[^\\r\\n]*$",
        "maxLength": 2048
      }
    },
    "required": [
      "field",
      "reason"
    ]
  },
  "Error": {
    "type": "object",
    "additionalProperties": false,
    "properties": {
      "error": {
        "type": "object",
        "additionalProperties": false,
        "properties": {
          "code": {
            "type": "string",
            "maxLength": 100
          },
          "message": {
            "type": "string",
            "maxLength": 500
          },
          "requestId": {
            "type": "string",
            "format": "uuid"
          },
          "operationId": {
            "type": "string",
            "format": "uuid"
          },
          "details": {
            "type": "array",
            "items": {
              "$ref": "#/$defs/Le44cfbfb4e636a3945edfed7"
            },
            "maxItems": 64
          }
        },
        "required": [
          "code",
          "message",
          "requestId"
        ]
      }
    },
    "required": [
      "error"
    ],
    "$defs": {
      "Le44cfbfb4e636a3945edfed7": {
        "type": "object",
        "additionalProperties": false,
        "properties": {
          "field": {
            "type": "string",
            "maxLength": 200
          },
          "reason": {
            "type": "string",
            "maxLength": 100
          },
          "languageId": {
            "type": "string",
            "format": "uuid"
          },
          "family": {
            "type": "string",
            "enum": [
              "interface",
              "legal_site",
              "presentation",
              "artwork",
              "team",
              "editorial",
              "taxonomy",
              "form",
              "commerce_product",
              "delivery",
              "commerce_legal",
              "link_in_bio",
              "notification"
            ]
          },
          "ownerId": {
            "type": "string",
            "minLength": 1,
            "maxLength": 160
          },
          "sourceVersionId": {
            "type": "string",
            "minLength": 1,
            "maxLength": 160
          },
          "correctionPath": {
            "type": "string",
            "pattern": "^/(?!/)[^\\r\\n]*$",
            "maxLength": 2048
          }
        },
        "required": [
          "field",
          "reason"
        ]
      }
    }
  },
  "RedirectResolution": {
    "type": "object",
    "additionalProperties": false,
    "properties": {
      "publicRevision": {
        "type": "string",
        "pattern": "^[1-9][0-9]{0,18}$"
      },
      "targetPath": {
        "type": "string",
        "pattern": "^/(?!/)[^\\r\\n]*$",
        "maxLength": 2048
      },
      "targetKind": {
        "type": "string",
        "enum": [
          "equivalent",
          "section",
          "home"
        ]
      }
    },
    "required": [
      "publicRevision",
      "targetPath",
      "targetKind"
    ]
  },
  "Empty": {
    "type": "object",
    "additionalProperties": false,
    "properties": {},
    "required": []
  },
  "ConsumerReceipt": {
    "type": "object",
    "additionalProperties": false,
    "properties": {
      "siteId": {
        "type": "string",
        "format": "uuid"
      },
      "slotId": {
        "type": "string",
        "format": "uuid"
      },
      "deploymentId": {
        "type": "string",
        "minLength": 1,
        "maxLength": 160
      },
      "challengeId": {
        "type": "string",
        "format": "uuid"
      },
      "contractVersion": {
        "type": "integer",
        "const": 1
      },
      "runtimeRequired": {
        "type": "boolean",
        "const": true
      },
      "observedPublicRevision": {
        "$ref": "#/$defs/L01463977cf9c734f224f8dff"
      },
      "catalogueIds": {
        "type": "array",
        "items": {
          "type": "string",
          "maxLength": 160
        },
        "minItems": 1,
        "maxItems": 32,
        "uniqueItems": true
      },
      "descriptorVersion": {
        "$ref": "#/$defs/L01463977cf9c734f224f8dff"
      },
      "modules": {
        "type": "array",
        "items": {
          "type": "string",
          "maxLength": 80
        },
        "minItems": 1,
        "maxItems": 7,
        "uniqueItems": true
      },
      "observedAt": {
        "type": "string",
        "format": "date-time"
      }
    },
    "required": [
      "siteId",
      "slotId",
      "deploymentId",
      "challengeId",
      "contractVersion",
      "runtimeRequired",
      "observedPublicRevision",
      "catalogueIds",
      "descriptorVersion",
      "modules",
      "observedAt"
    ],
    "$defs": {
      "L01463977cf9c734f224f8dff": {
        "type": "string",
        "pattern": "^[1-9][0-9]{0,18}$"
      }
    }
  }
} as const;
export const languageRoutes={
  "readPublicLanguagePolicy": {
    "method": "GET",
    "url": "/v1/public/languages/policy",
    "body": null,
    "query": {
      "type": "object",
      "additionalProperties": false,
      "properties": {},
      "required": []
    },
    "params": {
      "type": "object",
      "additionalProperties": false,
      "properties": {},
      "required": []
    },
    "responses": {
      "200": {
        "$ref": "#/$defs/L86b16b620b19895d98662d9d",
        "$defs": {
          "L86b16b620b19895d98662d9d": {
            "type": "object",
            "additionalProperties": false,
            "properties": {
              "contractVersion": {
                "type": "integer",
                "const": 1
              },
              "siteId": {
                "type": "string",
                "format": "uuid"
              },
              "mode": {
                "type": "string",
                "enum": [
                  "bootstrap",
                  "managed"
                ]
              },
              "publicRevision": {
                "type": "string",
                "pattern": "^[1-9][0-9]{0,18}$"
              },
              "defaultLocale": {
                "type": "string",
                "pattern": "^[a-z]{2,3}(?:-[a-z0-9]{2,8})*$",
                "maxLength": 35
              },
              "locales": {
                "type": "array",
                "items": {
                  "$ref": "#/$defs/Lc930bf0efb5201b3fc169083"
                },
                "maxItems": 8,
                "minItems": 1
              },
              "retiredCodes": {
                "type": "array",
                "items": {
                  "type": "string",
                  "pattern": "^[a-z]{2,3}(?:-[a-z0-9]{2,8})*$",
                  "maxLength": 35
                }
              },
              "catalogueId": {
                "type": "string",
                "minLength": 1,
                "maxLength": 160
              },
              "issuedAt": {
                "type": "string",
                "format": "date-time"
              },
              "validUntil": {
                "type": "string",
                "format": "date-time"
              }
            },
            "required": [
              "contractVersion",
              "siteId",
              "mode",
              "publicRevision",
              "defaultLocale",
              "locales",
              "retiredCodes",
              "catalogueId",
              "issuedAt",
              "validUntil"
            ]
          },
          "Lc930bf0efb5201b3fc169083": {
            "type": "object",
            "additionalProperties": false,
            "properties": {
              "code": {
                "type": "string",
                "pattern": "^[a-z]{2,3}(?:-[a-z0-9]{2,8})*$",
                "maxLength": 35
              },
              "intlLocale": {
                "type": "string",
                "maxLength": 35
              },
              "label": {
                "type": "string",
                "minLength": 1,
                "maxLength": 80
              },
              "direction": {
                "type": "string",
                "enum": [
                  "ltr"
                ]
              }
            },
            "required": [
              "code",
              "intlLocale",
              "label",
              "direction"
            ]
          }
        }
      }
    }
  },
  "readRuntimeLanguageContent": {
    "method": "GET",
    "url": "/v1/public/languages/content",
    "body": null,
    "query": {
      "type": "object",
      "additionalProperties": false,
      "properties": {
        "locale": {
          "type": "string",
          "pattern": "^[a-z]{2,3}(?:-[a-z0-9]{2,8})*$",
          "maxLength": 35
        },
        "revision": {
          "type": "string",
          "pattern": "^[1-9][0-9]{0,18}$"
        },
        "catalogue": {
          "type": "string",
          "minLength": 1,
          "maxLength": 160
        }
      },
      "required": [
        "locale",
        "revision",
        "catalogue"
      ]
    },
    "params": {
      "type": "object",
      "additionalProperties": false,
      "properties": {},
      "required": []
    },
    "responses": {
      "200": {
        "$ref": "#/$defs/L9d920c3d6251eee8f4be4efe",
        "$defs": {
          "L1c70fdf6ece3d8c2a9b37403": {
            "type": "object",
            "additionalProperties": false,
            "properties": {
              "id": {
                "type": "string",
                "format": "uuid"
              },
              "width": {
                "type": "integer",
                "minimum": 1
              },
              "height": {
                "type": "integer",
                "minimum": 1
              },
              "byteSize": {
                "type": "integer",
                "minimum": 1
              },
              "mimeType": {
                "type": "string",
                "enum": [
                  "image/webp"
                ]
              }
            },
            "required": [
              "id",
              "width",
              "height",
              "byteSize",
              "mimeType"
            ]
          },
          "L224f209b9c4018c1dcfdb81e": {
            "type": "object",
            "additionalProperties": false,
            "properties": {
              "type": {
                "const": "doc"
              },
              "content": {
                "type": "array",
                "items": {
                  "$ref": "#/$defs/Lc3b184bffa7e5fdc29c6e6c5"
                },
                "maxItems": 10000
              }
            },
            "required": [
              "type",
              "content"
            ]
          },
          "L86b16b620b19895d98662d9d": {
            "type": "object",
            "additionalProperties": false,
            "properties": {
              "contractVersion": {
                "type": "integer",
                "const": 1
              },
              "siteId": {
                "type": "string",
                "format": "uuid"
              },
              "mode": {
                "type": "string",
                "enum": [
                  "bootstrap",
                  "managed"
                ]
              },
              "publicRevision": {
                "type": "string",
                "pattern": "^[1-9][0-9]{0,18}$"
              },
              "defaultLocale": {
                "type": "string",
                "pattern": "^[a-z]{2,3}(?:-[a-z0-9]{2,8})*$",
                "maxLength": 35
              },
              "locales": {
                "type": "array",
                "items": {
                  "$ref": "#/$defs/Lc930bf0efb5201b3fc169083"
                },
                "maxItems": 8,
                "minItems": 1
              },
              "retiredCodes": {
                "type": "array",
                "items": {
                  "type": "string",
                  "pattern": "^[a-z]{2,3}(?:-[a-z0-9]{2,8})*$",
                  "maxLength": 35
                }
              },
              "catalogueId": {
                "type": "string",
                "minLength": 1,
                "maxLength": 160
              },
              "issuedAt": {
                "type": "string",
                "format": "date-time"
              },
              "validUntil": {
                "type": "string",
                "format": "date-time"
              }
            },
            "required": [
              "contractVersion",
              "siteId",
              "mode",
              "publicRevision",
              "defaultLocale",
              "locales",
              "retiredCodes",
              "catalogueId",
              "issuedAt",
              "validUntil"
            ]
          },
          "L8c56f85cd5762622f3610933": {
            "type": "object",
            "additionalProperties": false,
            "properties": {
              "title": {
                "type": "string",
                "minLength": 1,
                "maxLength": 160
              },
              "body": {
                "$ref": "#/$defs/L224f209b9c4018c1dcfdb81e"
              },
              "locale": {
                "type": "string",
                "pattern": "^[a-z]{2,3}(?:-[a-z0-9]{2,8})*$",
                "maxLength": 35
              }
            },
            "required": [
              "title",
              "body",
              "locale"
            ]
          },
          "L9d920c3d6251eee8f4be4efe": {
            "type": "object",
            "additionalProperties": false,
            "properties": {
              "contractVersion": {
                "type": "integer",
                "const": 1
              },
              "contentRevision": {
                "type": "string",
                "pattern": "^[1-9][0-9]{0,18}$"
              },
              "locale": {
                "type": "string",
                "pattern": "^[a-z]{2,3}(?:-[a-z0-9]{2,8})*$",
                "maxLength": 35
              },
              "policy": {
                "$ref": "#/$defs/L86b16b620b19895d98662d9d"
              },
              "messages": {
                "type": "object",
                "maxProperties": 5000,
                "additionalProperties": {
                  "type": "string",
                  "maxLength": 20000
                }
              },
              "logo": {
                "anyOf": [
                  {
                    "$ref": "#/$defs/L1c70fdf6ece3d8c2a9b37403"
                  },
                  {
                    "type": "null"
                  }
                ]
              },
              "whiteLogo": {
                "anyOf": [
                  {
                    "$ref": "#/$defs/L1c70fdf6ece3d8c2a9b37403"
                  },
                  {
                    "type": "null"
                  }
                ]
              },
              "legalPage": {
                "anyOf": [
                  {
                    "$ref": "#/$defs/L8c56f85cd5762622f3610933"
                  },
                  {
                    "type": "null"
                  }
                ]
              },
              "selectedCatalogueId": {
                "type": "string",
                "minLength": 1,
                "maxLength": 160
              }
            },
            "required": [
              "contractVersion",
              "contentRevision",
              "locale",
              "policy",
              "messages",
              "logo",
              "whiteLogo",
              "legalPage",
              "selectedCatalogueId"
            ],
            "description": "Runtime profile only. No new properties or message keys are injected into the legacy SiteContentPublic contract."
          },
          "La091aba45f3b19a703a51a0b": {
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
          "Lc3b184bffa7e5fdc29c6e6c5": {
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
                      "$ref": "#/$defs/La091aba45f3b19a703a51a0b"
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
                      "$ref": "#/$defs/Lc3b184bffa7e5fdc29c6e6c5"
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
                      "$ref": "#/$defs/Lc3b184bffa7e5fdc29c6e6c5"
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
          "Lc930bf0efb5201b3fc169083": {
            "type": "object",
            "additionalProperties": false,
            "properties": {
              "code": {
                "type": "string",
                "pattern": "^[a-z]{2,3}(?:-[a-z0-9]{2,8})*$",
                "maxLength": 35
              },
              "intlLocale": {
                "type": "string",
                "maxLength": 35
              },
              "label": {
                "type": "string",
                "minLength": 1,
                "maxLength": 80
              },
              "direction": {
                "type": "string",
                "enum": [
                  "ltr"
                ]
              }
            },
            "required": [
              "code",
              "intlLocale",
              "label",
              "direction"
            ]
          }
        }
      }
    }
  },
  "resolveRetiredLanguageAddress": {
    "method": "GET",
    "url": "/v1/public/languages/redirects/resolve",
    "body": null,
    "query": {
      "type": "object",
      "additionalProperties": false,
      "properties": {
        "path": {
          "type": "string",
          "pattern": "^/(?!/)[^\\r\\n]*$",
          "maxLength": 2048
        },
        "revision": {
          "type": "string",
          "pattern": "^[1-9][0-9]{0,18}$"
        }
      },
      "required": [
        "path",
        "revision"
      ]
    },
    "params": {
      "type": "object",
      "additionalProperties": false,
      "properties": {},
      "required": []
    },
    "responses": {
      "200": {
        "$ref": "#/$defs/L193ad62bf6296b06cd52f2b1",
        "$defs": {
          "L193ad62bf6296b06cd52f2b1": {
            "type": "object",
            "additionalProperties": false,
            "properties": {
              "publicRevision": {
                "type": "string",
                "pattern": "^[1-9][0-9]{0,18}$"
              },
              "targetPath": {
                "type": "string",
                "pattern": "^/(?!/)[^\\r\\n]*$",
                "maxLength": 2048
              },
              "targetKind": {
                "type": "string",
                "enum": [
                  "equivalent",
                  "section",
                  "home"
                ]
              }
            },
            "required": [
              "publicRevision",
              "targetPath",
              "targetKind"
            ]
          }
        }
      }
    }
  },
  "readLanguageCapabilities": {
    "method": "GET",
    "url": "/v1/admin/languages/capabilities",
    "body": null,
    "query": {
      "type": "object",
      "additionalProperties": false,
      "properties": {},
      "required": []
    },
    "params": {
      "type": "object",
      "additionalProperties": false,
      "properties": {},
      "required": []
    },
    "responses": {
      "200": {
        "$ref": "#/$defs/L10e057d88985a31921ba00a9",
        "$defs": {
          "L10e057d88985a31921ba00a9": {
            "type": "object",
            "additionalProperties": false,
            "properties": {
              "contractVersion": {
                "type": "integer",
                "const": 1
              },
              "enabled": {
                "type": "boolean"
              },
              "mode": {
                "type": "string",
                "enum": [
                  "dormant",
                  "managed"
                ]
              },
              "canManage": {
                "type": "boolean"
              },
              "canTranslate": {
                "type": "boolean"
              },
              "maxLiveLanguages": {
                "type": "integer",
                "const": 8
              },
              "reasons": {
                "type": "array",
                "items": {
                  "$ref": "#/$defs/La5d434e8764b588ed2bd69e5"
                },
                "maxItems": 64
              }
            },
            "required": [
              "contractVersion",
              "enabled",
              "mode",
              "canManage",
              "canTranslate",
              "maxLiveLanguages",
              "reasons"
            ]
          },
          "La5d434e8764b588ed2bd69e5": {
            "type": "object",
            "additionalProperties": false,
            "properties": {
              "code": {
                "type": "string",
                "maxLength": 80
              },
              "message": {
                "type": "string",
                "maxLength": 500
              },
              "field": {
                "type": "string",
                "maxLength": 200
              }
            },
            "required": [
              "code",
              "message"
            ]
          }
        }
      }
    }
  },
  "readAdminLanguages": {
    "method": "GET",
    "url": "/v1/admin/languages",
    "body": null,
    "query": {
      "type": "object",
      "additionalProperties": false,
      "properties": {},
      "required": []
    },
    "params": {
      "type": "object",
      "additionalProperties": false,
      "properties": {},
      "required": []
    },
    "responses": {
      "200": {
        "$ref": "#/$defs/L7ef87826b1a5a9ac0a56cf2b",
        "$defs": {
          "L7ef87826b1a5a9ac0a56cf2b": {
            "type": "object",
            "additionalProperties": false,
            "properties": {
              "siteId": {
                "type": "string",
                "format": "uuid"
              },
              "revision": {
                "type": "string",
                "pattern": "^[1-9][0-9]{0,18}$"
              },
              "publicRevision": {
                "type": "string",
                "pattern": "^[1-9][0-9]{0,18}$"
              },
              "defaultLocale": {
                "type": "string",
                "pattern": "^[a-z]{2,3}(?:-[a-z0-9]{2,8})*$",
                "maxLength": 35
              },
              "mode": {
                "type": "string",
                "enum": [
                  "bootstrap",
                  "managed"
                ]
              },
              "languages": {
                "type": "array",
                "items": {
                  "$ref": "#/$defs/Ld827de283a55e53bca34368c"
                },
                "minItems": 1
              },
              "updatedAt": {
                "type": "string",
                "format": "date-time"
              }
            },
            "required": [
              "siteId",
              "revision",
              "publicRevision",
              "defaultLocale",
              "mode",
              "languages",
              "updatedAt"
            ]
          },
          "La5d434e8764b588ed2bd69e5": {
            "type": "object",
            "additionalProperties": false,
            "properties": {
              "code": {
                "type": "string",
                "maxLength": 80
              },
              "message": {
                "type": "string",
                "maxLength": 500
              },
              "field": {
                "type": "string",
                "maxLength": 200
              }
            },
            "required": [
              "code",
              "message"
            ]
          },
          "Ld827de283a55e53bca34368c": {
            "type": "object",
            "additionalProperties": false,
            "properties": {
              "id": {
                "type": "string",
                "format": "uuid"
              },
              "code": {
                "type": "string",
                "pattern": "^[a-z]{2,3}(?:-[a-z0-9]{2,8})*$",
                "maxLength": 35
              },
              "intlLocale": {
                "type": "string",
                "maxLength": 35
              },
              "label": {
                "type": "string",
                "minLength": 1,
                "maxLength": 80
              },
              "state": {
                "type": "string",
                "enum": [
                  "preparing",
                  "active",
                  "disabled"
                ]
              },
              "isDefault": {
                "type": "boolean"
              },
              "position": {
                "type": "integer",
                "minimum": 0
              },
              "everPublic": {
                "type": "boolean"
              },
              "supportStatus": {
                "type": "string",
                "enum": [
                  "supported",
                  "restricted"
                ]
              },
              "restrictions": {
                "type": "array",
                "items": {
                  "$ref": "#/$defs/La5d434e8764b588ed2bd69e5"
                },
                "maxItems": 64
              }
            },
            "required": [
              "id",
              "code",
              "intlLocale",
              "label",
              "state",
              "isDefault",
              "position",
              "everPublic",
              "supportStatus",
              "restrictions"
            ]
          }
        }
      }
    }
  },
  "createLanguage": {
    "method": "POST",
    "url": "/v1/admin/languages",
    "body": {
      "$ref": "#/$defs/L0cc6633e6847c76255907ed2",
      "$defs": {
        "L0cc6633e6847c76255907ed2": {
          "type": "object",
          "additionalProperties": false,
          "properties": {
            "code": {
              "type": "string",
              "pattern": "^[a-z]{2,3}(?:-[a-z0-9]{2,8})*$",
              "maxLength": 35
            },
            "label": {
              "type": "string",
              "minLength": 1,
              "maxLength": 80
            }
          },
          "required": [
            "code",
            "label"
          ]
        }
      }
    },
    "query": {
      "type": "object",
      "additionalProperties": false,
      "properties": {},
      "required": []
    },
    "params": {
      "type": "object",
      "additionalProperties": false,
      "properties": {},
      "required": []
    },
    "responses": {
      "201": {
        "$ref": "#/$defs/L7ef87826b1a5a9ac0a56cf2b",
        "$defs": {
          "L7ef87826b1a5a9ac0a56cf2b": {
            "type": "object",
            "additionalProperties": false,
            "properties": {
              "siteId": {
                "type": "string",
                "format": "uuid"
              },
              "revision": {
                "type": "string",
                "pattern": "^[1-9][0-9]{0,18}$"
              },
              "publicRevision": {
                "type": "string",
                "pattern": "^[1-9][0-9]{0,18}$"
              },
              "defaultLocale": {
                "type": "string",
                "pattern": "^[a-z]{2,3}(?:-[a-z0-9]{2,8})*$",
                "maxLength": 35
              },
              "mode": {
                "type": "string",
                "enum": [
                  "bootstrap",
                  "managed"
                ]
              },
              "languages": {
                "type": "array",
                "items": {
                  "$ref": "#/$defs/Ld827de283a55e53bca34368c"
                },
                "minItems": 1
              },
              "updatedAt": {
                "type": "string",
                "format": "date-time"
              }
            },
            "required": [
              "siteId",
              "revision",
              "publicRevision",
              "defaultLocale",
              "mode",
              "languages",
              "updatedAt"
            ]
          },
          "La5d434e8764b588ed2bd69e5": {
            "type": "object",
            "additionalProperties": false,
            "properties": {
              "code": {
                "type": "string",
                "maxLength": 80
              },
              "message": {
                "type": "string",
                "maxLength": 500
              },
              "field": {
                "type": "string",
                "maxLength": 200
              }
            },
            "required": [
              "code",
              "message"
            ]
          },
          "Ld827de283a55e53bca34368c": {
            "type": "object",
            "additionalProperties": false,
            "properties": {
              "id": {
                "type": "string",
                "format": "uuid"
              },
              "code": {
                "type": "string",
                "pattern": "^[a-z]{2,3}(?:-[a-z0-9]{2,8})*$",
                "maxLength": 35
              },
              "intlLocale": {
                "type": "string",
                "maxLength": 35
              },
              "label": {
                "type": "string",
                "minLength": 1,
                "maxLength": 80
              },
              "state": {
                "type": "string",
                "enum": [
                  "preparing",
                  "active",
                  "disabled"
                ]
              },
              "isDefault": {
                "type": "boolean"
              },
              "position": {
                "type": "integer",
                "minimum": 0
              },
              "everPublic": {
                "type": "boolean"
              },
              "supportStatus": {
                "type": "string",
                "enum": [
                  "supported",
                  "restricted"
                ]
              },
              "restrictions": {
                "type": "array",
                "items": {
                  "$ref": "#/$defs/La5d434e8764b588ed2bd69e5"
                },
                "maxItems": 64
              }
            },
            "required": [
              "id",
              "code",
              "intlLocale",
              "label",
              "state",
              "isDefault",
              "position",
              "everPublic",
              "supportStatus",
              "restrictions"
            ]
          }
        }
      }
    }
  },
  "updateLanguageLabelsAndOrder": {
    "method": "PATCH",
    "url": "/v1/admin/languages",
    "body": {
      "$ref": "#/$defs/La9d9478ece03dbd70347fb93",
      "$defs": {
        "La9d9478ece03dbd70347fb93": {
          "type": "object",
          "additionalProperties": false,
          "properties": {
            "labels": {
              "type": "array",
              "items": {
                "type": "object",
                "additionalProperties": false,
                "properties": {
                  "languageId": {
                    "type": "string",
                    "format": "uuid"
                  },
                  "label": {
                    "type": "string",
                    "minLength": 1,
                    "maxLength": 80
                  }
                },
                "required": [
                  "languageId",
                  "label"
                ]
              },
              "maxItems": 64
            },
            "orderedLanguageIds": {
              "type": "array",
              "items": {
                "type": "string",
                "format": "uuid"
              },
              "maxItems": 8
            }
          },
          "required": []
        }
      }
    },
    "query": {
      "type": "object",
      "additionalProperties": false,
      "properties": {},
      "required": []
    },
    "params": {
      "type": "object",
      "additionalProperties": false,
      "properties": {},
      "required": []
    },
    "responses": {
      "200": {
        "$ref": "#/$defs/L7ef87826b1a5a9ac0a56cf2b",
        "$defs": {
          "L7ef87826b1a5a9ac0a56cf2b": {
            "type": "object",
            "additionalProperties": false,
            "properties": {
              "siteId": {
                "type": "string",
                "format": "uuid"
              },
              "revision": {
                "type": "string",
                "pattern": "^[1-9][0-9]{0,18}$"
              },
              "publicRevision": {
                "type": "string",
                "pattern": "^[1-9][0-9]{0,18}$"
              },
              "defaultLocale": {
                "type": "string",
                "pattern": "^[a-z]{2,3}(?:-[a-z0-9]{2,8})*$",
                "maxLength": 35
              },
              "mode": {
                "type": "string",
                "enum": [
                  "bootstrap",
                  "managed"
                ]
              },
              "languages": {
                "type": "array",
                "items": {
                  "$ref": "#/$defs/Ld827de283a55e53bca34368c"
                },
                "minItems": 1
              },
              "updatedAt": {
                "type": "string",
                "format": "date-time"
              }
            },
            "required": [
              "siteId",
              "revision",
              "publicRevision",
              "defaultLocale",
              "mode",
              "languages",
              "updatedAt"
            ]
          },
          "La5d434e8764b588ed2bd69e5": {
            "type": "object",
            "additionalProperties": false,
            "properties": {
              "code": {
                "type": "string",
                "maxLength": 80
              },
              "message": {
                "type": "string",
                "maxLength": 500
              },
              "field": {
                "type": "string",
                "maxLength": 200
              }
            },
            "required": [
              "code",
              "message"
            ]
          },
          "Ld827de283a55e53bca34368c": {
            "type": "object",
            "additionalProperties": false,
            "properties": {
              "id": {
                "type": "string",
                "format": "uuid"
              },
              "code": {
                "type": "string",
                "pattern": "^[a-z]{2,3}(?:-[a-z0-9]{2,8})*$",
                "maxLength": 35
              },
              "intlLocale": {
                "type": "string",
                "maxLength": 35
              },
              "label": {
                "type": "string",
                "minLength": 1,
                "maxLength": 80
              },
              "state": {
                "type": "string",
                "enum": [
                  "preparing",
                  "active",
                  "disabled"
                ]
              },
              "isDefault": {
                "type": "boolean"
              },
              "position": {
                "type": "integer",
                "minimum": 0
              },
              "everPublic": {
                "type": "boolean"
              },
              "supportStatus": {
                "type": "string",
                "enum": [
                  "supported",
                  "restricted"
                ]
              },
              "restrictions": {
                "type": "array",
                "items": {
                  "$ref": "#/$defs/La5d434e8764b588ed2bd69e5"
                },
                "maxItems": 64
              }
            },
            "required": [
              "id",
              "code",
              "intlLocale",
              "label",
              "state",
              "isDefault",
              "position",
              "everPublic",
              "supportStatus",
              "restrictions"
            ]
          }
        }
      }
    }
  },
  "prepareDisabledLanguage": {
    "method": "POST",
    "url": "/v1/admin/languages/{languageId}/prepare",
    "body": {
      "$ref": "#/$defs/L776846eefcb5cba422e6d69e",
      "$defs": {
        "L776846eefcb5cba422e6d69e": {
          "type": "object",
          "additionalProperties": false,
          "properties": {},
          "required": []
        }
      }
    },
    "query": {
      "type": "object",
      "additionalProperties": false,
      "properties": {},
      "required": []
    },
    "params": {
      "type": "object",
      "additionalProperties": false,
      "properties": {
        "languageId": {
          "type": "string",
          "format": "uuid"
        }
      },
      "required": [
        "languageId"
      ]
    },
    "responses": {
      "200": {
        "$ref": "#/$defs/L7ef87826b1a5a9ac0a56cf2b",
        "$defs": {
          "L7ef87826b1a5a9ac0a56cf2b": {
            "type": "object",
            "additionalProperties": false,
            "properties": {
              "siteId": {
                "type": "string",
                "format": "uuid"
              },
              "revision": {
                "type": "string",
                "pattern": "^[1-9][0-9]{0,18}$"
              },
              "publicRevision": {
                "type": "string",
                "pattern": "^[1-9][0-9]{0,18}$"
              },
              "defaultLocale": {
                "type": "string",
                "pattern": "^[a-z]{2,3}(?:-[a-z0-9]{2,8})*$",
                "maxLength": 35
              },
              "mode": {
                "type": "string",
                "enum": [
                  "bootstrap",
                  "managed"
                ]
              },
              "languages": {
                "type": "array",
                "items": {
                  "$ref": "#/$defs/Ld827de283a55e53bca34368c"
                },
                "minItems": 1
              },
              "updatedAt": {
                "type": "string",
                "format": "date-time"
              }
            },
            "required": [
              "siteId",
              "revision",
              "publicRevision",
              "defaultLocale",
              "mode",
              "languages",
              "updatedAt"
            ]
          },
          "La5d434e8764b588ed2bd69e5": {
            "type": "object",
            "additionalProperties": false,
            "properties": {
              "code": {
                "type": "string",
                "maxLength": 80
              },
              "message": {
                "type": "string",
                "maxLength": 500
              },
              "field": {
                "type": "string",
                "maxLength": 200
              }
            },
            "required": [
              "code",
              "message"
            ]
          },
          "Ld827de283a55e53bca34368c": {
            "type": "object",
            "additionalProperties": false,
            "properties": {
              "id": {
                "type": "string",
                "format": "uuid"
              },
              "code": {
                "type": "string",
                "pattern": "^[a-z]{2,3}(?:-[a-z0-9]{2,8})*$",
                "maxLength": 35
              },
              "intlLocale": {
                "type": "string",
                "maxLength": 35
              },
              "label": {
                "type": "string",
                "minLength": 1,
                "maxLength": 80
              },
              "state": {
                "type": "string",
                "enum": [
                  "preparing",
                  "active",
                  "disabled"
                ]
              },
              "isDefault": {
                "type": "boolean"
              },
              "position": {
                "type": "integer",
                "minimum": 0
              },
              "everPublic": {
                "type": "boolean"
              },
              "supportStatus": {
                "type": "string",
                "enum": [
                  "supported",
                  "restricted"
                ]
              },
              "restrictions": {
                "type": "array",
                "items": {
                  "$ref": "#/$defs/La5d434e8764b588ed2bd69e5"
                },
                "maxItems": 64
              }
            },
            "required": [
              "id",
              "code",
              "intlLocale",
              "label",
              "state",
              "isDefault",
              "position",
              "everPublic",
              "supportStatus",
              "restrictions"
            ]
          }
        }
      }
    }
  },
  "listLanguageTargets": {
    "method": "GET",
    "url": "/v1/admin/languages/{languageId}/targets",
    "body": null,
    "query": {
      "type": "object",
      "additionalProperties": false,
      "properties": {
        "cursor": {
          "type": "string",
          "maxLength": 4096
        },
        "limit": {
          "type": "integer",
          "minimum": 1,
          "maximum": 100,
          "default": 50
        },
        "family": {
          "type": "string",
          "enum": [
            "interface",
            "legal_site",
            "presentation",
            "artwork",
            "team",
            "editorial",
            "taxonomy",
            "form",
            "commerce_product",
            "delivery",
            "commerce_legal",
            "link_in_bio",
            "notification"
          ]
        },
        "scope": {
          "type": "string",
          "enum": [
            "public",
            "scheduled",
            "draft"
          ]
        }
      },
      "required": []
    },
    "params": {
      "type": "object",
      "additionalProperties": false,
      "properties": {
        "languageId": {
          "type": "string",
          "format": "uuid"
        }
      },
      "required": [
        "languageId"
      ]
    },
    "responses": {
      "200": {
        "$ref": "#/$defs/Ldd98846bb07b2f175250b052",
        "$defs": {
          "L4fdd9c7fd80a4c4b2bb68bbe": {
            "type": "object",
            "additionalProperties": false,
            "properties": {
              "targetId": {
                "type": "string",
                "format": "uuid"
              },
              "family": {
                "type": "string",
                "enum": [
                  "interface",
                  "legal_site",
                  "presentation",
                  "artwork",
                  "team",
                  "editorial",
                  "taxonomy",
                  "form",
                  "commerce_product",
                  "delivery",
                  "commerce_legal",
                  "link_in_bio",
                  "notification"
                ]
              },
              "ownerId": {
                "type": "string",
                "minLength": 1,
                "maxLength": 160
              },
              "namespace": {
                "type": "string",
                "maxLength": 100
              },
              "scope": {
                "type": "string",
                "enum": [
                  "public",
                  "scheduled",
                  "draft"
                ]
              },
              "sourceVersionId": {
                "type": "string",
                "minLength": 1,
                "maxLength": 160
              },
              "sourceDigest": {
                "type": "string",
                "pattern": "^[a-f0-9]{64}$"
              },
              "descriptorVersion": {
                "type": "string",
                "pattern": "^[1-9][0-9]{0,18}$"
              },
              "correctionPath": {
                "type": "string",
                "pattern": "^/(?!/)[^\\r\\n]*$",
                "maxLength": 2048
              },
              "publicationMode": {
                "type": "string",
                "enum": [
                  "immediate",
                  "explicit",
                  "external_legal"
                ]
              }
            },
            "required": [
              "targetId",
              "family",
              "ownerId",
              "scope",
              "sourceVersionId",
              "sourceDigest",
              "descriptorVersion",
              "correctionPath",
              "publicationMode"
            ]
          },
          "Ldd98846bb07b2f175250b052": {
            "type": "object",
            "additionalProperties": false,
            "properties": {
              "items": {
                "type": "array",
                "items": {
                  "$ref": "#/$defs/L4fdd9c7fd80a4c4b2bb68bbe"
                },
                "maxItems": 100
              },
              "nextCursor": {
                "type": [
                  "string",
                  "null"
                ],
                "maxLength": 4096
              }
            },
            "required": [
              "items",
              "nextCursor"
            ]
          }
        }
      }
    }
  },
  "openLanguageWorkspace": {
    "method": "POST",
    "url": "/v1/admin/languages/{languageId}/workspaces",
    "body": {
      "$ref": "#/$defs/L919041935b8a57172235d3b0",
      "$defs": {
        "L919041935b8a57172235d3b0": {
          "type": "object",
          "additionalProperties": false,
          "properties": {
            "targetId": {
              "type": "string",
              "format": "uuid"
            }
          },
          "required": [
            "targetId"
          ]
        }
      }
    },
    "query": {
      "type": "object",
      "additionalProperties": false,
      "properties": {},
      "required": []
    },
    "params": {
      "type": "object",
      "additionalProperties": false,
      "properties": {
        "languageId": {
          "type": "string",
          "format": "uuid"
        }
      },
      "required": [
        "languageId"
      ]
    },
    "responses": {
      "201": {
        "$ref": "#/$defs/L1f9a82deb7118bc1c7b14860",
        "$defs": {
          "L01463977cf9c734f224f8dff": {
            "type": "string",
            "pattern": "^[1-9][0-9]{0,18}$"
          },
          "L1f9a82deb7118bc1c7b14860": {
            "type": "object",
            "additionalProperties": false,
            "required": [
              "id",
              "revision",
              "state"
            ],
            "properties": {
              "id": {
                "type": "string",
                "format": "uuid"
              },
              "revision": {
                "$ref": "#/$defs/L01463977cf9c734f224f8dff"
              },
              "state": {
                "type": "string",
                "enum": [
                  "editing",
                  "approved",
                  "stale",
                  "source_missing"
                ]
              }
            }
          }
        }
      }
    }
  },
  "readLanguageWorkspace": {
    "method": "GET",
    "url": "/v1/admin/languages/workspaces/{workspaceId}",
    "body": null,
    "query": {
      "type": "object",
      "additionalProperties": false,
      "properties": {},
      "required": []
    },
    "params": {
      "type": "object",
      "additionalProperties": false,
      "properties": {
        "workspaceId": {
          "type": "string",
          "format": "uuid"
        }
      },
      "required": [
        "workspaceId"
      ]
    },
    "responses": {
      "200": {
        "$ref": "#/$defs/L1b5b7beb1d645d9808bfcec2",
        "$defs": {
          "L1b5b7beb1d645d9808bfcec2": {
            "type": "object",
            "additionalProperties": false,
            "properties": {
              "id": {
                "type": "string",
                "format": "uuid"
              },
              "languageId": {
                "type": "string",
                "format": "uuid"
              },
              "revision": {
                "type": "string",
                "pattern": "^[1-9][0-9]{0,18}$"
              },
              "source": {
                "$ref": "#/$defs/L4fdd9c7fd80a4c4b2bb68bbe"
              },
              "rebaseFieldIds": {
                "type": "array",
                "maxItems": 10000,
                "uniqueItems": true,
                "items": {
                  "type": "string",
                  "minLength": 1,
                  "maxLength": 160
                }
              },
              "currentSource": {
                "$ref": "#/$defs/L4fdd9c7fd80a4c4b2bb68bbe"
              },
              "state": {
                "type": "string",
                "enum": [
                  "editing",
                  "approved",
                  "stale",
                  "source_missing"
                ]
              },
              "fields": {
                "type": "array",
                "items": {
                  "$ref": "#/$defs/L64debc8686329d306e41569c"
                }
              },
              "updatedAt": {
                "type": "string",
                "format": "date-time"
              }
            },
            "required": [
              "id",
              "languageId",
              "revision",
              "source",
              "state",
              "fields",
              "updatedAt"
            ]
          },
          "L278ee13fb67ca112c729bb7a": {
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
          "L3942e16f085f5ba91a3b9171": {
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
                      "$ref": "#/$defs/L4906b6e034cbef132f95c157"
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
                      "$ref": "#/$defs/L3942e16f085f5ba91a3b9171"
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
                      "$ref": "#/$defs/L3942e16f085f5ba91a3b9171"
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
          "L4906b6e034cbef132f95c157": {
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
          "L4a8194985b02dc4add1a35fb": {
            "type": "object",
            "additionalProperties": false,
            "properties": {
              "type": {
                "const": "doc"
              },
              "content": {
                "type": "array",
                "items": {
                  "$ref": "#/$defs/L3942e16f085f5ba91a3b9171"
                },
                "maxItems": 10000
              }
            },
            "required": [
              "type",
              "content"
            ]
          },
          "L4fdd9c7fd80a4c4b2bb68bbe": {
            "type": "object",
            "additionalProperties": false,
            "properties": {
              "targetId": {
                "type": "string",
                "format": "uuid"
              },
              "family": {
                "type": "string",
                "enum": [
                  "interface",
                  "legal_site",
                  "presentation",
                  "artwork",
                  "team",
                  "editorial",
                  "taxonomy",
                  "form",
                  "commerce_product",
                  "delivery",
                  "commerce_legal",
                  "link_in_bio",
                  "notification"
                ]
              },
              "ownerId": {
                "type": "string",
                "minLength": 1,
                "maxLength": 160
              },
              "namespace": {
                "type": "string",
                "maxLength": 100
              },
              "scope": {
                "type": "string",
                "enum": [
                  "public",
                  "scheduled",
                  "draft"
                ]
              },
              "sourceVersionId": {
                "type": "string",
                "minLength": 1,
                "maxLength": 160
              },
              "sourceDigest": {
                "type": "string",
                "pattern": "^[a-f0-9]{64}$"
              },
              "descriptorVersion": {
                "type": "string",
                "pattern": "^[1-9][0-9]{0,18}$"
              },
              "correctionPath": {
                "type": "string",
                "pattern": "^/(?!/)[^\\r\\n]*$",
                "maxLength": 2048
              },
              "publicationMode": {
                "type": "string",
                "enum": [
                  "immediate",
                  "explicit",
                  "external_legal"
                ]
              }
            },
            "required": [
              "targetId",
              "family",
              "ownerId",
              "scope",
              "sourceVersionId",
              "sourceDigest",
              "descriptorVersion",
              "correctionPath",
              "publicationMode"
            ]
          },
          "L64debc8686329d306e41569c": {
            "type": "object",
            "additionalProperties": false,
            "properties": {
              "fieldId": {
                "type": "string",
                "minLength": 1,
                "maxLength": 160
              },
              "kind": {
                "type": "string",
                "enum": [
                  "plain",
                  "slug",
                  "rich_text",
                  "message"
                ]
              },
              "label": {
                "type": "string",
                "maxLength": 200
              },
              "required": {
                "type": "boolean"
              },
              "fallbackAllowed": {
                "type": "boolean"
              },
              "maxLength": {
                "type": "integer",
                "minimum": 1
              },
              "referenceValue": {
                "anyOf": [
                  {
                    "type": "string",
                    "maxLength": 100000
                  },
                  {
                    "type": "null"
                  },
                  {
                    "$ref": "#/$defs/Ld80b5448acfac763a5f1aa0a"
                  },
                  {
                    "$ref": "#/$defs/L4a8194985b02dc4add1a35fb"
                  }
                ],
                "description": "Only the value kind authorized by the server-owned field descriptor; native rich-text schema and semantic sanitizer remain mandatory."
              },
              "value": {
                "anyOf": [
                  {
                    "type": "string",
                    "maxLength": 100000
                  },
                  {
                    "type": "null"
                  },
                  {
                    "$ref": "#/$defs/Ld80b5448acfac763a5f1aa0a"
                  },
                  {
                    "$ref": "#/$defs/L4a8194985b02dc4add1a35fb"
                  }
                ],
                "description": "Only the value kind authorized by the server-owned field descriptor; native rich-text schema and semantic sanitizer remain mandatory."
              },
              "lengthUnit": {
                "type": "string",
                "enum": [
                  "unicode",
                  "utf16"
                ],
                "description": "Optional native length unit. Absent means Unicode code points; utf16 preserves validators based on JavaScript string length."
              }
            },
            "required": [
              "fieldId",
              "kind",
              "label",
              "required",
              "fallbackAllowed",
              "referenceValue",
              "value"
            ]
          },
          "Ld4f7a5911742edb5b29565cc": {
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
                      "$ref": "#/$defs/L278ee13fb67ca112c729bb7a"
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
                      "$ref": "#/$defs/Ld4f7a5911742edb5b29565cc"
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
                      "$ref": "#/$defs/Ld4f7a5911742edb5b29565cc"
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
          "Ld80b5448acfac763a5f1aa0a": {
            "type": "object",
            "additionalProperties": false,
            "properties": {
              "type": {
                "const": "doc"
              },
              "content": {
                "type": "array",
                "items": {
                  "$ref": "#/$defs/Ld4f7a5911742edb5b29565cc"
                },
                "maxItems": 10000
              }
            },
            "required": [
              "type",
              "content"
            ]
          }
        }
      }
    }
  },
  "updateLanguageWorkspace": {
    "method": "PATCH",
    "url": "/v1/admin/languages/workspaces/{workspaceId}",
    "body": {
      "$ref": "#/$defs/La7d58baba0b9f7f62c3f9195",
      "$defs": {
        "L278ee13fb67ca112c729bb7a": {
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
        "L3942e16f085f5ba91a3b9171": {
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
                    "$ref": "#/$defs/L4906b6e034cbef132f95c157"
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
                    "$ref": "#/$defs/L3942e16f085f5ba91a3b9171"
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
                    "$ref": "#/$defs/L3942e16f085f5ba91a3b9171"
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
        "L4906b6e034cbef132f95c157": {
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
        "L4a8194985b02dc4add1a35fb": {
          "type": "object",
          "additionalProperties": false,
          "properties": {
            "type": {
              "const": "doc"
            },
            "content": {
              "type": "array",
              "items": {
                "$ref": "#/$defs/L3942e16f085f5ba91a3b9171"
              },
              "maxItems": 10000
            }
          },
          "required": [
            "type",
            "content"
          ]
        },
        "La7d58baba0b9f7f62c3f9195": {
          "type": "object",
          "additionalProperties": false,
          "properties": {
            "values": {
              "type": "array",
              "items": {
                "type": "object",
                "additionalProperties": false,
                "properties": {
                  "fieldId": {
                    "type": "string",
                    "minLength": 1,
                    "maxLength": 160
                  },
                  "value": {
                    "anyOf": [
                      {
                        "type": "string",
                        "maxLength": 100000
                      },
                      {
                        "type": "null"
                      },
                      {
                        "$ref": "#/$defs/Ld80b5448acfac763a5f1aa0a"
                      },
                      {
                        "$ref": "#/$defs/L4a8194985b02dc4add1a35fb"
                      }
                    ],
                    "description": "Only the value kind authorized by the server-owned field descriptor; native rich-text schema and semantic sanitizer remain mandatory."
                  }
                },
                "required": [
                  "fieldId",
                  "value"
                ]
              },
              "maxItems": 64
            }
          },
          "required": [
            "values"
          ]
        },
        "Ld4f7a5911742edb5b29565cc": {
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
                    "$ref": "#/$defs/L278ee13fb67ca112c729bb7a"
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
                    "$ref": "#/$defs/Ld4f7a5911742edb5b29565cc"
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
                    "$ref": "#/$defs/Ld4f7a5911742edb5b29565cc"
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
        "Ld80b5448acfac763a5f1aa0a": {
          "type": "object",
          "additionalProperties": false,
          "properties": {
            "type": {
              "const": "doc"
            },
            "content": {
              "type": "array",
              "items": {
                "$ref": "#/$defs/Ld4f7a5911742edb5b29565cc"
              },
              "maxItems": 10000
            }
          },
          "required": [
            "type",
            "content"
          ]
        }
      }
    },
    "query": {
      "type": "object",
      "additionalProperties": false,
      "properties": {},
      "required": []
    },
    "params": {
      "type": "object",
      "additionalProperties": false,
      "properties": {
        "workspaceId": {
          "type": "string",
          "format": "uuid"
        }
      },
      "required": [
        "workspaceId"
      ]
    },
    "responses": {
      "200": {
        "$ref": "#/$defs/L1f9a82deb7118bc1c7b14860",
        "$defs": {
          "L01463977cf9c734f224f8dff": {
            "type": "string",
            "pattern": "^[1-9][0-9]{0,18}$"
          },
          "L1f9a82deb7118bc1c7b14860": {
            "type": "object",
            "additionalProperties": false,
            "required": [
              "id",
              "revision",
              "state"
            ],
            "properties": {
              "id": {
                "type": "string",
                "format": "uuid"
              },
              "revision": {
                "$ref": "#/$defs/L01463977cf9c734f224f8dff"
              },
              "state": {
                "type": "string",
                "enum": [
                  "editing",
                  "approved",
                  "stale",
                  "source_missing"
                ]
              }
            }
          }
        }
      }
    }
  },
  "approveLanguageWorkspace": {
    "method": "POST",
    "url": "/v1/admin/languages/workspaces/{workspaceId}/approve",
    "body": {
      "$ref": "#/$defs/L776846eefcb5cba422e6d69e",
      "$defs": {
        "L776846eefcb5cba422e6d69e": {
          "type": "object",
          "additionalProperties": false,
          "properties": {},
          "required": []
        }
      }
    },
    "query": {
      "type": "object",
      "additionalProperties": false,
      "properties": {},
      "required": []
    },
    "params": {
      "type": "object",
      "additionalProperties": false,
      "properties": {
        "workspaceId": {
          "type": "string",
          "format": "uuid"
        }
      },
      "required": [
        "workspaceId"
      ]
    },
    "responses": {
      "200": {
        "$ref": "#/$defs/L1f9a82deb7118bc1c7b14860",
        "$defs": {
          "L01463977cf9c734f224f8dff": {
            "type": "string",
            "pattern": "^[1-9][0-9]{0,18}$"
          },
          "L1f9a82deb7118bc1c7b14860": {
            "type": "object",
            "additionalProperties": false,
            "required": [
              "id",
              "revision",
              "state"
            ],
            "properties": {
              "id": {
                "type": "string",
                "format": "uuid"
              },
              "revision": {
                "$ref": "#/$defs/L01463977cf9c734f224f8dff"
              },
              "state": {
                "type": "string",
                "enum": [
                  "editing",
                  "approved",
                  "stale",
                  "source_missing"
                ]
              }
            }
          }
        }
      }
    }
  },
  "rebaseLanguageWorkspace": {
    "method": "POST",
    "url": "/v1/admin/languages/workspaces/{workspaceId}/rebase",
    "body": {
      "$ref": "#/$defs/Le11b1ce41fdb996ac2a62aff",
      "$defs": {
        "Le11b1ce41fdb996ac2a62aff": {
          "type": "object",
          "additionalProperties": false,
          "properties": {
            "targetId": {
              "type": "string",
              "format": "uuid"
            },
            "selectedFieldIds": {
              "type": "array",
              "items": {
                "type": "string",
                "minLength": 1,
                "maxLength": 160
              },
              "maxItems": 10000
            }
          },
          "required": [
            "targetId",
            "selectedFieldIds"
          ]
        }
      }
    },
    "query": {
      "type": "object",
      "additionalProperties": false,
      "properties": {},
      "required": []
    },
    "params": {
      "type": "object",
      "additionalProperties": false,
      "properties": {
        "workspaceId": {
          "type": "string",
          "format": "uuid"
        }
      },
      "required": [
        "workspaceId"
      ]
    },
    "responses": {
      "200": {
        "$ref": "#/$defs/L1f9a82deb7118bc1c7b14860",
        "$defs": {
          "L01463977cf9c734f224f8dff": {
            "type": "string",
            "pattern": "^[1-9][0-9]{0,18}$"
          },
          "L1f9a82deb7118bc1c7b14860": {
            "type": "object",
            "additionalProperties": false,
            "required": [
              "id",
              "revision",
              "state"
            ],
            "properties": {
              "id": {
                "type": "string",
                "format": "uuid"
              },
              "revision": {
                "$ref": "#/$defs/L01463977cf9c734f224f8dff"
              },
              "state": {
                "type": "string",
                "enum": [
                  "editing",
                  "approved",
                  "stale",
                  "source_missing"
                ]
              }
            }
          }
        }
      }
    }
  },
  "startLanguageReadinessCheck": {
    "method": "POST",
    "url": "/v1/admin/languages/{languageId}/checks",
    "body": {
      "$ref": "#/$defs/L0c3e2c1f63aeac10221e3ff6",
      "$defs": {
        "L0c3e2c1f63aeac10221e3ff6": {
          "type": "object",
          "additionalProperties": false,
          "properties": {
            "scope": {
              "type": "string",
              "enum": [
                "activation",
                "edition_update"
              ]
            },
            "workspaceIds": {
              "type": "array",
              "items": {
                "type": "string",
                "format": "uuid"
              },
              "maxItems": 10000
            }
          },
          "required": [
            "scope"
          ]
        }
      }
    },
    "query": {
      "type": "object",
      "additionalProperties": false,
      "properties": {},
      "required": []
    },
    "params": {
      "type": "object",
      "additionalProperties": false,
      "properties": {
        "languageId": {
          "type": "string",
          "format": "uuid"
        }
      },
      "required": [
        "languageId"
      ]
    },
    "responses": {
      "202": {
        "$ref": "#/$defs/Lce12b50af68063aa310998d9",
        "$defs": {
          "L349f414d9026d9e509edaa46": {
            "type": "object",
            "additionalProperties": false,
            "properties": {
              "family": {
                "type": "string",
                "enum": [
                  "interface",
                  "legal_site",
                  "presentation",
                  "artwork",
                  "team",
                  "editorial",
                  "taxonomy",
                  "form",
                  "commerce_product",
                  "delivery",
                  "commerce_legal",
                  "link_in_bio",
                  "notification"
                ]
              },
              "counts": {
                "$ref": "#/$defs/L78c881b5e934f60f62beaa05"
              }
            },
            "required": [
              "family",
              "counts"
            ]
          },
          "L78c881b5e934f60f62beaa05": {
            "type": "object",
            "additionalProperties": false,
            "properties": {
              "expected": {
                "type": "integer",
                "minimum": 0
              },
              "complete": {
                "type": "integer",
                "minimum": 0
              },
              "missing": {
                "type": "integer",
                "minimum": 0
              },
              "fallback": {
                "type": "integer",
                "minimum": 0
              },
              "warnings": {
                "type": "integer",
                "minimum": 0
              }
            },
            "required": [
              "expected",
              "complete",
              "missing",
              "fallback",
              "warnings"
            ]
          },
          "La5d434e8764b588ed2bd69e5": {
            "type": "object",
            "additionalProperties": false,
            "properties": {
              "code": {
                "type": "string",
                "maxLength": 80
              },
              "message": {
                "type": "string",
                "maxLength": 500
              },
              "field": {
                "type": "string",
                "maxLength": 200
              }
            },
            "required": [
              "code",
              "message"
            ]
          },
          "Lce12b50af68063aa310998d9": {
            "type": "object",
            "additionalProperties": false,
            "properties": {
              "id": {
                "type": "string",
                "format": "uuid"
              },
              "revision": {
                "type": "string",
                "pattern": "^[1-9][0-9]{0,18}$"
              },
              "languageId": {
                "type": "string",
                "format": "uuid"
              },
              "scope": {
                "type": "string",
                "enum": [
                  "activation",
                  "edition_update"
                ]
              },
              "state": {
                "type": "string",
                "enum": [
                  "queued",
                  "running",
                  "complete",
                  "obsolete",
                  "failed"
                ]
              },
              "policyRevision": {
                "type": "string",
                "pattern": "^[1-9][0-9]{0,18}$"
              },
              "sourceRevision": {
                "type": "string",
                "pattern": "^[1-9][0-9]{0,18}$"
              },
              "counts": {
                "$ref": "#/$defs/L78c881b5e934f60f62beaa05"
              },
              "families": {
                "type": "array",
                "items": {
                  "$ref": "#/$defs/L349f414d9026d9e509edaa46"
                },
                "maxItems": 13
              },
              "scannedTargets": {
                "type": "integer",
                "minimum": 0
              },
              "totalTargets": {
                "type": "integer",
                "minimum": 0
              },
              "digest": {
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
              "expiresAt": {
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
              "updatedAt": {
                "type": "string",
                "format": "date-time"
              },
              "reasons": {
                "type": "array",
                "items": {
                  "$ref": "#/$defs/La5d434e8764b588ed2bd69e5"
                },
                "maxItems": 64
              }
            },
            "required": [
              "id",
              "revision",
              "languageId",
              "scope",
              "state",
              "policyRevision",
              "sourceRevision",
              "counts",
              "families",
              "scannedTargets",
              "totalTargets",
              "digest",
              "expiresAt",
              "updatedAt",
              "reasons"
            ]
          }
        }
      }
    }
  },
  "readLanguageReadinessCheck": {
    "method": "GET",
    "url": "/v1/admin/languages/checks/{checkId}",
    "body": null,
    "query": {
      "type": "object",
      "additionalProperties": false,
      "properties": {},
      "required": []
    },
    "params": {
      "type": "object",
      "additionalProperties": false,
      "properties": {
        "checkId": {
          "type": "string",
          "format": "uuid"
        }
      },
      "required": [
        "checkId"
      ]
    },
    "responses": {
      "200": {
        "$ref": "#/$defs/Lce12b50af68063aa310998d9",
        "$defs": {
          "L349f414d9026d9e509edaa46": {
            "type": "object",
            "additionalProperties": false,
            "properties": {
              "family": {
                "type": "string",
                "enum": [
                  "interface",
                  "legal_site",
                  "presentation",
                  "artwork",
                  "team",
                  "editorial",
                  "taxonomy",
                  "form",
                  "commerce_product",
                  "delivery",
                  "commerce_legal",
                  "link_in_bio",
                  "notification"
                ]
              },
              "counts": {
                "$ref": "#/$defs/L78c881b5e934f60f62beaa05"
              }
            },
            "required": [
              "family",
              "counts"
            ]
          },
          "L78c881b5e934f60f62beaa05": {
            "type": "object",
            "additionalProperties": false,
            "properties": {
              "expected": {
                "type": "integer",
                "minimum": 0
              },
              "complete": {
                "type": "integer",
                "minimum": 0
              },
              "missing": {
                "type": "integer",
                "minimum": 0
              },
              "fallback": {
                "type": "integer",
                "minimum": 0
              },
              "warnings": {
                "type": "integer",
                "minimum": 0
              }
            },
            "required": [
              "expected",
              "complete",
              "missing",
              "fallback",
              "warnings"
            ]
          },
          "La5d434e8764b588ed2bd69e5": {
            "type": "object",
            "additionalProperties": false,
            "properties": {
              "code": {
                "type": "string",
                "maxLength": 80
              },
              "message": {
                "type": "string",
                "maxLength": 500
              },
              "field": {
                "type": "string",
                "maxLength": 200
              }
            },
            "required": [
              "code",
              "message"
            ]
          },
          "Lce12b50af68063aa310998d9": {
            "type": "object",
            "additionalProperties": false,
            "properties": {
              "id": {
                "type": "string",
                "format": "uuid"
              },
              "revision": {
                "type": "string",
                "pattern": "^[1-9][0-9]{0,18}$"
              },
              "languageId": {
                "type": "string",
                "format": "uuid"
              },
              "scope": {
                "type": "string",
                "enum": [
                  "activation",
                  "edition_update"
                ]
              },
              "state": {
                "type": "string",
                "enum": [
                  "queued",
                  "running",
                  "complete",
                  "obsolete",
                  "failed"
                ]
              },
              "policyRevision": {
                "type": "string",
                "pattern": "^[1-9][0-9]{0,18}$"
              },
              "sourceRevision": {
                "type": "string",
                "pattern": "^[1-9][0-9]{0,18}$"
              },
              "counts": {
                "$ref": "#/$defs/L78c881b5e934f60f62beaa05"
              },
              "families": {
                "type": "array",
                "items": {
                  "$ref": "#/$defs/L349f414d9026d9e509edaa46"
                },
                "maxItems": 13
              },
              "scannedTargets": {
                "type": "integer",
                "minimum": 0
              },
              "totalTargets": {
                "type": "integer",
                "minimum": 0
              },
              "digest": {
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
              "expiresAt": {
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
              "updatedAt": {
                "type": "string",
                "format": "date-time"
              },
              "reasons": {
                "type": "array",
                "items": {
                  "$ref": "#/$defs/La5d434e8764b588ed2bd69e5"
                },
                "maxItems": 64
              }
            },
            "required": [
              "id",
              "revision",
              "languageId",
              "scope",
              "state",
              "policyRevision",
              "sourceRevision",
              "counts",
              "families",
              "scannedTargets",
              "totalTargets",
              "digest",
              "expiresAt",
              "updatedAt",
              "reasons"
            ]
          }
        }
      }
    }
  },
  "listLanguageReadinessIssues": {
    "method": "GET",
    "url": "/v1/admin/languages/checks/{checkId}/issues",
    "body": null,
    "query": {
      "type": "object",
      "additionalProperties": false,
      "properties": {
        "cursor": {
          "type": "string",
          "maxLength": 4096
        },
        "limit": {
          "type": "integer",
          "minimum": 1,
          "maximum": 100,
          "default": 50
        },
        "family": {
          "type": "string",
          "enum": [
            "interface",
            "legal_site",
            "presentation",
            "artwork",
            "team",
            "editorial",
            "taxonomy",
            "form",
            "commerce_product",
            "delivery",
            "commerce_legal",
            "link_in_bio",
            "notification"
          ]
        },
        "severity": {
          "type": "string",
          "enum": [
            "blocking",
            "warning",
            "fallback"
          ]
        }
      },
      "required": []
    },
    "params": {
      "type": "object",
      "additionalProperties": false,
      "properties": {
        "checkId": {
          "type": "string",
          "format": "uuid"
        }
      },
      "required": [
        "checkId"
      ]
    },
    "responses": {
      "200": {
        "$ref": "#/$defs/Ld123f271744ec6b6c55fb8d1",
        "$defs": {
          "L9d74dc9c4a8881e4f8c8514d": {
            "type": "object",
            "additionalProperties": false,
            "properties": {
              "id": {
                "type": "string",
                "format": "uuid"
              },
              "languageId": {
                "type": "string",
                "format": "uuid"
              },
              "family": {
                "type": "string",
                "enum": [
                  "interface",
                  "legal_site",
                  "presentation",
                  "artwork",
                  "team",
                  "editorial",
                  "taxonomy",
                  "form",
                  "commerce_product",
                  "delivery",
                  "commerce_legal",
                  "link_in_bio",
                  "notification"
                ]
              },
              "ownerId": {
                "type": "string",
                "minLength": 1,
                "maxLength": 160
              },
              "sourceVersionId": {
                "type": "string",
                "minLength": 1,
                "maxLength": 160
              },
              "fieldId": {
                "type": "string",
                "minLength": 1,
                "maxLength": 160
              },
              "severity": {
                "type": "string",
                "enum": [
                  "blocking",
                  "warning",
                  "fallback"
                ]
              },
              "reason": {
                "type": "string",
                "maxLength": 100
              },
              "correctionPath": {
                "type": "string",
                "pattern": "^/(?!/)[^\\r\\n]*$",
                "maxLength": 2048
              }
            },
            "required": [
              "id",
              "languageId",
              "family",
              "ownerId",
              "sourceVersionId",
              "fieldId",
              "severity",
              "reason"
            ]
          },
          "Ld123f271744ec6b6c55fb8d1": {
            "type": "object",
            "additionalProperties": false,
            "properties": {
              "items": {
                "type": "array",
                "items": {
                  "$ref": "#/$defs/L9d74dc9c4a8881e4f8c8514d"
                },
                "maxItems": 100
              },
              "total": {
                "type": "integer",
                "minimum": 0
              },
              "nextCursor": {
                "type": [
                  "string",
                  "null"
                ],
                "maxLength": 4096
              }
            },
            "required": [
              "items",
              "total",
              "nextCursor"
            ]
          }
        }
      }
    }
  },
  "transitionLanguage": {
    "method": "POST",
    "url": "/v1/admin/languages/{languageId}/transitions",
    "body": {
      "$ref": "#/$defs/L26b8c8d11fc0382f85f2c86d",
      "$defs": {
        "L26b8c8d11fc0382f85f2c86d": {
          "oneOf": [
            {
              "type": "object",
              "additionalProperties": false,
              "properties": {
                "action": {
                  "type": "string",
                  "enum": [
                    "activate",
                    "publish_translations"
                  ]
                },
                "checkId": {
                  "type": "string",
                  "format": "uuid"
                },
                "checkDigest": {
                  "type": "string",
                  "pattern": "^[a-f0-9]{64}$"
                }
              },
              "required": [
                "action",
                "checkId",
                "checkDigest"
              ]
            },
            {
              "type": "object",
              "additionalProperties": false,
              "properties": {
                "action": {
                  "type": "string",
                  "enum": [
                    "deactivate"
                  ]
                }
              },
              "required": [
                "action"
              ]
            }
          ]
        }
      }
    },
    "query": {
      "type": "object",
      "additionalProperties": false,
      "properties": {},
      "required": []
    },
    "params": {
      "type": "object",
      "additionalProperties": false,
      "properties": {
        "languageId": {
          "type": "string",
          "format": "uuid"
        }
      },
      "required": [
        "languageId"
      ]
    },
    "responses": {
      "202": {
        "$ref": "#/$defs/La3b2653b90351b81608a731f",
        "$defs": {
          "La3b2653b90351b81608a731f": {
            "type": "object",
            "additionalProperties": false,
            "properties": {
              "id": {
                "type": "string",
                "format": "uuid"
              },
              "key": {
                "type": "string",
                "format": "uuid"
              },
              "languageId": {
                "type": "string",
                "format": "uuid"
              },
              "action": {
                "type": "string",
                "enum": [
                  "activate",
                  "deactivate",
                  "publish_translations"
                ]
              },
              "state": {
                "type": "string",
                "enum": [
                  "accepted",
                  "checking",
                  "committed",
                  "propagating",
                  "effective",
                  "failed",
                  "unconfirmed"
                ]
              },
              "expectedRevision": {
                "type": "string",
                "pattern": "^[1-9][0-9]{0,18}$"
              },
              "committedRevision": {
                "anyOf": [
                  {
                    "type": "string",
                    "pattern": "^[1-9][0-9]{0,18}$"
                  },
                  {
                    "type": "null"
                  }
                ]
              },
              "createdAt": {
                "type": "string",
                "format": "date-time"
              },
              "deadlineAt": {
                "type": "string",
                "format": "date-time"
              },
              "updatedAt": {
                "type": "string",
                "format": "date-time"
              },
              "reasons": {
                "type": "array",
                "items": {
                  "$ref": "#/$defs/La5d434e8764b588ed2bd69e5"
                },
                "maxItems": 64
              }
            },
            "required": [
              "id",
              "key",
              "languageId",
              "action",
              "state",
              "expectedRevision",
              "committedRevision",
              "createdAt",
              "deadlineAt",
              "updatedAt",
              "reasons"
            ]
          },
          "La5d434e8764b588ed2bd69e5": {
            "type": "object",
            "additionalProperties": false,
            "properties": {
              "code": {
                "type": "string",
                "maxLength": 80
              },
              "message": {
                "type": "string",
                "maxLength": 500
              },
              "field": {
                "type": "string",
                "maxLength": 200
              }
            },
            "required": [
              "code",
              "message"
            ]
          }
        }
      }
    }
  },
  "readLanguageOperation": {
    "method": "GET",
    "url": "/v1/admin/languages/operations/{operationId}",
    "body": null,
    "query": {
      "type": "object",
      "additionalProperties": false,
      "properties": {},
      "required": []
    },
    "params": {
      "type": "object",
      "additionalProperties": false,
      "properties": {
        "operationId": {
          "type": "string",
          "format": "uuid"
        }
      },
      "required": [
        "operationId"
      ]
    },
    "responses": {
      "200": {
        "$ref": "#/$defs/La3b2653b90351b81608a731f",
        "$defs": {
          "La3b2653b90351b81608a731f": {
            "type": "object",
            "additionalProperties": false,
            "properties": {
              "id": {
                "type": "string",
                "format": "uuid"
              },
              "key": {
                "type": "string",
                "format": "uuid"
              },
              "languageId": {
                "type": "string",
                "format": "uuid"
              },
              "action": {
                "type": "string",
                "enum": [
                  "activate",
                  "deactivate",
                  "publish_translations"
                ]
              },
              "state": {
                "type": "string",
                "enum": [
                  "accepted",
                  "checking",
                  "committed",
                  "propagating",
                  "effective",
                  "failed",
                  "unconfirmed"
                ]
              },
              "expectedRevision": {
                "type": "string",
                "pattern": "^[1-9][0-9]{0,18}$"
              },
              "committedRevision": {
                "anyOf": [
                  {
                    "type": "string",
                    "pattern": "^[1-9][0-9]{0,18}$"
                  },
                  {
                    "type": "null"
                  }
                ]
              },
              "createdAt": {
                "type": "string",
                "format": "date-time"
              },
              "deadlineAt": {
                "type": "string",
                "format": "date-time"
              },
              "updatedAt": {
                "type": "string",
                "format": "date-time"
              },
              "reasons": {
                "type": "array",
                "items": {
                  "$ref": "#/$defs/La5d434e8764b588ed2bd69e5"
                },
                "maxItems": 64
              }
            },
            "required": [
              "id",
              "key",
              "languageId",
              "action",
              "state",
              "expectedRevision",
              "committedRevision",
              "createdAt",
              "deadlineAt",
              "updatedAt",
              "reasons"
            ]
          },
          "La5d434e8764b588ed2bd69e5": {
            "type": "object",
            "additionalProperties": false,
            "properties": {
              "code": {
                "type": "string",
                "maxLength": 80
              },
              "message": {
                "type": "string",
                "maxLength": 500
              },
              "field": {
                "type": "string",
                "maxLength": 200
              }
            },
            "required": [
              "code",
              "message"
            ]
          }
        }
      }
    }
  },
  "readLanguageOperationByKey": {
    "method": "GET",
    "url": "/v1/admin/languages/operations/by-key/{key}",
    "body": null,
    "query": {
      "type": "object",
      "additionalProperties": false,
      "properties": {},
      "required": []
    },
    "params": {
      "type": "object",
      "additionalProperties": false,
      "properties": {
        "key": {
          "type": "string",
          "format": "uuid"
        }
      },
      "required": [
        "key"
      ]
    },
    "responses": {
      "200": {
        "$ref": "#/$defs/La3b2653b90351b81608a731f",
        "$defs": {
          "La3b2653b90351b81608a731f": {
            "type": "object",
            "additionalProperties": false,
            "properties": {
              "id": {
                "type": "string",
                "format": "uuid"
              },
              "key": {
                "type": "string",
                "format": "uuid"
              },
              "languageId": {
                "type": "string",
                "format": "uuid"
              },
              "action": {
                "type": "string",
                "enum": [
                  "activate",
                  "deactivate",
                  "publish_translations"
                ]
              },
              "state": {
                "type": "string",
                "enum": [
                  "accepted",
                  "checking",
                  "committed",
                  "propagating",
                  "effective",
                  "failed",
                  "unconfirmed"
                ]
              },
              "expectedRevision": {
                "type": "string",
                "pattern": "^[1-9][0-9]{0,18}$"
              },
              "committedRevision": {
                "anyOf": [
                  {
                    "type": "string",
                    "pattern": "^[1-9][0-9]{0,18}$"
                  },
                  {
                    "type": "null"
                  }
                ]
              },
              "createdAt": {
                "type": "string",
                "format": "date-time"
              },
              "deadlineAt": {
                "type": "string",
                "format": "date-time"
              },
              "updatedAt": {
                "type": "string",
                "format": "date-time"
              },
              "reasons": {
                "type": "array",
                "items": {
                  "$ref": "#/$defs/La5d434e8764b588ed2bd69e5"
                },
                "maxItems": 64
              }
            },
            "required": [
              "id",
              "key",
              "languageId",
              "action",
              "state",
              "expectedRevision",
              "committedRevision",
              "createdAt",
              "deadlineAt",
              "updatedAt",
              "reasons"
            ]
          },
          "La5d434e8764b588ed2bd69e5": {
            "type": "object",
            "additionalProperties": false,
            "properties": {
              "code": {
                "type": "string",
                "maxLength": 80
              },
              "message": {
                "type": "string",
                "maxLength": 500
              },
              "field": {
                "type": "string",
                "maxLength": 200
              }
            },
            "required": [
              "code",
              "message"
            ]
          }
        }
      }
    }
  },
  "readLanguageHistory": {
    "method": "GET",
    "url": "/v1/admin/languages/history",
    "body": null,
    "query": {
      "type": "object",
      "additionalProperties": false,
      "properties": {
        "cursor": {
          "type": "string",
          "maxLength": 4096
        },
        "limit": {
          "type": "integer",
          "minimum": 1,
          "maximum": 100,
          "default": 50
        }
      },
      "required": []
    },
    "params": {
      "type": "object",
      "additionalProperties": false,
      "properties": {},
      "required": []
    },
    "responses": {
      "200": {
        "$ref": "#/$defs/Ld3920029ea95b311ab3e77ba",
        "$defs": {
          "Ld3920029ea95b311ab3e77ba": {
            "type": "object",
            "additionalProperties": false,
            "properties": {
              "items": {
                "type": "array",
                "items": {
                  "$ref": "#/$defs/Lfe135a249903e01b23e32e70"
                },
                "maxItems": 100
              },
              "nextCursor": {
                "type": [
                  "string",
                  "null"
                ],
                "maxLength": 4096
              }
            },
            "required": [
              "items",
              "nextCursor"
            ]
          },
          "Lfe135a249903e01b23e32e70": {
            "type": "object",
            "additionalProperties": false,
            "properties": {
              "id": {
                "type": "string",
                "format": "uuid"
              },
              "action": {
                "type": "string",
                "minLength": 1,
                "maxLength": 160
              },
              "actor": {
                "type": "string",
                "maxLength": 200
              },
              "at": {
                "type": "string",
                "format": "date-time"
              },
              "beforeRevision": {
                "type": "string",
                "pattern": "^[1-9][0-9]{0,18}$"
              },
              "afterRevision": {
                "type": "string",
                "pattern": "^[1-9][0-9]{0,18}$"
              },
              "result": {
                "type": "string",
                "enum": [
                  "effective",
                  "failed",
                  "unconfirmed",
                  "saved"
                ]
              },
              "operationId": {
                "anyOf": [
                  {
                    "type": "string",
                    "format": "uuid"
                  },
                  {
                    "type": "null"
                  }
                ]
              }
            },
            "required": [
              "id",
              "action",
              "actor",
              "at",
              "beforeRevision",
              "afterRevision",
              "result",
              "operationId"
            ]
          }
        }
      }
    }
  },
  "probeLanguageConsumer": {
    "method": "GET",
    "url": "/v1/internal/languages/ready",
    "body": null,
    "query": {
      "type": "object",
      "additionalProperties": false,
      "properties": {
        "challengeId": {
          "type": "string",
          "format": "uuid"
        }
      },
      "required": [
        "challengeId"
      ]
    },
    "params": {
      "type": "object",
      "additionalProperties": false,
      "properties": {},
      "required": []
    },
    "responses": {
      "200": {
        "$ref": "#/$defs/L249b35523a9da1be015ae2fd",
        "$defs": {
          "L01463977cf9c734f224f8dff": {
            "type": "string",
            "pattern": "^[1-9][0-9]{0,18}$"
          },
          "L249b35523a9da1be015ae2fd": {
            "type": "object",
            "additionalProperties": false,
            "properties": {
              "siteId": {
                "type": "string",
                "format": "uuid"
              },
              "slotId": {
                "type": "string",
                "format": "uuid"
              },
              "deploymentId": {
                "type": "string",
                "minLength": 1,
                "maxLength": 160
              },
              "challengeId": {
                "type": "string",
                "format": "uuid"
              },
              "contractVersion": {
                "type": "integer",
                "const": 1
              },
              "runtimeRequired": {
                "type": "boolean",
                "const": true
              },
              "observedPublicRevision": {
                "$ref": "#/$defs/L01463977cf9c734f224f8dff"
              },
              "catalogueIds": {
                "type": "array",
                "items": {
                  "type": "string",
                  "maxLength": 160
                },
                "minItems": 1,
                "maxItems": 32,
                "uniqueItems": true
              },
              "descriptorVersion": {
                "$ref": "#/$defs/L01463977cf9c734f224f8dff"
              },
              "modules": {
                "type": "array",
                "items": {
                  "type": "string",
                  "maxLength": 80
                },
                "minItems": 1,
                "maxItems": 7,
                "uniqueItems": true
              },
              "observedAt": {
                "type": "string",
                "format": "date-time"
              }
            },
            "required": [
              "siteId",
              "slotId",
              "deploymentId",
              "challengeId",
              "contractVersion",
              "runtimeRequired",
              "observedPublicRevision",
              "catalogueIds",
              "descriptorVersion",
              "modules",
              "observedAt"
            ]
          }
        }
      }
    }
  },
  "readFrontendCachedLanguagePolicy": {
    "method": "GET",
    "url": "/api/languages/policy",
    "body": null,
    "query": {
      "type": "object",
      "additionalProperties": false,
      "properties": {},
      "required": []
    },
    "params": {
      "type": "object",
      "additionalProperties": false,
      "properties": {},
      "required": []
    },
    "responses": {
      "200": {
        "$ref": "#/$defs/L86b16b620b19895d98662d9d",
        "$defs": {
          "L86b16b620b19895d98662d9d": {
            "type": "object",
            "additionalProperties": false,
            "properties": {
              "contractVersion": {
                "type": "integer",
                "const": 1
              },
              "siteId": {
                "type": "string",
                "format": "uuid"
              },
              "mode": {
                "type": "string",
                "enum": [
                  "bootstrap",
                  "managed"
                ]
              },
              "publicRevision": {
                "type": "string",
                "pattern": "^[1-9][0-9]{0,18}$"
              },
              "defaultLocale": {
                "type": "string",
                "pattern": "^[a-z]{2,3}(?:-[a-z0-9]{2,8})*$",
                "maxLength": 35
              },
              "locales": {
                "type": "array",
                "items": {
                  "$ref": "#/$defs/Lc930bf0efb5201b3fc169083"
                },
                "maxItems": 8,
                "minItems": 1
              },
              "retiredCodes": {
                "type": "array",
                "items": {
                  "type": "string",
                  "pattern": "^[a-z]{2,3}(?:-[a-z0-9]{2,8})*$",
                  "maxLength": 35
                }
              },
              "catalogueId": {
                "type": "string",
                "minLength": 1,
                "maxLength": 160
              },
              "issuedAt": {
                "type": "string",
                "format": "date-time"
              },
              "validUntil": {
                "type": "string",
                "format": "date-time"
              }
            },
            "required": [
              "contractVersion",
              "siteId",
              "mode",
              "publicRevision",
              "defaultLocale",
              "locales",
              "retiredCodes",
              "catalogueId",
              "issuedAt",
              "validUntil"
            ]
          },
          "Lc930bf0efb5201b3fc169083": {
            "type": "object",
            "additionalProperties": false,
            "properties": {
              "code": {
                "type": "string",
                "pattern": "^[a-z]{2,3}(?:-[a-z0-9]{2,8})*$",
                "maxLength": 35
              },
              "intlLocale": {
                "type": "string",
                "maxLength": 35
              },
              "label": {
                "type": "string",
                "minLength": 1,
                "maxLength": 80
              },
              "direction": {
                "type": "string",
                "enum": [
                  "ltr"
                ]
              }
            },
            "required": [
              "code",
              "intlLocale",
              "label",
              "direction"
            ]
          }
        }
      }
    }
  }
} as const;
