import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <h1 className='font-medium text-2xl'>Hello mom</h1>
    <button onClick={(event) => setCount(count+1)} className='bg-slate-400 rounded-sm px-2 py-1'>click {count}</button>
    </div>
  )
}

export default App
