import { Selector } from 'testcafe';

fixture('create-testplan-inactive-private').page(process.env.TL_URL);

const fake = require('faker');
let name = fake.commerce.productName();
let active = '0';
let is_public = '0';

test('create-testplan', async t => {
    await t
        .typeText(Selector('#tl_login'), 'admin')
        .typeText(Selector('#tl_password'), 'admin')
        .pressKey('enter')
        .switchToIframe(Selector('[name="mainframe"].siteContent'))
        .click(Selector('a').withText('Test Plan Management'))
        .click(Selector('[name="bottomCreateForm"]').find('[name="create_testplan"]'));

    /* fill the form */        
    await t
      .typeText(Selector('#testplan_mgmt').find('[name="testplan_name"]'), name);
    
    if (active == '1') {
      await t
        .click(Selector('#testplan_mgmt').find('[name="active"]'));
    }
    if (is_public == '1') {
      await t
        .click(Selector('#testplan_mgmt').find('[name="is_public"]'))
    }

    await t
        .click(Selector('#testplan_mgmt').find('[name="do_create"]'));

    /* checks */        
    let row = Selector('tr').withAttribute('data-qa-tplan-name',name);
    await t
        .expect(row.visible).ok()
        .expect(row.find('td').withAttribute('data-qa-active',active).visible).ok()        
        .expect(row.find('td').withAttribute('data-qa-is_public',is_public).visible).ok();        
});