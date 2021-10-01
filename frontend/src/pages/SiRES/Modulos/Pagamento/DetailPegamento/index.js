import React,{useState,useEffect} from "react"
import "./styles.css"
import MenuSIRES from "../../../Menu"

import api from "../../../../../services/api"

export default function DetailPag(){
  const [mesa_items,setMesa_items] = useState([])
  var [click,setClick] = useState(0)
  var mesa_number = parseInt(localStorage.getItem("mesa_number"))
  var [total,setTotal] = useState(0)

   useEffect(() => {
 
    api.post("/sires/listMesa",{"mesa_number":mesa_number}).then(response => {
      setMesa_items(response.data)

      setTotal(response.data[response.data.length -1]["total"])
    })
  }
  ,[])
  

    function pagDetailDisplay(){
    var frame = document.getElementById("items-consumidos")
      if (click === 0){
        setClick(1)
        frame.style.height = "100%"
    } else {
      setClick(0)
      frame.style.height = "18px"
    }
  }



    return(
        <div id="pag-root">
            <MenuSIRES title="Pagar"></MenuSIRES>
      <div class="title-pag">
    <h2>Mesa {mesa_number}</h2>
      </div>
      <div id="items-consumidos" onClick={() => pagDetailDisplay()}>
        <div type="button" name="button">Ver Detalhes</div>
        <table>
          <th>Item</th>
          <th>Quantidade</th>
          {mesa_items.map(mesa_items => (
            <tr>
              <td>{mesa_items['name']}</td>
              <td>{mesa_items['quant']/*Intl.NumberFormat('pt-BR',{ style: 'currency',currency:'BRL'}).format(mesa_items['total_item'])*/}</td>
            </tr>
          ))}
        </table>
      </div>
      <div class="total-pag">
    <h3>Total: {Intl.NumberFormat('pt-BR',{ style: 'currency', currency: 'BRL'}).format(total)}</h3>
      </div>
      <button id="finish-btn-pag" type="button" name="button">Finalizar</button>
    </div>
    )
}
