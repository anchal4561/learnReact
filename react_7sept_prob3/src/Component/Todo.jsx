import { useState } from "react";
import AddTodo from "./AddToDo";
import TodoItem from "./TodoItem";

const getTodos = async () => {
  return await fetch(`http://localhost:3000/tasks`).then((res) => {
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

  const handleGetTodos = () => {
    setLoading(true);
    return getTodos()
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
        handleGetTodos();
      })
      .catch((err) => {
        setLoading(false);
      });
  };
  const getTasks=()=>{
    handleGetTodos()
  }

  return (
    <div>
      <button onClick={getTasks}>GET TASKS</button>
      <AddTodo handleAdd={handleAdd} />
      <div>{loading ? "Loading!":todos.map((item) => (
        <TodoItem key={item.id} title={item.title} id={item.id} />
      ))}</div>
      
    </div>
  );

        }
export default Todo;