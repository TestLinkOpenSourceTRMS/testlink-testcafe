import { Selector } from 'testcafe';

fixture('create-testproject').page(process.env.TL_URL);

const fake = require('faker');
let tprojName = fake.commerce.productName();
let tprojPrefix = fake.finance.currencyCode();

test('create-testproject', async t => {
    await t
        .typeText(Selector('#tl_login'), 'admin')
        .typeText(Selector('#tl_password'), 'admin')
        .pressKey('enter')
        .switchToIframe(Selector('[name="mainframe"].siteContent'))
        .click(Selector('a').withText('Test Project Management'))
        .click(Selector('#create'))
        .typeText(Selector('#edit_testproject').find('[name="tprojectName"]'), tprojName)
        .typeText(Selector('#edit_testproject').find('[name="tcasePrefix"]'), tprojPrefix)
        .click(Selector('#edit_testproject').find('[name="doActionButton"]'))
        .expect(Selector('td').withText(tprojName).visible).ok();
});