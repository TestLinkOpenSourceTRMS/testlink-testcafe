import { Selector } from 'testcafe';

fixture('installation').page(process.env.TL_URL);

test('fresh-install', async t => {
    await t
        .click(Selector('a').withText('New installation'))
        .click(Selector('#licenseOK'))
        .click(Selector('#submit'))
        .click(Selector('#submit'))
        .typeText(Selector('#databasename'), process.env.TL_DBNAME, { replace: true })
        .typeText(Selector('#databaseloginname'), process.env.TL_DBADMIN, { replace: true })
        .typeText(Selector('#databaseloginpassword'), process.env.TL_DBADMIN_PWD, { replace: true })
        .typeText(Selector('#tl_loginname'), process.env.TL_DBADMIN, { replace: true })
        .typeText(Selector('#tl_loginpassword'), process.env.TL_DBADMIN_PWD, { replace: true })
        .click(Selector('[name="myForm"]').find('p').nth(25).find('input'))
        .click(Selector('a').withText('Testlink (using login name:admin / password:admin'))
        .expect(Selector('#tl_login').id).eql('tl_login')
        .expect(Selector('#tl_password').id).eql('tl_password');
});