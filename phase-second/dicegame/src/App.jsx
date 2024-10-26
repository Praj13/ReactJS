import styled from 'styled-components'
import StartGame from './Components/StartGame.jsx'
import GamePlay from './Components/GamePlay.jsx'  
import { useState } from 'react'



function App() {
  const [isGameStarted,setGameStarted]=useState(false)

const toggleGamePlay=()=>{
  setGameStarted((prev)=>!prev)
};


  return (
    <>
   
    {isGameStarted? <GamePlay/>: <StartGame toggle={toggleGamePlay}/> }

    </>
  )
}

export default App
