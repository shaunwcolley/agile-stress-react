import * as React from 'react';

const SmallScreenMenu: React.FC<{}> = props => {
  return (
    <div className="small-view">
      <p>Howdy. I'm Agile Bot. </p>
      <p>
        Make sure your window is tall and wide enough to play <b>Agile Stress!</b> I recommend keeping the window full screen while you play.
      </p>
      <p>
        If you are trying to play on the phone, go ahead and put your phone away. Enjoy your surroundings for a little bit and then try playing on your computer later. Thank you!
      </p>
    </div>
  )
}

export default SmallScreenMenu;
