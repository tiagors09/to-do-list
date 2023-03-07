import Task from './components/Task'
import TaskForm from './components/TaskForm'
import './App.css'
import { useState } from 'react'
import md5 from 'md5'

function App() {
  const [tasks, setTasks] = useState([])

  function addTask(task) {
    console.log(tasks)
    setTasks((tasks) => [...tasks, task])
  }

  return (
    <main className="section">
      <div className="container">
        <header>
          <h1 className="title is-1">to do list</h1>
        </header>
      </div>
      <TaskForm handlerAddTask={addTask} />
      <div className="container">
        <h2 className="title is-2">tasks</h2>
        <div className="container">
          {tasks.map((task) => {
            return <Task name={task['name']} info={task['info']} />
          })}
        </div>
      </div>
    </main>
  )
}

export default App
