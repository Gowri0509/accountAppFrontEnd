import axios  from "axios";
const Transaction_Base_Rest_url='http://localhost:1111/transaction';
class transactionService{
    createtransaction(transaction)
    {
        return axios.post(Transaction_Base_Rest_url+"/addTransaction",transaction)
    }

   getSenderTransactions(senderAccountNumber){
        return axios.get(Transaction_Base_Rest_url+"/sendTransactions/"+senderAccountNumber)
    }

    getReceiverTransactions(receiverAccountNumber){
        return axios.get(Transaction_Base_Rest_url+"/receiveTransactions/"+receiverAccountNumber)
    }
    gettransactions(){
        return axios.get(Transaction_Base_Rest_url+"/alltransactions")
    }
}
export default new transactionService();