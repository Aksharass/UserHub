import React from 'react';
import { useState } from "react"

export default function InputPage() {
  const [users, setUsers] = useState([])
  const [form, setForm] = useState({ name: "", email: "" })
  const [editIndex, setEditIndex] = useState(null)

  const handleSubmit = () => {
    if (editIndex !== null) {
      const updated = [...users]
      updated[editIndex] = form
      setUsers(updated)
      setEditIndex(null)
    } else {
      setUsers([...users, form])
    }
    setForm({ name: "", email: "" })
  }

  const handleEdit = (index) => {
    setForm(users[index])
    setEditIndex(index)
  }

  const handleDelete = (index) => {
    const updated = [...users]
    updated.splice(index, 1)
    setUsers(updated)
  }

  return (
    <div className="p-6 bg-gradient-to-r from-white to-gray-500 min-h-screen">
      <h2 className="text-2xl font-bold mb-4">CRUD User Form</h2>
      <div className="bg-white p-4 rounded shadow-md mb-6">
        <input className="border p-2 mr-2" placeholder="Name" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} />
        <input className="border p-2 mr-2" placeholder="Email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} />
        <button className="bg-blue-600 text-white px-4 py-2 rounded" onClick={handleSubmit}>
          {editIndex !== null ? "Update" : "Add"}
        </button>
      </div>
      <ul className="space-y-2">
        {users.map((user, index) => (
          <li key={index} className="bg-white p-4 rounded shadow flex justify-between items-center">
            <div>
              <p className="font-bold">{user.name}</p>
              <p>{user.email}</p>
            </div>
            <div className="space-x-2">
              <button className="bg-green-500 text-white px-3 py-1 rounded" onClick={() => handleEdit(index)}>Edit</button>
              <button className="bg-red-500 text-white px-3 py-1 rounded" onClick={() => handleDelete(index)}>Delete</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}
