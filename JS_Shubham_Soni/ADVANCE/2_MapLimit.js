// Question link - https://leetcode.com/discuss/interview-experience/2074287/uber-frontend-phone-screen

// inputs: An array containing the inputs to be processed.
// maxlimit: The maximum number of concurrent operations that can be executed at a time.
// iterateeFn: An asynchronous function that is called for each input to generate the corresponding output. It accepts two arguments:
// input: The current input being processed.
// callback: A function that is invoked when the processing of the input is 
// complete. It receives the processed output as its argument.
// callback: A function that is called once all inputs have been processed.
// It receives an array of the final outputs.

function getNameById(id, callback) {
    const randomRequestTime = Math.floor(Math.random() * 100) + 2000;
    console.log("randomRequestTime", randomRequestTime, id);
    
    setTimeout(() => {
        callback("User" + id)
    }, randomRequestTime);
 }
 
function mapLimit(inputs, maxLimit, iterateeFn, callback) {
    // write solution
    let currentPtr = 0;
    let currentLimit = 0;
    const results = [];

    const processNext = (id) => {
        results.push(id);
        currentLimit--;

        if(inputs.length === results.length) {
            callback(results)
        }

        if(currentPtr < inputs.length && currentLimit < maxLimit) {
            iterateeFn(inputs[currentPtr++], processNext);
            currentLimit++;
        }
    }

    while(currentPtr < inputs.length && currentLimit < maxLimit) {
        iterateeFn(inputs[currentPtr++], processNext);
        currentLimit++;
    }
}
 
mapLimit([1,2,3,4,5], 3, getNameById, (allResults) => {
    console.log('output:', allResults)
    // ["User1", "User2", "User3", "User4", "User5"]
})