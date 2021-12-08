// capitalizeFirst(['car','taco','banana']); => ['Car','Taco','Banana']
function capitalizeFirst(arr) {
    if (arr.length === 0) return
    let convertedArray = [];

    function capitalizeHelper(arr) {
        if (arr.length === 0) return
        let string = arr[0]
        let capitalized = string.charAt(0).toUpperCase() + string.slice(1);
        convertedArray.push(capitalized)
        return capitalizeFirst(arr.slice(0, -1))
    }

    capitalizeHelper(arr)
    return convertedArray
}

console.log(capitalizeFirst(['car','taco','banana']))