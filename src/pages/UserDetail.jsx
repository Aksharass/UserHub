import React from 'react';
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

export default function UserDetail() {
  const { id } = useParams()
  const [user, setUser] = useState(null)

  useEffect(() => {
    fetch(`https://dummyjson.com/users/${id}`)
      .then(res => res.json())
      .then(data => setUser(data))
  }, [id])

  if (!user) return <div className="p-6">Loading...</div>

  return (
    <div className="p-6 bg-gradient-to-r from-white to-gray-500 min-h-screen">
      <h2 className="text-2xl font-bold mb-4">User Detail</h2>
      <div className="bg-white p-4 rounded shadow-md">
        <img src={user.image} alt={user.firstName} className="w-48 h-48 object-cover rounded mb-4" />
        <h3 className="text-xl font-semibold">{user.firstName} {user.lastName}</h3>
        <p>Email: {user.email}</p>
        <p>Age: {user.age}</p>
        <p>Company: {user.company.name}</p>
        <p>Phone: {user.phone}</p>
      </div>
    </div>
  )
}
