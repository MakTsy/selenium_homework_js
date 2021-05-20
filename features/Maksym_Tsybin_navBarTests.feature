Feature: Navigation bar UI test

  Background:
    Given User has opened main page

  Scenario: Check blog page opening
    When User opens blog page
    Then Blog page opens
    And User sees Greetings, Innovators!

  Scenario: Check how we do it button
    When User clicks how we do it button
    Then How we do it page opens

  Scenario: Check change language
    When User clicks contact selection button
    And Choose ukrainian
    Then User see ukrainian main page

  Scenario: User searches blockchain
    When User clicks search button
    And User writes Blockchain
    And User clicks find button
    Then User sees corresponding result
