// cypress/integration/apiTest.spec.js

const axios = require('axios');

describe('API Test', () => {
  it('filterAuthentication & Authorization"', () => {
    cy.log('Calling API...');
    cy.request('https://api.publicapis.org/entries')
      .then((response) => {
        expect(response.status).to.equal(200);

        const filteredObjects = response.body.entries.filter(entry => entry.Category === 'Authentication & Authorization');
        cy.log(`Found ${filteredObjects.length} objects with Category: Authentication & Authorization`);
        cy.log('Found Objects:', filteredObjects);
      });
  });
});
