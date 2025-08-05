import React from 'react';
import { useNavigate } from "react-router-dom"

export default function HomePage() {
  const navigate = useNavigate()
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-white to-gray-600">
      <h1 className="text-3xl font-bold mb-6">Welcome to the Dashboard</h1>
      <p className="mb-8 text-lg text-gray-700 max-w-xl text-center">
        This dashboard helps you manage and visualize your data efficiently. Use the buttons below to navigate to different sections of the application.
      </p>
      <div className="flex space-x-4 mb-8">
        <button onClick={() => navigate("/display")} className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition">Go to Display</button>
        <button onClick={() => navigate("/input")} className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition">Go to Input</button>
      </div>
      <div className="w-full max-w-2xl bg-white bg-opacity-80 rounded-lg shadow-md p-6">
        <h2 className="text-2xl font-semibold mb-4 text-gray-800">Features</h2>
        <ul className="list-disc list-inside text-gray-700 space-y-2">
          <li>View and analyze your data in real-time.</li>
          <li>Input new records quickly and easily.</li>
          <li>Responsive design for all devices.</li>
          <li>Secure and user-friendly interface.</li>
        </ul>
      </div>
    </div>
  )
}
