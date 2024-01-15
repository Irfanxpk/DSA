// Problem - Give an integer 'n', find the factorial of that integer

//in mathematics, the factorial of a non-negative integer n, denoted by n!, is the product of all positive integers less than or equal to n

// Factorial of Zero is 1.
// factorial(5) = 5*4*3*2*1=120
// factorial(10) = 10*9*8*7*6*5*4*3*2*1=3628800

// 10! = 10*9*8*7*6*5*4*3*2*1   
//5! = 5*4*3*2*1                5*4!
//4! = 4*3*2*1                  4*3!
//3! = 3*2*1                    3*2!                            n! = n* (n-1)!
//2! = 2*1                      2*1!
//1! = 1                        1*0!
//0! = 1
function recursivefactorial(n) {

    if (n === 0) {
        return 1
    } 
    return n*(recursivefactorial(n-1))

}

console.log(recursivefactorial(5))//120
console.log(recursivefactorial(10))//3628800
console.log(recursivefactorial(15))//1307674368000

// Big-O = O(n!)