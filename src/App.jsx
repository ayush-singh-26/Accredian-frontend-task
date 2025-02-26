import { useState } from 'react'
import './App.css'
import ReferEarnForm from './ReferEarnForm'
import ReferalPage from './ReferalPage'
import {Toaster} from'react-hot-toast'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Toaster position="top-right"/>
      <ReferalPage />
      <ReferEarnForm />
    </>
  )
}

export default App
