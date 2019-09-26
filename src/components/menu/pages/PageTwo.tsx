import * as React from 'react';

interface IProps {
  handleNextClick: () => void,
  handlePrevClick: () => void,
}

const PageTwo: React.FC<IProps> = props => {
  return (
    <div>
      <p>
        Pick any task from the 'to-do' list that you want to work on and move it to 'doing', when I've decided you completed the task, I will tell you to move the task to the next column.
      </p>
      <button onClick={() => props.handlePrevClick()}>Prev</button>
      <button onClick={() => props.handleNextClick()}>Next</button>
    </div>
  )
}

export default PageTwo;
