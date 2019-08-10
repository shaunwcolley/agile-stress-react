import * as React from 'react';
import './agileBoard.css';

interface IProps {

}

let initialBoard: { [key: string]: string[] } = {
  stories: ['As a user I want to be able to login'],
  todo: ['make login', 'login styling'],
  doing: [],
  qa: [],
  done: []
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
    // pulls task values from starting and ending categories
    let startTasks = board[startCat]
    let dropTasks = board[dropCat]
    // pushs task into new category
    let task = board[startCat][key]
    dropTasks.push(task)
    //removes from starting category
    startTasks.splice(key,1)
    // sets state with updated values
    setBoard({...board, [startCat]: startTasks, [dropCat]: dropTasks})
  }

  const [board, setBoard] = React.useState(initialBoard);

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
      let option = <option key={key} value={key}>{key.toUpperCase()}</option>
      options.push(option)
    }
    return options
  }

  let taskOptions: any[] = optionsGenerate(board)


  setTimeout(() => {
    const choices = ['make register page', 'register styling', 'register functionality', 'make backend userAuth']
    const categories = ['stories','todo','doing','qa','done']
    const min = 0
    const max = choices.length-1
    const random = Math.floor(Math.random() * max) + min;
    const choice = choices[random]
    const randomCat = Math.floor(Math.random() * 4) + 0;
    const cat = categories[randomCat]
    //logging random choice, now need to push choice into category on setBoard function
    console.log(cat + ' : ' + choice)
  },3000)

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
