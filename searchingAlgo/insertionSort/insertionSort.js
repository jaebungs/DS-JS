// build up a portion of sorted part on the left, place(insert) the new value in a suitable index of the sorted part.

// Pseudocode
// pick the second element in the array. (The first element is sorted, we assume)
// compare the value with the one before, swap if necessary.
// Continue to the next element and if the order is incorrect,
// iterate the sorted portion and place the element in the correct place.
// repeat until the array is sorted

function insertionSort(arr) {
    for (let i = 1; i < arr.length; i++) {
        let currentValue = arr[i]
        for (let j = i - 1; j >= 0 && arr[j] > currentValue; j--) {
            arr[j + 1] = arr[j]
            arr[j] = currentValue
        }
    }

    return arr;
}

console.log(insertionSort([4,5,3,1,6]))