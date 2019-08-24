export const qaColumnResolve = () => {
  const num = Math.floor(Math.random() * 2);
  if (num === 0) {
    return 'doing';
  }
  if (num === 1) {
    return 'done';
  }
  return '...';
}
