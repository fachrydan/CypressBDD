const { Given, When, Then } = require('@badeball/cypress-cucumber-preprocessor');

Given ('I type Online on the search bar', () => {
    cy.visit('http://zero.webappsecurity.com/login.html')
    cy.get('#user_login').type('username')
    cy.get('#user_password').type('password')
    cy.contains('Sign in').click()
})

When ('I submit to search', () => {
    
    cy.get('#searchTerm').should('be.visible').clear('')
    cy.get('#searchTerm').type('Online {enter}')
})

Then ('I should see the result for contains Online', () => {

    cy.get('h2').contains('Search Results:').should('be.visible')

    cy.contains('Zero - Free Access to Online Banking').should('be.visible')
    cy.contains('Zero - Online Statements').should('be.visible').click()

    cy.get('h2').contains('Statements & Documents').should('be.visible')
})