import * as React from 'react';

interface IProps {
  handleStartClick: () => void,
  handleNextClick: () => void,
}

const PageOne: React.FC<IProps> = props => {

  return (
    <div>
      <p>
        Welcome to Agile Stress! To begin Click on start below.
      </p>
      <button onClick={() => props.handleStartClick()}>Start</button>
      <h4>
        How to play
      </h4>
      <p>
        Once the game starts, move the tickets to their appropriate columns. Pick any task from 'to-do' and move it to 'doing', when task it complete it will tell you to move the task to the next column.
        Be careful, multi-tasking is a proven way to accomplish less in the same amount of time!
        Once a task has completed Quality Assurance (QA) it can either go back to doing or you can finally move that task to done!
        Lastly, you lose points if you put a task in the wrong column.
      </p>
      <button onClick={() => props.handleNextClick()}>Next</button>
    </div>
  )
}

export default PageOne;
