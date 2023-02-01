import { createSlice } from "@reduxjs/toolkit";
import id from "uniqid";
const initialState = [];

const ExpenseSlice = createSlice({
  name: "Expenses",
  initialState,

  reducers: {
    addExpense: {
      reducer: (state, actions) => [...state, actions.payload],
      prepare: ({
        description = "",
        note = "",
        amount = 0,
        createdAt = 0,
      } = {}) => {
        return {
          payload: {
            id: id(),
            description,
            note,
            amount,
            createdAt,
          },
        };
      },
    },
    removeExpense: {
      reducer: (state, actions) => {
        state = state.filter(({ id }) => {
          return id !== actions.payload.id;
        });
        return state;
      },

      prepare: ({ id } = {}) => {
        return {
          payload: {
            id,
          },
        };
      },
    },
    editExpense: {
      reducer: (state, actions) => {
        state = state.map((expense) => {
          console.log(expense);
          if (expense.id === actions.payload.id) {
            return { ...expense, ...actions.payload.updates };
          } else return expense;
        });
        return state;
      },

      prepare: (id, updates) => {
        return {
          payload: {
            id,
            updates,
          },
        };
      },
    },
  },
});

export default ExpenseSlice.reducer;
export const { addExpense, editExpense, removeExpense } = ExpenseSlice.actions;
