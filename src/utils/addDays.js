const addDays = (date, days = 1) => {
  const result = date ? new Date(date) : new Date();
  result.setDate(result.getDate() + days);
  return result;
};

export default addDays;
