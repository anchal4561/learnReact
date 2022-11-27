import { useState } from 'react';
import Item from "./Component/Item"
import './App.css';

function App() {
  const [data,setData]=useState([
  {
    id:1,
    title:"Noodles",
    price:30,
    quantity:1

  },
  {
    id:2,
    title:"Biryani",
    price:90,
    quantity:2


  },
  {
    id:3,
    title:"Chips",
    price:10,
    quantity:3
  }

  ])

  const addItemQty = (id) => {
    setData(
      data.map((ele) =>
        ele.id === id ? { ...ele, quantity: ele.quantity + 1 } : ele
      )
    );
  };

  const minusItemQty=(id)=>{
    setData(
      data.map((ele)=>
        ele.id===id ? {...ele,quantity:ele.quantity-1}:ele
      )
      ) 
  }

  const total=data.reduce((a,el)=>{
    return a+el.price*el.quantity;
  },0);

  return (
    <div className="App">
      {data.map((ele)=>(
        <Item
        key={ele.id}
        title={ele.title}
        price={ele.price}
        quantity={ele.quantity}
        id={ele.id}
        addItemQty={addItemQty}
        minusItemQty={minusItemQty}
        />

      ))}
     Total:{total}
    </div>
  );
}

export default App;
