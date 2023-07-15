import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import TransactionService from "../Services/transactionService.js";
import "./forms.css";

const CreateTransaction = () => {
  const [senderAccountNumber,setsenderAccount] = useState("");
  const [receiverAccountNumber, setreceiverAccount] = useState("");
  const [recharge,setRecharge]=useState("");
  const [amount, setBalance] = useState("");
  const navigate = useNavigate();

  const savetransaction= (e) => {
    e.preventDefault();

    const newTransaction = {senderAccountNumber,receiverAccountNumber,recharge,amount };
      TransactionService.createtransaction(newTransaction)
        .then((response) => {
          console.log(response.data);
          navigate(`/Listaccount?id=${senderAccountNumber}`);
        })
        .catch((error) => {
          console.log(error);
        });
     };


  return (
<div className='login1'>
<div className='head'>
<h1 className='company'>New Transaction</h1>
</div>
<div className='form'>
<form> Sender Account Number :
                  <input
                    type="text"
                    placeholder="Enter sender account number"
                    name="account number"
                    className="form-control"
                    value={senderAccountNumber}
                    onChange={(e) => setsenderAccount(e.target.value)}
                  ></input>
              
                <div className="form-group mb-2">
                  <label className="form-label"> Receiver Account Number :</label>
                  <input
                    type="text"
                    placeholder="Enter receiver account number"
                    name="account number"
                    className="form-control"
                    value={receiverAccountNumber}
                    onChange={(e) => setreceiverAccount(e.target.value)}
                  ></input>
                </div>
                <div className="form-group mb-2">
                  <label className="form-label"> Recharge:</label>
                  <input
                    type="text"
                    placeholder="Enter true if recharge"
                    name="account number"
                    className="form-control"
                    value={recharge}
                    onChange={(e) => setRecharge(e.target.value)}
                  ></input>
                </div>
                <div className="form-group mb-2">
                  <label className="form-label"> First deposit:</label>
                  <input
                    type="text"
                    placeholder="Enter first deposit"
                    name="amount"
                    className="form-control"
                    value={amount}
                    onChange={(e) => setBalance(e.target.value)}
                  ></input>
                </div>

                  <button
                    className="button-"
                    onClick={(e) => savetransaction(e)}
                  >
                    Submit{" "}
                  </button>
               
                <Link to="/" className="btn btn-danger">
                  {" "}
                  cancel
                </Link>
              </form>
            </div>
          </div>
  );
};

export default CreateTransaction;
