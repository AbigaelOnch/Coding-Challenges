/* Given an array of integers nums, you start with an initial positive value startValue.
In each iteration, you calculate the step by step sum of startValue plus elements in nums (from left to right).

Return the minimum positive value of startValue such that the step by step sum is never less than 1.
*/

const minStartValue = (nums) => {
    let totalSum = 0;
    let minVal = 0;
    for(let i = 0; i < nums.length; i++){
        totalSum += nums[i];
        minVal = Math.min(minVal, totalSum);
    }

    return -minVal + 1;
}

const nums = [-3,2,-3,4,2];
console.log(minStartValue(nums));