const createAsyncTask = () => {
    const randomVal = Math.floor(Math.random() *10);

    return new Promise((resolve, reject) =>{
        setTimeout(() => {
            if(randomVal > 5) {
                resolve(randomVal)
            } else {
                reject(randomVal)
            }
        }, randomVal*100)
    })
}
const tasks = [
    createAsyncTask,
    createAsyncTask,
    createAsyncTask,
    createAsyncTask,
    createAsyncTask
]

const taskRunnerIterative = async (tasks, cb) => {
    //write code here
    let results = [];
    let errors = [];

    for(let task of tasks) {
        try {
            let response = await task();
            results.push(response);
        } catch (err) {
            errors.push(err);
        }
    }
    cb(results, errors);
}
const taskRunnerRecursion = (tasks, cb) => {
    //write code here
    let results = [];
    let errors = [];

    const helper = (ptr = 0) => {
        if(ptr === tasks.length) {
            cb(results, errors);
            return;
        }
        tasks[ptr]()
            .then((data) => {
                results.push(data);
            }).catch((data) => {
                errors.push(data);
            }).finally(() => {
                helper(++ptr); // or helper(ptr + 1), also helper(ptr++) causes indefinite loop
            })
    }
    helper();
}

taskRunnerIterative(tasks, (result, err) => console.log(result, err))
taskRunnerRecursion(tasks, (result, err) => console.log(result, err))
