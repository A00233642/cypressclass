Feature: Demoblaze login functionality test

Application regression

signup
Scenario: login with valid details
  Given I navigate to demoblaze ecommorce website
  When I click signup button
  When I signup with "<username>" and "<password>"
  Examples:
  | username | password | 
  | Taiwo29  | 1234567890 |
  | Taiwo99  | 1234567890  |
  | Taiwo10  | 1234567890  |
