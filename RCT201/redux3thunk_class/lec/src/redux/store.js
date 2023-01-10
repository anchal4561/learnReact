import {legacy_createStore,compose,applyMiddleware,combineReducers} from "redux"
//middleware thunk used for way to deal promise to pass inside dispatch 
import thunk from "redux-thunk"
//use of thunk -allow us to asynchronus function call inside dispatch method  
import { authReducer } from "./auth/auth.reducer"
import { feedReducer } from "./feed/feed.reducer"
import { postReducer } from "./post/post.reducer"

const rootReducer=combineReducers({
    auth:authReducer,
    feed:feedReducer,
    post:postReducer,
})

const createComposer=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||compose;
export const store=legacy_createStore
(rootReducer,createComposer(applyMiddleware(thunk)))