import React from 'react';
import reactDOM from 'react-dom';

function Reactclock() {
  const date = new Date();
  const hours = date.getHours();
  let timeOfDay;
  const styles = {
    backgroundColor: 'lightblue',
    fontSize: '4em',
    padding: '10px',
    margin: '0px',
    textAlign: 'center',
    textTransform: 'Capitalize'
  };
  if (hours < 12) {
    timeOfDay = 'morning';
    styles.color = 'white';
  } else if (hours >= 12 && hours < 17) {
    timeOfDay = 'afternoon';
    styles.color = 'green';
  } else {
    timeOfDay = 'night';
    styles.color = 'red';
  }

  return <h1 style={styles}>good {timeOfDay}!</h1>;
}
export default Reactclock;
