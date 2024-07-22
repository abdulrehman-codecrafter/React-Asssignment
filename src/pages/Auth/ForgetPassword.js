import React, { useState } from "react";
import { Toaster, toast } from 'sonner'
import { Link, useNavigate } from 'react-router-dom'

const initialState = { email: "", newPassword: "" , confirmPassword: "" };

export default function Login() {
    const [state, setState] = useState(initialState);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setState({ ...state, [name]: value });
    };
    const navigate = useNavigate()

    const handleForgetPassword = (e) => {
        e.preventDefault();

        let { email, newPassword, confirmPassword } = state;
        if(email === "" || newPassword === "" || confirmPassword=="" ) return toast.error("All fields are required")
        
        let users=JSON.parse(localStorage.getItem("users"))

        const foundUser = users.find((u) => u.email === email);
        if(foundUser) {
            if(newPassword !== confirmPassword) {return toast.error("Passwords do not match")}
            else{
                foundUser.password = newPassword
                localStorage.setItem("users", JSON.stringify(users))
                 toast.success(`Password reset successful`)
            }
        }
        else{
            return toast.error("Invalid credentials")
        }
        navigate("/")

        };
    return (
        <div class="container view-port d-flex justify-content-center align-items-center ">
            <div className="forget-page">
                <Toaster position="top-left" richColors />
                <form action="" onSubmit={handleForgetPassword}>
                    <h2 className="mb-4 mt-3">Forget Password</h2>
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
                            placeholder="New Password"
                            id="password"
                            name="newPassword"
                        />
                    </div>
                    <div className="input">
                        <input
                            className="form-control"
                            onChange={handleChange}
                            type="password"
                            placeholder="Confirm Password"
                            id="password"
                            name="confirmPassword"
                        />
                    </div>
                    <input type="submit" value="Proceed" />
                </form>
            </div>
        </div>

    );
}