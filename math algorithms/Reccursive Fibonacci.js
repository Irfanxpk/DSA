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


// function recursiveFibonacci(n){

//     if(n<2){
//         return n
//     }
//     return recursiveFibonacci(n-1) + recursiveFibonacci(n-2)
 
// }

// console.log(recursiveFibonacci(1)); //1
// console.log(recursiveFibonacci(6)); //8
// console.log(recursiveFibonacci(10)); //55

// Big-O - O(2^n)

//now we undertood that recursive in fibbonacci is exponential and it is O(2^n) which is not good


function fibo(n){
    if(n < 2){
        return n 
    }

    return fibo(n-1) + fibo(n-2)
}

console.log(fibo(6))

function sumof(arr , index = 0){
    if(index === arr.length){
        return 0
    }

    return arr[index] + sumof(arr,index + 1)

}

let arr = [1,2,3,4,6]
console.log(sumof(arr))



function BinarySearch(arr , target){


    return Search(arr , target , left = 0 , arr.length-1)

}

function Search(arr ,target , left  , right){

    if (left > right){
        return -1
    }

    let mid = Math.floor((arr.lenght)/2)
    if(arr[mid] === target){
        return true
    }

    if(mid > target){
        Search(arr , target , mid + 1 ,right)
    }else{
        Search(arr , target , left , mid - 1)
        
    }

}

let arr1=[1,2,3,5,6]
console.log(BinarySearch(arr1 , 6))

function BinarySearch(arr, target) {
    return Search(arr, target, left = 0, arr.length - 1);
  }
  
  function Search(arr, target, left, right) {
    if (left > right) {
      return -1; // Target not found
    }
  
    let mid = Math.floor((left + right) / 2);
    if (arr[mid] === target) {
      return mid; // Target found, return the index
    }
  
    if (arr[mid] < target) {
      return Search(arr, target, mid + 1, right);
    } else {
      return Search(arr, target, left, mid - 1);
    }
  }
  
  let arr2 = [1, 2, 3, 5, 6];
  console.log(BinarySearch(arr2, 5)); // Output: 3
  