import { useEffect, useState } from 'react'
import './style.css'

const initState = {
  name: null,
  info: null,
  status: 'do',
}

function TaskForm({ handlerAddTask }) {
  const [fields, setFields] = useState({})

  function handleSubmit(event) {
    event.preventDefault()
    handlerAddTask(fields)
  }

  function handleChange(event) {
    setFields((values) => ({
      ...values,
      [event.target.name]: event.target.value,
    }))
  }

  return (
    <form onSubmit={handleSubmit} className="form">
      <label className="label" htmlFor="name">
        Name
      </label>
      <input
        className="input"
        type="text"
        name="name"
        id="name"
        placeholder="Do homework or whatever..."
        onChange={handleChange}
        required
      />
      <label className="label" htmlFor="info">
        Info
      </label>
      <input
        className="input"
        type="text"
        name="info"
        id="info"
        placeholder="Until 8:00pm without see answers in Answers section in book"
        onChange={handleChange}
        required
      />
      <input className="submit-button" type="submit" value="add task" />
    </form>
  )
}

export default TaskForm
