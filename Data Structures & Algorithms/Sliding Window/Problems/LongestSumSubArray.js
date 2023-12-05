/* Given an array of positive integers nums and an integer k, 
find the length of the longest subarray whose sum is less than or equal to k */

// constraint metric - sum
// numeric restriction - less than or equal to key 
// return the longest 

const nums = [3, 1, 2, 7, 4, 2, 1, 1, 5] 
const k = 8

const longestSumSubarray = (nums, k) => {
    let l = 0;
    let currSum = 0;
    let maxLength = 0;
    for(r = 0; r < nums.length; r++){
        currSum += nums[r];
        while (currSum > k){
            currSum -= nums[l]
            l++
        }
    maxLength = Math.max(maxLength, r - l + 1);

    }
    return maxLength;
}

console.log(longestSumSubarray(nums, k));