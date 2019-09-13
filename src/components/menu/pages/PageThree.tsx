import * as React from 'react';

interface IProps {
  handleNextClick: () => void,
  handlePrevClick: () => void,
}

const PageThree: React.FC<IProps> = props => {
  return (
    <div>
      <p>
        Be careful, multi-tasking is a proven way to accomplish less in the same amount of time! I will punish you by removing time. You're not superman, Sam. You are desk worker, so act like it!
      </p>
      <button onClick={() => props.handlePrevClick()}>Prev</button>
      <button onClick={() => props.handleNextClick()}>Next</button>
    </div>
  )
}

export default PageThree;
