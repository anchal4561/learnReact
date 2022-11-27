function reducer(state,action){
    // if(action.type==="INCREMENT_COUNT"){
    //     return state+1;

    // }
    //  if(action.type==="DECREMENT_COUNT"){
    //     return state-1;

    // }
    // if(action.type==="RESET_COUNT")
    // {
    //     return 0;
    // }
    // return state;
    switch(action.type){
        //Manage object
        case 'INCREMENT_COUNT':
            return{
                ...state,
                count:state.count+1
            }
            
        case "DECREMENT_COUNT":
            return{
                ...state,
                count:state.count-1
            }
        case "RESET_COUNT":
            return{
                ...state,
                count:0
            }
        case "INCREMENT_COUNT_BY_VALUE":
            return{
                ...state,
               count: state.count +action.payload
            } 

        case "DECREMENT_COUNT_BY_VALUE":
            return{
                ...state,
               count: state.count -action.payload
            } 
        default:
            return state;
    }
}
export default reducer;