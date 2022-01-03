// 1. From beginning to the end.
// 2. it places the smallest value to sorted position.

// pseudocode
// - store the smallest value you've seen
// - compare this value with other values
// - update the minimum value if there is a value smaller
// - If the minimum is not the index we started, swap the two value
// repeat the process until the end of the array 

function selectionSort(arr) {
    for (let i = 0; i < arr.length; i++) {
        let minimum = arr[i];
        let newMinIndex;
        for (let j = i; j < arr.length; j++) {
            if (arr[j] < minimum) {
                minimum = arr[j];
                newMinIndex = j
            }
        }
        if (minimum !== arr[i] && newMinIndex) {
            [ arr[i], arr[newMinIndex] ] = [ arr[newMinIndex], arr[i] ] //ES2015 array value swap
        }
    }

    return arr;
}

console.log(selectionSort([4, 2, 1, 5, 7, 6]))