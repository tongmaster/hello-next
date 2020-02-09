import { useState } from 'react'

function Index() {
  const [input, setInput] = useState('')
  const changeInput = event => setInput(event.target.value)

  const [todos, setTodos] = useState([])
  return (
    <>
      <input type="text" onChange={changeInput} />
      <button onClick={() => setTodos([{ id: +new Date(), input }, ...todos])}>
        add
      </button>
      <ul>
        {todos.map(todo => (
          <li key={todo.id}> {todo.input}</li>
        ))}
      </ul>
    </>
  )
}
export default Index
