/**
 * Write a function named thirdMax that takes an array of integers `nums`
 * and returns the third distinct maximum number. If it does not exist,
 * return the maximum number.
 */

const thirdMax = (nums) => {
  let firstMax, thirdMax;
  let newNums = [...nums];
  for (let i = 0; i < 3; i++) {
    thirdMax = newNums[0];
    for (const num of newNums) thirdMax > num ? thirdMax : (thirdMax = num);
    newNums = newNums.filter((num) => num !== thirdMax);
    if (i === 0) firstMax = thirdMax;
  }
  return thirdMax || thirdMax === 0 ? thirdMax : firstMax;
};

// Export the function for testing
module.exports = { thirdMax };

// Example usage (commented out to avoid interference with tests)
// console.log(thirdMax([3, 2, 1])); // → 1
// console.log(thirdMax([1, 2])); // → 2
// console.log(thirdMax([2, 2, 3, 1])); // → 1
