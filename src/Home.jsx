import { useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Link, Route, Routes, useNavigate } from 'react-router-dom';
import Second from './Second';

function App() {
    const navigate = useNavigate();

    const handleGetStarted = () => {
        navigate('/second');
    };

    return (
        <>
      <div style={{textAlign:'center',marginTop:50,fontFamily:'cursive'}}>
        <h1 style={{fontSize:40}}>Welcome to the Weather App</h1>
        <img style={{marginTop:50}} src='src/assets/home.avif'></img>
      </div>
      <div style={{textAlign:'center',marginTop:50}}><button onClick={handleGetStarted}>Get Started</button></div>
        </>
    );
}

export default App;
