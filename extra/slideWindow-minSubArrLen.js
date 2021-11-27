// two params - array of positive ints , target
// contiguous subarray length that is greater or equal to the target. If not exists, return 0
// minSubArrayLen([2,3,1,2,4,3], 7) -> 2 [4,3]
// minSubArrayLen([2,3,1,2,4,3], 50) -> 0
// minSubArrayLen([2,3,1,2,51], 50) -> 1 [51]
// minSubArrayLen([1,4,16,22,5,7,8,9,10], 39) -> 3


function minSubArrayLen(array, target) {
    let sum = 0;
    let start = 0;
    let end = 0;
    let minSubArrayLen = 0;

    for (let i=0; i < array.length; i++) {
        if (array[i] === target) return 1
        if (target > sum && end < array.length) {
            sum += array[end];
            end++;
        } else if (sum >= target) {
            sum -= array[start];
            start++;
        }

    }
    
    if (start > end) {
        return 0
    }
    return end - start
}

console.log(minSubArrayLen([2,3,1,2,4,3], 7))
// console.log(minSubArrayLen([2,3,1,2,4,3], 50))
// console.log(minSubArrayLen([2,3,1,2,51], 50))
