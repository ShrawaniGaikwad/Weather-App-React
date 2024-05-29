import { useState } from 'react';
import './App.css';
import axios from 'axios';
import { Oval } from 'react-loader-spinner';
import { BrowserRouter as Router, Link, Route, Routes, useNavigate } from 'react-router-dom';
import Home from './Home.jsx';
import Second from './Second.jsx';


function App() {

    return (
      <>
      <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/second" element={<Second />} />
            </Routes>
        </Router>
        </>
    );
}

export default App;
