import React, { useState } from "react";
import { Toaster, toast } from 'sonner'
import { Link, useNavigate } from 'react-router-dom'

const initialState = { email: "", password: "" };

export default function Login() {
    const [state, setState] = useState(initialState);
    const handleChange = (e) => {
        const { name, value } = e.target;
        setState({ ...state, [name]: value });
    };
    const navigate = useNavigate()

    const handleUserLogin = (e) => {
        e.preventDefault();
        let { email, password } = state;
        if(email === "" || password === "") return toast.error("All fields are required")
        let users=JSON.parse(localStorage.getItem("users"))
        const foundUser = users.find((u) => u.email === email && u.password === password);
        if(foundUser) {
            localStorage.setItem("loggedInUser", JSON.stringify(foundUser));

        }
        else{
            return toast.error("Invalid credentials")
        }
        navigate("/frontened")
        toast.success(`Welcome Back ${foundUser.username}`)


        };
    return (
        <div class="container view-port d-flex justify-content-center align-items-center ">
            <div className="login-page">
                <Toaster position="top-left" richColors />
                <form action="" onSubmit={handleUserLogin}>
                    <h2 className="mb-4 mt-3">Login</h2>
                    <div className="input">
                        <input
                            className="form-control"
                            onChange={handleChange}
                            type="email"
                            placeholder="Email"
                            id="email"
                            name="email"
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
                        />
                    </div>
                    <input type="submit" value="Login" />
                    <Link to="/auth/forgetpassword" className="ms-4 text-secondary">Forget Password?</Link>
                </form>
                    <p className='mb-0 mt-2'>Don't have an account? <Link to="/auth/register">Register Now</Link></p>
            </div>
        </div>
    );
}