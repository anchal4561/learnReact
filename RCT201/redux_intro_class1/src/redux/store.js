import {legacy_createStore as createStore,compose} from "redux"

import { reducer } from "./reducer"

const createComposer=window.__REDUX_DEVTOOLS_EXTENSION__ ||compose
export const store= createStore(reducer,createComposer())