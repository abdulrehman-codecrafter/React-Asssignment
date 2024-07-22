import { Route, Routes,  } from "react-router-dom";
import Home from "./Home";
import Todos from "./Todos";
import Users from "./Users";
import React from 'react'

export default function Frontened() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="todos/*" element={<Todos />} />
      <Route path="users" element={<Users />} />

      <Route path="*" element={<div>Not Found</div>} />
    </Routes>
  )
}
