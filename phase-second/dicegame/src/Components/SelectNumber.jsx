import React, { useState } from 'react'
import styled from 'styled-components'

const SelectNumber = () => {
    const arrNumber=[1,2,3,4,5,6]
    const[selectedNumber,setSelectedNumber]=useState();
  return (
    <NumberSelectorContainer>
    <div className='flex'>
        {arrNumber.map((value,i)=>
        <Box isSelected={value==selectedNumber} onClick={()=>{setSelectedNumber(value)}} key={i}>{value}</Box>)}

    </div>
    <p>Selected Number</p>
 
    </NumberSelectorContainer>
  )
}

export default SelectNumber
const NumberSelectorContainer=styled.div`
display:flex;
flex-direction:column;
align-items:end;  
.flex{
  display:flex;
gap:24px;
}
p{
  font-size:24px;
  font-weight:700px;
}

`
const Box=styled.div`
    width:72px;
    height:72px;
    border: 1px solid black;
    display:grid;
    place-items:center;
    font-size:24px;
    font-weight:700px;
    background-color:${(props)=>(props.isSelected?"black":"white")};
    color:${(props)=>(!props.isSelected?"black":"white")};
    cursor:pointer;

`