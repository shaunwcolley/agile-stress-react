import * as React from 'react';
import { State } from '../types'
import * as actionTypes from '../../state/actions/actionTypes';
import PageZero from './pages/PageZero';
import PageOne from './pages/PageOne';
import PageTwo from './pages/PageTwo';
import PageThree from './pages/PageThree';
import PageFour from './pages/PageFour';
import PageFive from './pages/PageFive';
import PageSix from './pages/PageSix';

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
    case 3:
      return <PageThree handleNextClick={handleNextClick} handlePrevClick={handlePrevClick} />
    case 4:
      return <PageFour handleNextClick={handleNextClick} handlePrevClick={handlePrevClick} />
    case 5:
      return <PageFive handleNextClick={handleNextClick} handlePrevClick={handlePrevClick} />
    case 6:
      return <PageSix handleStartClick={handleStartClick} handlePrevClick={handlePrevClick} />
    default:
      return <div>No Pages</div>
  }
}

export default GameStart;
