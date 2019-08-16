type State = {
  timer: number;
  score: number;
  pause: boolean;
}

type Action =
| { type: 'COUNT_DOWN' }
| { type: 'ADD_POINTS' }
| { type: 'GAME_START' }
| { type: 'GAME_PAUSE' }


function reducer(state: State , action: Action) {
  switch(action.type) {
    case 'COUNT_DOWN':
      return { ...state, timer: state.timer - 1 };
    case 'ADD_POINTS':
      return { ...state, timer: state.timer + 10, score: state.score + 100 }
    case 'GAME_START':
      return { ...state, pause: false }
    case 'GAME_PAUSE':
      return { ...state, pause: state.pause ? false : true}
    default:
      throw new Error();
  }
}

export default reducer;
