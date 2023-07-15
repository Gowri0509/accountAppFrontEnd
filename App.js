import logo from './logo.svg';
import './App.css';

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Footercomponent from "./component/Footercomponent.js";
import Headercomponent from "./component/Headercomponent.js";
import Listwallet from "./component/Listwallet.js";
import CreateWallet from "./component/CreateOrUpdateWallet.js";
import TransactionService from "./Services/transactionService.js";
// import Transaction from "./component/Transaction";
import Transaction from "./component/CreateTransaction.js";
import Login from "./component/Login.js";
import ListAccount  from "./component/ListAccount.js";
import {AdminLogin}from "./component/AdminLogin.js";
import ListofTransactions from "./component/ListofTransactions.js";
function App() {
  return (
    <div>
      <Router>        
          <Routes>
            <Route path="/" element={<Login />}></Route>
            <Route path="/listwallet" element={<Listwallet />}></Route>
            <Route path="/createwallet" element={<CreateWallet />}></Route>
            <Route path="/editwallet/:id" element={<CreateWallet />}></Route>
            <Route path="/transactions" element={<TransactionService/>}></Route>
            <Route path="/addtransaction"element={<Transaction />}></Route>
            <Route path="/ListAccount"element={<ListAccount/>}></Route>
          <Route path="/adminlogin" element={<AdminLogin/>}></Route>
          <Route path="/alltransactions" element={<ListofTransactions/>}></Route>
          </Routes>

      </Router>
    </div>
  );
}

export default App;
