function bubbleSort(arr) {
    for(let i = arr.length; i>0; i--) {
        for(let j=0; j<i; j++) {
            console.log(arr, arr[j], arr[j+1])
            if(arr[j] > arr[j+1]) {
                let tmp = arr[j]
                arr[j] = arr[j+1]
                arr[j+1] = tmp
            }
        }
    }

    return arr
}

console.log(bubbleSort([2,1,5,19,10,4,11,12,32,17]))