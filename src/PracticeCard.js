import React from 'react';

function JokeCard(props) {
  console.log(props);
  return (
    <div className="joke-card">
      <h2 style={{display: !props.question  && "none" }}>question: {props.question}</h2>
      <p>punchLine: {props.punchLine}</p>
    </div>
  );
}
export default JokeCard;
