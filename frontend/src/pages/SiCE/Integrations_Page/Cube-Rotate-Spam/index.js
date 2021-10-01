import React from "react"
import "./stylesCube3D.css"
import {FaFacebook,FaWhatsapp} from "react-icons/fa"

export default function Cube(){
    return(
        <div class="conteiner-cube">
        <div class="faces" id="face1">
        <div id="conteiner-welcome">
        <span class="welcome">Bem vindo</span>
      
        </div>
            
        </div>
        <div class="faces" id="face2">
        <div class="calendario">
      <div id="today">


        <span class="title-c" id="title-c-1">Hoje</span>
        <div class="status">
          <span>Status:</span>
          <span>funcionando</span>
          <div id="circle-status"></div>
        </div>
      </div>
      <div id="next-event">
       <div>
       
        <div class="title-c" id="title-c-2">Próximo Evento</div>
        <div class="t-c-content">
        <div>4 de Julho</div>
        <div id="name-n">Carnaval</div>
        </div>
        </div>
      </div>

    </div>
        </div>
        <div class="faces" id="face3">
        <div id="header-buttons"><button><FaFacebook size={"30px"} color={"white"}></FaFacebook> </button>
              <button><FaWhatsapp size={"30px"} color={"white"}></FaWhatsapp></button>
            </div>
        </div>
        <div class="faces" id="face4">
            <h1></h1>
        </div>
      </div>
    )
}