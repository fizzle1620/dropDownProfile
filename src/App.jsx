import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

import DropDown from './DropDown'

function App() {
  const [count, setCount] = useState(0)

  return (
    <DropDown/>
  )
}

export default App
