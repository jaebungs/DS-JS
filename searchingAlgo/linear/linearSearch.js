function linearSearch(array, target){
    // add whatever parameters you deem necessary - good luck!
    for (let i = 0; i < array.length; i++) {
        if (array[i] === target) return i
      }
      return -1
  }

  linearSearch([1, 2, 100], 100);
  