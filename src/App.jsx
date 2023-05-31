import { useState } from 'react'
import './styles/App.css'
import Dice from './dice'

/**
 * Returns an array of size 10 with random numbers 0-6
 */
const newDice = () => {
  let diceRoles = []
  for(let i = 0; i < 10; i++){
    diceRoles.push(Math.floor(Math.random() * 6))
  }

  return diceRoles
}

function App() {
  const [diceList, setDiceList] = useState(newDice())


  const renderDice = diceList.map((entry, index) => {
    return (
      <Dice 
        key={index}  
        value={entry}
      />
    )
  })

  return (
    <div className='container'>
      <main className='main'>
        <h1 className='title'>Tenzies</h1>
        <h3 className='description'>
          Roll until all dice are the same. Click each die to freeze it at its
          current value between rolls.
        </h3>

        <div className='dieContainer'>
          {renderDice}
        </div>
        
      </main>
    </div>
  )
}

export default App
