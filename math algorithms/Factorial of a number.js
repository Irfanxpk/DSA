//Give an integer 'n', find the factorial of that integer

//in mathematics, the factorial of a non-negative integer n, denoted by n!, is the product of all positive integers less than or equal to n

//Factiorial of 0 is 1
//factorial(5) = 5*4*3*2*1
//factorial(10) = 10*9*8*7*6*5*4*3*2*1

function factorial(n) {
let result = 1;
for (let i = 2; i <= n; i++) {
    result *= i;
}
return result
}

console.log(factorial(5))//120
console.log(factorial(10))//3628800
console.log(factorial(15))//1307674368000

// Big-O = O(n) , linear time
