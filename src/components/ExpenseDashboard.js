import React from "react";
import { useDispatch, connect } from "react-redux";
import ExpenseStyle from "../formComponents/ExpenseStyle";
import { removeExpense } from "../features/ExpenseSlice";
import SearchBar from "../formComponents/SearchBar";
import SelectMenu from "../formComponents/SelectMenu";
import { filter } from "../features/filterSlice";
import SortedExpense from "../features/sortedExpense";
const ExpenseDashboard = (props) => {
  // let Expenses = useSelector((state)=>(state.Expenses ))
  const dispatch = useDispatch();
  const removeExpenseHandler = (id) => {
    dispatch(removeExpense({ id }));
  };

  return (
    <div>
      <div className="flex max-w-full justify-evenly relative z-50">
        <SearchBar
          className="w-4/5 flex-shrink-0"
          onValueHandler={(value) => {
            dispatch(filter.setTextFilter(value));
          }}
        />
        <SelectMenu options={["Date", "Amount", "Don't Know"]} />
      </div>

      <div className="z-0 relative">
        {props.Expenses.map((Expense) => (
          <ExpenseStyle
            Description={Expense.description}
            Note={Expense.note}
            Amount={Expense.amount}
            key={Expense.id}
            remove={removeExpenseHandler}
            id={Expense.id}
          />
        ))}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  Expenses: SortedExpense(state.Expenses, state.Filters),
});

export default connect(mapStateToProps)(ExpenseDashboard);
