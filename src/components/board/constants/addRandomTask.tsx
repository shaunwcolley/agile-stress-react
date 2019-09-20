export const addRandomTask = (components: any, labels: any, state: any, setState: any, score: any) => {
  const { choices } = components;
  const titleMax = choices.length;
  const randomTitle = Math.floor(Math.random() * titleMax);
  const title = choices[randomTitle];
  // need to move to a function
  if (score < 500) {
    labels = labels.slice(0,1)
  } else if (score >= 500 && score < 1250) {
    labels = labels.slice(1,2)
  } else if (score >= 1250 && score < 2000) {
    labels = labels.slice(2,3)
  } else if (score >= 2000 && score < 2750) {
    labels = labels.slice(3,5)
  } else if (score >= 2750 && score < 3500) {
    labels = labels.slice(5,7)
  } else if (score >= 3500 && score < 4250) {
    labels = labels.slice(2,6)
  } else if (score >= 4250) {
    labels = labels.slice(0,7)
  }
  const labelMax = labels.length;
  const randomLabel = Math.floor(Math.random() * labelMax);
  const label = labels[randomLabel];
  const ticket = { title, story: label };
  let newTasks = state['todo'];
  newTasks.push(ticket);
  return setState({...state, todo: newTasks});
}
