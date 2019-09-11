import * as React from 'react';

interface IProps {
  handleNextClick: () => void,
  handleStartClick: () => void,
}

const initialStatus: { [key:string]: boolean } = {
  nameEntered: false,
  secondQuestionAnswer: false,
}

const PageZero: React.FC<IProps> = props => {

  const [status, setStatus] = React.useState(initialStatus)

  const handleSubmitNameClick = () => {
    setStatus({ ...status, nameEntered: true })
  }

  const handleSecondQuestionClick = () => {
    setStatus({ ...status, secondQuestionAnswer: true })
  }

  if (!status.nameEntered) {
    return (
      <div>
        <h4>
          Hello, enter your name to start:
        </h4>
          <input type="text" placeholder="name"></input>
        <button onClick={() => handleSubmitNameClick()}>Submit</button>
      </div>
    )
  }
  if (!status.secondQuestionAnswer) {
    return (
      <div>
        <h4>
          Okay, your name is Steve right?
        </h4>
        <button onClick={() => handleSecondQuestionClick()}>No!</button>
        <button onClick={() => handleSecondQuestionClick()}>Nope.</button>
      </div>
    )
  }
  return (
    <div>
      <p>
      Okay Steve, I went ahead and put an S logo in the top right corner as your avatar.
      Pretty cool, right?
      I guess I'm psychic.
      Anyway do you already know how to play or do you need some direction?
      </p>
      <button onClick={() => props.handleStartClick()}>Start a New Game</button>
      <button onClick={() => props.handleNextClick()}>How to Play</button>
    </div>
  )

}

export default PageZero;
