import React from 'react'
import { Route,Routes } from 'react-router-dom'
import ShowTodos from './ShowTodos'
import AddTodo from './AddTodo'
export default function Todo() {
  return (
    <Routes>
      <Route path="/" element={<ShowTodos />} />
      <Route path='addtodo' element={<AddTodo />}/>
    </Routes>
  )
}
