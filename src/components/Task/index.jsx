import './style.css'

function Task({ name, info, status }) {
  const statusColors = {
    do: 'white',
    doing: 'yellow',
    done: 'green',
    fail: 'red',
  }

  return (
    <article
      className="task"
      style={{
        backgroundColor: statusColors[status],
      }}
    >
      <section className="task-name">{name}</section>
      <section className="task-info">{info}</section>
    </article>
  )
}

export default Task
