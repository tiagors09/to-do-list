import { useState } from 'react'
import './style.css'

function Task({ name, info }) {
  const [index, setIndex] = useState(0)

  const statusColors = [
    'hsl(0, 0%, 100%)',
    'hsl(48, 100%, 67%)',
    'hsl(141, 71%, 48%)',
    'hsl(348, 100%, 61%)',
  ]

  return (
    <div
      className="box"
      style={{
        backgroundColor: statusColors[index],
      }}
      onClick={() => {
        setIndex((index) => (index + 1) % statusColors.length)
      }}
    >
      <div className="container">
        <h1 className="title">{name}</h1>
        <p className="content">{info}</p>
      </div>
    </div>
  )
}

export default Task
