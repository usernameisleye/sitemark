"use client"

import { useEffect, useState } from "react"

const Clock = () => {
  const [time, setTime] = useState<Date>(new Date())

  useEffect(() => {
    const interval = setInterval(() => setTime(new Date()), 1000)
    return () => clearInterval(interval)
  }, [])

  const format = time.toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  })

  return (
    <span className="text-xl font-mono text-clr-accent select-none">
      {format}
    </span>
  )
}

export default Clock
