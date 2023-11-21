/* JavaScript is a dynamically typed language, which means the types of variable can be changed during runtime. Many interview questions involve recursion of values that contain values of different types and how to handle each value type differs according to the type (e.g. different code is needed to iterate over an array vs an object). Knowledge of handling the JavaScript types is crucial to solving questions like Deep Clone and Deep Equal.

In this question, we will implement the following utility functions to determine the types of primitive values.

isBoolean(value): Return true if value is a boolean, false otherwise.
isNumber(value): Return true if value is a number, false otherwise. Note that NaN is considered a number.
isNull(value): Return true if value is null, false otherwise.
isString(value): Return true if value is a String, else false.
isSymbol(value): Return true if value is a Symbol primitive, else false.
isUndefined(value): Return true if value is undefined, else false. */

const isBoolean = (value) => {
    // const hasKids = true;
    return typeof value === 'boolean';
};

const isNumber = (value) => {
    // const age = 4;
    // const points = 98.9;
    return typeof value === 'number';
};

const isNull = (value) => {
    // const aptNumber = null;
    // typeof will return object 
    return value === null;
};

const isString = (value) => {
    // const firstName = 'Abby
    return typeof value === 'string';
};

const isSymbol = (value) => {
    // const id = Symbol('id);
    return typeof value === 'symbol';
};

const isUndefined = (value) => {
    // const score = undefined || let score;
    return value === undefined;
};

const isBigInt = (value) => {
    // const 9007199254740991n;
    return typeof value === 'bigint';
}

const isArray = (value) => {
    // type of will return object 
    // return typeof value === 'object';
    return Array.isArray(value);
}

const isArrayAlt = (value) => {
    if (value == null){
        return false;
    }
    return value.constructor === Array;
}

const isFunction = (value) => {
    return typeof value === 'function';
}

const isObject = (value ) => {
    return typeof value === 'object';
}

// console.log(isBoolean(true));
// console.log(isNumber(4));
// console.log(isNumber('j'));
// console.log(isNull(4));
// console.log(isNull(null));
// console.log(isString('test'));
// console.log(isString(null));
// console.log(isBigInt(Infinity));
// console.log( typeof Infinity);
console.log(isArray([1, 2, 3, 4]));
console.log(isArrayAlt([1, 2, 3, 4]));
console.log(isObject({ name: 'Abby', age: 29 }));
const sayYo = () => {
    console.log('Yo')
}
console.log(isFunction(sayYo))