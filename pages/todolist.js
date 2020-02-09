import { useState } from 'react'

function TodoForm() {
  const [input, setInput] = useState('')
  const changeInput = event => setInput(event.target.value)
  return (
    <>
      <input type="text" onChange={changeInput} />
      <button onClick={() => setTodos([{ id: +new Date(), input }, ...todos])}>
        add
      </button>
    </>
  )
}
function TodoList() {
  const [todos, setTodos] = useState([])
  return (
    <>
      <ul>
        {todos.map(todo => (
          <li key={todo.id}> {todo.input}</li>
        ))}
      </ul>
    </>
  )
}
function Index() {
  return <></>
}
export default Index
