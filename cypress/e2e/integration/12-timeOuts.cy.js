/// <reference types= "cypress" />

describe('Timeout', () => {

    it('Explicit or Inline Timeouts', () => {

        cy.visit('https://techglobal-training.com/frontend');
        cy.clickCard('Html Elements');

        // cy.get('#randomName', {timeout: 8000})

        cy.get('#main_heading', {timeout: 8000})


    })
    // it('Waites page', () => {
    //     cy.visit('https://techglobal-training.com/frontend');
    //     cy.clickCard('Waits');

    //     cy.get('#red').click()
    //     cy.get('.box', {timeout: 10000}).should('be.visible')
    // })

     
})