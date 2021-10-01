import React,{useEffect,useState} from "react"
import "./styles.css"
import {FaCheck} from "react-icons/fa"
import api from "../../../../../../../services/api"
import Hammer from "react-hammerjs"

export default function SelectItems(){
   

    var [items,setItems] = useState([])
    var [itemsOrdened,setItemsOrdened] = useState([])


      /*var [quant,setQuant] = useState(1)*/
      useEffect(() =>{
        
        api.get("/sires/items").then(res => {
          setItems(res.data);
          var teste = []
          for (let i = 0;i < res.data.length;++i){
              teste.push(res.data[i].name)

          }
          teste = teste.sort()
          var vet = []
          var aux = 'A'
          var test_n = -1
          for (let i = 0;i < teste.length;++i){
            if (aux !== teste[i][0].toLowerCase()){
                test_n += 1
                aux = teste[i][0].toLowerCase()
                vet.push({'letter':aux.toUpperCase()})
                vet[test_n]['words'] = []
                vet[test_n]['words'].push(teste[i])
            } else {
                vet[test_n]['words'].push(teste[i])
            }
           

        }
        console.log(vet)
          setItemsOrdened(vet)

      
          document.getElementById("input-quant").value = 1;
          
        })
  
      },[])
    function select(op){
        document.getElementById('op-'+ op).style.opacity = 1
        document.getElementById('section-select').style.left = (op * -100 + 100) + 'vw'
        for (let i = 1;i <= 2;++i){
          if (i !== parseInt(op)){
            document.getElementById('op-'+ i).style.opacity = 0.6
    
          }
        }
      }
      function handlePanLeft(ev,e){
        console.log(ev)
        if (ev.additionalEvent === 'panright' && ((ev.angle > 140 && ev.angle < 200) || (ev.angle > -70 && ev.angle < 60))){
          select(1)
        } else if (ev.additionalEvent === 'panleft' && ((ev.angle > 140 && ev.angle < 200) || (ev.angle > -70 && ev.angle < 60))){
          select(2)
        }
       
      }
    return (
        <div id="select-root">
        <header id='header-select'>
          <span id="op-1" onClick={() => select(1)}>Comidas</span>
          <span id="op-2" onClick={() => select(2)}>Bebidas</span>
  
  
        </header>
      <Hammer onPan={(ev,e) => handlePanLeft(ev,e)} direction={'DIRECTION_ALL'}>
        <section id="section-select">
  
          <div class="options-conteiner" id="op-1-section">
  
  
        {/*itemsOrdened.map(item => (
            <div class="options" onClick={() => document.getElementById('items-select-value').innerHTML = item}>
  
              <input class="comidas-input" type="radio" name="comidas"/>
              <div class="checkbox-select"><FaCheck color={'white'} size={7} /></div>
              <label>{item}</label>
  
  
            </div>


        )
        )*/}
         
         {itemsOrdened.map(item => (
         
         <div class="letter-conteiner">

            <div class="letter-content">
                <div class="line1"></div>
                <span class="letters">{item.letter}</span>
                <div class="line2"></div>

            </div>
            {item.words.map(item2 => (
            <div class="options" onClick={() => document.getElementById('items-select-value').innerHTML = item2}>
  
              <input class="comidas-input" type="radio" name="comidas"/>
              <div class="checkbox-select"><FaCheck color={'white'} size={7} /></div>
              <label>{item2}</label>
  
  
            </div>


        )
        )}
       </div>


        )
        )}
      
  
          </div>
  
  
        <div class="options-conteiner" id="op-2-section">
  
  
  
          <div class="options">
  
            <input class="comidas-input" type="radio" name="comidas"/>
            <div class="checkbox-select"><FaCheck color={'white'} size={10} /></div>
            <label>Coca</label>
  
  
          </div>
          <div class="options">
  
            <input class="comidas-input" type="radio" name="comidas"/>
            <div class="checkbox-select"><FaCheck color={'white'} size={10} /></div>
            <label>Guaraná</label>
  
          </div>
  
        </div>
  
  
  
        </section>
        </Hammer>
      </div>
    )
}