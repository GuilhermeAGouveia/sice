import React from "react"
import "./styles.css"
import MenuSIRES from "../Menu"
import {Link} from "react-router-dom"
import { FaConciergeBell, FaDollarSign, FaList } from "react-icons/fa"
import { } from "react-icons/fi"



export default function Home(){
    return(
        <div id="sires-home-root">
            <MenuSIRES title="SiRES"></MenuSIRES>
  {//<h1 id="title-prop">Recanto Bela Vista</h1>
  }
      <div id="pedidos-state">

        <h2>Pedidos</h2>
        <div id="pedidos-options">
          <button id="p-pendentes" type="button" name="button">Pendentes<div id="p-line-1" class="line"></div></button>
          <button id="p-encerrados" type="button" name="button">Encerrados<div id="p-line-2" class="line"></div></button>
          <button id="p-cancelados" type="button" name="button">Cancelados<div id="p-line-3" class="line"></div></button>

        </div>
        <div class="conteiner-pedidos">


        <div class="content-pedidos" id="conteiner-pendentes">
          <span>10</span>
          <img src="sss" alt=""/>
        </div>
        <div class="content-pedidos" id="conteiner-pendentes">
          <span>10</span>
          <img src="sss" alt=""/>
        </div>
        <div class="content-pedidos" id="conteiner-pendentes">
          <span>10</span>
          <img src="sss" alt=""/>
        </div>
          </div>
      </div>
      <div id="bottom-bar">
        <Link class="bar-link" to="/sires/m-garcon"><FaConciergeBell size={40} color={'white'}/></Link>
        <Link class="bar-link" to="/sires/m-cozinheiro"><FaList size={40} color={'white'}/></Link>
        <Link class="bar-link" to="/sires/m-pagamento"><FaDollarSign size={40} color={'white'}/></Link>
       
       
      </div>
    </div>


    )
}