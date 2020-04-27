function productOfArray(arr) {

    function helper(array) {
        return array.length === 0 ? 1 : array[0] * helper(arr.slice(1))
    }

    helper(arr)
}

console.log(productOfArray([1,2,3]))