/*
Given two sorted integer arrays arr1 and arr2, return a new array that combines both of them and is also sorted.
*/

const arr1 = [1, 4, 7, 20];
const arr2 = [3, 5, 6];

const combineSortedArrays = (arr1, arr2) => {
    let i = j = 0;
    let results = [];
    while ((i < arr1.length) && (j < arr2.length)){
        if (arr1[i] < arr2[i]){
            results.push(arr1[i]);
            i++
        } else {
            results.push(arr2[j]);
            j++
        }
    }
    while (i < arr1.length){
        results.push(arr1[i]);
        i++;
    }
    while (j < arr2.length) {
        results.push(arr2[j]);
        j++
    }

    return results;
}

console.log(combineSortedArrays(arr1, arr2));