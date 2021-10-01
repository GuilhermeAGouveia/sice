import React,{useEffect,useState} from "react"
import "./styles.css"
import {FaInfoCircle,FaSearch,FaRegCalendarAlt,FaLock} from "react-icons/fa"
import api from "../../../../../../services/api"
var s = 'TTT'

export default function Content1(){
    var [date_search,setDate_search] = useState('')
    var [last_day,setLast_day] = useState({})
    var [items,setItems] = useState({})
    var [best_day,setBest_day] = useState({})
    var [bad_day,setBad_day] = useState({})
    var [seta,setSeta] = useState()
    var [click,setClick] = useState(0)
    var [day_name,setDay_name] = useState('')
    useEffect(() => {
      
    },[])
    
    function controllContent(n_controll){
        document.getElementById('cont-box-4-' + n_controll).style.background = 'rgb(24,14,126)'
        document.getElementById('cont-box-4-' + n_controll).style.color = 'white'
        document.getElementById('content-box-4-' + n_controll).style.display = 'block'
        for (let i = 1;i < 5;i++){
          if (i !== parseInt(n_controll)){
      
            document.getElementById('cont-box-4-' + i.toString()).style.background = 'transparent'
            document.getElementById('cont-box-4-' + i.toString()).style.color = 'blue'
            document.getElementById('content-box-4-' + i).style.display = 'none'
      
      
          }
        }
      }
    var [search,setSearch] = useState([])
    var [itemDetailSearch,setItemDetailSearch] = useState([])
   function searchDay(){
     document.getElementById('load-search-conteiner2').style.display = 'none'
     document.getElementById('erro').style.display = 'none'

     document.getElementById('result-search-conteiner').style.display = 'none'
     document.getElementById('load-search-conteiner').style.display = 'flex'
     var date = date_search
     date = date.split('-')
     var day_speciefic = `${date[2]}/${date[1]}/${date[0]}`
     api.post('/sires/searchEstDay',{day_speciefic}).then(res => {
       document.getElementById('load-search-conteiner').style.display = 'none'
       if (res.data[0]['day_number'] !== undefined){
      
      document.getElementById('result-search-conteiner').style.display = 'block'
      setSearch(res.data[0])
      setItemDetailSearch(res.data[1])
       } else {
        document.getElementById('erro').style.display = 'flex'
        document.getElementById('erro').innerHTML = res.data
       }
     })
   }
    return(
    <div id="content-4">
    
        <div id="indisponivel">
          <span id='info-content-4'><FaInfoCircle size={15} color={'white'}></FaInfoCircle></span>
          <div>Indisponível<FaLock size={25} color={'white'}></FaLock></div>
          </div>
        <div id="content-main">
        <div class="resumo">
          <p>Resumo Geral</p>
          <div class="content-diario">
            <div class="bar">
              <button onClick={() => controllContent(1)} id="cont-box-4-1" type="button" name="button">{day_name}</button>
              <button onClick={() => controllContent(2)} id="cont-box-4-2" type="button" name="button">Items</button>
              <button onClick={() => controllContent(3)} id="cont-box-4-3" name="button">Melhor Dia</button>
              <button onClick={() => controllContent(4)} id="cont-box-4-4" name="button">Pior Dia</button>

            </div>
            <div class="content-bar-selection">
              <div class="content-box" id="content-box-4-1">
                <div class="title-date-box-3">
                  <span>{last_day.day_speciefic}</span><span class="calendar-title"> <FaRegCalendarAlt color={"white"} size={18}/></span>
                  <span class="mouserovercalendar">{last_day.day_string}<span></span></span>
                </div>
                  <div class="data-s" id="r-total">
                    <span>Renda Total:</span> <span>{Intl.NumberFormat('pt-br',{style:'currency',currency:'BRL'}).format(last_day.value_total)}</span>
                  </div>
                  <div class="data-s" id="relacao-ontem">
                        <span>Ganhos com Relação à ontem: </span><span>{seta}{last_day.porcent_compare}%</span>
                  </div>
                  <div class="data-s" id="m-pag">
                    <span>Média de gasto por pessoa  </span><span>{Intl.NumberFormat('pt-br',{style:'currency',currency:'BRL'}).format(last_day.gastoporpessoas)}</span>
                  </div>
                  <div class="data-s" id="media/mesa">
                    <span>Média de gasto por mesa </span><span>{Intl.NumberFormat('pt-br',{style:'currency',currency:'BRL'}).format(last_day.gastopormesa)}</span>
                  </div>
                </div>




              <div class="content-box" id="content-box-4-2">
              <div class="title-date-box-3">
                   <span>{day_name}</span> <span class="calendar-title"><FaRegCalendarAlt color={"white"} size={18}/></span>
                  <span class="mouserovercalendar">{last_day.day_string}<span></span></span>
                </div>
                

                  <div class="data-s" id="r-total">
                    <span>Items mais pedidos:</span> <span>{ }</span><span>25</span>
                  </div>
                  <div class="data-s" id="relacao-ontem">
                    <span>Comida mais pedida: </span><span>Feijoada</span><span>25</span>
                  </div>
                  <div class="data-s" id="m-pag">
                    <span>Bebida mais pedida: </span><span>Skol 600ml</span><span>80</span>
                  </div>
                  <div class="data-s" id="media/mesa">
                    <span>Média de gasto por mesa </span><span>{Intl.NumberFormat('pt-br',{style:'currency',currency:'BRL'}).format(bad_day.gastopormesa)}</span>
                  </div>
                </div>

              <div class="content-box" id="content-box-4-3">
                <div class="title-date-box-3">
                  <span>{best_day.day_speciefic}</span> <span class="calendar-title"><FaRegCalendarAlt color={"green"} size={18}/></span>
                  <span class="mouserovercalendar">{best_day.day_string}<span></span></span>
                </div>
                <div class="data-s" id="r-total">
                    <span>Renda Total:</span> <span>{Intl.NumberFormat('pt-br',{style:'currency',currency:'BRL'}).format(best_day.value_total)}</span>
                  </div>
                <div class="data-s" id="r-total">
                  <span>Items mais pedidos:</span> <span>{best_day.itemBest}</span><span>{best_day.quant_item}</span>
                </div>
                <div class="data-s" id="relacao-ontem">
                  <span>Comida mais rentável: </span><span>{best_day.itemBest}</span><span>{Intl.NumberFormat('pt-br',{style:'currency',currency:'BRL'}).format(best_day.renda)}</span>
                </div>
                <div class="data-s" id="m-pag">
                  <span>Média de gasto por pessoa </span><span>{Intl.NumberFormat('pt-br',{style:'currency',currency:'BRL'}).format(best_day.gastoporpessoas)}</span>
                </div>
                <div class="data-s" id="media/mesa">
                  <span>Média de gasto por mesa </span><span>{Intl.NumberFormat('pt-br',{style:'currency',currency:'BRL'}).format(best_day.gastopormesa)}</span>
                </div>

              </div>
              <div class="content-box" id="content-box-4-4">
              <div class="title-date-box-3">
                  <span>{bad_day.day_speciefic}</span> <span class="calendar-title"><FaRegCalendarAlt color={"red"} size={18}/></span>
                  <span class="mouserovercalendar">{bad_day.day_string}<span></span></span>
                </div>
                <div class="data-s" id="r-total">
                    <span>Renda Total:</span> <span>{Intl.NumberFormat('pt-br',{style:'currency',currency:'BRL'}).format(bad_day.value_total)}</span>
                  </div>
                <div class="data-s" id="r-total">
                  <span>Items mais pedidos:</span> <span>{bad_day.itemBad}</span><span>{bad_day.quant_item}</span>
                </div>
                <div class="data-s" id="relacao-ontem">
                  <span>Comida mais rentável: </span><span>{bad_day.itemBad}</span><span>{Intl.NumberFormat('pt-br',{style:'currency',currency:'BRL'}).format(bad_day.renda)}</span>
                </div>
                <div class="data-s" id="m-pag">
                  <span>Média de gasto por pessoa </span><span>{Intl.NumberFormat('pt-br',{style:'currency',currency:'BRL'}).format(bad_day.gastoporpessoas)}</span>
                </div>
                <div class="data-s" id="media/mesa">
                  <span>Média de gasto por mesa </span><span>{Intl.NumberFormat('pt-br',{style:'currency',currency:'BRL'}).format(bad_day.gastopormesa)}</span>
                </div>

              </div>
            </div>
          </div>


        </div>
        <div class="search-day-conteiner">
          <div class="search-day">
            <label for="">Pesquise um dia em especifíco</label>
            <div class="search-input-conteiner">
              <input id="search-input" type="date" value={date_search} onChange={e => setDate_search(e.target.value)}/>
              <FaSearch color={"blue"} size={18} onClick={() => searchDay()}></FaSearch>
            </div>

          </div>
          <div class="result-search">
            <div id="load-search-conteiner">


            <span id="point-1">.</span>
            <span id="point-2">.</span>
            <span id="point-3">.</span>
          </div>
          <div id="load-search-conteiner2">


<span id="point-1">.</span>
<span id="point-2">.</span>
<span id="point-3">.</span>
</div>
          <div id="result-search-conteiner">
            <div><span>Renda Total</span> <span>{search.value}</span> </div>
            <div><span>Numero de Pessoas</span> <span>{search.n_pessoas}</span> </div>
            <div><span>Numero de Mesas</span> <span>{search.n_mesas}</span> </div>
            <div><span>Numero de Identificação</span> <span>{search.day_number}</span> </div>
            <div id="items-detail-conteiner"><button id="btn-item-display" onClick={() => {
              if (click === 0){
              document.getElementById('items-detail-conteiner').style.height = '100%'
              document.getElementById('btn-item-display').style.background = 'red'
              document.getElementById('btn-item-display').style.color = 'white'
              document.getElementById('btn-item-display').innerHTML = 'Ocultar detalhes da Venda de Items'
              
              setClick(1)
              } else {
                document.getElementById('items-detail-conteiner').style.height = '30px'
                document.getElementById('btn-item-display').style.background = 'blue'
                document.getElementById('btn-item-display').style.color = 'black'
                document.getElementById('btn-item-display').innerHTML = 'Detalhes da Venda de Items'
                setClick(0)
              }
              }}>Detalhes da Venda de Items</button>
              <div id="items-detail">
                {itemDetailSearch.map(item => (
                  <div class="item-detail-row"><span>{item.item}</span><span>{item.quant}</span><span>{Intl.NumberFormat('pt-br',{style:'currency',currency:'BRL'}).format(item.value)}</span></div>
                ))}
              </div>
            
            
            </div>
           
          </div>
         <div id="erro"></div>
        </div>

      </div>
      </div>
    </div>

    )
    
}