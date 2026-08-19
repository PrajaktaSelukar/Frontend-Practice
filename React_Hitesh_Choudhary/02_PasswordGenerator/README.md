# Password Generator using React Hooks

## What to Implement
- Generate random password
- Implement slider to change length, toggle for Number and special Characters without refreshing page
- Implement Copy button to copy the generated password

## Notes
- If function is called through multiple parameter changes, it's better to optimise and memoize
- used copy to copy particular targeted element

## Concepts
- UseState, UseRef, UseMemo, UseEffect, UseCallback

### useState
- useState is the most commonly used hook. allows us to track state in a functional component. State generally refers to data or properties that need to be tracking in an application.

### Side effects
- Side effects: A React side-effect occurs when we use something that is outside the scope of React.js in our React components such as
- Web APIs like localStorage, setTimeout
- Native DOM methods like document.getElementById
These side effects reach outside functional scope of a React component (such as data fetching, directly updating the DOM, and timers.)

### useEffect
useEffect : This hook allows us to perform side effects in our components. First argument is function, second is dependency array. The dependency array helps decide when useEffect should run, as shown below
```
useEffect(() => {
  //Runs on every render as no dependency array
});

useEffect(() => {
  //Runs only on the first render
}, []);

useEffect(() => {
  //Runs on the first render
  //And any time any dependency value changes
}, [prop, state]);
```

### useMemo
useMemo : This hook caches (memoizes) a computed value and recomputes it only when required. The expensive function which comptues the value will only run when its dependencies have changed.
```
const expensiveCalculation = (num) => {
  console.log("Calculating...");
  for (let i = 0; i < 1000000000; i++) {
    num += 1;
  }
  return num;
};

const calculation = useMemo(() => expensiveCalculation(count), [count]);

// Runs only when count changes, where count is a stae variable whose value
// changes using increment/decrement button
```

### useCallback
useCallback : This hook caches (memoizes) the function and recreates it only when required. The array of dependencies is important, it helps React understand when to return the memoized function and when to re-create it.

### useRef
useRef will keep a value consistent over renders without triggering any state dependent value or effect. useRef is used for following purposes
- Access DOM elements