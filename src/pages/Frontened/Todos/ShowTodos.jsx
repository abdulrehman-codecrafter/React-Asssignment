// import React from 'react'
// import Footer from '../../../components/Footer'
// import { Link } from 'react-router-dom'
// import { useState } from 'react'
// export default function ShowTodos() {
//   const [todos, setTodos] = useState(JSON.parse(localStorage.getItem('todos')) || []);

//   const [ShowDltModel, setShowDltModel] = useState(false);
//   const [todoToDelete, setTodoToDelete] = useState(null);

//   const handleEdit = (e) => {

//   }
//   const handleDelete = (todo) => {
//     setTodoToDelete(todo);
//     setShowDltModel(true);
//   }

//   const confirmDelete = () => { 
//     const updatedTodos = todos.filter(todo => todo.title !== todoToDelete.title);
//     localStorage.setItem('todos', JSON.stringify(updatedTodos));
//     setTodos(updatedTodos); // Update state to trigger re-render
//     setShowDltModel(false);
//     setTodoToDelete(null);
//   }
//   return (
//     <>
//       <nav className="navbar navbar-expand-lg navbar-light bg-light">
//       <div className="container-fluid">
//         <Link to="/frontened" className="navbar-brand" >
//           Home
//         </Link>

//         <div className="" id="navbarSupportedContent">
//           <Link to="addtodo" className="btn btn-primary p"> Add Todo </Link>
//         </div>
//       </div>
//     </nav>
//     <main>
//       <div className='container '>
//         <h1 className='pt-4 pb-3 text-center'>Todos List</h1>

//         <div className="table-responsive ">
//           <table className='table table-striped w-100'>
//             <thead>
//               <tr className='table-success'>
//                 <th>Id</th>
//                 <th>Title</th>
//                 <th>Description</th>
//                 <th>Date</th>
//                 <th>Status</th>
//                 <th>Actions</th>
//               </tr>
//             </thead>
//             <tbody>
//               {todos.map((todo, index) => (
//                 <tr key={index}>
//                   <td>{index + 1}</td>
//                   <td>{todo.title}</td>
//                   <td>{todo.description}</td>
//                   <td>{todo.date}</td>
//                   <td>{todo.status}</td>
//                   <td className='d-flex '>
//                     <button className='btn btn-success me-2' onClick={handleEdit}>Edit</button>
//                     <button className='btn btn-danger' onClick={() => handleDelete(todo)}>Delete</button>
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//       </div>
//     </main>
//     <Footer />  

//     {ShowDltModel && (
//         <div className="modal" tabindex="-1" style={{ display: 'block' }}>
//           <div className="modal-dialog">
//             <div className="modal-content">
//               <div className="modal-header">
//                 <h5 className="modal-title">Confirm Delete</h5>
//                 <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={() => setShowDltModel(false)}></button>
//               </div>
//               <div className="modal-body">
//                 <p>Are you sure you want to delete this todo?</p>
//               </div>
//               <div className="modal-footer">
//                 <button type="button" className="btn btn-secondary" data-bs-dismiss="modal" onClick={() => setShowDltModel(false)}>Close</button>
//                 <button type="button" className="btn btn-danger" onClick={confirmDelete}>Delete</button>
//               </div>
//             </div>
//           </div>
//         </div>
//       )}
//     </>
//   )
// }

import React, { useState } from 'react';
import Footer from '../../../components/Footer';
import { Link } from 'react-router-dom';

export default function ShowTodos() {
  const [todos, setTodos] = useState(JSON.parse(localStorage.getItem('todos')) || []);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [todoToDelete, setTodoToDelete] = useState(null);
  const [todoToEdit, setTodoToEdit] = useState(null);
  const [editData, setEditData] = useState({ title: '', description: '', date: '', status: '' });

  const handleEdit = (todo) => {
    setTodoToEdit(todo);
    setEditData(todo);
    setShowEditModal(true);
  };

  const handleDelete = (todo) => {
    setTodoToDelete(todo);
    setShowDeleteModal(true);
  };

  const confirmDelete = () => {
    const updatedTodos = todos.filter(todo => todo.title !== todoToDelete.title);
    localStorage.setItem('todos', JSON.stringify(updatedTodos));
    setTodos(updatedTodos); // Update state to trigger re-render
    setShowDeleteModal(false);
    setTodoToDelete(null);
  };

  const handleUpdate = () => {
    const updatedTodos = todos.map(todo =>
      todo.title === todoToEdit.title ? { ...todoToEdit, ...editData } : todo
    );
    localStorage.setItem('todos', JSON.stringify(updatedTodos));
    setTodos(updatedTodos); // Update state to trigger re-render
    setShowEditModal(false);
    setTodoToEdit(null);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditData({ ...editData, [name]: value });
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <Link to="/frontened" className="navbar-brand">
            Home
          </Link>
          <div id="navbarSupportedContent">
            <Link to="addtodo" className="btn btn-primary p"> Add Todo </Link>
          </div>
        </div>
      </nav>
      <main>
        <div className='container '>
          <h1 className='pt-4 pb-3 text-center'>Todos List</h1>
          <div className="table-responsive">
            <table className='table table-striped'>
              <thead>
                <tr className='table-primary'>
                  <th>Id</th>
                  <th>Title</th>
                  <th>Description</th>
                  <th>Date</th>
                  <th>Status</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {todos.map((todo, index) => (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{todo.title}</td>
                    <td>{todo.description}</td>
                    <td>{todo.date}</td>
                    <td>{todo.status}</td>
                    <td className='d-flex '>
                      <button className='btn btn-success me-2' onClick={() => handleEdit(todo)}>Edit</button>
                      <button className='btn btn-danger' onClick={() => handleDelete(todo)}>Delete</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </main>
      <Footer />

      {showDeleteModal && (
        <div className="modal" tabIndex="-1" style={{ display: 'block' }}>
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Confirm Delete</h5>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={() => setShowDeleteModal(false)}></button>
              </div>
              <div className="modal-body">
                <p>Are you sure you want to delete this todo?</p>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal" onClick={() => setShowDeleteModal(false)}>Close</button>
                <button type="button" className="btn btn-danger" onClick={confirmDelete}>Delete</button>
              </div>
            </div>
          </div>
        </div>
      )}

      {showEditModal && (
        <div className="modal" tabIndex="-1" style={{ display: 'block' }}>
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Edit Todo</h5>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={() => setShowEditModal(false)}></button>
              </div>
              <div className="modal-body">
                <form>
                  <div className="mb-3">
                    <label htmlFor="title" className="form-label">Title</label>
                    <input
                      type="text"
                      className="form-control"
                      id="title"
                      name="title"
                      value={editData.title}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="description" className="form-label">Description</label>
                    <textarea
                      className="form-control"
                      id="description"
                      name="description"
                      rows="3"
                      value={editData.description}
                      onChange={handleInputChange}
                    ></textarea>
                  </div>
                  <div className="mb-3">
                    <label htmlFor="date" className="form-label">Date</label>
                    <input
                      type="date"
                      className="form-control"
                      id="date"
                      name="date"
                      value={editData.date}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="status" className="form-label">Status</label>
                    <input
                      type="text"
                      className="form-control"
                      id="status"
                      name="status"
                      value={editData.status}
                      onChange={handleInputChange}
                    />
                  </div>
                </form>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal" onClick={() => setShowEditModal(false)}>Cancel</button>
                <button type="button" className="btn btn-success" onClick={handleUpdate}>Update</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

