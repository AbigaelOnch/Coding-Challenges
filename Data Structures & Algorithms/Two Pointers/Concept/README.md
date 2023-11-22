# TWO POINTERS ALGORITHIM

Two pointers is an extremely common technique used to solve array and string problems. It involves having two integer variables that both move along an iterable.

## LEFT & RIGHT POINTERS

### Concept

Start the pointers at the edges of the input (let l = 0 , let r = iterable.length - 1) . Move them towards each other until they meet. (while (l < r))

### Converting this idea into instructions

1. Start one pointer at the first index 0 and the other pointer at the last index input.length - 1.
2. Use a while loop until the pointers are equal to each other.
3. At each iteration of the loop, move the pointers towards each other. This means either increment the pointer that started at the first index, decrement the pointer that started at the last index, or both.
   a. Deciding which pointers to move will depend on the problem we are trying to solve.

### Psuedo code

function fn(arr):
left = 0
right = arr.length - 1

    while left < right:
        Do some logic here depending on the problem
        Do some more logic here to decide on one of the following:
            1. left++
            2. right--
            3. Both left++ and right--

## TWO ITERATBLES, TWO POINTERS

### Concept

The following method is applicable when the problem has two iterables in the input.
Move along both inputs simultaneously until all elements have been checked.

### Converting this idea into instructions

1. Create two pointers, one for each iterable. Each pointer should start at the first index.
2. Use a while loop until one of the pointers reaches the end of its iterable.
3. At each iteration of the loop, move the pointers forward. This means incrementing either one of the pointers or both of the pointers. Deciding which pointers to move will depend on the problem we are trying to solve.
4. Because our while loop will stop when one of the pointers reaches the end, the other pointer will not be at the end of its respective iterable when the loop finishes. Sometimes, we need to iterate through all elements - if this is the case, you will need to write extra code here to make sure both iterables are exhausted.

### Psuedo code

function fn(arr1, arr2):
i = j = 0
while i < arr1.length AND j < arr2.length:
Do some logic here depending on the problem
Do some more logic here to decide on one of the following: 1. i++ 2. j++ 3. Both i++ and j++

    // Step 4: make sure both iterables are exhausted
    // Note that only one of these loops would run
    while i < arr1.length:
        Do some logic here depending on the problem
        i++

    while j < arr2.length:
        Do some logic here depending on the problem
        j++
