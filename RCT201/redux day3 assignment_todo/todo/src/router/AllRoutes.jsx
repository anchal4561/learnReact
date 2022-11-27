import React from 'react'
import { Routes,Route } from 'react-router-dom'
import SingleTodo from '../Components/SingleTodo'
import TodoApp from '../Components/TodoApp'

const AllRoutes = () => {
  return (
    <Routes>
        <Route path="/" element={<TodoApp/>}/>
        <Route path="/:id" element={<SingleTodo/>}/>
    </Routes>
  )
}

export default AllRoutes;