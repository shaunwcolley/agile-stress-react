import * as React from 'react';
import { State } from '../types';

interface IProps {
  state: State,
  column: string
}

const TicketTimer: React.FC<IProps> = props => {
  const { state, column } = props
  let columnRef = React.useRef('...');

  React.useEffect(() => {
    if(!state.pause && state.timer > 0){
      console.log('fire')
      const timer = setTimeout(() => {
        columnRef.current = column;
      }, 5000)

      return () => clearTimeout(timer)
    }
    // Eslint disable, because code needs to not include dependency as second argument to only update once
    // eslint-disable-next-line
  }, [])

  return <div>{columnRef.current}</div>
}

export default TicketTimer;
