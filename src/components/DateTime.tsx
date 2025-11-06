"use client"
import { useEffect, useState } from "react"

export default function DateTime() {
  const [time, setTime] = useState("")

  useEffect(() => {
    const update = () => {
      setTime(new Date().toLocaleString())
    }

    update() // set immediately
    const id = setInterval(update, 1000)

    return () => clearInterval(id)
  }, [])

  return <p className="text-2xl font-mono">{time}</p>
}
