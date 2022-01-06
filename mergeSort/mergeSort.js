// pesudocode
// loop over each array. each array is sorted.
// if the value in the first array is smaller than the second array,
// move the value in the first array to the result array and move the index as well.
// vice versa
function mergeFunction(arr1, arr2) {
    let result = [];
    let i = 0;
    let j = 0;

    while (i < arr1.length && j < arr2.length) {
        if (arr1[i] < arr2[j]) {
            result.push(arr1[i])
            i++;
        } else {
            result.push(arr2[j])
            j++;
        }
    // what about equal?
    }

    while (i < arr1.length) {
        result.push(arr1[i])
        i++;
    }
    while (j < arr2.length) {
        result.push(arr2[j])
        j++
    }
    return result;
}

// console.log(mergeFunction( [1, 3, 5, 10], [2, 4, 16, 50, 100]));

// pesudoecode
// Break the array until the array has one ore empty element
// use the code I wrote above to merge until the full length
// once array is merged back together return the array.
// Recusision

function mergeSort(arr) {
    if (arr.length <= 1) return arr;
    let mid = Math.floor(arr.length / 2);
    let left = mergeSort(arr.slice(0, mid));
    let right = mergeSort(arr.slice(mid));
    return mergeFunction(left, right);
}

console.log(mergeSort( [1, 6, 2 , 4, 19, 11, 15 ,16, 17] ));