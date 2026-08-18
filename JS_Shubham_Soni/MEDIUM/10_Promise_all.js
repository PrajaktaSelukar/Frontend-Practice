function myPromiseAll(taskList) {
    //code here
    if (!Array.isArray(taskList)) {
        return reject(new TypeError("Argument must be an iterable/array"));
    }

    if (taskList.length === 0) {
        return resolve([]);
    }

    let completed = 0;
    let results = new Array(taskList.length);
    
    return new Promise((resolve, reject) => {
        for(let i = 0; i < taskList.length; i++) {
            Promise.resolve(taskList[i])
                .then((data) => {
                    results[i] = data;
                    completed++;

                    if(completed === taskList.length) {
                        resolve(results)
                    }
                })
                .catch((error) => {
                    reject(error)
                })
        }
    })
}

// Success case 
const successTasks = [
    new Promise((resolve) => setTimeout(() => resolve('Task 1'), 1000)),
    new Promise((resolve) => setTimeout(() => resolve('Task 2'), 500)),
    new Promise((resolve) => setTimeout(() => resolve('Task 3'), 200)),
    "Test",
    3
];

myPromiseAll(successTasks)
    .then((result) => console.log(result)) // Output: ['Task 1', 'Task 2', 'Task 3', "Test", 3]
    .catch((error) => console.error(error));

// Error case 
const errorTasks = [
    new Promise((resolve) => setTimeout(() => resolve('Task 1'), 1000)),
    new Promise((resolve, reject) => setTimeout(() => reject('Error'), 500))
];
myPromiseAll(errorTasks)
    .then((result) => console.log(result)) 
    .catch((error) => console.error(error)); // Output: Error