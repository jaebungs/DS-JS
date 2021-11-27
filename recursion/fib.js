// return nth of the Fibonacci sequence 1 1 2 3 5 8...
// fib(4) // 3
// fib(10) // 55
// fib(28) // 317811
// fib(35) // 9227465
function fib(num) {
    let Fibonacci = [1, 1]
    let start = 0;
    if (num === 1 || num === 2) return 1

    function generateFib(num) {
        if (num === start) return 
        Fibonacci.push(Fibonacci[start] + Fibonacci[start + 1])
        start++;
        return generateFib(num)
    }
    generateFib(num)
    return Fibonacci[num - 1]
}

console.log(fib(4))
console.log(fib(10))
console.log(fib(28))
