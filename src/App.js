import React from 'react';
import './App.css'; // Importing styles (if you have a separate CSS file)
import Layout from "./Layout";
import DSA from "./DSA"; 
import KEEPINGACCOUNTABLE from "./KEEPINGACCOUNTABLE"; 
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
    <Routes>
        <Route path="/" element={<Layout />}/>
        <Route path="/dsa" element={<DSA />} />
        <Route path="/keepingaccountable" element={<KEEPINGACCOUNTABLE />} />
    </Routes>
    </Router>

  );
}

export default App;

