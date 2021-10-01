import React from "react"
import {BrowserRouter,Route,Switch} from "react-router-dom"
import Home from "../pages/SiRES/Home"
import MGarcon from "../pages/SiRES/Modulos/Garcon"
import MCozinheiro from "../pages/SiRES/Modulos/Cozinheiro"
import MPagamento from "../pages/SiRES/Modulos/Pagamento"
import PagDetail from "../pages/SiRES/Modulos/Pagamento/DetailPegamento"
import PagList from "../pages/SiRES/Modulos/Pagamento/ListMesas"
import MEstatisticas from "../pages/SiRES/Modulos/Estatistico"
import Refactory from "../pages/SiRES/Refactory/Main"
import RefactoryGarcon from "../pages/SiRES/Refactory/Garcon"


export default function RouteSiRES(){
    return(
       
            <Switch>
                <Route path="/sires" exact component={Home}></Route>             
                <Route path="/sires/m-garcon" component={MGarcon}></Route>
                <Route path="/sires/m-cozinheiro" component={MCozinheiro}></Route>
                <Route path="/sires/m-pagamento" exact component={MPagamento}></Route>
                <Route path="/sires/m-pagamento/detail" component={PagDetail}></Route>
                <Route path="/sires/m-pagamento/list" component={PagList}></Route>
                <Route path="/sires/m-estatisticas" component={MEstatisticas}></Route>
                <Route path="/refactory" exact component={Refactory}></Route>
                <Route path="/refactory/garcon" component={RefactoryGarcon}></Route>
            </Switch>
       
    )
}