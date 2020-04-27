// power(2,0) // 1
// power(2,2) // 4
// power(2,4) // 16

function power(num1, num2){
    
    if(num2 === 0) return 1
    
    function helper(counter) {
        if(counter === 1) return 1 * num1
        
        counter--
        return num1 * helper(counter)
    }

    return helper(num2)
}

console.log(power(3, 1))
console.log(power(3, 2))
console.log(power(2, 10))