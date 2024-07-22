import React, { useState } from "react";
import { Toaster, toast } from 'sonner'
import { Link,useNavigate } from 'react-router-dom'



const initialState = { username: "", email: "", password: "" };

export default function Register() {
    const userInitialState=JSON.parse(localStorage.getItem("users")) || []
    
    const [state, setState] = useState(initialState);
    const [users,setUsers] = useState(userInitialState)

    const handleChange = (e) => {
        const { name, value } = e.target;
        setState({ ...state, [name]: value });
    };
    const navigate = useNavigate()


    const handleUserRegistration = (e) => {
        e.preventDefault();

        let { username, email, password } = state;
        if(username === "" || email === "" || password === "") return toast.error("All fields are required")

        if(users.find((u) => u.email === email)){
            return toast.error("User already exists")
        }
        if(password.length < 6) return toast.error("Password must be at least 6 characters")

        const newUser = { username, email, password, userId: Math.random().toString(36).slice(2)};
        // setUsers([...users, newUser]);
        setUsers(currentUsers => [...currentUsers, newUser]);
        localStorage.setItem("users", JSON.stringify([...users, newUser]));
        
        toast.success("Registration successful")
        setState(initialState); // Clear form fields after successful registration
        navigate("/")

    };

    return (

        <div class="container d-flex justify-content-center align-items-center view-port ">
            <div className="register-page" onSubmit={handleUserRegistration}>
                <Toaster position="top-left" richColors />
                <form action="">
                    <h2 className="mb-4 mt-3">Register</h2>
                    <div className="input">
                        <input
                            className="form-control"
                            onChange={handleChange}
                            type="text"
                            placeholder="Username"
                            id="username"
                            name="username"
                            value={state.username}
                        />
                    </div>
                    <div className="input">
                        <input
                            className="form-control"
                            onChange={handleChange}
                            type="email"
                            placeholder="Email"
                            id="email"
                            name="email"
                            value={state.email}
                        />
                    </div>
                    <div className="input">
                        <input
                            className="form-control"
                            onChange={handleChange}
                            type="password"
                            placeholder="Password"
                            id="password"
                            name="password"
                            value={state.password}
                        />
                    </div>
                    <input type="submit" value="Register" />
                    <p className='mb-0 mt-2'>Already have an account? <Link to="/">Login Now</Link></p>
                </form>
            </div>
        </div>
    );
}