/* 
Write a function that gets the value at path of object. If the resolved value is undefined, the defaultValue is returned in its place. 
The function signature is as such: get(object, path, [defaultValue])
object: The object to query.
path: The path of the property to get. It can be a string with . as the separator between fields, or an array of path strings.
defaultValue: Optional parameter. The value returned if the resolved value is undefined.

Examples

Input: 
const john = {
  profile: {
    name: { firstName: 'John', lastName: 'Doe' },
    age: 20,
    gender: 'Male',
  },
};

const jane = {
  profile: {
    age: 19,
    gender: 'Female',
  },
};

Output: 
get(john, 'profile.name.firstName'); // 'John'
get(john, 'profile.gender'); // 'Male'
get(jane, 'profile.name.firstName'); // undefined

*/

// objectParam => can be an empty object {}, but cannot be undefined 
// pathParam => can be '.' separated string or Array => []
// defaultValue => value if resolved is undefined, is an optional param 
const get = (objectParam, pathParam, defaultValue) => {
    // console.log(objectParam)
    // get the path values into an array
    const pathValues = Array.isArray(pathParam) ? pathParam : pathParam.split('.');
    let index = 0;
    let currObj = objectParam;
    while (currObj != null && index < pathValues.length) { // null check so we bypass the while loop if object is empty
        currObj = currObj[ String(pathValues[index])]; // john['profile']
        index++
    }

    // if index is not the same as length, we skipped the while loop & we have an empty object so return undefined 
    const value = index && index === pathValues.length ? currObj : undefined;
    return value == undefined ? defaultValue : currObj;

}

const john = {
    profile: {
      name: { firstName: 'John', lastName: 'Doe' },
      age: 20,
      gender: 'Male',
    },
};

const jane = {
    profile: {
      age: 19,
      gender: 'Female',
    },
};

const nobody = {};

console.log(get(john, 'profile.name.firstName')); // 'John'
console.log(get(john, 'profile.gender')); // 'Male'
console.log(get(jane, 'profile.name.firstName')); // undefined
console.log(get(nobody, 'profile.name.firstName')); // undefined