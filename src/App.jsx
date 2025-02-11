import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Nokia3310 from './nokia'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Nokia3310 />
      <p className="read-the-docs">
        Made By Sapan S. Gajjar - Reach me at <a href="https://isg32.github.io">My Site</a>
      </p>
    </>
  )
}

export default App
