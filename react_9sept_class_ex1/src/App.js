import "./styles.css";
import { useState, useEffect } from "react";

const getData = async (page) => {
  try {
    let res = await fetch(
      `https://jsonplaceholder.typicode.com/posts?_limit=10&_page=${page}`
    );
    let data = await res.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

// 1. create prev, next button and also page number
// 2. maintain page state
// 3. now add page as a dependency; so that anytime page changes;
// posts value also changes
// 4. update you getData to work in a way that it also takes page number
// and return relevant page data

export default function App() {
  const [loading, setLoading] = useState(false);
  const [posts, setPosts] = useState([]);
  const [page, setPage] = useState(1);

  // on mount phase and ANYTIME "PAGE"  state changes;
  useEffect(() => {
    fetchAndUpdateData(page);
  }, [page]);

  const fetchAndUpdateData = async (page = 1) => {
    try {
      setLoading(true);
      const data = await getData(page);
      setPosts(data);
      setLoading(false);
    } catch (err) {
      setLoading(false);
      console.log(err);
    }
  };

  const handlePageChange = (changeBy) => {
    setPage(page + changeBy);
  };

  if (loading) {
    return <h1>Loading...</h1>;
  }

  return (
    <div className="App">
      <h1>Posts</h1>
      <ul>
        {posts.map((postItem) => (
          <li key={postItem.id}>
            {postItem.id} {"-"} {postItem.title}
          </li>
        ))}
      </ul>
      <button disabled={page === 1} onClick={() => handlePageChange(-1)}>
        PREV
      </button>
      <button>{page}</button>
      <button onClick={() => handlePageChange(1)}>NEXT</button>
    </div>
  );
}
