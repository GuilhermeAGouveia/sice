import React,{useEffect,useState} from "react"
import {useHistory} from "react-router-dom"
import api from "../../../../services/api"
import validateLogin from "../../../../services/validateLogin"
import "./styles.css"
import {FaPencilAlt,FaSave,FaAd,FaSpinner} from "react-icons/fa"
import {FiMoreVertical,FiRotateCw,FiRotateCcw} from "react-icons/fi"
import Table from "./table"
import Box from "./Box-Click"
import Menu from "../../Integrations_Page/Menu"

import "../../../alertify.css"
export default function EditorCardapio(){
var history = useHistory()
var [verse,setVerse] = useState([])
var [front,setFront] = useState([])
var [msgLogin,setMsgLogin] = useState('')
var [status_cardapio,setStatus_cardapio] = useState("Frente")
let index = -1
var [choice,setChoice] = useState(1)
var [box,setBox] = useState(7)

/*var [algo,setAlgo] = useState([{"name":"gui","age":18},{"name":"dudu","age":12}])*/

  useEffect(()=> {
    async function Validate(){
      
      var response = await validateLogin()
      setMsgLogin(response)
      }
  Validate()

    localStorage.clear()
    api.get("/listCardapio").then((response)=>{
      setFront(response.data.front);
      setVerse(response.data.verse);
      console.log(response.data.verse)

    })
    document.getElementById("table2").style.opacity = "0";
   

}
,[])




var items_backend = {}
var front_save = []
var verse_save = []
 function saveCardapio(){
  items_backend = {}
  front_save = []
  verse_save = []
  //front

   for (let i = 0;i < front.length + controll_front;i++){
     if (document.getElementById("row"+i+"-name").value !== ""){
        var name = document.getElementById("row"+i+"-name").value
        if (document.getElementById("row"+i+"-price").value !== ""){
          var price = document.getElementById("row"+i+"-price").value
         

       } else {
          var price = document.getElementById("row"+i+"-price").placeholder
        
          price = price.split("$")
          price = price[1]
       }
      } else {
        var name = document.getElementById("row"+i+"-name").placeholder
       
        if (document.getElementById("row"+i+"-price").value !== ""){
          var price = document.getElementById("row"+i+"-price").value
          console.log(document.getElementById("row"+i+"-price").value)
       
         } else{
          var price = document.getElementById("row"+i+"-price").placeholder
          price = price.split("$")
          price = price[1]
          //console.log(price)
         }
        
       }
       price = price.replace(',','.')
       price = parseFloat(price)
       front_save.push({"position":i,"name":name,"price":price})
     
    
     
   }
   //verse
   for (let i = 0;i < verse.length + controll_verse;i++){
    if (document.getElementById("verse-row"+i+"-name").value !== ""){
       var name = document.getElementById("verse-row"+i+"-name").value
       if (document.getElementById("verse-row"+i+"-price").value !== ""){
         var price = document.getElementById("verse-row"+i+"-price").value
        

      } else {
         var price = document.getElementById("verse-row"+i+"-price").placeholder
         //price = price.split("$")
        //price = price[1]
       
      }
     } else {
       var name = document.getElementById("verse-row"+i+"-name").placeholder
      
       if (document.getElementById("verse-row"+i+"-price").value !== ""){
         var price = document.getElementById("verse-row"+i+"-price").value
      
        } else{
         var price = document.getElementById("verse-row"+i+"-price").placeholder
         //price = price.split("$")
         //price = price[1]
        
        }
       
      }
      //price = price.replace(",",".")
      price = parseFloat(price)
      verse_save.push({"position":i,"name":name,"price":price})
    
   
    
  }
  items_backend['verse'] = verse_save
  items_backend['front'] = front_save

   
  console.log(items_backend)
   api.post("/updateCardapio",{items_backend}).then(res => window.location.reload())

 }


 /*var [itens2,setItens2] = useState()*/
var [controll_front,setControll_front] = useState(0)
var [controll_verse,setControll_verse] = useState(0)
var padding = 0
async function insertLine(lado){
  padding += 100
  /*itens.push({"position":12,"name":"mandioca","price":1})*/ 
  if (lado === 'frente'){
  var position =  controll_front + front.length
  document.getElementById("tag-table1").innerHTML += `<tr><td><input id=${"row"+ position +"-name"} type='text' value=""></input></td><td><input id=${"row"+ position +"-price"} type='number'></td><td></td></tr>`
  setControll_front(controll_front += 1)

  document.getElementById("row-front").innerHTML += `<p>${position + 1}</p>`
  document.getElementById("table-conteiner").style.paddingBottom = padding + "px"
  }else {
    var position =  controll_verse + verse.length
    document.getElementById("tag-table2").innerHTML += `<tr><td><input id=${"verse-row"+ position +"-name"} type='text' value=""></input></td><td><input id=${"verse-row"+ position +"-price"} type='number'></td><td></td></tr>`


  document.getElementById("row-verse").innerHTML += `<p>${position + 1}</p>`
    setControll_verse(controll_verse += 1)
  }
}


  /*  setItens(itens[position] = {
      "position":position + 2,
      "name":"",
      "price":""
    })
    console.log(itens)
   
}

/*function updateCardapio(){
  for (let index = 1; index < array.length; index++) {
    const element = array[index];
    
  }
}
*/
var [controll_click,setControll_click] = useState(0)
function btn_click_box(btn){
  console.log(controll_click)
  if (controll_click === 0){
    
    setBox(btn)
    setControll_click(1)
} else {
  
  setBox(7)
  setControll_click(0)
}
}  
var table = document.getElementById('cardapio-conteiner')
var [deg,setDeg] = useState(180)
function rotate() {

  setDeg(deg + 180)
  console.log(deg)
  table.style.transform = "rotate3d(0,1,0," + deg + "deg)";
  
  if ((deg / 180) % 2 === 0){
    document.getElementById("table2").style.opacity = "0";
    document.getElementById("table1").style.opacity = "1";
    setStatus_cardapio("Frente")

  } else {
   
    document.getElementById("table1").style.opacity = "0";
    document.getElementById("table2").style.opacity = "1";
    setStatus_cardapio("Verso")
    
    
  }

}
function analiseClickInsert(status = status_cardapio.toLowerCase())
{
  console.log("session:" + localStorage.getItem(status + "-btn-position1"))

  if (localStorage.getItem(status + "-btn-position1") === "1"){
    /*status = 'frente'?'front':'verse'*/
    insertLine(status)
    setBox(7)
  } else if (localStorage.getItem(status + "-btn-position2") === "1"){
    insertLine(status)
    setBox(7)
  } else {
      
    btn_click_box(1)
}
}


 
return(

 
        <div id="editor-root">
         {msgLogin}
          <Menu title="Editor"></Menu>
        <div id="menu-edit-root">
        <div id="menu-edit-conteiner">
  
  
        <div id="menu-edit">
            <button onClick={() => analiseClickInsert()}
                  ><FiMoreVertical size={25} color={"white"}></FiMoreVertical></button>
          
     
            <button id="btn-rotate" onClick={() => rotate()}><FiRotateCw size={25} color={"white"}></FiRotateCw></button>
            <button id="btn-bg">BG</button>
            <button id="btn-fg">FG</button>
            <button><FaPencilAlt size={25} color={"white"}></FaPencilAlt></button>
            <button onClick={() =>localStorage.clear()}><FaAd size={25} color={"white"}></FaAd></button>
            <button onClick={() => saveCardapio()}><FaSave size={25} color={"white"}></FaSave></button>
            
        </div>
          </div>
          </div>
         
          <div id="box-click">

            <Box state_card={status_cardapio} btn={box}></Box>
          </div>
      
          <div id="table-conteiner">
          <span id="status-cardapio">{status_cardapio}</span>
                <Table verse={verse} front={front}></Table>
        </div>
        

     
     
        </div>
     
        
    )
}