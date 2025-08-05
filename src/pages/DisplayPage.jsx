import React from 'react';
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"

export default function DisplayPage() {
  const [users, setUsers] = useState([])
  const navigate = useNavigate()

  useEffect(() => {
    fetch("https://dummyjson.com/users")
      .then(res => res.json())
      .then(data => setUsers(data.users))
  }, [])

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <h2 className="text-2xl font-bold mb-4">User List</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {users.map(user => (
          <div key={user.id} className="bg-white shadow-md p-4 rounded">
            <img src={user.image} alt={user.firstName} className="w-full h-40 object-cover rounded mb-2" />
            <h3 className="text-xl font-semibold">{user.firstName} {user.lastName}</h3>
            <p>Email: {user.email}</p>
            <p>Company: {user.company.name}</p>
            <button onClick={() => navigate(`/user/${user.id}`)} className="mt-2 bg-blue-500 text-white px-3 py-1 rounded">View Details</button>
          </div>
        ))}
      </div>
    </div>
  )
}
