// Implement basic throttling funtion in js?

const throttleFnTimeBased = (fn, delay) => {
    //code here
    let lastExecuted = null;
    let timerId = null;

    return function (...args) {
        if (!lastExecuted) {
            fn.apply(this, args);
            lastExecuted = Date.now();
        } else {
            // remove previous timer
            clearTimeout(timerId);
            
            // create new timer remaning time
            timerId = setTimeout(() => {
                if (Date.now() - lastExecuted >= delay) {
                    fn.apply(this, args);
                    lastExecuted = Date.now();
                }
            }, delay - (Date.now() - lastExecuted));
        }
    }
}

//Test
const throttledFunction = throttleFnTimeBased((msg) => {
    console.log(msg, Date.now());
}, 2000);

throttledFunction("Call 1"); // Executes immediately
throttledFunction("Call 2"); // Throttled 
throttledFunction("Call 3"); // Throttled 

setTimeout(() => throttledFunction("Call 4"), 1100);
// Executes after 1.1 seconds

setTimeout(() => throttledFunction("Call 5"), 900);
// throttle

setTimeout(() => throttledFunction("Call 6"), 2100);
// Executes after 2.1 seconds

// Option 1: Flag-Based Throttling (Simplest & Most Common in Interviews)
const throttle = (fn, delay) => {
    let inThrottle = false;

    return function (...args) {
        if (!inThrottle) {
            // 1. Execute function immediately
            fn.apply(this, args);
            inThrottle = true;

            // 2. Lock execution for the duration of 'delay'
            setTimeout(() => {
                inThrottle = false;
            }, delay);
        }
    };
};

// Option 2: Time-Based Throttling (Preserving the Final Trailing Call)
const throttleFnTimeBased = (fn, delay) => {
    let lastExecuted = 0;
    let timerId = null;

    return function (...args) {
        const now = Date.now();
        const remainingTime = delay - (now - lastExecuted);

        // If delay has passed, execute immediately
        if (remainingTime <= 0) {
            if (timerId) {
                clearTimeout(timerId);
                timerId = null;
            }
            fn.apply(this, args);
            lastExecuted = now;
        } 
        // If within delay and no timer is waiting, schedule trailing call
        else if (!timerId) {
            timerId = setTimeout(() => {
                fn.apply(this, args);
                lastExecuted = Date.now();
                timerId = null;
            }, remainingTime);
        }
    };
};