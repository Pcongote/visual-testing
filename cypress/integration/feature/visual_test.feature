Feature: Visual testing

    Scenario: Create a new visual test
      Given I open the test page
      When I click the "singin" button in authentication page
        And I type "email@mail.com" in the "email" field in authentication page
        And I click the "create an account" button in authentication page
        And I click the "gender" button in create an account page
        And I type "Joe" in the "first name" field in create an account page
        And I type "Doe" in the "last name" field in create an account page
        And I type "123465789" in the "password" field in create an account page
        And I Select "27" in the "Day" dropdown in create an account page
        And I Select "April" in the "Month" dropdown in create an account page
        And I Select "1990" in the "Year" dropdown in create an account page
        And I type "Joe" in the "first name Adress" field in create an account page
        And I type "Doe" in the "last name Adress" field in create an account page
        And I type "False company" in the "company" field in create an account page
        And I type "False street 123" in the "aderess" field in create an account page
        And I type "Miami" in the "city" field in create an account page
        And I Select "Florida" in the "state" dropdown in create an account page
        And I type "33101" in the "zip code" field in create an account page
        And I type "Information XXXXXXXXXXXX" in the "information" field in create an account page
        And I type "1234567890" in the "phone" field in create an account page
        And I type "10987654321" in the "mobile phone" field in create an account page
        And I click the "register" button in create an account page
        And I click the "logo in page" button in my account page 
        And I take a "screenshot test" in the principal page 
