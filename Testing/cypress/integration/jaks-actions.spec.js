/// <reference types="cypress" />

import * as dashPage from '../page-objects/dashboard-page';


describe('Add and delete client', () => {
    const email = 'test@klient.com'
    const password = 'qwerty'
    const listCount = 0;



    before(() => dashPage.navigate())

    it('login', () => {

        dashPage.insertEmail(email);        
        dashPage.insertPassword(password);
        dashPage.clickLogin();

        dashPage.goToWebPage();

        dashPage.goToPage("isikud");


    })
    it("adds a person to database", () => {
      dashPage.goToPage("isikud");
      dashPage.openAddPerson();
      dashPage.fillForm("name", "OÜ Tuulestviidud");
      dashPage.fillForm("idCode", 85246555);
      dashPage.fillForm("email", "viidud@tuul.com");
      dashPage.fillForm("phone", 58455855);
      dashPage.fillForm("company", "Scarlett O'Hara");
      dashPage.fillForm("address", "Tara 65 Atlanta");
      dashPage.confirm();
  })
  it("checks if person was added to list, open details and delete", () => {
    dashPage.findFromList("OÜ Tuulestviidud");
    dashPage.deleteClient();


  })

})