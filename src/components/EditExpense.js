import React from "react";
import { useParams } from "react-router-dom";
import { editExpense } from "../features/ExpenseSlice";
import { useSelector, useDispatch } from "react-redux";
import { store } from "../store/stateStore";
import { useNavigate } from "react-router-dom";
import ExpenseForm from "./ExpenseForm";

const EditExpense = () => {
  const params = useParams();
  const id = params.id;
  const Expenses = useSelector((state) => state.Expenses);
  let expense = Expenses.find((expense) => expense.id === id);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  return (
    <div>
      <ExpenseForm
        expense={expense}
        onSubmit={(expense) => {
          dispatch(editExpense(id, expense));
          navigate("/ExpenseDashboard");
        }}
      />
    </div>
  );
};
store.subscribe(() => {
  console.log("updates ", store.getState());
});

export default EditExpense;
