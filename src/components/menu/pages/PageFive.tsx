import * as React from 'react';

interface IProps {
  handleNextClick: () => void,
  handlePrevClick: () => void,
}

const PageFive: React.FC<IProps> = props => {
  return (
    <div>
      <p>
        As you do well your score will go up. Because you are such a great worker, I will give you more work by adding more user stories!
      </p>
      <button onClick={() => props.handlePrevClick()}>Prev</button>
      <button onClick={() => props.handleNextClick()}>Next</button>
    </div>
  )
}

export default PageFive;
