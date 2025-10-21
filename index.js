/**
 * Write a function named thirdMax that takes an array of integers `nums`
 * and returns the third distinct maximum number. If it does not exist,
 * return the maximum number.
 */

const thirdMax = (nums) => {
  let firstMax;
  let thirdMax;
  for (let i = 0; i < 3; i++) {
    thirdMax = nums[0];
    for (let num of nums) {
      thirdMax > num ? thirdMax : (thirdMax = num);
    }
    const newNums = nums.filter((num) => num !== thirdMax);
    nums = newNums;
    if (i === 0) {
      firstMax = thirdMax;
    }
  }
  return thirdMax || thirdMax === 0 ? thirdMax : firstMax;
};

// Export the function for testing
module.exports = { thirdMax };

// Example usage (commented out to avoid interference with tests)
// console.log(thirdMax([3, 2, 1])); // → 1
// console.log(thirdMax([1, 2])); // → 2
// console.log(thirdMax([2, 2, 3, 1])); // → 1
