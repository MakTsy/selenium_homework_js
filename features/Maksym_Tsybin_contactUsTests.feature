Feature: Check contact us page

  Background:
    Given User has opened Contact Us page at EPAM's website

  Scenario Outline: user tries to submit form with any uncompleted required field
    Given there are uncompleted <name> field in the form
    When I clicks Submit button
    Then <name> field's border color becomes red colored

    Examples:
      |name|
      |FIRST NAME|
      |LAST NAME|
      |EMAIL|
      |PHONE|

    Scenario: check address and phone numbers
      Given there is address of GLOBAL HEADQUARTERS on the page
      And there are phone numbers on the page
      Then address corresponds to actual
      And phone numbers are correct