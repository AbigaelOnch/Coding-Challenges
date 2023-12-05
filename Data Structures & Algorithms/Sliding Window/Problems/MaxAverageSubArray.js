const findMaxAverage = (nums, k) => {
    let l = 0;
    let currSum = 0;
    let currAverage = 0;
    let maxAverage = 0;
    let maxLength = 0;
    for(let r = 0; r < k; r++){
        currSum += nums[r];
        console.log("current sum", currSum);
 
    }
    currAverage += currSum/k - 1;
    console.log("currentAverage", currAverage);
}

const nums = [1,12,-5,-6,50,3]
const k = 4
console.log(findMaxAverage(nums, k));