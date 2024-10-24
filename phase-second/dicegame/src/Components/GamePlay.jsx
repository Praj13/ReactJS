import React from 'react'
import TotalScore from './TotalScore.jsx'
import SelectNumber from './SelectNumber.jsx'
import styled from 'styled-components'
import RoleDice from './RoleDice.jsx'

const GamePlay = () => {
  return (
    <MainContainer>
    <div className='top_section'>
     <TotalScore/>
     <SelectNumber/>
    </div>
    <RoleDice/>
    </MainContainer>
  )
}

export default GamePlay


const MainContainer=styled.div`
padding-top:50px;
  .top_section{
    display:flex;
    justify-content:space-around;
  }
`