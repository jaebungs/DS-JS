// two string.
// ex) isSubsequence('hello', 'hello world') true
// ex) isSubsequence('sing', 'sting') true
// ex) isSubsequence('abc', 'acd') false Because order matters!
// no order change!

function isSubsequence(letter1, letter2) {
    let pointer = 0;

    for (let i = 0; i < letter2.length; i++) {
        if (letter2[i] === letter1[pointer]) {
            pointer++;
        }
        
        if (pointer >= letter1.length) {
            return true
        }
    }

    return false
}
console.log(isSubsequence('hello', 'hello world'))
console.log(isSubsequence('sing', 'sting'))
console.log(isSubsequence('acd', 'abc'))
console.log(isSubsequence('abc', 'abracadddrrrabc'))
