import React from "react"
import "./styles.css"
import "./stylesGlobalContents.css"
import MenuSiRES from "../../Menu"


//Contents 
import Content1 from "./Contents/Content-1"
import Content2 from "./Contents/Content-2"
import Content3 from "./Contents/Content-3"
import Content4 from "./Contents/Content-4"
export default function MEstatisticas(){
  function selectorStatic(left,pos){

    document.getElementById('line-selector').style.left = left

    document.getElementById('btn' + pos).style.color = 'blue'
    document.getElementById('contents-conteiner').style.left = ((pos * 100 - 100) * -1) + 'vw'
    for (let i = 1;i < 5;i++){
      if (i !== parseInt(pos)){

 
        document.getElementById('btn' + i.toString()).style.color = 'white'
        
      }
    }
  }
  
    return(
      <div class="statistics-root">
        <MenuSiRES></MenuSiRES>
      <div class="header-selector-conteiner">
        <div class="title-header">
          SiESt
        </div>
        <div class="header-selector">


        <button onClick={() => selectorStatic('0%','1')} id="btn1" type="button" name="button">DIÁRIO</button>
        <button onClick={() => selectorStatic('25%','2')}  id="btn2" type="button" name="button">MENSAL</button>
        <button onClick={() => selectorStatic('50%','3')}  id="btn3" type="button" name="button">ANUAL</button>
        <button onClick={() => selectorStatic('75%','4')} id="btn4" type="button" name="button">GERAL</button>
      <div id="line-selector">

      </div>
          </div>
      </div>
      <div id="contents-conteiner">
      <div class="part-statistics" id="content-1"><Content1></Content1></div>
      <div class="part-statistics" id="content-2"><Content2></Content2></div>
      <div class="part-statistics" id="content-3"><Content3></Content3></div>
      <div class="part-statistics" id="content-4"><Content4></Content4></div>
      </div>

</div>

    )
}