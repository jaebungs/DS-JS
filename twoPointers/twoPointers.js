function pointer(value) {
    let left = 0;
    let right = value.length-1;
  
    for (let i=0; i < value.length; i++) {
      while (left < right) {
        let total = value[left] + value[right]
        if (total === 0) {
          return [value[left], value[right]]
        } else if ( total > 0 ) {
          right--
        } else {
          left++
        }
      }
    }
  }
  
  console.log(pointer([-5, -3, -1, 0, 2, 4, 5]))
  console.log(pointer([-5, -3, -1, 0, 2, 4, 8]))