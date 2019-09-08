export const addRandomTask = (components: any, labels: any, state: any, setState: any) => {
  const { choices } = components;
  const titleMax = choices.length;
  const randomTitle = Math.floor(Math.random() * titleMax);
  const title = choices[randomTitle];
  const labelMax = labels.length;
  const randomLabel = Math.floor(Math.random() * labelMax);
  const label = labels[randomLabel];
  const ticket = { title, story: label };
  let newTasks = state['todo'];
  newTasks.push(ticket);
  return setState({...state, todo: newTasks});
}
