// Binary only works on a SORTED array.
//binarySearch([1,2,3,4,5,6], 2) // 1
//binarySearch([1,2,3,4,5,6], 5) // 4

function binarySearch(array, target) {
    let start = 0;
    let end = array.length - 1;
    let middle = Math.floor((start + end) / 2) 

    while (array[middle] !== target && start <= end) {
        if (array[middle] < target) {
            start = middle + 1
        } else {
            end = middle - 1
        }

        middle = Math.floor((start + end) / 2)
    }

    if (array[middle] === target) {
        return middle;
    }
    return -1
}

console.log(binarySearch([1,2,3,4,5,6], 2))
console.log(binarySearch([1,2,3,4,5,6], 5))
console.log(binarySearch([1,2,3,4,5,6], 7))
