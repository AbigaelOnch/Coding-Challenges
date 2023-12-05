# PREFIX SUM ALGORITHIM

- Algorithm is used on arrays
- prefix[i] => sum of the array up until index i
  ie. nums = [5, 2, 1, 6, 3, 8] => prefix = [5, 7, 8, 14, 17, 25]

- Allows us to find the sum of a sub array in O(1)
  ie sum of sub array of i to j => prefix[j] - prefix [i - 1] or prefix[j] - prefix[i] + nums[i]

pseudo code to find the prefix sum

prefix = [nums[0]];
for (let i = 1; i < nums.length; i++){
prefix.push(nums[i] + prefix[prefix.length - 1]); // current number + value of the number before
}

- Time complexity to build the prefix is O(N) but finding subsequent sums will be O(1)
- Building a prefix sum is a form of pre-processing (storing pre-computed data in a DS before running the main logic)
