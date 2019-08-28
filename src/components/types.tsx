import * as React from 'react';

export type State = {
  timer: number,
  score: number,
  start: boolean,
  pause: boolean,
  gameOver: boolean,
  countSpeed: number
}

export type Ticket = {
  title: string,
  story?: Label | any,
}

export type Label = {
  name: string,
  color: React.CSSProperties,
}
