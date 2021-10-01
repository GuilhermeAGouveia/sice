import React from "react"
import './styles-box/global.css'
import './styles-box/stylesBox1.css'
import { useState } from "react/cjs/react.development"
export default function Box_Click(props){
    var controll3 = {}
 

    var state_cardapio = props.state_card.toLowerCase()
    
    console.log(state_cardapio)

function btn_pos(btn_n) {
  var btn_pos = "btn-position" + btn_n

  var btn = document.getElementById(btn_pos)
  var btn_pos = state_cardapio + "-btn-position" + btn_n
  if ((controll3[btn_pos] === 0 || controll3[btn_pos] === undefined) && (controll3.check === 0 || controll3.check === undefined)){

    btn.style.left = "7px"
    btn.style.background = "blue"
    controll3.check = 1
    controll3[btn_pos] = 1
    localStorage.setItem(btn_pos,1)
  } else if (controll3[btn_pos] === 1){
    btn.style.left = "-7.5px"
    btn.style.background = "gray"
    controll3[btn_pos] = 0
    controll3.check = 0
    localStorage.setItem(btn_pos,0)

  }

}

    
    switch (props.btn){

        case 1:
          if (localStorage.getItem(state_cardapio + "-btn_position1") === 1 || localStorage.getItem(state_cardapio + "-btn-position2") === 1){
           
                    }
          else {
            return (
                <div class="box-root">
                <h2 class="title-box">Inserir linha</h2>
                <div id="insert">
                  <h4>Deseja inserir uma linha no inicio ou no final?</h4>
                  <div class="buttons">
                    <button type="button" name="insert-start">Inicio</button>
                    <button type="button" name="insert-start">Final</button>
          
                  </div>
          
                </div>
                <div id="option-insert">
          
          
                <div id="sempre-end">
          
          
                <div onClick={() => btn_pos(1)} class="btn-on">
                  <div class="btn-position" id="btn-position1">
          
                  </div>
                </div>
                <span>Sempre inserir no final</span>
                </div>
                <div id="sempre-end">
          
          
                <div onClick={() => btn_pos(2)} class="btn-on">
                  <div class="btn-position" id="btn-position2">
          
                  </div>
                </div>
                <span>Sempre inserir no início</span>
                </div>
              </div>
          
          
              </div>

            
 

            )}
            break;
        case 2:
            return (
                <div class="box-root">
                <h1>Inserir</h1>
                </div>
            )
            break;
        case 3:
            return (
                <div class="box-root">
                <h1>Inserir</h1>
                </div>
            )
            break;
        case 4:
            return (
                <div class="box-root">
                <h1>Inserir</h1>
                </div>
            )
            break;
        case 5:
            return (
                <div class="box-root">
                <h1>Inserir</h1>
                </div>
            )
            break;
        default:
          return null;
            break;

    }
}