// How would you implement a function for infinite currying that accumulates 
// values passed in successive calls and returns the result when called without arguments?

function curry(fn) {
    //code here
    return function(args2) {
        if(!args2) {
            return fn
        }
        return curry(fn + args2)
    }
}

const result = curry(1)(2)(3)(4)()
console.log(result)

// Follow up Question

// Implement a currying function that allows partial application of arguments
// for a given multi-parameter function?

function currying(fn) {
    return function curried(...args) {
        if(args.length >= fn.length) {
            return fn.apply(this, args)
        } else {    
            return function(...args2) {
                return curried.apply(this, args.concat(args2))
            }
        }
    }
}

function multiply(a, b, c, d) {
    return a * b * c * d;
}
const curriedMultiply = currying(multiply);

console.log(curriedMultiply(1)(2)(3)(4)); 
console.log(curriedMultiply(1, 2)(3, 4)); 
console.log(curriedMultiply(1)(2, 3)(4));