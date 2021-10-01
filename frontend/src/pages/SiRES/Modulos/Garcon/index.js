import React,{useEffect} from "react"
import "./styles.css"
import api from "../../../../services/api"
import { useState } from "react/cjs/react.development"
import {FaArrowRight} from "react-icons/fa"
import alertify from "alertifyjs"
import "../../../alertify.css"
import MenuSiRES from "../../Menu/index" 

export default function MGarcon(){
    var [items,setItems] = useState([])
    /*var [quant,setQuant] = useState(1)*/
    useEffect(() =>{
      
      api.get("/sires/items").then(res => {
        setItems(res.data);
        document.getElementById("input-quant").value = 1;
        
      })

    },[])
    
    var items_insert = {}
    var items_backend = []
    function insertItem() {
        var quant = document.getElementById('input-quant').value
        var item = document.getElementById('select-item').value
       
        for (let i=0;i < items.length;i++){
          if (items[i]["name"] === item){
            var id = items[i]["id"]
            break;
          }
        }
       
        
      
        if (quant === "" || quant <= 0 || item === ""){
        
        }else{
          quant = parseInt(quant)
          if (items_insert[item] !== undefined){
            quant += items_insert[item]["quant"]
            
            items_insert[item]["quant"] = quant
            for (let i=0;i < items_backend.length;i++){
              if (items_backend[i]["id"] === id){
                items_backend[i]['quant'] = quant
              }
            }
            console.log(items_insert)
            document.getElementById(items_insert[item]["item"]).innerHTML = "<td>"+ items_insert[item]["quant"] + "</td><td>"+ items_insert[item]["item"] + "</td>"
          }else{
          
            items_insert[item]=  {"item":item,"quant":quant}
            items_backend.push({"id":id,"name":item,"quant":quant})
            console.table(items_insert)
          

          document.getElementById('table-items').innerHTML +=`<tr id='${items_insert[item]["item"]}'><td>${items_insert[item]["quant"]}</td><td>${items_insert[item]["item"]}</td></tr>`
      }
    }}
    var position = 0
    function arrow_transition(pos) {
        var frame = document.getElementById('area-form')
        var arrow_right = document.getElementById('arrow-right')
        var arrow_left = document.getElementById('arrow-left')
        position += pos
        frame.style.right = position + "vw"
        if (position <= 0) {
  
          arrow_left.style.display = "none";
        } else {
  
          arrow_left.style.display = "block";
        }
        if (position >= 200) {
          arrow_right.style.display = "none";
        } else {
          arrow_right.style.display = "block";
        }
  
      }

    function handleEnd(){
    
      var mesa = document.getElementById("input-mesa").value
      console.log(mesa)
      if (mesa === '' || mesa === null || mesa === undefined ){
        alertify.error('Necessário numero de mesa!')
        document.getElementById('area-form').style.right = '0vw'
        document.getElementById("input-mesa").focus()
        return 0
      }
      document.getElementById("arrow-confirm").style.display = "none"
      document.getElementById("load-pedidos-insert").style.display = "block"
      
      
      var n_pessoas = 2 //document.getElementById("n_pessoas").value
      var data = items_backend
      data.push({"mesa_number":mesa,n_pessoas})
      api.post("/sires/mesa_temp",data).then(res => {
        document.getElementById("arrow-confirm").style.display = "block";
        document.getElementById("load-pedidos-insert").style.display = "none";
        window.location.reload();
      })
      
    }
  
    return(
        <div id="m-garcon-root">
          <MenuSiRES title="Garcon"></MenuSiRES>
      <div id="area-form">
        <div id="mesa" class="camp">
          <div class="title-camp">
            <h3>Mesa</h3>
          </div>
          <div class="content-camp">
            
            <input id="input-mesa" class="mesa-inputs" type="number" name="" placeholder="Number" required/>
              {/*onChange={e => {
                var mesa_number = e.target.value
               
                api.post('/sires/existMesa',{mesa_number}).then(res => {
                  if (!res.data){
                    document.getElementById('n_pessoas').value = null
                  } else {
                    document.getElementById('n_pessoas').value = res.data[0].n_pessoas
                  }
                })
                }
              } */}
              
            {/*<input id="n_pessoas" class="mesa-inputs" type="number" name="" placeholder="Pessoas" required/>*/}

          </div>
        </div>
        <div id="items" class="camp">
          <div class="title-camp">
            <h3>Items</h3>
          </div>
          <div class="content-camp">
            <div id="content-items">

              <div id="button-itens">


                <input type="number" id="input-quant" name="quant" placeholder="Quantidade"/>
                <select id="select-item" class="" name="">
                  <option value="">Items</option>
                  {items.map(items => (
                    <option item_id={items.id} value={items.name}>{items.name}</option>
                  ))}
                  

                </select>
              </div>
              <div id="insert-btn">
                <button type="button" onClick={() => insertItem()} name="button">Inserir</button>

              </div>
              <div id="items-insert">
                <table id="table-items">
                  <th>Quantidade</th>
                  <th>Item</th>

                </table>
              </div>
            </div>

          </div>
        </div>
        <div id="observations" class="camp">
          <div class="title-camp">
            <h3>Observações</h3>
          </div>
          <div class="content-camp">
            <textarea id="input-observation" name="name" rows="8" cols="80" placeholder="Observações"></textarea>

            </div>
          </div>
          <div class="arrows-pass">
            <div id="arrow-left" onClick={() => arrow_transition(-100)}>

            </div>
            <div id="arrow-right" onClick={() => arrow_transition(100)}>

            </div>
          </div>
        </div>

  
      <div class="button-submit">
        <button type="submit" id="btn-submit-pedidos" onClick={() => handleEnd()} name="button">Confirmar<div id="load-pedidos-insert"></div><FaArrowRight id="arrow-confirm" size={20} color={"white"}></FaArrowRight></button>
      </div>

    </div>

    )
}