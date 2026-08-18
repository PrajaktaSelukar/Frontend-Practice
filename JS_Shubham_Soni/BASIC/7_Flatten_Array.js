// Write custom function for Array.flat() using both recursive and iterative approaches.

const flattenRecursive = (arr) => {
    //code here
    if(!Array.isArray(arr)) {
        throw new Error("Input must be an array");
    }
    let result = [];
    for(let item of arr) {
        if(Array.isArray(item)) {
            result.push(...flattenRecursive(item))
        } else {
            result.push(item)
        }
    }
    return result;
};

const resultRecursive = flattenRecursive(
    [[[[0]], [1]], [[[2], [3]]], [[4], [5]]]
); // [0, 1, 2, 3, 4, 5]

console.log(resultRecursive, "Recursive Result");

const flattenIterative = (arr) => {
    // code here
    if(!Array.isArray(arr)) {
        throw new Error("Input must be an array");
    }
    let result = [];
    let stack = [...arr];
    while(stack.length) {
        let ele = stack.pop();
        if(Array.isArray(ele)) {
            stack.push(...ele)
        } else {
            result.push(ele)
        }
    }
    return result.reverse();
};

// Test case for Iterative Approach
const resultIterative = flattenIterative([[[[0]], [1]], [[[2], [3]]], [[4], [5]]]); // [0, 1, 2, 3, 4, 5]
console.log(resultIterative, "Iterative Result");

// Write a function to flatten a nested array up to a given depth

const flattenRecursiveWithDepth = (arr, depth) => {
    if (!Array.isArray(arr)) {
        throw new TypeError("The first argument must be an array.");
    }
    let result = [];

    if (depth === 0) return arr;
    
    for (let ele of arr) {
        if (Array.isArray(ele) && depth > 0) {
            result.push(...flattenRecursiveWithDepth(ele, depth - 1));
        } else {
            result.push(ele);
        }
    }
    return result;
};

const result = flattenRecursiveWithDepth(
    [[[[[0]]], [1]], [[[2], [3]]], [[4], [5]]], 1
);
console.log(result);