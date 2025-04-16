Feature: React Basic App Functionality

    Scenario: Given a user logged in into the application 

        Given User logged in into the application

        When User should land in the home page

        Then User should be able to see his account number

    Scenario: Given a user logged in into the application he should be able to navigate to the accounts sections

        Given User logged in into the application

        When User clicks on Transaction

        Then user should be able to view all the transaction