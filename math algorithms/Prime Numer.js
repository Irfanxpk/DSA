// Problem- Give a natural number 'n', find if it is a prime number or not

// A prime number is a natural number greater than 1 that has no positive divisors other than 1 and itself

// isPrime(5) = true(1*5 or 5*1)
// isPrime(6) = false(1*6 or 2*3 or 3*2 or 6*1)
//isPrime(4) = false(1*4 or 2*2 or 4*1)

function isPrime(n){
if(n<2){
    return false
}
for(let i=2;i<n;i++){
    if(n%i===0){
        return false
    }
}
return true
}

console.log(isPrime(5))//true
console.log(isPrime(6))//false
console.log(isPrime(4))//false

//Big-O - O(n)

//optimized solution - O(sqrt(n))

//optimized Primality Test - Integers larger than square root do not need to be checked because they , Whenever 'n=a*b' , one of two factors 'a' and 'b' 
// is less than or equal to the square root of 'n'


//n=24 , a=4 and b=6 
// the square root of 24 is 4.999999999999998
// 4 is less than  4.999999999999998
//a is less than the sque root of n 
// n=35 , a=5 and b=7
// the square root of 35 is 5.999999999999999
// 5 is less than the square root of 35
// a is less than the square root of 35