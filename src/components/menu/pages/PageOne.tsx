import * as React from 'react';

interface IProps {
  handleNextClick: () => void,
}

const PageOne: React.FC<IProps> = props => {

  return (
    <div>
      <p>
        Welcome to Agile Stress, Sam!
      </p>
      <p>
        Let me teach you how to play.
      </p>
      <p>
        I am going to give you several tasks for you to complete for each user story on the left. (Don't worry if they keep repeating, I know you are a good worker!)
      </p>
      <button onClick={() => props.handleNextClick()}>Next</button>
    </div>
  )
}

export default PageOne;
