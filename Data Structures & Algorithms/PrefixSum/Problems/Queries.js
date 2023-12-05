/* 
 Given an integer array nums, an array queries where queries[i] = [x, y] and an integer limit, return a boolean array that represents the answer to each query. 
 A query is true if the sum of the subarray from x to y is less than limit, or false otherwise.

For example, given nums = [1, 6, 3, 2, 7, 2], 
queries = [[0, 3], [2, 5], [2, 4]], and limit = 13, the answer is [true, false, true]. 
For each query, the subarray sums are [12, 14, 12].
*/

const answerQueries = (nums, queries, limit) => {
    // build out the prefix sum 
    let prefix = [nums[0]];
    for (let i = 1; i < nums.length; i++){
        prefix.push(nums[i] + prefix[prefix.length - 1]);
    }

    let ans = [];
    // for (let j = 0; j < queries.length; j ++){
    //     const x = queries[j][0];
    //     const y = queries[j][1];
    //     const subarraySum = prefix[y] - prefix[x] + nums[x];
    //     ans.push(subarraySum < limit);

    // }
    for (const [x, y] of queries){
        const subArraySum = prefix[y] - prefix[x] + nums[x];
        ans.push(subArraySum < limit);
    }
    return ans;

}

const nums = [1, 6, 3, 2, 7, 2];
const queries = [[0, 3], [2, 5], [2, 4]];
const limit = 13;

console.log(answerQueries(nums, queries, limit));