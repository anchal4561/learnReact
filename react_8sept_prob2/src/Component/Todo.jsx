import { useState ,useEffect} from "react";
import AddTodo from "./AddToDo";
import TodoItem from "./TodoItem";

const getTodos = async (page) => {
  return await fetch(`http://localhost:3000/tasks?_page=${page}&_limit=2`).then((res) => {
    return res.json();
  });
};

const addTodos = async (todo) => {
  return await fetch(`http://localhost:3000/tasks`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(todo),
  }).then((res) => res.json());
};

function Todo() {
  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page,setPage]=useState(1)

  useEffect(()=>{
    console.log("inside")
    handleGetTodos(page)
  },[page])

  const handleGetTodos = (page) => {
    setLoading(true);
    return getTodos(page)
      .then((res) => {
        setLoading(false);
        setTodos(res);
      })
      .catch((err) => {
        setLoading(false);
      });
  };

  const handleAdd = (text) => {
    const item = {
      title: text,
    };
    setLoading(false);
    addTodos(item)
      .then((res) => {
        console.log(res);
        handleGetTodos(page);
      })
      .catch((err) => {
        setLoading(false);
      });
  };
  const getTasks=()=>{
    handleGetTodos(page)
  }

  const handlePrev=()=>{
    setPage(page-1)
  }
  const handleNext=()=>{
    setPage(page+1)
  }
  return (
    <div>
      <button onClick={getTasks}>GET TASKS</button>
      <AddTodo handleAdd={handleAdd} />
      <div>
        {loading ? "Loading!":todos.map((item) => (
        <TodoItem key={item.id} title={item.title} id={item.id} />
      ))}
      </div>
      <button disabled={page===1} onClick={handlePrev}> Prev </button>
      <button>{page}</button>

      <button onClick={handleNext}> Next </button>
      
      
    </div>
  );

        }
export default Todo;