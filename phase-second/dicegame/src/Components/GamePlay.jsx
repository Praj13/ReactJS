import React, { useState } from 'react';
import TotalScore from './TotalScore.jsx';
import SelectNumber from './SelectNumber.jsx';
import styled from 'styled-components';
import RoleDice from './RoleDice.jsx';
import Rules from './Rules.jsx';

const GamePlay = () => {
  const [selectedNumber, setSelectedNumber] = useState();
  const [currentDice, setCurrentDice] = useState(2);
  const [score, setScore] = useState(0);
  const [error, setError] = useState("");
  const [showRules, setShowRules] = useState(false);

  const generateRandomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min) + min);
  };

  const rollDice = () => {
    if (!selectedNumber) {
      setError("Please select a number.");
      return;
    }

    const randomNumber = generateRandomNumber(1, 7);
    setCurrentDice((prev) => randomNumber);
    if (selectedNumber == randomNumber) {
      setScore((prev) => prev + randomNumber);
    } else {
      setScore((prev) => prev - 2);
    }
    setSelectedNumber(undefined);
  };

  return (
    <MainContainer>
      <div className="top_section">
        <TotalScore score={score} />
        <div className="right">
          <h3>{error}</h3>
          <SelectNumber
            error={error}
            setError={setError}
            selectedNumber={selectedNumber}
            setSelectedNumber={setSelectedNumber}
          />
        </div>
      </div>
      <RoleDice
        showRules={showRules}
        setShowRules={setShowRules}
        setError={setError}
        setScore={setScore}
        currentDice={currentDice}
        rollDice={rollDice}
      />
      {showRules && <Rules />}
    </MainContainer>
  );
};

export default GamePlay;

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 30px;
  .top_section {
    display: flex;
    justify-content: space-around;
  }
  h3 {
    color: red;
    display: flex;
    justify-content: end;
  }
`;
