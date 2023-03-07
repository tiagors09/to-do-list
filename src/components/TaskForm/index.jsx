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
    <form className="container" onSubmit={handleSubmit}>
      <div className="field">
        <label className="label" htmlFor="name">
          Name
        </label>
        <div className="control">
          <input
            className="input"
            type="text"
            name="name"
            id="name"
            placeholder="Do homework or whatever..."
            onChange={handleChange}
            required
          />
        </div>
      </div>

      <div className="field">
        <label className="label" htmlFor="info">
          Info
        </label>
        <div className="control">
          <input
            className="input"
            type="text"
            name="info"
            id="info"
            placeholder="Until 8:00pm without see answers in Answers section in book"
            onChange={handleChange}
            required
          />
        </div>
      </div>

      <div className="field">
        <div className="control">
          <input className="button is-link" type="submit" value="add task" />
        </div>
      </div>
    </form>
  )
}

export default TaskForm
