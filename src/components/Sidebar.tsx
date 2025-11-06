"use client"
import { useState } from "react"

export default function Sidebar() {
  const [search, setSearch] = useState("")
  const categories = ["Tech", "Lifestyle", "Education"]

  return (
    <div className="bg-gray-100 p-4 rounded-lg shadow">
      <h2 className="text-xl font-semibold mb-4">Categories</h2>
      <ul className="space-y-2 mb-6">
        {categories.map((c) => (
          <li key={c} className="hover:text-blue-600 cursor-pointer">{c}</li>
        ))}
      </ul>
      <input
        type="text"
        placeholder="Search posts..."
        className="w-full p-2 border rounded"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <p className="text-sm text-gray-500 mt-2">Searching for: {search || "Nothing"}</p>
    </div>
  )
}
