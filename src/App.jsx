import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import LikeButton from './LikeButton'
import LudoBoard from './LoduBoard'
import TodoList from './TodoList'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <TodoList/>
    {/* <LudoBoard/> */}
    {/* <LikeButton/> */}
    </>
  )
}

export default App
