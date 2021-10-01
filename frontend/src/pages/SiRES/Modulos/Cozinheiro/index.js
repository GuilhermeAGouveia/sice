import React,{useEffect} from "react"
import {useHistory} from "react-router-dom"

import api from "../../../../services/api"
import "./styles.css"
import MenuSIRES from "../../Menu"
import DetailPedido from "./Detail_pedido"

import { useState, Component } from "react/cjs/react.development"
import { FaFileExcel, FaFilter } from "react-icons/fa"


export default function MCozinheiro(){

  var [pedidos,setPedidos] = useState([])
  var [number_pedido,setNumber_pedidos] = useState(0)
  var index = -1
  var [count,setCount] = useState(0)
  useEffect(() => {
    api.get("/sires/pedidos_temp").then(res => {
      setPedidos(res.data)
      setNumber_pedidos(res.data.length)
      console.log(pedidos)
  })},[])

  function timeout(){
    setCount(count - 1)
  }
  useEffect(() => {

    var id = setTimeout(() => {
      api.get("/sires/pedidos_temp").then(res => {
      setPedidos(res.data)
      
    
      setNumber_pedidos(res.data.length)

    })
    timeout()
  },1000)
    
    return () => clearTimeout(id)
  },[count])
  
var [json_pedido,setJson_pedido] = useState()
var [click,setClick] = useState(0)
  function pedido(json){
   console.log(json_pedido)
    if (click === 0){
    setJson_pedido(json.pedidos_mesa)
    document.getElementById("btn-close-detail").style.display = "flex"
    setClick(1)
    } else {
      setJson_pedido(null)
      setClick(0)
      document.getElementById("btn-close-detail").style.display = "none"
    }
  }
  function handDone(mesa){
    console.log("esss")
    console.log(mesa)
    setNumber_pedidos(pedidos.length -1 )
    
    /*console.log(pedidos.map(ped => ped.filter(list => list.mesa_number !== mesa.mesa_number)))*/
    /*setCount(pedidos.pedidos_mesa.filter(ped => ped.mesa_number !== mesa.mesa_number))*/
    
    api.post("/sires/donePedido",mesa).then( res =>
      console.log("e")
    )
  }
  
    return(
        <div id="m-cozinheiro-root">
            <MenuSIRES title="Cozinheiro"></MenuSIRES>
      <header id="header-m-cozinheiro">
        <div id="title-m-cozinheiro">
          <h1>Pedidos</h1>
        </div>
    <span id="number-pedidos">{number_pedido} pedidos</span>
      </header>
      <section id="section-m-cozinheiro">
        {pedidos.map(pedidos => (
           <div key={++index} id={pedidos["pedidos_mesa"][pedidos["pedidos_mesa"].length - 1]["mesa_number"]} class="pedidos-conteiner">
           <div class="title-m-cozinheiro-pedidos" onClick={() => pedido(pedidos)}>
        <h2>Mesa {pedidos["pedidos_mesa"][pedidos["pedidos_mesa"].length - 1]["mesa_number"]}</h2>
           </div>
           <div class="pedidos-content">
             <div class="items-list" onClick={() => pedido(pedidos)}>
               <h3> {pedidos["pedidos_mesa"].length - 1} items</h3>
             </div>
             <div id="n-pessoas-pedido" onClick={() => pedido(pedidos)}>
                <h3>{pedidos["pedidos_mesa"][pedidos["pedidos_mesa"].length - 1]["n_pessoas"]} pessoas</h3>
             </div>
             <div class="info-pedidos">
               <div class="timer-conteiner">
                   <span>00:10</span>
               </div>
               <button type="button" name="button" onClick={() => handDone(pedidos["pedidos_mesa"][pedidos["pedidos_mesa"].length - 1])}> <div id="content-btn-finality"></div> </button>
             </div>
           </div>
           
         
         </div>
        )

        )}
        

       
      </section>
<DetailPedido json={json_pedido}></DetailPedido>
<div id="btn-close-detail"><button onClick={() => pedido(null)}>Fechar</button></div>
    </div>
        

    )
        }
    
