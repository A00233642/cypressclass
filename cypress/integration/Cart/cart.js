///<reference types="cypress"  />
///<reference types="cypress-iframe"  />
import 'cypress-iframe'

import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';
//import cypress from 'cypress';

beforeEach(function() {

  });


  Given ("I navigate to demoblaze ecommorce website", function () {
    cy.visit(Cypress.env("baseURL"), {timeout: 10000}) // Visit using env created in config.js
    cy.wait(2000)  
    //cy.visit("https://www.demoblaze.com/") // To visit using URL
    //cy.visit(cypress.env("baseURL"))("https://www.demoblaze.com/")  
      // cy.get('Sign Up').click();
      // cy.contains('Sign up', { timeout: 10000 }).click();
      // cy.contains('Sign up').click({ force: true });
      // cy.get('#login2').click({ force: true });
     //   cy.get('#login2').click();
     //  cy.wait(1000);  // Replace with your actual login page URL
  });
  

  When ('I navigate to a product page', function(){
    cy.get('.row').should('have.length',3)  
    cy.get('.row:visible').should('have.length',3)  
  
    cy.get('.row').find('.row').eq(0).contains('Nokia lumia 1520').click() //click on a text to navigate to its page
    cy.wait(2000) 
    cy.get('[onclick="addToCart(2)"]').should('be.visible').click(); // to click Add to cart 
    cy.wait(1000)
  
   });
  
   When ('I navigate to cart page', function (){
    cy.get('#cartur').should('be.visible').click() //navigate to cart page
    cy.wait(2000)
  
    cy.contains('Delete').should('be.visible').click()
    cy.wait(2000)
  
  });