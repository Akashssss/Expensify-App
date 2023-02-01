import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import ExpenseDashboard from "./components/ExpenseDashboard";
import EditExpense from "./components/EditExpense";
import AddExpense from "./components/AddExpense";
import HelpPage from "./components/HelpPage";
import Navbar from "./components/Navbar";
function App() {
  const links = [
    { name: "Expense Dashboard", link: "/expenseDashboard" },
    { name: "Add Expense", link: "/addExpense" },
    { name: "Help", link: "/Help" },
  ];
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navbar links={links} />}>
          <Route path="/expenseDashboard/" element={<ExpenseDashboard />} />
          <Route path="/editExpense/:id" element={<EditExpense />} />
          <Route path="/AddExpense" element={<AddExpense />} />
          <Route path="/HelpPage" element={<HelpPage />} />
          <Route path="*" element={<h1>this is error page.</h1>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
