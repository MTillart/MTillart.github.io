/// <reference types="cypress" />

export function navigate() {
    cy.visit('http://178.33.37.64')
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
    expect.followRedirect
    

  }



  