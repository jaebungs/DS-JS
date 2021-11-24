// ex) areThereDuplicate(1, 2, 3) false
// ex) areThereDuplicate(1, 2, 2, 3) true

function areThereDuplicate(...args) {
    let firstPointer = 0;
    let secondPointer = 1;
    let answer;
    args.sort();

    for (let i = 0; i < args.length - 1; i++) {
        if (args[firstPointer] !== args[secondPointer]) {
            firstPointer++;
            secondPointer++;
        } else {
            answer = true;
            console.log(answer)
            return answer
        }
    }
    answer = false;
    console.log(answer)
    return answer
}

areThereDuplicate(1, 2, 5, 5)
areThereDuplicate(1, 2, 5)
areThereDuplicate('a', 'b', 'c')
areThereDuplicate('a', 'b', 'c', 'a')
areThereDuplicate('a', 'b', 'c', 'a', 'c')

