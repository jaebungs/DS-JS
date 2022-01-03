// Bubble sort with no swap checker to reduce the number of sorting
// Particularly on an array with almost sorted.
// if array is sorted(noSwap = true), break loop (no need to check)
function bubbleSortSwap(arr) {
    for (let i = arr.length; i >= 0; i--) {
        let noSwap = true;
        for (let j = 0; j < i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j+1] = temp;
                noSwap = false;
            }
            console.log(arr[j], arr[j+1])
        }
        if (noSwap) break;

    }
    return arr
}

// console.log(bubbleSortSwap([7, 1, 2, 3, 4, 5, 6]))
console.log(bubbleSortSwap([7, 1, 4, 2, 3, 5, 6]))
