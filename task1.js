const stringLength = (string) => {
  if (string.length < 1 || string.length > 10) {
    throw new Error('error: string is null or character count is more than 10');
  }
  return string.length;
};

export { stringLength };
