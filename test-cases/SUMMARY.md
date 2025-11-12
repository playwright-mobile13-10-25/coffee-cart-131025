# Test Cases Summary

## Overview
This document provides a quick reference for all 20 test cases created for the Coffee Cart application.

## Test Case List

### Category 1: Basic Functionality (3 test cases)

| Test ID | Title | Steps | Priority |
|---------|-------|-------|----------|
| TC-001 | Verify Coffee Menu Display on Homepage | 12 | High |
| TC-002 | Verify Coffee Item Details and Pricing | 14 | High |
| TC-003 | Verify Navigation to Cart Page | 14 | High |

### Category 2: Add to Cart (4 test cases)

| Test ID | Title | Steps | Priority |
|---------|-------|-------|----------|
| TC-004 | Add Single Coffee Item to Cart | 12 | High |
| TC-005 | Add Multiple Different Coffee Items to Cart | 14 | High |
| TC-006 | Add Same Coffee Item Multiple Times | 14 | High |
| TC-007 | Add to Cart Using Right-Click Context Menu | 13 | Medium |

### Category 3: Cart Management (4 test cases)

| Test ID | Title | Steps | Priority |
|---------|-------|-------|----------|
| TC-008 | Increment Item Quantity in Cart | 14 | High |
| TC-009 | Decrement Item Quantity in Cart | 15 | High |
| TC-010 | Remove Item from Cart Using Delete Button | 14 | High |
| TC-011 | Verify Cart Persistence Between Pages | 14 | Medium |

### Category 4: Special Features (4 test cases)

| Test ID | Title | Steps | Priority |
|---------|-------|-------|----------|
| TC-012 | Double-Click to Translate Coffee Name to Chinese | 14 | Low |
| TC-013 | Hover Over Pay Button to Preview Cart (Desktop) | 14 | Medium |
| TC-014 | Verify Hover Effects on Coffee Items | 14 | Low |
| TC-015 | Verify Responsive Layout on Mobile Devices | 15 | High |

### Category 5: Payment (2 test cases)

| Test ID | Title | Steps | Priority |
|---------|-------|-------|----------|
| TC-016 | Verify Payment Details Form Display | 14 | High |
| TC-017 | Submit Payment with Valid Information | 15 | High |

### Category 6: Promotions (2 test cases)

| Test ID | Title | Steps | Priority |
|---------|-------|-------|----------|
| TC-018 | Verify Promotional Popup on Every 3rd Item | 16 | Medium |
| TC-019 | Accept Promotional Discount Offer | 15 | Medium |

### Category 7: Performance (1 test case)

| Test ID | Title | Steps | Priority |
|---------|-------|-------|----------|
| TC-020 | Verify Performance with 8+ Items in Cart | 17 | Low |

## Statistics

- **Total Test Cases**: 20
- **Total Test Steps**: 279 (average 14 steps per test case)
- **High Priority**: 12 test cases (60%)
- **Medium Priority**: 6 test cases (30%)
- **Low Priority**: 2 test cases (10%)

## Key Features Tested

1. **Product Display**: Menu layout, item details, pricing
2. **Shopping Cart**: Add, remove, modify quantities
3. **Special Interactions**: Right-click menu, double-click translation, hover preview
4. **Payment Flow**: Form display, validation, submission
5. **Promotions**: Discount popup trigger, offer acceptance
6. **Performance**: Intentional slowdown with 8+ items
7. **Responsive Design**: Mobile, tablet, desktop layouts

## File Structure

```
test-cases/
├── README.md           # Comprehensive documentation
├── SUMMARY.md         # This file
├── tc-001.md          # Test case 1
├── tc-002.md          # Test case 2
...
└── tc-020.md          # Test case 20
```

## Next Steps

1. Review all test cases for completeness
2. Create GitHub issues using `./create-issues.sh`
3. Assign test cases to team members
4. Begin test execution
5. Track results and defects

## References

- **Application URL**: https://coffee-cart.app
- **Source Repository**: https://github.com/jecfish/coffee-cart
- **Template Used**: `.github/ISSUE_TEMPLATE/test_case.md`
- **Test Standard**: ISTQB-aligned
