function validAnagram (word1, word2) {
    if (word1.length !== word2.length) return false

    let compareObj = {};

    for (char in word1) {
        compareObj[char] ? compareObj[char] += 1 : compareObj[char] = 1 
    }

    for (char in word2) {
        if (!compareObj[char]) return false
        compareObj[char] -= 1
        if (compareObj[char] < 0) {
        return false
        }
    }
    return true
}

  
  console.log(validAnagram('ade', 'eda'))
  console.log(validAnagram('mkeny', 'enykm'))
  console.log(validAnagram('eerwrr', 'rrew'))
  console.log(validAnagram('reatttt', 'retaettttt'))
  console.log(validAnagram('m', 'mmmm'))