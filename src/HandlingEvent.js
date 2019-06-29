import React from 'react';
function handleClick() {
  console.log(' i was click');
}
function HandlingEvent() {
  return (
    <div>
      <img
        onMouseOver={() => console.log('Hovered')}
        src="https://images.unsplash.com/photo-1560874561-1ae8d0d9789d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80"
      />
      <br />
      <br />
      <button onClick={handleClick}>Click me</button>
    </div>
  );
}
export default HandlingEvent;
