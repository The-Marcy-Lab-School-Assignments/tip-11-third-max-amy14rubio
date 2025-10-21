/**
 * Test suite for the thirdMax problem
 *
 * Problem: Given an integer array `nums`, return the third distinct maximum
 * number in the array. If the third maximum does not exist, return the
 * maximum number.
 */

const { thirdMax } = require('./index.js');

describe('thirdMax', () => {
  // Test cases from the README examples
  describe('Example test cases', () => {
    test('returns 1 for [3, 2, 1]', () => {
      expect(thirdMax([3, 2, 1])).toBe(1);
    });

    test('returns 2 for [1, 2] (fallback to max)', () => {
      expect(thirdMax([1, 2])).toBe(2);
    });

    test('returns 1 for [2, 2, 3, 1]', () => {
      expect(thirdMax([2, 2, 3, 1])).toBe(1);
    });
  });

  // Additional edge cases
  describe('Edge cases', () => {
    test('returns the element itself for single element array', () => {
      expect(thirdMax([42])).toBe(42);
    });

    test('returns the max when only two distinct values exist', () => {
      expect(thirdMax([2, 2])).toBe(2);
      expect(thirdMax([5, 5, 5, 1, 1])).toBe(5);
    });

    test('handles arrays with duplicates while considering distinctness', () => {
      expect(thirdMax([5, 2, 2, 4, 1])).toBe(2); // distinct: 5,4,2,1
      expect(thirdMax([1, 2, 2, 5, 3, 5])).toBe(2); // distinct: 5,3,2,1
    });

    test('handles negative numbers', () => {
      expect(thirdMax([-5, -2, -10, -1])).toBe(-5); // distinct: -1,-2,-5,-10
      expect(thirdMax([-1, -1])).toBe(-1);
    });

    test('handles zeros mixed with positives', () => {
      expect(thirdMax([0, 0, 1, 2])).toBe(0); // distinct: 2,1,0
      expect(thirdMax([0, 0])).toBe(0);
    });
  });

  describe('Ordering scenarios', () => {
    test('works for already ascending array', () => {
      expect(thirdMax([1, 2, 3, 4, 5])).toBe(3);
    });

    test('works for descending array', () => {
      expect(thirdMax([9, 7, 5, 3, 1])).toBe(5);
    });
  });

  describe('Large values', () => {
    test('handles large numbers and distinctness', () => {
      expect(thirdMax([1, 1000000, 999999, 1000000])).toBe(1);
      expect(thirdMax([1000000, 999999])).toBe(1000000);
    });
  });
});