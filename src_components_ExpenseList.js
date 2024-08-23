import React from "react";
import "./ExpenseList.css";

function ExpenseList() {
  // Example data
  const expenses = [
    { id: 1, title: "Membership Fee", amount: 120 },
    { id: 2, title: "Event Ticket", amount: 75 },
  ];

  return (
    <ul className="expense-list">
      {expenses.map((expense) => (
        <li key={expense.id}>
          <span>{expense.title}</span>
          <span>${expense.amount}</span>
        </li>
      ))}
    </ul>
  );
}

export default ExpenseList;
