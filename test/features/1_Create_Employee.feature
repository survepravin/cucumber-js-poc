@smoke
Feature: Create Employee
    All scenarios for the 'Create Employee' endpoint

    @create
    Scenario Outline: To verify 'Crete Employee' endpoint
        Given create a request <username> <password>
        When I hit endpoint with request2
        Then I should get 200 responseStatus2
        And I should get value in response2
        Examples:
            | username  | password  |
            | 'Value 1' | 'Value 1' |
            | 'Value 2' | 'Value 2' |

