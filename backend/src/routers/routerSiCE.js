const express = require("express")
const routeSiCE = express.Router()

const LoginController = require("../controllers/SiCE/login")
const MailController = require("../controllers/SiCE/mail")
const Cardapio = require("../controllers/SiCE/menu_data")

routeSiCE.post('/', LoginController.userLogin)
routeSiCE.post('/cadastro', LoginController.createLogin)
routeSiCE.post('/validateSession', LoginController.validateSession)
routeSiCE.post('/validateUsername', LoginController.validateUsername)

routeSiCE.get('/mailget', MailController.mailget)
routeSiCE.post('/maildisp', MailController.maildisp)
routeSiCE.post('/insertCardapio', Cardapio.insertCardapio)
routeSiCE.post('/updateCardapio', Cardapio.updateCardapio)
routeSiCE.get('/listCardapio', Cardapio.listCardapio)
routeSiCE.get('/deleteVerse', Cardapio.deleteVerse)

module.exports = routeSiCE