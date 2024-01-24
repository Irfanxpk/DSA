function Bubble (arr){

    let swapped  
    let temp = 0
do {
    swapped = false
    let j = arr.length-1
    for (let i = 0; i < j;i++){
        if(arr[i] > arr[i+1]){
            temp = arr[i]
            arr[i]=arr[i+1]
            arr[i+1]= temp
            swapped = true
            j--
        }
    }
} while (swapped);

}

let arr = [-1,-3,10,-15,41,52]

Bubble(arr)

console.log(arr)

// this is Bubble sort , Worst case complexiy is O(n^2) while the array is in reverse order and the best case is O(n) while the array is already sorted