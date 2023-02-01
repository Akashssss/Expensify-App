import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  text: "",
  sortBy: "date",
  startDate: undefined,
  endDate: undefined,
};

const filerSlice = createSlice({
  name: "Filters",
  initialState,

  reducers: {
    setTextFilter: (state, actions) => {
      state.text = actions.payload;
      return state;
    },
    sortByAmount: (state) => {
      state.sortBy = "amount";
      return state;
    },
    sortByDate: (state) => {
      state.sortBy = "date";
      return state;
    },
    setStartDate: (state, actions) => {
      state.startDate = actions.payload;
      return state;
    },
    setEndDate: (state, actions) => {
      state.endDate = actions.payload;
      return state;
    },
  },
});

export default filerSlice.reducer;
export const filter = filerSlice.actions;
