//import { useState } from 'react'
import './App.css'
import Education from './components/Education'
import GeneralInfo from './components/GeneralInfo'
import Work from './components/Work'

function App() {

  return (
    <>
    <div className='everything'>
      <GeneralInfo></GeneralInfo>
      <Education></Education>
      <Work></Work>
    </div>
    </>
  )
}

export default App
