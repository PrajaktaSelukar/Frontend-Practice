// Implement a debouncing function in JavaScript that delays the execution
// of a given function until after a specified wait time has passed since the last call.

function debounce(fn, delay) {
    //code here
    let timeout;

    return function (...args) {
        clearTimeout(timeout);

        timeout = setTimeout(() => {
            fn.apply(this, args);
        }, delay);
    }
}
const fn = debounce((message) => {
    console.log(message);
}, 300);

// Simulate rapid function calls
fn("Hello");
fn("Hello, World!");
fn("Debounced!"); // Only this should log after 300ms

setTimeout(() => {
    fn("Debounced twice");
},400)

// output
// Debounced!
// Debounced twice