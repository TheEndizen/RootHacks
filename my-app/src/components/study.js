
import React from 'react';
import ReactCardFlip from 'react-card-flip';
import { useState } from "react";
import "../images/turnip_1.jpg";
import "../images/turnip_2.jpg";
import "../images/turnip_3.jpg";
import "../images/turnip_4.jpg";
import "../images/turnip_5.jpg";



// Math.floor(Math.random() * (5 - 1 + 1)) + 1

function BackCard(){
  // get answer from db
  return "back card"
}


function FlipCard() {

  const [flip, setFlip] = useState(false);
  const [correctCnt, setCorrectCnt] = useState(0);
  const [incorrectCnt, setIncorrectCnt] = useState(0);

const handleCorrect = () => {
  console.log("correct count:", correctCnt)
  setCorrectCnt(correctCnt + 1);
  setFlip(!flip)
};

const handleIncorrect = () => {
  setIncorrectCnt(incorrectCnt + 1);
  setFlip(!flip)
};

const FrontCard = () => {
  if (correctCnt != 1 && correctCnt%2 == 0){
    console.log("showing turnpip")
    let path = "../images/turnip_"+ Math.floor(Math.random() * (5 - 1 + 1)) + 1 
    return (
      <div>
      front card
       <img src={path} className="App-logo" alt="logo" />
       </div>
    )

  }
  else {
    return (<div>front card
    
      </div>
      )
    }
}


return (
   <div className="Card">
    <ReactCardFlip isFlipped={flip} 
        flipDirection="vertical">
        <div style={{
            width: '300px',
            height: '200px',
            background: '#d7fbda',
            fontSize: '40px',
            color: 'green',
            margin: '20px',
            borderRadius: '4px',
            textAlign: 'center',
            padding: '20px'
        }}>
            <FrontCard />
            <br />
            <br />
            <button style={{
                width: '150px',
                padding: '10px',
                fontSize: '20px',
                background: '#f5d9fa',
                fontWeight: 'bold',
                borderRadius: '5px'
            }} onClick={() => setFlip(!flip)}>
                Flip</button>
        </div>
        <div style={{
            width: '300px',
            height: '200px',
            background: '#fbd7f8',
            fontSize: '40px',
            color: 'blue',
            margin: '20px',
            borderRadius: '4px',
            textAlign: 'center',
            padding: '20px'
        }}>
            <BackCard />
            <br />
            <button style={{
                width: '150px',
                padding: '10px',
                fontSize: '20px',
                background: '#f5d9fa',
                fontWeight: 'bold',
                borderRadius: '5px'
            }} onClick={() => handleIncorrect() }>
                Incorrect</button>

                <button style={{
                width: '150px',
                padding: '10px',
                fontSize: '20px',
                background: '#f5d9fa',
                fontWeight: 'bold',
                borderRadius: '5px'
            }} onClick={() => handleCorrect()}>
                Correct</button>
        </div>
    </ReactCardFlip>
    </div>
);
          }
const Study = () => {
  return (
    <div className='Component'>
      <h2>Study your cards!</h2>
      <FlipCard />
    </div>
  );
};
  
export default Study;