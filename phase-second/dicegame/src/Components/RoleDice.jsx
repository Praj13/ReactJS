import React from 'react';
import styled from 'styled-components';

const RoleDice = ({ showRules, setShowRules, setError, setScore, rollDice, currentDice }) => {
  const reset = () => {
    setScore(0);
  };

  return (
    <DiceContainer>
      <div className="dice" onClick={rollDice}>
        <img src={`./images/dice_${currentDice}.png`} alt="" />
        <p>Click on Dice to roll</p>
        <div className="btns">
          <button onClick={reset} className="btn1">Reset Score</button>
          <button onClick={() => setShowRules((prev) => !prev)} className="btn2">
            {showRules ? "Hide Rules" : "Show Rules"}
          </button>
        </div>
      </div>
    </DiceContainer>
  );
};

export default RoleDice;

const DiceContainer = styled.div`
  font-size: 24px;
  margin-top: 30px;
  .btns {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  .btn1, .btn2 {
    margin-bottom: 10px;
    padding: 10px;
    width: 220px;
    border-radius: 10px;
  }
  .btn2 {
    background-color: black;
    color: white;
  }
  .btn1:hover {
    background-color: black;
    color: white;
    cursor: pointer;
  }
  .btn2:hover {
    background-color: white;
    color: black;
    cursor: pointer;
  }
  .dice {
    cursor: pointer;
    display: flex;
    align-items: center;
    flex-direction: column;
  }
`;
