// Implement _.gropuBy from Loadsh library

function groupBy(collection, property) {
    //code here
    // Ensure the collection is valid
    if (typeof collection !== 'string' && !Array.isArray(collection) ) {
        return {};
    }
}

// Test with invalid input
const result1 = groupBy(1);
console.log(result1); // Output: {}

// Group by a custom function
const result2 = groupBy([6.1, 2.4, 2.7, 6.8], Math.floor);
console.log(result2);
// Output: { "2": [2.4, 2.7], "6": [6.1, 6.8] }

// Group by string property (length of the string)
const result3 = groupBy(["one", "two", "three"], "length");
console.log(result3);
// Output: { "3": ["one", "two"], "5": ["three"] }

// Group by deep property path
const result4 = groupBy([{ a: { b: { c: 1 } } }, { a: { b: { c: 2 } } }],
"a.b.c");
console.log(result4);
// Output: { "1": [{ a: { b: { c: 1 } } }], "2": [{ a: { b: { c: 2 } } }] }