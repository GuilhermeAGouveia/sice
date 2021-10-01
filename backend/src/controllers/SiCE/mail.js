const nodemailer = require("nodemailer")
const conn = require("../../database/SiCE/connection")



module.exports = {
    async maildisp(request,response){
        console.log("exec maildisp")
        const transporter = nodemailer.createTransport({
    
            host: "smtp-mail.outlook.com",
            secureConnection:false,
            port: 587,
            tls:{
                ciphers:"SSLv3"
            } , // true for 465, false for other ports
            auth: {
                user: "antoniogouveiam@hotmail.com",
                pass: "GEM261018"
            }
            
        });
        console.log(request.body.mailTrue)

        const mailOptions = {
            from: '"Recanto Bela Vista" <antoniogouveiam@hotmail.com>',
            html:`<div style="padding-top:10px;color:white;position: absolute;top:0px;left: 0px;width:100%;height:350px;background:black">


            <h1 style="text-align:center;font-family:sans">Recanto Bela Vista<br> Restaurante & Espaço para eventos</h1>
            <h4 style="text-align:center;opacity:0.4">Recanto Bela Vista,literalmente.</h4>
            <div style="display:flex;align-items:center;justify-content:space-between">
              <button style="color:white;border:solid 2px black;border-radius: 7px;background:green;opacity:0.6" type="button" name="button">WEB SITE</button>
              <button style="color:white;border:solid 2px black;border-radius: 7px;background:green;opacity:0.6" type="button" name="button">FACEBOOK</button>
              <button style="color:white;border:solid 2px black;border-radius: 7px;background:green;opacity:0.6" type="button" name="button">WHATSAPP</button>
            
            </div>
            <p style="font-size:17px" align='justify'>${request.body.title}</p>
            </div>`,
            to: request.body.mailTrue,
            subject: request.body.title,
            text: request.body.text
          };
        transporter.sendMail(mailOptions, function(error, info){
            if (error) {
              console.log(error);
              return response.send("erro")
            } else {
              console.log('Email enviado: ' + info.response);
              return response.send('sucesso')
            }
         
          });
          

        
          

    },

    async mailget(request,response){
        var mails = await conn("users").select("email","name")
        console.log("exec")

        return response.json(mails)


    }
    
}