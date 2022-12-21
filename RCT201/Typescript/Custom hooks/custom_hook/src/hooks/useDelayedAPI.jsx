
import { useEffect,useState } from "react";

const useDelayedAPI=(apiFn,initialData)=>{
    const [loading,setLoading]=useState(false);
    const [error,setError]=useState(false);
    const [data,setData]=useState(initialData);

    const execute=async(args)=>{
        setLoading(true)
        try{
            let data=await apiFn(args);
            setData(data);
        }
        catch(e){
            setError(true)
        }
        finally{
            setLoading(false)
        }
    }

    return{loading,error,data,execute}
}
export default useDelayedAPI;