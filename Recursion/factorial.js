function factorial(num){
    if(num === 0) return 1

    function helper(num) {
        return num === 1 ? num * 1 : num * helper(num - 1)
    }

    return helper(num)
}

console.log(factorial(0))