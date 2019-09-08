import * as React from 'react';
import Header from './Header';
import AgileBoard from '../board/AgileBoard';
// import Footer from './Footer';
import Menu from '../menu/Menu';
import './Header.css'
import { State, Ticket } from '../types'

import reducer from '../../state/store/reducer';

// const AgileContext = React.createContext(null);


let initialState: State = {
  timer: 60,
  score: 0,
  start: true,
  pause: true,
  gameOver: false,
  countSpeed: 1
}

let initialBoard: { [key: string]: Ticket[] } = {
  stories: [],
  todo: [
    { title: 'make login', story: { name: 'register', color: {backgroundColor: '#1650C0'} }},
    { title: 'login styling', story: { name: 'register', color: {backgroundColor: '#1650C0'} }}
  ],
  doing: [],
  qa: [],
  done: []
}

const BaseLayout: React.FC<{}> = (props) => {

  const [state, dispatch] = React.useReducer(reducer, initialState)
  const [board, setBoard] = React.useState(initialBoard);

  React.useEffect(() => {
    setBoard({
      stories: [],
      todo: [
        { title: 'make login', story: { name: 'register', color: {backgroundColor: '#1650C0'} }},
        { title: 'login styling', story: { name: 'register', color: {backgroundColor: '#1650C0'} }}
      ],
      doing: [],
      qa: [],
      done: []
    })
  }, [state.gameOver])


  return (
    <div className="base-body">
      <Header state={state} dispatch={dispatch} />
      {!state.pause ? <AgileBoard state={state} dispatch={dispatch} board={board} setBoard={setBoard}/> : <Menu state={state} dispatch={dispatch} />}
    </div>
  )
}

export default BaseLayout;
