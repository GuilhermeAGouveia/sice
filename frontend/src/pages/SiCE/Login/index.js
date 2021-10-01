import React,{ useState, Component } from "react";
import { Link, useHistory } from "react-router-dom";
import "./styles.css"
import { FiEye,FiLock,FiUser,FiLogIn} from "react-icons/fi"
import alertify from "alertifyjs"
import "../../alertify.css"
import api from '../../../services/api'
import { useEffect } from "react/cjs/react.development";

function Login(){
  useEffect(() => sessionStorage.clear(),[])
  var test_passwd = 0

  const [username, setUsername] = useState('');
  
  const [passwd, setPasswd] = useState('');
  const history2 = useHistory();
  async function handleLogin(e){
    e.preventDefault()
    if (username.length === 0){
      
      return alertify.error('Usuário requerido para esta opção!')
    }
    var data = {
      username,
      passwd
    }
    await api.post('/',data).then(res => {
      console.log(res)
      if (res.data.error === undefined){
        sessionStorage.setItem('login_state',true)
        sessionStorage.setItem('username',username)
        sessionStorage.setItem('passwd',passwd)
        if (localStorage.getItem("path_return") === null || localStorage.getItem("path_return") === undefined){
        history2.push('/home')
        } else {
          history2.push(localStorage.getItem("path_return"))
        }

      } else {
        if (res.data.error === 'pass') {
          document.getElementById('input-passwd').focus()
          alertify.error('Senha Invalida')

        }
      }
    })
  
  }
    return (
<div className="login-root">
  <div id='background-login'></div>
  <div className="login-content">
    <div id="link" 
        onMouseOver={() => {
          var link = document.getElementById("link");
          link.style.borderRadius = "15px"
          link.style.width = "110px"
                                    
          }
        }
        onMouseLeave={() => {
          var link = document.getElementById("link");
          link.style.borderRadius = "20px"
          link.style.width = "30px"}}>
      <FiLogIn id='cadicon'color={'black'} size={18}/>
      <Link to="/cadastro" id="link_text">Cadastro</Link>
    </div>
    <form onSubmit={handleLogin}>
        <h1>Login</h1>
        <div class="input-login-conteiner" id="text-box-content">
          <FiUser class="icon-login" color={"black"} size={18}/>
          <input class="input-login" 
            onMouseOver={() => {
              var info_box = document.getElementById("box-user")
              info_box.style.opacity = "1";
              }
            } 
            onMouseLeave={() => {
              var info_box = document.getElementById("box-user")
              info_box.style.opacity = "0";
              }
            }
          
            type="text" maxLength="40" id='input-text' value={username} autoComplete="off" onChange={e => setUsername(e.target.value)}/>
          <p id="box-user" class="box-login-info">Insira seu nome de usuário</p>
        </div>
        <div class="input-login-conteiner"  id="passwd-content">
          <FiLock class="icon-login" color={"black"} size={18}/>
          <input class="input-login" 
            onMouseOver={() => {
              var info_box = document.getElementById("box-passwd")
              info_box.style.opacity = "1";
              }
            } 
            onMouseLeave={() => {
              var info_box = document.getElementById("box-passwd")
              info_box.style.opacity = "0";
              }
            }
            onFocus ={ () => {
              //var validation = await api.post('/validateUsername',{"username":username})
              console.log(username)
              api.post('/validateUsername',{"username":username}).then(res => {
                console.log(res)
                if (res.data === true) {
                  document.getElementById('input-text').focus()
                  alertify.error('Usuario inexistente')
                }
              })
              }
            }
            
            type="password" id='input-passwd' autoComplete="off" value={passwd} onChange={e => setPasswd(e.target.value)} />
          <div id="icon-eye-conteiner">
            <FiEye 
              onClick={() => {
                var input_passwd = document.getElementById("input-passwd");
                var btn_eye = document.getElementById("barrel");
                if (test_passwd === 0){
                  btn_eye.style.width = "0px";
                  input_passwd.type = "text" ;
                  test_passwd = 1;
                } else {
                  input_passwd.type = "password" ;
                  btn_eye.style.width = "18px";
                  test_passwd = 0;
                }                           
                }
              } 
              id="icon-eye" color={"black"} size={18}/>
            <div id="barrel"></div>
          </div>
          <p id="box-passwd" class="box-login-info">Insira sua senha</p>
        </div>
        <div id="conteiner-btn-submit">
        
          <button type="submit">Entrar</button>
          <button 
            onClick={() => {
              sessionStorage.setItem('login_state',false)
              if (username.length === 0){
                localStorage.setItem("username","Cliente RBV") 
                history2.push("/home");
              } else {
                localStorage.setItem("username", username) 
                history2.push("/home")
              }
              }
            }>Entrar como Cliente</button>
        </div>
    </form>
       
    
  </div>

</div>
)}

export default Login;