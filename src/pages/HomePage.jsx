import React from 'react';
import { useNavigate } from "react-router-dom"

export default function HomePage() {
  const navigate = useNavigate()
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50">
      <h1 className="text-3xl font-bold mb-6">Welcome to the Dashboard</h1>
      <div className="flex space-x-4">
        <button onClick={() => navigate("/display")} className="bg-blue-500 text-white px-4 py-2 rounded">Go to Display</button>
        <button onClick={() => navigate("/input")} className="bg-green-500 text-white px-4 py-2 rounded">Go to Input</button>
      </div>
    </div>
  )
}
