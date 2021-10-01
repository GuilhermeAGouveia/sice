import React, { useState } from "react"
import {Link,useHistory} from "react-router-dom"
import api from "../../../services/api"
import {FiUser,FiOctagon,FiList,FiSettings} from "react-icons/fi" 
import {FaHome } from "react-icons/fa"

import "./stylesMenu.css"
import { useEffect } from "react/cjs/react.production.min"



export default function Menu_SiRES(props){
  
    var his = useHistory()
    
    
    var date = new Date()
    var mouth_dic = ["janeiro","fevereiro","março","abril","maio","junho","julho","agosto","setembro","outubro","novembro","dezembro"]
    var day_dic = ["domingo","segunda","terça","quarta","quinta","sexta","sabádo"]

    var year = date.getFullYear()
    var day = date.getDate()
    var day_week = date.getDay()
    var mouth = date.getMonth()
    var day_st = day_week === 0 || day_week === 6?day_dic[day_week]:day_dic[day_week] + "-feira"
    var string_date = day + " de " + mouth_dic[mouth] + " de " + year + "," + day_st

    var menu_state = 0
    function menu_start()
    { 
        var menu = document.getElementById("menu-root") 
        var line1 = document.getElementById("line-menu-1")
        var line2 = document.getElementById("line-menu-2")
        var line3 = document.getElementById("line-menu-3")
        if (menu_state === 0){
       
        menu.style.height = "100vh" 
        line1.style.display = "none"
        line2.style.top = "10px"
        line3.style.top = "10px"
        line2.style.position = "absolute"
        line3.style.position = "absolute"
        line2.style.transform = "rotate(-45deg)"
        line3.style.transform = "rotate(45deg)"

        menu_state = 1
        } else{
    
        
        line1.style.display = "block"
        line2.style.top = "auto"
        line3.style.top = "auto"
        line2.style.position = "relative"
        line3.style.position = "relative"
        line2.style.transform = "rotate(0deg)"
        line3.style.transform = "rotate(0deg)"
        menu.style.height = "0vh"
        menu_state = 0
        } 

    } 
    return (
     
        <div>
        <div id="menu-root">
        <div class="header-menu">
            <div class="conteiner-home">
                <Link to="/home"><FaHome size={"35px"} color={"white"}></FaHome></Link>
                
                <span class="box-info"><span></span>Home</span>
            </div>
            <div class="conteiner-settings">
                <FiSettings size={"35px"} color={"white"}></FiSettings>
                <span class="box-info"><span></span>Settings</span>
            </div>
            <div class="conteiner-register">
                <FiList size={"35px"} color={"white"}></FiList>
                <span class="box-info"><span></span>Register</span>
            </div>
        </div>
        <div class="list-menu">

            <li><Link class="link" to="/maildisp">Platos Especiais</Link></li>
            <li><Link class="link" to="/maildisp">SiCE</Link></li>
            <li><Link class="link" to="/sires/m-estatisticas">Estatisticas</Link></li>
            <li><Link class="link" to="/maildisp">FeedBack</Link></li>
            <li><Link class="link" to="/editor">Contato</Link></li>



        </div>

        <div class="metadados">
    <span id="data">{string_date}</span>
            <span id="user"><b>Usuario:</b>Guilherme</span>

        </div>
    </div>

          
      
    <div id="header-conteiner" style={{'background':props.color}}>
        <div id="menu-conteiner" onClick={() => menu_start()}>
            <div id="line-menu-1" className="menu-lines"></div>
            <div id="line-menu-2" className="menu-lines"></div>
            <div id="line-menu-3" className="menu-lines"></div>
        </div>
        <h1 id="title-header-menu">{props.title}</h1>
        <div id="mesa-info">Mesa: <span id="mesa-info-value">Indef.</span></div>
        </div>
        </div>
    )
}