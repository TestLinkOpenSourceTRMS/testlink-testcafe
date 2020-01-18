import { Selector } from 'testcafe';

fixture('create-custom-field').page(process.env.TL_URL);

const fake = require('faker');
let name = fake.commerce.productName();
let label = fake.finance.currencyCode();

test('create-custom-field', async t => {
    await t
        .typeText(Selector('#tl_login'), 'admin')
        .typeText(Selector('#tl_password'), 'admin')
        .pressKey('enter')
        .switchToIframe(Selector('[name="mainframe"].siteContent'))
        .click(Selector('a').withText('Define Custom Fields'))
        .click(Selector('a').withText('Create'))
        .typeText(Selector('[name="cfields_edit"]').find('[name="cf_name"]'), name)
        .typeText(Selector('[name="cfields_edit"]').find('[name="cf_label"]'), label)
        .click(Selector('[name="cfields_edit"]').find('[name="do_update"]'))
        .expect(Selector('a').withText(name).visible).ok();
});