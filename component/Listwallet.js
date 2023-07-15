import React, { useEffect, useState } from "react";
import WalletService from "../Services/WalletService.js";
import { Link } from "react-router-dom";
import "./loginnew.css";
const Listwallet = () => {
  const [wallets, setwallets] = useState([]);
  useEffect(() => {
    getwallets();
  }, []);
  const getwallets = () => {
    WalletService.getwallets()
      .then((response) => {
        setwallets(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  // const deletewallet = (walletid) => {
  //   WalletService.deletewallet(walletid)
  //     .then((response) => {
  //       getwallets();
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // };

  return (
    <div className="container">
      <div className="topnav">
  <a href="/alltransactions">All Transactions</a>

  <a href="/listwallet">All Accounts</a>

  <a href="/adminlogin">Logout</a>
  </div>

    <div className="toplayer">

    <h2 className="text-center"> Accounts </h2>
      <table className="table">
        <thead>
          <tr>
            <th> Account Id </th>
            <th> Name </th>
          </tr>
        </thead>
        <tbody>
          {wallets.map((wallet) => (
            <tr key={wallet.id}>
              <td> {wallet.id} </td>
              <td> {wallet.name} </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    </div>
  );
};
export default Listwallet;
