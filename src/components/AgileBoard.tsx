import * as React from 'react';
import './agileBoard.css';

interface IProps {

}

const AgileBoard: React.FC<IProps> = (props) => {

  const onDragStart = (e: any, startCat: string, key: number) => {
    e.dataTransfer.setData('startCat', startCat)
    e.dataTransfer.setData('key', key)
  }

  const onDragOver = (e: any) => {
      e.preventDefault()
  }

  const onDrop = (e: any, dropCat: string) => {
    const startCat: string = e.dataTransfer.getData('startCat')
    const key: number = e.dataTransfer.getData('key')
    // pulls task value from starting category
    let task = board[startCat][key]
    // pushs task into new category
    board[dropCat].push(task)
    //removes from starting category
    board[startCat].splice(key,1)
    console.log(board)
  }

  // class Board {
  //   stories: string[];
  //   todo: string[];
  //   doing: string[];
  //   qa: string[];
  //   done: string[]
  // }

  let board: { [key: string]: string[] } = {
    stories: ['As a user I want to be able to login'],
    todo: ['make login', 'login styling'],
    doing: [],
    qa: [],
    done: []
  }
  const taskCreate = (columnName: string, column: string[]) => {
   return column.map((task: string, index: number) => {
     return <div key={index} draggable onDragStart={(e) => onDragStart(e, columnName, index)}>{task}</div>
   })
  }
  let stories = taskCreate('stories', board.stories)
  let todo = taskCreate('todo', board.todo)
  let doing = taskCreate('doing', board.doing)
  let qa = taskCreate('qa', board.qa)
  let done = taskCreate('done', board.done)

  const optionsGenerate = (object: {[key: string]: string[] }) => {
    let options: any[] = []
    for(let key in object) {
      let option = <option value={key}>{key.toUpperCase()}</option>
      options.push(option)
    }
    return options
  }

  let taskOptions: any[] = optionsGenerate(board)


  return (
    <React.Fragment>
    <div>
      <select>
        {taskOptions}
      </select>
    </div>
    <div className="agile-board">
      <div className="agile-column">
        <div className="agile-column--heading">
          <h4>User Stories</h4><div>...</div>
        </div>
        <div className="agile-column--tasks"  onDragOver={(e) => onDragOver(e)} onDrop={(e) => onDrop(e, 'stories')}>
          {stories}
        </div>
      </div>
      <div className="agile-column">
        <div className="agile-column--heading">
          <h4>To-Do</h4><div>...</div>
        </div>
        <div className="agile-column--tasks" onDragOver={(e) => onDragOver(e)} onDrop={(e) => onDrop(e, 'todo')}>
          {todo}
        </div>
      </div>
      <div className="agile-column">
        <div className="agile-column--heading">
          <h4>Doing</h4><div>...</div>
        </div>
        <div className="agile-column--tasks"  onDragOver={(e) => onDragOver(e)} onDrop={(e) => onDrop(e, 'doing')}>
          {doing}
        </div>
      </div>
      <div className="agile-column">
        <div className="agile-column--heading">
          <h4>QA</h4><div>...</div>
        </div>
        <div className="agile-column--tasks" onDragOver={(e) => onDragOver(e)} onDrop={(e) => onDrop(e, 'qa')}>
          {qa}
        </div>
      </div>
      <div className="agile-column">
        <div className="agile-column--heading">
          <h4>Done</h4><div>...</div>
        </div>
        <div className="agile-column--tasks" onDragOver={(e) => onDragOver(e)} onDrop={(e) => onDrop(e, 'done')}>
          {done}
        </div>
      </div>
    </div>
    </React.Fragment>
  )
}

export default AgileBoard;
