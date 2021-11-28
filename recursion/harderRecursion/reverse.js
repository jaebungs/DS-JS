// reverse('awesome') // 'emosewa'
// reverse('rithmschool') // 'loohcsmhtir'
function reverse(string) {
    let reversedStr = '';

    function reverseHelper(string) {
        if (string.length === 0) return
        reversedStr += string[string.length - 1]
        return reverseHelper(string.slice(0, -1))
    }
    reverseHelper(string);
    return reversedStr
}

console.log(reverse('awesome'))
console.log(reverse('rithmschool'))

// OR
function betterReverse(string) {
    if (string.length === 1) return string[0]
    return string[string.length - 1] + betterReverse(string.slice(0, -1))
}
console.log(betterReverse('awesome'))
console.log(betterReverse('rithmschool'))