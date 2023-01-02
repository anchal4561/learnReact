import { useState } from "react";
import "./App.css";
import Product from "./components/Product";
import data from "./db.json";
function App() {
  const [prodData,setProdData]=useState(data)
  const handleQty=(id,value)=>{
    let newData= prodData.map((elem)=>{
      if(elem.id===id){
        elem.quantity+=value
      }
      return elem
    })
    setProdData(newData)
  }
  return (
    <div className="App" data-testid="app">
      <div data-testid="cart-products">
        {/*  map through the  data and pass props to the Product component */}
      {
       data.map((element,index)=>(
        <Product key={index} name={element.name} price={element.price}
        quantity={element.quantity} id={element.id} handleQty={handleQty}/>
       )) 
      }
      </div>

      <h1 id="total-cart" data-testid="total-cart">
        {/* Show the total of the Cart(a actual Price of a Product = price * quantity) */}
        Total:{prodData.reduce((acc,el)=>{
          return (el.quantity*el.price)+acc
        },0)}
      </h1>
    </div>
  );
}

export default App;
