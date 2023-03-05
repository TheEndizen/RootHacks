
import React from 'react';
import ReactCardFlip from 'react-card-flip';
import { useState } from "react";

import turnip_1 from "../images/turnip_1.jpg";
import turnip_2 from "../images/turnip_2.jpg";
import turnip_3 from "../images/turnip_3.jpg";
import turnip_4 from "../images/turnip_4.jpg";
import turnip_5 from "../images/turnip_5.jpg";



function FlipCard() {

  const [flip, setFlip] = useState(false);
  const [correctCnt, setCorrectCnt] = useState(0);
  
const handleCorrect = () => {
  console.log("correct count:", correctCnt)
  setCorrectCnt(correctCnt + 1);
  setFlip(!flip)
};



const BackCard = () => {
  console.log("correct count:", correctCnt)
  // get answer from db
  return (
    "back card")
}


const FrontCard = () => {
  if (correctCnt != 1 && correctCnt%2 == 0){
    console.log("showing turnpip")
    var num = Math.floor(Math.random() * (5 - 1 + 1))
    var path = ("turnip_"+ Math.floor(Math.random() * (5 - 1 + 1))) 
    console.log(path)
    setCorrectCnt(0)
    if (num == 1){
      return (<div>
      front card
       <img src={turnip_1} className="Turnip" />
       </div>)
    }
    if (num == 2){
      return (<div>
      front card
       <img src={turnip_2} className="Turnip" />
       </div>)
    }
    if (num == 3){
      return (<div>
      front card
       <img src={turnip_3} className="Turnip" />
       </div>)
    }
    if (num == 4){
      return (<div>
      front card
       <img src={turnip_4} className="Turnip" />
       </div>)
    }
    if (num == 5){
      return (<div>
      front card
       <img src={turnip_5} className="Turnip" />
       </div>)
    }


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
            }} onClick={() => setFlip(!flip)}>
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