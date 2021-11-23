// Find max sum in an array
// ex) [1,2,3,4,5] and given number = 2. SumMax = 9.

// O^2 solution.
function maxSubarraySum(array, num) {
    if (num > array.length) {
        return null;
    }

    let maxSum = -Infinity;
    for (let i = 0; i < array.length - num + 1; i++) {
        let temp = 0;

        for (let j = 0; j < num; j++) {
            temp += array[i + j];
        }
        if (temp > maxSum) {maxSum = temp;}
    }

    console.log(maxSum);
    return maxSum;
}

maxSubarraySum([1,2,3,4,5], 2);
maxSubarraySum([1,4,4,6,7], 3);
maxSubarraySum([1,5,2,3,9,7,3,5,7,6,5,8,7,2,1,4,6,7], 5);

// Better solution O(n)
// function betterMaxSubarraySum(array, num) {
//     if (num > array.length) {
//         return null;
//     }
//     let maxSum = 0;
//     let tempSum = 0;

//     for (let i = 0; i < num; i++) {
//         maxSum += array[i];
//     }
//     tempSum = maxSum
//     for (let j = 0; j < array.length - 3; j++) {
//         tempSum = maxSum - array[j] + array[j + num];
//         if (tempSum > maxSum) {
//             maxSum = tempSum
//         }
//     }
//     console.log(maxSum);
//     return maxSum;
// }
function betterMaxSubarraySum(array, num) {
    if (num > array.length) {
        return null;
    }
    let maxSum = 0;
    let tempSum = 0;

    for (let i = 0; i < num; i++) {
        maxSum += array[i];
    }
    tempSum = maxSum;
    for (let i = num; i < array.length; i++) {
        tempSum = tempSum - array[i - num] + array[i];
        maxSum = Math.max(maxSum, tempSum);
    }
    console.log(maxSum);
    return maxSum;
}
betterMaxSubarraySum([1,2,3,4,5], 2);
betterMaxSubarraySum([1,4,4,6,7], 3);
betterMaxSubarraySum([1,5,2,3,9,7,3,5,7,6,5,8,7,2,1,4,6,7], 5);
