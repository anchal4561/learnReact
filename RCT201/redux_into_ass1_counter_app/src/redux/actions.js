import {INC,DEC,MUL,DIV} from "./actionTypes"

export const increment=(payload=1)=>({type:INC,payload})
export const decrement=(payload=1)=>({type:DEC,payload})
export const multiply=(payload=1)=>({type:MUL,payload})
export const divide=(payload=1)=>({type:DIV,payload})