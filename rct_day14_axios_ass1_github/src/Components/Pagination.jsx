import React  from "react";

const Pagination=({pageChange,currentPage,totalItem})=>{
    return(
        <div  className="App" style={{justifyContent:"center"}}>
            <button disabled={currentPage===1} 
            onClick={()=>pageChange(-1)}>
                PREV
            </button>
            <button>{currentPage}</button>
            <button disabled={currentPage===Math.ceil(totalItem/12)} 
            
            onClick={()=>pageChange(1)}>
                NEXT
            </button>
        </div>
    )
}


export default Pagination;