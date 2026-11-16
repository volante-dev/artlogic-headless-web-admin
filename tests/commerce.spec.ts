import {test} from '@playwright/test';
import {verifyProducts} from './commerce/products.cases';
import {verifyOrders} from './commerce/orders.cases';
import {verifyLegalDocuments,verifyWithdrawalAdministration} from './commerce/rights.cases';
test('Admin creates, publishes, adjusts and archives a synthetic product',async({page})=>{test.setTimeout(120000);await verifyProducts(page);});
test('Admin processes and ships a paid synthetic order in less than one minute',async({page})=>{test.setTimeout(120000);await verifyOrders(page);});
test('Admin refuses an unfilled legal template and publishes an immutable synthetic version',async({page})=>{test.setTimeout(90000);await verifyLegalDocuments(page);});
test('Admin reviews a withdrawal without triggering stock or payment actions',async({page})=>{test.setTimeout(90000);await verifyWithdrawalAdministration(page);});
