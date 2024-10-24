import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';

// Global styles to remove scroll
const GlobalStyle = createGlobalStyle`
  body, html {
    margin: 0;
    padding: 0;
    overflow: hidden;  /* Prevent scrolling */
    height: 100%;  /* Ensure full height */
    width: 100%;   /* Ensure full width */
  }
`;

// Container to replace Body with proper centering
const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;  /* Full height for proper vertical centering */
    width: 100vw;   /* Full width for proper horizontal centering */
    margin: 0;
    padding: 0;
`;

const Img = styled.img`
  width: 100%;  /* Adjusted to a more appropriate size for the image */
`;

const Div = styled.div`
    width: 50vw;  /* Adjusted to ensure it doesn't exceed the container */
    height: 50vh;
    /* border: 1px solid black; */
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const Title = styled.h1`
  font-size: 6rem;
`;

const Button = styled.button`
    padding: 0.75rem 3rem;
    font-size: 1.2rem;
    background-color: #000000;  /* Black background */
    color: white;
    border: none;
    border-radius: 0.5rem;
    cursor: pointer;

    &:hover {
        background-color: #0056b3;  /* Darker blue on hover */
    }
`;

const StartGame = ({toggle}) => {
  return (
    <>
      <GlobalStyle />  {/* Inject the global style */}
      <Container>
        <Div>
          <Img src="./images/dice.png" alt="Dice Game" />
        </Div>
        <Div>
          <Title>DICE GAME</Title>
          <Button onClick={toggle}>Play now</Button>
        </Div>
      </Container>
    </>
  );
}

export default StartGame;
