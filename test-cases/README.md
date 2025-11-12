# Coffee Cart Test Cases

This directory contains 20 comprehensive test cases for the Coffee Cart application (https://coffee-cart.app).

## Overview

Each test case has been designed following ISTQB standards and includes:
- Unique Test Case ID (TC-001 through TC-020)
- Detailed test steps (minimum 10 steps per test case)
- Expected results for each step
- Preconditions and postconditions
- Environment requirements
- Priority levels

## Test Case Categories

### Basic Functionality (TC-001 to TC-003)
- **TC-001**: Verify Coffee Menu Display on Homepage
- **TC-002**: Verify Coffee Item Details and Pricing
- **TC-003**: Verify Navigation to Cart Page

### Add to Cart (TC-004 to TC-007)
- **TC-004**: Add Single Coffee Item to Cart
- **TC-005**: Add Multiple Different Coffee Items to Cart
- **TC-006**: Add Same Coffee Item Multiple Times
- **TC-007**: Add to Cart Using Right-Click Context Menu

### Cart Management (TC-008 to TC-011)
- **TC-008**: Increment Item Quantity in Cart
- **TC-009**: Decrement Item Quantity in Cart
- **TC-010**: Remove Item from Cart Using Delete Button
- **TC-011**: Verify Cart Persistence Between Pages

### Special Features (TC-012 to TC-015)
- **TC-012**: Double-Click to Translate Coffee Name to Chinese
- **TC-013**: Hover Over Pay Button to Preview Cart (Desktop)
- **TC-014**: Verify Hover Effects on Coffee Items
- **TC-015**: Verify Responsive Layout on Mobile Devices

### Payment (TC-016 to TC-017)
- **TC-016**: Verify Payment Details Form Display
- **TC-017**: Submit Payment with Valid Information

### Promotions (TC-018 to TC-019)
- **TC-018**: Verify Promotional Popup on Every 3rd Item
- **TC-019**: Accept Promotional Discount Offer

### Performance (TC-020)
- **TC-020**: Verify Performance with 8+ Items in Cart

## How to Create Issues from These Test Cases

### Method 1: Using GitHub Web Interface
1. Go to the repository's Issues tab
2. Click "New Issue"
3. Select the "Test Case" template
4. Copy content from any test case file (tc-001.md through tc-020.md)
5. Paste into the issue form
6. Submit the issue

### Method 2: Using GitHub CLI
```bash
# Navigate to repository
cd /path/to/coffee-cart

# Create issue from test case file
gh issue create --title "[Test Case]: TC-001 - Verify Coffee Menu Display on Homepage" \
                --body-file test-cases/tc-001.md \
                --label "UI"
```

### Method 3: Bulk Creation Script
```bash
# Create all 20 issues at once
for i in {001..020}; do
  title=$(grep "^title:" test-cases/tc-$i.md | sed 's/title: //' | tr -d '"')
  gh issue create --title "$title" --body-file test-cases/tc-$i.md --label "UI"
done
```

## Coffee Cart Application Features

The test cases cover the following features of the Coffee Cart application:

1. **Product Display**: 9 different coffee types with names and prices
2. **Shopping Cart**: Add, remove, and modify items
3. **Right-Click Menu**: Confirmation dialog for adding items
4. **Translation**: Double-click to translate names to Chinese
5. **Cart Preview**: Hover over Pay button (desktop only)
6. **Promotional Offers**: Discount popup every 3rd item (3, 6, 9, ...)
7. **Performance Feature**: Intentional slowdown with 8+ items
8. **Payment Flow**: Checkout with name and email
9. **Responsive Design**: Mobile, tablet, and desktop layouts

## Test Data

### Coffee Items and Prices
- Espresso: $10.00
- Espresso Macchiato: $12.00
- Cappuccino: $19.00
- Mocha: $8.00
- Flat White: $18.00
- Americano: $7.00
- Cafe Latte: $16.00
- Espresso Con Panna: $14.00
- Cafe Breve: $15.00
- (Discounted) Mocha: $4.00 (promotional only)

## Testing Environment

- **URL**: https://coffee-cart.app
- **Source Code**: https://github.com/jecfish/coffee-cart
- **Browsers**: Chrome 119+, Firefox 120+, Safari 17+, Edge (latest)
- **Devices**: Desktop, Tablet, Mobile
- **Test Type**: Manual UI Testing

## Notes

- Each test case follows the ISTQB template structure
- All test cases include at least 10 detailed steps
- Test cases are designed to be independent and can be executed in any order
- Some features (like hover preview) are desktop-only
- The promotional feature triggers on every 3rd item added to cart
- Performance degradation with 8+ items is an intentional feature for demonstration

## Contributing

If you identify additional test scenarios or improvements to existing test cases, please:
1. Create a new test case following the existing format
2. Submit a pull request with your changes
3. Ensure the test case has at least 10 steps
4. Follow the ISTQB template structure

## References

- Coffee Cart Application: https://coffee-cart.app
- Source Repository: https://github.com/jecfish/coffee-cart
- Issue Template: `.github/ISSUE_TEMPLATE/test_case.md`
