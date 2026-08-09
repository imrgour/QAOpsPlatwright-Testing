Feature: Ecommerce Validation

    @error
    @anotherValidation
    Scenario Outline: Error Validation
        Given Login to Ecommerce2 application using "<username>" and "<password>"
        Then Verify the error msg is displayed

        Examples:
            | username       | password   |
            | ram@gmail.com  | abcdes@123 |
            | sonu@gmail.com | qwerty@123 |