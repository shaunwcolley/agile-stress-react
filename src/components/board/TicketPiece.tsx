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
  let nameRef = React.useRef('...');

  useTimeout(() => {
    if(!state.pause && state.timer > 0) {
      if(columnName === 'qa') {
        let column = qaColumnResolve();
        columnRef.current = column;
        if (column === "doing") {
          nameRef.current = 'Doing';
        } else if (column === 'done') {
          nameRef.current = "Done";
        }
      } else {
        columnRef.current = endColumn;
        nameRef.current = "QA"
      }
    }
  }, 2500)



  return  <div className="ticket" key={index} draggable onDragStart={(e) => drag(e, columnName, columnRef.current, index)}>
            <div className="label" style={color}></div>
            <p className="task-name">{title}</p>
            <p className="move-location">Move to: {nameRef.current}</p>
          </div>
})

export default TicketPiece;
