import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate, useParams } from "react-router-dom";
import WalletService from "../Services/WalletService.js";
import "./login.css";


const Login = () => {
    const [accountNumber, setAccountNumber] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const saveOrUpdateWallet = (e) => {
        e.preventDefault();
    
        const newWallet = { accountNumber, password };
        
          WalletService.login(newWallet)
            .then((response) => {
              console.log(response.data);
              navigate(`/listAccount?id=${accountNumber}`);
            })
            .catch((error) => {
              console.log(error);
            });
        
    };
  
    return(

<div>
  <div className ="header"><h4>Account Management System</h4></div>
<div className='login' id='login'>
<div className='head'>
<h1 className='company'>WALLET APPLICATION</h1>
</div>
<div className='form'>
  <form>
                {/* <label className=".inputBox-label"> Account Number :</label> 
                <input type="text" placeholder='Username' class='text' id='username' required><br>*/}
                <h4> Account Number :
                
             </h4>
                  <input
                    type="text"
                    placeholder="Enter account number"                  
                    name="account number"
                   className="text"
                    value={accountNumber}
                    onChange={(e) => setAccountNumber(e.target.value)}
                  ></input>
                  <br>
                  </br>                  
{/*                 
                <div className="form-group mb-2">
                
                <label className="form-label"> Password :</label> */}
                <h4>Password : </h4>
                  <input
                    type="text1"
                    placeholder="Enter password"
                    name="name"
                    className="text"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  ></input>
                  <br></br>
                  
                
                  <button
                    className="btn-login"
                    onClick={(e) => saveOrUpdateWallet(e)}>
                    Login{" "}
                  </button>
               
                {/* <Link to="/" className="btn btn-danger">
                  {" "}
                  cance
                </Link> */}
                <div className="btnsignup">
              <Link to="/createwallet" >
                  {" "}
                  SignUp 
                </Link>
                </div>
                
              </form>
            </div>
          </div>
          </div>
       
  );
};

export default Login;