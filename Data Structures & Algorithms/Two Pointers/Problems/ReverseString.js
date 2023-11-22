/*
Write a function that reverses a string. The input string is given as an array of characters s.

You must do this by modifying the input array in-place with O(1) extra memory.

Input: s = ["h","e","l","l","o"]
Output: ["o","l","l","e","h"]
 */

const s = ["h","e","l","l","o"];


const reverseString = (s) => {
    let l = 0;
    let r = s.length - 1;
    while (l < r) {
        let temp = s[l];
        s[l] = s[r];
        s[r] = temp;
        l++;
        r--;
    }
    return s;
}

console.log(reverseString(s));