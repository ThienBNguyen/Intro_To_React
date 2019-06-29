import React from 'react';
import ConditionalRender from './ConditionalRender';

function Conditional(props) {
  if (props.isLoading === true) {
    return <h1>loading...</h1>;
  } else {
    return <h1>some cool stuff about conditional rendering</h1>;
  }
}
export default Conditional;
