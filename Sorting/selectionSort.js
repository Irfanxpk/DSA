
const swap = (arr , a , b)=> [arr[a] , arr[b]] = [arr[b] , arr[a]] 

const selection = arr =>{

    arr.forEach((items , i) => {
        
        let min = i

        for(let j = i + 1; j< arr.length;j++){
            if(arr[j] < arr[min]) min = j
        }

        swap(arr,i,min)


    });
return arr

}


let arr = [1,-2,5,-8,6,6,9]
console.log(selection(arr))