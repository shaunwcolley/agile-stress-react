import * as React from 'react';
import './agileBoard.css';
import { State, Ticket } from '../types';
import * as boardComponents from './constants/boardComponents';
import { storyComposition } from './constants/storyComposition';
import { addRandomTask } from './constants/addRandomTask';
import { taskCreate } from './constants/taskCreate';
import * as actionTypes from '../../state/actions/actionTypes';

interface IProps {
  state: State,
  dispatch: any
}

let initialBoard: { [key: string]: Ticket[] } = {
  stories: [],
  todo: [
    { title: 'make login', story: { name: 'register', color: {backgroundColor: '#1650C0'} }},
    { title: 'login styling', story: { name: 'register', color: {backgroundColor: '#1650C0'} }}
  ],
  doing: [],
  qa: [],
  done: []
}

const AgileBoard: React.FC<IProps> = (props) => {

  const { state, dispatch } = props;
  const [board, setBoard] = React.useState(initialBoard);

  const onDragStart = (e: any, startCat: string, endCat: string, key: number) => {
    e.dataTransfer.setData('startCat', startCat)
    e.dataTransfer.setData('key', key)
    if(endCat){
      e.dataTransfer.setData('endCat', endCat)
    }
  }

  const onDragOver = (e: any) => {
      e.preventDefault()
  }

  const onDrop = (e: any, dropCat: string) => {
    const startCat: string = e.dataTransfer.getData('startCat')
    const key: number = e.dataTransfer.getData('key')
    const endCat: string = e.dataTransfer.getData('endCat')
    // pulls task values from starting and ending categories
    let startTasks = board[startCat]
    let dropTasks = board[dropCat]
    // pushs task into new category
    let task = board[startCat][key]
    dropTasks.push(task)
    //removes from starting category
    startTasks.splice(key,1)
    // sets board with updated values
    setBoard({ ...board, [startCat]: startTasks, [dropCat]: dropTasks })

    //sets state with updated score and time
    if(dropCat === endCat){
      console.log('ADD_POINTS')
      dispatch({ type: actionTypes.ADD_POINTS })
    }
    else {
      console.log(`dropCat: ${dropCat} ?= endCat: ${endCat}`)
      console.log('SUB_POINTS')
      dispatch({ type: actionTypes.SUB_POINTS })
    }


    if(board.doing.length > 1) {
      dispatch( { type: actionTypes.CHANGE_SPEED, payload: board.doing.length * 2})
    } else {
      dispatch({ type: actionTypes.CHANGE_SPEED, payload: 1 })
    }
  }

  const { score } = state;
  const { labels } = boardComponents
  const labelChoices = storyComposition(score,labels)

  let storiesDisplay = taskCreate('stories', labelChoices, onDragStart, state)
  let todo = taskCreate('todo', board.todo, onDragStart, state)
  let doing = taskCreate('doing', board.doing, onDragStart, state)
  let qa = taskCreate('qa', board.qa, onDragStart, state)
  let done = taskCreate('done', board.done, onDragStart, state)

  React.useEffect(() => {
    const timer = setTimeout(()=> {
      addRandomTask(boardComponents, labelChoices, board, setBoard)
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
