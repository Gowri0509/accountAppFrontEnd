import axios  from "axios";
const Wallet_Base_Rest_url='http://localhost:1111/Account';
class WalletService{
    getwallets(){
        return axios.get(Wallet_Base_Rest_url+"/allAccounts")
    }
    createwallet(wallet)
    {
        return axios.post(Wallet_Base_Rest_url+"/addAccount",wallet)
    }
    getwalletbyid(walletid){
        
        return axios.post(Wallet_Base_Rest_url+"/",walletid)
    }
    updatewallet(walletid,wallet){
        return axios.put(Wallet_Base_Rest_url+ "/" ,walletid, wallet)
    }
    rechargewallet(walletid,wallet){
        return axios.put(Wallet_Base_Rest_url+"/recharge",walletid,wallet)
    }
    deletewallet(walletid){
        return axios.delete(Wallet_Base_Rest_url+ '/' + walletid);
    }
    login(wallet){
        return axios.post(Wallet_Base_Rest_url+ '/login',wallet)
    }

 }
   
  
export default new WalletService();