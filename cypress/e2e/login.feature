Feature: Login to Application

    As a valid user
    I want to login  into Application

    Scenario: valid login
        Given I open login page
        When I submit login
        Then I should see homepage