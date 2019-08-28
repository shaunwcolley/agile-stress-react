import * as React from 'react';
import { State } from '../types'

interface IProps {
  state: State,
  dispatch: any
}

const PauseMenu: React.FC<IProps> = props => {
  return (
    <div>
      Paused!
    </div>
  )
}

export default PauseMenu;
