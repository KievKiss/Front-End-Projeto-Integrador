import React from 'react';
import './App.css';
import Home from './pages/home/Home';
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Sobre from './pages/sobre/Sobre';
import Login from './pages/login/Login';

function App() {
    return (
        <>
            <BrowserRouter>
               <Navbar/>
                <div className='min-h-[80vh] bg-[#0488AB]'>
                    <Routes>
                    <Route path="/" element={<Home />} />    
                    <Route path="/login" element={<Login />} />
                    <Route path="/sobre" element={<Sobre />} />
                    <Route path="/home" element={<Home />} />
                    </Routes>
                </div>
               <Footer/>
            </BrowserRouter>
        </>
    );
}
export default App;