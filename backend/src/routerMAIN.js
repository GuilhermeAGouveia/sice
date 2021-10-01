const express = require("express");
const route = express.Router()

const routerSiCE = require("./routers/routerSiCE")
const routerSiRES = require("./routers/routerSiRES")

route.use(routerSiCE)
route.use(routerSiRES)

// SiCE

//SiRES 
/*
const SiRES = require("./controllers/SiRES/trateData")


route.post('/sires/mesa_temp', SiRES.trate_input_pedidos)
route.get('/sires/items', SiRES.listItems)
route.get('/sires/pedidos_temp', SiRES.output_pedidos_cozinheiro)
route.get('/sires/mesas_conta', SiRES.output_mesas_right)
route.post('/sires/donePedido', SiRES.donePedido)
route.post('/sires/listMesa', SiRES.listMesa)
route.post('/sires/doneMesa', SiRES.doneMesa)
route.post('/sires/existMesa', SiRES.existMesa)
route.get('/sires/viewEst', SiRES.viewEstatisticas)
route.get('/sires/zerarEst', SiRES.deleteDataEstatisticas)
route.get('/sires/defaultEst', SiRES.defaultReturnEstatisticas)
route.post('/sires/searchEstDay', SiRES.searchEstatisticas)

  */
module.exports = route;

