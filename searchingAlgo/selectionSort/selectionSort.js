// 1. From beginning to the end.
// 2. it places the smallest value to sorted position.

// pseudocode
// - store the smallest value you've seen
// - compare the smallest value with value next to it
// - update the minimum value if there is a value smaller
// - If the minimum is not the index we started, swap the two value
// repeat the process until the end of the array 

function selectionSort(arr) {
    for (let i = 0; i < arr.length; i++) {
        let minimum = i
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[i]) {
                minimum = j
            }
        }
        if (minimum !== i) {
            [ arr[i], arr[minimum] ] = [ arr[minimum], arr[i] ] //ES2015 array value swap
        }
    }

    return arr;
}

console.log(selectionSort([4, 2, 1, 5, 7, 6]))