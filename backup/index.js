import React from "react"
import {FaUserAlt,FaUserAstronaut,FaEnvelope,FaCheck,FaPhone,FaLock} from "react-icons/fa"
import "./styles.css"
function Cadastro(){
    var number = 0
    function Controll(estado,opcao){
        switch (estado) {
            case 1:
                var estado1 = document.getElementById("inicio")
                var estado2 = document.getElementById("conteiner-name")
                if (opcao === "next"){
                    estado1.style.display = "none"
                    estado2.style.display = "block"
                } else {
                    estado1.style.display = "block"
                    estado2.style.display = "none"
                }
             
                
                break;
            case 2:
                var estado1 = document.getElementById("conteiner-name")
                var estado2 = document.getElementById("conteiner-username")
                if (opcao === "next"){
                    estado1.style.display = "none"
                    estado2.style.display = "block"
                } else {
                    estado1.style.display = "block"
                    estado2.style.display = "none"
                }

                
                break;    
            case 3:
                var estado1 = document.getElementById("conteiner-username")
                var estado2 = document.getElementById("conteiner-passwd")
                if (opcao === "next"){
                    estado1.style.display = "none"
                    estado2.style.display = "block"
                } else {
                    estado1.style.display = "block"
                    estado2.style.display = "none"
                }

                
                break;
        
            default:

                var estado1 = document.getElementById("conteiner-passwd").style.display = "none"
                var estado2 = document.getElementById("conteiner-options").style.display = "none"
                var estado3 = document.getElementById("conteiner-end").style.display = "block"

                
                break;
        }
    }
    return(
        <div id="cad-root">
            
            
            <div id="content-cad">
            <header>
            <h1>Cadastre-se</h1>
            </header>    
            <div id="inicio">
                <p>Esse é o sistema de Cadastro da empresa</p>
                <p>Caso seja apenas um usuario,não obrigatorio o cadastro,basta clicar em 
                    "entrar como cliente",porem recomendamos para que vc se mantenha atualizado</p>
            </div>
        
            
            <form onSubmit=''>
           
            <div class="btn-icons" id="conteiner-name">
            <h3>Insira seu nome</h3>
                <button><FaUserAlt id="icons" color={"black"} size={18}/> </button><input class="input-text" id="name" type="text" placeholder="Nome" /><br/>
                </div>
            <div class="btn-icons" id="conteiner-user">
            <h3>Insira seu username</h3>
                <button><FaUserAstronaut id="icons"color={"black"} size={18}/></button><input class="input-text" id="username" type="text" placeholder="Username"/><br/>
                </div>
            <div class="btn-icons" id="conteiner-passwd">
            <h3>Insira sua Senha</h3>
                <button><FaLock id="icons" color={"black"} size={18}/></button><input class="input-text" id="passwd" type="password" placeholder="Senha"/><br/>
                </div>
            <div class="btn-icons" id="conteiner-confirm">
            <h3>Confirme sua Senha</h3>
                <button><FaCheck id="icons" color={"black"} size={18}/></button><input class="input-text" id="passwd-confirm" type="password" placeholder="Confirmar Senha"/><br/>
                </div>
            <div class="btn-icons" id="conteiner-mail">
            <h3>Insira seu e-mail</h3>
                <button><FaEnvelope id="icons" color={"black"} size={18}/></button><input class="input-text" id="email" type="email" placeholder="Email"/><br/>
                </div>
            <div class="btn-icons" id="conteiner-phone">
            <h3>Insira seu Telefone</h3>
                <button><FaPhone id="icons" color={"black"} size={18}/></button><input class="input-text" id="nome" type="tel" placeholder="Telefone"/><br/>
                </div>
            <div class="btn-icons" id="conteiner-end">
            <h1>Cadastro Concluído</h1>
                <button class="btn-submit" type="submit">Login </button>
                </div>
                <div id="conteiner-options">
                <button id="btn-start" onclick={Controll(number--,"back")} type="button">Voltar</button>
                <button id="btn-start" onclick={Controll(number++,"next")} type="button">Proximo</button>

                </div>
            </form>

            
            </div>
        </div>
    )
}

export default Cadastro