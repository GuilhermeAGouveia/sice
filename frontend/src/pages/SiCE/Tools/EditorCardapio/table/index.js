import React,{useState,useEffect} from "react"
import "./styles.css"
export default function Table(props){


var index1 = -1
var index2 = -1

var front = props.front
var verse = props.verse

var rows_front = []
var rows_verse = []
for (let index = 1; index <= front.length; index++) {
    rows_front.push(index)
}
for (let index = 1; index <= verse.length; index++) {
    rows_verse.push(index)
}
   
    /*useEffect(() =>{ for(let index = 0; index < props.items.length; index++) {
        console.log(items[index]["name"])
       document.getElementById("table").innerHTML += `<tr row=${index}>
       <td class="cell-1"><input type="text" id=${"row"+ index +"-name"} placeholder=${props.items[index]["name"]}/> </td> 
       <td class="cell-2"> <input type="text" id=${"row"+ index +"-price"} placeholder=${props.items[index]["price"]}/> </td> 
       <td class="cell-3"></td> 
       </tr>`

        
    }
    },[items])*/
   
    return (

<div id="cardapio-conteiner">
    <div class="cardapio" id="table1">       
        <div class="title-cardapio" id="title-cardapio2"><h2>Recanto Bela Vista</h2><h2> Restaurante e Espaço para Eventos</h2></div>
        <div class="table">
            <div class="row" id="row-front">
            {
            rows_front.map(rows =>
              (<p>{rows}</p>)
            )
            }  
            </div>
            <table  class="table" id="tag-table1" border="1">
                <th class="cell-1">Comidas</th>
                <th class="cell-2">Preços</th>
                <th class="cell-3">Quantidade</th>
                <tr id="reserv-start"></tr>
                {
                front.map(itens =>
                (

                    <tr row={++index1}>
                        <td class="cell-1"><input type="text" id={"row"+ index1 +"-name"} placeholder={itens["name"]}/></td> 
                        <td class="cell-2"> <input type="number" id={"row"+ index1 +"-price"} placeholder={Intl.NumberFormat('pt-BR',{ style: 'currency', currency: 'BRL'}).format(itens["price"])}/></td> 
                        <td class="cell-3"></td> 
                    </tr>
                )
                        )
                }
            </table>
        </div>
    </div>
    <div class="cardapio" id="table2">
        <div class="title-cardapio" id="title-cardapio2"><h2>Recanto Bela Vista</h2><h2> Restaurante e Espaço para Eventos</h2></div>
        <div class="table">
            <div class="row" id="row-verse">
            {
            rows_verse.map(rows =>
             (
             <p>{rows}</p>
             )
                    )
            }
            </div>
            <table  class="table" id="tag-table2" border="1">
                <th class="cell-1-verse">Nome</th>
                <th class="cell-2-verse">Mesa</th>
                {/*<th class="cell-3-verse">Quantidade</th>*/}
                <tr id="reserv-start"></tr>
                {
                verse.map(itens =>
                
                (
                    
                    <tr row_v={++index2}>
                        <td class="cell-1"><input type="text" id={"verse-row"+ index2 +"-name"} placeholder={itens["name"]}/></td> 
                        <td class="cell-2"> <input type="number" id={"verse-row"+ index2 +"-price"} placeholder={itens["price"]}/></td> 
                {/*<td class="cell-3"></td>*/ }
        
                    </tr>
        
                )
                        )
                }
            
        
           
              
            </table>
        </div>
    </div>
</div>
             
    )
}