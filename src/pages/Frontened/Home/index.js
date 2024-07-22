import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  let users = JSON.parse(localStorage.getItem("users"));
  let todos = JSON.parse(localStorage.getItem("todos"));

  return (
    <div className="container  view-port  d-flex justify-content-center align-items-center">
      <div className="row">
        <div className="col mb-3">
          <div class="card bg-" style={{ width: "18rem" }}>
            <div class="card-body">
              <h5 class="card-title">Todos Card </h5>
              <p class="card-text">
                No. of Todos: {todos.length}
              </p>
              <Link to="todos" className="btn btn-primary">
                Manage tasks
              </Link>
            </div>
          </div>
        </div>
        <div className="col ">
          <div class="card " style={{ width: "18rem" }}>
            <div class="card-body">
              <h5 class="card-title">Users Card</h5>
              <p class="card-text">
                Active Users: {users.length}
              </p>
              <Link to="users" className="btn btn-primary">
                Manage Users
              </Link>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
}
