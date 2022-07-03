import {useState} from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'; 
import UserContext from '../contexts/UserContext'

import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import Home from "./pages/Home";
import Deposit from "./pages/Deposit";
import Withdraw from "./pages/Withdraw";

export default function App(){
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<SignIn />} />
                <Route path="/signup" element={<SignUp />} />
                <Route path="/home" element={<Home />} />
                <Route path="/deposit" element={<Deposit />} />
                <Route path="/withdraw" element={<Withdraw />} />
            </Routes>
        </BrowserRouter>
        
    );
}