import * as React from 'react';
import TicketPiece from '../TicketPiece';
import { Label, Ticket, State } from '../../types';

export const taskCreate = (columnName: string, column: string[] | any, drag: any, state: State) => {

  if(columnName === 'stories') {
    return column.map((story: Label, index: number) => {
      const { name, color } = story;
      return  <div className="ticket" key={index}>
                <div className="label" style={color}></div>
                <div className="task-name">{name}</div>
              </div>
    })
  }
  if(columnName === 'doing') {
    return column.map((task: Ticket | any, index: number) => {
      return  <TicketPiece state={state} key={index} index={index} task={task} columnName={columnName} endColumn='qa' drag={drag} />
    })
  }
  if(columnName === 'qa') {
    return column.map((task: Ticket | any, index: number) => {
      return  <TicketPiece state={state} key={index} index={index} task={task} columnName={columnName} endColumn='...' drag={drag} />
    })
  }
  if(columnName === 'done') {
    return column.map((task: Ticket | any, index: number) => {
      const { story: {color} } = task
      return  <div className="ticket" key={index}>
                <div className="label" style={color}></div>
                <div className="task-name">{task.title}</div>
              </div>
    })
  }
  //creates to do tickets
  return column.map((task: Ticket | any, index: number) => {
    const { story: {color} } = task
    return  <div className="ticket" key={index} draggable onDragStart={(e) => drag(e, columnName, 'doing', index)}>
              <div className="label" style={color}></div>
              <div className="task-name">{task.title}</div>
            </div>
  })
}
