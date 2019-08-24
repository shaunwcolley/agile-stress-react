export const qaColumnResolve = () => {
  const num = Math.floor(Math.random() * 2);
  if (num === 0) {
    return 'Doing';
  }
  if (num === 1) {
    return 'Done';
  }
  return '...';
}
