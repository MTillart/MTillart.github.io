/// <reference types="cypress" />

import * as dashPage from '../page-objects/dashboard-page';


describe('Visaual validation', () => {
    before(() => dashPage.navigate())

    beforeEach(() => cy.eyesOpen({ 
        appName: 'LoputooTest',
        batchName: 'Esimene proov',
        browser: [
            {name: 'chrome', width: 1024, height: 768},
            {name: 'chrome', width: 800, height: 600},
            {name: 'firefox', width: 1024, height: 768}
            //{deviceName: 'iPhone X'},
        ]
    
    }))

    afterEach(() => cy.eyesClose())

    it('should check a box and open a calendar', () => {

        cy.eyesCheckWindow('check a box')

        dashPage.checkFirstBox()

        dashPage.validateCheckedBox()
        
        cy.eyesCheckWindow('open Calendar')

        dashPage.showCalendar()

        dashPage.validateCalendarDialogBox()

        cy.eyesCheckWindow('Mark as completed')

    })

})