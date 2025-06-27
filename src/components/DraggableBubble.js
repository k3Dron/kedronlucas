'use client'

import React, { useEffect, useRef, useState } from 'react'

export default function DraggableBubble({ text }) {
  const bubbleRef = useRef(null)
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [dragging, setDragging] = useState(false)
  const [offset, setOffset] = useState({ x: 0, y: 0 })

  // Set random initial position
  useEffect(() => {
    const x = Math.random() * (window.innerWidth - 200)
    const y = Math.random() * (window.innerHeight - 200)
    setPosition({ x, y })
  }, [])

  const handleMouseDown = (e) => {
    setDragging(true)
    const rect = bubbleRef.current.getBoundingClientRect()
    setOffset({ x: e.clientX - rect.left, y: e.clientY - rect.top })
  }

  const handleMouseMove = (e) => {
    if (!dragging) return
    setPosition({ x: e.clientX - offset.x, y: e.clientY - offset.y })
  }

  const handleMouseUp = () => {
    setDragging(false)
  }

  useEffect(() => {
    if (dragging) {
      window.addEventListener('mousemove', handleMouseMove)
      window.addEventListener('mouseup', handleMouseUp)
    } else {
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('mouseup', handleMouseUp)
    }

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('mouseup', handleMouseUp)
    }
  }, [dragging])

  return (
    <div
      ref={bubbleRef}
      onMouseDown={handleMouseDown}
      className="float-animation bubble text-white text-lg font-bold select-none"
      style={{
        left: position.x,
        top: position.y,
        position: 'absolute',
      }}
    >
      {text}
    </div>
  )
}
