Feature: Practice Software Testing Website

# LOGIN

Scenario: Valid Login
Given user opens login page
When user enters valid email and password
And clicks login button
Then user should login successfully

Scenario: Invalid Login
Given user opens login page
When user enters invalid email and password
And clicks login button
Then error message should appear

Scenario: Empty Login
Given user opens login page
When user clicks login button without entering credentials
Then login validation messages should appear

# SEARCH

Scenario: Search existing product
Given user opens home page
When user searches for "Pliers"
Then search results should contain "Pliers"

Scenario: Search invalid product
Given user opens home page
When user searches for "invalidproduct"
Then no products should appear

Scenario: Empty Search
Given user opens home page
When user clicks search without entering text
Then products should still appear

# CATEGORIES

Scenario: Open Hand Tools category
Given user opens home page
When user opens "Hand Tools" category
Then category products should appear

Scenario: Verify category products
Given user opens home page
When user opens "Hand Tools" category
Then product cards should be visible

Scenario: Filter by brand
Given user opens home page
When user opens "Hand Tools" category
And user selects brand filter
Then filtered products should appear

# FAVORITES

Scenario: Subscribe with valid email
Given user opens favorites page
When user enters valid email
Then success message should appear

Scenario: Subscribe with invalid email
Given user opens favorites page
When user enters invalid email
Then invalid email message should appear

Scenario: Subscribe with empty email
Given user opens favorites page
When user leaves email empty
Then required message should appear

# CART

Scenario: Open cart page
Given user opens cart page
Then shopping cart page should appear

Scenario: Add product to cart
Given user opens home page
When user adds "Pliers" to cart
Then product should appear in cart

Scenario: Verify cart price
Given user opens cart page
Then product price should appear