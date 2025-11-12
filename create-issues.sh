#!/bin/bash

# Script to create GitHub issues from test case files
# Usage: ./create-issues.sh

# Check if gh CLI is installed
if ! command -v gh &> /dev/null; then
    echo "Error: GitHub CLI (gh) is not installed."
    echo "Please install it from: https://cli.github.com/"
    exit 1
fi

# Check if authenticated
if ! gh auth status &> /dev/null; then
    echo "Error: Not authenticated with GitHub CLI."
    echo "Please run: gh auth login"
    exit 1
fi

# Directory containing test cases
TEST_CASES_DIR="test-cases"

# Check if directory exists
if [ ! -d "$TEST_CASES_DIR" ]; then
    echo "Error: $TEST_CASES_DIR directory not found."
    exit 1
fi

echo "Creating GitHub issues from test cases..."
echo "=========================================="

# Counter for created issues
created=0
failed=0

# Loop through all test case files
for i in {001..020}; do
    file="$TEST_CASES_DIR/tc-$i.md"
    
    if [ -f "$file" ]; then
        # Extract title from the file
        title=$(grep "^title:" "$file" | sed 's/title: //' | tr -d '"')
        
        if [ -n "$title" ]; then
            echo "Creating issue: $title"
            
            # Create the issue
            if gh issue create --title "$title" --body-file "$file" --label "UI"; then
                created=$((created + 1))
                echo "  ✓ Issue created successfully"
            else
                failed=$((failed + 1))
                echo "  ✗ Failed to create issue"
            fi
        else
            echo "  ✗ Could not extract title from $file"
            failed=$((failed + 1))
        fi
    else
        echo "  ✗ File not found: $file"
        failed=$((failed + 1))
    fi
done

echo ""
echo "=========================================="
echo "Summary:"
echo "  Created: $created issues"
echo "  Failed: $failed issues"
echo "=========================================="

if [ $failed -eq 0 ]; then
    echo "✓ All test case issues created successfully!"
    exit 0
else
    echo "✗ Some issues failed to create. Please check the errors above."
    exit 1
fi
