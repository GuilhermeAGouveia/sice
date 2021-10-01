import React,{useState,useEffect} from "react"
import {useHistory} from "react-router-dom"
import "./styles.css"

import MenuSIRES from "../../Menu"

export default function MPagamento(){
    var [mesa_number,setMesa_number] = useState()
    var history = useHistory()
   
    function redirectDetail(){
      localStorage.setItem("mesa_number",mesa_number)
      history.push("/sires/m-pagamento/detail")
    }
    return(
        <div id="pag-root">
            <MenuSIRES title="Pagamento"></MenuSIRES>
        <div class="mesa-input-pag">

          <input onFocus={() => {
              document.getElementById("label-mesa").style.top = "23px"
          }}
          onBlur={() => {
           
            
            if (mesa_number === undefined || mesa_number === null || mesa_number === ''){
                document.getElementById("label-mesa").style.top = "41px";
            }
          }}type="number" id="mesa-number" name="" value={mesa_number} onChange={e => setMesa_number(e.target.value)}/>
          <label id="label-mesa" for="mesa-number">Mesa</label>
        </div>
        <div class="options-pag">
          <button type="button" onClick={() => redirectDetail()}name="button">Encerrar Conta</button>
          <button type="button" onClick={() => history.push("/sires/m-pagamento/list")}name="button">Listar Mesas</button>
          <button type="button" name="button">Listar como Pendente</button>
        </div>
      </div>
    )
}
