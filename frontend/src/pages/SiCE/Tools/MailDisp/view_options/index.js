import React from 'react'
import "./styles/styles1.css"

export default function Option(props){
    if (props.value === 1){
        return (
        <div id="op1">
        <div class="title-view">Opção {props.value}</div>
        <div class="body">
        <div class="header-title">Recanto Bela Vista</div>
        <div class="header-title">Restaurante & Espaço para Eventos</div>


        </div>
        </div>
     

        )
    } else if(props.value === 2){
        return (
            <div id="op1">
            <div class="title-view">Opção {props.value}</div>
            <div class="body">
            <div class="header-title">Recanto Bela Vista</div>
            <div class="header-title">Restaurante & Espaço para Eventos</div>
    
    
            </div>
            </div>
         
        )
    } else if(props.value === 3){
        return (
            <div id="op1">
            <div class="title-view">Opção {props.value}</div>
            <div class="body">
            <div class="header-title">Recanto Bela Vista</div>
            <div class="header-title">Restaurante & Espaço para Eventos</div>
    
    
            </div>
            </div>
        )
    }

}