import { useState } from 'react'
import './style.css'

function Task({ name, info, status }) {
  const [index, setIndex] = useState(0)

  const statusColors = ['white', 'yellow', 'green', 'red']

  return (
    <article
      className="task"
      style={{
        backgroundColor: statusColors[index],
      }}
      onClick={() => {
        setIndex((index) => (index + 1) % statusColors.length)
      }}
    >
      <section className="name">
        <h1>{name}</h1>
      </section>
      <section className="info">
        <p>{info}</p>
      </section>
    </article>
  )
}

export default Task
