function Item(props){
const {id,title,price,quantity,addItemQty,minusItemQty}=props;

return(
    <div className="main">
        <p>{title}</p>
        <p>₹ {price}</p>
        <div>
            <button disabled={quantity===0} onClick={()=>minusItemQty(id)} >-</button>
            <p>{quantity}</p>
            <button onClick={()=>addItemQty(id)} >+</button>
        </div>
        

    </div>
)


}
export default Item;