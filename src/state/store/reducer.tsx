import * as actionTypes from '../actions/actionTypes';
import { State } from '../../components/types'

type Action = { type: string, payload?: any }


function reducer(state: State , action: Action) {
  switch(action.type) {
    case actionTypes.COUNT_DOWN:
      return { ...state, timer: state.timer > 0 ? state.timer - state.countSpeed : 0, gameOver: state.timer <=0 ? true : false };
    case actionTypes.ADD_POINTS:
      return { ...state, timer: state.timer + 3, score: state.score + 50 }
    case actionTypes.SUB_POINTS:
      return { ...state, timer: state.timer - 20, score: state.score - 25 }
    case actionTypes.GAME_START:
      return { ...state, pause: false, start: false, }
    case actionTypes.GAME_PAUSE:
      return { ...state, pause: state.pause ? false : true }
    case actionTypes.GAME_OVER:
      return { ...state, pause: true, gameOver: true, }
    case actionTypes.NEW_GAME:
      return { ...state, start: true, gameOver: false, }
    case actionTypes.CHANGE_SPEED:
      return { ...state, countSpeed: action.payload}
    default:
      throw new Error();
  }
}

export default reducer;
