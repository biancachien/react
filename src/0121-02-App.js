import { useState } from 'react'

function App() {
  const [total, setTotal] = useState(0)

  return (
    //要加<></>在整個大()裡
    <>
      <h1>{total}</h1>
      <button
        onClick={() => {
          setTotal(total + 1)
        }}
      >
        +1
      </button>
      <button
        onClick={() => {
          setTotal(total - 1)
        }}
      >
        -1
      </button>
    </>
  )
}

export default App