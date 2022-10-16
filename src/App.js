import React from "react"
import Die from "./components/Die"
import { nanoid } from 'nanoid'
import './App.css';

function App() {
  function allNewDice() {
    const randomNumbers = []
    for (let i = 0; i < 10; i++){
        randomNumbers.push(generateNewDice())
    }
    return randomNumbers
  }

  function generateNewDice(){
    return {
        value: Math.ceil(Math.random() * 6),
        isHeld : false,
        id : nanoid()
    }
  }

  const [dice, setDice] = React.useState(allNewDice())

  function holdDice(id){
      setDice(oldDice => oldDice.map(die => {
        return die.id === id ? 
        {...die, isHeld: !die.isHeld} : 
        die
      }))

    }

  
  const die = dice.map(dieRoll => 
    <Die value={dieRoll.value} key={dieRoll.id} isHeld={dieRoll.isHeld} holdDice={()=>holdDice(dieRoll.id)} />)

  function rollDice(){
      setDice(oldDice => oldDice.map(die => {
        return die.isHeld ?
        die :
        generateNewDice()
      }))
  }

  return (
      <main>
        <h1 className="title">Tenzies</h1>
        <p className="instructions">Roll until all dice are the same. Click each die to freeze it at its current value between rolls.</p>
        <div className="dice-container">
            {die}
            
        </div>
        <button className="roll-dice" onClick={rollDice}>Roll On</button>
          
      </main>

  )
}

export default App;
