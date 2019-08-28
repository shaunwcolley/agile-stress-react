import * as React from 'react';
import { State } from '../types'

interface IProps {
  state: State,
  dispatch: any
}

const GameOver: React.FC<IProps> = props => {
  return (
    <div>
      Game Over!
    </div>
  )
}

export default GameOver;
