import React, { useEffect, useState } from "react";
import transactionService from "../Services/transactionService.js";
import { Link } from "react-router-dom";
import "./loginnew.css";
const ListofTransactions= () => {
  const [transactions, settransations] = useState([]);
  useEffect(() => {
    gettransactions();
  }, []);
  const gettransactions = () => {
    transactionService.gettransactions()
      .then((response) => {
        settransations(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className="container">
        <div className="topnav">
  <a href="/alltransactions">All Transactions</a>

  <a href="/listwallet">All Accounts</a>

  <a href="/adminlogin">Logout</a>
  </div>
<div className="toplayer">
      <h2 className="text-center"> Transactions </h2>
      <table className="table">
        <thead>
          <tr>
            <th>  Id </th>
            <th>Sender Account Number </th>
            <th>Receiver account number</th>
            <th>Amount </th>
          </tr>
        </thead>
        <tbody>
          {transactions.map((transaction) => (
            <tr key={transaction.id}>
              <td> {transaction.id} </td>
              <td> {transaction.senderAccountNumber} </td>
              <td> {transaction.receiverAccountNumber} </td>
              <td> {transaction.amount} </td>

            </tr>
          ))}
        </tbody>
      </table>
    </div>
    </div>
  );
};
export default ListofTransactions;
