const isValidDate = date => {
  if (new Date(date).getTime() > new Date().getTime()) {
    return true;
  }
  return false;
};

export default isValidDate;
