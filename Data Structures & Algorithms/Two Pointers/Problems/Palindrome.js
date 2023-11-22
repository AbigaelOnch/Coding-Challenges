/*
Given a string s, return true if it is a palindrome, false otherwise.

A string is a palindrome if it reads the same forward as backward. That means, after reversing it, it is still the same string. 
For example: "abcdcba", or "racecar".
*/

const s = 'racecar';

const isPalindrome = (s) => {
    let l = 0; // first pointer 
    let r = s.length - 1; // second pointer, pointer is starting at 0 so subtract 1
    while (l < r) { // while the pointers havent crossed 
        if(s[l] !== s[r]){
            return false; // if we find a value thats not the same its not a palindrome
        }
        l++;
        r--;
    }
    return true;
}

// Time complexity : O(n) <- There will be O(n) iterations in the while loop
// Space conplexity: O(1)
console.log(isPalindrome(s));