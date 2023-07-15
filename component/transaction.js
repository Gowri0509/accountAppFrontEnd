
// import { Link } from "react-router-dom";
// import { useNavigate, useParams } from "react-router-dom";
// import transactionservice from "../Services/transactionService.js";


// const Transaction = () => {
//   const [senderNumber, setsenderNumber] = useState("");
//   const [receiverNumber, setReceiverNumber] = useState("");
//   const [balance, setBalance] = useState("");
//   const navigate = useNavigate();
//   const saveOrUpdateWallet = (e) => {
//     e.preventDefault();
//     const newTransaction = { senderNumber,receiverNumber, balance };
//     transactionservice.createtransaction(newTransaction)
//         .then((response) => {
//           console.log(response.data);
//           navigate("/listAccount");
//         })
//         .catch((error) => {
//           console.log(error);    });      
    
//   };
//   return (
//     <div>
//       <div className="container">
//         <div className="row">
//           <div className="card col-md-6 offset-md-3 offset-md-3">
        
//             <div className="card-body">
//               <form>
//                 <div className="form-group mb-2">
//                   <label className="form-label"> Sender Account Number :</label>
//                   <input
//                     type="text"
//                     placeholder="Enter sender account number"
//                     name="account number"
//                     className="form-control"
//                     value={senderNumber}
//                     onChange={(e) => setsenderNumber(e.target.value)}
//                   ></input>
//                 </div>
//                 <div className="form-group mb-2">
//                   <label className="form-label"> Receiver account number :</label>
//                   <input
//                     type="text"
//                     placeholder="Enter receiver account number"
//                     name="name"
//                     className="form-control"
//                     value={receiverNumber}
//                     onChange={(e) => setReceiverNumber(e.target.value)}
//                   ></input>
//                 </div>
                
//                 <div className="form-group mb-2">
//                   <label className="form-label"> Deposit:</label>
//                   <input
//                     type="text"
//                     placeholder="Enter transaction amount "
//                     name="balance"
//                     className="form-control"
//                     value={balance}
//                     onChange={(e) => setBalance(e.target.value)}
//                   ></input>
//                 </div>

//                 <button>
//                   <button
//                     className="btn btn-success"
//                     onClick={(e) => saveOrUpdateWallet(e)}
//                   >
//                     Submit{" "}
//                   </button>
//                 </button>

//                 <Link to="/" className="btn btn-danger">
//                   {" "}
//                   cancel
//                 </Link>
//               </form>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Transaction;
