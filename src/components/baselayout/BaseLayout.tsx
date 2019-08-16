import * as React from 'react';
import Header from './Header';
import AgileBoard from '../AgileBoard'
// import Footer from './Footer';

import reducer from '../../state/store/reducer'

// const AgileContext = React.createContext(null);

type State = {
  timer: number,
  score: number,
  pause: boolean
}

let initialState: State = {
  timer: 100,
  score: 0,
  pause: true
}

const BaseLayout: React.FC<{}> = (props) => {

  const [state, dispatch] = React.useReducer(reducer, initialState)

  return (
    <div>
      <Header state={state} dispatch={dispatch} />
      {!state.pause ? <AgileBoard dispatch={dispatch}/> : null}
    </div>
  )
}

export default BaseLayout;
