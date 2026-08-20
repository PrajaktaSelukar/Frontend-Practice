# Todo App using Redex Toolkit

### How to integrate store
- configureStore()
- createReducer()
- createAction()
- createSlice()

### Summary
- Redux and react-redux is different thing.
- Redux is core library and react-redux is implementation to do wiring so that Redux and React can interact with each other.
- Redux had more boilerplate code, so redux-toolkit was introduced.
- Start by creating store. Generally an application should have only one store (single source of truth), but sometimes people do keep more than one but it's not a good practice
- First you nedd configureStore which has object
```
import { configureStore } from '@reduxjs/toolkit'
import todoReducer from '../features/todo/todoSlice'

export const store = configureStore({
    reducer: todoReducer
})
```

- Then make slice in features which requires name, initialState and reducers
- Export actions and reducer

- In components, we either take values (useSelector) or update values (useDispatch)