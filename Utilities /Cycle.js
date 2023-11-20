/* Implement a function that takes one or more values and returns a function that cycles through those values each time it is called.

const helloFn = cycle('hello');
console.log(helloFn()); // "hello"
console.log(helloFn()); // "hello"

const onOffFn = cycle('on', 'off');
console.log(onOffFn()); // "on"
console.log(onOffFn()); // "off"
console.log(onOffFn()); // "on"
*/

const cycle = (...values) => {
    let i = 0;
    return () => {
        const currVal = values[i];
        // i += 1
        i = (i + 1) % values.length;
        return currVal;
    }
}

const helloFn = cycle('hello');
console.log(helloFn()); // "hello"
console.log(helloFn()); // "hello"

const onOffFn = cycle('on', 'off');
console.log(onOffFn()); // "on"
console.log(onOffFn()); // "off"
console.log(onOffFn()); // "on"

/*
Solution
We use a closure to keep track of the current index in the values array. 
Each time the returned function is called, it returns the current value and increments the index.
It wraps around to the beginning of the array when it reaches the end with the help of the modulo operator. 
*/