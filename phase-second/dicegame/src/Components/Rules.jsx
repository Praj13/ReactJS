import React from 'react';
import styled from 'styled-components';

const Rules = () => {
  return (
    <RulesContainer>
      <h2>How to play Dice Game?</h2>
      <div className="text">
        <p>Select any number</p>
        <p>Click on dice Image.</p>
        <p>If the selected number is the same as the number on the dice, your points will increase by the selected number.</p>
        <p>Otherwise, the points will be deducted by 2.</p>
      </div>
    </RulesContainer>
  );
};

export default Rules;

const RulesContainer = styled.div`
  background-color: #fbf1f1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
  max-width: 800px;
  border-radius: 30px;
  margin: 40px auto;
  
  h1 {
    font-size: 24px;
  }
  .text {
    margin-top: 5px;
    font-size: 15px;
  }
`;
