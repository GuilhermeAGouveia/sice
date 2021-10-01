import React,{useState,useEffect} from "react"
import {useHistory} from 'react-router-dom'
import "./styles.css"
import MenuSiRES from "../../../Menu/index"
import api from "../../../../../services/api"
import {FiTrash2} from 'react-icons/fi'
import {}from "react-fonts"
export default function ListMesasPagamento(){
    var [mesa_list,setMesa_list] = useState([])
    var [total,setTotal] = useState(0)
    var [count,setCount] = useState(0)
    function increment(){
        setCount(count + 1)
    }
    useEffect (() => {
        api.get("/sires/mesas_conta").then(res => {
        
        setTotal(res['data'][res['data'].length - 1]['total_absoluto'])
        setMesa_list(res.data.filter(list => list.mesa_number !== undefined))
      
    
    })
    },[]) 
    useEffect(() =>{
        api.get("/sires/mesas_conta").then(res => {
          setMesa_list(res.data.filter(list => list.mesa_number !== undefined))
            setTotal(res['data'][res['data'].length - 1]['total_absoluto'])
        })
      
        var timeout = setTimeout(increment,6000)
        return () => clearTimeout(timeout)
    },[count])
    var history = useHistory()
    function redirectDetail(mesa_number){
      localStorage.setItem("mesa_number",mesa_number)
      history.push("/sires/m-pagamento/detail")
    }
  
    function handleDelete(mesa_number,valueDescont){
        setTotal(total - valueDescont)
        setMesa_list(mesa_list.filter(list => list.mesa_number !== mesa_number))
        api.post('/sires/doneMesa',{mesa_number,'validate':false}).then()
    }
    return (
        <div class="list-mesa-root">
        <MenuSiRES title="Pagamentos"></MenuSiRES>
        <header id="header-list-mesa">
    <h3>Lista monetária de mesas</h3><span id="total-absoluto">{Intl.NumberFormat('pt-br',{style:'currency',currency:'BRL'}).format(total)}</span>
        </header>
        <div class="list-mesa-conteiner">
          {
            mesa_list.map(list => (
            <div id={'mesa' + list.mesa_number} class="mesa-uso">
            <div class="lixeira"><FiTrash2 color={'red'} size={15} onClick={() => {handleDelete(list.mesa_number,list.total_mesa);}}></FiTrash2></div>
            <div class="title-mesa-uso">
              <span>Mesa {list.mesa_number}</span>
            </div>
            <div class="content-mesa-uso"  onClick={() => redirectDetail(list.mesa_number)}>
              <p>{4} pessoas</p>
          <p>{Intl.NumberFormat('pt-br',{style:'currency',currency:'BRL'}).format(list.total_mesa)}</p>
            </div>
          </div>
          ))
          }
         
        </div>
    </div>
    )
}