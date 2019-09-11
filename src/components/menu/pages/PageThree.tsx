import * as React from 'react';

interface IProps {
  handleNextClick: () => void,
  handlePrevClick: () => void,
}

const PageThree: React.FC<IProps> = props => {
  return (
    <div>
      PageTwo
      <button onClick={() => props.handlePrevClick()}>Prev</button>
      <button>Next</button>
    </div>
  )
}

export default PageThree;
