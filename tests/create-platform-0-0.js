import { Selector } from 'testcafe';

fixture('create-platform-0-0').page(process.env.TL_URL);

const fake = require('faker');
let name = fake.commerce.productName();
let enable_on_design = 0;
let enable_on_execution = 0;

test('create-platform-0-0', async t => {
    await t
        .typeText(Selector('#tl_login'), 'admin')
        .typeText(Selector('#tl_password'), 'admin')
        .pressKey('enter')
        .switchToIframe(Selector('[name="mainframe"].siteContent'))
        .click(Selector('a').withText('Platform Management'))
        .click(Selector('a').withText('Create'))
        .typeText(Selector('#name'), name);

    if (enable_on_design) {
        await t
            .click(Selector('#enable_on_design'));
    }
    if (enable_on_execution) {
        await t
            .click(Selector('#enable_on_execution'));
    }
    
    await t.click(Selector('#submitButton'));
});