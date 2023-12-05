/* 
Array.prototype.filter creates a new array populated with the results of calling a provided function on every element in the calling array.
Implement Array.prototype.filter. To avoid overwriting the actual Array.prototype.filter which is being used by the autograder, we shall instead implement it as Array.prototype.myFilter.
*/

Array.prototype.myFilter = function (callBackFn, thisArgs) {
    let results = [];
    for (let i = 0; i < this.length; i++){
        // this[i] <= make sure that the current value is not undefined 
        // callBackFn.call(thisArgs, this[i], i, this ) <= .call allows you to pass many args
        // filter method takes the current element, the index, and the array, it also takes in an optional thisArgs: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
        if(this[i] && callBackFn.call(thisArgs, this[i], i, this )){ // filter returns an array with the values that were true
            results.push(this[i]);
        }
    }
     
    return results;
}

[1, 2, 3, 4].myFilter((value) => value % 2 == 0); // [2, 4]
[1, 2, 3, 4].myFilter((value) => value < 3); // [1, 2]

