export type State = {
  timer: number,
  score: number,
  pause: boolean,
  countSpeed: number
}

export type Ticket = {
  title: string,
  story?: Label,
}

export type Label = {
  name: string,
  color: string,
}
