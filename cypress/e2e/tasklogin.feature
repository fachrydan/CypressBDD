Feature: Login to Application & Search Online

    As a valid user
    I want search Online on the search bar the page

    Scenario: Search bar
        Given I type Online on the search bar
        When I submit to search
        Then I should see the result for contains Online