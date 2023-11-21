/* 
Implement a function countBy(array, iteratee) that creates an object composed of keys generated from the results of running each element of array thru iteratee. The corresponding value of each key is the number of times the key was returned by iteratee. iteratees can either be:

Functions: iteratee functions is invoked with one argument: (value).
Strings: The property of an object. E.g. 'length' can be used to return the number of elements of arrays. 
*/

function countBy(array, iteratee) {
    let results = {};
    for (let i = 0; i < array.length; i++){
      let key;
      if (iteratee === 'length'){
        key = array[i].length;
      } else {
        key = iteratee(array[i]);
        
      }
      if(results.hasOwnProperty(key)){
          results[key] = results[key] + 1;
        } else {
          results[key] = 1;
        }
    }
    return results;
  };

  console.log(countBy([6.1, 4.2, 6.3], Math.floor)); // => { '4': 1, '6': 2 }
  console.log(countBy(['one', 'two', 'three'], 'length')); // => { '3': 2, '5': 1 }