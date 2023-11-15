class LoginPage {

    getUsernameField(){
        return cy.get('#username')
    }
    getLoginForm(){
        return cy.get('.is-size-3')
    }
    getPasswordField(){
        return cy.get('#password')
    }

    getLoginButton(){
        return cy.get('#login_btn')
    }

    getForgotPassword() {
        return cy.get('[href="/frontend/project-2"]')
    }
    getResetPassword(){
        return cy.get('#modal_title')
    }

    enterEmail(){
        return cy.get('#email')
    }

    getSuccessMessage(){
        return cy.get('#success_lgn')
    }

    getLogOutButton() {
        return cy.get('#logout')
    }
    userLogin(username, password){
        this.getUsernameField().type(username)
        this.getPasswordField().type(password)
        this.getLoginButton().click()
    
    }

    LogInandOut(username, password){
        this.getUsernameField().type(username)
        this.getPasswordField().type(password)
        this.getLoginButton().click()
        this.getLogOutButton().click()
    
    }
    
    
    }
    

    



export default LoginPage

