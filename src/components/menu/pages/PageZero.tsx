import * as React from 'react';
import { useTimeout } from '../../board/constants/useTimeout.js'

interface IProps {
  handleNextClick: () => void,
  handleStartClick: () => void,
}

const initialStatus: { [key:string]: boolean | string | any } = {
  nameEntered: false,
  questionAnswered: false,
  answer: '',
  conversation: [],
}

const initialTimer: { [key:string]: number | null } = {
  countOne: null,
  countTwo: null,
  countThree: null,
  countFour: null,
  countFive: null,
}

const PageZero: React.FC<IProps> = props => {

  const [status, setStatus] = React.useState(initialStatus)
  const [timer, setTimer] = React.useState(initialTimer)

  const handleSubmitNameClick = () => {
    setStatus({ ...status, nameEntered: true })
  }

  const handleQuestionClick = (num: number) => {
    switch(num){
      case 1:
        return setStatus({ ...status, questionAnswered: true, answer: 'Okay Sam.' })
      case 2:
        return setStatus({ ...status, questionAnswered: true, answer: "Close only counts in horseshoes, Sam. This game is Agile Stress ..."})
      case 3:
        return setStatus({ ...status, questionAnswered: true, answer: "I'm glad you love your name, Sam."})
      case 4:
        return setStatus({ ...status, questionAnswered: true, answer: "Of course, Sam. Your handwriting is quite revealing."})
      default:
        return setStatus({ ...status })
    }
  }

  useTimeout(() => {
    setStatus({ ...status, conversation: [ ...status.conversation, <p key={1}>I went ahead and put an S logo in the top right corner as your avatar.</p>] })
  }, timer.countOne)
  useTimeout(() => {
    setStatus({ ...status, conversation: [ ...status.conversation, <p key={2}>Pretty cool, right?</p>] })
  }, timer.countTwo)
  useTimeout(() => {
    setStatus({ ...status, conversation: [ ...status.conversation, <p key={3}>I guess I'm psychic.</p>] })
  }, timer.countThree)
  useTimeout(() => {
    setStatus({ ...status, conversation: [ ...status.conversation, <p key={4}>Anyway, do you already know how to play or do you need some direction?</p>] })
  }, timer.countFour)
  useTimeout(() => {
    setStatus({ ...status, conversation: [ ...status.conversation, <ul key={5}>
    <li key={6}><button onClick={() => props.handleStartClick()}>Start a New Game</button></li>
    <li key={7}><button onClick={() => props.handleNextClick()}>How to Play</button></li>
    </ul>] })
  }, timer.countFive)
  React.useEffect(() => {
    if(status.questionAnswered) {
      setTimer({ countOne: 1000, countTwo: 3000, countThree: 5000, countFour: 7000, countFive: 8000,  })
    }
  }, [status])

  if (!status.nameEntered) {
    return (
      <div>
        <h4>
          Hello, I am Agile Bot. Please enter your name to start:
        </h4>
          <input type="text" placeholder="name"></input>
        <button onClick={() => handleSubmitNameClick()}>Submit Name to Agile Bot.</button>
      </div>
    )
  }

  if (!status.questionAnswered) {
    return (
      <div>
        <h4>
          Okay, your name is Sam right?
        </h4>
        <ul>
          <li><button onClick={() => handleQuestionClick(1)}>No!</button></li>
          <li><button onClick={() => handleQuestionClick(1)}>Nope.</button></li>
          <li><button onClick={() => handleQuestionClick(2)}>Not even close.</button></li>
          <li><button onClick={() => handleQuestionClick(3)}>I love the name Sam, but that's not what I said.</button></li>
          <li><button onClick={() => handleQuestionClick(4)}>Wait, do you think I am boy?</button></li>
          <li><button onClick={() => handleQuestionClick(4)}>Wait, do you think I am girl?</button></li>
        </ul>
      </div>
    )
  }

  return (
    <div>
      <p>
        {status.answer}
      </p>
      {status.conversation}
      <p>

      </p>
      <p>

      </p>
      <p>

      </p>

    </div>
  )

}

export default PageZero;
