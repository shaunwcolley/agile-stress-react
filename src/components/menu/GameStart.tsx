import * as React from 'react';
import { State } from '../types'
import * as actionTypes from '../../state/actions/actionTypes';

interface IProps {
  state: State,
  dispatch: any
}

const GameStart: React.FC<IProps> = props => {
  const { dispatch } = props
  const handleStartClick = () => {
    dispatch({ type: actionTypes.GAME_START})
  }

  return (
    <div>
      Game Start
      <button onClick={() => handleStartClick()}>Start</button>
    </div>
  )
}

export default GameStart;
