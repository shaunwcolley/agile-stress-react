import * as React from 'react';

interface IProps {
  handleNextClick: () => void,
  handlePrevClick: () => void,
}

const PageSix: React.FC<IProps> = props => {
  return (
    <div>
      <p>
        Lastly, you lose points if you put a task in the wrong column.
      </p>
      <button onClick={() => props.handlePrevClick()}>Prev</button>
      <button onClick={() => props.handleNextClick()}>Start Game</button>
    </div>
  )
}

export default PageSix;
