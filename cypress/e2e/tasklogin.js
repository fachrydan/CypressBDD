import TaskLoginPage from './tasklogin.page';

const { Given, When, Then } = require('@badeball/cypress-cucumber-preprocessor');

Given ('I type Online on the search bar', () => {
    TaskLoginPage.visit()
    TaskLoginPage.fillUsername('username')
    TaskLoginPage.fillPassword('password')
    TaskLoginPage.signIn()
})

When ('I submit to search', () => {

    TaskLoginPage.search()
})

Then ('I should see the result for contains Online', () => {

    TaskLoginPage.resultSearch()
})