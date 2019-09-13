import * as React from 'react';

interface IProps {
  handleNextClick: () => void,
}

const PageOne: React.FC<IProps> = props => {

  return (
    <div>
      <h3>
        Welcome to Agile Stress, Stan!
      </h3>
      <h4>
        Let me teach you how to play.
      </h4>
      <p>
        I am going to give you several tasks for you to complete for each user story on the left. (Don't worry if they keep repeating, I know you are a good worker!)
      </p>
      <button onClick={() => props.handleNextClick()}>Next</button>
    </div>
  )
}

export default PageOne;
