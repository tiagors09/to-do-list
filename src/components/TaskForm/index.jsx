import md5 from 'md5'
import { useState } from 'react'
import './style.css'

function TaskForm() {
  const [fields, setFields] = useState({})

  function handleSubmit(event) {
    event.preventDefault()
    localStorage.setItem(localStorage.length + 1, JSON.stringify(fields))
  }

  function handleChange(event) {
    setFields((values) => ({
      ...values,
      [event.target.name]: event.target.value,
    }))
  }

  return (
    <form onSubmit={handleSubmit} className="task-form">
      <label className="label" htmlFor="task-name">
        Name
      </label>
      <input
        className="input"
        type="text"
        name="task-name"
        id="task-name"
        placeholder="Do homework or whatever..."
        onChange={handleChange}
        required
      />
      <label className="label" htmlFor="task-info">
        Info
      </label>
      <input
        className="input"
        type="text"
        name="task-info"
        id="task-info"
        placeholder="Until 8:00pm without see answers in Answers section in book"
        onChange={handleChange}
        required
      />
      <input className="submit-button" type="submit" value="add task" />
    </form>
  )
}

export default TaskForm
