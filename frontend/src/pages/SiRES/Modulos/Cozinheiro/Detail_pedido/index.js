import React,{useState} from "react"

import "./styles.css"

export default function Detail(props){
 
    if (props.json === null || props.json === undefined){
        return null
    } else {
        
       
       
        return (
    <div id="detail-root">
        <div id="header-detail">
            <div id="back-detail" onClick={() => {}}>
              
            </div>
            <div class="title-detail">
        <h3>Mesa {props['json'][props['json'].length -1]["mesa_number"]}</h3>
            </div>
            <div class="time-detail">
                <span>00:10</span>
            </div>
        </div>
        <div class="body-detail">
            <div class="list-ped">
           { props.json.map(it =>
            (
            
                <div class="items-l">
                  <p>{it.quant}</p>
                  <p>{it.name}</p>
                </div>
            ))}
            </div>
        </div>
    </div>
        )
        /*<div id="detail-root">
        {props.json.map(it =>
            (
                <li>{it.name}</li>
            ))}
        
    </div>*/
    }
  


     
   
            }
    
    
    
