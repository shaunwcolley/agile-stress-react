import * as React from 'react';
import GameStart from './GameStart';
import GameOver from './GameOver';
import PauseMenu from './PauseMenu';
import { State } from '../types';

interface IProps {
  state: State,
  dispatch: any
}

const Menu: React.FC<IProps> = props => {

  const { dispatch, state } = props;

  if(state.gameOver) {
    return <GameOver state={state} dispatch={dispatch} />
  }
  if (state.start) {
    return <GameStart state={state} dispatch={dispatch} />
  }
  return <PauseMenu state={state} dispatch={dispatch} />
}

export default Menu;
