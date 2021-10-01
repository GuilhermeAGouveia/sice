//const conn_items = require("../../database/SiRES/items/connection")
const conn_day = require("../../database/SiRES/estatisca/databases/day/connection")
const conn_moth = require("../../database/SiRES/estatisca/databases/moth/connection")
const conn_week = require("../../database/SiRES/estatisca/databases/week/connection")
const conn_year = require("../../database/SiRES/estatisca/databases/year/connection")
const conn_estatisticas = require("../../database/SiRES/estatisca/connection")
const ReturnInfoEstatisticas = require("./ReturnInfoEstatisticas")


class TimeLocal {
    constructor(millisegundos){
        this.ms = millisegundos
    }
    getMillisegundos(){
        var date = new Date()
        return date.getSeconds()
    }
    sleep(){
        console.time()
        console.log(this.getMillisegundos())
        var msnow = this.ms/1000 + this.getMillisegundos()
        console.log(msnow)
        for (let time = 0;msnow >= time; ){
            time = this.getMillisegundos()
          

            
        }
        
        console.timeEnd()
    }
}

module.exports = {
    async viewEstatisticas(request,response){
      
        try {
            const day_table = await conn_day('day1').select()
            return response.json(day_table)
        } catch (error){
            return response.send('dia nao existe')
        }
    },
    async deleteDataEstatisticas(request,response){
        //var data = await conn_estatisticas('year').delete()
        //await conn_day('day1').delete()
        //var up = await conn_estatisticas('day').update('day_string',getDateString()).where('day_number',2)
        var data = await conn_estatisticas('year').select()
        //var teste = new TimeLocal(3000)
        //teste.sleep()
        //var data = await conn_moth('moth1').select()
        return response.json(data)
    },
    async defaultReturnEstatisticas(request,response){
        var temp = request.body.temp
        
        var info_return = await new ReturnInfoEstatisticas(temp).main()
        return response.json(info_return)
        

        
    },
    async searchEstatisticas(request,response){
        var day_search = request.body.day_speciefic
        var day_response = await conn_estatisticas('day').select("*").where('day_speciefic',day_search)
        
        var teste = new TimeLocal(2000)
        teste.sleep()
        try {
            var items_vendidos = await conn_day('day' + day_response[0]['day_number']).select()
            day_response.push(items_vendidos)
            console.log(day_response[0]['day_number'])
            return response.json(day_response)
        } catch (error) {
            return response.send('Este dia não esta cadastrado em nosso banco de dados!')
        }
       
    },
}