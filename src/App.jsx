import Task from './components/Task'
import TaskForm from './components/TaskForm'
import './App.css'

function App() {
  let items = [{ ...localStorage }]
  return (
    <main className="App">
      <header>
        <h1 className="title">to do list</h1>
      </header>
      <TaskForm />
      <article className="tasks">
        <h2>tasks</h2>
        <section className="tasks-list">{/* TODO: Show tasks  */}</section>
      </article>
    </main>
  )
}

export default App
