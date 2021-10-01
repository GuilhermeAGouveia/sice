const conn = require("../../database/SiCE/connection")
const conn2 = require("../../database/SiRES/items/connection")

module.exports = {
    async dropCardapio(request,response){

    },
    async updateCardapio(request,response){
     

        console.log(request.body)
        var front = request.body.items_backend.front
        var verse = request.body.items_backend.verse
        console.log(front)
        console.log(verse)
      
        var b = 0
        var check = []
        await conn("cardapio_front").delete()
        await conn("cardapio_verse").delete()
        await conn2("items").delete()
       
        try {
            
       
           try {
            for (let index = 0; b < front.length; index++) {
                console.log("cegueo")
                for (let index2 = 0; index2 < front.length; index2++) {                           
                    if (index === front[index2]["position"]){
                        
                        await conn("cardapio_front").insert({
                            "position":front[index2]["position"],
                            "name":front[index2]["name"],
                            "price":front[index2]["price"]
                        })
                        
                        await conn2("items").insert({
                            "id":front[index2]["position"],
                            "name":front[index2]["name"],
                            "value":front[index2]["price"]
                        })
                        console.log(front[index2]["position"])
                        console.log(verse)
                        b += 1
                        check.push({
                            "position":front[index2]["position"],
                            "name":front[index2]["name"],
                            "price":front[index2]["price"]
                        })
            
                
                    } else {
                        continue
                    }
                    
                }
        
            
            }

            console.log(verse.length)
            var b = 0
            for (let index = 0; b < verse.length; index++) {
                console.log("verse-s")
                for (let index2 = 0; index2 < verse.length; index2++) {                           
                    if (index === verse[index2]["position"]){
                        
                        await conn("cardapio_verse").insert({
                            "position":verse[index2]["position"],
                            "name":verse[index2]["name"],
                            "price":verse[index2]["price"]
                        })
                        
                        await conn2("items").insert({
                            "id":verse[index2]["position"] + 1000,
                            "name":verse[index2]["name"],
                            "value":verse[index2]["price"]
                        })
                        console.log(verse[index2]["position"])
                        b += 1
                        check.push({
                            "position":verse[index2]["position"],
                            "name":verse[index2]["name"],
                            "price":verse[index2]["price"]
                        })
            
                
                    } else {
                  
                    }
                }
        
            
            }
        } catch {
        
            console.log(verse.length)
            b = 0
            for (let index = 0; b < verse.length; index++) {
                console.log("verse-c")
                for (let index2 = 0; index2 < verse.length; index2++) {                           
                    if (index === verse[index2]["position"]){
                        
                        await conn("cardapio_verse").insert({
                            "position":verse[index2]["position"],
                            "name":verse[index2]["name"],
                            "price":verse[index2]["price"]
                        })
                        
                        await conn2("items").insert({
                            "id":verse[index2]["position"] + 1000,
                            "name":verse[index2]["name"],
                            "value":verse[index2]["price"]
                        })
                        console.log(verse[index2]["position"])
                        b += 1
                        check.push({
                            "position":verse[index2]["position"],
                            "name":verse[index2]["name"],
                            "price":verse[index2]["price"]
                        })
            
                
                    } else {
                        continue
                    }
                }
        
            
            }
        }

        return response.json(check)
    } catch (error) {
        return response.status(200).send(error)
    }
       
    },
    async listCardapio(require,response){
       
        var front = await conn("cardapio_front").select("*")
        var verse = await conn("cardapio_verse").select("*")
        var list = {
            "front":front,
            "verse":verse
        }
        return response.json(list)

    },
    async insertCardapio(require,response){
      
        var itens = require.body.itens
        var b = 0
        console.log(itens)

        try {
            
       
    
            for (let index = 0; b < itens.length; index++) {
             
                for (let index2 = 0; index2 < itens.length; index2++) {                           
                    if (index === itens[index2]["position"]){
                        await conn("cardapio").insert({
                            "position":itens[index2]["position"],
                            "name":itens[index2]["name"],
                            "price":itens[index2]["price"]
                        })
                        console.log(itens[index2]["position"])
                        b += 1
            
                
                    } else {
                        continue
                    }
                }
        
            
            }
        return response.send("inseridos")
    } catch (error) {
        return response.status(400).send(error)
    }
       
        

    },
    async saveCardapioTemp(request,response){
        await conn("cardapioTemp").delete()
        var itens = require.body.itens
        var b = 0
        try {
            
       
    
            for (let index = 0; b < itens.length; index++) {
             
                for (let index2 = 0; index2 < itens.length; index2++) {                           
                    if (index === itens[index2]["position"]){
                        await conn("cardapioTemp").insert({
                            "position":itens[index2]["position"],
                            "name":itens[index2]["name"],
                            "price":itens[index2]["price"]
                        })
                        console.log(itens[index2]["position"])
                        b += 1
            
                
                    } else {
                        continue
                    }
                }
        
            
            }
        return response.send("inseridos")
    } catch (error) {
        return response.status(300).send(error)
    }
       
        

    },
    async deleteVerse(request,response){
        await conn('cardapio_verse').delete()
       var data = await conn('cardapio_verse').select()
       return response.json(data)

    
    }
  

}