import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis hic sed nesciunt voluptate a cum exercitationem eum doloribus et delectus molestiae nostrum, aliquid perspiciatis, voluptatum fuga aut soluta non reprehenderit.
    </>
  )
}

export default App
