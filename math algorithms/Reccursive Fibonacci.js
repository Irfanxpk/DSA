// problem- give a number 'n', find the first 'n' element in the fibonacci sequence

//IN Mathamatics , the fibonacci sequence is sequence of numbers in which each number is the sum of the previous two numbers
//The first two numbers are 0 and 1

// the first two numbers are 0 and 1.(0,1,1,2,3,5,8..)

// recursiveFibonacci(0) = 0
// recursiveFibonacci(1) = 1
// recursiveFibonacci(6) = 8

//  if F represents a function to calculate the Fibonacci number, then 
// F(n) = F(n-1) + F(n-2)
// And without a base case the loop wont stop 
// base case - F(0) = 0 and F(1) = 1

// F(2)= F(1) + F(0) 
// F(2)= 1 + 0
// F(2) = 1


function recursiveFibonacci(n){

    if(n<2){
        return n
    }
    return recursiveFibonacci(n-1) + recursiveFibonacci(n-2)
 
}

console.log(recursiveFibonacci(1)); //1
console.log(recursiveFibonacci(6)); //8
console.log(recursiveFibonacci(10)); //55

// Big-O - O(2^n)

//now we undertood that recursive in fibbonacci is exponential and it is O(2^n) which is not good
