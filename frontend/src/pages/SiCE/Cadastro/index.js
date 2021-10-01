import React,{useState, useEffect} from "react"
import {Link} from "react-router-dom"
import NumberFormat from "react-number-format";
import {FaUserAlt,FaUserAstronaut,FaEnvelope,FaCheck,FaPhone,FaLock,FaTimes,FaExclamationTriangle} from "react-icons/fa"
import {FiLogIn} from "react-icons/fi"

import api from "../../../services/api"
import "./styles.css"
import Axios from "axios";
import alertify from "alertifyjs"
import "../../alertify.css"
function Cadastro(){
    useEffect(() => {
        document.getElementById('metatag').content = 'rgb(21,234,232)'
    },[])
    
    var [number2, setNumber2] = useState(-1)
    var [number, setNumber] = useState(0)
    var [name, setName] = useState('')
    var [username, setUsername] = useState('')
    var [passwd, setPasswd] = useState('')
    var [confirm, setConfirm] = useState('')
    var [email, setEmail] = useState('')
    var [phone, setPhone] = useState('');
    var cont = document.getElementsByClassName("conteiner-state")
    var [color1, setColor1] = useState("gray")
    var [color2, setColor2] = useState("gray")
    var [color_icon_progress,setColor_icon_progress] = useState('black')
    
   
    
   
function Close(id){
    var box = document.getElementById(id)
    box.style.display = "none"
}
function ConfirmVerify(){
     
    if (passwd[number2] === confirm[number2]){
        document.getElementById("passwd-confirm").style.border = "2px solid green"
        document.getElementById("mensagem2").style.display = "none"
          
            
    } else {

        document.getElementById("mensagem2").style.display = "flex"
        document.getElementById("passwd-confirm").value = "";
        setNumber2(-1)
    }
        setNumber2(++number2)
}

async function Controll(estado,opcao){
    console.log(estado)
    var estado1 = document.getElementById("inicio")
    var estado2 = document.getElementById("conteiner-name")
    var estado3 = document.getElementById("conteiner-options")
    var estado4 = document.getElementById("conteiner-user")    
    var estado5 = document.getElementById("conteiner-passwd")    
    var estado6 = document.getElementById("conteiner-confirm")    
    var estado7 = document.getElementById("conteiner-mail")
    var estado8 = document.getElementById("conteiner-phone")
    var barrel_progress = document.getElementById("progress")
   
    
    switch (estado) {
      
        case 1:
            /*var estado1 = document.getElementById("inicio")
            var estado2 = document.getElementById("conteiner-name")
            var estado3 = document.getElementById("conteiner-options")
            var estado4 = document.getElementById("conteiner-user")*/
            
            if (opcao == "next"){
                estado1.style.display = "none"
                estado2.style.display = "block"
                estado3.style.display = "flex"
                
                
                if (window.innerWidth <= 500 || window.innerHeight <= 500){
                    barrel_progress.style.position = 'fixed'
                    barrel_progress.style.width = '100vw'
                    barrel_progress.style.height = '40px'
                    setColor_icon_progress('white')
                } else {
                barrel_progress.style.position = 'relative'
                }
                barrel_progress.style.opacity = 1
                setNumber(1)

            } else if (opcao == "back"){
                document.getElementById("mensagem3").style.display = "none"
                document.getElementById("barrel1").style.width = "0px"
                estado2.style.display = "block"
                estado4.style.display = "none"
                 
            }
            break;
        case 2:
            /*var estado1 = document.getElementById("conteiner-name")
            var estado2 = document.getElementById("conteiner-user")
            var estado3 = document.getElementById("conteiner-passwd")*/
                
                
            if (opcao == "next" && name.length !== 0){
                    
                document.getElementById("barrel1").style.width = "100%"
                estado4.style.display = "block"
                estado2.style.display = "none"
                 
                    
            } else if (opcao === "back"){
                
                document.getElementById("barrel2").style.width = "0px"
                estado4.style.display = "block"
                estado5.style.display = "none"
        
            } else {
                document.getElementById("name").style.border = "solid 2px red"
              
                document.getElementById("mensagem1").style.display = "flex"
          
                number = 1
                setNumber(1)
                   
            }

            break;    
        case 3:
            /*var estado1 = document.getElementById("conteiner-user")
            var estado2 = document.getElementById("conteiner-passwd")
            var estado3 = document.getElementById("conteiner-confirm")*/
           
            if (username.length !== 0){
                var validation = await api.post('/validateUsername',{"username":username})
            } else {
                var validation = {'data':true}
            }
            console.log(validation)
            if (opcao === "next" && username.length !== 0 && validation.data){
                document.getElementById("barrel2").style.width = "100%"
                estado4.style.display = "none"
                estado5.style.display = "block"
            } else if (opcao == "back"){
                document.getElementById("barrel3").style.width = "0px"
                estado5.style.display = "block"
                estado6.style.display = "none"


            } else if (!validation.data){
                document.getElementById("mensagem3").style.display = "flex"
                setNumber(2)
            } else {
                document.getElementById("mensagem1").style.display = "none"
                document.getElementById("mensagem1").style.display = "flex"
                number = 2
                setNumber(2)
            }   
            break;
        case 4:
            /*var estado1 = document.getElementById("conteiner-passwd")
            var estado2 = document.getElementById("conteiner-confirm")
            var estado3 = document.getElementById("conteiner-mail")*/
            if (opcao === "next"){
                document.getElementById("barrel3").style.width = "100%"
                estado5.style.display = "none"
                estado6.style.display = "block"
            } else if (opcao == "back"){
                document.getElementById("barrel4").style.width = "0px"
                estado6.style.display = "block"
                estado7.style.display = "none"
            }
                
            break;
        case 5:
            /*var estado1 = document.getElementById("conteiner-confirm")
            var estado2 = document.getElementById("conteiner-mail")
            var estado3 = document.getElementById("conteiner-phone")*/
            if (opcao === "next" && confirm === passwd){
                document.getElementById("barrel4").style.width = "100%"
                estado6.style.display = "none"
                estado7.style.display = "block"
            } else if (opcao == "back"){
                document.getElementById("barrel5").style.width = "0px"
                estado7.style.display = "block"
                estado8.style.display = "none"
            } else{
                setNumber(4)
                number = 4
                document.getElementById('mensagem2').style.display = 'block'
            }
        
                        
            break;
        case 6:
            /*var estado1 = document.getElementById("conteiner-mail")
            var estado2 = document.getElementById("conteiner-phone")*/
            if (opcao === "next"){
                document.getElementById("barrel5").style.width = "100%"
                estado7.style.display = "none"
                estado8.style.display = "block"
            } else{

                    
            }
        
            break;
        case 7:

            estado8.style.display = "none"
            estado3.style.display = "none"
            document.getElementById("conteiner-end").style.display = "block"

                
            break;
        default:
            if (estado < 1){
          
            number = 1
            }
            break;
        }
}
async function handleCad(e){

    document.getElementById("load").style.display = "block";
    e.preventDefault()

    var data = {
        name,
        username,
        passwd,
        email,
        phone
    }
    try{
        var res = await api.post("/cadastro",data).then(response => {
            document.getElementById("load").style.display = "none";
            document.getElementById('login-btn').style.height = '50px'
            document.getElementById('login-btn').style.width = '50px'
            document.getElementById('success-login').style.left = '0vw'
        
        
        })
        
    } catch (err){
        document.getElementById("load").style.display = "none"
        
       alertify.error("Nome de usuário existente,tente outro")
       console.log()
       

    }
}


    return(
<div id="cad-root">
    <div id="success-login">
        <div id="title-sucess">
            <span>Login concluído com Sucesso</span>
        </div>
        <div id="sucess-content">
            <p>
                Parabéns, seu login foi concluído, e muito bom tê-lo conosco, agora, vá para tela de login e explore nosso ambiente.
            </p>
           
        </div>
        <Link to='/' id="login-btn"><FiLogIn size={30} color={'white'}/> </Link>
    </div>
            
<div id="content-cad">
    <header>
        <h1>Cadastre-se</h1>
    </header>    
            <div id="progress">
               <span type="div"><FaUserAlt color={color_icon_progress} size={"14px"} /></span><div className="barrel"><div id="barrel1"></div> </div>
               <span type="div"><FaUserAstronaut color={color_icon_progress} size={"14px"} /></span><div className="barrel"><div id="barrel2"></div> </div>
               <span type="div"><FaLock color={color_icon_progress} size={"14px"} /></span><div className="barrel"><div id="barrel3"></div> </div>
               <span type="div"><FaCheck color={color_icon_progress} size={"14px"} /></span><div className="barrel"><div id="barrel4"></div></div>
               <span type="div"><FaEnvelope color={color_icon_progress} size={"14px"} /></span><div className="barrel"><div id="barrel5"></div></div>
               <span type="div"><FaPhone color={color_icon_progress} size={"14px"} /></span>
              
            
           </div>
            <div id="inicio">
                <p>Esse é o sistema de Cadastro da empresa</p>
                <div class="text-box2" id="box1">
                    <button id="btn-close" onClick={() => Close("box1")} onMouseOver={() => setColor1("red")} onMouseLeave={() => setColor1("gray")}><FaTimes size={"18px"} color={color1}/></button>
                <p>Caso seja apenas um usuario,não obrigatorio o cadastro,basta clicar em 
                    "entrar como cliente",porem recomendamos para que vc se mantenha atualizado</p>
                    </div>
                <div class="text-box2" id="box2">
                    <button id="btn-close" onClick={() => Close("box2")} onMouseOver={() => setColor2("red")} onMouseLeave={() => setColor2("gray")}><FaTimes size={"18px"} color={color2}/></button>
                    <p>Recomendamos que use o celular na orientação horizontal para uma melhor esperiência.</p>
                </div>
                    <button class="btn-main" id="btn-start" onClick={() => {Controll(++number,"next")}}>Começar</button>
            </div>
        
            <div id="form-conteiner">
            <form>
 
            <div class="conteiner-state" id="conteiner-name">
            <h3>Insira seu nome</h3>
            <div class="input-conteiner"><FaUserAlt class="icons" color={"black"} size={18}/><input class="input-text" id="name" type="text" 
                onChange={e => {
                    setName(e.target.value);   
                    document.getElementById("name").style.border = "solid 2px rgb(102, 97, 97)";    
                    document.getElementById("mensagem1").style.display = "none"}
                }
               
                
                placeholder="Nome" /><br/></div>
                
                </div>
            <div class="conteiner-state" id="conteiner-user">
                <h3>Insira seu username</h3>
         
                <div class="input-conteiner">
                    <FaUserAstronaut class="icons"color={"black"} size={18}/>
                    <input class="input-text" id="username" type="text" onChange={e => {setUsername(e.target.value); document.getElementById("mensagem1").style.display = "none";document.getElementById("mensagem3").style.display = "none"}} placeholder="Username"/><br/>
                </div>
            </div>
            <div class="conteiner-state" id="conteiner-passwd">
                <h3>Insira sua Senha</h3>
                <div class="input-conteiner">
                    <FaLock class="icons" color={"black"} size={18}/>
                    <input class="input-text" id="passwd" type="password" onChange={e => setPasswd(e.target.value)} placeholder="Senha"/><br/>
                </div>
            </div>
            <div class="conteiner-state" id="conteiner-confirm">
                <h3>Confirme sua Senha</h3>
                <div class="input-conteiner">
                    <FaCheck class="icons" color={"black"} size={18}/>
                    <input class="input-text" id="passwd-confirm" maxlength={passwd.length} type="password" onChange={e => {setConfirm(e.target.value);ConfirmVerify();document.getElementById('mensagem2').style.display = 'none'}} placeholder="Confirmar Senha"/><br/>
                </div>
            </div>
            <div class="conteiner-state" id="conteiner-mail">
                <h3>Insira seu e-mail</h3>
                <div class="input-conteiner">
                    <FaEnvelope class="icons" color={"black"} size={18}/>
                    <input class="input-text" id="email" type="email" maxlenght={passwd.length} onChange={e => setEmail(e.target.value)} placeholder="Email"/><br/>
                </div>
            </div>
            <div class="conteiner-state" id="conteiner-phone">
                <h3>Insira seu Telefone</h3>
                <div class="input-conteiner">
                    <FaPhone class="icons" color={"black"} size={18}/>
                    <NumberFormat id="phone" class="input-text" format="+55 (##) 9 ####-####" allowEmptyFormatting mask="_" onChange={e => setPhone(e.target.value)} placeholder="Telefone"/><br/>
                </div>
            </div>
            <div class="conteiner-state" id="conteiner-end">
                <h1>Cadastro Concluído</h1>
                <h3>Nome: {name}</h3><br/>
                <h3>Username: {username}</h3><br/>
                <h3>Email: {email}</h3><br/>
                <h3>Phone: {phone}</h3><br/>
                <div id="btn-login">
                    <button class="btn-main" id="btn-confirm-cad" type="button" onClick={e => handleCad(e)}>Confirmar Dados <div id="load"></div></button>
                </div>
            </div>
            <div id="mensagens-conteiner">
                <div class='msg' id="mensagem1"><FaExclamationTriangle color={"black"} size={"13px"}/>Campo Requerido </div>
                <div class='msg' id="mensagem2"><FaExclamationTriangle color={"black"} size={"13px"}/>Senhas não se condizem</div>
                <div class='msg' id="mensagem3"><FaExclamationTriangle color={"black"} size={"13px"}/>Username existente</div>
            </div>
            <div id="conteiner-options">
                <button type="button" id="btn-back" onClick={() => {Controll(--number,"back");setNumber(number)}}>Voltar</button>
                <button id="btn-next" onClick={() => {Controll(++number,"next");setNumber(number)}} type='button'>Proximo</button>

            </div>
        </form>
            
    </div>
</div>
            
</div>
    )
    
  
}

export default Cadastro