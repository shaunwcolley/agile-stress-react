import * as React from 'react';
import { State } from '../types'
import * as actionTypes from '../../state/actions/actionTypes';
import PageZero from './pages/PageZero';
import PageOne from './pages/PageOne';
import PageTwo from './pages/PageTwo';

interface IProps {
  state: State,
  dispatch: any
}

let initialPage: { [key: string]: number } = {
  num: 0
}

const GameStart: React.FC<IProps> = props => {
  const { dispatch } = props;
  const [page, setPage] = React.useState(initialPage);

  const handleStartClick = () => {
    dispatch({ type: actionTypes.GAME_START})
  }

  const handleNextClick = () => {
    setPage({num: page.num + 1})
  }

  const handlePrevClick = () => {
    setPage({num: page.num - 1})
  }

  switch(page.num) {
    case 0:
      return <PageZero handleNextClick={handleNextClick} handleStartClick={handleStartClick} />
    case 1:
      return <PageOne handleNextClick={handleNextClick}/>
    case 2:
      return <PageTwo handleNextClick={handleNextClick} handlePrevClick={handlePrevClick} />
    default:
      return <div>No Pages</div>
  }
}

export default GameStart;
