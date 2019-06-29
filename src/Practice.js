import React from 'react';
import JokeCard from './PracticeCard';
import jokesData from './jokesData'
function Joke() {
  // const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  // const doubled = nums.map(function(num) {
  //   return num * 2
  // })

const jokeComponents = jokesData.map(Joke => <JokeCard key={Joke.id} question = {Joke.question} punchLine = {Joke.punchLine} />)
   
 
  return (
    <div className="jokes">
      {jokeComponents}
    </div>
  );
}

export default Joke;
