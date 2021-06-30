function validAnagram (word1, word2) {
    if (word1.length !== word2.length) return false
  
   let wordObj1 = {};
   let wordObj2 = {};
  
   for (let charactor of word1) {
      wordObj1[charactor] = (wordObj1[charactor] || 0) + 1
   }
   for (let charactor of word2) {
       wordObj2[charactor] = (wordObj2[charactor] || 0) + 1
   }
  
   for (let val in wordObj1) {
       if (!val in wordObj2) {
           return false
       }
       if (wordObj1[val] !== wordObj2[val]) return false
   }
   return true
  }
  
  
  console.log(validAnagram('aa', 'aa'))
  console.log(validAnagram('ade', 'eda'))
  console.log(validAnagram('mkeny', 'enykm'))
  console.log(validAnagram('eerwrr', 'rrew'))