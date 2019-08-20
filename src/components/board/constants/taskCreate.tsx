import * as React from 'react';
import TicketTimer from '../TicketTimer'
import { Label, Ticket, State } from '../../types';

export const taskCreate = (columnName: string, column: string[] | any, drag: any, state: State) => {
  if(columnName === 'stories') {
    return column.map((story: Label, index: number) => {
      const { name, color } = story;
      return  <div className="ticket" key={index}>
                <div className="label" style={color}></div>
                <div>{name}</div>
              </div>
    })
  }
  if(columnName === 'doing') {
    return column.map((task: Ticket | any, index: number) => {
      const { story: {color} } = task
      return  <div className="ticket" key={index} draggable onDragStart={(e) => drag(e, columnName, index)}>
                <div className="label" style={color}></div>
                <div>{task.title}</div>
                <TicketTimer state={state} column="QA"/>
              </div>
    })
  }
  return column.map((task: Ticket | any, index: number) => {
    const { story: {color} } = task
    return  <div className="ticket" key={index} draggable onDragStart={(e) => drag(e, columnName, index)}>
              <div className="label" style={color}></div>
              <div>{task.title}</div>
            </div>
  })
}
