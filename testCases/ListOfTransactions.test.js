import React from "react";
import { fireEvent, render,screen} from "@testing-library/react";
import ListofTransactions from "../component/ListofTransactions";
import ListAccount from "../component/ListAccount";
import { MemoryRouter } from "react-router-dom";
import Listwallet from "../component/Listwallet";
import transactionService from "../Services/transactionService";
import {AdminLogin,NewPage} from "../component/AdminLogin";
import Login from "../component/Login";
import Footercomponent from "../component/Footercomponent";
describe("ListOfTransactions",()=>{
it("list of transactionf",()=>{
    render(
        <MemoryRouter>< ListofTransactions /></MemoryRouter>
        );
    
})   
it("list",()=>
{
    render(
        <MemoryRouter>< ListAccount /></MemoryRouter>
        );

}) 
it("List of accounts",()=>
{
    render(
        <MemoryRouter><Listwallet/></MemoryRouter>

    );
})

it("Admin login",()=>
{
    render(
        <MemoryRouter><AdminLogin/></MemoryRouter>

    );
})

it("new page",()=>
{
    render(
        <MemoryRouter><NewPage/></MemoryRouter>

    );
})
it("Footer Component",()=>
{
    render(
        <MemoryRouter><Footercomponent/></MemoryRouter>

    );
})
it("Login",()=>
{
    render(
        <MemoryRouter><Login/></MemoryRouter>

    );
    const username=screen.getByPlaceholderText("Enter account number");
    const password=screen.getByPlaceholderText("Enter password");

    fireEvent.change(username,{target:{value:"gowri"}})
    fireEvent.change(password,{target:{value:"anu"}})
})

})