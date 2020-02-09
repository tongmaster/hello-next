import { useState } from 'react'

function Index() {
  const [input, setInput] = useState('')
  return (
    <>
      <input
        type="text"
        onChange={event => setInput(event.target.value)}
        value={input}
      />
      <button onClick={() => setInput('')}>delete</button>
      <div>{input}</div>
      <ul></ul>
    </>
  )
}
export default Index
