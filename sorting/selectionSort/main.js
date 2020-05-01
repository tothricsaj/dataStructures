function selectionSort(arr) {
    for(let i=0; i<arr.length; i++) {
        let lowest = i
        for(let k=i+1; k<arr.length; k++) {
            if(arr[lowest] > arr[k]) lowest = k
        }
        if(i !== lowest) [arr[lowest], arr[i]] = [arr[i], arr[lowest]]
    }
    return arr
}

console.log(selectionSort([3,2,5,11,8,12]))