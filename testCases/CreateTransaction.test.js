import React from "react";
import { fireEvent, render,screen} from "@testing-library/react";
import CreateTransaction from "../component/CreateTransaction";
import { MemoryRouter } from "react-router-dom";
import WalletService from "../Services/WalletService";
import { addAccount,payLoadAccount } from "../mock/data";
describe("Create Transaction", () => {
  it("render correctly", () => {
    
    render(

    <MemoryRouter>< CreateTransaction /></MemoryRouter>
    );
    const sender=screen.getByPlaceholderText("Enter sender account number");
    const receiver=screen.getByPlaceholderText("Enter receiver account number");
    const recharge=screen.getByPlaceholderText("Enter true if recharge");
    const balance=screen.getByPlaceholderText("Enter first deposit");
    const submitbutton=screen.getByRole("button",{name:"Submit"});
    expect (sender).toBeInTheDocument();
    fireEvent.change(receiver,{target:{value:"gowri"}})
    fireEvent.change(recharge,{target:{value:"false"}})
    fireEvent.change(sender,{target:{value:"maya"}})
    fireEvent.change(balance,{target:{value:"1000"}})
    
    fireEvent.click(submitbutton)
  });
});