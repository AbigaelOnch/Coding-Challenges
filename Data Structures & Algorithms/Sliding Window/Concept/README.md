# SLIDING WINDOW ALGORITHM

Sliding window is another common approach to solving problems related to arrays. A sliding window is actually implemented using two pointers.

## Subarrys

Given an array a subarray is a contigous section of the array. All the elements must be adjacent to each other and in the original order

[1], [2], [3], [4]
[1, 2], [2, 3], [3, 4]
[1, 2, 3], [2, 3, 4]
[1, 2, 3, 4]

A sub array can be defined by two indicies the start/left and end/right index
For example [1, 2, 3, 4] => [2, 3] start index = 1 and end index = 2. Another name for a subarray in this context is a window.

## When should we use sliding window?

### how to identify sliding window problems

1. The problem will explicity or implicity define criteria that make a sub array valid

   - Contraint metric - attribute of the sub array ie. sum, number of unique elements, frequency of a specific element.
   - Numeric restriction - what the constraint metric should be for the sub array to be considered valid.
   - Example: subarray is valid if sum is <= 10, contraint metric = sum, numeric restriction = <= 10

2. The problem will ask you to find the valid subarray in some way
   - ie. Find the best subarray - telling you what makes one subarray better than another
   - ie. Find the longest subarray
   - ie. Find the number of valid sub arrays\*\*

## The algorithm

The idea behind a sliding window is to consider only valid subarrays. Recall that a subarray can be defined by a left bound (the index of the first element) and a right bound (the index of the last element). In sliding window, we maintain two variables left and right, which at any given time represent the current subarray under consideration.

Initialy l = r = 0
we increment r to expand the window (adding a new element to the windw)
if after incremeneting r the window becomed invalid we increment l (remove elements from out window until it becomes valid)

## The implementation

Problem : find the longest subarray with a sum less than or equal to k

Contrain metric: Sum, Numeric restriction: < = k

Keep track of the current sum adding values on to if (r++): for loop when r is incrementing currSum += nums[r]
When the window becomes invalid - decrement the window until it becomes valid again with a while loop currSum -= nums[l], l++

After each for loop keep track of the maximum length so far

function fn(nums, k):
left = 0
curr = 0
answer = 0
for (int right = 0; right < nums.length; right++):
curr += nums[right]
while (curr > k):
curr -= nums[left]
left++

        answer = max(answer, right - left + 1)

    return answer

## General template

`function fn(arr):
left = 0
for (int right = 0; right < arr.length; right++):
Do some logic to "add" element at arr[right] to window

        while WINDOW_IS_INVALID:
            Do some logic to "remove" element at arr[left] from window
            left++

        Do some logic to update the answer`

## Why is sliding window efficient?

A sliding window guarantees a maximum of 2n window iterations - the right pointer can move n times and the left pointer can move n times. This means if the logic done for each window is O(1) sliding window algorithms run in O(n), which is much faster.
