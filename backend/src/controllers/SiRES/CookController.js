const conn_mesa_temp = require("../../database/SiRES/mesa_temp/connection")
const conn_pedidos_temp = require("../../database/SiRES/pedidos_temp/connection")


module.exports = {
    async outputPedidosConzinheiro(request,response){
        var pedidos = []
        var mesas = await conn_pedidos_temp("mesa_pendente").select()
        
        console.log(mesas)
        for (let index = 0; index < mesas.length; index++) {
            var number = mesas[index]['number']
            try {
                var n_pessoas = await conn_mesa_temp("mesas_em_uso").select('n_pessoas').where('number',number)
                n_pessoas = n_pessoas[0]['n_pessoas']
            } catch (error) {
                n_pessoas = 0
            }
            
            
            var pedidos_mesa = await conn_pedidos_temp("mesa"+number).select();
            pedidos_mesa.push({"mesa_number":number,n_pessoas})
           
          
            pedidos.push({pedidos_mesa})
            
        }
        
        return response.json(pedidos)
    },
    async donePedido(request,response){
        var mesa_number = request.body.mesa_number
        var deleteTable = await conn_pedidos_temp.schema.dropTable("mesa"+mesa_number)
        var exclud = await conn_pedidos_temp("mesa_pendente").delete().where("number",mesa_number)
        return response.send("feito")
    }
}