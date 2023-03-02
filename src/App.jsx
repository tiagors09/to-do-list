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
    <main className="App">
      <header>
        <h1 className="title">to do list</h1>
      </header>
      <TaskForm handlerAddTask={addTask} />
      <article className="tasks">
        <h2>tasks</h2>
        <section className="list">
          {tasks.map((task) => {
            return <Task name={task['name']} info={task['info']} />
          })}
        </section>
      </article>
    </main>
  )
}

export default App
