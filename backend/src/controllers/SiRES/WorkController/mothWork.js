const conn_mesa_temp = require("../../../database/SiRES/mesa_temp/connection")
const conn_items = require("../../../database/SiRES/items/connection")
const conn_estatisticas = require("../../../database/SiRES/estatisca/connection")
const conn_moth = require("../../../database/SiRES/estatisca/databases/moth/connection")




class MothWork{
    
    constructor(mesa_number){
        this.coneccoes = {
            async items(){
                var items = await conn_items('items').select()
            
                return await conn_items('items').select()
            },
          
            async items_mesa(mesa_number){
      
                return await conn_mesa_temp('mesa'+ mesa_number).select()
            },
            async n_pessoas(mesa_number){
                return await conn_mesa_temp('mesas_em_uso').select('n_pessoas').where('number',mesa_number) 
            },
            async day_estatisticas(){
                return await conn_estatisticas('moth').select()
            }
        }
        this.mesa_number = mesa_number
        this.date = new Date()
      
        
        
       
    }
    async loadConn(){
        this.items = await this.coneccoes.items()        
        this.items_mesa = await this.coneccoes.items_mesa(this.mesa_number)      
        this.n_pessoas = await this.coneccoes.n_pessoas(this.mesa_number)   
        this.n_pessoas = parseInt(this.n_pessoas[0]['n_pessoas'])       
        this.moth_estatisticas = await this.coneccoes.moth_estatisticas()
        this.moth_number = await this.moth_estatisticas.length        
    }
   
    getToday(){
        
        //this.moth_estatisticas.length <= 0?this.moth_estatisticas.length + 1:this.moth_estatisticas.length
        
       
        var moth_today =  (this.date.getMonth() + 1)<10?'0'+(this.date.getMonth() + 1):(this.date.getMonth() + 1)
        const today = moth_today + '/' + this.date.getFullYear()
        return today
    }
    getDateString(){

      
        
        var mouth_dic = ["janeiro","fevereiro","março","abril","maio","junho","julho","agosto","setembro","outubro","novembro","dezembro"]
   

        var year = this.date.getFullYear()
    
        var mouth = this.date.getMonth()
        
        var string_date = mouth_dic[mouth] + " de " + year

        return string_date
    }
    value_total_mesa(){
        var total_mesa = 0

        for (let index2 = 0; index2 < this.items_mesa.length; index2++) {
            for (let index3 = 0; index3 < this.items.length; index3++) {
                if (this.items_mesa[index2]["id"] === this.items[index3]["id"]){
                    var quant = this.items_mesa[index2]["quant"]
                    var total_item = this.items[index3]["value"] * quant
        
                    break;
                }
            }
        
            total_mesa += total_item
        }
        return total_mesa
    }
    value_total_item(id,quant){        
        quant = parseFloat(quant)
        id = parseInt(id)
        for (let index3 = 0; index3 < this.items.length; index3++) {
            if (id === this.items[index3]["id"]){        
                var total_item = this.items[index3]["value"] * quant        
                break;
            }
            
        }
        return total_item
    }
    async updateValueMothForEstatisticas(){

        var value_update = this.moth_estatisticas[this.moth_estatisticas.length - 1]['value'] + this.value_total_mesa()
        var pessoas_update = this.moth_estatisticas[this.moth_estatisticas.length - 1]['n_pessoas'] + this.n_pessoas
        var mesas_update = this.moth_estatisticas[this.moth_estatisticas.length - 1]['n_mesas'] + 1
        await conn_estatisticas('moth')
        .update('value',value_update)
        .update('n_pessoas',pessoas_update)
        .update('n_mesas', mesas_update)
        .where('moth_number',this.moth_number)
                
                    
    }
    async updateTableForMoth(){
        var teste = 0
        var moth_number_table = await conn_moth('moth' +  this.moth_number).select()
        for (let i1 = 0;this.items_mesa.length > i1; i1++){
            teste = 0
   
            var {id,name,quant} =  this.items_mesa[i1]
 
            var value = this.value_total_item(id,quant)
   
            for (let i2 = 0;moth_number_table.length  > i2;i2++){
                if ( moth_number_table[i2]['id'] === id) {
                    var quant_update = parseFloat(moth_number_table[i2]['quant']) + quant
                    var value_update = parseFloat(moth_number_table[i2]['value']) + value                            
                
                    await conn_moth('moth' +  this.moth_number )
                    .update('value',value_update)
                    .update('quant',quant_update)
                    .where('id',id)
                    teste = 1
                    break;
                }            
            }
            if (teste === 0){
                await conn_moth('moth' + this.moth_number).insert({
                                            id,
                                            'item':name,
                                            quant,
                                            value
                                            })
            }
        }
                
    }
    async main(){
        console.log('[MothWork] executando...')
        await this.loadConn()
      
        try {
            var moth_verify = this.moth_estatisticas[this.moth_estatisticas.length - 1]['moth_speciefic']
        } catch (error) {
            var moth_verify = 10
        }
    
       
        var today = this.getToday()    
  
        if (today === moth_verify){
            this.updateValueMothForEstatisticas()
            this.updateTableForMoth()
        } else {
            this.moth_number += 1
            await conn_estatisticas('moth').insert({
                'moth_number':this.moth_number,
                'moth_speciefic':today,
                'moth_string':this.getDateString(),
                'value':this.value_total_mesa(),
                'n_pessoas':this.n_pessoas,
                'n_mesas': 1
            })
            try {
                await conn_moth.schema.createTable('moth' + this.moth_number,(table) => {
                table.decimal('id').primary().notNullable();
                table.string('item').notNullable();
                table.float('quant',2);
                table.float('value',2);

                })
            } catch (error) {
                
            }
            this.updateTableForMoth()
        }

    }

}

module.exports = MothWork