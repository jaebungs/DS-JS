// isPalindrome('awesome') // false
// isPalindrome('foobar') // false
// isPalindrome('tacocat') // true
// isPalindrome('amanaplanacanalpanama') // true
// isPalindrome('amanaplanacanalpandemonium') // false

function isPalindrome(str) {
    let result;

    if (str.length === 0 || str.length === 1) return result

    if (str[0] === str[str.length - 1]) {
        result = true;
        isPalindrome(str.slice(1, str.length - 1))
    } else {
        result = false;
        return result
    }

    return result
}

console.log(isPalindrome('awesome'))
console.log(isPalindrome('tacocat'))
console.log(isPalindrome('amanaplanacanalpanama'))
console.log(isPalindrome('amanaplanacanalpandemonium'))

