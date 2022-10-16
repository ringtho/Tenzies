import React from "react"
import Die from "./components/Die"
import { nanoid } from 'nanoid'
import Confetti from 'react-confetti'
import './App.css';

function App() {

  const [dice, setDice] = React.useState(allNewDice())

  const [tenzies, setTenzies] = React.useState(false)

  React.useEffect(()=> {
    const allHeld = dice.every(die => die.isHeld)
    const firstValue = dice[0].value
    const allSame = dice.every(die => die.value === firstValue )
    if (allHeld && allSame){
      setTenzies(true)
      console.log("You won!")
    }
  },[dice])

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
    if(!tenzies){
      setDice(oldDice => oldDice.map(die => {
        return die.isHeld ?
        die :
        generateNewDice()
      }))
    }else{
      setTenzies(false)
      setDice(allNewDice())
    }
      
  }

  return (
      <main>
        {tenzies && <Confetti /> }
        <h1 className="title">Tenzies</h1>
        <p className="instructions">Roll until all dice are the same. Click each die to freeze it at its current value between rolls.</p>
        <div className="dice-container">
            {die}
            
        </div>
        <button className="roll-dice" onClick={rollDice}>{tenzies? "New Game" : "Roll On"}</button>
          
      </main>

  )
}

export default App;
