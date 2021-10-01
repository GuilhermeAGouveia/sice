import React,{useState,useEffect} from "react"
import "./styles.css"
import {FaTable,FaCheck,FaChevronLeft} from "react-icons/fa"
export default function MesaConteiner(){
  var mesas_number_t = []
  var [mesas_number,setMesas_number] = useState([])
  useEffect(() => {
    for (let i = 1;i <= 20;i++){
      mesas_number_t.push(i)
    }
    setMesas_number(mesas_number_t)

  },[])
  var [n_mesa,setN_mesa] = useState()
  var [n_pessoas,setN_pessoas] = useState()
  
  var [click,setClick] = useState(0)
  function focusInput(input_n){
    var input = "input" + input_n
    var label = "label" + input_n
    document.getElementById(label).style.width = '25px';
    document.getElementById(input).style.opacity = '1';
    document.getElementById(input).style.zIndex = '0';
    document.getElementById('content-' + input_n + '-1').style.display = 'none';
    document.getElementById('content-' + input_n + '-2').style.display = 'block';
}
function blurInput(input_n){
  var input = "input" + input_n
  var label = "label" + input_n
    if (document.getElementById(input).value.length === 0 || document.getElementById(input).value <= 0){
      document.getElementById(label).style.width = '100%';
      document.getElementById(input).style.opacity = '0';
      document.getElementById(input).style.zIndex = '1';
      document.getElementById('content-' + input_n + '-1').style.display = 'block';
      document.getElementById('content-' + input_n + '-2').style.display = 'none';
  }
}

    return (
        
        <section id="mesa-content">
         
          <div class="number-in">
  
  
  
              <div class="conteiner-input">
                  <input class="input-number-in" id="input1" type="number" value={n_mesa} 
                    onChange={
                      e => {
                        setN_mesa(e.target.value);
                        document.getElementById('mesa-info-value').innerHTML = e.target.value;
                      }
                    } 
                    onBlur={
                      () => {
                        blurInput(1);
                        if (n_mesa !== undefined && n_pessoas !== undefined){
                          document.getElementById('item2').click()
                        }
                      }
                    } 
                    onFocus={
                      () => {
                        focusInput(1);
                        document.getElementById('btn-controll-table-choice').click()
                        document.getElementById('mesa-radio').checked = false
                      }
                    }/>
                  <span class="label-number-in" id="label1"><p  id="content-1-1">Número</p><p id="content-1-2">Nº</p></span>
              </div>
              <div class="conteiner-input">
                  <input class="input-number-in" id="input2" type="number" value={n_pessoas} onChange={e => setN_pessoas(e.target.value)} onBlur={() => {blurInput(2);if (n_mesa !== undefined && n_pessoas !== undefined){document.getElementById('item2').click()}}} onFocus={() => focusInput(2)}/>
                  <span class="label-number-in" id="label2"><p  id="content-2-1">Pessoas</p><p id="content-2-2">P</p></span>
              </div>
  
          </div>
          <div class="">
  
          </div>
          <div id="table-choice-conteiner">
                    <div id='btn-controll-table-choice' class="chevron" onClick={() => 
                        {
                            if (click === 0){
                                document.getElementById('table-choice-conteiner').style.width = '90vw'
                                document.getElementById('chevron-up').style.transform = 'rotate(180deg)'
                                
                                setClick(1)
                            } else {
                                document.getElementById('table-choice-conteiner').style.width = '20px'
                            
                                document.getElementById('chevron-up').style.transform = 'rotate(0deg)'
                                setClick(0)
                            }
                        }
                    }>
                        <FaChevronLeft id="chevron-up" size={18} color={'rgb(104,24,178)'}/>
                    </div>
                    
                    <div id="table-choice-content">
                    
                      
             
                    {mesas_number.map(number => {
                    
                          return(
                            <div class="table-select-conteiner" onClick={async () => {
                              document.getElementById('mesa-info-value').innerHTML = number
                              await setN_mesa(0)
                              blurInput(1)
                              
                              }
                            }>
                                <input type="radio" id="mesa-radio" name="radiome"></input>
                                <td class="table">
                                    <h3>{number}</h3>
                                    <FaTable color={'gray'} size={20}/>
                                </td>
                                <div class="checkmark-table"><FaCheck class="check-icon" color={'white'} size={10}/></div>
                            </div>
                          )
                            
                    }
                            )}

 
           
         
                       
                     
                    </div>
                    <div id="text-check-table">Mesas já usadas</div>
                </div>
   
                
        </section>
  
       
    )
}