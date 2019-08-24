import * as React from 'react';
import { qaColumnResolve } from './constants/qaColumnResolve';

import { State } from '../types';

interface IProps {
  state: State,
  column: string,
  catCallback?: any,
}

const TicketTimer: React.FC<IProps> = props => {
  const { state, column, catCallback } = props
  let columnRef = React.useRef('...');

  React.useEffect(() => {
    let returnColumn = '...'

    if(!state.pause && state.timer > 0){
      if(column === 'qa') {
        let endCat = qaColumnResolve()
        returnColumn = endCat;
        catCallback(endCat);
      }
      if (column === 'doing') {
        returnColumn = 'QA'
      }
      const timer = setTimeout(() => {
        columnRef.current = returnColumn;
      }, 5000)

      return () => clearTimeout(timer)
    }
    // Eslint disable, because code needs to not include dependency as second argument to only update once
    // eslint-disable-next-line
  }, [])

  return <div>{columnRef.current}</div>
}

export default TicketTimer;
