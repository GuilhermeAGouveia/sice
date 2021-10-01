const conn = require("../../database/SiCE/connection");




module.exports = {
    async createLogin(request, response){
        console.log(request.body)
        const { name, username, passwd, email, phone } = request.body;
       
        
      
        try {
            var usernameverify = await conn("users").select("username").where("username",username)
            console.log(usernameverify[0]["username"])
            return response.send("user_err")
            
        } catch (error) {
            
        
       
        
        await conn('users').insert({
            name,
            passwd,
            username,
            email,
            phone
        })
        return response.send("Dados inseridos")
    }

    },
    async userLogin(request,response) {
        var username = request.body.username
        var passwd = request.body.passwd
        var locate_error = ''
        try {
            locate_error = "connect"
            await conn('users')
            locate_error = 'user'
            var query = await conn("users").select().where("username",username)
            console.log(query[0]['username'])
            locate_error = 'pass'
            var query = await conn("users").select().where("passwd",passwd).where("username",username)
            console.log(query[0]['username'])
            return response.send('success')
        } catch (error) {
            
            return response.json({'error':locate_error})
        }
    },
    async validateUsername(request,response){
        var username = request.body.username
       

        try {
            var usernameverify = await conn("users").select("*").where("username",username)
            console.log(usernameverify)
            console.log(usernameverify[0]['username'])
            return response.send(false)
            
        } catch (error) {
            return response.send(true)
        }
    },
    async validateSession(request,response){
        var username = request.body.username
        var passwd = request.body.passwd
      
        try {   
            await conn('users')
            var query = await conn("users").select().where("username",username)
            console.log(query[0]['username'])  
            var query = await conn("users").select().where("passwd",passwd).where("username",username)
            console.log(query[0]['username'])
            return response.send(true)
        } catch (error) {
            
            return response.send(false)
        }
    }
}