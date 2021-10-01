const conn_mesa_temp = require("../../database/SiRES/mesa_temp/connection")
const conn_pedidos_temp = require("../../database/SiRES/pedidos_temp/connection")
const conn_items = require("../../database/SiRES/items/connection")

module.exports = {
    async inputPedidos(request,response){
        console.time()
        
        //trabalhando com o banco mesa_temp
        
        //coletando informações iniciais
            
                var items = request.body
                console.log(items)
                var mesa_number = request["body"][items.length -1]["mesa_number"]
                var n_pessoas = request["body"][items.length -1]["n_pessoas"]
                if (mesa_number === undefined || mesa_number === '') {
                    return response.status(400).send('Numero de mesa necessário para operação!')
                }
                mesa_number = parseInt(mesa_number)
                n_pessoas = parseInt(n_pessoas)
                await conn_mesa_temp("mesas_em_uso").update("n_pessoas",n_pessoas).where('number',mesa_number)
                 
                //realizando teste a cada index do vetor items,estes,contem um dicionario com id,name,quant
                for (let index = 0; index < items.length - 1; index++) {
                try {
                   
                        var {id,name,quant} = request['body'][index]
                        
                    
                        var table = conn_mesa_temp("mesa" + mesa_number)
                     
                        var select = await table.select("*")
                
                 
                        var teste = 0
                    
                        for (let i = 0;i < select.length;i++){
                        
                            if (select[i]["id"] === id){
                                quant += select[i]["quant"]
                                await table.update('quant',quant).where("id",id)
                               
                           
                            
                                teste = 1
                                break
                            }   
                        }
                        if (teste === 0){
                       
                            await table.insert({
                            id,
                            name,
                            quant
                            })
                        }
                    }
                //catch só será executado caso a tabela nao exista,inserindo após a criação da tabela, os dados do index atual
                 catch (error) {
                   
                    await conn_mesa_temp.schema.createTable("mesa" + mesa_number,(table) =>{
        
                        table.decimal("id").primary();
                        table.string("name").notNullable();
                        table.float("quant",2);
                    })
                   
                        var {id,name,quant} = request['body'][index]
                        
                  
                        await conn_mesa_temp("mesa" + mesa_number).insert({
                            id,
                            name,
                            quant
                        })
                        await conn_mesa_temp("mesas_em_uso").insert({
                           "number":mesa_number,
                           "n_pessoas":n_pessoas
                        })
        
            
                    
                    
                }
            
                //pedidos_temp
                
                    //realizando teste a cada index do vetor items,estes,contem um dicionario com id,name e quant ,porem so usaremos name e quant,que é o que interressa ao cozinheiro
                try {
                        //coletando informações iniciais
                        var {name,quant} = request['body'][index]
                        
                    
                        var table = conn_pedidos_temp("mesa" + mesa_number)
                       
                        var select = await table.select("*")
                
                 
                        var teste = 0
                    
                        for (let i = 0;i < select.length;i++){
                        
                            if (select[i]["name"] === name){
                                quant += select[i]["quant"]
                                await table.update('quant',quant).where("name",name)
                                
                             
                             
                                teste = 1
                                break
                            }   
                        }
                        if (teste === 0){
                         
                            await table.insert({
                        
                            name,
                            quant
                            })
                        }
                    }
                //esse catch so será executado caso o pedido da mesa não exista
                 catch (error) {
                   
                    await conn_pedidos_temp.schema.createTable("mesa" + mesa_number,(table) =>{
        
                        
                        table.string("name").notNullable();
                        table.float("quant",2);
                    })
                 
                        var {name,quant} = request['body'][index]
                        
                  
                        await conn_pedidos_temp("mesa" + mesa_number).insert({
                          
                            name,
                            quant
                        })
                        await conn_pedidos_temp("mesa_pendente").insert({
                            "number":mesa_number
                         })
        
                       
            
                    
                    
                
            }
        }
              /*var response_data = await conn_mesa_temp.schema.dropTable("mesa" + mesa_number)*/
                var response_data = await conn_mesa_temp("mesa" + mesa_number).select("*")
               /* var response_data = await conn_mesa_temp("mesas_em_uso").select("*")*/
                console.timeEnd()
                return response.json(response_data)
                
    },
}