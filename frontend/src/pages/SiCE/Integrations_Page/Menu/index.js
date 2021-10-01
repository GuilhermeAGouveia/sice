import React from "react"
import {Link,useHistory} from "react-router-dom"
import {FiUser,FiLogIn,FiSettings} from "react-icons/fi" 
import {FaHome ,FaPowerOff} from "react-icons/fa"
import alertify from "alertifyjs"
import "../../../alertify.css"
import "./stylesMenu.css"
import { useEffect } from "react/cjs/react.development"
import api from "../../../../services/api"



export default function Menu(props){
    var history = useHistory()
    useEffect(() => {
        var login = sessionStorage.getItem('login_state')
      
      
        if (login === undefined || login === null || login === 'false'){
            document.getElementById('login').style.display = 'flex'
            document.getElementById('logoff').style.display = 'none'
        } else {
           
           
          
            document.getElementById('login').style.display = 'none'
            document.getElementById('logoff').style.display = 'flex'
           
        }
    },[])
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
                <span class="box-info"><span></span>Ajustes</span>
            </div>
            <div class="conteiner-register">
                <Link to='/cadastro'><FiLogIn size={"35px"} color={"white"}></FiLogIn></Link>
                <span class="box-info"><span></span>LogOut</span>
            </div>
        </div>
        <div class="list-menu">

            <li><a class='link' href="/home/#redirect-dom-plates" onClick={() => menu_start()}>Platos Especiais</a></li>
            <li><Link class="link" to="/sires/">SiRES</Link></li>
            <li><Link class="link" to="/sires/m-estatisticas">Estatisticas</Link></li>
            <li><Link class="link" to="/maildisp">FeedBack</Link></li>
            <li><Link class="link" to="/editor">Contato</Link></li>



        </div>

        <div class="metadados-sice">
            <span id="data-sice">{string_date}</span>
            <span id="user-sice"><b>Usuario:</b>{sessionStorage.getItem('username')}</span>

        </div>
    </div>

          
      
    <div id="header-conteiner">
        <div id="menu-conteiner" onClick={() => menu_start()}>
            <div id="line-menu-1" className="menu-lines"></div>
            <div id="line-menu-2" className="menu-lines"></div>
            <div id="line-menu-3" className="menu-lines"></div>
        </div>
        <h1 id="title-header-menu-sice">{props.title}</h1>
        <Link onClick={() => localStorage.setItem('path_return',window.location.pathname)} to="/" id="login" class="login"><FiUser color={"white"} size={"19px"}/>Login</Link> 
        <Link onClick={() => sessionStorage.setItem('login_state',false)} to="/" id="logoff" class="login"><FaPowerOff color={"white"} size={"15px"}/>Logout</Link> 
        
        </div>
        </div>
    )
}