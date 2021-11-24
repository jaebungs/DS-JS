// ex) same(182, 281) - true
//     same(324, 526) - false
function sameFrequency(num1, num2) {
    const stringNum1 = num1.toString();
    const stringNum2 = num2.toString();
    if (stringNum1.length !== stringNum2.length) return false;
    let compareObj = {};

    for (let i = 0; i < stringNum1.length; i++) {
        let number = stringNum1[i];

        !compareObj[number] ? compareObj[number] = 1 : compareObj[number]++;
    }
    for (let j = 0; j < stringNum2.length; j++) {
        let number = stringNum2[j];

        if (!compareObj[number]) {
            return false
        } else {
            compareObj[number]--;
            if (compareObj[number] < 0) {
                return false
            }
        }
    }
    return true

}

console.log(sameFrequency(124, 412));
console.log(sameFrequency(32523, 52233));
console.log(sameFrequency(111711511122222, 111151111722222));

console.log(sameFrequency(36347, 52233));
