import React from "react"
import {FaUserAlt,FaUserAstronaut,FaEnvelope,FaCheck,FaPhone,FaLock} from "react-icons/fa"
import "./styles.css"
function Cadastro(){
    return(
        <div id="cad-root">
            
            
            <div id="content-cad">
            <section>
            <h1>Cadastre-se</h1>
                <p>Esse é o sistema de Cadastro da empresa</p>
                
            </section>    
            
            <form onSubmit=''>
            
                <button id="btn-icons"><FaUserAlt id="icons" color={"black"} size={18}/> </button><input class="input-text" id="name" type="text" placeholder="Nome" /><br/>
                <button id="btn-icons"><FaUserAstronaut id="icons"color={"black"} size={18}/></button><input class="input-text" id="username" type="text" placeholder="Username"/><br/>
                <button id="btn-icons"><FaLock id="icons" color={"black"} size={18}/></button><input class="input-text" id="passwd" type="password" placeholder="Senha"/><br/>
                <button id="btn-icons"><FaCheck id="icons" color={"black"} size={18}/></button><input class="input-text" id="passwd-confirm" type="password" placeholder="Confirmar Senha"/><br/>
                <button id="btn-icons"><FaEnvelope id="icons" color={"black"} size={18}/></button><input class="input-text" id="email" type="email" placeholder="Email"/><br/>
                <button id="btn-icons"><FaPhone id="icons" color={"black"} size={18}/></button><input class="input-text" id="nome" type="tel" placeholder="Telefone"/><br/>
                <button id="btn-submit" type="submit">Cadastrar</button>
            </form>

            
            </div>
        </div>
    )
}

export default Cadastro