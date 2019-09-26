import * as React from 'react';
import './Header.css';
import * as actionTypes from '../../state/actions/actionTypes';
import { useInterval } from '../board/constants/useInterval.js';
import { State } from '../types';

// import audioFile from './agile-stress-gameplay.wav';

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

  const inputRef: any = React.useRef();
  const isPlayingRef: any = React.useRef(false)

  const handlePlayClick = () => {
    if(inputRef.current !== undefined) {
      isPlayingRef.current = isPlayingRef.current ? false : true
      if(isPlayingRef.current) {
        inputRef.current.play();
      } else if (!isPlayingRef.current) {
        inputRef.current.pause()
      }
    }
  }

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
      <div className="audio-box">
        {isPlayingRef.current ? <svg onClick={() => handlePlayClick()} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z"/><path d="M0 0h24v24H0z" fill="none"/></svg> : <svg onClick={() => handlePlayClick()} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M16.5 12c0-1.77-1.02-3.29-2.5-4.03v2.21l2.45 2.45c.03-.2.05-.41.05-.63zm2.5 0c0 .94-.2 1.82-.54 2.64l1.51 1.51C20.63 14.91 21 13.5 21 12c0-4.28-2.99-7.86-7-8.77v2.06c2.89.86 5 3.54 5 6.71zM4.27 3L3 4.27 7.73 9H3v6h4l5 5v-6.73l4.25 4.25c-.67.52-1.42.93-2.25 1.18v2.06c1.38-.31 2.63-.95 3.69-1.81L19.73 21 21 19.73l-9-9L4.27 3zM12 4L9.91 6.09 12 8.18V4z"/><path d="M0 0h24v24H0z" fill="none"/></svg>}
      </div>
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

  return (
    <React.Fragment>
      {header}
      <audio ref={inputRef} loop src={require("./agile-stress-gameplay.wav")}>
        Audio not supported.
      </audio>
    </React.Fragment>
  )

})

export default Header;
