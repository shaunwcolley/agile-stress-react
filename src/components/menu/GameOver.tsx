import * as React from 'react';
import { State } from '../types'
import * as actionTypes from '../../state/actions/actionTypes';

interface IProps {
  state: State,
  dispatch: any
}

const GameOver: React.FC<IProps> = props => {
  const { state, dispatch } = props

  const handleNewGameClick = () => {
    dispatch({ type: actionTypes.NEW_GAME })
  }

  return (
    <div>
      <h1>
        Game Over!
      </h1>
      <p>
        Your Score: {state.score}
      </p>
      <button onClick={() => handleNewGameClick()}>New Game?</button>
    </div>
  )
}

export default GameOver;
