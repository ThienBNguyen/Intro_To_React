import React from 'react';
import reactDOM from 'react-dom';

function Reactclock() {
  const date = new Date();
  const hours = date.getHours();
  let timeOfDay;

  if (hours === 12) {
    timeOfDay = 'morning';
  } else if (hours >= 12 && hours < 17) {
    timeOfDay = 'afternoon';
  } else {
    timeOfDay = 'night';
  }
  return <h1>good {timeOfDay}!</h1>;
}
export default Reactclock;
