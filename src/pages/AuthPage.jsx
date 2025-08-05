import React from 'react';
import { useState } from "react"
import { useNavigate } from "react-router-dom"

export default function AuthPage() {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const navigate = useNavigate()

  const handleLogin = () => {
    if (username === "admin" && password === "admin123") {
      navigate("/home")
    } else {
      alert("Invalid credentials")
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md w-96">
        <h2 className="text-2xl mb-4 text-center font-bold">Login</h2>
        <input className="w-full p-2 border mb-4" placeholder="Username" onChange={(e) => setUsername(e.target.value)} />
        <input className="w-full p-2 border mb-4" placeholder="Password" type="password" onChange={(e) => setPassword(e.target.value)} />
        <button onClick={handleLogin} className="w-full bg-blue-600 text-white p-2 rounded">Login</button>
      </div>
    </div>
  )
}
