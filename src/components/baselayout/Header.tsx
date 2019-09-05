import * as React from 'react';
import './Header.css';
import * as actionTypes from '../../state/actions/actionTypes';
import { useInterval } from '../board/constants/useInterval.js';
import { State } from '../types'

interface IProps {
  state: State,
  dispatch: any
}

const Header: React.FC<IProps> = React.memo(props => {

  const { state } = props;
  const { dispatch } = props;

  let timer;

  if(!state.pause && state.timer > 0) {
    timer = 1000
  } else {
    timer = null
  }
  useInterval(() => {
    dispatch({type: actionTypes.COUNT_DOWN })
  }, timer)



  const handleMenuClick = () => {
    dispatch({ type: actionTypes.GAME_PAUSE })
  }
  let displayTimer = Math.floor(state.timer)
  const header = (
    <React.Fragment>
    <div className="top-bar">
      <div className="home-logo" onClick={() => handleMenuClick()}>
        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24"><path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/><path d="M0 0h24v24H0z" fill="none"/></svg>
      </div>
      <span>Agile Stress!</span>
      <div className="user-display" onClick={() => handleMenuClick()}>
        <div className="user-character">
          S
        </div>
      </div>
    </div>
    <div className="bottom-bar">
      <p className="board-name">
        Forum Web App
      </p>
      <p className="score">
        Score: {state.score}
      </p>
      <p className="timer">
        Timer: {displayTimer}
      </p>
    </div>
    </React.Fragment>
  )

  return (<React.Fragment>{header}</React.Fragment>)

})

export default Header;
