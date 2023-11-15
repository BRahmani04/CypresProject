/// <reference types='cypress' />

import LoginPage from "../../Pages/LoginPage"
const login = new LoginPage()
describe('Project 02', () => {

    it('Test Case 01 - Validate the login form', () => {

        cy.visit('https://techglobal-training.com/frontend/project-2')

         login.getUsernameField().parent().should('have.text', 'Please enter your username').and('be.visible').and('not.have.attr', 'required')
        //cy.get('div > [for*=username]').should('have.text', 'Please enter your username')

        login.getPasswordField().parent().should('have.text', 'Please enter your password').and('be.visible').and('not.have.attr', 'required')
        //cy.get('div > [for*=password]').should('have.text', 'Please enter your password')

        login.getLoginButton().should('be.visible').and('be.enabled').and('have.text', 'LOGIN')
        
        login.getForgotPassword().should('be.visible').and('have.attr', 'href', '/frontend/project-2').click()

    })  
        
    it('Test Case 02 - Validate the valid login',() => {
        cy.visit('https://techglobal-training.com/frontend/project-2')

        login.userLogin('TechGlobal', 'Test1234')
        login.getSuccessMessage().should('be.visible').and('have.text', 'You are logged in')
        login.getLogOutButton().should('be.visible').and('have.text', 'LOGOUT')
    })
        
    it('Test Case 03 - Validate the logout', () => {
        cy.visit('https://techglobal-training.com/frontend/project-2')

        login.LogInandOut('TechGlobal', 'Test1234')
        login.getLoginForm().should('be.visible')
    })

    it('Test Case 04 - Validate the Forgot Password? Link and Reset Password modal', () => {
        cy.visit('https://techglobal-training.com/frontend/project-2')

        login.getForgotPassword().click()
        login.getResetPassword().should('be.visible').next().should('be.visible')
        login.enterEmail().parent().should('have.text', "Enter your email address and we'll send you a link to reset your password. ").and('be.visible')
        .next().should('be.visible').and('have.text', 'SUBMIT')
        cy.get('#submit').should('be.enabled')

    })

    it.only('Test Case 05 - Validate the Reset Password modal close button', () => {
        cy.visit('https://techglobal-training.com/frontend/project-2')

        login.getForgotPassword().click()
        login.getResetPassword().should('be.visible').next().click()
        login.getResetPassword().should('not.exist')
    })

    it('Test Case 06 - Validate the Reset Password form submission', () => {
        cy.visit('https://techglobal-training.com/frontend/project-2')

        login.getForgotPassword().click()
        login.enterEmail().type('Bali@hotmail.com')
        cy.get('#submit').click()
        cy.get('#confirmation_message').should('be.visible')
    })

    it('Test Case 07 - Validate the invalid login with the empty credentials',() => {
        cy.visit('https://techglobal-training.com/frontend/project-2')

        login.getLoginButton().click()
        cy.get('#error_message').should('have.text', 'Invalid Username entered!').and('be.visible')
    })

    it('Test Case 08 - Validate the invalid login with the wrong username',() => {
        cy.visit('https://techglobal-training.com/frontend/project-2')

        login.userLogin('John', 'Test1234')
        cy.get('#error_message').should('have.text', 'Invalid Username entered!').and('be.visible')
    })
    
    it('Test Case 09 - Validate the invalid login with the wrong password', () => {

        cy.visit('https://techglobal-training.com/frontend/project-2')

        login.userLogin('TechGlobal', '1234')
        cy.get('#error_message').should('have.text', 'Invalid Password entered!').and('be.visible')
    })

    it('Test Case 10 - Validate the invalid login with the wrong username and password', () => {
        cy.visit('https://techglobal-training.com/frontend/project-2')

        login.userLogin('John', '1234')
        cy.get('#error_message').should('have.text', 'Invalid Username entered!').and('be.visible')
    })
})

