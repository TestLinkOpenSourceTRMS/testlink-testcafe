import { t, Selector } from 'testcafe';

fixture `TestLink-Platforms`
    .page `http://localhost/testlink/login.php`;

test('CreateModPlatforms', async t => {
    await t
        .typeText('#tl_login', 'admin')
        .typeText('#tl_password', 'admin')
        .pressKey('enter')
        .switchToIframe('.siteContent')
        .click(Selector('a').withText('Platform Management'))
    
    await deleteAllPlatforms();
    
    await t        
        .click('[data-id-qa="btn_create"]')
        .typeText('#name', 'BOTH-OFF')
        .click('#submitButton')
        .click('[data-id-qa="btn_create"]')
        .typeText('#name', 'ON-DESIGN-ON')
        .click('#enable_on_design')
        .click('#submitButton')
        .click('[data-id-qa="btn_create"]')
        .typeText('#name', 'ON_EX')
        .pressKey('backspace')
        .pressKey('backspace')
        .pressKey('backspace')
        .typeText('#name', '-EXEC-P')
        .pressKey('backspace')
        .typeText('#name', 'ON')
        .click('#enable_on_execution')
        .click('#submitButton')
        .click('[data-id-qa="btn_create"]')
        .typeText('#name', 'BOTH-ON')
        .click('#enable_on_design')
        .click('#enable_on_execution')
        .click('#submitButton');
});


/**
 * 
 * 
 */
async function deleteAllPlatforms() {
  var delButtonSet = Selector('#platformsView [title="Delete platform?"]');
  if ( await delButtonSet.exists ) {
    var loop2do = await delButtonSet.count;
    console.log(loop2do);
    for (var idx=0; idx < loop2do; idx++) {
      await t.click(delButtonSet);
      await t.click('#ext-gen20');
    }
  }
}