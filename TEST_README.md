# First Unique Character - Test Suite

This project includes a comprehensive Jest test suite for the first unique character problem.

## Setup

1. Install dependencies:
```bash
npm install
```

2. Run tests:
```bash
npm test
```

3. Run tests in watch mode:
```bash
npm run test:watch
```

4. Run tests with coverage:
```bash
npm run test:coverage
```

## Test Coverage

The test suite includes:

- **Example test cases** from the README
- **Edge cases** (empty string, single character, etc.)
- **Complex scenarios** with various string patterns
- **Performance tests** for maximum length strings
- **Boundary conditions** for edge scenarios

## Problem Description

Given a string `s`, find the first non-repeating character and return its index. If no such character exists, return -1.

### Examples:
- `firstUniqChar("leetcode")` → `0`
- `firstUniqChar("loveleetcode")` → `2`
- `firstUniqChar("aabb")` → `-1`

## Implementation

The `firstUniqChar` function in `index.js` currently contains a placeholder implementation. Implement the function to make all tests pass.
