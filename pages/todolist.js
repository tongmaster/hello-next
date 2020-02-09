import { useState } from 'react'

function Index() {
  const [input, setInput] = useState([])
  return (
    <>
      <input type="text" onChange={event => setInput(event.target.value)} />
      <button onClick={() => setInput([...input, { id: +new date(), input }])}>
        add
      </button>
      <ul>
        {input.map(inputa => (
          <li key={inputa.id}> {inputa.input}</li>
        ))}
      </ul>
    </>
  )
}
export default Index
