import { useState } from 'react'

function TodoForm({ onSubmit }) {
  const [input, setInput] = useState('')
  const changeInput = event => setInput(event.target.value)
  const submit = () => onSubmit(input)
  return (
    <>
      <input type="text" onChange={changeInput} />
      <button onClick={submit}>add</button>
    </>
  )
}
function TodoList({ todoslist }) {
  return (
    <>
      <ul>
        {todoslist.map(todo => (
          <li key={todo.id}> {todo.input}</li>
        ))}
      </ul>
    </>
  )
}
function Index() {
  const [todos, setTodos] = useState([])
  const addTodo = input => setTodos([{ id: +new Date(), input }, ...todos])
  return (
    <>
      <TodoForm onSubmit={addTodo}></TodoForm>
      <TodoList todoslist={todos}></TodoList>
    </>
  )
}
export default Index
