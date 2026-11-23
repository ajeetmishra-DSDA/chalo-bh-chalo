import { useState } from 'react'
import h from './assets/hero.png'
import reactLogo from './assets/react.svg'
import v from './assets/vite.svg'
import './App.css'

import { Outlet } from 'react-router-dom'
import Hooks from './Hooks'
import { ErrorBoundary } from "react-error-boundary";



function App() {
 
// const [sonu,Ajeet]=useState(20)
let sonu=20
  return (  
   
    <>
   
    {/* <Outlet/>
   */}
   
   <h1>hello this is Application </h1>
   <Hooks/>
    </>
  )
}

export default App
