import { getByTitle } from '@testing-library/react'
import React from 'react'
import { useState } from 'react'
import { Toaster,toast } from 'sonner'
import { Link } from 'react-router-dom'


let initialState = {title: "", date: "", description: "",}

export default function AddTodo() {
  let todosInitialState=JSON.parse(localStorage.getItem('todos')) || []

  const [state, setState] = useState(initialState)
  const [todos, setTodos] = useState(todosInitialState)

  const handleChange = (e) => setState({...state, [e.target.name]: e.target.value})
  
  const handleAddTodo = (e) =>{

    e.preventDefault()
    let loggedUser=JSON.parse(localStorage.getItem("loggedInUser"))
    let {title, date, description} = state

    if(title === "" || date === "" || description === "") return toast.error("All fields are required")

    let newTodo = {...state, userId: loggedUser.userId, createdAt: new Date(),status: "Pending"}
    setTodos([...todos, newTodo]);
        localStorage.setItem("todos", JSON.stringify([...todos, newTodo]));
        setState(initialState); 
    toast.success("Todo added successfully")
  }



  return (
    <>
    <main>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <Toaster position="top-left" richColors />
        <div className="container-fluid">
          <Link to="/frontened" className="navbar-brand" >
            Home
          </Link>
          <div className="" id="navbarSupportedContent">
            <Link to="/frontened/todos" className="btn btn-primary p"> Show Todo </Link>
          </div>
        </div>
      </nav>
      <div className="container view-port d-flex justify-content-center align-items-center">
        <div className="add-todo border">
          <h1>Add Todo</h1>
          <form onSubmit={handleAddTodo} >
            <div className="form-group">
              <label htmlFor="title">Title</label>
              <input onChange={handleChange} type="text" className="form-control" id="title" name='title' value={state.title}/>
            </div>
            <div className="form-group">
              <label htmlFor="date">Date</label>
              <input onChange={handleChange} type="date" className="form-control" id="date" name='date'  value={state.date}/>
            </div>
            <div className="form-group">
              <label htmlFor="description">Description</label>
              <textarea onChange={handleChange} className="form-control" id="description" rows="3" name='description' value={state.description}></textarea>
            </div>
            <input type="submit" className="btn btn-primary mt-3" />
          </form>
        </div>
      </div>
    </main>
    </>
  )
}
