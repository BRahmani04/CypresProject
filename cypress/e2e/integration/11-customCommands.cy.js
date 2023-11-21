/// <reference types="cypress" />

describe('Custom commands', () => {

    it('Parent Command', () => {
        cy.visit('https://techglobal-training.com/frontend')
        cy.clickCard('Html Elements')

        cy.login('Tech', 'Global')

        cy.selectDropdownOption('#company_dropdown1', 'Apple' )
        cy.selectDropdownOption('#company_dropdown2', 'Microsoft')
        
    })

    it('Child Command', () => {
        cy.visit('https://techglobal-training.com/frontend')
        cy.clickCard('Html Elements')

        cy.get('#main_heading').then(($el) => {
            cy.log($el.text())
        })

        cy.get('#main_heading').logText()
        cy.get('#main_heading').haveText('Html Elements')

        cy.get('#main_heading').haveAttr('id', 'main_heading')

    })
})