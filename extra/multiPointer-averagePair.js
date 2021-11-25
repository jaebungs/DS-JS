// sorted array
// If there is a pair of values that meets the target averge, return true.
// ex) averagePair([1,2,3], 2.5) true
// ex) averagePair([1,0,3], 4) false

function averagePair(array, target) {
    let firstP = 0;
    let secondP = array.length - 1;
    let answer;

    while (firstP < secondP) {
        let average = (array[firstP] + array[secondP]) / 2;
        if (average === target) {
            answer = true;
            console.log(answer);
            return answer
        } else if (average > target) {
            secondP--;
        } else {
            firstP++;
        }
    
    }
    answer = false;
    console.log(answer);
    return answer
}

averagePair( [1, 2, 3], 2.5);
averagePair( [1, 3, 3, 5, 6, 7, 10, 12, 19], 8);
averagePair( [1,5,7,10], 8);
