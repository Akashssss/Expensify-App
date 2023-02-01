export default (Expenses, { text, sortBy, startDate, endDate }) => {
  return Expenses.filter((expense) => {
    console.log(expense);
    const startDateMatch =
      typeof startDate !== "number" || expense.createdAt >= startDate;
    const endDateMatch =
      typeof endDate !== "number" || expense.createdAt <= endDate;
    const textMatch = expense.description
      .toLowerCase()
      .includes(text.toLowerCase());
    console.log(typeof expense.createdAt);
    return startDateMatch && endDateMatch && textMatch;
  }).sort((a, b) => {
    if (sortBy === "date") {
      console.log(typeof a.createdAt, a.createdAt);
      return a.createdAt < b.createdAt ? 1 : -1;
    } else if (sortBy === "amount") {
      console.log(sortBy);
      return parseFloat(a.amount) < parseFloat(b.amount) ? 1 : -1;
    }
  });
};
