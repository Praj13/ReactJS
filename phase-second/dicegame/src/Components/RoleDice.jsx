import React, { useState } from 'react'
import styled from 'styled-components'
// import { useState } from 'react'
const RoleDice = () => {
    // const [currentDice,setCurrentDIce]=useState()
    const generateRandomNumber=(min,max)=>{
        // return Math.floor(Math.random() *(max-min)+min);     
        console.log(Math.floor(Math.random() *(max-min)+min));
    };  
  return (
    <DiceContainer>
     <div className='dice' onClick={()=>{
        generateRandomNumber(1,7)
     }}>
        <img src="./images/dice_1.png" alt="" />
        <p>Click on Dice to roll</p>
    
     </div>
    </DiceContainer>
  )
}

export default RoleDice
const DiceContainer=styled.div`
    /* display:flex;
    align-items:center;
    justify-content:center;
    flex-direction:column; */
    font-size:24px;
    margin-top:30px;

    .dice{
        cursor:pointer;
        display:flex;
        align-items:center;
        flex-direction:column;
    }
  
`

