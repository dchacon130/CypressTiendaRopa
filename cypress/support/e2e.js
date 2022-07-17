// ***********************************************************
// This example support/e2e.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
import './commands'
import './e2e'

// Alternatively you can use CommonJS syntax:
// require('./commands')

Cypress.Commands.add('login', (user, password, message) => {
    cy.fixture('login').then((login)=>{
        cy.get(login.signinOption).click();
        cy.get(login.emailBox).type(user);
        cy.get(login.passwordBox).type(password);
        cy.get(login.signinButton).click();
        cy.get(login.incorrectLoginBanner).should('contain', message);
    })  
})