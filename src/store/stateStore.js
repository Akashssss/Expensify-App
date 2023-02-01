import { configureStore } from "@reduxjs/toolkit";
import expenseReducer from "../features/ExpenseSlice";
import filterReducer from "../features/filterSlice";

export const store = configureStore({
  reducer: {
    Expenses: expenseReducer,
    Filters: filterReducer,
  },
});
