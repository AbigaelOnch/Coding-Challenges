/* JavaScript is a dynamically typed language, which means the types of variable can be changed during runtime. Many interview questions involve recursion of values that contain values of different types and how to handle each value type differs according to the type (e.g. different code is needed to iterate over an array vs an object). Knowledge of handling the JavaScript types is crucial to solving questions like Deep Clone and Deep Equal.

In this question, we will implement the following utility functions to determine the types of primitive values.

isBoolean(value): Return true if value is a boolean, false otherwise.
isNumber(value): Return true if value is a number, false otherwise. Note that NaN is considered a number.
isNull(value): Return true if value is null, false otherwise.
isString(value): Return true if value is a String, else false.
isSymbol(value): Return true if value is a Symbol primitive, else false.
isUndefined(value): Return true if value is undefined, else false. */

const isBoolean = (value) => {
    return typeof value === 'boolean';
};

const isNumber = (value) => {
    return typeof value === 'number';
};

const isNull = (value) => {
    return value === null;
};

const isString = (value) => {
    return typeof value === 'string';
};

const isSymbol = (value) => {
    return typeof value === 'symbol';
};

const isUndefined = (value) => {
    return value === undefined;
};

console.log(isBoolean(true));
console.log(isNumber(4));
console.log(isNumber('j'));
console.log(isNull(4));
console.log(isNull(null));
console.log(isString('test'));
console.log(isString(null));
