// How can you resolve task dependencies in a directed acyclic graph
// and execute tasks in parallel with a concurrency limit?

function taskA(done) {
    console.log("Task A Completed");
    done();
}
function taskB(done) {
    setTimeout(() => {
        console.log("Task B Completed");
        done();
    }, 2000);
}
function taskC(done) {
    setTimeout(() => {
        console.log("Task C Completed");
        done();
    }, 200);
}
function taskD(done) {
    console.log("Task D Completed");
    done();
}
function taskE(done) {
    console.log("Task E Completed");
    done();
}
const asyncGraph = {
    e: {
        dependency: ["c", "d"],
        task: taskE,
    },
    c: {
        task: taskC,
    },
    d: {
        dependency: ["a", "b"],
        task: taskD,
    },
    a: {
        task: taskA,
    },
    b: {
        task: taskB,
    },
};
// e must be resolved before c & d
// c no dependency
// d must be resolved before a & b
// a no dependency
// b no depedency
// first resolve dependency and then run task in parallel.
// taskOrder -> pass an array with resolved dependency

function resolveDependencies(graph) {
    const graphNodes = Object.keys(graph);
    const adjList = new Map()
    const inDegree = new Map()
    const topologicalOrder = []

    // Build adjacency list and in-degree map
    for(let node of graphNodes) {
        const { dependency } = graph[node] || {};
        for(let dep of dependency || []) {
            const neighbours = adjList.get(dep) || []
            neighbours.push(node);
            adjList.set(dep, neighbours);
        }
        inDegree.set(node, (dependency ? dependency.length : 0))
    }

    // Perform topological sort
    let queue = [];
    for(let node of graphNodes) {
        //start adding nodes which has no dependency
        if(inDegree.get(node) === 0) {
            queue.push(node);
        }
    }

    while(queue.length) {
        const node = queue.shift();
        topologicalOrder.push(node);

        const neighbours = adjList.get(node) || [];
        for(let neighbour of neighbours) {
            inDegree.set(neighbour, inDegree.get(neighbour) - 1);
            if(inDegree.get(neighbour) === 0) {
                queue.push(neighbour)
            }
        }
    }
    return topologicalOrder;
}

//Then execute task in parallel
function executeTasksInParallel(order, graph, limit = 2) {
    let activeTasks = 0;
    let index = 0;

    return new Promise((resolve) => {
        const results = [];
        function executeNext() {
            if(index >= order.length && activeTasks === 0) {
                resolve(results);
                return
            }
            while(index < order.length && activeTasks < limit) {
                const currentTask = order[index];
                index++;
                activeTasks++;

                graph[currentTask].task(() => {
                    console.log(`${currentTask} completed`)
                    activeTasks--;
                    executeNext()
                })
            }
        }
        executeNext();
    })
}

const taskOrder = resolveDependencies(asyncGraph)
executeTasksInParallel(taskOrder, asyncGraph, 2).then(() => {
    console.log("All tasks completed.");
});
// Output
// Task A Completed
// Task C Completed
// Task D Completed
// Task E Completed
// Task B Completed
// All tasks completed.