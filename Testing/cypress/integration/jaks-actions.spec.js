/// <reference types="cypress" />

import * as dashPage from '../page-objects/dashboard-page';


describe('Visaual validation', () => {
    const email = 'test@klient.com'
  const password = 'qwerty'



    before(() => dashPage.navigate())

    // beforeEach(() => cy.eyesOpen({ 
    //     appName: 'LoputooTest',
    //     batchName: 'Esimene proov',
    //     browser: [
    //         {name: 'chrome', width: 1024, height: 768},
    //         {name: 'chrome', width: 800, height: 600},
    //         {name: 'firefox', width: 1024, height: 768}
    //         //{deviceName: 'iPhone X'},
    //     ]
    
    // }))

    // afterEach(() => cy.eyesClose())

    it('login', () => {

        //cy.eyesCheckWindow('check a box')

        dashPage.insertEmail(email);

        
        dashPage.insertPassword(password);
        dashPage.clickLogin();
        dashPage.goToWebPage();


    })

})