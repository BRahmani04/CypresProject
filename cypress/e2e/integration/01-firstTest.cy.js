/// <reference types="cypress" />

// This is describing the test block that holds group of tests
describe('My First Test', () => {

        // This is individual test block
    it('Visit TechGlobal Training app home page', () => {
        // this is the web page
        cy.visit('https://techglobal-training.com/')

        cy.reload()

        cy.visit('https://techglobal-training.com/frontend')

        // Navigate back on the web page 
        //cy.go('back')
        cy.go(-1)

        //cy.go('forward')
        cy.go(1)

        cy.go(-1)
       
        // webPage title - Validation
        cy.title().should('eq', 'Techglobal Training | Home')

        cy.url().should('eq', 'https://techglobal-training.com/')
        cy.url().should('contain', 'techglobal-training')
    })

    it('My First Test', () => {
        expect(true).to.equal(true)
    })

    it('Logo', () => {
        cy.visit('https://techglobal-training.com/')

        cy.get('#logo')

        //second element to click something

        cy.get('#logo').click()
        cy.get('#logo').should('be.visible').click()

    })
})