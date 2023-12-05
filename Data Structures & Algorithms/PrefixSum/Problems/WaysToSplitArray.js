/* 
You are given a 0-indexed interger array nums of length n 
nums constains a valid split at index i if the following are true:
the sum of the first i + 1 elements is > = the sums of the last n - i - 1 elements
there is atleast one element to the right of i 
return the number of valid splits 

*/

const waysToSplitArray = (nums) => {
    prefix = [nums[0]];
    for (let i = 1; i < nums.length; i++){
        prefix.push(nums[i] + prefix[prefix.length - 1]);
    }

    let ans = 0;
    for (let j = 0; j < prefix.length - 1; j++){
        const leftSectionSum = prefix[j];
        const totalSum = prefix[prefix.length - 1]
        const righSectionSum = totalSum - leftSectionSum;
        if(leftSectionSum >= righSectionSum){
            ans++
        }
    }
    return ans;
}

// you can optimize space complexity by getting rid of the prefix sum and computing the sum on the fly 
const waysToSplitArrayOptimized = (nums) => { 
    let totalSum = 0;
    for (const num of nums){
        totalSum += num;
    }

    let ans = 0;
    let leftSectionSum = 0;
    for(let i = 0; i < nums.length - 1; i++){
        leftSectionSum += nums[i];
        righSectionSum = totalSum - leftSectionSum;
        if(leftSectionSum >= righSectionSum){
            ans++
        }
    }
    return ans;
}


const nums = [10,4,-8,7];
console.log(waysToSplitArray(nums));
console.log(waysToSplitArrayOptimized(nums));