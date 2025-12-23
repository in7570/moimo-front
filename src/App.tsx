import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import SampleComp from './components/common/SampleComp'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <p>샘플 컴포넌트</p>
      </div>
      <SampleComp />
    </>
  )
}

export default App
