
import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from '../components/navbar/Navbar'
import About from '../pages/about/About'
import Home from '../pages/home/Home'
import Details from '../pages/details/Details'
import Login from '../pages/login/Login'
import PrivateRouter from "./PrivateRouter";



const AppRouter = () => {
  return (
    <BrowserRouter>
    <Navbar/>
    <Routes>
    <Route path="/" element={<Login />} />

<Route path="/home" element={<PrivateRouter />}>
  <Route path="" element={<Home />} />
</Route>

<Route path="/about" element={<PrivateRouter />}>
  <Route path="" element={<About />} />
</Route>

<Route path="/details" element={<Details />} />
    </Routes>
    </BrowserRouter>
  )
}

export default AppRouter