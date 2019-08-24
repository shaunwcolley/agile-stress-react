import * as React from 'react';
import Header from './Header';
import AgileBoard from '../board/AgileBoard';
// import Footer from './Footer';
import Menu from '../menu/Menu';
import './Header.css'
import { State } from '../types'

import reducer from '../../state/store/reducer';

// const AgileContext = React.createContext(null);


let initialState: State = {
  timer: 100,
  score: 0,
  pause: true,
  countSpeed: 1
}

const BaseLayout: React.FC<{}> = (props) => {

  const [state, dispatch] = React.useReducer(reducer, initialState)

  return (
    <div className="base-body">
      <Header state={state} dispatch={dispatch} />
      {!state.pause ? <AgileBoard state={state} dispatch={dispatch}/> : <Menu dispatch={dispatch} />}
    </div>
  )
}

export default BaseLayout;
