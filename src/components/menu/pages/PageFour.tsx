import * as React from 'react';

interface IProps {
  handleNextClick: () => void,
  handlePrevClick: () => void,
}

const PageFour: React.FC<IProps> = props => {
  return (
    <div>
      <p>
        Once I have checked a task for Quality Assurance (QA) I will decide if a task must be worked on some more or if it is completely completed.
      </p>
      <button onClick={() => props.handlePrevClick()}>Prev</button>
      <button onClick={() => props.handleNextClick()}>Next</button>
    </div>
  )
}

export default PageFour;
