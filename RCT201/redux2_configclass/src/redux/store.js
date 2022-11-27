import { compose, applyMiddleware, combineReducers,legacy_createStore as createStore } from "redux";
import {counterReducer} from "./counter/counter.reducer"
import {todoReducer} from "./todo/todo.reducer"
const createComposer=window.__REDUX_DEVTOOLS_EXTENSION__|| compose;
const rootReducer=combineReducers({
    counter:counterReducer,
    todoApp:todoReducer,
})
const logger=(state)=>(next)=>(action)=>{
    if(typeof action==="function"){
        return action(state.dispatch,state.getState)
    }
    return next(action);
}
export const store=createStore(rootReducer,applyMiddleware(logger))