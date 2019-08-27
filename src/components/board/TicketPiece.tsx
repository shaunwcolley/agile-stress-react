import * as React from 'react';
import { qaColumnResolve } from './constants/qaColumnResolve';

import { State, Ticket } from '../types';

interface IProps {
  state: State,
  columnName: string,
  task: Ticket,
  endColumn: string,
  drag: any,
  index: number,
}

const TicketPiece: React.FC<IProps> = React.memo(props => {
  const { state, columnName, task, endColumn, drag, index } = props;
  const { title, story: { color } } = task;
  let columnRef = React.useRef('...');

  React.useEffect(() => {
    if(!state.pause && state.timer > 0){
      const timer = setTimeout(() => {
        if (columnName === 'qa') {
          columnRef.current = qaColumnResolve();
        } else {
          columnRef.current = endColumn;
        }
      }, 2500)

      return () => clearTimeout(timer)
    }
    // Eslint disable, because code needs to not include dependency as second argument to only update once
    // eslint-disable-next-line
  }, [])

  return  <div className="ticket" key={index} draggable onDragStart={(e) => drag(e, columnName, columnRef.current, index)}>
            <div className="label" style={color}></div>
            <div>{title}</div>
            <div>{columnRef.current}</div>
          </div>
})

export default TicketPiece;
