import React from 'react'
import Nav from './Component/Nav/Nav'
import Home from './Component/Home/Home'
import Footer from './Component/footer/Footer'
import Movie from './Component/Moviecompent/Movie'
import { Routes,Route,BrowserRouter } from 'react-router-dom'
import Tv from './Component/Tvshows/Tv'
import Login from "./Component/Login/Login"
import Signup from './Component/Signup/Signup'


const App = () => {
    return (
        <div style={{ height:"100vh",width:"100%"}}>
            <BrowserRouter>
            <Nav/>
            <Routes>
                <Route element={<Home/>} path='/'/>
                <Route element={<Movie/>} path='/movie'/>
                <Route element={<Tv/>} path='/tvshows'/>
                <Route element={<Login/>} path='/login'/>
                <Route element={<Signup/>} path='/Signup'/>
            </Routes>
            <Footer />
            </BrowserRouter>
        </div>
    )
}

export default App