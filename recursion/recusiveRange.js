// Adds up all the number from 0 to the number passed to the function.
// recursiveRange(6) // 21
// recursiveRange(10) // 55 

function recursiveRange(num) {
    if (num === 0) return 0
    return num + recursiveRange(num - 1)
}

console.log(recursiveRange(6)) // 21
console.log(recursiveRange(10)) // 55 