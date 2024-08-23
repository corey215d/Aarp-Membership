import React from "react";
import "./Receipt.css";

function Receipt({ title, amount }) {
  return (
    <div className="receipt">
      <h2>Receipt</h2>
      <p>Title: {title}</p>
      <p>Amount: ${amount}</p>
    </div>
  );
}

export default Receipt;
