export const square = x => x*x
export const pi = 3.1427
export const addition = (x,y) => x + y

// exports.addition = addition
// exports.square = square
// exports.pi = pi

export const variantFunctions = (which)=> {
    if(which === "multiply"){
        return function (x, y){
            return x * y
        }
    }else if(which === "divide"){
        return function(x, y){
            console.log(`when you divide ${x} by ${y} the remainder is ${x%y} and you get:`)
            return parseInt(x/y)
        }
    }
}
