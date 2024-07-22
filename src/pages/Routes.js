import React from 'react'
import { Route, Routes , Navigate} from 'react-router-dom'
import Login from '../pages/Auth/Login'
import Register from '../pages/Auth/Register'
import Auth from './Auth'
import Frontened from './Frontened'

export default function Index() {
    return (
        <Routes>
            <Route path="/auth/*" element ={<Auth />} />
            <Route path="/frontened/*"  element={<Frontened />} />
            <Route path="*" element={<Navigate to="/auth" replace />} />

         </Routes>
    )
}