// Problem - given an array of 'n' elements and a target element 't', find the index of't' in the array. return -1 if not found

// arr = [-5,2,10,4,6] = 10 -> Should return 2
// arr = [-5,2,10,4,6] = 20 -> Should return -1
// arr = [-5,2,10,4,6] = 4 -> Should return 3

//  Linear Search pseudocode :-
//  1. Start looping from the beginning of the array move towards the end.
// 2. At each iteration check if the element at the current position is equal to the target , if yes return the index
// 3. If we never find the element return -13

function linearSearch(arr, target){
for(let i=0; i<arr.length; i++){
    if(arr[i]===target){
        return i
    }
}

return -1

}

console.log(linearSearch([1,2,3,4,5,6,7,8,9,10], 10))//9
console.log(linearSearch([1,2,3,4,5,6,7,8,9,10], 20))//-1
console.log(linearSearch([1,2,3,4,5,6,7,8,9,10], 4))//3

//Big-O - O(n)