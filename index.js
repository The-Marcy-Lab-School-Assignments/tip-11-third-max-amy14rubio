/**
 * Write a function named thirdMax that takes an array of integers `nums`
 * and returns the third distinct maximum number. If it does not exist,
 * return the maximum number.
 */

const thirdMax = (nums) => {
 // write your code here
 let first = -Infinity;
 let second = -Infinity;
 let third = -Infinity;

 for (let num of nums) {
   // Skip duplicates
   if (num === first || num === second || num === third) {
     continue;
   }

   if (num > first) {
     third = second;
     second = first;
     first = num;
   } else if (num > second) {
     third = second;
     second = num;
   } else if (num > third) {
     third = num;
   }
 }

 // If third max exists, return it; otherwise return first max
 return third === -Infinity ? first : third;
};

// Export the function for testing
module.exports = { thirdMax };

// Example usage (commented out to avoid interference with tests)
// console.log(thirdMax([3, 2, 1])); // → 1
// console.log(thirdMax([1, 2])); // → 2
// console.log(thirdMax([2, 2, 3, 1])); // → 1