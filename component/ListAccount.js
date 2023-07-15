import React, { useEffect, useState } from "react";
import transactionService from "../Services/transactionService.js";
import { Link } from "react-router-dom";
import "./forms.css";


const ListAccount = () => {
  const queryParameters = new URLSearchParams(window.location.search);
  const id = queryParameters.get("id");
  // console.log(id);
  const [senderTransactions, setSenderTransaction] = useState([]);
  const [receiverTransactions, setReceiverTransaction] = useState([]);
  
  useEffect((senderAccountNumber) => {
    transactionService.getSenderTransactions(id).then((response)=>{
      setSenderTransaction(response.data);
    }).catch((err)=>{
      console.log(err);
    })
  }, []);
  

  useEffect((receiverAccountNumber) => {
    transactionService.getReceiverTransactions(id).then((response)=>{
      setReceiverTransaction(response.data);
      console.log(response.data);
    }).catch((err)=>{ 
      console.log(err);
    })
  }, []);


  return (
   
    <div className="toplayer">
      <div className="topnav">
  <a href="#home">Home</a>

  <a href="/addTransaction">New Transaction</a>

  <a href="/">Logout</a>
</div>
    <div className="fullbox">
    <h2> About Account Management </h2>
 <p>Admin will be responsible for the management
   of the system. Admin can manage users, transactions, wallets & payments history,
    etc. On the other hand, Users can register themselves, log in using the login 
    credentials, add money to wallets, make payments using their wallets, manage 
    their wallets, etc. In the Backend, it is using Spring Boot,
      at the data access layer the project is using Hibernate Framework, and at the front 
  end, we are using HTML, CSS, and Bootstrap. The Database used here is Mongo Atlas. </p>
     </div><div className="palign">  Sender Transactions</div>
     
     <table className="table" data-testid="sender-transactions-table">
        <thead> 
          {/* <p className="text-white ">Sender</p> */}
          <tr> 
            <th> Sender Account No </th>
            <th> Receiver Account No </th>
          
            <th> Balance </th>
  
          </tr>
        </thead>
        <tbody>
          {senderTransactions.map((senderTransactions) => (
            <tr key={senderTransactions.senderAccountNumber}>
              <td> {senderTransactions.senderAccountNumber} </td>
              <td> {senderTransactions.receiverAccountNumber} </td>
  
              <td>{senderTransactions.amount}</td>

             
              
            </tr>
          ))}
        </tbody>
      </table>
      <div className="palign">  Received Transactions</div>
      <table className="table">
        <thead>
          {/* <p className="text-white">Receiver</p> */}
          <tr>
            <th> Sender Account No </th>
            <th> Receiver Name No </th>
            <th> Recharge </th>
            <th> Balance </th>
  
          </tr>
        </thead>
        <tbody>
          {receiverTransactions.map((receiverTransactions) => (
            <tr key={receiverTransactions.senderAccountNumber}>
              <td> {receiverTransactions.senderAccountNumber} </td>
              <td> {receiverTransactions.receiverAccountNumber} </td>
              <td> {receiverTransactions.recharge?"true":"false"} </td>
              <td>{receiverTransactions.amount}</td>

             
              
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
export default ListAccount;
