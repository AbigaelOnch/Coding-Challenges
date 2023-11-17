// Flatten and array given input 
// Values in array can be anything but if array flatten it 
// Input : const input = [1, [3,[2]],[ 7, ['hi']], { a: [3, [4]]}]
// Output : const output = [ 1, 3, 2, 7, 'hi', { a: [3, [4]]}]


const input = [1, [3,[2]],[ 7, ['hi']], { a: [3, [4]]}];

const flattenArray = (input) => {
    let result = [];
    for (let i = 0; i < input.length; i++){
        if(Array.isArray(input[i])){
            const flattenedSubArray = flattenArray(input[i]);
             result = result.concat(flattenedSubArray);
        } else {
            result.push(input[i]);
        }
    }
    return result;
}
console.log(flattenArray(input));

// Tests recusrion knowledge and methods Array.isArray() and Array1.concat(Array2)