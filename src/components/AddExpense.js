import React from "react";
import ExpenseForm from "./ExpenseForm";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addExpense } from "../features/ExpenseSlice";

export default function AddExpense() {
  const dispatch = useDispatch();
  const naviagte = useNavigate();
  return (
    <div>
      <ExpenseForm
        onSubmit={(expense) => {
          dispatch(addExpense(expense));
          naviagte("/ExpenseDashboard");
        }}
      />
    </div>
  );
}
