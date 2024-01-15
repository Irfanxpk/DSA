//problem - Geven a sorted array of 'n' elements and a target element 't', find the index of't' in the array. return -1 if not found

//arr=[-5,2,10,4,6] = 10 -> Should return 2
//arr=[-5,2,10,4,6] = 20 -> Should return -1
//arr=[-5,2,10,4,6] = 4 -> Should return 3

function binarySearch(arr, target) {
    let left = 0
    let right = arr.length - 1
    while (left <= right) {
        let mid = Math.floor((left + right) / 2)
        if (arr[mid] === target) {
            return mid
        } else if (arr[mid] < target) {
            left = mid + 1
        } else {
            right = mid - 1
        }
    }
    return -1
}

console.log(binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 10))//9
console.log(binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 20))//-1
console.log(binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 4))//3
 
// Big-O - O(log(n))