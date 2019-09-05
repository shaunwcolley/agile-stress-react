import * as React from 'react';
import GameStart from './GameStart';
import GameOver from './GameOver';
import PauseMenu from './PauseMenu';
import { State } from '../types';
import './Menu.css';

interface IProps {
  state: State,
  dispatch: any
}

const Menu: React.FC<IProps> = props => {

  const { dispatch, state } = props;

  if(state.gameOver) {
    return (
      <div className="popup">
        <div className="popup-inner">
          <GameOver state={state} dispatch={dispatch} />
        </div>
      </div>
    )
  }
  if (state.start) {
    return (
      <div className="popup">
        <div className="popup-inner">
          <GameStart state={state} dispatch={dispatch} />
        </div>
      </div>
    )
  }
  return (
    <div className="popup">
      <div className="popup-inner">
        <PauseMenu state={state} dispatch={dispatch} />
      </div>
    </div>
  )
}

export default Menu;
