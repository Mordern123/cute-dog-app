import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="container">
      <div className="dog">
        <div className="ear-l"></div>
        <div className="ear-r"></div>
        <div className="face">
          <div className="eye-l"></div>
          <div className="eye-r"></div>
          <div className="nose"></div>
          <div className="mouth"></div>
        </div>
        <div className="body"></div>
        <div className="tail"></div>
        <div className="leg-1"></div>
        <div className="leg-2"></div>
      </div>
    </div>
  )
}

export default App
