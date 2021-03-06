import React,{useEffect,useState} from "react"
import {useHistory} from "react-router-dom"
import api from "../../../../services/api"
import validateLogin from "../../../../services/validateLogin"
import "./styles.css"
import {FiSearch} from "react-icons/fi"
import Menu from "../../Integrations_Page/Menu/"
import alertify from "alertifyjs"

import Option from "./view_options"

export default function MailDisp(){
    var [msgLogin,setMsgLogin] = useState('')
    var [view,setView] = useState(1)
    var [mails,setMails] = useState([])
    var mailsTrue = []
    var index = 0
    var [test,setTest] = useState(false)
    var [text,setText] = useState('')
    var [title,setTitle] = useState('')


    var [estado,setEstado] = useState("Selecionar todos")
 
    useEffect(()=>{
        
        async function Validate(){
            var response = await validateLogin()
            setMsgLogin(response)
            }
        Validate()
        document.getElementById("view1").checked = true;
        api.get("/mailget").then(response => {setMails(response.data)})
    },[])

    
    try {
        var content = mails[6]["name"]
    } catch (error) {
        var content = ""
    }

    function allChecked(){
        
        if (!test){
            setTest(true)
            setEstado("Remover todos")
            document.getElementById("select-all").style.background = "red"
            document.getElementById("select-all").value = estado
            for (let i = 0;i < mails.length;i++){
                document.getElementById(i).checked = true;
                
            }
        } else {
            setTest(false)
            setEstado("Selecionar todos")
            document.getElementById("select-all").style.background = "green"
            for (let i = 0;i < mails.length;i++){
                document.getElementById(i).checked = false;
                
            }

        }

    }
    function handleEnd(e){
        e.preventDefault()
        for (let i = 1;i <= 3;i++){
            if (document.getElementById("view"+i).checked === true){
                var option_header = i
                break
            }
        }
        for (let i = 0;i < mails.length;i++){
            if (document.getElementById(i).checked === true){
                mailsTrue.push(mails[i]["email"])
                
            }

       }
       if(mailsTrue.length === 0) {
        alertify.error("Necess??rio selecionar destinat??rios para o envio!")
        return 0;
    }
      
        document.getElementById("maildisp-root").style.opacity = "0.5"
        document.getElementById("load-mail-send").style.display = "block";
        document.getElementById("load-mail-send").style.opacity = "1"
   
     
       api.post("/maildisp",{"mailTrue":mailsTrue,"title":title,"text":text}).then(
        response => {
        console.log(response);
        document.getElementById("maildisp-root").style.opacity = "1"
        document.getElementById("load-mail-send").style.display = "none";
        if (response.data === 'erro'){
            console.log(mailsTrue)
            alertify.error("Email n??o enviado por erro de conex??o!")
        }
        else{
            alertify.success("Enviado!")
        }

        }
    )

}



    
    return(

    <div id="root-teste">
        {msgLogin}
         <div id="load-mail-send">
            <div id="line1"></div>
            <div id="line2"></div>
            <div id="line3"></div>
            </div>
                      
 
        <div id="maildisp-root">
        <Menu title="Disparador de Email"></Menu>
  
       
      
            <div id="maildisp-conteiner">
                <form onSubmit={handleEnd}>
                <div id="conteiner-input-title">
                
                    <input 
                    onFocus={() => {
                        document.getElementById("label-title").style.top = "-12px";
                        document.getElementById("label-title").style.fontSize = "0.8em"
                                            
                    }}
                    onBlur={() => {
                        if (title.length === 0){
                            console.log(title.length)
                            document.getElementById("label-title").style.top = "3px";
                            document.getElementById("label-title").style.fontSize = "100%";
                        } else {
                            document.getElementById("label-title").style.top = "-12px";
                            document.getElementById("label-title").style.fontSize = "0.8em";
                        }
                    }}
                
                 
                    id="title-mail" value={title} onChange={e => setTitle(e.target.value)} type="text" autocomplete="off"/><br/>
                    <label id="label-title" for="title-mail">T??tulo</label>
                </div>
                <div id="conteiner-text-mail">               
                    <textarea onFocus={() => {
                        document.getElementById("label-text-mail").style.opacity = "0"
                      
                    }}
                    onBlur={() => {
                        if (text.length === 0){
                            document.getElementById("label-text-mail").style.opacity = "1"
                   
                        }
                    }}id="text-mail" value={text} onChange={e => setText(e.target.value)} cols="100" rows="10"></textarea>
                    <label id="label-text-mail" for="text-mail">Texto</label><br/>
                </div>
                <div id="select-header">
                <div id="text-options">
                    <p>Model Adm</p>
                    <p>Model Pro</p>
                    <p id='model-3'>Model Client</p>
                </div>
                <div id="radio-model-header">
                    <input onClick={() => setView(1)} id="view1" name="select-header" type="radio"/>
                    <input onClick={() => setView(2)} id="view2" name="select-header" type="radio"/>
                    <input onClick={() => setView(3)} id="view3" name="select-header" type="radio"/>
                   
                </div>
                <div id="view-options">
                    <Option value={view}></Option>
                </div>
                </div>
    <div class="conteiner-select-all" >
        <button type="button"  onClick={() =>allChecked()} name="select-all" id="select-all" onChange={estado}>{estado}</button>
    <div 
    onMouseOver={() => {
        document.getElementById("input-search").style.width = "19vw"
                                                                                             
                                                                                           
                        }}
    onMouseLeave={() => {
        document.getElementById("input-search").style.width = "0vw"
                                                                                          
                                                                                          
                        
                        }}id="conteiner-search"><input id="input-search" type="text" placeholder="Digite"/>
    <button id="btn-search" type="button" onClick={() => {}}><FiSearch id="icon-search" size="18" color="black"></FiSearch></button></div>
        </div>
                <div className="op-select">
                    <ul>
                        {mails.map(mails => 
        
                        (
                 
                        <li class="itens-mails">
                            <label class="container">
                                <input type="checkbox" id={index++}/>
                                <span class="checkmark"></span>
                            </label>
                            <p className="values-select">{mails.name}</p>
                            <p className="values-select">{mails.email}</p> 
                        </li>
                  
                        ))}
                    </ul>
                    </div>
                    <div className="button-submit"> <button id="submit" type="submit">Enviar</button></div>
                </form>
            </div>
            
                    
                               
        </div>
        </div>
    )
}