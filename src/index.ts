const _getTime = (): Array<number> => {
  const date: Date = new Date();

  let hours: number = date.getHours();
  let minutes: number = date.getMinutes();
  let seconds: number = date.getSeconds();

  return [hours, minutes, seconds];
};
