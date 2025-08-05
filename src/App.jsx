import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import AuthPage from './pages/AuthPage'
import HomePage from './pages/HomePage'
import DisplayPage from './pages/DisplayPage'
import InputPage from './pages/InputPage'
import UserDetail from './pages/UserDetail'

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<AuthPage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/display" element={<DisplayPage />} />
        <Route path="/input" element={<InputPage />} />
        <Route path="/user/:id" element={<UserDetail />} />
      </Routes>
    </Router>
  )
}
