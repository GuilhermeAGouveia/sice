import React from "react";
import { BrowserRouter,Route,Switch } from "react-router-dom"
import Login from "../pages/SiCE/Login"
import Home from "../pages/SiCE/Home"
import Cadastro from "../pages/SiCE/Cadastro"
import MailDisp from "../pages/SiCE/Tools/MailDisp"
import Editor from "../pages/SiCE/Tools/EditorCardapio"

//<Route path="/cadastro" component={Cadastro} />
export default function RouterSiCE(){
    return (
   
   <Switch>
        <Route path="/" exact component={Login} />
        <Route path="/home" component={Home} />
        <Route path="/cadastro" component={Cadastro} />
        <Route path="/maildisp" component={MailDisp} />
        <Route path="/editor" component={Editor} />
        
     
       
    </Switch>


  
)}
