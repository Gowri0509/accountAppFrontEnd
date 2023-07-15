
import React from "react";
import { fireEvent, render,screen} from "@testing-library/react";
import CreateOrUpdateWallet from "../component/CreateOrUpdateWallet";
import { MemoryRouter } from "react-router-dom";
import WalletService from "../Services/WalletService";
import { addAccount,payLoadAccount } from "../mock/data";
describe("CreateUpdate Wallet", () => {
  it("render correctly", () => {
    
    render(

    <MemoryRouter>< CreateOrUpdateWallet /></MemoryRouter>
    );
    const name=screen.getByPlaceholderText("Enter account number");
    const myname=screen.getByPlaceholderText("Enter name");
    const password=screen.getByPlaceholderText("Enter password");
    const address=screen.getByPlaceholderText("Enter Address");
    const balance=screen.getByPlaceholderText("Enter first deposit");
    const submitbutton=screen.getByRole("button",{name:"Submit"});
    expect (name).toBeInTheDocument();
    fireEvent.change(name,{target:{value:"gowri"}})
    fireEvent.change(myname,{target:{value:"maya"}})
    fireEvent.change(password,{target:{value:"chinnu"}})
    fireEvent.change(balance,{target:{value:"1000"}})
    fireEvent.change(address,{target:{value:"Nele"}})
    fireEvent.click(submitbutton)
  });
 
  it(" add account",async()=>{
    const response=await WalletService.createwallet(payLoadAccount);
    const expectvalue=response.data;
     expect(response.data).toEqual(expectvalue);
    
  })
 
  
});


