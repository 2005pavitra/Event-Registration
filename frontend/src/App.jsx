
import React from 'react'
import './App.css'
import Hero from './hero'
import RegisterForm from './Register'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {


  return (
    <>
     <Router>
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/register" element={<RegisterForm />} />
      </Routes>
    </Router>
    </>
  )
}

export default App
