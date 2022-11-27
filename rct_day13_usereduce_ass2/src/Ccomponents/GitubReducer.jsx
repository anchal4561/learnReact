

export const reducer =(state,action)=>{
    switch(action.type){
        case "FETCH_SUCCESS":
        return{
            loading:false,
            user:action.payload,
            error:""

        }  
        case "FETCH_ERROR" :
            return{
            loading:false,
            user:{},
            error:"error"
        }
        
        default: return state
    }
}


