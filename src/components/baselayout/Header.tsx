import * as React from 'react';
import './Header.css'

let initialStats: { [key: string]: number } = {
  score: 0,
  timer: 100,
}

const Header: React.FC = () => {

  const [stats, setStats] = React.useState(initialStats);

  const countDown = React.useCallback(() => {
    let newTimer = stats.timer - 1;
    setStats({...stats, timer: newTimer })
  }, [stats])

  React.useEffect(() => {

    if(stats.timer > 0) {
      const timer = setInterval(() => {
        countDown()
      }, 1000)
      return () => clearInterval(timer)
    }
  }, [countDown, stats.timer])

  const header = (
    <React.Fragment>
    <div className="top-bar">
      <div className="home-logo">
        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24"><path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/><path d="M0 0h24v24H0z" fill="none"/></svg>
      </div>
      <span>Agile Stress!</span>
      <div className="user-display">
        <div className="user-character">
          S
        </div>
      </div>
    </div>
    <div className="bottom-bar">
      <p className="board-name">
        Forum Web App
      </p>
      <p className="score">
        Score: {stats.score}
      </p>
      <p className="timer">
        Timer: {stats.timer}
      </p>
    </div>
    </React.Fragment>
  )

  if(stats.timer === 0) {
    return (
      <div>
        {header}
        <div>
          GAME OVER!
        </div>
      </div>
    )
  }
  return (<React.Fragment>{header}</React.Fragment>)

}

export default Header;
