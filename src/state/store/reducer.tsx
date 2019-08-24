import * as actionTypes from '../actions/actionTypes';
import { State } from '../../components/types'

type Action = { type: string, payload?: any }


function reducer(state: State , action: Action) {
  switch(action.type) {
    case actionTypes.COUNT_DOWN:
      return { ...state, timer: state.timer - state.countSpeed };
    case actionTypes.ADD_POINTS:
      return { ...state, timer: state.timer + 10, score: state.score + 100 }
    case actionTypes.SUB_POINTS:
      return { ...state, timer: state.timer - 20, score: state.score - 50 }
    case actionTypes.GAME_START:
      return { ...state, pause: false }
    case actionTypes.GAME_PAUSE:
      return { ...state, pause: state.pause ? false : true}
    case actionTypes.CHANGE_SPEED:
      return { ...state, countSpeed: action.payload}
    default:
      throw new Error();
  }
}

export default reducer;
