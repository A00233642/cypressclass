///<reference types="cypress"  />
///<reference types="cypress-iframe"  />
import 'cypress-iframe'

import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';
//import cypress from 'cypress';


beforeEach(function() {
  cy.fixture('example').then((data) => {
    this.data = data;
  });
});

Given("I navigate to demoblaze ecommorce website", function () {
  cy.visit(Cypress.env("baseURL"), {timeout: 10000}) // Visit using env created in config.js
  cy.wait(2000)  
  //cy.visit("https://www.demoblaze.com/") // To visit using URL
  //cy.visit(cypress.env("baseURL"))("https://www.demoblaze.com/")  
    // cy.get('Sign Up').click();
    // cy.contains('Sign up', { timeout: 10000 }).click();
    // cy.contains('Sign up').click({ force: true });
    // cy.get('#login2').click({ force: true });
      cy.get('#login2').click();
     cy.wait(1000);  // Replace with your actual login page URL
});

When ('I type username and password', function(){ // Verify user can login with valid credentials
  cy.get('input[id="loginusername"]').type(this.data.Username); // to use variable that was crerated in example.json
  cy.wait(2000); 
  cy.get('input[id="loginpassword"]').type(this.data.Password); // to use variable that was crerated in example.json
  cy.wait(2000); 
  cy.get('input[id="loginpassword"]').should('be.visible'); //to make password visible
  cy.wait(2000); 
  cy.get("button[onclick='logIn()']").should('be.visible').click(); // Adjust selector if necessary click on login btn
  cy.wait(2000)
 // cy.url().should('include', "https://www.demoblaze.com/index.html"); 


});

/*When ('I type username and password', function(){ // Verify user can login with invalid credentials
  cy.get('input[id="loginusername"]').type(this.data.Username); // to use variable that was crerated in exxample.json
  cy.wait(2000); 
  cy.get('input[id="loginpassword"]').type(this.data.Password); // to use variable that was crerated in exxample.json
  cy.wait(2000); 
  cy.get('input[id="loginpassword"]').should('be.visible'); //to make password visible
  cy.wait(2000); 

}); */

  /*When ('I login with empty field', function(){ // Verify user cannot login with empty text field
  cy.get('input[id="loginusername"]').type(this.data.Username); // to use variable that was crerated in exxample.json
  cy.wait(2000); 
  cy.get('input[id="loginpassword"]').type(this.data.Password); // to use variable that was crerated in exxample.json
  cy.wait(2000); 
  cy.get('input[id="loginpassword"]').should('be.visible');

    
  }); */


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





/*

     
     When ('I type username and password', function(){ // Verify user can login with valid credentials
      cy.get('input[id="loginusername"]').type(this.data.Username); // to use variable that was crerated in exxample.json
      cy.wait(2000); 
      cy.get('input[id="loginpassword"]').type(this.data.Password); // to use variable that was crerated in exxample.json
      cy.wait(2000); 
      cy.get('input[id="loginpassword"]').should('be.visible'); //to make password visible
      cy.wait(2000); 
    
    });
    


     
     cy.get('.row').should('have.length',3)  
    cy.get('.row:visible').should('have.length',3)  

    cy.get('.row').find('.row').eq(0).contains('Nokia lumia 1520').click() //click on a text to navigate to its page
    cy.wait(2000) 

   /
  // cy.contains('Add to cart').should('be.visible').click(); // Replace 'Button Text' with the actual text on the button // to click Add to cart 
   cy.get('[onclick="addToCart(2)"]').should('be.visible').click(); // to click Add to cart 
   cy.wait(1000)

   cy.get('#cartur').should('be.visible').click() //navigate to cart page
   cy.wait(2000)

   cy.contains('Delete').should('be.visible').click()
   cy.wait(2000)

   //cy.contains("button[onclick=\"deleteItem('85820ad3-4ebc-8a3c-24c4-0a518de9c966')')\"]").should('be.visible').click();
 
   // cy.get("button[onclick=\"deleteItem('7ba07a22-0ac4-0478-753c-6501171c5e19')\"]").click()
   // cy.get(2000)

   // cy.get("button[onclick=\"deleteItem('7ba07a22-0ac4-0478-753c-6501171c5e19')\"]").click();




   // cy.contains('Nokia lumia 1520')


    // cy.get('#loginusername', { timeout: 10000}).should('be.visible');
    // cy.get('[disabled]').click({force: true})
    //cy.get('#signInModal').click(); // Adjust selector to match your button
    
    // cy.get('input[id="sign-username"]').type('myUsername');
     //.click({force: true})

    //cy.get('#signin2').click();
    // cy.wait(8000);
  

     //cy.contains('Laptops').click({ force: true });
    // cy.reload();
 //id="sign-username"
 // Waits up to 10 seconds

   // cy.get('input[name="email"]').type('user@example.com'); */


