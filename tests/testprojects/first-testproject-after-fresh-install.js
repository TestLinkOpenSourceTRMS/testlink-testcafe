import { Selector } from 'testcafe';

fixture ('first-testproject-after-fresh-install')
  .page(process.env.TL_URL);

test('first-testproject-after-fresh-install', async t => {
    await t
        .typeText(Selector('#tl_login'), 'admin')
        .typeText(Selector('#tl_password'), 'admin')
        .pressKey('enter')
        .switchToIframe(Selector('[name="mainframe"].siteContent'))
        .typeText(Selector('#edit_testproject').find('[name="tprojectName"]'), 'FIRST TEST PROJECT')
        .typeText(Selector('#edit_testproject').find('[name="tcasePrefix"]'), 'FTP')
        .click(Selector('#edit_testproject').find('[name="doActionButton"]'))
        .expect(Selector('td').withText('FIRST TEST PROJECT').visible).ok();
});