/// <reference types="cypress" />

describe('File Download & File Upload', () => {


    it('File Download', () => {
    cy.visit('https://techglobal-training.com/frontend')

    cy.clickCard('File Download & Upload')

    cy.get('#file_download').click()

    cy.readFile('cypress/downloads/SampleText.txt')
    })

})