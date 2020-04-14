/// <reference types="cypress" />

export function navigate() {
    cy.visit('http://localhost:4200/')
  }
  
  export function checkFirstBox() {
    cy.get('#mat-checkbox-1').click();
  }

  export function validateCheckedBox() {
    cy.get('#mat-checkbox-1-input').should('be.checked')
  }
  
  export function showCalendar() {
    cy.get('a > .mat-icon').click()
  }

  export function validateCalendarDialogBox() {
    cy.get('mat-dialog-container').should('be.visible')
  }

  