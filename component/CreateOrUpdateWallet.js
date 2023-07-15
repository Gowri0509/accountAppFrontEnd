import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate, useParams } from "react-router-dom";
import WalletService from "../Services/WalletService.js";
import "./login.css";


const CreateOrUpdateWallet = () => {
  const [name, setName] = useState("");
  const [accountNumber, setAccountNumber] = useState("");
  const [password, setPassword] = useState("");
  const [address, setAddress] = useState("");
  const [balance, setBalance] = useState("");
  const navigate = useNavigate();
  const { id } = useParams();

  const saveOrUpdateWallet = (e) => {
    e.preventDefault();

    const newWallet = { name, accountNumber, password, address, balance };
    if (id) {
      WalletService.updatewallet(id, newWallet)
        .then((response) => {
          navigate("/listWallet");
        })
        .catch((error) => {
          console.log(error);
        });
    } else {

  WalletService.createwallet(newWallet)
  .then((response) => {
    console.log(response.data);
    navigate("/listWallet");
  })
  .catch((error) => {
    console.log(error);
  });

}
};
  useEffect(() => {
    WalletService.getwalletbyid(id)
.then((response) => {
        setName(response.data.name);
        setAccountNumber(response.data.accountNumber);
        setPassword(response.data.password);
        setAddress(response.data.address);
        setBalance(response.data.balance);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [id]);
  return (
  
<div className='login1' id='login1'>
<div className='head'>
<h1 className='company'>New Account Login</h1>
</div>
<div className='form'>
<form>
   <label className=""> Account Number :</label>
                  <input
                    type="text"
                    placeholder="Enter account number"
                    name="account number"
                    className="form-control"
                    value={accountNumber}
                    onChange={(e) => setAccountNumber(e.target.value)}
                  ></input>
                <br></br>
              
                  <label className=""> Name :</label>
                  <input
                    type="text"
                    placeholder="Enter name"
                    name="name"
                    className="form-control"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  ></input>
               
               
                  <label className="">Password :</label>
                  <input
                    type="password"
                    placeholder="Enter password"
                    name="name"
                    className="form-control"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  ></input>
               
                
                  <label className="form-label"> Address:</label>
                  <input
                    type="text"
                    placeholder="Enter Address"
                    name="address"
                    className="form-control"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                  ></input>
              
                
                  <label className="form-label"> First deposit:</label>
                  <input
                    type="text"
                    placeholder="Enter first deposit"
                    name="balance"
                    className="form-control"
                    value={balance}
                    onChange={(e) => setBalance(e.target.value)}
                  ></input>
              <br></br>
                  <button
                    className="button-"
                    onClick={(e) => saveOrUpdateWallet(e)}>
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

export default CreateOrUpdateWallet;