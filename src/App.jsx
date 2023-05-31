import { useState, useEffect } from 'react'
import './styles/App.css'
import Dice from './dice'

/**
 * Returns an array of size 10 with random numbers 0-6
 */
const newDice = () => {
  const diceRoles = []
  for(let i = 0; i < 10; i++){
    diceRoles.push(
      {
        value: Math.floor(Math.random() * 6),
        isToggled: false,
        id: i
      }
    )
  }

  return diceRoles
}



function App() {
  const [diceList, setDiceList] = useState(newDice())
  
  /**
   * handles when a die is clicked
   */
  const toggleDice = (index) => {
    setDiceList(diceList.map((entry) => {
      return {
        ...entry,
        isToggled: index === entry.id ? !entry.isToggled : entry.isToggled
      }
    }))
  }
  
  const rollNewDice = () => {
    console.log('im clicked')
    setDiceList(diceList.map((entry) => {
      
      return {
        ...entry,
        value: entry.isToggled ? entry.value : Math.floor(Math.random() * 6) 
      }
    }))
  }


  const renderDice = diceList.map((entry) => {
    return (
      <Dice 
        key={entry.id} 
        id={entry.id} 
        value={entry.value}
        isToggled={entry.isToggled}
        handleClick={toggleDice}
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
        <button className='rerollDice' onClick={rollNewDice}>
          click Me
        </button>
        
      </main>
    </div>
  )
}

export default App
