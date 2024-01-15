// problem - give a positive integer 'n', find if it is a power of two or not

// An integer is a power of two if there exists an integer x such that n == 2^x

// isPowerOfTwo(1) = true(2^0)
// isPowerOfTwo(16) = true(2^4)
// isPowerOfTwo(3) = false

function isPowerOfTwo(n) {
 if (n < 1) {
    return false
 } while (n > 1) {
    if (n % 2 !== 0) {
        return false
    }
    n = n / 2
 }
 return true 

}

console.log(isPowerOfTwo(1))//true
console.log(isPowerOfTwo(16))//true
console.log(isPowerOfTwo(3))//false

// Big-O - O(log(n))


// this can be done in constant time in O(1) using bitwise operator
function isPowerOf2(n){
    if(n<1){
        return false
    }
    return (n&(n-1))===0
}

console.log(isPowerOf2(1))//true
console.log(isPowerOf2(16))//true
console.log(isPowerOf2(3))//false

// Big-O - O(1)
