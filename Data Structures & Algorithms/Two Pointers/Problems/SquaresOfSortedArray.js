/* 
Given an integer array nums sorted in non-decreasing order, return an array of the squares of each number sorted in non-decreasing order.
Input: nums = [-4,-1,0,3,10]
Output: [0,1,9,16,100]

*/

const nums = [-4,-1,0,3,10];

const squaresOfSortedArray = (nums) => {
    let l = 0;
    let r = nums.length - 1;
    let replacingFromTheEndPointer = nums.length - 1;
    let results = new Array(nums.length).fill(0); // results = [0, 0, 0, 0, 0]
    while (l <= r){ // '< =' incase two values are the same
        const leftSquared = nums[l] * nums[l];
        const rightSquared = nums[r] * nums[r];
        if(leftSquared > rightSquared){
            results[replacingFromTheEndPointer] = leftSquared;
            l++;
        } else {
            results[replacingFromTheEndPointer] = rightSquared;
            r--;
        }
        replacingFromTheEndPointer--;
    }
    return results;
}

console.log(squaresOfSortedArray(nums));