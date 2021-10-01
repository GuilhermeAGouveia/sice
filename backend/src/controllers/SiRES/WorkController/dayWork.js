const conn_mesa_temp = require("../../../database/SiRES/mesa_temp/connection")
const conn_items = require("../../../database/SiRES/items/connection")
const conn_estatisticas = require("../../../database/SiRES/estatisca/connection")
const conn_day = require("../../../database/SiRES/estatisca/databases/day/connection")




class DayWork{
    
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
                return await conn_estatisticas('day').select()
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
        this.day_estatisticas = await this.coneccoes.day_estatisticas()
        this.day_number = await this.day_estatisticas.length        
    }

  
    getToday(){
        
        //this.day_estatisticas.length <= 0?this.day_estatisticas.length + 1:this.day_estatisticas.length
        
        var day_today =  this.date.getDate() < 10?'0' + this.date.getDate():this.date.getDate()
        var moth_today =  (this.date.getMonth() + 1)<10?'0'+(this.date.getMonth() + 1):(this.date.getMonth() + 1)
        const today = day_today + '/' + moth_today + '/' + this.date.getFullYear()
        return today
    }
    getDateString(){

      
        
        var mouth_dic = ["janeiro","fevereiro","março","abril","maio","junho","julho","agosto","setembro","outubro","novembro","dezembro"]
        var day_dic = ["domingo","segunda","terça","quarta","quinta","sexta","sabádo"]

        var year = this.date.getFullYear()
        var day = this.date.getDate()
        var day_week = this.date.getDay()
        var mouth = this.date.getMonth()
        var day_st = day_week === 0 || day_week === 6?day_dic[day_week]:day_dic[day_week] + "-feira"
        var string_date = day + " de " + mouth_dic[mouth] + " de " + year + "," + day_st

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
    async updateValueDayForEstatisticas(){

        var value_update = this.day_estatisticas[this.day_estatisticas.length - 1]['value'] + this.value_total_mesa()
        var pessoas_update = this.day_estatisticas[this.day_estatisticas.length - 1]['n_pessoas'] + this.n_pessoas
        var mesas_update = this.day_estatisticas[this.day_estatisticas.length - 1]['n_mesas'] + 1
        await conn_estatisticas('day')
        .update('value',value_update)
        .update('n_pessoas',pessoas_update)
        .update('n_mesas', mesas_update)
        .where('day_number',this.day_number)
                
                    
    }
    async updateTableForDay(){
        var teste = 0
        var day_number_table = await conn_day('day' +  this.day_number).select()
        for (let i1 = 0;this.items_mesa.length > i1; i1++){
            teste = 0
  
            var {id,name,quant} =  this.items_mesa[i1]
 
            var value = this.value_total_item(id,quant)

            for (let i2 = 0;day_number_table.length  > i2;i2++){
                if ( day_number_table[i2]['id'] === id) {
                    var quant_update = parseFloat(day_number_table[i2]['quant']) + quant
                    var value_update = parseFloat(day_number_table[i2]['value']) + value                            
                
                    await conn_day('day' +  this.day_number )
                    .update('value',value_update)
                    .update('quant',quant_update)
                    .where('id',id)
                    teste = 1
                    break;
                }            
            }
            if (teste === 0){
                await conn_day('day' + this.day_number).insert({
                                            id,
                                            'item':name,
                                            quant,
                                            value
                                            })
            }
        }
                
    }
    async main(){
        console.log('[DayWork] executando...')
        await this.loadConn()
      
        try {
            var day_verify = this.day_estatisticas[this.day_estatisticas.length - 1]['day_speciefic']
        } catch (error) {
            var day_verify = 10
        }
    
       
        var today = this.getToday()    

        
        if (today === day_verify){
            this.updateValueDayForEstatisticas()
            this.updateTableForDay()
        } else {
            this.day_number += 1
            await conn_estatisticas('day').insert({
                'day_number':this.day_number,
                'day_speciefic':today,
                'day_string':this.getDateString(),
                'value':this.value_total_mesa(),
                'n_pessoas':this.n_pessoas,
                'n_mesas': 1
            })
            try {
                await conn_day.schema.createTable('day' + this.day_number,(table) => {
                table.decimal('id').primary().notNullable();
                table.string('item').notNullable();
                table.float('quant',2);
                table.float('value',2);

                })
            } catch (error) {
                
            }
            this.updateTableForDay()
        }

    }

}

module.exports = DayWork