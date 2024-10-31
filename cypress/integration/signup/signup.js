///<reference types="cypress"  />
///<reference types="cypress-iframe"  />
import 'cypress-iframe'

import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';
//import cypress from 'cypress';


Given("I navigate to demoblaze ecommorce website", function () {
    cy.visit(Cypress.env("baseURL"), {timeout: 10000}) // Visit using env created in config.js
    cy.wait(2000)  
    //cy.visit("https://www.demoblaze.com/") // To visit using URL
    //cy.visit(cypress.env("baseURL"))("https://www.demoblaze.com/")  
      // cy.get('Sign Up').click();
      // cy.contains('Sign up', { timeout: 10000 }).click();
      // cy.contains('Sign up').click({ force: true });
      // cy.get('#login2').click({ force: true });
      
  });

  When("I click signup button", function()
{
    cy.get('#signin2').click();
    cy.wait(1000);  // Replace with your actual login page URL 
});


When("I signup with {string} and {string}", (username, password) => {
cy.get('#sign-username').type(username) // using variable created in feature file
cy.wait(2000)
cy.get('#sign-password').type(password) // using variable created in feature file
cy.wait(2000)
cy.get('[onclick="register()"]').should('be.visible').click();
cy.wait(2000)


});







