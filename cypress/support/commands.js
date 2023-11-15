// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
Cypress.Commands.add('clickCard', (link) => {
    cy.get('.cards').contains(link).click()
})

Cypress.Commands.add('login', (username, password) => {
    cy.get('#text_input1').type(username)
    cy.get('#text_input2').type(password)
})


Cypress.Commands.add('selectDropdownOption', (selector, value) => {
    cy.get(selector).select(value)
})
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
Cypress.Commands.add('logText', { prevSubject: true }, (subject) => {
    const text = subject.text()

    cy.log(`My text is: ${text}`)
})

Cypress.Commands.add('haveText', {prevSubject: 'element'}, (subject, expectedText) => {
    cy.wrap(subject).should('have.text', expectedText)
})

Cypress.Commands.add('haveAttr', {prevSubject: true}, (subject, attr, value) => {
    cy.wrap(subject).should('have.attr', attr, value)
})

/**
 * 	IMPORTANT NOTE
 * 	
 * 	When you define a custom command in Cypress and use prevSubject: true, or 'element' or 'window' or 'document', 
 * the command will automatically yield the subject.
 * 	
 * 	When you set prevSubject: true, Your custom command functions acts like a .then() callback, giving you direct access 
 * to subject so you can interact with it like jQuery Object
 * 	
 * 	
 * 	Key Point Here:
 * 	
 * 	1. prevSubhect ensures that your command is a child command 
 *  that will operate on the subject yielded by the previous command in the chain.
 * 	2. The function you provide Cypress.Commands.add with prevSubject: true 
 *  works like .then() in that block and lets you directly interact with the yielded subject.
 */
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })


/*
Cypress.Commands.overwrite('visit', (originalVisit, url, options) => {
    const urlWithPath = `${url}/frontend`

    return originalVisit(urlWithPath, options)
})
*/