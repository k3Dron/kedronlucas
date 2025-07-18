// analog-clock.js
"use client"

import { useState, useEffect, useCallback } from "react"

export default function AnalogClock({ onTimeChange, selectedTime }) {
  const [isDragging, setIsDragging] = useState(null)
  const [time, setTime] = useState(() => {
    const [hours, minutes] = selectedTime.split(":" ).map(Number)
    return { hours: hours % 12, minutes }
  })

  useEffect(() => {
    const [hours, minutes] = selectedTime.split(":" ).map(Number)
    const newTime = { hours: hours % 12, minutes }
    if (newTime.hours !== time.hours || newTime.minutes !== time.minutes) {
      setTime(newTime)
    }
  }, [selectedTime, time.hours, time.minutes])

  const notifyTimeChange = useCallback((newTime) => {
    const hours24 = newTime.hours === 0 ? 12 : newTime.hours
    const timeString = `${hours24.toString().padStart(2, "0")}:${newTime.minutes.toString().padStart(2, "0")}`
    if (timeString !== selectedTime) {
      onTimeChange(timeString)
    }
  }, [onTimeChange, selectedTime])

  const handleMouseDown = (hand) => {
    setIsDragging(hand)
  }

  const handleMouseMove = useCallback((e) => {
    if (!isDragging) return
    const rect = e.currentTarget.getBoundingClientRect()
    const centerX = rect.left + rect.width / 2
    const centerY = rect.top + rect.height / 2
    const angle = Math.atan2(e.clientY - centerY, e.clientX - centerX)
    const degrees = ((angle * 180) / Math.PI + 90 + 360) % 360

    if (isDragging === "hour") {
      const newHours = Math.round(degrees / 30) % 12
      const newTime = { ...time, hours: newHours }
      setTime(newTime)
      notifyTimeChange(newTime)
    } else if (isDragging === "minute") {
      const newMinutes = Math.round(degrees / 6) % 60
      const newTime = { ...time, minutes: newMinutes }
      setTime(newTime)
      notifyTimeChange(newTime)
    }
  }, [isDragging, time, notifyTimeChange])

  const handleMouseUp = useCallback(() => {
    setIsDragging(null)
  }, [])

  const hourAngle = time.hours * 30 + time.minutes * 0.5 - 90
  const minuteAngle = time.minutes * 6 - 90

  return (
    <div className="analog-clock-container">
      <div
        className="analog-clock"
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
      >
        <div className="clock-face">
          {Array.from({ length: 12 }, (_, i) => (
            <div
              key={i}
              className="hour-marker"
              style={{ transform: `rotate(${i * 30}deg) translateY(-45px)` }}
            >
              {i === 0 ? 12 : i}
            </div>
          ))}

          <div
            className="clock-hand hour-hand"
            style={{ transform: `rotate(${hourAngle}deg)` }}
            onMouseDown={() => handleMouseDown("hour")}
          />

          <div
            className="clock-hand minute-hand"
            style={{ transform: `rotate(${minuteAngle}deg)` }}
            onMouseDown={() => handleMouseDown("minute")}
          />

          <div className="clock-center" />
        </div>
      </div>

      <div className="time-display mt-2 flex flex-col items-center">
  <input
    type="time"
    className="bg-transparent text-[#ff1493]  rounded px-2 py-1 text-sm text-center w-[100px]"
    value={`${(time.hours === 0 ? 12 : time.hours).toString().padStart(2, "0")}:${time.minutes.toString().padStart(2, "0")}`}
    onChange={(e) => {
      const [newHoursStr, newMinutesStr] = e.target.value.split(":")
      const newHours = Number(newHoursStr) % 12 + 3
      const newMinutes = Number(newMinutesStr) + 15
      const newTime = { hours: newHours, minutes: newMinutes }
      setTime(newTime)
      notifyTimeChange(newTime)
    }}
  />
</div>

    </div>
  )
}
