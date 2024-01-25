function insertionSort (arr){

    for(let i = 1;i<arr.length;i++){

        let numberToinsert = arr[i]
        let j = i-1
        while(j >= 0 && arr[j] > numberToinsert){
            arr[j+1] = arr[j]
            j = j-1 
        }
        arr[j+1] = numberToinsert
    }

}

let arr = [8,5,-5,20,10] 


insertionSort(arr)
console.log(arr) 

// time complixity O(n^2)

