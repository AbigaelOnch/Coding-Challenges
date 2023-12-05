/* 
The k-radius average for a subarray of nums centered at some index i with the radius k is the average of all elements in nums between the indices i - k and i + k (inclusive). 
If there are less than k elements before or after the index i, then the k-radius average is -1.

Build and return an array avgs of length n where avgs[i] is the k-radius average for the subarray centered at index i.
*/

const getAverages = (nums, k) => {
    let prefix = [0];
    if( k === 0){
        return nums;
    }


    for (let i = 0; i < nums.length; i ++){
        prefix.push(nums[i] + prefix[[prefix.length - 1]]);
    }
    let averages = new Array(nums.length).fill(-1);
    if (2 * k + 1 > nums.length) { // Any index will not have 'k' elements in its left and right.
        return averages;
    } 
    // find averages of the valid sub array 
    for (let j = k; j < nums.length-k; j++){
        const leftBound = j - k;
        const rightBound = j + k;
        const subArraySum = prefix[rightBound + 1] - prefix[leftBound]; // do it this way because left should be shifted by 1
        const average = Math.floor(subArraySum/ (2 * k + 1))
        averages[j] = average;
    }
    return averages;
}

const nums = [7,4,3,9,1,8,5,2,6];
const k = 3
console.log(getAverages(nums, k));