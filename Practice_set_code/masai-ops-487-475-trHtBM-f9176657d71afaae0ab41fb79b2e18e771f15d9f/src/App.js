import "./App.css";
import { useState } from "react";
import Post from "./Components/Post"
function App() {
  const [postData,setPostData]=useState([])

  const getData=async()=>{
    let res = await fetch("https://jsonplaceholder.typicode.com/posts");
    let data = await res.json()
    console.log(data)
    setPostData(data)
  }

  return (
    <div className="App" data-testid="app">
      <button
        id="get-posts-btn" onClick={()=>getData()}
      >
        GET POSTS
      </button>
      <div id="post-container">
        {/*  map through the posts data and pass props to the Posts component */}
        {postData.map((elem,index)=>{
          return <Post key={index} data={elem}/>
        })}
      </div>
    </div>
  );
}

export default App;
