// Generated from Inventory033 by backend/scripts/generate-contracts.ts. Do not edit.
export interface paths {
    "/v1/admin/inventory/artworks": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: operations["inventoryGetArtworks"];
        put?: never;
        post: operations["inventoryCreateWork"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v1/admin/inventory/artworks/{artworkId}/draft": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put: operations["inventoryReplaceDraft"];
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v1/admin/inventory/artworks/{artworkId}/publish": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post: operations["inventoryPublishWork"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v1/admin/inventory/artworks/{artworkId}/unpublish": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post: operations["inventoryUnpublishWork"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v1/admin/inventory/artworks/{artworkId}/archive": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post: operations["inventoryArchiveWork"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v1/admin/inventory/artworks/{artworkId}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: operations["inventoryGetArtworksArtworkD"];
        put?: never;
        post?: never;
        delete: operations["inventoryDeleteWork"];
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v1/admin/inventory/artworks/{artworkId}/units": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: operations["inventoryGetArtworksArtworkDUnits"];
        put?: never;
        post: operations["inventoryCreateUnit"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v1/admin/inventory/units/{unitId}/logistics": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch: operations["inventoryUpdateUnitLogistics"];
        trace?: never;
    };
    "/v1/admin/inventory/units/{unitId}/archive": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post: operations["inventoryArchiveUnit"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v1/admin/inventory/units/{unitId}/reservations": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post: operations["inventoryReserveUnit"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v1/admin/inventory/operations/{operationId}/release": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post: operations["inventoryReleaseReservation"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v1/admin/inventory/units/{unitId}/movements": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post: operations["inventoryMoveUnit"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v1/admin/inventory/units/{unitId}/loans": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post: operations["inventoryLoanUnit"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v1/admin/inventory/operations/{operationId}/return": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /** @description Enregistrer le retour physique des exemplaires d’un prêt ou d’un dépôt, sans annuler le contrat financier, sa commission ou ses règlements. Une restitution de dépôt entrant conserve le propriétaire et utilise returned_to_owner. La forme et le nom historiques de la commande restent compatibles. */
        post: operations["inventoryReturnLoan"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v1/admin/inventory/operations/{operationId}/correct": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post: operations["inventoryCorrectLogisticsOperation"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v1/admin/inventory/acquisitions": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post: operations["inventoryRecordAcquisition"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v1/admin/inventory/expenses": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: operations["inventoryListExpenses"];
        put?: never;
        post: operations["inventoryRecordExpense"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v1/admin/inventory/deposits": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: operations["inventoryListDeposits"];
        put?: never;
        post: operations["inventoryRecordDeposit"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v1/admin/inventory/sales": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: operations["inventoryListSales"];
        put?: never;
        post: operations["inventoryRecordSale"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v1/admin/inventory/documents": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: operations["inventoryGetDocuments"];
        put?: never;
        post: operations["inventoryPrepareDocument"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v1/admin/inventory/documents/{documentId}/draft": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put: operations["inventoryReplaceDocumentDraft"];
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v1/admin/inventory/documents/{documentId}/issue": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post: operations["inventoryIssueDocument"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v1/admin/inventory/payments": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post: operations["inventoryRecordPayment"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v1/admin/inventory/refunds": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post: operations["inventoryRecordRefund"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v1/admin/inventory/media/{mediaId}/revoke-public": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post: operations["inventoryRevokePublicMedia"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v1/admin/inventory/media/{mediaId}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: operations["inventoryReadMedia"];
        put?: never;
        post?: never;
        delete: operations["inventoryDeleteMedia"];
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v1/admin/inventory/imports/{batchId}/confirm": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post: operations["inventoryConfirmImport"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v1/admin/inventory/migrations/{batchId}/confirm": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post: operations["inventoryConfirmMigration"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v1/admin/inventory/expenses/{expenseId}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: operations["inventoryReadExpense"];
        put: operations["inventoryReplaceExpense"];
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v1/admin/inventory/expenses/{expenseId}/reallocate": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post: operations["inventoryReallocateExpense"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v1/admin/inventory/finance/entries/{entryId}/correct": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post: operations["inventoryCorrectLedgerEntry"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v1/admin/inventory/finance/operations/{operationId}/cancel": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post: operations["inventoryCancelFinancialOperation"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v1/admin/inventory/deposits/{operationId}/financial-terms": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put: operations["inventoryUpdateDepositTerms"];
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v1/admin/inventory/seller-fiscal-profile": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: operations["inventoryGetSellerFiscalProfile"];
        put: operations["inventoryReplaceSellerProfile"];
        post: operations["inventoryCreateSellerProfile"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v1/admin/inventory/seller-fiscal-profile/qualify": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post: operations["inventoryQualifySellerProfile"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v1/admin/inventory/tax-treatments": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: operations["inventoryGetTaxTreatments"];
        put?: never;
        post: operations["inventoryCreateTaxTreatment"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v1/admin/inventory/tax-treatments/{treatmentId}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: operations["inventoryReadTaxTreatment"];
        put: operations["inventoryReplaceTaxTreatment"];
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v1/admin/inventory/tax-treatments/{treatmentId}/qualify": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post: operations["inventoryQualifyTaxTreatment"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v1/admin/inventory/document-series": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: operations["inventoryGetDocumentSeries"];
        put?: never;
        post: operations["inventoryCreateDocumentSeries"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v1/admin/inventory/document-series/{seriesId}/deactivate": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post: operations["inventoryDeactivateDocumentSeries"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v1/admin/inventory/access": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: operations["inventoryGetAccess"];
        put?: never;
        post: operations["inventorySetAssignment"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v1/admin/inventory/access/{assignmentId}/revoke": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post: operations["inventoryRevokeAssignment"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v1/admin/inventory/sales/{saleId}/returns": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post: operations["inventoryReceiveSalesReturn"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v1/admin/inventory/sales/{saleId}/restock": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post: operations["inventoryRestockReturnedUnit"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v1/admin/inventory/deposits/{depositOperationId}/settlements": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post: operations["inventoryRecordOwnerSettlement"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v1/admin/inventory/artists": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: operations["inventoryListArtists"];
        put?: never;
        post: operations["inventoryCreateArtist"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v1/admin/inventory/artists/{id}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: operations["inventoryReadArtist"];
        put: operations["inventoryUpdateArtist"];
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v1/admin/inventory/origins": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: operations["inventoryListOrigins"];
        put?: never;
        post: operations["inventoryCreateOrigin"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v1/admin/inventory/origins/{id}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: operations["inventoryReadOrigin"];
        put: operations["inventoryUpdateOrigin"];
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v1/admin/inventory/parties": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: operations["inventoryListParties"];
        put?: never;
        post: operations["inventoryCreateParty"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v1/admin/inventory/parties/{id}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: operations["inventoryReadParty"];
        put: operations["inventoryUpdateParty"];
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v1/admin/inventory/locations": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: operations["inventoryListLocations"];
        put?: never;
        post: operations["inventoryCreateLocation"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v1/admin/inventory/locations/{id}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: operations["inventoryReadLocation"];
        put: operations["inventoryUpdateLocation"];
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v1/admin/inventory/types": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: operations["inventoryListTypes"];
        put?: never;
        post: operations["inventoryCreateType"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v1/admin/inventory/types/{id}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: operations["inventoryReadType"];
        put: operations["inventoryUpdateType"];
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v1/admin/inventory/categories": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: operations["inventoryListCategories"];
        put?: never;
        post: operations["inventoryCreateCategory"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v1/admin/inventory/categories/{id}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: operations["inventoryReadCategory"];
        put: operations["inventoryUpdateCategory"];
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v1/admin/inventory/capabilities": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: operations["inventoryGetCapabilities"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v1/admin/inventory/units/{unitId}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: operations["inventoryGetUnitsUnitD"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v1/admin/inventory/operations": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: operations["inventoryGetOperations"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v1/admin/inventory/media": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: operations["inventoryGetMedia"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v1/admin/inventory/units/{unitId}/finance": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: operations["inventoryGetUnitsUnitDFinance"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v1/admin/inventory/sales/{saleId}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: operations["inventoryGetSalesSaleD"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v1/admin/inventory/finance/ledger": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: operations["inventoryGetFinanceLedger"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v1/admin/inventory/documents/{documentId}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: operations["inventoryGetDocumentsDocumentD"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v1/admin/inventory/documents/{documentId}/transmissions": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: operations["inventoryGetDocumentsDocumentDTransmissions"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v1/admin/inventory/imports/{batchId}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: operations["inventoryGetImportsBatchD"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v1/admin/inventory/artworks/{artworkId}/preview": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post: operations["inventoryPreviewArtwork"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v1/admin/inventory/media/upload-attempts": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post: operations["inventoryCreateMediaUpload"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v1/admin/inventory/media/upload-attempts/{attemptId}/finalize": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post: operations["inventoryFinalizeMediaUpload"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v1/admin/inventory/attachments/upload-attempts": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post: operations["inventoryCreateAttachmentsUpload"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v1/admin/inventory/attachments/upload-attempts/{attemptId}/finalize": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post: operations["inventoryFinalizeAttachmentsUpload"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v1/admin/inventory/media/{mediaId}/original": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: operations["inventoryGetMediaMediaDOriginal"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head: operations["inventoryHeadMediaMediaDOriginal"];
        patch?: never;
        trace?: never;
    };
    "/v1/admin/inventory/media/{mediaId}/preview": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: operations["inventoryGetMediaMediaDPreview"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head: operations["inventoryHeadMediaMediaDPreview"];
        patch?: never;
        trace?: never;
    };
    "/v1/admin/inventory/documents/{documentId}/pdf": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: operations["inventoryGetDocumentsDocumentDPdf"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head: operations["inventoryHeadDocumentsDocumentDPdf"];
        patch?: never;
        trace?: never;
    };
    "/v1/admin/inventory/imports": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post: operations["inventoryPrepareImport"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v1/admin/inventory/imports/{batchId}/validate": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post: operations["inventoryValidateImport"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v1/admin/inventory/migrations/artlogic": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post: operations["inventoryPrepareMigration"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v1/admin/inventory/migrations/{batchId}/validate": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post: operations["inventoryValidateMigration"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v1/admin/inventory/access/{assignmentId}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put: operations["inventoryReplaceAssignment"];
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v1/admin/inventory/artworks/{artworkId}/private-notes": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: operations["inventoryGetPrivateNotes"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v1/admin/inventory/previews/{previewId}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: operations["inventoryReadPreview"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v1/admin/inventory/operations/{operationId}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: operations["inventoryReadLogisticsOperation"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v1/admin/inventory/units": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: operations["inventoryListUnits"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v1/admin/inventory/deposits/{operationId}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: operations["inventoryReadDeposit"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v1/admin/inventory/document-series/{seriesId}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: operations["inventoryReadDocumentSeries"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v1/admin/inventory/imports/drafts": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post: operations["inventoryCreateImportDraft"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v1/admin/inventory/imports/{batchId}/uploads": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post: operations["inventoryCreateImportTransfer"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v1/admin/inventory/imports/{batchId}/cancel": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post: operations["inventoryCancelImport"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v1/admin/inventory/imports/{batchId}/resume": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post: operations["inventoryResumeImport"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v1/admin/inventory/imports/{batchId}/uploads/{uploadId}/chunks/{index}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        /** @description Direct bounded transfer using the upload capability. Current administrator authority is rechecked; CORS is limited to ADMIN_ORIGIN. */
        put: operations["inventoryUploadImportChunk"];
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v1/admin/inventory/imports/{batchId}/uploads/{uploadId}/seal": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /** @description Direct bounded transfer using the upload capability. Current administrator authority is rechecked; CORS is limited to ADMIN_ORIGIN. */
        post: operations["inventorySealImportTransfer"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/v1/admin/inventory/imports/template": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get: operations["inventoryGetImportTemplate"];
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
        /** Format: uuid */
        InventoryUUID: string;
        InventoryRevision: string;
        InventoryReference: string;
        InventoryLocalizedText: {
            [key: string]: string;
        };
        InventoryE_LocalizedRichText: {
            [key: string]: components["schemas"]["InventoryE_RichText"];
        };
        InventoryE_RichText: {
            /** @constant */
            type: "doc";
            content: components["schemas"]["InventoryE_RichNode"][];
        };
        InventoryE_RichNode: {
            /** @constant */
            type: "text";
            text: string;
            marks?: components["schemas"]["InventoryE_RichMark"][];
        } | {
            /** @constant */
            type: "heading";
            attrs: {
                /** @enum {unknown} */
                level: 2 | 3;
            };
            content?: components["schemas"]["InventoryE_RichNode"][];
        } | {
            /** @enum {unknown} */
            type: "paragraph" | "bulletList" | "orderedList" | "listItem" | "blockquote";
            content?: components["schemas"]["InventoryE_RichNode"][];
        } | {
            /** @constant */
            type: "hardBreak";
        };
        InventoryE_RichMark: {
            /** @enum {unknown} */
            type: "bold" | "italic";
        } | {
            /** @constant */
            type: "link";
            attrs: {
                href: string;
            };
        };
        InventoryMoney: {
            minor: string;
            currency: string;
            scale: number;
        };
        InventoryMediaSelection: {
            /** Format: uuid */
            mediaId: string;
            /** @enum {string} */
            visibility: "internal" | "public_candidate";
            position: number;
            primary: boolean;
            alt?: {
                [key: string]: string;
            };
            caption?: {
                [key: string]: string;
            };
            credit?: {
                [key: string]: string;
            };
            focus?: {
                x: number;
                y: number;
            };
        };
        InventoryWorkDraft: {
            title: {
                [key: string]: string;
            };
            /** @enum {string} */
            recordKind?: "artwork" | "object";
            artistId?: string | null;
            originId?: string | null;
            attribution?: {
                [key: string]: string;
            };
            year?: string | null;
            period?: {
                [key: string]: string;
            };
            medium?: {
                [key: string]: string;
            };
            materials?: {
                [key: string]: string;
            };
            technique?: {
                [key: string]: string;
            };
            dimensions?: {
                height?: string;
                width?: string;
                depth?: string;
                diameter?: string;
                /** @enum {string} */
                unit: "mm" | "cm" | "m" | "in";
                display?: {
                    [key: string]: string;
                };
            } | null;
            weight?: {
                value: string;
                /** @enum {string} */
                unit: "g" | "kg" | "lb";
            } | null;
            condition?: {
                [key: string]: string;
            };
            description?: components["schemas"]["InventoryE_LocalizedRichText"];
            provenance?: components["schemas"]["InventoryE_LocalizedRichText"];
            bibliography?: components["schemas"]["InventoryE_LocalizedRichText"];
            exhibitions?: components["schemas"]["InventoryE_LocalizedRichText"];
            inscriptions?: components["schemas"]["InventoryE_LocalizedRichText"];
            edition?: {
                size?: number;
                artistProofs?: number;
                notes?: {
                    [key: string]: string;
                };
            } | null;
            typeId?: number | null;
            categoryIds?: string[];
            media: components["schemas"]["InventoryMediaSelection"][];
            shortDescription?: {
                [key: string]: string;
            };
        };
        InventoryExpenseAllocation: {
            /** Format: uuid */
            unitId: string;
            amount: components["schemas"]["InventoryMoney"];
        };
        InventoryDocumentLine: components["schemas"]["InventoryStockDocumentLine"] | components["schemas"]["InventoryChargeDocumentLine"];
        InventoryDocumentDraft: {
            /** @constant */
            kind: "quote";
            saleId?: string | null;
            /** Format: uuid */
            customerId: string;
            locale: string;
            sellerProfileRevision: string;
            lines: components["schemas"]["InventoryDocumentLine"][];
            dueDate?: string | null;
            deliveryDate?: string | null;
            paymentTerms?: string;
        } | {
            /** @constant */
            kind: "invoice";
            saleId: components["schemas"]["InventoryUUID"];
            /** Format: uuid */
            customerId: string;
            locale: string;
            sellerProfileRevision: string;
            lines: components["schemas"]["InventoryDocumentLine"][];
            dueDate?: string | null;
            deliveryDate?: string | null;
            paymentTerms?: string;
        } | {
            /** @constant */
            kind: "invoice";
            saleId?: null;
            /** Format: uuid */
            customerId: string;
            locale: string;
            sellerProfileRevision: string;
            lines: components["schemas"]["InventoryChargeDocumentLine"][];
            dueDate?: string | null;
            deliveryDate?: string | null;
            paymentTerms?: string;
        } | {
            /** @constant */
            kind: "credit_note";
            originalDocumentId: components["schemas"]["InventoryUUID"];
            reason: string;
            locale: string;
            sellerProfileRevision: components["schemas"]["InventoryRevision"];
            lines: components["schemas"]["InventoryCreditLine"][];
        };
        Inventoryinventory_create_work: {
            /** @constant */
            command: "inventory_create_work";
            workRef?: string;
            draft: components["schemas"]["InventoryWorkDraft"];
            internalNotes?: string;
        };
        Inventoryinventory_replace_draft: {
            /** @constant */
            command: "inventory_replace_draft";
            /** Format: uuid */
            artworkId: string;
            expectedRevision: string;
            draft: components["schemas"]["InventoryWorkDraft"];
            internalNotes?: string | null;
            /** @description Omettre pour conserver ; null attribue une nouvelle référence automatique. Identité technique et slug conservés. */
            workRef?: components["schemas"]["InventoryReference"] | null;
        };
        Inventoryinventory_publish_work: {
            /** @constant */
            command: "inventory_publish_work";
            /** Format: uuid */
            artworkId: string;
            expectedRevision: string;
        };
        Inventoryinventory_unpublish_work: {
            /** @constant */
            command: "inventory_unpublish_work";
            /** Format: uuid */
            artworkId: string;
            expectedRevision: string;
        };
        Inventoryinventory_archive_work: {
            /** @constant */
            command: "inventory_archive_work";
            /** Format: uuid */
            artworkId: string;
            expectedRevision: string;
        };
        Inventoryinventory_delete_work: {
            /** @constant */
            command: "inventory_delete_work";
            /** Format: uuid */
            artworkId: string;
            expectedRevision: string;
        };
        Inventoryinventory_create_unit: {
            /** @constant */
            command: "inventory_create_unit";
            /** Format: uuid */
            artworkId: string;
            expectedRevision: string;
            unitRef?: string;
            editionNumber?: string;
        };
        Inventoryinventory_update_unit_logistics: {
            /** @constant */
            command: "inventory_update_unit_logistics";
            /** Format: uuid */
            unitId: string;
            expectedRevision: string;
            locationId?: string | null;
            conditionNotes?: string;
            editionNumber?: string | null;
            /** @enum {string} */
            qualification?: "unqualified" | "available";
            /** @enum {string} */
            custodyQualification?: "unknown" | "held";
            /** @description Omettre pour conserver ; null attribue une nouvelle référence automatique. Identité technique et slug conservés. */
            unitRef?: components["schemas"]["InventoryReference"] | null;
        };
        Inventoryinventory_archive_unit: {
            /** @constant */
            command: "inventory_archive_unit";
            /** Format: uuid */
            unitId: string;
            expectedRevision: string;
        };
        Inventoryinventory_reserve_unit: {
            /** @constant */
            command: "inventory_reserve_unit";
            /** Format: uuid */
            unitId: string;
            expectedRevision: string;
            /** Format: uuid */
            partyId: string;
            until?: string | null;
            notes?: string;
        };
        Inventoryinventory_release_reservation: {
            /** @constant */
            command: "inventory_release_reservation";
            /** Format: uuid */
            operationId: string;
            expectedRevision: string;
        };
        Inventoryinventory_move_unit: {
            /** @constant */
            command: "inventory_move_unit";
            /** Format: uuid */
            unitId: string;
            expectedRevision: string;
            /** Format: uuid */
            toLocationId: string;
            /** Format: date-time */
            occurredAt: string;
            notes?: string;
        };
        Inventoryinventory_loan_unit: {
            /** @constant */
            command: "inventory_loan_unit";
            /** Format: uuid */
            unitId: string;
            expectedRevision: string;
            /** Format: uuid */
            recipientId: string;
            toLocationId?: string | null;
            /** Format: date-time */
            departedAt: string;
            expectedReturnAt?: string | null;
            notes?: string;
        };
        /** @description Enregistrer le retour physique des exemplaires d’un prêt ou d’un dépôt, sans annuler le contrat financier, sa commission ou ses règlements. Une restitution de dépôt entrant conserve le propriétaire et utilise returned_to_owner. La forme et le nom historiques de la commande restent compatibles. */
        Inventoryinventory_return_loan: {
            /** @constant */
            command: "inventory_return_loan";
            /** Format: uuid */
            operationId: string;
            expectedRevision: string;
            toLocationId?: string | null;
            /** Format: date-time */
            returnedAt: string;
            conditionNotes?: string;
        };
        Inventoryinventory_correct_logistics_operation: {
            /** @constant */
            command: "inventory_correct_logistics_operation";
            /** Format: uuid */
            operationId: string;
            expectedRevision: string;
            reason: string;
            notes?: string;
            expectedReturnAt?: string | null;
            /** @enum {string} */
            action: "annotate" | "cancel";
            toLocationId?: components["schemas"]["InventoryUUID"] | null;
            /** Format: date-time */
            occurredAt?: string;
        };
        Inventoryinventory_record_acquisition: {
            /** @constant */
            command: "inventory_record_acquisition";
            /** Format: uuid */
            unitId: string;
            expectedRevision: string;
            /** @enum {string} */
            kind: "purchase" | "creation";
            date?: string | null;
            partyId?: string | null;
            ownerId?: string | null;
            amount: components["schemas"]["InventoryMoney"] | null;
            taxPurchasePrice?: components["schemas"]["InventoryMoney"] | null;
            qualificationEvidenceIds?: string[];
        };
        Inventoryinventory_record_expense: {
            /** @constant */
            command: "inventory_record_expense";
            expenseRef: string;
            /** @enum {string} */
            category: "photo" | "mounting" | "restoration" | "transport" | "insurance" | "other";
            date?: string | null;
            total: components["schemas"]["InventoryMoney"] | null;
            supplierId?: string | null;
            allocations: components["schemas"]["InventoryExpenseAllocation"][];
            evidenceIds?: string[];
            targetUnitIds: components["schemas"]["InventoryUUID"][];
        } & unknown;
        Inventoryinventory_record_deposit: {
            /** @constant */
            command: "inventory_record_deposit";
            /** @enum {string} */
            direction: "in" | "out";
            units: {
                /** Format: uuid */
                unitId: string;
                expectedRevision: string;
            }[];
            /** Format: uuid */
            ownerId: string;
            /** Format: uuid */
            counterpartyId: string;
            /** Format: date */
            date: string;
            expectedReturnAt?: string | null;
            locationId?: string | null;
            commission?: components["schemas"]["InventoryMoney"] | null;
            insuranceValue?: components["schemas"]["InventoryMoney"] | null;
            terms?: string;
            documentIds?: string[];
            commissionRate?: components["schemas"]["InventoryRate"] | null;
        };
        Inventoryinventory_record_sale: {
            /** @constant */
            command: "inventory_record_sale";
            units: {
                /** Format: uuid */
                unitId: string;
                expectedRevision: string;
                grossAmount: components["schemas"]["InventoryMoney"];
            }[];
            /** Format: uuid */
            customerId: string;
            /** Format: date */
            date: string;
            /** @enum {string} */
            sellerRole: "own_account" | "consignment_principal" | "agent";
            depositOperationId?: string | null;
            amount: components["schemas"]["InventoryMoney"];
            reservationIds?: string[];
        };
        Inventoryinventory_prepare_document: {
            /** @constant */
            command: "inventory_prepare_document";
            draft: components["schemas"]["InventoryDocumentDraft"];
        };
        Inventoryinventory_replace_document_draft: {
            /** @constant */
            command: "inventory_replace_document_draft";
            /** Format: uuid */
            documentId: string;
            expectedRevision: string;
            draft: components["schemas"]["InventoryDocumentDraft"];
        };
        Inventoryinventory_issue_document: {
            /** @constant */
            command: "inventory_issue_document";
            /** Format: uuid */
            documentId: string;
            expectedRevision: string;
            /** Format: uuid */
            seriesId: string;
            sellerProfileRevision: string;
        };
        Inventoryinventory_record_payment: {
            /** @constant */
            command: "inventory_record_payment";
            /** Format: uuid */
            documentId: string;
            expectedRevision: string;
            amount: components["schemas"]["InventoryMoney"];
            /** Format: date */
            date: string;
            /** @enum {string} */
            method: "bank_transfer" | "cash" | "card_external" | "cheque" | "other";
            reference: string;
            reason?: string;
            exchange?: {
                invoiceAmount: components["schemas"]["InventoryMoney"];
                /** Format: uuid */
                evidenceId: string;
            } | null;
        };
        Inventoryinventory_record_refund: {
            /** @constant */
            command: "inventory_record_refund";
            /** Format: uuid */
            documentId: string;
            expectedRevision: string;
            amount: components["schemas"]["InventoryMoney"];
            /** Format: date */
            date: string;
            /** @enum {string} */
            method: "bank_transfer" | "cash" | "card_external" | "cheque" | "other";
            reference: string;
            reason?: string;
            exchange?: {
                invoiceAmount: components["schemas"]["InventoryMoney"];
                /** Format: uuid */
                evidenceId: string;
            } | null;
        };
        Inventoryinventory_save_reference: {
            /** @constant */
            command: "inventory_save_reference";
            reference: {
                /** @constant */
                kind: "artist";
                /** @constant */
                action: "create";
                fields: {
                    name: {
                        [key: string]: string;
                    };
                    birthDate?: string | null;
                    deathDate?: string | null;
                    nationalities?: string[];
                    biography?: components["schemas"]["InventoryE_LocalizedRichText"];
                    mediaIds?: components["schemas"]["InventoryUUID"][];
                };
            } | {
                /** @constant */
                kind: "artist";
                /** @constant */
                action: "update";
                fields: {
                    name: {
                        [key: string]: string;
                    };
                    birthDate?: string | null;
                    deathDate?: string | null;
                    nationalities?: string[];
                    biography?: components["schemas"]["InventoryE_LocalizedRichText"];
                    mediaIds?: components["schemas"]["InventoryUUID"][];
                };
                referenceId: components["schemas"]["InventoryUUID"];
                expectedRevision: components["schemas"]["InventoryRevision"];
            } | {
                /** @constant */
                kind: "origin";
                /** @constant */
                action: "create";
                fields: {
                    name: {
                        [key: string]: string;
                    };
                    culture?: {
                        [key: string]: string;
                    };
                    country?: string | null;
                    region?: {
                        [key: string]: string;
                    };
                    period?: {
                        [key: string]: string;
                    };
                    description?: components["schemas"]["InventoryE_LocalizedRichText"];
                    mediaIds?: components["schemas"]["InventoryUUID"][];
                };
            } | {
                /** @constant */
                kind: "origin";
                /** @constant */
                action: "update";
                fields: {
                    name: {
                        [key: string]: string;
                    };
                    culture?: {
                        [key: string]: string;
                    };
                    country?: string | null;
                    region?: {
                        [key: string]: string;
                    };
                    period?: {
                        [key: string]: string;
                    };
                    description?: components["schemas"]["InventoryE_LocalizedRichText"];
                    mediaIds?: components["schemas"]["InventoryUUID"][];
                };
                referenceId: components["schemas"]["InventoryUUID"];
                expectedRevision: components["schemas"]["InventoryRevision"];
            } | {
                /** @constant */
                kind: "party";
                /** @constant */
                action: "create";
                fields: {
                    name: string;
                    /** @enum {string} */
                    kind: "person" | "organization";
                    roles: ("owner" | "supplier" | "depositor" | "customer" | "recipient")[];
                    email?: string | null;
                    phone?: string | null;
                    addressLines?: string[];
                    /** @enum {string} */
                    customerKind?: "professional" | "private" | "public_entity";
                    companyIdentifier?: string | null;
                    vatIdentifier?: string | null;
                    billingAddress?: {
                        line1: string;
                        line2?: string | null;
                        postalCode?: string;
                        city: string;
                        country: string;
                    };
                    shippingAddress?: {
                        line1: string;
                        line2?: string | null;
                        postalCode?: string;
                        city: string;
                        country: string;
                    } | null;
                };
            } | {
                /** @constant */
                kind: "party";
                /** @constant */
                action: "update";
                fields: {
                    name: string;
                    /** @enum {string} */
                    kind: "person" | "organization";
                    roles: ("owner" | "supplier" | "depositor" | "customer" | "recipient")[];
                    email?: string | null;
                    phone?: string | null;
                    addressLines?: string[];
                    /** @enum {string} */
                    customerKind?: "professional" | "private" | "public_entity";
                    companyIdentifier?: string | null;
                    vatIdentifier?: string | null;
                    billingAddress?: {
                        line1: string;
                        line2?: string | null;
                        postalCode?: string;
                        city: string;
                        country: string;
                    };
                    shippingAddress?: {
                        line1: string;
                        line2?: string | null;
                        postalCode?: string;
                        city: string;
                        country: string;
                    } | null;
                };
                referenceId: components["schemas"]["InventoryUUID"];
                expectedRevision: components["schemas"]["InventoryRevision"];
            } | {
                /** @constant */
                kind: "location";
                /** @constant */
                action: "create";
                fields: {
                    name: string;
                    partyId?: string | null;
                    addressLines?: string[];
                    active?: boolean;
                };
            } | {
                /** @constant */
                kind: "location";
                /** @constant */
                action: "update";
                fields: {
                    name: string;
                    partyId?: string | null;
                    addressLines?: string[];
                    active?: boolean;
                };
                referenceId: components["schemas"]["InventoryUUID"];
                expectedRevision: components["schemas"]["InventoryRevision"];
            } | {
                /** @constant */
                kind: "type";
                /** @constant */
                action: "create";
                fields: {
                    name: {
                        [key: string]: string;
                    };
                    active?: boolean;
                    position?: number;
                };
            } | {
                /** @constant */
                kind: "type";
                /** @constant */
                action: "update";
                fields: {
                    name: {
                        [key: string]: string;
                    };
                    active?: boolean;
                    position?: number;
                };
                referenceId: number;
                expectedRevision: components["schemas"]["InventoryRevision"];
            } | {
                /** @constant */
                kind: "category";
                /** @constant */
                action: "create";
                fields: {
                    name: components["schemas"]["InventoryLocalizedText"];
                    active?: boolean;
                };
            } | {
                /** @constant */
                kind: "category";
                /** @constant */
                action: "update";
                fields: {
                    name: components["schemas"]["InventoryLocalizedText"];
                    active?: boolean;
                };
                referenceId: components["schemas"]["InventoryUUID"];
                expectedRevision: components["schemas"]["InventoryRevision"];
            };
        };
        Inventoryinventory_revoke_public_media: {
            /** @constant */
            command: "inventory_revoke_public_media";
            /** Format: uuid */
            mediaId: string;
            expectedRevision: string;
            reason?: string;
        };
        Inventoryinventory_delete_media: {
            /** @constant */
            command: "inventory_delete_media";
            /** Format: uuid */
            mediaId: string;
            expectedRevision: string;
        };
        Inventoryinventory_confirm_import: {
            /** @constant */
            command: "inventory_confirm_import";
            /** Format: uuid */
            batchId: string;
            expectedRevision: string;
            simulationDigest: string;
        };
        Inventoryinventory_confirm_migration: {
            /** @constant */
            command: "inventory_confirm_migration";
            /** Format: uuid */
            batchId: string;
            expectedRevision: string;
            simulationDigest: string;
            /** @constant */
            expectedSource: "artlogic";
            expectedSourceBindingRevision: components["schemas"]["InventoryRevision"];
            expectedFence: string;
        };
        InventoryInventoryCommand: components["schemas"]["Inventoryinventory_create_work"] | components["schemas"]["Inventoryinventory_replace_draft"] | components["schemas"]["Inventoryinventory_publish_work"] | components["schemas"]["Inventoryinventory_unpublish_work"] | components["schemas"]["Inventoryinventory_archive_work"] | components["schemas"]["Inventoryinventory_delete_work"] | components["schemas"]["Inventoryinventory_create_unit"] | components["schemas"]["Inventoryinventory_update_unit_logistics"] | components["schemas"]["Inventoryinventory_archive_unit"] | components["schemas"]["Inventoryinventory_reserve_unit"] | components["schemas"]["Inventoryinventory_release_reservation"] | components["schemas"]["Inventoryinventory_move_unit"] | components["schemas"]["Inventoryinventory_loan_unit"] | components["schemas"]["Inventoryinventory_return_loan"] | components["schemas"]["Inventoryinventory_correct_logistics_operation"] | components["schemas"]["Inventoryinventory_record_acquisition"] | components["schemas"]["Inventoryinventory_record_expense"] | components["schemas"]["Inventoryinventory_record_deposit"] | components["schemas"]["Inventoryinventory_record_sale"] | components["schemas"]["Inventoryinventory_prepare_document"] | components["schemas"]["Inventoryinventory_replace_document_draft"] | components["schemas"]["Inventoryinventory_issue_document"] | components["schemas"]["Inventoryinventory_record_payment"] | components["schemas"]["Inventoryinventory_record_refund"] | components["schemas"]["Inventoryinventory_save_reference"] | components["schemas"]["Inventoryinventory_revoke_public_media"] | components["schemas"]["Inventoryinventory_delete_media"] | components["schemas"]["Inventoryinventory_confirm_import"] | components["schemas"]["Inventoryinventory_confirm_migration"] | components["schemas"]["Inventoryinventory_replace_expense"] | components["schemas"]["Inventoryinventory_reallocate_expense"] | components["schemas"]["Inventoryinventory_correct_ledger_entry"] | components["schemas"]["Inventoryinventory_cancel_financial_operation"] | components["schemas"]["Inventoryinventory_update_deposit_terms"] | components["schemas"]["Inventoryinventory_create_seller_profile"] | components["schemas"]["Inventoryinventory_replace_seller_profile"] | components["schemas"]["Inventoryinventory_qualify_seller_profile"] | components["schemas"]["Inventoryinventory_create_tax_treatment"] | components["schemas"]["Inventoryinventory_replace_tax_treatment"] | components["schemas"]["Inventoryinventory_qualify_tax_treatment"] | components["schemas"]["Inventoryinventory_create_document_series"] | components["schemas"]["Inventoryinventory_deactivate_document_series"] | components["schemas"]["Inventoryinventory_set_assignment"] | components["schemas"]["Inventoryinventory_revoke_assignment"] | components["schemas"]["Inventoryinventory_receive_sales_return"] | components["schemas"]["Inventoryinventory_restock_returned_unit"] | components["schemas"]["Inventoryinventory_record_owner_settlement"];
        Inventoryinventory_replace_expense: {
            /** @constant */
            command: "inventory_replace_expense";
            expenseId: components["schemas"]["InventoryUUID"];
            expectedRevision: components["schemas"]["InventoryRevision"];
            /** @enum {string} */
            category: "photo" | "mounting" | "restoration" | "transport" | "insurance" | "other";
            date?: string | null;
            total: components["schemas"]["InventoryMoney"] | null;
            supplierId?: string | null;
            allocations: components["schemas"]["InventoryExpenseAllocation"][];
            evidenceIds?: string[];
            targetUnitIds: components["schemas"]["InventoryUUID"][];
        } & unknown;
        Inventoryinventory_reallocate_expense: {
            /** @constant */
            command: "inventory_reallocate_expense";
            expenseId: components["schemas"]["InventoryUUID"];
            expectedRevision: components["schemas"]["InventoryRevision"];
            allocations: components["schemas"]["InventoryExpenseAllocation"][];
            reason: string;
            targetUnitIds: components["schemas"]["InventoryUUID"][];
        };
        Inventoryinventory_correct_ledger_entry: {
            /** @constant */
            command: "inventory_correct_ledger_entry";
            entryId: components["schemas"]["InventoryUUID"];
            expectedRevision: components["schemas"]["InventoryRevision"];
            reason: string;
            /** Format: date */
            date: string;
        };
        Inventoryinventory_cancel_financial_operation: {
            /** @constant */
            command: "inventory_cancel_financial_operation";
            operationId: components["schemas"]["InventoryUUID"];
            expectedRevision: components["schemas"]["InventoryRevision"];
            reason: string;
        };
        Inventoryinventory_update_deposit_terms: {
            /** @constant */
            command: "inventory_update_deposit_terms";
            operationId: components["schemas"]["InventoryUUID"];
            expectedRevision: components["schemas"]["InventoryRevision"];
            terms: {
                commission?: components["schemas"]["InventoryMoney"] | null;
                insuranceValue?: components["schemas"]["InventoryMoney"] | null;
                text?: string;
                documentIds?: components["schemas"]["InventoryUUID"][];
                commissionRate?: components["schemas"]["InventoryRate"] | null;
            };
        };
        InventoryCreditLine: {
            originalLineId: components["schemas"]["InventoryUUID"];
            amount: components["schemas"]["InventoryMoney"];
            reason?: string;
        };
        InventorySellerFiscalProfile: {
            legalName: string;
            legalForm?: string | null;
            capital?: components["schemas"]["InventoryMoney"] | null;
            country: string;
            companyIdentifier?: string;
            registration?: string;
            vatIdentifier?: string | null;
            billingAddress: {
                line1: string;
                line2?: string | null;
                postalCode?: string;
                city: string;
                country: string;
            };
            /** @enum {string} */
            businessSize: "micro" | "sme" | "mid" | "large" | "other_qualified";
            /** @enum {string} */
            vatStatus: "registered" | "exempt" | "other_qualified";
            electronicReceiptFrom?: string | null;
            electronicIssueFrom?: string | null;
            eReportingFrom?: string | null;
            paymentTerms: string;
            retentionYears: number;
            fiscalYearEnd?: string;
            invoiceChannelId?: components["schemas"]["InventoryUUID"] | null;
        };
        Inventoryinventory_create_seller_profile: {
            /** @constant */
            command: "inventory_create_seller_profile";
            profile: components["schemas"]["InventorySellerFiscalProfile"];
        };
        Inventoryinventory_replace_seller_profile: {
            /** @constant */
            command: "inventory_replace_seller_profile";
            expectedRevision: components["schemas"]["InventoryRevision"];
            profile: components["schemas"]["InventorySellerFiscalProfile"];
        };
        Inventoryinventory_qualify_seller_profile: {
            /** @constant */
            command: "inventory_qualify_seller_profile";
            expectedRevision: components["schemas"]["InventoryRevision"];
            validation: {
                evidenceIds: components["schemas"]["InventoryUUID"][];
                scope: string;
                note?: string;
            };
        };
        InventoryTaxTreatment: {
            code: components["schemas"]["InventoryReference"];
            name: components["schemas"]["InventoryLocalizedText"];
            /** @enum {string} */
            basis: "standard" | "margin" | "exempt" | "other_qualified";
            rate: {
                numerator: string;
                denominator: string;
            };
            /** Format: date */
            validFrom: string;
            validUntil?: string | null;
            showVatRate: boolean;
            showVatAmount: boolean;
            legalMentions: components["schemas"]["InventoryLocalizedText"];
            countries?: string[];
            customerKinds?: ("professional" | "private" | "public_entity")[];
            goodsClassifications?: string[];
            sellerRoles?: ("own_account" | "consignment_principal" | "agent")[];
            requiredEvidence?: string[];
        } & unknown;
        Inventoryinventory_create_tax_treatment: {
            /** @constant */
            command: "inventory_create_tax_treatment";
            treatment: components["schemas"]["InventoryTaxTreatment"];
        };
        Inventoryinventory_replace_tax_treatment: {
            /** @constant */
            command: "inventory_replace_tax_treatment";
            treatmentId: components["schemas"]["InventoryUUID"];
            expectedRevision: components["schemas"]["InventoryRevision"];
            treatment: components["schemas"]["InventoryTaxTreatment"];
        };
        Inventoryinventory_qualify_tax_treatment: {
            /** @constant */
            command: "inventory_qualify_tax_treatment";
            treatmentId: components["schemas"]["InventoryUUID"];
            expectedRevision: components["schemas"]["InventoryRevision"];
            validation: {
                evidenceIds: components["schemas"]["InventoryUUID"][];
                scope: string;
                note?: string;
            };
        };
        Inventoryinventory_create_document_series: {
            /** @constant */
            command: "inventory_create_document_series";
            series: {
                /** @enum {string} */
                kind: "quote" | "invoice" | "credit_note";
                name: components["schemas"]["InventoryReference"];
                prefix: string;
                fiscalYear?: number;
                legalEntityProfileId: components["schemas"]["InventoryUUID"];
            };
        };
        Inventoryinventory_deactivate_document_series: {
            /** @constant */
            command: "inventory_deactivate_document_series";
            seriesId: components["schemas"]["InventoryUUID"];
            expectedRevision: components["schemas"]["InventoryRevision"];
        };
        Inventoryinventory_set_assignment: {
            /** @constant */
            command: "inventory_set_assignment";
            /** Format: uri */
            issuer: string;
            subject: string;
            /** @enum {string} */
            role: "administrator" | "contributor";
            expectedAssignmentRevision: components["schemas"]["InventoryRevision"] | null;
        };
        Inventoryinventory_revoke_assignment: {
            /** @constant */
            command: "inventory_revoke_assignment";
            assignmentId: components["schemas"]["InventoryUUID"];
            expectedRevision: components["schemas"]["InventoryRevision"];
            reason: string;
        };
        Inventoryinventory_receive_sales_return: {
            /** @constant */
            command: "inventory_receive_sales_return";
            saleId: components["schemas"]["InventoryUUID"];
            unitId: components["schemas"]["InventoryUUID"];
            expectedRevision: components["schemas"]["InventoryRevision"];
            /** Format: date-time */
            receivedAt: string;
            locationId?: components["schemas"]["InventoryUUID"] | null;
            conditionNotes?: string;
        };
        Inventoryinventory_restock_returned_unit: {
            /** @constant */
            command: "inventory_restock_returned_unit";
            saleId: components["schemas"]["InventoryUUID"];
            unitId: components["schemas"]["InventoryUUID"];
            expectedRevision: components["schemas"]["InventoryRevision"];
            reason: string;
        };
        Inventoryinventory_record_owner_settlement: {
            /** @constant */
            command: "inventory_record_owner_settlement";
            depositOperationId: components["schemas"]["InventoryUUID"];
            expectedRevision: components["schemas"]["InventoryRevision"];
            amount: components["schemas"]["InventoryMoney"];
            /** @enum {string} */
            direction: "pay_owner" | "receive_owner";
            /** Format: date */
            date: string;
            /** @enum {string} */
            method: "bank_transfer" | "cash" | "card_external" | "cheque" | "other";
            reference: string;
        };
        InventoryRate: {
            numerator: string;
            denominator: string;
        };
        InventoryInventoryResourceRef: {
            /** @enum {string} */
            kind: "artwork" | "unit" | "artist" | "origin" | "party" | "location" | "logistics_operation" | "sale" | "document" | "import_batch" | "tax_treatment" | "document_series" | "ledger_entry" | "expense" | "deposit" | "assignment" | "category" | "media";
            id: components["schemas"]["InventoryUUID"];
        } | {
            /** @constant */
            kind: "type";
            id: number;
        } | {
            /** @constant */
            kind: "fiscal_profile";
            /** @constant */
            id: "current";
        };
        InventoryReadInventoryInput: {
            resource: components["schemas"]["InventoryInventoryResourceRef"];
            /**
             * @description Projection explicite compatible avec la ressource. Finance nécessite administrator et le scope finance ; private_notes est réservé à artwork et reste hors du snapshot public.
             * @enum {string}
             */
            projection?: "editorial" | "logistics" | "private_notes" | "finance" | "management";
            /** @description Import batch rows only. */
            after?: number;
            /** @description Import batch rows only; default 20. */
            limit?: number;
        };
        InventoryFindInventoryInput: {
            /** @enum {string} */
            kind: "artwork" | "unit" | "artist" | "origin" | "party" | "location" | "logistics_operation" | "sale" | "document" | "import_batch" | "tax_treatment" | "document_series" | "ledger_entry" | "expense" | "deposit" | "assignment" | "type" | "category" | "media";
            filters?: {
                query?: string;
                /** @enum {string} */
                publication?: "hidden" | "published";
                /** @enum {string} */
                commercialState?: "unqualified" | "available" | "reserved" | "sold";
                /** @enum {string} */
                custodyState?: "unknown" | "held" | "loaned_out" | "deposited_out" | "returned_to_owner";
                artworkId?: components["schemas"]["InventoryUUID"];
                artistId?: components["schemas"]["InventoryUUID"];
                originId?: components["schemas"]["InventoryUUID"];
                ownerId?: components["schemas"]["InventoryUUID"];
                locationId?: components["schemas"]["InventoryUUID"];
                typeIds?: number[];
                /** Format: date */
                fromDate?: string;
                /** Format: date */
                toDate?: string;
                categoryIds?: components["schemas"]["InventoryUUID"][];
                unitId?: components["schemas"]["InventoryUUID"];
                partyId?: components["schemas"]["InventoryUUID"];
                /** @enum {string} */
                operationStatus?: "draft" | "active" | "completed" | "cancelled";
                includeArchived?: boolean;
                ids?: components["schemas"]["InventoryUUID"][];
                documentId?: components["schemas"]["InventoryUUID"];
                depositOperationId?: components["schemas"]["InventoryUUID"];
            };
            limit?: number;
            cursor?: string;
        };
        InventoryInventoryClientFile: {
            /** Format: uri */
            download_url: string;
            file_id: string;
            mime_type: string;
            file_name: string;
        };
        InventoryPrepareInventoryImportInput: {
            importKey: string;
            catalogFile: {
                /** Format: uri */
                download_url: string;
                file_id: string;
                mime_type: string;
                file_name: string;
            };
            imagesZip?: {
                /** Format: uri */
                download_url: string;
                file_id: string;
                mime_type: string;
                file_name: string;
            };
            /** @enum {string} */
            delimiter: "comma" | "semicolon";
            mapping: {
                sourceColumn: string;
                /** @enum {string} */
                targetField: "row_type" | "work_ref" | "copy_ref" | "action" | "record_kind" | "title" | "description" | "provenance" | "artist_ref" | "origin_ref" | "type_id" | "year" | "medium" | "file_path" | "media_ref" | "position" | "primary" | "visibility" | "alt" | "caption" | "credit" | "owner_ref" | "location_ref" | "edition_number" | "commercial_state" | "custody_state" | "acquisition_kind" | "acquisition_date" | "acquisition_amount_minor" | "tax_purchase_price_minor" | "currency" | "scale" | "cost_ref" | "category" | "date" | "total_minor" | "allocated_minor" | "supplier_ref" | "party_ref" | "name" | "roles" | "kind" | "culture" | "country" | "region" | "period" | "biography" | "clear_fields" | "category_ref" | "category_refs" | "active" | "ignore" | "association" | "materials" | "technique" | "condition" | "bibliography" | "exhibitions" | "inscriptions" | "email" | "phone" | "address" | "dates" | "nationalities";
                locale?: string;
            }[];
            /** @enum {string} */
            mode?: "create" | "update" | "mixed_explicit";
        };
        InventoryImportInventoryPhotoInput: {
            importKey: string;
            file: {
                /** Format: uri */
                download_url: string;
                file_id: string;
                mime_type: string;
                file_name: string;
            };
        };
        InventoryInventoryUploadAttemptInput: {
            uploadKey: string;
            fileName: string;
            /** @enum {string} */
            mimeType: "image/jpeg" | "image/png" | "image/webp";
            bytes: number;
            sha256?: string;
        };
        InventoryInventoryAttachmentUploadInput: {
            uploadKey: string;
            fileName: string;
            /** @enum {string} */
            mimeType: "image/jpeg" | "image/png" | "image/webp" | "application/pdf";
            bytes: number;
            /** @enum {string} */
            classification: "financial_document" | "non_financial_document";
            sha256?: string;
        };
        InventoryImportInventoryAttachmentInput: {
            importKey: string;
            file: components["schemas"]["InventoryInventoryClientFile"];
            /** @enum {string} */
            classification: "financial_document" | "non_financial_document";
        };
        InventoryError: {
            error: {
                code: string;
                message: string;
                retryable: boolean;
                path?: string;
                operationId?: components["schemas"]["InventoryUUID"];
            };
        };
        InventoryReceipt: {
            operationId: components["schemas"]["InventoryUUID"];
            resource: components["schemas"]["InventoryInventoryResourceRef"];
            revision: components["schemas"]["InventoryRevision"];
            publicationChanged: boolean;
            publicAccessChanged: boolean;
        };
        InventoryCapabilities: {
            /** @enum {unknown} */
            source: "artlogic" | "standalone";
            /** @enum {unknown} */
            bindingSource: "artlogic" | "standalone";
            bindingRevision: components["schemas"]["InventoryRevision"];
            fence: string;
            readOnly: boolean;
            /** @enum {unknown} */
            role: "administrator" | "contributor";
            commands: ("inventory_create_work" | "inventory_replace_draft" | "inventory_publish_work" | "inventory_unpublish_work" | "inventory_archive_work" | "inventory_delete_work" | "inventory_create_unit" | "inventory_update_unit_logistics" | "inventory_archive_unit" | "inventory_reserve_unit" | "inventory_release_reservation" | "inventory_move_unit" | "inventory_loan_unit" | "inventory_return_loan" | "inventory_correct_logistics_operation" | "inventory_record_acquisition" | "inventory_record_expense" | "inventory_record_deposit" | "inventory_record_sale" | "inventory_prepare_document" | "inventory_replace_document_draft" | "inventory_issue_document" | "inventory_record_payment" | "inventory_record_refund" | "inventory_save_reference" | "inventory_revoke_public_media" | "inventory_delete_media" | "inventory_confirm_import" | "inventory_confirm_migration" | "inventory_replace_expense" | "inventory_reallocate_expense" | "inventory_correct_ledger_entry" | "inventory_cancel_financial_operation" | "inventory_update_deposit_terms" | "inventory_create_seller_profile" | "inventory_replace_seller_profile" | "inventory_qualify_seller_profile" | "inventory_create_tax_treatment" | "inventory_replace_tax_treatment" | "inventory_qualify_tax_treatment" | "inventory_create_document_series" | "inventory_deactivate_document_series" | "inventory_set_assignment" | "inventory_revoke_assignment" | "inventory_receive_sales_return" | "inventory_restock_returned_unit" | "inventory_record_owner_settlement")[];
            limits: {
                imageBytes: number;
                imagePixels: number;
                /** @constant */
                listDefault: 50;
                /** @constant */
                listMaximum: 100;
                mimeTypes: ("image/jpeg" | "image/png" | "image/webp")[];
            };
            dependencies: components["schemas"]["InventoryDependency"][];
            optionalEditorialFields?: "shortDescription"[];
            /** @description Optional additive capability. Missing means imports are unavailable. */
            importsAvailable?: boolean;
            importColumns?: string[];
            importLimits?: {
                catalogBytes: number;
                imagesBytes: number;
            };
        };
        InventoryArtwork: {
            artworkId: components["schemas"]["InventoryUUID"];
            workRef: components["schemas"]["InventoryReference"];
            draftRevision: components["schemas"]["InventoryRevision"];
            publicationRevision: components["schemas"]["InventoryRevision"] | null;
            draft: components["schemas"]["InventoryWorkDraft"];
            /** @enum {unknown} */
            publication: "hidden" | "published";
            sourceId: string;
            archived: boolean;
            /** Format: date-time */
            createdAt: string;
            /** Format: date-time */
            updatedAt: string;
        };
        InventoryUnitLogistics: {
            unitId: components["schemas"]["InventoryUUID"];
            artworkId: components["schemas"]["InventoryUUID"];
            unitRef: components["schemas"]["InventoryReference"];
            editionNumber: string | null;
            ownerPartyId: components["schemas"]["InventoryUUID"] | null;
            locationId: components["schemas"]["InventoryUUID"] | null;
            conditionNotes: string | null;
            /** @enum {unknown} */
            commercialState: "unqualified" | "available" | "reserved" | "sold";
            /** @enum {unknown} */
            custodyState: "unknown" | "held" | "loaned_out" | "deposited_out" | "returned_to_owner";
            logisticsRevision: components["schemas"]["InventoryRevision"];
            archived: boolean;
        };
        InventoryMedia: {
            mediaId: components["schemas"]["InventoryUUID"];
            /** @enum {unknown} */
            status: "pending" | "processing" | "ready" | "rejected" | "revoked";
            /** Format: date-time */
            createdAt: string;
            /** @enum {unknown} */
            mimeType: "image/jpeg" | "image/png" | "image/webp";
            fileName: string;
            width: number | null;
            height: number | null;
            bytes: number;
            revision: components["schemas"]["InventoryRevision"];
            errorCode?: string | null;
        };
        InventoryLogisticsOperation: {
            operationId: components["schemas"]["InventoryUUID"];
            /** @enum {unknown} */
            kind: "reservation" | "movement" | "loan" | "return" | "deposit_in" | "deposit_out" | "correction";
            unitIds: components["schemas"]["InventoryUUID"][];
            partyId: components["schemas"]["InventoryUUID"] | null;
            fromLocationId: components["schemas"]["InventoryUUID"] | null;
            toLocationId: components["schemas"]["InventoryUUID"] | null;
            /** @enum {unknown} */
            status: "draft" | "active" | "completed" | "cancelled";
            /** Format: date-time */
            occurredAt: string;
            expectedReturnAt: string | null;
            notes: string | null;
            revision: components["schemas"]["InventoryRevision"];
            relatedOperationId?: components["schemas"]["InventoryUUID"] | null;
            cancelledByOperationId?: components["schemas"]["InventoryUUID"] | null;
        };
        InventoryExpense: {
            expenseId: components["schemas"]["InventoryUUID"];
            expenseRef: components["schemas"]["InventoryReference"];
            /** @enum {unknown} */
            category: "photo" | "mounting" | "restoration" | "transport" | "insurance" | "other";
            date: string | null;
            total: components["schemas"]["InventoryMoney"] | null;
            supplierId: components["schemas"]["InventoryUUID"] | null;
            targetUnitIds: components["schemas"]["InventoryUUID"][];
            allocations: components["schemas"]["InventoryExpenseAllocation"][];
            evidenceIds: components["schemas"]["InventoryUUID"][];
            revision: components["schemas"]["InventoryRevision"];
            operationId?: components["schemas"]["InventoryUUID"];
            /** @enum {unknown} */
            status?: "draft" | "active" | "completed" | "cancelled";
            allocated?: components["schemas"]["InventoryMoney"] | null;
            remainder?: components["schemas"]["InventoryMoney"] | null;
        };
        InventorySale: {
            saleId: components["schemas"]["InventoryUUID"];
            customerId: components["schemas"]["InventoryUUID"];
            /** Format: date */
            date: string;
            /** @enum {unknown} */
            sellerRole: "own_account" | "consignment_principal" | "agent";
            depositOperationId: components["schemas"]["InventoryUUID"] | null;
            amount: components["schemas"]["InventoryMoney"];
            units: {
                unitId: components["schemas"]["InventoryUUID"];
                grossAmount: components["schemas"]["InventoryMoney"];
            }[];
            /** @enum {unknown} */
            status: "active" | "cancelled";
            revision: components["schemas"]["InventoryRevision"];
            returns?: {
                unitId: components["schemas"]["InventoryUUID"];
                restocked: boolean;
            }[];
        };
        InventoryDocument: {
            documentId: components["schemas"]["InventoryUUID"];
            draft: components["schemas"]["InventoryDocumentDraft"] | null;
            /** @enum {unknown} */
            status: "draft" | "issued";
            number: string | null;
            issuedAt: string | null;
            revision: components["schemas"]["InventoryRevision"];
            pdfAvailable: boolean;
            /** @enum {unknown} */
            kind?: "quote" | "invoice" | "credit_note";
            saleId?: components["schemas"]["InventoryUUID"] | null;
            customerId?: components["schemas"]["InventoryUUID"];
            profileId?: components["schemas"]["InventoryUUID"];
            sellerProfileRevision?: components["schemas"]["InventoryRevision"];
            originalDocumentId?: components["schemas"]["InventoryUUID"] | null;
            lines?: components["schemas"]["InventoryDocumentLineView"][];
            balanceMinor?: string | null;
            due?: components["schemas"]["InventoryMoney"] | null;
            customerCredit?: components["schemas"]["InventoryMoney"] | null;
            transmissions?: components["schemas"]["InventoryTransmission"][];
            snapshot?: components["schemas"]["InventoryClientDocumentSnapshot"];
        };
        InventoryLedgerEntry: {
            entryId: components["schemas"]["InventoryUUID"];
            /** @enum {unknown} */
            kind: "purchase" | "creation" | "expense" | "payment" | "refund" | "owner_settlement" | "correction";
            amount: components["schemas"]["InventoryMoney"] | null;
            /** Format: date */
            date: string;
            documentId: components["schemas"]["InventoryUUID"] | null;
            correctsEntryId: components["schemas"]["InventoryUUID"] | null;
            revision: components["schemas"]["InventoryRevision"];
            invoiceAmount?: components["schemas"]["InventoryMoney"] | null;
            depositOperationId?: components["schemas"]["InventoryUUID"] | null;
            direction?: ("pay_owner" | "receive_owner") | null;
            method?: string;
            reference?: string;
            reason?: string | null;
        };
        InventoryAssignment: {
            assignmentId: components["schemas"]["InventoryUUID"];
            /** Format: uri */
            issuer: string;
            subject: string;
            /** @enum {unknown} */
            role: "administrator" | "contributor";
            revision: components["schemas"]["InventoryRevision"];
            revoked: boolean;
        };
        InventoryBatch: {
            batchId: components["schemas"]["InventoryUUID"];
            /** @enum {unknown} */
            kind: "csv_zip" | "artlogic";
            /** @enum {unknown} */
            status: "uploaded" | "validating" | "invalid" | "ready" | "confirmed" | "staging" | "applied" | "failed" | "cancelled";
            revision: components["schemas"]["InventoryRevision"];
            simulationDigest: string | null;
            progress: {
                processed: number;
                total: number;
            };
            issues: {
                row?: number;
                path?: string;
                code: string;
                column?: string;
                /** @enum {string} */
                severity?: "error" | "warning";
            }[];
            /** @enum {unknown} */
            mode?: "create" | "update" | "mixed_explicit";
            confirmedDigest?: string | null;
            operationId?: components["schemas"]["InventoryUUID"] | null;
            detailsRetained?: boolean;
            mapping?: unknown[] | Record<string, never>;
            options?: {
                [key: string]: unknown;
            };
            assumptions?: string[];
            nextAfter?: number | null;
            files?: {
                uploadId: components["schemas"]["InventoryUUID"];
                /** @enum {unknown} */
                role: "catalog" | "images" | "export";
                /** @enum {unknown} */
                state: "pending" | "receiving" | "finalizing" | "complete" | "failed" | "cancelled";
                revision: components["schemas"]["InventoryRevision"];
                fileName?: string;
                mimeType?: string;
                declaredBytes: number | null;
                receivedBytes: number;
                /** Format: date-time */
                expiresAt: string;
            }[];
            rows?: {
                index: number;
                /** @enum {unknown} */
                rowType: "work" | "copy" | "media" | "cost" | "party" | "location" | "artist" | "origin" | "category";
                /** @enum {unknown} */
                action: "create" | "update";
                targetId: string;
                /** @enum {unknown} */
                state: "pending" | "prepared";
                candidate: {
                    [key: string]: unknown;
                };
            }[];
            summary?: {
                /** @enum {unknown} */
                rowType: "work" | "copy" | "media" | "cost" | "party" | "location" | "artist" | "origin" | "category";
                /** @enum {unknown} */
                action: "create" | "update";
                count: number;
            }[];
        };
        InventoryUnitFinance: {
            unitId: components["schemas"]["InventoryUUID"];
            revision: components["schemas"]["InventoryRevision"];
            costComplete: boolean;
            totals: components["schemas"]["InventoryMoney"][];
            expenses: components["schemas"]["InventoryExpense"][];
            acquisitions?: components["schemas"]["InventoryAcquisition"][];
        };
        InventoryDeposit: {
            operationId: components["schemas"]["InventoryUUID"];
            unitIds: components["schemas"]["InventoryUUID"][];
            ownerId: components["schemas"]["InventoryUUID"];
            counterpartyId: components["schemas"]["InventoryUUID"];
            /** @enum {unknown} */
            direction: "in" | "out";
            revision: components["schemas"]["InventoryRevision"];
            commission: components["schemas"]["InventoryMoney"] | null;
            insuranceValue: components["schemas"]["InventoryMoney"] | null;
            /** @enum {unknown} */
            status?: "active" | "cancelled";
            /** Format: date */
            date?: string;
            commissionRate?: {
                numerator: string;
                denominator: string;
            } | null;
            terms?: string;
            documentIds?: components["schemas"]["InventoryUUID"][];
            ownerBalances?: components["schemas"]["InventoryOwnerBalance"][];
            /** @description Les termes peuvent encore etre remplaces sans activite commerciale ulterieure. */
            termsEditable?: boolean;
        };
        InventoryTransmission: {
            submissionId: components["schemas"]["InventoryUUID"];
            documentId: components["schemas"]["InventoryUUID"];
            /** @enum {unknown} */
            state: "pending" | "submitted" | "accepted" | "rejected" | "uncertain" | "reconciled";
            externalReference: string | null;
            /** Format: date-time */
            updatedAt: string;
            errorCode?: string | null;
            providerReference?: string | null;
            /** @enum {unknown} */
            flow?: "invoice" | "credit_note" | "transaction_reporting" | "payment_reporting";
            attempts?: number;
            revision?: components["schemas"]["InventoryRevision"];
            ledgerEntryId?: components["schemas"]["InventoryUUID"] | null;
        };
        InventoryArtist: {
            /** @constant */
            kind: "artist";
            id: components["schemas"]["InventoryUUID"];
            fields: {
                name: {
                    [key: string]: string;
                };
                birthDate?: string | null;
                deathDate?: string | null;
                nationalities?: string[];
                biography?: components["schemas"]["InventoryE_LocalizedRichText"];
                mediaIds?: components["schemas"]["InventoryUUID"][];
            };
            revision: components["schemas"]["InventoryRevision"];
        };
        InventoryOrigin: {
            /** @constant */
            kind: "origin";
            id: components["schemas"]["InventoryUUID"];
            fields: {
                name: {
                    [key: string]: string;
                };
                culture?: {
                    [key: string]: string;
                };
                country?: string | null;
                region?: {
                    [key: string]: string;
                };
                period?: {
                    [key: string]: string;
                };
                description?: components["schemas"]["InventoryE_LocalizedRichText"];
                mediaIds?: components["schemas"]["InventoryUUID"][];
            };
            revision: components["schemas"]["InventoryRevision"];
        };
        InventoryParty: {
            /** @constant */
            kind: "party";
            id: components["schemas"]["InventoryUUID"];
            fields: {
                name: string;
                /** @enum {string} */
                kind: "person" | "organization";
                roles: ("owner" | "supplier" | "depositor" | "customer" | "recipient")[];
                email?: string | null;
                phone?: string | null;
                addressLines?: string[];
                /** @enum {string} */
                customerKind?: "professional" | "private" | "public_entity";
                companyIdentifier?: string | null;
                vatIdentifier?: string | null;
                billingAddress?: {
                    line1: string;
                    line2?: string | null;
                    postalCode?: string;
                    city: string;
                    country: string;
                };
                shippingAddress?: {
                    line1: string;
                    line2?: string | null;
                    postalCode?: string;
                    city: string;
                    country: string;
                } | null;
            };
            revision: components["schemas"]["InventoryRevision"];
        };
        InventoryLocation: {
            /** @constant */
            kind: "location";
            id: components["schemas"]["InventoryUUID"];
            fields: {
                name: string;
                partyId?: string | null;
                addressLines?: string[];
                active?: boolean;
            };
            revision: components["schemas"]["InventoryRevision"];
        };
        InventoryType: {
            /** @constant */
            kind: "type";
            id: number;
            fields: {
                name: {
                    [key: string]: string;
                };
                active?: boolean;
                position?: number;
            };
            revision: components["schemas"]["InventoryRevision"];
        };
        InventoryCategory: {
            /** @constant */
            kind: "category";
            id: components["schemas"]["InventoryUUID"];
            fields: {
                name: components["schemas"]["InventoryLocalizedText"];
                active?: boolean;
            };
            revision: components["schemas"]["InventoryRevision"];
        };
        InventoryFiscalProfile: {
            /** @constant */
            id: "current";
            value: components["schemas"]["InventorySellerFiscalProfile"];
            revision: components["schemas"]["InventoryRevision"];
            qualified: boolean;
            profileId?: components["schemas"]["InventoryUUID"];
            qualification?: components["schemas"]["InventoryFiscalQualification"] | null;
        };
        InventoryTaxTreatmentView: {
            id: components["schemas"]["InventoryUUID"];
            value: components["schemas"]["InventoryTaxTreatment"];
            revision: components["schemas"]["InventoryRevision"];
            qualified: boolean;
            qualification?: components["schemas"]["InventoryFiscalQualification"] | null;
        };
        InventoryDocumentSeriesView: {
            seriesId: components["schemas"]["InventoryUUID"];
            prefix: string;
            /** @enum {unknown} */
            documentKind: "quote" | "invoice" | "credit_note";
            active: boolean;
            revision: components["schemas"]["InventoryRevision"];
            profileId?: components["schemas"]["InventoryUUID"];
            name?: string;
            fiscalYear?: number | null;
            nextNumber?: components["schemas"]["InventoryRevision"];
            lastIssuedAt?: string | null;
        };
        InventoryEditorialProjection: components["schemas"]["InventoryArtwork"] | components["schemas"]["InventoryUnitLogistics"] | components["schemas"]["InventoryArtist"] | components["schemas"]["InventoryOrigin"] | components["schemas"]["InventoryCategory"] | components["schemas"]["InventoryLocation"] | components["schemas"]["InventoryParty"] | components["schemas"]["InventoryType"] | components["schemas"]["InventoryMedia"] | components["schemas"]["InventoryLogisticsOperation"];
        InventoryReadResult: {
            resource: components["schemas"]["InventoryInventoryResourceRef"];
            revision: components["schemas"]["InventoryRevision"];
            data: components["schemas"]["InventoryArtwork"] | components["schemas"]["InventoryUnitLogistics"] | components["schemas"]["InventoryArtist"] | components["schemas"]["InventoryOrigin"] | components["schemas"]["InventoryCategory"] | components["schemas"]["InventoryLocation"] | components["schemas"]["InventoryParty"] | components["schemas"]["InventoryType"] | components["schemas"]["InventoryMedia"] | components["schemas"]["InventoryLogisticsOperation"] | components["schemas"]["InventoryUnitFinance"] | components["schemas"]["InventoryExpense"] | components["schemas"]["InventorySale"] | components["schemas"]["InventoryDocument"] | components["schemas"]["InventoryLedgerEntry"] | components["schemas"]["InventoryAssignment"] | components["schemas"]["InventoryBatch"] | components["schemas"]["InventoryFiscalProfile"] | components["schemas"]["InventoryTaxTreatmentView"] | components["schemas"]["InventoryDocumentSeriesView"] | components["schemas"]["InventoryDeposit"] | components["schemas"]["InventoryTransmission"] | components["schemas"]["InventoryPrivateNotes"] | components["schemas"]["InventoryAttachment"];
            /** @enum {unknown} */
            projection: "editorial" | "logistics" | "private_notes" | "finance" | "management";
        } & (unknown & unknown & unknown & unknown & unknown & unknown & unknown & unknown & unknown & unknown & unknown & unknown & unknown & unknown & unknown & unknown & unknown & unknown & unknown & unknown);
        InventoryFindResult: {
            items: components["schemas"]["InventoryReadResult"][];
            nextCursor: string | null;
        };
        InventoryMediaList: {
            items: components["schemas"]["InventoryMedia"][];
            nextCursor: string | null;
        };
        InventoryUploadResult: {
            attemptId: components["schemas"]["InventoryUUID"];
            mediaId: components["schemas"]["InventoryUUID"];
            revision: components["schemas"]["InventoryRevision"];
            /** Format: uri */
            uploadUrl: string | null;
            /** Format: date-time */
            expiresAt: string;
            /** @enum {unknown} */
            status: "pending" | "processing" | "ready" | "rejected" | "expired";
        };
        InventoryPreviewResult: {
            previewId: components["schemas"]["InventoryUUID"];
            /** Format: uri */
            url: string;
            /** Format: date-time */
            expiresAt: string;
        };
        InventoryFinalizeInput: {
            sha256?: string;
        };
        InventoryHttpCreateWork: {
            workRef?: string;
            draft: components["schemas"]["InventoryWorkDraft"];
            internalNotes?: string;
        };
        InventoryHttpReplaceDraft: {
            draft: components["schemas"]["InventoryWorkDraft"];
            internalNotes?: string | null;
            /** @description Omettre pour conserver ; null attribue une nouvelle référence automatique. Identité technique et slug conservés. */
            workRef?: components["schemas"]["InventoryReference"] | null;
        };
        InventoryHttpPublishWork: Record<string, never>;
        InventoryHttpUnpublishWork: Record<string, never>;
        InventoryHttpArchiveWork: Record<string, never>;
        InventoryHttpDeleteWork: Record<string, never>;
        InventoryHttpCreateUnit: {
            unitRef?: string;
            editionNumber?: string;
        };
        InventoryHttpUpdateUnitLogistics: {
            locationId?: string | null;
            conditionNotes?: string;
            editionNumber?: string | null;
            /** @enum {string} */
            qualification?: "unqualified" | "available";
            /** @enum {string} */
            custodyQualification?: "unknown" | "held";
            /** @description Omettre pour conserver ; null attribue une nouvelle référence automatique. Identité technique et slug conservés. */
            unitRef?: components["schemas"]["InventoryReference"] | null;
        };
        InventoryHttpArchiveUnit: Record<string, never>;
        InventoryHttpReserveUnit: {
            /** Format: uuid */
            partyId: string;
            until?: string | null;
            notes?: string;
        };
        InventoryHttpReleaseReservation: Record<string, never>;
        InventoryHttpMoveUnit: {
            /** Format: uuid */
            toLocationId: string;
            /** Format: date-time */
            occurredAt: string;
            notes?: string;
        };
        InventoryHttpLoanUnit: {
            /** Format: uuid */
            recipientId: string;
            toLocationId?: string | null;
            /** Format: date-time */
            departedAt: string;
            expectedReturnAt?: string | null;
            notes?: string;
        };
        InventoryHttpReturnLoan: {
            toLocationId?: string | null;
            /** Format: date-time */
            returnedAt: string;
            conditionNotes?: string;
        };
        InventoryHttpCorrectLogisticsOperation: {
            reason: string;
            notes?: string;
            expectedReturnAt?: string | null;
            /** @enum {string} */
            action: "annotate" | "cancel";
            toLocationId?: components["schemas"]["InventoryUUID"] | null;
            /** Format: date-time */
            occurredAt?: string;
        };
        InventoryHttpRecordAcquisition: {
            /** Format: uuid */
            unitId: string;
            /** @enum {string} */
            kind: "purchase" | "creation";
            date?: string | null;
            partyId?: string | null;
            ownerId?: string | null;
            amount: components["schemas"]["InventoryMoney"] | null;
            taxPurchasePrice?: components["schemas"]["InventoryMoney"] | null;
            qualificationEvidenceIds?: string[];
        };
        InventoryHttpRecordExpense: {
            expenseRef: string;
            /** @enum {string} */
            category: "photo" | "mounting" | "restoration" | "transport" | "insurance" | "other";
            date?: string | null;
            total: components["schemas"]["InventoryMoney"] | null;
            supplierId?: string | null;
            allocations: components["schemas"]["InventoryExpenseAllocation"][];
            evidenceIds?: string[];
            targetUnitIds: components["schemas"]["InventoryUUID"][];
        };
        InventoryHttpRecordDeposit: {
            /** @enum {string} */
            direction: "in" | "out";
            units: {
                /** Format: uuid */
                unitId: string;
                expectedRevision: string;
            }[];
            /** Format: uuid */
            ownerId: string;
            /** Format: uuid */
            counterpartyId: string;
            /** Format: date */
            date: string;
            expectedReturnAt?: string | null;
            locationId?: string | null;
            commission?: components["schemas"]["InventoryMoney"] | null;
            insuranceValue?: components["schemas"]["InventoryMoney"] | null;
            terms?: string;
            documentIds?: string[];
            commissionRate?: components["schemas"]["InventoryRate"] | null;
        };
        InventoryHttpRecordSale: {
            units: {
                /** Format: uuid */
                unitId: string;
                expectedRevision: string;
                grossAmount: components["schemas"]["InventoryMoney"];
            }[];
            /** Format: uuid */
            customerId: string;
            /** Format: date */
            date: string;
            /** @enum {string} */
            sellerRole: "own_account" | "consignment_principal" | "agent";
            depositOperationId?: string | null;
            amount: components["schemas"]["InventoryMoney"];
            reservationIds?: string[];
        };
        InventoryHttpPrepareDocument: {
            draft: components["schemas"]["InventoryDocumentDraft"];
        };
        InventoryHttpReplaceDocumentDraft: {
            draft: components["schemas"]["InventoryDocumentDraft"];
        };
        InventoryHttpIssueDocument: {
            /** Format: uuid */
            seriesId: string;
            sellerProfileRevision: string;
        };
        InventoryHttpRecordPayment: {
            /** Format: uuid */
            documentId: string;
            amount: components["schemas"]["InventoryMoney"];
            /** Format: date */
            date: string;
            /** @enum {string} */
            method: "bank_transfer" | "cash" | "card_external" | "cheque" | "other";
            reference: string;
            reason?: string;
            exchange?: {
                invoiceAmount: components["schemas"]["InventoryMoney"];
                /** Format: uuid */
                evidenceId: string;
            } | null;
        };
        InventoryHttpRecordRefund: {
            /** Format: uuid */
            documentId: string;
            amount: components["schemas"]["InventoryMoney"];
            /** Format: date */
            date: string;
            /** @enum {string} */
            method: "bank_transfer" | "cash" | "card_external" | "cheque" | "other";
            reference: string;
            reason?: string;
            exchange?: {
                invoiceAmount: components["schemas"]["InventoryMoney"];
                /** Format: uuid */
                evidenceId: string;
            } | null;
        };
        InventoryHttpRevokePublicMedia: {
            reason?: string;
        };
        InventoryHttpDeleteMedia: Record<string, never>;
        InventoryHttpConfirmImport: {
            simulationDigest: string;
        };
        InventoryHttpConfirmMigration: {
            simulationDigest: string;
            /** @constant */
            expectedSource: "artlogic";
            expectedSourceBindingRevision: components["schemas"]["InventoryRevision"];
            expectedFence: string;
        };
        InventoryHttpReplaceExpense: {
            /** @enum {string} */
            category: "photo" | "mounting" | "restoration" | "transport" | "insurance" | "other";
            date?: string | null;
            total: components["schemas"]["InventoryMoney"] | null;
            supplierId?: string | null;
            allocations: components["schemas"]["InventoryExpenseAllocation"][];
            evidenceIds?: string[];
            targetUnitIds: components["schemas"]["InventoryUUID"][];
        };
        InventoryHttpReallocateExpense: {
            allocations: components["schemas"]["InventoryExpenseAllocation"][];
            reason: string;
            targetUnitIds: components["schemas"]["InventoryUUID"][];
        };
        InventoryHttpCorrectLedgerEntry: {
            reason: string;
            /** Format: date */
            date: string;
        };
        InventoryHttpCancelFinancialOperation: {
            reason: string;
        };
        InventoryHttpUpdateDepositTerms: {
            terms: {
                commission?: components["schemas"]["InventoryMoney"] | null;
                insuranceValue?: components["schemas"]["InventoryMoney"] | null;
                text?: string;
                documentIds?: components["schemas"]["InventoryUUID"][];
                commissionRate?: components["schemas"]["InventoryRate"] | null;
            };
        };
        InventoryHttpCreateSellerProfile: {
            profile: components["schemas"]["InventorySellerFiscalProfile"];
        };
        InventoryHttpReplaceSellerProfile: {
            profile: components["schemas"]["InventorySellerFiscalProfile"];
        };
        InventoryHttpQualifySellerProfile: {
            validation: {
                evidenceIds: components["schemas"]["InventoryUUID"][];
                scope: string;
                note?: string;
            };
        };
        InventoryHttpCreateTaxTreatment: {
            treatment: components["schemas"]["InventoryTaxTreatment"];
        };
        InventoryHttpReplaceTaxTreatment: {
            treatment: components["schemas"]["InventoryTaxTreatment"];
        };
        InventoryHttpQualifyTaxTreatment: {
            validation: {
                evidenceIds: components["schemas"]["InventoryUUID"][];
                scope: string;
                note?: string;
            };
        };
        InventoryHttpCreateDocumentSeries: {
            series: {
                /** @enum {string} */
                kind: "quote" | "invoice" | "credit_note";
                name: components["schemas"]["InventoryReference"];
                prefix: string;
                fiscalYear?: number;
                legalEntityProfileId: components["schemas"]["InventoryUUID"];
            };
        };
        InventoryHttpDeactivateDocumentSeries: Record<string, never>;
        InventoryHttpSetAssignment: {
            /** Format: uri */
            issuer: string;
            subject: string;
            /** @enum {string} */
            role: "administrator" | "contributor";
        };
        InventoryHttpRevokeAssignment: {
            reason: string;
        };
        InventoryHttpReceiveSalesReturn: {
            unitId: components["schemas"]["InventoryUUID"];
            /** Format: date-time */
            receivedAt: string;
            locationId?: components["schemas"]["InventoryUUID"] | null;
            conditionNotes?: string;
        };
        InventoryHttpRestockReturnedUnit: {
            unitId: components["schemas"]["InventoryUUID"];
            reason: string;
        };
        InventoryHttpRecordOwnerSettlement: {
            amount: components["schemas"]["InventoryMoney"];
            /** @enum {string} */
            direction: "pay_owner" | "receive_owner";
            /** Format: date */
            date: string;
            /** @enum {string} */
            method: "bank_transfer" | "cash" | "card_external" | "cheque" | "other";
            reference: string;
        };
        InventoryCreateArtistInput: {
            fields: {
                name: {
                    [key: string]: string;
                };
                birthDate?: string | null;
                deathDate?: string | null;
                nationalities?: string[];
                biography?: components["schemas"]["InventoryE_LocalizedRichText"];
                mediaIds?: components["schemas"]["InventoryUUID"][];
            };
        };
        InventoryUpdateArtistInput: {
            fields: {
                name: {
                    [key: string]: string;
                };
                birthDate?: string | null;
                deathDate?: string | null;
                nationalities?: string[];
                biography?: components["schemas"]["InventoryE_LocalizedRichText"];
                mediaIds?: components["schemas"]["InventoryUUID"][];
            };
        };
        InventoryCreateOriginInput: {
            fields: {
                name: {
                    [key: string]: string;
                };
                culture?: {
                    [key: string]: string;
                };
                country?: string | null;
                region?: {
                    [key: string]: string;
                };
                period?: {
                    [key: string]: string;
                };
                description?: components["schemas"]["InventoryE_LocalizedRichText"];
                mediaIds?: components["schemas"]["InventoryUUID"][];
            };
        };
        InventoryUpdateOriginInput: {
            fields: {
                name: {
                    [key: string]: string;
                };
                culture?: {
                    [key: string]: string;
                };
                country?: string | null;
                region?: {
                    [key: string]: string;
                };
                period?: {
                    [key: string]: string;
                };
                description?: components["schemas"]["InventoryE_LocalizedRichText"];
                mediaIds?: components["schemas"]["InventoryUUID"][];
            };
        };
        InventoryCreatePartyInput: {
            fields: {
                name: string;
                /** @enum {string} */
                kind: "person" | "organization";
                roles: ("owner" | "supplier" | "depositor" | "customer" | "recipient")[];
                email?: string | null;
                phone?: string | null;
                addressLines?: string[];
                /** @enum {string} */
                customerKind?: "professional" | "private" | "public_entity";
                companyIdentifier?: string | null;
                vatIdentifier?: string | null;
                billingAddress?: {
                    line1: string;
                    line2?: string | null;
                    postalCode?: string;
                    city: string;
                    country: string;
                };
                shippingAddress?: {
                    line1: string;
                    line2?: string | null;
                    postalCode?: string;
                    city: string;
                    country: string;
                } | null;
            };
        };
        InventoryUpdatePartyInput: {
            fields: {
                name: string;
                /** @enum {string} */
                kind: "person" | "organization";
                roles: ("owner" | "supplier" | "depositor" | "customer" | "recipient")[];
                email?: string | null;
                phone?: string | null;
                addressLines?: string[];
                /** @enum {string} */
                customerKind?: "professional" | "private" | "public_entity";
                companyIdentifier?: string | null;
                vatIdentifier?: string | null;
                billingAddress?: {
                    line1: string;
                    line2?: string | null;
                    postalCode?: string;
                    city: string;
                    country: string;
                };
                shippingAddress?: {
                    line1: string;
                    line2?: string | null;
                    postalCode?: string;
                    city: string;
                    country: string;
                } | null;
            };
        };
        InventoryCreateLocationInput: {
            fields: {
                name: string;
                partyId?: string | null;
                addressLines?: string[];
                active?: boolean;
            };
        };
        InventoryUpdateLocationInput: {
            fields: {
                name: string;
                partyId?: string | null;
                addressLines?: string[];
                active?: boolean;
            };
        };
        InventoryCreateTypeInput: {
            fields: {
                name: {
                    [key: string]: string;
                };
                active?: boolean;
                position?: number;
            };
        };
        InventoryUpdateTypeInput: {
            fields: {
                name: {
                    [key: string]: string;
                };
                active?: boolean;
                position?: number;
            };
        };
        InventoryCreateCategoryInput: {
            fields: {
                name: components["schemas"]["InventoryLocalizedText"];
                active?: boolean;
            };
        };
        InventoryUpdateCategoryInput: {
            fields: {
                name: components["schemas"]["InventoryLocalizedText"];
                active?: boolean;
            };
        };
        InventoryPrepareMigrationInput: {
            exportFile?: components["schemas"]["InventoryInventoryClientFile"] | null;
            importKey: string;
        };
        InventoryValidateBatchInput: {
            /** @enum {string} */
            delimiter?: "comma" | "semicolon";
            mapping?: {
                sourceColumn: string;
                /** @enum {string} */
                targetField: "row_type" | "work_ref" | "copy_ref" | "action" | "record_kind" | "title" | "description" | "provenance" | "artist_ref" | "origin_ref" | "type_id" | "year" | "medium" | "file_path" | "media_ref" | "position" | "primary" | "visibility" | "alt" | "caption" | "credit" | "owner_ref" | "location_ref" | "edition_number" | "commercial_state" | "custody_state" | "acquisition_kind" | "acquisition_date" | "acquisition_amount_minor" | "tax_purchase_price_minor" | "currency" | "scale" | "cost_ref" | "category" | "date" | "total_minor" | "allocated_minor" | "supplier_ref" | "party_ref" | "name" | "roles" | "kind" | "culture" | "country" | "region" | "period" | "biography" | "clear_fields" | "category_ref" | "category_refs" | "active" | "ignore" | "association" | "materials" | "technique" | "condition" | "bibliography" | "exhibitions" | "inscriptions" | "email" | "phone" | "address" | "dates" | "nationalities";
                locale?: string;
            }[];
        };
        InventoryHttpReplaceAssignment: {
            /** Format: uri */
            issuer: string;
            subject: string;
            /** @enum {string} */
            role: "administrator" | "contributor";
        };
        InventoryPrivateNotes: {
            artworkId: components["schemas"]["InventoryUUID"];
            revision: components["schemas"]["InventoryRevision"];
            notes: string | null;
        };
        InventoryDependency: {
            resource: {
                /** @enum {unknown} */
                kind: "inventory_source_binding" | "inventory_assignment";
                id: string;
            };
            revision: components["schemas"]["InventoryRevision"];
            fingerprint?: string;
        };
        InventoryArtworkReadResult: {
            resource: {
                /** @constant */
                kind: "artwork";
                id: components["schemas"]["InventoryUUID"];
            };
            revision: components["schemas"]["InventoryRevision"];
            /** @constant */
            projection: "editorial";
            data: components["schemas"]["InventoryArtwork"];
        };
        InventoryArtworkPage: {
            items: components["schemas"]["InventoryArtworkReadResult"][];
            nextCursor: string | null;
        };
        InventoryPrivateNotesReadResult: {
            resource: {
                /** @constant */
                kind: "artwork";
                id: components["schemas"]["InventoryUUID"];
            };
            revision: components["schemas"]["InventoryRevision"];
            /** @constant */
            projection: "private_notes";
            data: components["schemas"]["InventoryPrivateNotes"];
        };
        InventoryPrivateNotesPage: {
            items: components["schemas"]["InventoryPrivateNotesReadResult"][];
            nextCursor: string | null;
        };
        InventoryUnitLogisticsReadResult: {
            resource: {
                /** @constant */
                kind: "unit";
                id: components["schemas"]["InventoryUUID"];
            };
            revision: components["schemas"]["InventoryRevision"];
            /** @constant */
            projection: "logistics";
            data: components["schemas"]["InventoryUnitLogistics"];
        };
        InventoryUnitLogisticsPage: {
            items: components["schemas"]["InventoryUnitLogisticsReadResult"][];
            nextCursor: string | null;
        };
        InventoryUnitFinanceReadResult: {
            resource: {
                /** @constant */
                kind: "unit";
                id: components["schemas"]["InventoryUUID"];
            };
            revision: components["schemas"]["InventoryRevision"];
            /** @constant */
            projection: "finance";
            data: components["schemas"]["InventoryUnitFinance"];
        };
        InventoryUnitFinancePage: {
            items: components["schemas"]["InventoryUnitFinanceReadResult"][];
            nextCursor: string | null;
        };
        InventoryArtistReadResult: {
            resource: {
                /** @constant */
                kind: "artist";
                id: components["schemas"]["InventoryUUID"];
            };
            revision: components["schemas"]["InventoryRevision"];
            /** @constant */
            projection: "editorial";
            data: components["schemas"]["InventoryArtist"];
        };
        InventoryArtistPage: {
            items: components["schemas"]["InventoryArtistReadResult"][];
            nextCursor: string | null;
        };
        InventoryOriginReadResult: {
            resource: {
                /** @constant */
                kind: "origin";
                id: components["schemas"]["InventoryUUID"];
            };
            revision: components["schemas"]["InventoryRevision"];
            /** @constant */
            projection: "editorial";
            data: components["schemas"]["InventoryOrigin"];
        };
        InventoryOriginPage: {
            items: components["schemas"]["InventoryOriginReadResult"][];
            nextCursor: string | null;
        };
        InventoryCategoryReadResult: {
            resource: {
                /** @constant */
                kind: "category";
                id: components["schemas"]["InventoryUUID"];
            };
            revision: components["schemas"]["InventoryRevision"];
            /** @constant */
            projection: "editorial";
            data: components["schemas"]["InventoryCategory"];
        };
        InventoryCategoryPage: {
            items: components["schemas"]["InventoryCategoryReadResult"][];
            nextCursor: string | null;
        };
        InventoryTypeReadResult: {
            resource: {
                /** @constant */
                kind: "type";
                id: number;
            };
            revision: components["schemas"]["InventoryRevision"];
            /** @constant */
            projection: "editorial";
            data: components["schemas"]["InventoryType"];
        };
        InventoryTypePage: {
            items: components["schemas"]["InventoryTypeReadResult"][];
            nextCursor: string | null;
        };
        InventoryPartyReadResult: {
            resource: {
                /** @constant */
                kind: "party";
                id: components["schemas"]["InventoryUUID"];
            };
            revision: components["schemas"]["InventoryRevision"];
            /** @constant */
            projection: "logistics";
            data: components["schemas"]["InventoryParty"];
        };
        InventoryPartyPage: {
            items: components["schemas"]["InventoryPartyReadResult"][];
            nextCursor: string | null;
        };
        InventoryLocationReadResult: {
            resource: {
                /** @constant */
                kind: "location";
                id: components["schemas"]["InventoryUUID"];
            };
            revision: components["schemas"]["InventoryRevision"];
            /** @constant */
            projection: "logistics";
            data: components["schemas"]["InventoryLocation"];
        };
        InventoryLocationPage: {
            items: components["schemas"]["InventoryLocationReadResult"][];
            nextCursor: string | null;
        };
        InventoryMediaReadResult: {
            resource: {
                /** @constant */
                kind: "media";
                id: components["schemas"]["InventoryUUID"];
            };
            revision: components["schemas"]["InventoryRevision"];
            /** @enum {unknown} */
            projection: "editorial" | "logistics" | "finance";
            data: components["schemas"]["InventoryMedia"] | components["schemas"]["InventoryNonFinancialAttachment"] | components["schemas"]["InventoryFinancialAttachment"];
        } & (unknown & unknown & unknown);
        InventoryMediaPage: {
            items: components["schemas"]["InventoryMediaReadResult"][];
            nextCursor: string | null;
        };
        InventoryLogisticsOperationReadResult: {
            resource: {
                /** @constant */
                kind: "logistics_operation";
                id: components["schemas"]["InventoryUUID"];
            };
            revision: components["schemas"]["InventoryRevision"];
            /** @constant */
            projection: "logistics";
            data: components["schemas"]["InventoryLogisticsOperation"];
        };
        InventoryLogisticsOperationPage: {
            items: components["schemas"]["InventoryLogisticsOperationReadResult"][];
            nextCursor: string | null;
        };
        InventorySaleReadResult: {
            resource: {
                /** @constant */
                kind: "sale";
                id: components["schemas"]["InventoryUUID"];
            };
            revision: components["schemas"]["InventoryRevision"];
            /** @constant */
            projection: "finance";
            data: components["schemas"]["InventorySale"];
        };
        InventorySalePage: {
            items: components["schemas"]["InventorySaleReadResult"][];
            nextCursor: string | null;
        };
        InventoryDocumentReadResult: {
            resource: {
                /** @constant */
                kind: "document";
                id: components["schemas"]["InventoryUUID"];
            };
            revision: components["schemas"]["InventoryRevision"];
            /** @constant */
            projection: "finance";
            data: components["schemas"]["InventoryDocument"];
        };
        InventoryDocumentPage: {
            items: components["schemas"]["InventoryDocumentReadResult"][];
            nextCursor: string | null;
        };
        InventoryExpenseReadResult: {
            resource: {
                /** @constant */
                kind: "expense";
                id: components["schemas"]["InventoryUUID"];
            };
            revision: components["schemas"]["InventoryRevision"];
            /** @constant */
            projection: "finance";
            data: components["schemas"]["InventoryExpense"];
        };
        InventoryExpensePage: {
            items: components["schemas"]["InventoryExpenseReadResult"][];
            nextCursor: string | null;
        };
        InventoryDepositReadResult: {
            resource: {
                /** @constant */
                kind: "deposit";
                id: components["schemas"]["InventoryUUID"];
            };
            revision: components["schemas"]["InventoryRevision"];
            /** @constant */
            projection: "finance";
            data: components["schemas"]["InventoryDeposit"];
        };
        InventoryDepositPage: {
            items: components["schemas"]["InventoryDepositReadResult"][];
            nextCursor: string | null;
        };
        InventoryLedgerEntryReadResult: {
            resource: {
                /** @constant */
                kind: "ledger_entry";
                id: components["schemas"]["InventoryUUID"];
            };
            revision: components["schemas"]["InventoryRevision"];
            /** @constant */
            projection: "finance";
            data: components["schemas"]["InventoryLedgerEntry"];
        };
        InventoryLedgerEntryPage: {
            items: components["schemas"]["InventoryLedgerEntryReadResult"][];
            nextCursor: string | null;
        };
        InventoryFiscalProfileReadResult: {
            resource: {
                /** @constant */
                kind: "fiscal_profile";
                /** @constant */
                id: "current";
            };
            revision: components["schemas"]["InventoryRevision"];
            /** @constant */
            projection: "finance";
            data: components["schemas"]["InventoryFiscalProfile"];
        };
        InventoryFiscalProfilePage: {
            items: components["schemas"]["InventoryFiscalProfileReadResult"][];
            nextCursor: string | null;
        };
        InventoryTaxTreatmentViewReadResult: {
            resource: {
                /** @constant */
                kind: "tax_treatment";
                id: components["schemas"]["InventoryUUID"];
            };
            revision: components["schemas"]["InventoryRevision"];
            /** @constant */
            projection: "finance";
            data: components["schemas"]["InventoryTaxTreatmentView"];
        };
        InventoryTaxTreatmentViewPage: {
            items: components["schemas"]["InventoryTaxTreatmentViewReadResult"][];
            nextCursor: string | null;
        };
        InventoryDocumentSeriesViewReadResult: {
            resource: {
                /** @constant */
                kind: "document_series";
                id: components["schemas"]["InventoryUUID"];
            };
            revision: components["schemas"]["InventoryRevision"];
            /** @constant */
            projection: "finance";
            data: components["schemas"]["InventoryDocumentSeriesView"];
        };
        InventoryDocumentSeriesViewPage: {
            items: components["schemas"]["InventoryDocumentSeriesViewReadResult"][];
            nextCursor: string | null;
        };
        InventoryBatchReadResult: {
            resource: {
                /** @constant */
                kind: "import_batch";
                id: components["schemas"]["InventoryUUID"];
            };
            revision: components["schemas"]["InventoryRevision"];
            /** @constant */
            projection: "management";
            data: components["schemas"]["InventoryBatch"];
        };
        InventoryBatchPage: {
            items: components["schemas"]["InventoryBatchReadResult"][];
            nextCursor: string | null;
        };
        InventoryAssignmentReadResult: {
            resource: {
                /** @constant */
                kind: "assignment";
                id: components["schemas"]["InventoryUUID"];
            };
            revision: components["schemas"]["InventoryRevision"];
            /** @constant */
            projection: "management";
            data: components["schemas"]["InventoryAssignment"];
        };
        InventoryAssignmentPage: {
            items: components["schemas"]["InventoryAssignmentReadResult"][];
            nextCursor: string | null;
        };
        InventoryTransmissionPage: {
            items: components["schemas"]["InventoryTransmission"][];
            nextCursor: string | null;
        };
        InventoryPublishedAttribution: {
            /** @enum {unknown} */
            kind: "artist" | "origin" | "text";
            name: {
                [key: string]: string;
            };
            referenceId: components["schemas"]["InventoryUUID"] | null;
            referenceRevision: components["schemas"]["InventoryRevision"] | null;
        };
        InventoryPreviewReadResult: {
            previewId: components["schemas"]["InventoryUUID"];
            artworkId: components["schemas"]["InventoryUUID"];
            draftRevision: components["schemas"]["InventoryRevision"];
            publicationRevision: components["schemas"]["InventoryRevision"] | null;
            draft: components["schemas"]["InventoryWorkDraft"];
            draftAttribution: components["schemas"]["InventoryPublishedAttribution"];
            published: {
                document: components["schemas"]["InventoryWorkDraft"];
                attribution: components["schemas"]["InventoryPublishedAttribution"];
                revision: components["schemas"]["InventoryRevision"];
                /** Format: date-time */
                publishedAt: string;
            } | null;
            blockers: ("inventory_publication_invalid" | "inventory_media_invalid" | "inventory_reference_in_use")[];
            /** Format: date-time */
            expiresAt: string;
        };
        InventoryAcquisition: {
            acquisitionId: components["schemas"]["InventoryUUID"];
            operationId: components["schemas"]["InventoryUUID"];
            unitId: components["schemas"]["InventoryUUID"];
            /** @enum {unknown} */
            kind: "purchase" | "creation";
            amount: components["schemas"]["InventoryMoney"] | null;
            /** Format: date */
            date: string | null;
            partyId: components["schemas"]["InventoryUUID"] | null;
            ownerId: components["schemas"]["InventoryUUID"] | null;
            taxPurchasePrice: components["schemas"]["InventoryMoney"] | null;
            qualificationEvidenceIds: components["schemas"]["InventoryUUID"][];
            revision: components["schemas"]["InventoryRevision"];
            /** @enum {unknown} */
            status: "draft" | "active" | "completed" | "cancelled";
        };
        InventoryFiscalQualification: {
            evidenceIds: components["schemas"]["InventoryUUID"][];
            scope: string;
            note?: string;
            issuer: string;
            subject: string;
            /** Format: date-time */
            qualifiedAt: string;
            qualifiedRevision: components["schemas"]["InventoryRevision"];
        };
        InventoryDocumentLineView: {
            lineId: components["schemas"]["InventoryUUID"];
            unitId?: components["schemas"]["InventoryUUID"] | null;
            description: components["schemas"]["InventoryLocalizedText"];
            quantity: number;
            unitPrice: components["schemas"]["InventoryMoney"];
            /** @enum {unknown} */
            priceMode: "net" | "gross";
            discount?: components["schemas"]["InventoryMoney"] | null;
            taxTreatmentId: components["schemas"]["InventoryUUID"];
            taxTreatmentRevision: components["schemas"]["InventoryRevision"];
            net: components["schemas"]["InventoryMoney"];
            tax: components["schemas"]["InventoryMoney"];
            gross: components["schemas"]["InventoryMoney"];
            originalDocumentId?: components["schemas"]["InventoryUUID"] | null;
            originalLineId?: components["schemas"]["InventoryUUID"] | null;
        };
        InventoryOwnerBalance: {
            currency: string;
            scale: number;
            complete: boolean;
            obligation: components["schemas"]["InventoryMoney"] | null;
            paidMinor: string;
            balanceMinor: string | null;
        };
        InventoryStockDocumentLine: {
            unitId: components["schemas"]["InventoryUUID"];
            description: {
                [key: string]: string;
            };
            /** @constant */
            quantity: 1;
            unitPrice: components["schemas"]["InventoryMoney"];
            /** @enum {string} */
            priceMode: "net" | "gross";
            discount?: components["schemas"]["InventoryMoney"] | null;
            /** Format: uuid */
            taxTreatmentId: string;
        };
        InventoryChargeDocumentLine: {
            unitId?: null;
            description: {
                [key: string]: string;
            };
            quantity: number;
            unitPrice: components["schemas"]["InventoryMoney"];
            /** @enum {string} */
            priceMode: "net" | "gross";
            discount?: components["schemas"]["InventoryMoney"] | null;
            /** Format: uuid */
            taxTreatmentId: string;
        };
        InventoryAttachment: {
            mediaId: components["schemas"]["InventoryUUID"];
            /** @enum {string} */
            classification: "financial_document" | "non_financial_document";
            fileName: string;
            /** @enum {unknown} */
            mimeType: "application/pdf" | "image/jpeg" | "image/png" | "image/webp";
            bytes: number;
            /** @enum {unknown} */
            status: "pending" | "processing" | "ready" | "rejected" | "revoked";
            /** Format: date-time */
            createdAt: string;
            revision: components["schemas"]["InventoryRevision"];
            originalAvailable: boolean;
            errorCode?: string | null;
        };
        InventoryFinancialAttachment: {
            mediaId: components["schemas"]["InventoryUUID"];
            /** @constant */
            classification: "financial_document";
            fileName: string;
            /** @enum {unknown} */
            mimeType: "application/pdf" | "image/jpeg" | "image/png" | "image/webp";
            bytes: number;
            /** @enum {unknown} */
            status: "pending" | "processing" | "ready" | "rejected" | "revoked";
            /** Format: date-time */
            createdAt: string;
            revision: components["schemas"]["InventoryRevision"];
            originalAvailable: boolean;
            errorCode?: string | null;
        };
        InventoryNonFinancialAttachment: {
            mediaId: components["schemas"]["InventoryUUID"];
            /** @constant */
            classification: "non_financial_document";
            fileName: string;
            /** @enum {unknown} */
            mimeType: "application/pdf" | "image/jpeg" | "image/png" | "image/webp";
            bytes: number;
            /** @enum {unknown} */
            status: "pending" | "processing" | "ready" | "rejected" | "revoked";
            /** Format: date-time */
            createdAt: string;
            revision: components["schemas"]["InventoryRevision"];
            originalAvailable: boolean;
            errorCode?: string | null;
        };
        InventoryDocumentPartySnapshot: {
            name: string;
            addressLines: string[];
            country?: string;
            customerKind?: string;
            companyIdentifier?: string | null;
            vatIdentifier?: string | null;
            registration?: string | null;
            legalForm?: string | null;
        };
        InventoryClientDocumentLine: {
            lineId: components["schemas"]["InventoryUUID"];
            unitId?: components["schemas"]["InventoryUUID"] | null;
            description: components["schemas"]["InventoryLocalizedText"];
            quantity: number;
            unitPrice: components["schemas"]["InventoryMoney"];
            /** @enum {unknown} */
            priceMode: "net" | "gross";
            discount?: components["schemas"]["InventoryMoney"] | null;
            gross: components["schemas"]["InventoryMoney"];
            net?: components["schemas"]["InventoryMoney"];
            vatAmount?: components["schemas"]["InventoryMoney"];
            vatRate?: components["schemas"]["InventoryRate"];
        };
        InventoryClientDocumentSnapshot: {
            /** @enum {unknown} */
            kind: "quote" | "invoice" | "credit_note";
            number: string;
            /** Format: date */
            issuedOn: string;
            locale: string;
            simulation: boolean;
            seller: components["schemas"]["InventoryDocumentPartySnapshot"];
            customer: components["schemas"]["InventoryDocumentPartySnapshot"];
            lines: components["schemas"]["InventoryClientDocumentLine"][];
            gross: components["schemas"]["InventoryMoney"];
            visibleVat?: components["schemas"]["InventoryMoney"];
            legalMentions: string[];
            paymentTerms: string;
            dueDate?: string | null;
            deliveryDate?: string | null;
            originalNumber?: string | null;
            creditReason?: string | null;
        };
        InventoryImportDraftInput: {
            importKey: string;
            /** @enum {string} */
            delimiter: "comma" | "semicolon";
            mapping: {
                sourceColumn: string;
                /** @enum {string} */
                targetField: "row_type" | "work_ref" | "copy_ref" | "action" | "record_kind" | "title" | "description" | "provenance" | "artist_ref" | "origin_ref" | "type_id" | "year" | "medium" | "file_path" | "media_ref" | "position" | "primary" | "visibility" | "alt" | "caption" | "credit" | "owner_ref" | "location_ref" | "edition_number" | "commercial_state" | "custody_state" | "acquisition_kind" | "acquisition_date" | "acquisition_amount_minor" | "tax_purchase_price_minor" | "currency" | "scale" | "cost_ref" | "category" | "date" | "total_minor" | "allocated_minor" | "supplier_ref" | "party_ref" | "name" | "roles" | "kind" | "culture" | "country" | "region" | "period" | "biography" | "clear_fields" | "category_ref" | "category_refs" | "active" | "ignore" | "association" | "materials" | "technique" | "condition" | "bibliography" | "exhibitions" | "inscriptions" | "email" | "phone" | "address" | "dates" | "nationalities";
                locale?: string;
            }[];
            /** @enum {string} */
            mode?: "create" | "update" | "mixed_explicit";
        };
        InventoryImportTransferInput: {
            /** @enum {unknown} */
            role: "catalog" | "images";
            fileName: string;
            mimeType: string;
            bytes: number;
            sha256?: string;
        };
        InventoryImportTransfer: {
            batchId: components["schemas"]["InventoryUUID"];
            uploadId: components["schemas"]["InventoryUUID"];
            revision: components["schemas"]["InventoryRevision"];
            /** @enum {unknown} */
            state: "pending" | "receiving" | "finalizing" | "complete" | "failed" | "cancelled";
            receivedBytes: number;
            declaredBytes: number | null;
            sealedBytes: number | null;
            /** Format: date-time */
            expiresAt: string;
            /** @constant */
            chunkBytes: 1048576;
            token?: string;
        };
        InventoryHttpCancelImport: Record<string, never>;
        InventoryHttpResumeImport: {
            simulationDigest: string;
        };
    };
    responses: never;
    parameters: never;
    requestBodies: never;
    headers: never;
    pathItems: never;
}
export type $defs = Record<string, never>;
export interface operations {
    inventoryGetArtworks: {
        parameters: {
            query?: {
                limit?: number;
                cursor?: string;
                q?: string;
                artistId?: string;
                originId?: string;
                ownerId?: string;
                locationId?: string;
                categoryId?: string;
                typeId?: number;
                publication?: "hidden" | "published";
                commercialState?: "unqualified" | "available" | "reserved" | "sold";
                custodyState?: "unknown" | "held" | "loaned_out" | "deposited_out" | "returned_to_owner";
                includeArchived?: boolean;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Inventory result */
            200: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryArtworkPage"];
                };
            };
            /** @description Inventory error */
            400: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            401: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            403: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            404: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            409: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            412: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            413: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            422: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            428: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            503: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
        };
    };
    inventoryCreateWork: {
        parameters: {
            query?: never;
            header: {
                "Idempotency-Key": string;
                "X-CSRF-Token": string;
            };
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["InventoryHttpCreateWork"];
            };
        };
        responses: {
            /** @description Inventory result */
            200: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryReceipt"];
                };
            };
            /** @description Inventory error */
            400: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            401: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            403: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            404: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            409: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            412: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            413: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            422: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            428: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            503: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
        };
    };
    inventoryReplaceDraft: {
        parameters: {
            query?: never;
            header: {
                "Idempotency-Key": string;
                "If-Match": string;
                "X-CSRF-Token": string;
            };
            path: {
                artworkId: components["schemas"]["InventoryUUID"];
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["InventoryHttpReplaceDraft"];
            };
        };
        responses: {
            /** @description Inventory result */
            200: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryReceipt"];
                };
            };
            /** @description Inventory error */
            400: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            401: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            403: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            404: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            409: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            412: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            413: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            422: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            428: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            503: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
        };
    };
    inventoryPublishWork: {
        parameters: {
            query?: never;
            header: {
                "Idempotency-Key": string;
                "If-Match": string;
                "X-CSRF-Token": string;
            };
            path: {
                artworkId: components["schemas"]["InventoryUUID"];
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["InventoryHttpPublishWork"];
            };
        };
        responses: {
            /** @description Inventory result */
            200: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryReceipt"];
                };
            };
            /** @description Inventory error */
            400: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            401: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            403: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            404: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            409: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            412: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            413: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            422: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            428: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            503: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
        };
    };
    inventoryUnpublishWork: {
        parameters: {
            query?: never;
            header: {
                "Idempotency-Key": string;
                "If-Match": string;
                "X-CSRF-Token": string;
            };
            path: {
                artworkId: components["schemas"]["InventoryUUID"];
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["InventoryHttpUnpublishWork"];
            };
        };
        responses: {
            /** @description Inventory result */
            200: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryReceipt"];
                };
            };
            /** @description Inventory error */
            400: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            401: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            403: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            404: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            409: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            412: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            413: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            422: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            428: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            503: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
        };
    };
    inventoryArchiveWork: {
        parameters: {
            query?: never;
            header: {
                "Idempotency-Key": string;
                "If-Match": string;
                "X-CSRF-Token": string;
            };
            path: {
                artworkId: components["schemas"]["InventoryUUID"];
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["InventoryHttpArchiveWork"];
            };
        };
        responses: {
            /** @description Inventory result */
            200: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryReceipt"];
                };
            };
            /** @description Inventory error */
            400: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            401: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            403: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            404: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            409: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            412: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            413: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            422: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            428: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            503: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
        };
    };
    inventoryGetArtworksArtworkD: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                artworkId: components["schemas"]["InventoryUUID"];
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Inventory result */
            200: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryArtworkReadResult"];
                };
            };
            /** @description Inventory error */
            400: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            401: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            403: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            404: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            409: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            412: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            413: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            422: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            428: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            503: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
        };
    };
    inventoryDeleteWork: {
        parameters: {
            query?: never;
            header: {
                "Idempotency-Key": string;
                "If-Match": string;
                "X-CSRF-Token": string;
            };
            path: {
                artworkId: components["schemas"]["InventoryUUID"];
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["InventoryHttpDeleteWork"];
            };
        };
        responses: {
            /** @description Inventory result */
            200: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryReceipt"];
                };
            };
            /** @description Inventory error */
            400: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            401: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            403: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            404: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            409: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            412: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            413: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            422: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            428: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            503: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
        };
    };
    inventoryGetArtworksArtworkDUnits: {
        parameters: {
            query?: {
                limit?: number;
                cursor?: string;
                q?: string;
                includeArchived?: boolean;
            };
            header?: never;
            path: {
                artworkId: components["schemas"]["InventoryUUID"];
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Inventory result */
            200: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryUnitLogisticsPage"];
                };
            };
            /** @description Inventory error */
            400: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            401: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            403: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            404: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            409: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            412: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            413: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            422: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            428: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            503: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
        };
    };
    inventoryCreateUnit: {
        parameters: {
            query?: never;
            header: {
                "Idempotency-Key": string;
                "If-Match": string;
                "X-CSRF-Token": string;
            };
            path: {
                artworkId: components["schemas"]["InventoryUUID"];
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["InventoryHttpCreateUnit"];
            };
        };
        responses: {
            /** @description Inventory result */
            200: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryReceipt"];
                };
            };
            /** @description Inventory error */
            400: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            401: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            403: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            404: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            409: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            412: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            413: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            422: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            428: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            503: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
        };
    };
    inventoryUpdateUnitLogistics: {
        parameters: {
            query?: never;
            header: {
                "Idempotency-Key": string;
                "If-Match": string;
                "X-CSRF-Token": string;
            };
            path: {
                unitId: components["schemas"]["InventoryUUID"];
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["InventoryHttpUpdateUnitLogistics"];
            };
        };
        responses: {
            /** @description Inventory result */
            200: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryReceipt"];
                };
            };
            /** @description Inventory error */
            400: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            401: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            403: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            404: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            409: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            412: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            413: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            422: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            428: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            503: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
        };
    };
    inventoryArchiveUnit: {
        parameters: {
            query?: never;
            header: {
                "Idempotency-Key": string;
                "If-Match": string;
                "X-CSRF-Token": string;
            };
            path: {
                unitId: components["schemas"]["InventoryUUID"];
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["InventoryHttpArchiveUnit"];
            };
        };
        responses: {
            /** @description Inventory result */
            200: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryReceipt"];
                };
            };
            /** @description Inventory error */
            400: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            401: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            403: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            404: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            409: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            412: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            413: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            422: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            428: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            503: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
        };
    };
    inventoryReserveUnit: {
        parameters: {
            query?: never;
            header: {
                "Idempotency-Key": string;
                "If-Match": string;
                "X-CSRF-Token": string;
            };
            path: {
                unitId: components["schemas"]["InventoryUUID"];
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["InventoryHttpReserveUnit"];
            };
        };
        responses: {
            /** @description Inventory result */
            200: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryReceipt"];
                };
            };
            /** @description Inventory error */
            400: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            401: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            403: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            404: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            409: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            412: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            413: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            422: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            428: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            503: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
        };
    };
    inventoryReleaseReservation: {
        parameters: {
            query?: never;
            header: {
                "Idempotency-Key": string;
                "If-Match": string;
                "X-CSRF-Token": string;
            };
            path: {
                operationId: components["schemas"]["InventoryUUID"];
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["InventoryHttpReleaseReservation"];
            };
        };
        responses: {
            /** @description Inventory result */
            200: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryReceipt"];
                };
            };
            /** @description Inventory error */
            400: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            401: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            403: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            404: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            409: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            412: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            413: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            422: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            428: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            503: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
        };
    };
    inventoryMoveUnit: {
        parameters: {
            query?: never;
            header: {
                "Idempotency-Key": string;
                "If-Match": string;
                "X-CSRF-Token": string;
            };
            path: {
                unitId: components["schemas"]["InventoryUUID"];
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["InventoryHttpMoveUnit"];
            };
        };
        responses: {
            /** @description Inventory result */
            200: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryReceipt"];
                };
            };
            /** @description Inventory error */
            400: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            401: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            403: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            404: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            409: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            412: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            413: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            422: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            428: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            503: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
        };
    };
    inventoryLoanUnit: {
        parameters: {
            query?: never;
            header: {
                "Idempotency-Key": string;
                "If-Match": string;
                "X-CSRF-Token": string;
            };
            path: {
                unitId: components["schemas"]["InventoryUUID"];
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["InventoryHttpLoanUnit"];
            };
        };
        responses: {
            /** @description Inventory result */
            200: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryReceipt"];
                };
            };
            /** @description Inventory error */
            400: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            401: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            403: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            404: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            409: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            412: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            413: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            422: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            428: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            503: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
        };
    };
    inventoryReturnLoan: {
        parameters: {
            query?: never;
            header: {
                "Idempotency-Key": string;
                "If-Match": string;
                "X-CSRF-Token": string;
            };
            path: {
                operationId: components["schemas"]["InventoryUUID"];
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["InventoryHttpReturnLoan"];
            };
        };
        responses: {
            /** @description Inventory result */
            200: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryReceipt"];
                };
            };
            /** @description Inventory error */
            400: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            401: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            403: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            404: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            409: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            412: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            413: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            422: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            428: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            503: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
        };
    };
    inventoryCorrectLogisticsOperation: {
        parameters: {
            query?: never;
            header: {
                "Idempotency-Key": string;
                "If-Match": string;
                "X-CSRF-Token": string;
            };
            path: {
                operationId: components["schemas"]["InventoryUUID"];
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["InventoryHttpCorrectLogisticsOperation"];
            };
        };
        responses: {
            /** @description Inventory result */
            200: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryReceipt"];
                };
            };
            /** @description Inventory error */
            400: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            401: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            403: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            404: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            409: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            412: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            413: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            422: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            428: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            503: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
        };
    };
    inventoryRecordAcquisition: {
        parameters: {
            query?: never;
            header: {
                "Idempotency-Key": string;
                "If-Match": string;
                "X-CSRF-Token": string;
            };
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["InventoryHttpRecordAcquisition"];
            };
        };
        responses: {
            /** @description Inventory result */
            200: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryReceipt"];
                };
            };
            /** @description Inventory error */
            400: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            401: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            403: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            404: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            409: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            412: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            413: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            422: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            428: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            503: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
        };
    };
    inventoryListExpenses: {
        parameters: {
            query?: {
                limit?: number;
                cursor?: string;
                q?: string;
                unitId?: string;
                fromDate?: string;
                toDate?: string;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Inventory result */
            200: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryExpensePage"];
                };
            };
            /** @description Inventory error */
            400: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            401: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            403: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            404: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            409: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            412: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            413: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            422: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            428: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            503: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
        };
    };
    inventoryRecordExpense: {
        parameters: {
            query?: never;
            header: {
                "Idempotency-Key": string;
                "X-CSRF-Token": string;
            };
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["InventoryHttpRecordExpense"];
            };
        };
        responses: {
            /** @description Inventory result */
            200: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryReceipt"];
                };
            };
            /** @description Inventory error */
            400: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            401: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            403: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            404: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            409: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            412: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            413: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            422: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            428: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            503: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
        };
    };
    inventoryListDeposits: {
        parameters: {
            query?: {
                limit?: number;
                cursor?: string;
                q?: string;
                unitId?: components["schemas"]["InventoryUUID"];
                partyId?: components["schemas"]["InventoryUUID"];
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Inventory result */
            200: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryDepositPage"];
                };
            };
            /** @description Inventory error */
            400: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            401: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            403: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            404: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            409: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            412: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            413: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            422: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            428: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            503: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
        };
    };
    inventoryRecordDeposit: {
        parameters: {
            query?: never;
            header: {
                "Idempotency-Key": string;
                "X-CSRF-Token": string;
            };
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["InventoryHttpRecordDeposit"];
            };
        };
        responses: {
            /** @description Inventory result */
            200: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryReceipt"];
                };
            };
            /** @description Inventory error */
            400: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            401: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            403: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            404: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            409: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            412: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            413: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            422: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            428: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            503: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
        };
    };
    inventoryListSales: {
        parameters: {
            query?: {
                limit?: number;
                cursor?: string;
                q?: string;
                unitId?: components["schemas"]["InventoryUUID"];
                partyId?: components["schemas"]["InventoryUUID"];
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Inventory result */
            200: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventorySalePage"];
                };
            };
            /** @description Inventory error */
            400: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            401: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            403: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            404: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            409: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            412: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            413: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            422: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            428: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            503: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
        };
    };
    inventoryRecordSale: {
        parameters: {
            query?: never;
            header: {
                "Idempotency-Key": string;
                "X-CSRF-Token": string;
            };
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["InventoryHttpRecordSale"];
            };
        };
        responses: {
            /** @description Inventory result */
            200: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryReceipt"];
                };
            };
            /** @description Inventory error */
            400: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            401: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            403: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            404: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            409: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            412: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            413: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            422: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            428: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            503: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
        };
    };
    inventoryGetDocuments: {
        parameters: {
            query?: {
                limit?: number;
                cursor?: string;
                q?: string;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Inventory result */
            200: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryDocumentPage"];
                };
            };
            /** @description Inventory error */
            400: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            401: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            403: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            404: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            409: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            412: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            413: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            422: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            428: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            503: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
        };
    };
    inventoryPrepareDocument: {
        parameters: {
            query?: never;
            header: {
                "Idempotency-Key": string;
                "X-CSRF-Token": string;
            };
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["InventoryHttpPrepareDocument"];
            };
        };
        responses: {
            /** @description Inventory result */
            200: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryReceipt"];
                };
            };
            /** @description Inventory error */
            400: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            401: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            403: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            404: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            409: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            412: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            413: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            422: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            428: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            503: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
        };
    };
    inventoryReplaceDocumentDraft: {
        parameters: {
            query?: never;
            header: {
                "Idempotency-Key": string;
                "If-Match": string;
                "X-CSRF-Token": string;
            };
            path: {
                documentId: components["schemas"]["InventoryUUID"];
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["InventoryHttpReplaceDocumentDraft"];
            };
        };
        responses: {
            /** @description Inventory result */
            200: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryReceipt"];
                };
            };
            /** @description Inventory error */
            400: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            401: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            403: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            404: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            409: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            412: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            413: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            422: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            428: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            503: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
        };
    };
    inventoryIssueDocument: {
        parameters: {
            query?: never;
            header: {
                "Idempotency-Key": string;
                "If-Match": string;
                "X-CSRF-Token": string;
            };
            path: {
                documentId: components["schemas"]["InventoryUUID"];
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["InventoryHttpIssueDocument"];
            };
        };
        responses: {
            /** @description Inventory result */
            200: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryReceipt"];
                };
            };
            /** @description Inventory error */
            400: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            401: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            403: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            404: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            409: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            412: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            413: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            422: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            428: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            503: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
        };
    };
    inventoryRecordPayment: {
        parameters: {
            query?: never;
            header: {
                "Idempotency-Key": string;
                "If-Match": string;
                "X-CSRF-Token": string;
            };
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["InventoryHttpRecordPayment"];
            };
        };
        responses: {
            /** @description Inventory result */
            200: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryReceipt"];
                };
            };
            /** @description Inventory error */
            400: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            401: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            403: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            404: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            409: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            412: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            413: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            422: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            428: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            503: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
        };
    };
    inventoryRecordRefund: {
        parameters: {
            query?: never;
            header: {
                "Idempotency-Key": string;
                "If-Match": string;
                "X-CSRF-Token": string;
            };
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["InventoryHttpRecordRefund"];
            };
        };
        responses: {
            /** @description Inventory result */
            200: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryReceipt"];
                };
            };
            /** @description Inventory error */
            400: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            401: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            403: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            404: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            409: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            412: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            413: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            422: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            428: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            503: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
        };
    };
    inventoryRevokePublicMedia: {
        parameters: {
            query?: never;
            header: {
                "Idempotency-Key": string;
                "If-Match": string;
                "X-CSRF-Token": string;
            };
            path: {
                mediaId: components["schemas"]["InventoryUUID"];
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["InventoryHttpRevokePublicMedia"];
            };
        };
        responses: {
            /** @description Inventory result */
            200: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryReceipt"];
                };
            };
            /** @description Inventory error */
            400: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            401: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            403: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            404: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            409: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            412: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            413: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            422: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            428: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            503: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
        };
    };
    inventoryReadMedia: {
        parameters: {
            query?: {
                /** @description Projection explicite pour la métadonnée privée d’une photo ou d’un justificatif. Finance exige le rôle administrateur. */
                projection?: "editorial" | "logistics" | "finance";
            };
            header?: never;
            path: {
                mediaId: components["schemas"]["InventoryUUID"];
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Inventory result */
            200: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryMediaReadResult"];
                };
            };
            /** @description Inventory error */
            400: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            401: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            403: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            404: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            409: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            412: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            413: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            422: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            428: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            503: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
        };
    };
    inventoryDeleteMedia: {
        parameters: {
            query?: never;
            header: {
                "Idempotency-Key": string;
                "If-Match": string;
                "X-CSRF-Token": string;
            };
            path: {
                mediaId: components["schemas"]["InventoryUUID"];
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["InventoryHttpDeleteMedia"];
            };
        };
        responses: {
            /** @description Inventory result */
            200: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryReceipt"];
                };
            };
            /** @description Inventory error */
            400: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            401: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            403: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            404: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            409: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            412: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            413: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            422: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            428: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            503: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
        };
    };
    inventoryConfirmImport: {
        parameters: {
            query?: never;
            header: {
                "Idempotency-Key": string;
                "If-Match": string;
                "X-CSRF-Token": string;
            };
            path: {
                batchId: components["schemas"]["InventoryUUID"];
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["InventoryHttpConfirmImport"];
            };
        };
        responses: {
            /** @description Inventory result */
            200: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryReceipt"];
                };
            };
            /** @description Inventory error */
            400: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            401: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            403: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            404: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            409: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            412: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            413: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            422: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            428: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            503: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
        };
    };
    inventoryConfirmMigration: {
        parameters: {
            query?: never;
            header: {
                "Idempotency-Key": string;
                "If-Match": string;
                "X-CSRF-Token": string;
            };
            path: {
                batchId: components["schemas"]["InventoryUUID"];
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["InventoryHttpConfirmMigration"];
            };
        };
        responses: {
            /** @description Inventory result */
            200: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryReceipt"];
                };
            };
            /** @description Inventory error */
            400: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            401: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            403: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            404: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            409: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            412: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            413: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            422: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            428: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            503: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
        };
    };
    inventoryReadExpense: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                expenseId: components["schemas"]["InventoryUUID"];
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Inventory result */
            200: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryExpenseReadResult"];
                };
            };
            /** @description Inventory error */
            400: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            401: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            403: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            404: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            409: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            412: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            413: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            422: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            428: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            503: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
        };
    };
    inventoryReplaceExpense: {
        parameters: {
            query?: never;
            header: {
                "Idempotency-Key": string;
                "If-Match": string;
                "X-CSRF-Token": string;
            };
            path: {
                expenseId: components["schemas"]["InventoryUUID"];
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["InventoryHttpReplaceExpense"];
            };
        };
        responses: {
            /** @description Inventory result */
            200: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryReceipt"];
                };
            };
            /** @description Inventory error */
            400: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            401: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            403: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            404: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            409: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            412: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            413: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            422: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            428: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            503: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
        };
    };
    inventoryReallocateExpense: {
        parameters: {
            query?: never;
            header: {
                "Idempotency-Key": string;
                "If-Match": string;
                "X-CSRF-Token": string;
            };
            path: {
                expenseId: components["schemas"]["InventoryUUID"];
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["InventoryHttpReallocateExpense"];
            };
        };
        responses: {
            /** @description Inventory result */
            200: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryReceipt"];
                };
            };
            /** @description Inventory error */
            400: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            401: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            403: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            404: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            409: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            412: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            413: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            422: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            428: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            503: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
        };
    };
    inventoryCorrectLedgerEntry: {
        parameters: {
            query?: never;
            header: {
                "Idempotency-Key": string;
                "If-Match": string;
                "X-CSRF-Token": string;
            };
            path: {
                entryId: components["schemas"]["InventoryUUID"];
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["InventoryHttpCorrectLedgerEntry"];
            };
        };
        responses: {
            /** @description Inventory result */
            200: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryReceipt"];
                };
            };
            /** @description Inventory error */
            400: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            401: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            403: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            404: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            409: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            412: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            413: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            422: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            428: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            503: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
        };
    };
    inventoryCancelFinancialOperation: {
        parameters: {
            query?: never;
            header: {
                "Idempotency-Key": string;
                "If-Match": string;
                "X-CSRF-Token": string;
            };
            path: {
                operationId: components["schemas"]["InventoryUUID"];
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["InventoryHttpCancelFinancialOperation"];
            };
        };
        responses: {
            /** @description Inventory result */
            200: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryReceipt"];
                };
            };
            /** @description Inventory error */
            400: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            401: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            403: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            404: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            409: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            412: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            413: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            422: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            428: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            503: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
        };
    };
    inventoryUpdateDepositTerms: {
        parameters: {
            query?: never;
            header: {
                "Idempotency-Key": string;
                "If-Match": string;
                "X-CSRF-Token": string;
            };
            path: {
                operationId: components["schemas"]["InventoryUUID"];
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["InventoryHttpUpdateDepositTerms"];
            };
        };
        responses: {
            /** @description Inventory result */
            200: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryReceipt"];
                };
            };
            /** @description Inventory error */
            400: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            401: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            403: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            404: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            409: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            412: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            413: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            422: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            428: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            503: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
        };
    };
    inventoryGetSellerFiscalProfile: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Inventory result */
            200: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryFiscalProfileReadResult"];
                };
            };
            /** @description Inventory error */
            400: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            401: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            403: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            404: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            409: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            412: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            413: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            422: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            428: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            503: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
        };
    };
    inventoryReplaceSellerProfile: {
        parameters: {
            query?: never;
            header: {
                "Idempotency-Key": string;
                "If-Match": string;
                "X-CSRF-Token": string;
            };
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["InventoryHttpReplaceSellerProfile"];
            };
        };
        responses: {
            /** @description Inventory result */
            200: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryReceipt"];
                };
            };
            /** @description Inventory error */
            400: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            401: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            403: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            404: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            409: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            412: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            413: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            422: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            428: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            503: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
        };
    };
    inventoryCreateSellerProfile: {
        parameters: {
            query?: never;
            header: {
                "Idempotency-Key": string;
                "X-CSRF-Token": string;
            };
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["InventoryHttpCreateSellerProfile"];
            };
        };
        responses: {
            /** @description Inventory result */
            200: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryReceipt"];
                };
            };
            /** @description Inventory error */
            400: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            401: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            403: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            404: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            409: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            412: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            413: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            422: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            428: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            503: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
        };
    };
    inventoryQualifySellerProfile: {
        parameters: {
            query?: never;
            header: {
                "Idempotency-Key": string;
                "If-Match": string;
                "X-CSRF-Token": string;
            };
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["InventoryHttpQualifySellerProfile"];
            };
        };
        responses: {
            /** @description Inventory result */
            200: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryReceipt"];
                };
            };
            /** @description Inventory error */
            400: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            401: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            403: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            404: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            409: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            412: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            413: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            422: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            428: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            503: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
        };
    };
    inventoryGetTaxTreatments: {
        parameters: {
            query?: {
                limit?: number;
                cursor?: string;
                q?: string;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Inventory result */
            200: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryTaxTreatmentViewPage"];
                };
            };
            /** @description Inventory error */
            400: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            401: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            403: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            404: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            409: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            412: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            413: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            422: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            428: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            503: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
        };
    };
    inventoryCreateTaxTreatment: {
        parameters: {
            query?: never;
            header: {
                "Idempotency-Key": string;
                "X-CSRF-Token": string;
            };
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["InventoryHttpCreateTaxTreatment"];
            };
        };
        responses: {
            /** @description Inventory result */
            200: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryReceipt"];
                };
            };
            /** @description Inventory error */
            400: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            401: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            403: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            404: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            409: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            412: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            413: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            422: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            428: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            503: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
        };
    };
    inventoryReadTaxTreatment: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                treatmentId: components["schemas"]["InventoryUUID"];
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Inventory result */
            200: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryTaxTreatmentViewReadResult"];
                };
            };
            /** @description Inventory error */
            400: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            401: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            403: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            404: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            409: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            412: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            413: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            422: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            428: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            503: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
        };
    };
    inventoryReplaceTaxTreatment: {
        parameters: {
            query?: never;
            header: {
                "Idempotency-Key": string;
                "If-Match": string;
                "X-CSRF-Token": string;
            };
            path: {
                treatmentId: components["schemas"]["InventoryUUID"];
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["InventoryHttpReplaceTaxTreatment"];
            };
        };
        responses: {
            /** @description Inventory result */
            200: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryReceipt"];
                };
            };
            /** @description Inventory error */
            400: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            401: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            403: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            404: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            409: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            412: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            413: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            422: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            428: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            503: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
        };
    };
    inventoryQualifyTaxTreatment: {
        parameters: {
            query?: never;
            header: {
                "Idempotency-Key": string;
                "If-Match": string;
                "X-CSRF-Token": string;
            };
            path: {
                treatmentId: components["schemas"]["InventoryUUID"];
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["InventoryHttpQualifyTaxTreatment"];
            };
        };
        responses: {
            /** @description Inventory result */
            200: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryReceipt"];
                };
            };
            /** @description Inventory error */
            400: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            401: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            403: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            404: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            409: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            412: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            413: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            422: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            428: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            503: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
        };
    };
    inventoryGetDocumentSeries: {
        parameters: {
            query?: {
                limit?: number;
                cursor?: string;
                q?: string;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Inventory result */
            200: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryDocumentSeriesViewPage"];
                };
            };
            /** @description Inventory error */
            400: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            401: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            403: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            404: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            409: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            412: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            413: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            422: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            428: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            503: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
        };
    };
    inventoryCreateDocumentSeries: {
        parameters: {
            query?: never;
            header: {
                "Idempotency-Key": string;
                "X-CSRF-Token": string;
            };
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["InventoryHttpCreateDocumentSeries"];
            };
        };
        responses: {
            /** @description Inventory result */
            200: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryReceipt"];
                };
            };
            /** @description Inventory error */
            400: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            401: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            403: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            404: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            409: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            412: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            413: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            422: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            428: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            503: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
        };
    };
    inventoryDeactivateDocumentSeries: {
        parameters: {
            query?: never;
            header: {
                "Idempotency-Key": string;
                "If-Match": string;
                "X-CSRF-Token": string;
            };
            path: {
                seriesId: components["schemas"]["InventoryUUID"];
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["InventoryHttpDeactivateDocumentSeries"];
            };
        };
        responses: {
            /** @description Inventory result */
            200: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryReceipt"];
                };
            };
            /** @description Inventory error */
            400: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            401: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            403: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            404: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            409: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            412: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            413: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            422: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            428: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            503: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
        };
    };
    inventoryGetAccess: {
        parameters: {
            query?: {
                limit?: number;
                cursor?: string;
                q?: string;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Inventory result */
            200: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryAssignmentPage"];
                };
            };
            /** @description Inventory error */
            400: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            401: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            403: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            404: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            409: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            412: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            413: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            422: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            428: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            503: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
        };
    };
    inventorySetAssignment: {
        parameters: {
            query?: never;
            header: {
                "Idempotency-Key": string;
                "X-CSRF-Token": string;
            };
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["InventoryHttpSetAssignment"];
            };
        };
        responses: {
            /** @description Inventory result */
            200: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryReceipt"];
                };
            };
            /** @description Inventory error */
            400: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            401: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            403: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            404: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            409: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            412: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            413: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            422: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            428: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            503: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
        };
    };
    inventoryRevokeAssignment: {
        parameters: {
            query?: never;
            header: {
                "Idempotency-Key": string;
                "If-Match": string;
                "X-CSRF-Token": string;
            };
            path: {
                assignmentId: components["schemas"]["InventoryUUID"];
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["InventoryHttpRevokeAssignment"];
            };
        };
        responses: {
            /** @description Inventory result */
            200: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryReceipt"];
                };
            };
            /** @description Inventory error */
            400: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            401: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            403: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            404: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            409: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            412: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            413: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            422: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            428: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            503: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
        };
    };
    inventoryReceiveSalesReturn: {
        parameters: {
            query?: never;
            header: {
                "Idempotency-Key": string;
                "If-Match": string;
                "X-CSRF-Token": string;
            };
            path: {
                saleId: components["schemas"]["InventoryUUID"];
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["InventoryHttpReceiveSalesReturn"];
            };
        };
        responses: {
            /** @description Inventory result */
            200: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryReceipt"];
                };
            };
            /** @description Inventory error */
            400: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            401: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            403: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            404: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            409: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            412: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            413: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            422: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            428: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            503: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
        };
    };
    inventoryRestockReturnedUnit: {
        parameters: {
            query?: never;
            header: {
                "Idempotency-Key": string;
                "If-Match": string;
                "X-CSRF-Token": string;
            };
            path: {
                saleId: components["schemas"]["InventoryUUID"];
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["InventoryHttpRestockReturnedUnit"];
            };
        };
        responses: {
            /** @description Inventory result */
            200: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryReceipt"];
                };
            };
            /** @description Inventory error */
            400: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            401: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            403: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            404: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            409: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            412: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            413: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            422: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            428: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            503: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
        };
    };
    inventoryRecordOwnerSettlement: {
        parameters: {
            query?: never;
            header: {
                "Idempotency-Key": string;
                "If-Match": string;
                "X-CSRF-Token": string;
            };
            path: {
                depositOperationId: components["schemas"]["InventoryUUID"];
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["InventoryHttpRecordOwnerSettlement"];
            };
        };
        responses: {
            /** @description Inventory result */
            200: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryReceipt"];
                };
            };
            /** @description Inventory error */
            400: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            401: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            403: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            404: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            409: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            412: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            413: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            422: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            428: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            503: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
        };
    };
    inventoryListArtists: {
        parameters: {
            query?: {
                limit?: number;
                cursor?: string;
                q?: string;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Inventory result */
            200: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryArtistPage"];
                };
            };
            /** @description Inventory error */
            400: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            401: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            403: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            404: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            409: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            412: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            413: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            422: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            428: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            503: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
        };
    };
    inventoryCreateArtist: {
        parameters: {
            query?: never;
            header: {
                "Idempotency-Key": string;
                "X-CSRF-Token": string;
            };
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["InventoryCreateArtistInput"];
            };
        };
        responses: {
            /** @description Inventory result */
            200: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryReceipt"];
                };
            };
            /** @description Inventory error */
            400: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            401: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            403: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            404: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            409: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            412: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            413: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            422: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            428: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            503: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
        };
    };
    inventoryReadArtist: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: components["schemas"]["InventoryUUID"];
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Inventory result */
            200: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryArtistReadResult"];
                };
            };
            /** @description Inventory error */
            400: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            401: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            403: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            404: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            409: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            412: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            413: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            422: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            428: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            503: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
        };
    };
    inventoryUpdateArtist: {
        parameters: {
            query?: never;
            header: {
                "Idempotency-Key": string;
                "If-Match": string;
                "X-CSRF-Token": string;
            };
            path: {
                id: components["schemas"]["InventoryUUID"];
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["InventoryUpdateArtistInput"];
            };
        };
        responses: {
            /** @description Inventory result */
            200: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryReceipt"];
                };
            };
            /** @description Inventory error */
            400: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            401: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            403: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            404: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            409: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            412: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            413: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            422: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            428: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            503: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
        };
    };
    inventoryListOrigins: {
        parameters: {
            query?: {
                limit?: number;
                cursor?: string;
                q?: string;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Inventory result */
            200: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryOriginPage"];
                };
            };
            /** @description Inventory error */
            400: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            401: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            403: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            404: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            409: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            412: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            413: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            422: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            428: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            503: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
        };
    };
    inventoryCreateOrigin: {
        parameters: {
            query?: never;
            header: {
                "Idempotency-Key": string;
                "X-CSRF-Token": string;
            };
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["InventoryCreateOriginInput"];
            };
        };
        responses: {
            /** @description Inventory result */
            200: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryReceipt"];
                };
            };
            /** @description Inventory error */
            400: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            401: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            403: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            404: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            409: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            412: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            413: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            422: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            428: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            503: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
        };
    };
    inventoryReadOrigin: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: components["schemas"]["InventoryUUID"];
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Inventory result */
            200: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryOriginReadResult"];
                };
            };
            /** @description Inventory error */
            400: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            401: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            403: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            404: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            409: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            412: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            413: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            422: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            428: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            503: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
        };
    };
    inventoryUpdateOrigin: {
        parameters: {
            query?: never;
            header: {
                "Idempotency-Key": string;
                "If-Match": string;
                "X-CSRF-Token": string;
            };
            path: {
                id: components["schemas"]["InventoryUUID"];
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["InventoryUpdateOriginInput"];
            };
        };
        responses: {
            /** @description Inventory result */
            200: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryReceipt"];
                };
            };
            /** @description Inventory error */
            400: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            401: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            403: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            404: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            409: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            412: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            413: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            422: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            428: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            503: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
        };
    };
    inventoryListParties: {
        parameters: {
            query?: {
                limit?: number;
                cursor?: string;
                q?: string;
                ids?: string;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Inventory result */
            200: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryPartyPage"];
                };
            };
            /** @description Inventory error */
            400: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            401: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            403: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            404: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            409: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            412: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            413: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            422: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            428: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            503: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
        };
    };
    inventoryCreateParty: {
        parameters: {
            query?: never;
            header: {
                "Idempotency-Key": string;
                "X-CSRF-Token": string;
            };
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["InventoryCreatePartyInput"];
            };
        };
        responses: {
            /** @description Inventory result */
            200: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryReceipt"];
                };
            };
            /** @description Inventory error */
            400: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            401: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            403: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            404: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            409: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            412: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            413: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            422: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            428: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            503: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
        };
    };
    inventoryReadParty: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: components["schemas"]["InventoryUUID"];
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Inventory result */
            200: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryPartyReadResult"];
                };
            };
            /** @description Inventory error */
            400: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            401: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            403: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            404: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            409: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            412: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            413: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            422: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            428: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            503: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
        };
    };
    inventoryUpdateParty: {
        parameters: {
            query?: never;
            header: {
                "Idempotency-Key": string;
                "If-Match": string;
                "X-CSRF-Token": string;
            };
            path: {
                id: components["schemas"]["InventoryUUID"];
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["InventoryUpdatePartyInput"];
            };
        };
        responses: {
            /** @description Inventory result */
            200: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryReceipt"];
                };
            };
            /** @description Inventory error */
            400: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            401: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            403: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            404: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            409: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            412: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            413: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            422: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            428: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            503: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
        };
    };
    inventoryListLocations: {
        parameters: {
            query?: {
                limit?: number;
                cursor?: string;
                q?: string;
                ids?: string;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Inventory result */
            200: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryLocationPage"];
                };
            };
            /** @description Inventory error */
            400: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            401: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            403: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            404: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            409: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            412: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            413: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            422: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            428: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            503: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
        };
    };
    inventoryCreateLocation: {
        parameters: {
            query?: never;
            header: {
                "Idempotency-Key": string;
                "X-CSRF-Token": string;
            };
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["InventoryCreateLocationInput"];
            };
        };
        responses: {
            /** @description Inventory result */
            200: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryReceipt"];
                };
            };
            /** @description Inventory error */
            400: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            401: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            403: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            404: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            409: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            412: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            413: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            422: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            428: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            503: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
        };
    };
    inventoryReadLocation: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: components["schemas"]["InventoryUUID"];
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Inventory result */
            200: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryLocationReadResult"];
                };
            };
            /** @description Inventory error */
            400: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            401: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            403: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            404: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            409: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            412: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            413: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            422: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            428: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            503: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
        };
    };
    inventoryUpdateLocation: {
        parameters: {
            query?: never;
            header: {
                "Idempotency-Key": string;
                "If-Match": string;
                "X-CSRF-Token": string;
            };
            path: {
                id: components["schemas"]["InventoryUUID"];
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["InventoryUpdateLocationInput"];
            };
        };
        responses: {
            /** @description Inventory result */
            200: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryReceipt"];
                };
            };
            /** @description Inventory error */
            400: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            401: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            403: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            404: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            409: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            412: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            413: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            422: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            428: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            503: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
        };
    };
    inventoryListTypes: {
        parameters: {
            query?: {
                limit?: number;
                cursor?: string;
                q?: string;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Inventory result */
            200: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryTypePage"];
                };
            };
            /** @description Inventory error */
            400: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            401: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            403: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            404: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            409: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            412: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            413: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            422: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            428: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            503: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
        };
    };
    inventoryCreateType: {
        parameters: {
            query?: never;
            header: {
                "Idempotency-Key": string;
                "X-CSRF-Token": string;
            };
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["InventoryCreateTypeInput"];
            };
        };
        responses: {
            /** @description Inventory result */
            200: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryReceipt"];
                };
            };
            /** @description Inventory error */
            400: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            401: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            403: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            404: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            409: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            412: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            413: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            422: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            428: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            503: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
        };
    };
    inventoryReadType: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: number;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Inventory result */
            200: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryTypeReadResult"];
                };
            };
            /** @description Inventory error */
            400: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            401: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            403: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            404: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            409: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            412: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            413: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            422: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            428: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            503: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
        };
    };
    inventoryUpdateType: {
        parameters: {
            query?: never;
            header: {
                "Idempotency-Key": string;
                "If-Match": string;
                "X-CSRF-Token": string;
            };
            path: {
                id: number;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["InventoryUpdateTypeInput"];
            };
        };
        responses: {
            /** @description Inventory result */
            200: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryReceipt"];
                };
            };
            /** @description Inventory error */
            400: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            401: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            403: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            404: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            409: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            412: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            413: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            422: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            428: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            503: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
        };
    };
    inventoryListCategories: {
        parameters: {
            query?: {
                limit?: number;
                cursor?: string;
                q?: string;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Inventory result */
            200: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryCategoryPage"];
                };
            };
            /** @description Inventory error */
            400: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            401: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            403: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            404: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            409: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            412: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            413: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            422: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            428: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            503: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
        };
    };
    inventoryCreateCategory: {
        parameters: {
            query?: never;
            header: {
                "Idempotency-Key": string;
                "X-CSRF-Token": string;
            };
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["InventoryCreateCategoryInput"];
            };
        };
        responses: {
            /** @description Inventory result */
            200: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryReceipt"];
                };
            };
            /** @description Inventory error */
            400: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            401: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            403: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            404: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            409: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            412: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            413: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            422: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            428: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            503: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
        };
    };
    inventoryReadCategory: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: components["schemas"]["InventoryUUID"];
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Inventory result */
            200: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryCategoryReadResult"];
                };
            };
            /** @description Inventory error */
            400: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            401: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            403: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            404: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            409: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            412: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            413: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            422: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            428: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            503: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
        };
    };
    inventoryUpdateCategory: {
        parameters: {
            query?: never;
            header: {
                "Idempotency-Key": string;
                "If-Match": string;
                "X-CSRF-Token": string;
            };
            path: {
                id: components["schemas"]["InventoryUUID"];
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["InventoryUpdateCategoryInput"];
            };
        };
        responses: {
            /** @description Inventory result */
            200: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryReceipt"];
                };
            };
            /** @description Inventory error */
            400: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            401: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            403: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            404: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            409: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            412: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            413: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            422: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            428: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            503: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
        };
    };
    inventoryGetCapabilities: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Inventory result */
            200: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryCapabilities"];
                };
            };
            /** @description Inventory error */
            400: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            401: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            403: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            404: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            409: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            412: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            413: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            422: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            428: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            503: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
        };
    };
    inventoryGetUnitsUnitD: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                unitId: components["schemas"]["InventoryUUID"];
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Inventory result */
            200: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryUnitLogisticsReadResult"];
                };
            };
            /** @description Inventory error */
            400: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            401: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            403: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            404: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            409: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            412: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            413: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            422: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            428: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            503: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
        };
    };
    inventoryGetOperations: {
        parameters: {
            query?: {
                limit?: number;
                cursor?: string;
                q?: string;
                unitId?: string;
                partyId?: string;
                locationId?: string;
                fromDate?: string;
                toDate?: string;
                status?: "draft" | "active" | "completed" | "cancelled";
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Inventory result */
            200: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryLogisticsOperationPage"];
                };
            };
            /** @description Inventory error */
            400: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            401: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            403: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            404: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            409: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            412: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            413: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            422: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            428: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            503: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
        };
    };
    inventoryGetMedia: {
        parameters: {
            query?: {
                limit?: number;
                cursor?: string;
                q?: string;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Inventory result */
            200: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryMediaList"];
                };
            };
            /** @description Inventory error */
            400: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            401: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            403: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            404: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            409: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            412: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            413: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            422: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            428: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            503: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
        };
    };
    inventoryGetUnitsUnitDFinance: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                unitId: components["schemas"]["InventoryUUID"];
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Inventory result */
            200: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryUnitFinanceReadResult"];
                };
            };
            /** @description Inventory error */
            400: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            401: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            403: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            404: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            409: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            412: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            413: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            422: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            428: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            503: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
        };
    };
    inventoryGetSalesSaleD: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                saleId: components["schemas"]["InventoryUUID"];
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Inventory result */
            200: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventorySaleReadResult"];
                };
            };
            /** @description Inventory error */
            400: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            401: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            403: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            404: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            409: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            412: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            413: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            422: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            428: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            503: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
        };
    };
    inventoryGetFinanceLedger: {
        parameters: {
            query?: {
                limit?: number;
                cursor?: string;
                q?: string;
                documentId?: components["schemas"]["InventoryUUID"];
                depositOperationId?: components["schemas"]["InventoryUUID"];
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Inventory result */
            200: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryLedgerEntryPage"];
                };
            };
            /** @description Inventory error */
            400: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            401: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            403: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            404: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            409: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            412: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            413: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            422: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            428: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            503: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
        };
    };
    inventoryGetDocumentsDocumentD: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                documentId: components["schemas"]["InventoryUUID"];
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Inventory result */
            200: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryDocumentReadResult"];
                };
            };
            /** @description Inventory error */
            400: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            401: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            403: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            404: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            409: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            412: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            413: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            422: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            428: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            503: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
        };
    };
    inventoryGetDocumentsDocumentDTransmissions: {
        parameters: {
            query?: {
                limit?: number;
                cursor?: string;
                q?: string;
            };
            header?: never;
            path: {
                documentId: components["schemas"]["InventoryUUID"];
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Inventory result */
            200: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryTransmissionPage"];
                };
            };
            /** @description Inventory error */
            400: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            401: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            403: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            404: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            409: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            412: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            413: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            422: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            428: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            503: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
        };
    };
    inventoryGetImportsBatchD: {
        parameters: {
            query?: {
                after?: number;
                limit?: number;
            };
            header?: never;
            path: {
                batchId: components["schemas"]["InventoryUUID"];
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Inventory result */
            200: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryBatchReadResult"];
                };
            };
            /** @description Inventory error */
            400: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            401: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            403: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            404: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            409: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            412: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            413: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            422: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            428: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            503: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
        };
    };
    inventoryPreviewArtwork: {
        parameters: {
            query?: never;
            header: {
                "Idempotency-Key": string;
                "X-CSRF-Token": string;
            };
            path: {
                artworkId: components["schemas"]["InventoryUUID"];
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["InventoryReadInventoryInput"];
            };
        };
        responses: {
            /** @description Inventory result */
            200: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryPreviewResult"];
                };
            };
            /** @description Inventory error */
            400: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            401: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            403: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            404: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            409: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            412: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            413: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            422: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            428: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            503: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
        };
    };
    inventoryCreateMediaUpload: {
        parameters: {
            query?: never;
            header: {
                "Idempotency-Key": string;
                "X-CSRF-Token": string;
            };
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["InventoryInventoryUploadAttemptInput"];
            };
        };
        responses: {
            /** @description Inventory result */
            200: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryUploadResult"];
                };
            };
            /** @description Inventory error */
            400: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            401: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            403: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            404: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            409: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            412: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            413: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            422: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            428: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            503: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
        };
    };
    inventoryFinalizeMediaUpload: {
        parameters: {
            query?: never;
            header: {
                "Idempotency-Key": string;
                "If-Match": string;
                "X-CSRF-Token": string;
            };
            path: {
                attemptId: components["schemas"]["InventoryUUID"];
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["InventoryFinalizeInput"];
            };
        };
        responses: {
            /** @description Inventory result */
            202: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryReceipt"];
                };
            };
            /** @description Inventory error */
            400: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            401: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            403: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            404: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            409: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            412: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            413: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            422: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            428: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            503: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
        };
    };
    inventoryCreateAttachmentsUpload: {
        parameters: {
            query?: never;
            header: {
                "Idempotency-Key": string;
                "X-CSRF-Token": string;
            };
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["InventoryInventoryAttachmentUploadInput"];
            };
        };
        responses: {
            /** @description Inventory result */
            200: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryUploadResult"];
                };
            };
            /** @description Inventory error */
            400: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            401: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            403: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            404: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            409: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            412: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            413: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            422: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            428: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            503: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
        };
    };
    inventoryFinalizeAttachmentsUpload: {
        parameters: {
            query?: never;
            header: {
                "Idempotency-Key": string;
                "If-Match": string;
                "X-CSRF-Token": string;
            };
            path: {
                attemptId: components["schemas"]["InventoryUUID"];
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["InventoryFinalizeInput"];
            };
        };
        responses: {
            /** @description Inventory result */
            202: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryReceipt"];
                };
            };
            /** @description Inventory error */
            400: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            401: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            403: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            404: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            409: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            412: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            413: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            422: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            428: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            503: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
        };
    };
    inventoryGetMediaMediaDOriginal: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                mediaId: components["schemas"]["InventoryUUID"];
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Inventory result */
            200: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/octet-stream": string;
                };
            };
            /** @description Inventory error */
            400: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            401: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            403: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            404: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            409: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            412: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            413: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            422: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            428: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            503: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
        };
    };
    inventoryHeadMediaMediaDOriginal: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                mediaId: components["schemas"]["InventoryUUID"];
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Inventory result */
            200: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/octet-stream": string;
                };
            };
            /** @description Inventory error */
            400: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            401: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            403: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            404: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            409: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            412: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            413: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            422: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            428: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            503: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
        };
    };
    inventoryGetMediaMediaDPreview: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                mediaId: components["schemas"]["InventoryUUID"];
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Inventory result */
            200: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/octet-stream": string;
                };
            };
            /** @description Inventory error */
            400: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            401: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            403: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            404: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            409: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            412: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            413: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            422: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            428: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            503: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
        };
    };
    inventoryHeadMediaMediaDPreview: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                mediaId: components["schemas"]["InventoryUUID"];
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Inventory result */
            200: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/octet-stream": string;
                };
            };
            /** @description Inventory error */
            400: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            401: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            403: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            404: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            409: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            412: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            413: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            422: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            428: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            503: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
        };
    };
    inventoryGetDocumentsDocumentDPdf: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                documentId: components["schemas"]["InventoryUUID"];
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Inventory result */
            200: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/octet-stream": string;
                };
            };
            /** @description Inventory error */
            400: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            401: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            403: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            404: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            409: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            412: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            413: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            422: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            428: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            503: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
        };
    };
    inventoryHeadDocumentsDocumentDPdf: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                documentId: components["schemas"]["InventoryUUID"];
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Inventory result */
            200: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/octet-stream": string;
                };
            };
            /** @description Inventory error */
            400: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            401: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            403: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            404: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            409: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            412: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            413: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            422: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            428: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            503: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
        };
    };
    inventoryPrepareImport: {
        parameters: {
            query?: never;
            header: {
                "Idempotency-Key": string;
                "X-CSRF-Token": string;
            };
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["InventoryPrepareInventoryImportInput"];
            };
        };
        responses: {
            /** @description Inventory result */
            202: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryBatchReadResult"];
                };
            };
            /** @description Inventory error */
            400: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            401: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            403: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            404: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            409: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            412: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            413: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            422: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            428: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            503: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
        };
    };
    inventoryValidateImport: {
        parameters: {
            query?: never;
            header: {
                "Idempotency-Key": string;
                "If-Match": string;
                "X-CSRF-Token": string;
            };
            path: {
                batchId: components["schemas"]["InventoryUUID"];
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["InventoryValidateBatchInput"];
            };
        };
        responses: {
            /** @description Inventory result */
            202: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryReceipt"];
                };
            };
            /** @description Inventory error */
            400: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            401: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            403: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            404: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            409: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            412: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            413: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            422: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            428: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            503: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
        };
    };
    inventoryPrepareMigration: {
        parameters: {
            query?: never;
            header: {
                "Idempotency-Key": string;
                "X-CSRF-Token": string;
            };
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["InventoryPrepareMigrationInput"];
            };
        };
        responses: {
            /** @description Inventory result */
            202: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryReadResult"];
                };
            };
            /** @description Inventory error */
            400: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            401: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            403: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            404: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            409: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            412: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            413: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            422: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            428: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            503: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
        };
    };
    inventoryValidateMigration: {
        parameters: {
            query?: never;
            header: {
                "Idempotency-Key": string;
                "If-Match": string;
                "X-CSRF-Token": string;
            };
            path: {
                batchId: components["schemas"]["InventoryUUID"];
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["InventoryValidateBatchInput"];
            };
        };
        responses: {
            /** @description Inventory result */
            202: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryReceipt"];
                };
            };
            /** @description Inventory error */
            400: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            401: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            403: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            404: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            409: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            412: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            413: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            422: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            428: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            503: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
        };
    };
    inventoryReplaceAssignment: {
        parameters: {
            query?: never;
            header: {
                "Idempotency-Key": string;
                "If-Match": string;
                "X-CSRF-Token": string;
            };
            path: {
                assignmentId: components["schemas"]["InventoryUUID"];
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["InventoryHttpReplaceAssignment"];
            };
        };
        responses: {
            /** @description Inventory result */
            200: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryReceipt"];
                };
            };
            /** @description Inventory error */
            400: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            401: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            403: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            404: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            409: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            412: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            413: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            422: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            428: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            503: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
        };
    };
    inventoryGetPrivateNotes: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                artworkId: components["schemas"]["InventoryUUID"];
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Inventory result */
            200: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryPrivateNotesReadResult"];
                };
            };
            /** @description Inventory error */
            400: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            401: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            403: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            404: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            409: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            412: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            413: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            422: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            428: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            503: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
        };
    };
    inventoryReadPreview: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                previewId: components["schemas"]["InventoryUUID"];
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Inventory result */
            200: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryPreviewReadResult"];
                };
            };
            /** @description Inventory error */
            400: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            401: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            403: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            404: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            409: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            412: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            413: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            422: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            428: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            503: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
        };
    };
    inventoryReadLogisticsOperation: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                operationId: components["schemas"]["InventoryUUID"];
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Inventory result */
            200: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryLogisticsOperationReadResult"];
                };
            };
            /** @description Inventory error */
            400: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            401: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            403: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            404: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            409: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            412: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            413: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            422: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            428: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            503: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
        };
    };
    inventoryListUnits: {
        parameters: {
            query?: {
                limit?: number;
                cursor?: string;
                q?: string;
                artworkId?: components["schemas"]["InventoryUUID"];
                ownerId?: components["schemas"]["InventoryUUID"];
                locationId?: components["schemas"]["InventoryUUID"];
                commercialState?: "unqualified" | "available" | "reserved" | "sold";
                custodyState?: "unknown" | "held" | "loaned_out" | "deposited_out" | "returned_to_owner";
                includeArchived?: boolean;
                ids?: string;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Inventory result */
            200: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryUnitLogisticsPage"];
                };
            };
            /** @description Inventory error */
            400: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            401: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            403: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            404: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            409: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            412: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            413: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            422: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            428: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            503: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
        };
    };
    inventoryReadDeposit: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                operationId: components["schemas"]["InventoryUUID"];
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Inventory result */
            200: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryDepositReadResult"];
                };
            };
            /** @description Inventory error */
            400: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            401: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            403: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            404: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            409: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            412: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            413: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            422: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            428: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            503: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
        };
    };
    inventoryReadDocumentSeries: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                seriesId: components["schemas"]["InventoryUUID"];
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Inventory result */
            200: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryDocumentSeriesViewReadResult"];
                };
            };
            /** @description Inventory error */
            400: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            401: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            403: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            404: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            409: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            412: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            413: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            422: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            428: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            503: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
        };
    };
    inventoryCreateImportDraft: {
        parameters: {
            query?: never;
            header: {
                "Idempotency-Key": string;
                "X-CSRF-Token": string;
            };
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["InventoryImportDraftInput"];
            };
        };
        responses: {
            /** @description Inventory result */
            202: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryBatchReadResult"];
                };
            };
            /** @description Inventory error */
            400: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            401: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            403: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            404: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            409: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            412: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            413: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            422: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            428: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            503: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
        };
    };
    inventoryCreateImportTransfer: {
        parameters: {
            query?: never;
            header: {
                "Idempotency-Key": string;
                "X-CSRF-Token": string;
            };
            path: {
                batchId: components["schemas"]["InventoryUUID"];
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["InventoryImportTransferInput"];
            };
        };
        responses: {
            /** @description Inventory result */
            202: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryImportTransfer"];
                };
            };
            /** @description Inventory error */
            400: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            401: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            403: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            404: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            409: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            412: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            413: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            422: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            428: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            503: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
        };
    };
    inventoryCancelImport: {
        parameters: {
            query?: never;
            header: {
                "Idempotency-Key": string;
                "If-Match": string;
                "X-CSRF-Token": string;
            };
            path: {
                batchId: components["schemas"]["InventoryUUID"];
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["InventoryHttpCancelImport"];
            };
        };
        responses: {
            /** @description Inventory result */
            202: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryReceipt"];
                };
            };
            /** @description Inventory error */
            400: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            401: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            403: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            404: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            409: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            412: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            413: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            422: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            428: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            503: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
        };
    };
    inventoryResumeImport: {
        parameters: {
            query?: never;
            header: {
                "Idempotency-Key": string;
                "If-Match": string;
                "X-CSRF-Token": string;
            };
            path: {
                batchId: components["schemas"]["InventoryUUID"];
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["InventoryHttpResumeImport"];
            };
        };
        responses: {
            /** @description Inventory result */
            202: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryReceipt"];
                };
            };
            /** @description Inventory error */
            400: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            401: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            403: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            404: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            409: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            412: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            413: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            422: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            428: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            503: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
        };
    };
    inventoryUploadImportChunk: {
        parameters: {
            query?: never;
            header: {
                /** @description Opaque, expiring upload ticket; never a site service key. */
                Authorization: string;
            };
            path: {
                batchId: components["schemas"]["InventoryUUID"];
                uploadId: components["schemas"]["InventoryUUID"];
                index: number;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/octet-stream": string;
            };
        };
        responses: {
            /** @description Inventory result */
            202: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryImportTransfer"];
                };
            };
            /** @description Inventory error */
            400: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            401: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            403: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            404: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            409: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            412: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            413: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            422: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            428: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            503: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
        };
    };
    inventorySealImportTransfer: {
        parameters: {
            query?: never;
            header: {
                /** @description Opaque, expiring upload ticket; never a site service key. */
                Authorization: string;
            };
            path: {
                batchId: components["schemas"]["InventoryUUID"];
                uploadId: components["schemas"]["InventoryUUID"];
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": Record<string, never>;
            };
        };
        responses: {
            /** @description Inventory result */
            202: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryImportTransfer"];
                };
            };
            /** @description Inventory error */
            400: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            401: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            403: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            404: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            409: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            412: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            413: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            422: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            428: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            503: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
        };
    };
    inventoryGetImportTemplate: {
        parameters: {
            query?: {
                example?: boolean;
                delimiter?: "comma" | "semicolon";
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Inventory result */
            200: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "text/csv": string;
                };
            };
            /** @description Inventory error */
            400: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            401: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            403: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            404: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            409: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            412: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            413: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            422: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            428: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
            /** @description Inventory error */
            503: {
                headers: {
                    "Cache-Control"?: "private, no-store";
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["InventoryError"];
                };
            };
        };
    };
}
