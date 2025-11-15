Feature: User API

  Scenario: Successful registration and login
    Given I register a new user with the following data:
    | email | password |
    | eve.holt@reqres.in  | pistol |
    Then the registration should return a token

    When I login with the following data:
    | email | password |
    | eve.holt@reqres.in  | pistol |
    Then the login response should contain a token

  Scenario: View employees on the second page
    When the HR requests the list of employees on page 2
    Then the system should return a list of employees
    And the page should be 2

  Scenario: Successfully update user job title
    Given I register a new user with the following data:
    | email | password | job | name |
    | eve.holt@reqres.in  | pistol | QA | John |

    When I update the user with the following data:
     | job |
     | Lead QA |
    Then the response body should contain:
    |  job  |
    | Lead QA |
    And the response body should have a valid updatedAt timestamp

  Scenario: Successful user delete
    Given I register a new user with the following data:
    | email | password |
    | eve.holt@reqres.in  | pistol |
    When I delete the user
    Then the subsequent requests for this user should return "Not Found"