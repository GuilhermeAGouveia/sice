import React,{useState,useEffect} from "react"
import SelectItem from "./Select-items"
import GarconR from "../../../Garcon"
import "./styles.css"
import api from "../../../../../../services/api"
import {FiArrowDownRight,FiArrowDownLeft,FiChevronDown} from "react-icons/fi"
import { FaLeaf } from "react-icons/fa"
export default function ItemsConteiner(){




  var [items,setItems] = useState([])
  var [permission,setPermission] = useState(1)
    /*var [quant,setQuant] = useState(1)*/
    useEffect(() =>{
      
      api.get("/sires/items").then(res => {
        setItems(res.data);
        
        
      })

    },[])
 
  var [quant,setQuant] = useState(1)
  var [click,setClick] = useState(0)
  var [colorIconInsert,setColorIconInsert] = useState('gray')
  function leftCall(leftCallState){
    if (leftCallState === 0){
      document.getElementById('hidden-float-left').style.display = 'flex'
      document.getElementById('left-content-part').style.opacity = '1'
      document.getElementById('call-left').style.color = 'rgb(20,80,250)'
      document.getElementById('chevron-push-left').style.transform = 'rotate(0deg)'
      document.getElementById('chevron-push-left').style.left = '0px'
      document.getElementById('chevron-push-left').style.width = '100vw'
      document.getElementById('chevron-push-left').style.background = 'rgb(200,200,200)'
      document.getElementById('chevron-push-left').style.top = '-27.5vh'
      document.getElementById('chevron-push-left').style.zIndex = '1'
      document.getElementById('chevron-push-left').style.height = '65vh'
    }else {
      document.getElementById('hidden-float-left').style.display = 'none'
      document.getElementById('left-content-part').style.opacity = '0'
      document.getElementById('chevron-push-left').style.width = '80vh'

      document.getElementById('call-left').style.color = 'rgb(20,80,250)'
      document.getElementById('chevron-push-left').style.transform = 'rotate(-60deg)'
      document.getElementById('chevron-push-left').style.left = '-50vh'
      document.getElementById('chevron-push-left').style.top = '0vh'
      document.getElementById('chevron-push-left').style.zIndex = '0'
      document.getElementById('chevron-push-left').style.height = '32vh'
      document.getElementById('chevron-push-left').style.background = 'rgb(24, 0, 28)'
    }
  }
  function rightCall(rightCallState){
    if (rightCallState === 0){
      document.getElementById('chevron-push-right').style.width = '100vw'
      document.getElementById('hidden-float-right').style.display = 'flex'
      document.getElementById('right-content-part').style.opacity = '1'
      document.getElementById('call-right').style.color = 'rgb(20,80,250)'
      document.getElementById('chevron-push-right').style.transform = 'rotate(0deg)'
      document.getElementById('chevron-push-right').style.right = '0px'
      document.getElementById('chevron-push-right').style.background = 'rgb(200,200,200)'
      document.getElementById('chevron-push-right').style.top = '-27.5vh'
      document.getElementById('chevron-push-right').style.zIndex = '1'
      document.getElementById('chevron-push-right').style.height = '65vh'
    }else {
      document.getElementById('right-content-part').style.opacity = '0'
      document.getElementById('chevron-push-right').style.width = '80vh'
      document.getElementById('hidden-float-right').style.display = 'none'

      document.getElementById('call-right').style.color = 'rgb(20,80,250)'
      document.getElementById('chevron-push-right').style.transform = 'rotate(60deg)'
      document.getElementById('chevron-push-right').style.right = '-50vh'
      document.getElementById('chevron-push-right').style.top = '0vh'
      document.getElementById('chevron-push-right').style.zIndex = '0'
      document.getElementById('chevron-push-right').style.height = '32vh'
      document.getElementById('chevron-push-right').style.background = 'rgb(24, 0, 28)'
    }
  }
  function focusInput(){
      document.getElementById('label-quant').style.width = '20px';
      document.getElementById('input-quant').style.opacity = '1';
      document.getElementById('input-quant').style.zIndex = '0';
      document.getElementById('content1').style.display = 'none';
      document.getElementById('content2').style.display = 'block';
}
  function blurInput(){
      if (document.getElementById('input-quant').value.length === 0){
      document.getElementById('label-quant').style.width = '100%';
      document.getElementById('input-quant').style.opacity = '0';
      document.getElementById('input-quant').style.zIndex = '1';
      document.getElementById('content1').style.display = 'block';
      document.getElementById('content2').style.display = 'none';
    }
  }
  
  function insertItem(){
    document.getElementById('empty').style.display = 'none'
    document.getElementById('conf').style.color = 'rgb(84,44,174)'
    document.getElementById('items-insert-r').style.display = 'block'
    let quant = document.getElementById('input-quant').value
    var item = document.getElementById('items-select').innerText
    document.getElementById('items-insert-r').innerHTML += `<tr><td>${item}</td><td>${quant}</td></tr>`
  }

    return (
       
      <section id="content-items">

      <div class="left-content">
          <div id='chevron-push-left' class="chevron-push" onKeyPress={() => leftCall(0)} onClick={() => leftCall(0)}>
            <div class="content-part" id="left-content-part" onClick={() => {if (click === 1){document.getElementById('items-select').click()}}}>
              <div class="conteiner-buttons">
                <div class="conteiner-input-quant">
                    <input id="input-quant" type="number" value={quant} 
                      onChange={e => 
                        {
                          setQuant(e.target.value)
                          if (document.getElementById('items-select').value !== '' && (document.getElementById('input-quant').value >= 1 || quant >= 1)){
                            document.getElementById('btn-insert').style.background = 'rgb(24,71,178)'
                            setColorIconInsert('white')
                            setPermission(1)
                            
                           

                            
                          } else {
                            document.getElementById('btn-insert').style.background = 'white'
                            setColorIconInsert('gray')
                            setPermission(0)


                           

                            

                          }

                        }
                      } 
                      onBlur={() => 
                        {
                          
                          blurInput()
                          if (document.getElementById('items-select').value == ''){
                            document.getElementById('items-select').click()
                          }
                          if (document.getElementById('items-select').value !== '' && quant >= 1){
                            document.getElementById('btn-insert').style.background = 'rgb(24,71,178)'
                            setColorIconInsert('white')
                            setPermission(1)

                            

                          } else {
                            document.getElementById('btn-insert').style.background = 'white'
                            setColorIconInsert('gray')
                            setPermission(0)


                       

                           

                            

                          }
                          
                         
                        }
                      } 
                      onFocus={() => focusInput()}/>
                    <span id="label-quant"><p  id="content1">Quantidade</p><p id="content2">Q</p></span>
                </div>

                <div id="btn-insert" 
                  onClick={() => 
                    {
                      document.getElementById('icon-insert').style.display = 'none';
                      document.getElementById('icon-insert').style.display = 'block';
                      insertItem()
                      if (permission === 1){
                      
                      }
                    }
                  }>
                      <FiChevronDown id="icon-insert" size={20} color={colorIconInsert}/>
                </div>
                <button id="items-select"
                  onClick={() => 
                    {
                      if (click === 0){
                        document.getElementById('select-root').style.bottom = '10vh'
                        document.getElementById('left-content-part').style.filter = 'brightness(0.5)'
                        setClick(1)
                      } else {
                        document.getElementById('select-root').style.bottom = '-40vh'
                        document.getElementById('left-content-part').style.filter = 'brightness(1)'
                        
                        setClick(0)
                      }
                    }
                  }
                
              >
                 <span id="items-select-value">Escolha</span>
                </button>
              </div>
              <div class="items-insert-conteiner">
                <div class="header-table-conteiner">


                    <div class="headers-table">
                      <span>Nome</span>
                      <span>Quantidade</span>
                    </div>
                  </div>
                <div id="empty">
                  <span>Nenhum item inserido</span>
                </div>
                <table id="items-insert-r" >
                </table>
              </div>

            </div>

          </div>
          <div class="detail-items">
            <span id="call-left" class="call">
              Inserir Detalhadamente
            </span>
          </div>
      </div>
      <div class="right-content">
        <div id='chevron-push-right' class="chevron-push" onClick={() => rightCall(0)}>
          <div class="content-part" id="right-content-part">
            <div class="load">

            </div>
            <div class="fast-pedidos">
              <div class="content-fast">
                <span>1 unid. Skol/Brahma 600ml</span>
              </div>
              <div class="content-fast">
                <span>1 unid. Refeição</span>
              </div>
              <div class="content-fast">
                <span>1 unid. Suco Copo</span>
              </div>
              <div class="content-fast">
                <span>1 unid. Coca Cola 2L</span>
              </div>
              <div class="content-fast">
                <span>1 unid. Refrigerante Lata</span>
              </div>
              <div class="content-fast">
                <span>1 unid. Skol 600ml</span>
              </div>
              <div class="content-fast">
                <span>1 unid. Skol 600ml</span>
              </div>
              <div class="content-fast">
                <span>1 unid. Skol 600ml</span>
              </div>
              <div class="content-fast">
                <span>1 unid. Skol 600ml</span>
              </div>
            </div>
          </div>
        </div>
        <div class="detail-items">
          <span id="call-right" class="call">
            Inserir Brevemente
          </span>
        </div>
      </div>
      <div class="hidden-items" id="hidden-float-left" onClick={() => {if (click === 1){document.getElementById('items-select').click()}leftCall(2)}}><FiArrowDownLeft color={'black'} size={20}/></div>
      <div class="hidden-items" id="hidden-float-right" onClick={() => rightCall(2)}><FiArrowDownRight color={'black'} size={20}/></div>
      <SelectItem></SelectItem> 
     

    </section>
  
       
    )
}