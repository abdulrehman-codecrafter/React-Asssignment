import React from 'react'
import { Route, Routes} from 'react-router-dom'
import Login from './Login'
import Register from './Register'
import ForgetPassword from './ForgetPassword'

export default function Auth() {
    return (
        <Routes>
            <Route path='/' element={<Login />} />
            <Route path='register' element={<Register />} />
            <Route path='forgetpassword' element={<ForgetPassword />} />

            <Route path='*' element={<h1>No Page, Auth Page Not Found, 404 Error</h1>} />
        </Routes>
    )
}