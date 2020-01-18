import React, { useState, useEffect } from 'react'

function useLocalStorage(key, initialValue) {
  //   const [value, setValue] = useState(initialValue)
  const [value, setValue] = useState(null)
  const setItem = newValue => {
    setValue(newValue)
    localStorage.setItem(key, newValue)
  }
  const removeItem = () => {
    setValue(null)
    localStorage.removeItem(key)
  }
  useEffect(() => {
    // localStorage.setItem(key, initilValue)
    setItem(initialValue)
  }, [key])
  return [value, setItem, removeItem]
}
function Localstore() {
  const [count, setCount, removeCount] = useLocalStorage('count', 0)

  return (
    <>
      <div>{count}</div>
      <button onClick={() => setCount(count !== null ? count + 1 : 0)}>
        +
      </button>
      <button onClick={() => removeCount()}>-</button>
    </>
  )
}
export default Localstore
