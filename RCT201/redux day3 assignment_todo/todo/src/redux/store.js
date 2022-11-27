import {legacy_createStore,combineReducers,applyMiddleware,compose} from "redux"
import { todoReducer } from "./todo/todo.reducer"

const createComposer=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const rootReducer=combineReducers({
    todoApp:todoReducer
})

const logger=(state)=>(next)=>(action)=>{
    if(typeof(action)==="function"){
        return action(state.dispatch,state,getState)
    }
    return next(action)
}

export const store=legacy_createStore(rootReducer,createComposer(applyMiddleware(logger)))