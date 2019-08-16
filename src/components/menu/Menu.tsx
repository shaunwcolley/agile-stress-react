import * as React from 'react';
import * as actionTypes from '../../state/actions/actionTypes'

interface IProps {
  dispatch: any
}

const Menu: React.FC<IProps> = props => {

  const { dispatch } = props;

  const handleStartClick = () => {
    dispatch({ type: actionTypes.GAME_START})
  }
  return (
    <div>
      <button onClick={() => handleStartClick()}>Start</button>
    </div>
  )
}

export default Menu;
