/*
Given a sorted array of unique integers and a target integer, return true if there exists a pair of numbers that sum to target, false otherwise.
 */

const nums = [1, 2, 4, 6, 8, 9, 14, 15];
const target = 13;

const twoSumSorted = (nums, target) => {
    let l = 0;
    let r = nums.length - 1;
    while (l < r) {
        const currSum = nums[l] + nums[r]
        if(currSum === target){ // if the sum is greater than the target move the right pointer
            return true;
        } else if(currSum < target) {
            l++
        } else {
            r--;
        }
    }
    return false;

}

console.log(twoSumSorted(nums, target))