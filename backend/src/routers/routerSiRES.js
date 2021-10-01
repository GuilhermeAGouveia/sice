const express = require("express")
const routeSiRES = express.Router()

const CookController = require("../controllers/SiRES/CookController")
const EstatisticasController = require("../controllers/SiRES/EstatisticaController")
const MesaController = require("../controllers/SiRES/MesaController")
const GarconController = require("../controllers/SiRES/GarconInputController")


routeSiRES.post('/sires/mesa_temp', GarconController.inputPedidos)
routeSiRES.get('/sires/items', MesaController.listItems)
routeSiRES.get('/sires/pedidos_temp', CookController.outputPedidosConzinheiro)
routeSiRES.get('/sires/mesas_conta', MesaController.outputMesaRight)
routeSiRES.post('/sires/donePedido', CookController.donePedido)
routeSiRES.post('/sires/listMesa', MesaController.listMesa)
routeSiRES.post('/sires/doneMesa', MesaController.doneMesa)
routeSiRES.post('/sires/existMesa', MesaController.existMesa)
routeSiRES.get('/sires/viewEst', EstatisticasController.viewEstatisticas)
routeSiRES.get('/sires/zerarEst', EstatisticasController.deleteDataEstatisticas)
routeSiRES.post('/sires/defaultEst', EstatisticasController.defaultReturnEstatisticas)
routeSiRES.post('/sires/searchEstDay', EstatisticasController.searchEstatisticas)

module.exports = routeSiRES