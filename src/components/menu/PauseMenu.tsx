import * as React from 'react';
import { State } from '../types';
import * as actionTypes from '../../state/actions/actionTypes';

interface IProps {
  state: State,
  dispatch: any
}

const PauseMenu: React.FC<IProps> = props => {
  const { dispatch } = props;

  const handleResumeClick = () => {
    dispatch({ type: actionTypes.GAME_PAUSE })
  };

  return (
    <div className="page-div pause">
      <h3>Paused!</h3>
      <button onClick={() => handleResumeClick()}>Resume</button>
    </div>
  )
}

export default PauseMenu;
