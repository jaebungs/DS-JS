// Pesudocode
/*
    Pick one element in the array. Big O changes depends on this. Median value is the best, but we don't know the data set.
    We'll pick the FIRST element as the pivot value.
    Small values should go to the left. Bigger values should go to the right.

    1. Compare the first one and others by looping.
    2. Move the smaller number to the right side of the pivot, increase index
    [5 ,3(moved), 2(moved), 7 ,8]
    3. Swap the position between the pivot with the last moved value
    [2, 3 ,5 , 7, 8]
    4. repeat the same function on left side.
    5. when left is sorted, repeat the same procedure from step 1.
*/

function quickSortHelper(arr, start = 0, end = arr.length) {
    function swap (arr, i, j) {
        let temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp
    }
    let pivot = arr[start]
    let pivotIndex = start

    for (let i = start + 1; i < end; i++) {
        if (arr[i] < pivot) {
            pivotIndex++; 
            swap(arr, pivotIndex, i)
        }
    }

    if (pivotIndex !== start) {
        swap(arr, start, pivotIndex)
    }

    return pivotIndex
}

/* Pesudocode
    -Call the pivot helper
    -When helper returns the updated pivot index, recursively call the pivot helper on
    the subarray to the left of the index, and the subarray to the right of the index.
    Remember no new array! 
    -Base case is array length is 2 AND
    when first and the last elems are the same or last is bigger than the first one.
*/
function quickSort(arr, left = 0, right = arr.length) {
    let pivotIndex = quickSortHelper(arr, left, right)

    if (left < right) {
        quickSort(arr, left, pivotIndex) // left
        quickSort(arr, pivotIndex + 1, right) // right
    }

    return arr
}

// console.log(quickSortHelper([11, 2, 4, 9, 13, 52, 33, 10])) //[2, 4, 9, 10, 11, 13, 52, 33]
// console.log(quickSortHelper([8, 2, 19, 25, 4])) 
console.log(quickSort([8, 2, 19, 25, 4])) 
console.log(quickSort([11, 2, 4, 9, 13, 52, 33, 10])) 
