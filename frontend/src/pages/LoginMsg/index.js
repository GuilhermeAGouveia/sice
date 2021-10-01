import React from "react"
import "./styles.css"
import {useHistory} from "react-router-dom"

export default function LoginMsg(){
    var history = useHistory()
    function opLogin(){
        
        localStorage.setItem('path_return',window.location.pathname)
        history.push('/')
        
    }
    function opExit(){
        history.push('/home')
    }
    return (
        <div id="msg-login-root">
        <div class="msg-login">




        <div id="title-msg-login">
            Aviso
        </div>
        <div class="text-msg-login">
          Para acessar essas ferramentas é necessário uma conta com permissões de administrador, caso tenha uma ja cadastrada no sistema, volte para tela de login, e entre com ela, caso não tenha uma, a única maneira de conseguir é pedindo para que um administrador do sistema, ele avaliará se vc é adequo ao perfil necessário:
          <ul>
            <li>Funcionário do Restaurante;</li>
            <li>Manutencionista do <b>Sistema</b>;</li>
          </ul>
        </div>

        <div class="options-msg-login">
          <button onClick={() => opLogin()} type="button" name="button">Login</button>
          <button type="button" name="button">Solicitar conta de Administrador</button>
          <button onClick={() => opExit()} type="button" name="button">Voltar</button>
        </div>

    </div>
    </div>
    )
}