/* 
Given an array nums. We define a running sum of an array as runningSum[i] = sum(nums[0]…nums[i]).

Return the running sum of nums.
*/

const runningSum = (nums) => {
    let prefix = [nums[0]];
    for (let i = 1; i < nums.length; i++){
        prefix.push(nums[i] + prefix[prefix.length - 1]);
    }

    return prefix;

}

const nums = [3,1,2,10,1];
console.log(runningSum(nums));