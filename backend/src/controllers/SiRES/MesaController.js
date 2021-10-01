const conn_mesa_temp = require("../../database/SiRES/mesa_temp/connection")
const conn_items = require("../../database/SiRES/items/connection")
const DayWork = require("./WorkController/dayWork")
const MothWork = require("./WorkController/mothWork")
const YearWork = require("./WorkController/yearWork")
const conn_estatisticas = require("../../database/SiRES/estatisca/connection")

module.exports = {
    async doneMesa(request,response){
        console.log('doneMesa')
        var mesa_number = request.body.mesa_number
        mesa_number = parseInt(mesa_number)
        const validate = request.body.validate
        if (validate === false){
            var deleteTable = await conn_mesa_temp.schema.dropTable("mesa"+mesa_number)
            var exclud = await conn_mesa_temp("mesas_em_uso").delete().where("number",mesa_number)
            return response.send("feito")
        } 
        console.time('[daywork]')
        const dayWork = await new DayWork(mesa_number).main()
        console.timeEnd('[daywork]')
        console.time('[mothwork]')
        const mothWork = await new MothWork(mesa_number).main()
        console.timeEnd('[mothwork]')
        console.time('[yearwork]')
        const yearWork = await new YearWork(mesa_number).main()
        console.timeEnd('[yearwork]')
       
        
       
        
      
        var deleteTable = await conn_mesa_temp.schema.dropTable("mesa"+mesa_number)
        var exclud = await conn_mesa_temp("mesas_em_uso").delete().where("number",mesa_number)
        const day_estatisticas_return = await conn_estatisticas('day').select()
        return response.json(day_estatisticas_return)
    
    },
    async listMesa(request,response){
        var mesa_number = request.body.mesa_number
        var items_return = []
        var total = 0
        try {
            
      
            var items_mesa = await conn_mesa_temp("mesa"+mesa_number).select("*")
            var items = await conn_items("items").select("id","value")
            for (let i = 0;items_mesa.length > i;i++){
                var quant = items_mesa[i]["quant"]
                var name = items_mesa[i]["name"]
                var id = items_mesa[i]["id"]
                for (let i2 = 0;items.length > i2;i2++){
                    if (id === items[i2]["id"]){
                        var total_item = quant * items[i2]["value"]
                        total += total_item
                        items_return.push({"id":id,"name":name,"quant":quant,"total_item":total_item})
                        
                        
                        break;
                    }
                }
            }
            items_return.push({"mesa_number":mesa_number,"total":total})
        
            
            return response.json(items_return)
        } catch (error) {
            if (error.errno === 1){
                return response.status(400).send("Mesa inexistente!")
            } else {
                return response.status(404).send("ERRO DESCONHECIDO")
            }
        
        }
        
    },
    async existMesa(request,response){
        console.log('exist')
        var mesa_number = request.body.mesa_number
        mesa_number = parseInt(mesa_number)
        var n_pessoas = await conn_mesa_temp('mesas_em_uso').select('n_pessoas').where('number',mesa_number)
        try {
            console.log(n_pessoas[0]['n_pessoas'])
            return response.json(n_pessoas)
        } catch (error) {
            return response.send(false)
        }
    },
    async outputMesaRight(request,response){
        var pedidos = []
        var total_mesa = 0
        var total_absoluto = 0
        var mesas = await conn_mesa_temp("mesas_em_uso").select()
        var items = await conn_items("items").select()
        console.log(mesas)
        for (let index = 0; index < mesas.length; index++) {
            total_mesa = 0
            var number = mesas[index]['number']
            var n_pessoas = mesas[index]['n_pessoas']
           
            var mesa_conta = await conn_mesa_temp("mesa"+number).select();
            for (let index2 = 0; index2 < mesa_conta.length; index2++) {
                for (let index3 = 0; index3 < items.length; index3++) {
                    if (mesa_conta[index2]["id"] === items[index3]["id"]){
                        var quant = mesa_conta[index2]["quant"]
                        var total_item = items[index3]["value"] * quant
                       
                        break

                    }
                    
                }
             
                total_mesa += total_item
            }
            
            pedidos.push({"mesa_number":number,n_pessoas,"total_mesa":total_mesa})
            total_absoluto += total_mesa
            
           
          
            
            
        }
        pedidos.push({total_absoluto})
        
        return response.json(pedidos)
    },
    async listItems(request,response){
     
        var list = await conn_items("items").select().where('id','<',1000)
        return response.json(list)
    },
    

}