// cypress/integration/uiTest.spec.js

describe('UI Test', () => {
    it('should go to https://www.saucedemo.com/, log in, and verify item sorting', () => {
      // Visit the website
      cy.visit('https://www.saucedemo.com/');
  
      // Log in
      cy.get('#user-name').type('standard_user');
      cy.get('#password').type('secret_sauce');
      cy.get('#login-button').click();
  
      // Wait for the sorting dropdown to be available
      cy.get('.product_sort_container', { timeout: 10000 }).should('exist');
  
      // Verify that items are sorted by Name (A -> Z)
      cy.get('.inventory_item_name').then($items => {
        const itemNames = $items.map((index, element) => Cypress.$(element).text()).get();
        expect(itemNames).to.deep.equal(itemNames.slice().sort());
      });
  
      // Change sorting to Name (Z -> A)
      cy.get('.product_sort_container').select('za');
  
      // Verify that items are sorted correctly
      cy.get('.inventory_item_name').then($items => {
        const itemNames = $items.map((index, element) => Cypress.$(element).text()).get();
        expect(itemNames).to.deep.equal(itemNames.slice().sort().reverse());
      });
    });
  });
  
  
  
  