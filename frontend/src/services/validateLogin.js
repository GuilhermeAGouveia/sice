import React from "react"
import api from "./api"
import LoginMsg from "../pages/LoginMsg"
async function validateLogin(){
   
        var login = sessionStorage.getItem('login_state')
        localStorage.clear()
        
        if (login === undefined || login === null || login === 'false'){
              localStorage.setItem('path_return',window.location.pathname)
              return <LoginMsg></LoginMsg>
              document.getElementById('login').style.display = 'flex'
              document.getElementById('logoff').style.display = 'none'
        } else {
              var username = sessionStorage.getItem('username')
              var passwd = sessionStorage.getItem('passwd')
              var verify = await api.post('/validateSession',{username,passwd})
            
              if (verify.data === true){
              document.getElementById('login').style.display = 'none'
              document.getElementById('logoff').style.display = 'flex'
              } else {
                localStorage.setItem('path_return',window.location.pathname)
                return <LoginMsg></LoginMsg> 
              
               
              }
          }
    
}

export default validateLogin