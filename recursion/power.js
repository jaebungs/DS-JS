// power(2,0) => 1
// power(2, 2) => 4
// power(2, 4) => 16
// mimic Math.pow()

function power(num, exponent) {
    if (exponent === 0) return 1;

    return num * power(num, exponent - 1);
}

console.log(power(2,0))
console.log(power(2,2))
console.log(power(2,4))
