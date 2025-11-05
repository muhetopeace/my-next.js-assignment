'use client'

import { useState, useEffect } from 'react'

export default function Clock() {
  const [time, setTime] = useState(new Date())

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date())
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  return (
    <div className="bg-gradient-to-r from-purple-500 to-pink-500 text-white p-6 rounded-lg shadow-lg">
      <h3 className="text-xl font-semibold mb-2">Current Time (CSR)</h3>
      <p className="text-3xl font-mono">
        {time.toLocaleTimeString()}
      </p>
      <p className="text-sm mt-2 opacity-90">
        {time.toLocaleDateString('en-US', { 
          weekday: 'long', 
          year: 'numeric', 
          month: 'long', 
          day: 'numeric' 
        })}
      </p>
    </div>
  )
}