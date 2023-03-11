const URL = 'http://zero.webappsecurity.com/login.html'
const USERNAME = '#user_login'
const PASSWORD = '#user_password'
const SIGN_IN = 'Sign in'

const SEARCH = '#searchTerm'

class TaskLoginPage{
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

    static search(){
        cy.get(SEARCH).should('be.visible').clear('')
        cy.get(SEARCH).type('Online {enter}')
    }

    static resultSearch(){
        cy.get('h2').contains('Search Results:').should('be.visible')
        
        cy.contains('Zero - Free Access to Online Banking').should('be.visible')
        cy.contains('Zero - Online Statements').should('be.visible').click()

        cy.get('h2').contains('Statements & Documents').should('be.visible')
    }
}

export default TaskLoginPage