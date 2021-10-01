
const conn_estatisticas = require("../../database/SiRES/estatisca/connection")
class ReturnInfo{
    constructor(temp){
        this.connections = {
            'moth': require("../../database/SiRES/estatisca/databases/moth/connection"),
            'day': require("../../database/SiRES/estatisca/databases/day/connection"),
            'year': require("../../database/SiRES/estatisca/databases/year/connection")
        }
        this.temp = temp
        this.conn = this.connections[this.temp]

        
    }
    

   
    async Last(){
        var day_compare = await conn_estatisticas(this.temp).select("*")
            
       
        try {
        
            var penultimo_day = day_compare[day_compare.length - 2]['value']
        } catch (error) {
            var penultimo_day = 1
        }
        var last_day = day_compare[day_compare.length - 1]

        var n_pessoas = last_day['n_pessoas']
        var n_mesas = last_day['n_mesas']      
        var value_total = last_day['value']
        var day_speciefic = last_day[this.temp + '_speciefic']
        var day_string = last_day[this.temp + '_string']
        var calc1 = value_total / penultimo_day
        var porcent_compare = (calc1 - 1) * 100
        porcent_compare = porcent_compare.toFixed(2)
        var gastoporpessoas =  value_total / n_pessoas
        var gastopormesa =  value_total / n_mesas
        var info = {day_speciefic,day_string,value_total,n_pessoas,n_mesas,gastopormesa,gastoporpessoas,porcent_compare}
        return info
    }
    async LastItems(){
        
        var day_compare = await conn_estatisticas(this.temp).select("*")
        var last_day = day_compare[day_compare.length - 1]
        var item_mais_pedido = await this.conn(this.temp + last_day[this.temp + '_number']).select("item","quant").orderBy("quant","desc").limit(1)
        item_mais_pedido = item_mais_pedido[0]
        var item_menos_pedido = await this.conn(this.temp + last_day[this.temp + '_number']).select("item","quant").orderBy("quant","asc").limit(1)
        item_menos_pedido = item_menos_pedido[0]
        var item_mais_rentavel = await this.conn(this.temp + last_day[this.temp + '_number']).select("item","value").orderBy("value","desc").limit(1) 
        item_mais_rentavel = item_mais_rentavel[0]
        var item_menos_rentavel = await this.conn(this.temp + last_day[this.temp + '_number']).select("item","value").orderBy("value","asc").limit(1) 
        item_menos_rentavel = item_menos_rentavel[0]
        var total_quant_items = await this.conn(this.temp + last_day[this.temp + '_number']).sum('quant')
        total_quant_items = total_quant_items[0]
        var info = {item_mais_pedido,item_menos_pedido,item_mais_rentavel,item_menos_rentavel,total_quant_items}
        return info
        }
    async BestDay(){
        var best_day = await conn_estatisticas(this.temp).select("*").orderBy('value','desc').limit(1)
        best_day = best_day[0]

        var n_pessoas = best_day['n_pessoas']
        var n_mesas = best_day['n_mesas']      
        var value_total = best_day['value']
        var day_speciefic = best_day[this.temp + '_speciefic']
        var day_string = best_day[this.temp + '_string']
        var items = await this.conn(this.temp + best_day[this.temp + '_number']).select('*').orderBy("quant",'desc').limit(1)
        var itemBest = items[0]["item"]
        var quant_item = items[0]["quant"]
        var renda = items[0]["value"]
        var gastoporpessoas =  value_total / n_pessoas
        var gastopormesa =  value_total / n_mesas
        var info = {day_speciefic,day_string,value_total,n_pessoas,n_mesas,gastopormesa,gastoporpessoas,itemBest,quant_item,renda}
        return info
}
    async BadDay(){
        var bad_day = await conn_estatisticas(this.temp).select("*").orderBy('value','asc').limit(1)        
        bad_day = bad_day[0]
        var n_pessoas = bad_day['n_pessoas']
        var n_mesas = bad_day['n_mesas']      
        var value_total = bad_day['value']
        var day_speciefic = bad_day[this.temp + '_speciefic']
        var day_string = bad_day[this.temp + '_string']
        var items = await this.conn(this.temp + bad_day[this.temp + '_number']).select('*').orderBy("quant",'asc').limit(1)
        var itemBad = items[0]["item"]
        var quant_item = items[0]["quant"]
        var renda = items[0]["value"]
        var gastoporpessoas =  value_total / n_pessoas
        var gastopormesa =  value_total / n_mesas
        var info = {day_speciefic,day_string,value_total,n_pessoas,n_mesas,gastopormesa,gastoporpessoas,itemBad,quant_item,renda}
        
        return info
    }
    async main(){
       var info_return = []
       var last = await this.Last()
       info_return.push(last)
       var lastItems = await this.LastItems()
       info_return.push(lastItems)
       var bestDay = await this.BestDay()
       info_return.push(bestDay)
       var badDay = await this.BadDay()
       info_return.push(badDay)
       return info_return
    }
}


module.exports = ReturnInfo