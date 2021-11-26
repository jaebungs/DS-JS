//  ex) [1,2,3,4,5], 2 => 9
//  ex) [1,2,3,4,5,2,4], 3 => 12
// nvm sum of consecutive 

function maxSum(array, number) {
    if (array.length < number) return null;

    let sum = 0;
    let currentSum = 0;

    for (let i = 0; i < number; i++) {
        sum += array[i];
    }
    currentSum = sum;
    for (let i = number; i < array.length; i++) {
        currentSum += array[i] - array[i - number]

        if (currentSum > sum) {
            sum = currentSum
        }
    }

    return sum
}

console.log(maxSum([100,200,300,400], 2))
console.log(maxSum([1,4,2,10,23,3,1,0,20], 4))
console.log(maxSum([3, -2, 7, -4, 1, -1, 4, -2, 1], 4))


