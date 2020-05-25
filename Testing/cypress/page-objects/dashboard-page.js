/// <reference types="cypress" />

export function navigate() {
    cy.visit('https://jaks.ee')
  }
  
  export function insertEmail(text) {
    cy.get(':nth-child(1) > .form-control').type(text)
  }
  export function insertPassword(text){
    cy.get(':nth-child(2) > .form-control').type(text)
  }
  export function clickLogin(text){
    cy.get('.btn').click();
  }
  export function postFails(){

  }

  export function goToWebPage(){
    cy.request({
      url: '/dashboard',
      followRedirect: false, // turn off following redirects automatically
    }).then((resp) => {
      // should have status code 200
      expect(resp.status).to.eq(200)

    })
  }
  export function goToPage(page){
    cy.get('.'+page).click();
    expect.followRedirect;
    
    }

    export function openAddPerson(){
      cy.get('.client_container > .mat-icon').click();
    }
    // export function fillForm(){
    //   cy.get('input:first').should('have.attr', 'placeholder', 'Nimi').type("Hello World")
    //   //cy.get('input#mat-slide-toggle-1-input.mat-slide-toggle-input.cdk-visually-hidden').type("Hello World",)
    // }
    export function fillForm(formControlName, inputValue) {
      cy.get(`[formcontrolname="${formControlName}"]`).type(inputValue)
    }
    export function confirm(){
      
      cy.contains('Kinnita').click();
    }
    export function findFromList(insertedName){
      cy.contains(insertedName).click();

    }
    export function deleteClient(){
      cy.contains('Kustuta klient').click();
    }

  



  