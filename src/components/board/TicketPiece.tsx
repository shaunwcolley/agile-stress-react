import * as React from 'react';
import { qaColumnResolve } from './constants/qaColumnResolve';
import { useTimeout } from './constants/useTimeout.js'

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

  useTimeout(() => {
    if(!state.pause && state.timer > 0) {
      if(columnName === 'qa') {
        columnRef.current = qaColumnResolve();
      } else {
        columnRef.current = endColumn;
      }
    }
  }, 2500)

  return  <div className="ticket" key={index} draggable onDragStart={(e) => drag(e, columnName, columnRef.current, index)}>
            <div className="label" style={color}></div>
            <div>{title}</div>
            <div>{columnRef.current}</div>
          </div>
})

export default TicketPiece;
