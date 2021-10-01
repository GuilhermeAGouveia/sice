import React from "react";
import { BrowserRouter,Route,Switch } from "react-router-dom"
import RouteSICE from "./routes/routeSICE"
import LoginMsg from "./pages/LoginMsg"
import RouteSIRES from "./routes/routeSIRES"

export default function RouterMain(){
    return(
        <BrowserRouter>
        
                <RouteSICE></RouteSICE>
                <RouteSIRES></RouteSIRES>
                <Route path="/loginmsg" component={LoginMsg}/>

            

        </BrowserRouter>
    )
}