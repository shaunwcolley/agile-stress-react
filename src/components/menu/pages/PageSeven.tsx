import * as React from 'react';

interface IProps {
  handleStartClick: () => void,
  handlePrevClick: () => void,
}

const PageSeven: React.FC<IProps> = props => {
  return (
    <div>
      <p>
        Oh, Sam wait! I forgot to tell you. Any time you want to pause, hit the home button on the top left or your first inital avatar in the top right.
      </p>
      <button onClick={() => props.handlePrevClick()}>Prev</button>
      <button onClick={() => props.handleStartClick()}>Tell Agile Bot to Start Game</button>
    </div>
  )
}

export default PageSeven;
