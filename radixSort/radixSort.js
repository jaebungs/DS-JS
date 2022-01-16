// Not a comparison sorting algorithm like merge, quick, bubble, insert and selection.
// Comparison algo's best O is nlog(n).

function getDigit(num, index) {
    // let stringify = num.toString();
    // return parseInt(stringify[stringify.length - 1 - index])

    return Math.floor(Math.abs(num) / Math.pow(10, index)) % 10
}
// console.log(getDigit(532, 0)) // 2
// console.log(getDigit(532, 1)) // 3
 
// Count the number of digits
function digitCount(num) {
    if (num === 0) return 1
    return Math.floor(Math.log10(Math.abs(num))) + 1
}
// console.log(digitCount(3523)) // 4
// console.log(digitCount(231)) // 3

// find the highest digits
function mostDigits(nums) {
    let highest = 0;
    for (let i = 0; i < nums.length; i++) {
        highest = Math.max(highest, digitCount(nums[i]));
    }
    return highest
}
// console.log(mostDigits([1, 11, 111, 1]))
// console.log(mostDigits([1234, 1]))


//Pseudocode
/*
    Define a function that accpets list of numbers
    Find out how many digits the largest number has
    Loop from 0 to the highest digits.
    For each loop
        create a bucket contain 10 space. 0 - 9
        place numbers based on the kth digit. ex) compare an sort by index 1, 2 ...
    Replace the existing array with values in the bucket
    return the list
*/
function radixSort(arr) {
    let mostDigitsCount = mostDigits(arr);

    for (let k = 0; k < mostDigitsCount; k++) {
        let digitBucket = Array.from({length: 10}, () => [])
        
        for (let i = 0; i < arr.length; i++) {
            let numberByDigit = getDigit(arr[i], k)
            digitBucket[numberByDigit].push(arr[i])
        }

        arr = [].concat(...digitBucket)
    }
    return arr
}
console.log(radixSort([23, 5, 235, 23246, 3234, 299]))