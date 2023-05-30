import { useState } from 'react'
import './styles/App.css'
import Dice from './dice'


function App() {
  return (
    <div className='container'>
      <main className='main'>
        <h1 className='title'>Tenzies</h1>
        <h3 className='description'>
          Roll until all dice are the same. Click each die to freeze it at its
          current value between rolls.
        </h3>

        <div className='dieContainer'>
          <Dice value={2}/>
          <Dice value={2}/>
          <Dice value={2}/>
          <Dice value={2}/>
          <Dice value={2}/>
          <Dice value={2}/>
          <Dice value={2}/>
          <Dice value={2}/>
          <Dice value={2}/>
          <Dice value={2}/>
        </div>
        
      </main>
    </div>
  )
}

export default App
