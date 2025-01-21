Feature: Shopping functionality

  Scenario: User adds a product to the cart
    Given I am on the product page
    When I add a product to the cart
    Then the product should appear in the cart

        Examples:
    | username         | password     |
    | standard_user    | secret_sauce |
    | locked_out_user  | secret_sauce |

  Scenario: User completes the purchase
    Given I have products in my cart
    When I proceed to checkout
    Then I should see the confirmation page

        Examples:
    | username         | password     |
    | standard_user    | secret_sauce |
    | locked_out_user  | secret_sauce |
