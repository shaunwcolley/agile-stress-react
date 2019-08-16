import * as React from 'react';
import './agileBoard.css';
import { State, Ticket } from '../types';
import * as boardComponents from './constants/boardComponents';
import { storyComposition } from './constants/storyComposition';
import * as actionTypes from '../../state/actions/actionTypes'

interface IProps {
  state: State,
  dispatch: any
}

let initialBoard: { [key: string]: Ticket[] } = {
  stories: [],
  todo: [
    { title: 'make login', story: { name: 'register', color: '' }},
    { title: 'login styling', story: { name: 'register', color: '' }}
  ],
  doing: [],
  qa: [],
  done: []
}

const AgileBoard: React.FC<IProps> = (props) => {

  const { state, dispatch } = props;
  const [board, setBoard] = React.useState(initialBoard);

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
    // sets board with updated values
    setBoard({...board, [startCat]: startTasks, [dropCat]: dropTasks})

    //sets state with updated score and time
    dispatch({ type: actionTypes.ADD_POINTS})

    if(board.doing.length > 1) {
      dispatch( { type: actionTypes.CHANGE_SPEED, payload: board.doing.length * 2})
    } else {
      dispatch({ type: actionTypes.CHANGE_SPEED, payload: 1 })
    }
  }

  const taskCreate = (columnName: string, column: string[] | any) => {
    if(columnName === 'stories') {
      return column.map((task:string, index: number) => {
        return <div className="ticket" key={index}>{task}</div>
      })
    }
    return column.map((task: Ticket, index: number) => {
      return <div className="ticket" key={index} draggable onDragStart={(e) => onDragStart(e, columnName, index)}><div>{task.title}</div><div>{task.story}</div></div>
    })
  }

  const { score } = state;
  const labels = boardComponents.labels.map(label => label.name)
  const labelChoices = storyComposition(score,labels)

  let storiesDisplay = taskCreate('stories', labelChoices)
  let todo = taskCreate('todo', board.todo)
  let doing = taskCreate('doing', board.doing)
  let qa = taskCreate('qa', board.qa)
  let done = taskCreate('done', board.done)


  const addTask = () => {
    const { choices, categories } = boardComponents;
    const titleMax = choices.length-1;
    const randomTitle = Math.floor(Math.random() * titleMax);
    const title = choices[randomTitle];
    const labelMax = labelChoices.length-1;
    const randomLabel = Math.floor(Math.random() + labelMax);
    const label = labelChoices[randomLabel];
    const ticket = { title, story: label }
    let newTasks = board['todo'];
    console.log(ticket)
    newTasks.push(ticket)
    setBoard({...board, todo: newTasks})
  }

  React.useEffect(() => {
    const timer = setTimeout(()=> {
      addTask()
    }, 3000)
    return () => clearTimeout(timer)
    // Eslint disable, because code needs to not include dependency as second argument to only update once
    // eslint-disable-next-line
  }, [])

  return (
    <React.Fragment>
    <div className="agile-board">
      <div className="agile-column">
        <div className="agile-column--heading">
          <h4>User Stories</h4><div>...</div>
        </div>
        <div className="agile-column--tasks">
          {storiesDisplay}
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
