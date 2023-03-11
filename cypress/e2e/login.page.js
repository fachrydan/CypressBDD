const URL = 'http://zero.webappsecurity.com/login.html'
const USERNAME = '#user_login'
const PASSWORD = '#user_password'
const SIGN_IN = 'Sign in'

class LoginPage{
    static visit(){
        cy.visit(URL)
    }

    static fillUsername(username){
        cy.get(USERNAME).type(username)
    }

    static fillPassword(password){
        cy.get(PASSWORD).type(password)
    }

    static signIn(){
        cy.contains(SIGN_IN).click()
    }

    static homePage(){
        cy.get('#account_summary_tab > a').should('be.visible')
    
    cy.contains('Cash Accounts').should('be.visible')
    cy.contains('Investment Accounts').should('be.visible')
    cy.contains('Credit Accounts').should('be.visible')
    cy.contains('Loan Accounts').should('be.visible')
    }
}

export default LoginPage