//problem - give a number 'n', find the first 'n' element in the fibonacci sequence

//IN Mathamatics , the fibonacci sequence is sequence of numbers in which each number is the sum of the previous two numbers
//The first two numbers are 0 and 1

// fibbonacci(2) = [0,1]
// fibbonacci(3) = [0,1,1]
// fibbonacci(7) = [0,1,1,2,3,5,8]

 function fibbonacci(n){
     const fib = [0,1]
     for(let i=2;i<n;i++){
         fib[i] = fib[i-1] + fib[i-2]
     }
     return fib
 }  

 console.log(fibbonacci(7))//[0,1,1,2,3,5,8]
 console.log(fibbonacci(10)) //[0,1,1,2,3,5,8,13,21,34]
 console.log(fibbonacci(15)) //[0,1,1,2,3,5,8,13,21,34,55,89,144,233,377]

 //Big-O - O(n)

  