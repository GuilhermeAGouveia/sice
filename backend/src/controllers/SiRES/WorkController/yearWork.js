const conn_mesa_temp = require("../../../database/SiRES/mesa_temp/connection")
const conn_items = require("../../../database/SiRES/items/connection")
const conn_estatisticas = require("../../../database/SiRES/estatisca/connection")
const conn_year = require("../../../database/SiRES/estatisca/databases/year/connection")




class YearWork{
    
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
                return await conn_estatisticas('year').select()
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
        this.year_estatisticas = await this.coneccoes.year_estatisticas()
        this.year_number = await this.year_estatisticas.length        
    }
    
  
    getToday(){
        
        //this.year_estatisticas.length <= 0?this.moth_estatisticas.length + 1:this.moth_estatisticas.length
        
       
      
        const today = this.date.getFullYear()
        return today
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
    async updateValueYearForEstatisticas(){

        var value_update = this.year_estatisticas[this.year_estatisticas.length - 1]['value'] + this.value_total_mesa()
        var pessoas_update = this.year_estatisticas[this.year_estatisticas.length - 1]['n_pessoas'] + this.n_pessoas
        var mesas_update = this.year_estatisticas[this.year_estatisticas.length - 1]['n_mesas'] + 1
        await conn_estatisticas('year')
        .update('value',value_update)
        .update('n_pessoas',pessoas_update)
        .update('n_mesas', mesas_update)
        .where('year_number',this.year_number)
                
                    
    }
    async updateTableForYear(){
        var teste = 0
        var year_number_table = await conn_year('year' +  this.year_number).select()
        for (let i1 = 0;this.items_mesa.length > i1; i1++){
            teste = 0
  
            var {id,name,quant} =  this.items_mesa[i1]
    
            var value = this.value_total_item(id,quant)
       
            for (let i2 = 0;year_number_table.length  > i2;i2++){
                if ( year_number_table[i2]['id'] === id) {
                    var quant_update = parseFloat(year_number_table[i2]['quant']) + quant
                    var value_update = parseFloat(year_number_table[i2]['value']) + value                            
                
                    await conn_year('year' +  this.year_number )
                    .update('value',value_update)
                    .update('quant',quant_update)
                    .where('id',id)
                    teste = 1
                    break;
                }            
            }
            if (teste === 0){
                await conn_year('year' + this.year_number).insert({
                                            id,
                                            'item':name,
                                            quant,
                                            value
                                            })
            }
        }
                
    }
    async main(){
        console.log('[YearWork] executando...')
        await this.loadConn()
      
        try {
            var year_verify = this.year_estatisticas[this.year_estatisticas.length - 1]['year_speciefic']
        } catch (error) {
            var year_verify = 10
        }
    
       
        var today = this.getToday()    

        if (parseInt(today) === parseInt(year_verify)){
            this.updateValueYearForEstatisticas()
            this.updateTableForYear()
        } else {
            this.year_number += 1
            await conn_estatisticas('year').insert({
                'year_number':this.year_number,
                'year_speciefic':today,            
                'value':this.value_total_mesa(),
                'n_pessoas':this.n_pessoas,
                'n_mesas': 1
            })
            try {
                await conn_year.schema.createTable('year' + this.year_number,(table) => {
                table.decimal('id').primary().notNullable();
                table.string('item').notNullable();
                table.float('quant',2);
                table.float('value',2);

                })
            } catch (error) {
                
            }
            this.updateTableForYear()
        }

    }

}

module.exports = YearWork