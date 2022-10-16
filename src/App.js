import React from "react"
import Die from "./components/Die"
import { nanoid } from 'nanoid'
import './App.css';

function App() {
  function allNewDice() {
    const randomNumbers = []
    for (let i = 0; randomNumbers.length < 10; i++){
        const randomNumber = Math.ceil(Math.random() * 6)
        randomNumbers.push({
            value: randomNumber,
            isHeld: false,
            id : nanoid()

        })
    }
    return randomNumbers
  }
  const [dice, setDice] = React.useState(allNewDice())
  const die = dice.map(dieRoll => <Die value={dieRoll.value} key={dieRoll.id} isHeld={()=>isHeld(dieRoll.id)} />)

  function rollDice(){
      setDice(allNewDice())
  }

  function isHeld(id){
      for (let i = 0; i < 10; i++){
          if (id === dice[i].id){
              setDice(prevState => ({
                  ...prevState,
                  isHeld: !isHeld

              }))
          }
      }
      
      console.log(id)

  }


  return (
      <main>
          <div className="container">
              {die}
              <button className="roll" onClick={rollDice}>Roll On</button>
          </div>
          
      </main>

  )
}

export default App;
