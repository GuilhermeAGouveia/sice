//Modulos nativos do REACT
import React,{ useEffect,useState } from "react"
import {Link} from "react-router-dom"
import {FiMessageCircle} from "react-icons/fi" 
import { FaChevronLeft, FaChevronRight, FaUtensils,FaCommentDots } from "react-icons/fa"
import alertify from "alertifyjs"

//Componentes REACT
import Menu from "../Integrations_Page/Menu/"
import Cube from "../Integrations_Page/Cube-Rotate-Spam/"

//Assets
import img1 from "../../../assets/img_1.jpg"
import img2 from "../../../assets/img_2.jpg"
import img3 from "../../../assets/img_3.jpg"
import img4 from "../../../assets/img_4.jpg"
import img5 from "../../../assets/img_5.jpg"

//SubIndex
import Text from "./text"

//Estilização
import "../../alertify.css"
import "./stylesHome.css"


//Função principal a ser exportada
function Home(){
    

    var hana_state = 0
    var menu_state = 0
   
//*inicio* JS menu
    function menu_start()
    { 
        var menu = document.getElementById("menu-root") 
        var line1 = document.getElementById("line-menu-1")
        var line2 = document.getElementById("line-menu-2")
        var line3 = document.getElementById("line-menu-3")
        if (menu_state === 0){
       
        menu.style.height = "100vh" 
        line1.style.display = "none"
        line2.style.top = "10px"
        line3.style.top = "10px"
        line2.style.position = "absolute"
        line3.style.position = "absolute"
        line2.style.transform = "rotate(-45deg)"
        line3.style.transform = "rotate(45deg)"

        menu_state = 1
        } else{
    
        
        line1.style.display = "block"
        line2.style.top = "auto"
        line3.style.top = "auto"
        line2.style.position = "relative"
        line3.style.position = "relative"
        line2.style.transform = "rotate(0deg)"
        line3.style.transform = "rotate(0deg)"
        menu.style.height = "0vh"
        menu_state = 0
        } 

    } 
//*fim* JS menu
//*inicio* JS scroll automatico de imagens   
var [number,setNumber] = useState(1)
var [count,setCount] = useState(0)

     function troca(number_p) {
      
     
        switch (number_p){
            case 1:
                document.getElementById("img-1").style.opacity = "0"; //imagem opacity
                document.getElementById("img-2").style.opacity = "1"; //imagem opacity
               
              
              
                //document.getElementById("img-2").style.left = "0vw"; //imagem opacity
                document.getElementById("circle-1").style.background = "transparent"; //circle-indicative opacity
                document.getElementById("circle-2").style.background = "white"; //circle-indicative opacity
                 break;
             
              
            case 2:
              
                document.getElementById("img-2").style.opacity = "0"; //imagem opacity
                document.getElementById("img-3").style.opacity = "1"; //imagem opacity
                document.getElementById("circle-2").style.background = "transparent"; //circle-indicative opacity
                document.getElementById("circle-3").style.background = "white"; //circle-indicative opacity
             
                break;
             
            case 3:
           
                document.getElementById("img-3").style.opacity = "0"; //imagem opacity
                document.getElementById("img-1").style.opacity = "1"; //imagem opacity
                document.getElementById("circle-3").style.background = "transparent"; //circle-indicative opacity
                document.getElementById("circle-1").style.background = "white"; //circle-indicative opacity
              
                break;
            default:
           
                document.getElementById("img-3").style.opacity = "0";
                document.getElementById("img-1").style.opacity = "0";
                document.getElementById("img-2").style.opacity = "0";
        }
    }
    function countInterval(){
        setCount(count + 1)
    }
    useEffect(() => {
        troca(number)
        setNumber(number + 1)
        if (number === 3){
            setNumber(1)
        }
        var timeout = setTimeout(() => countInterval(),5000)
        return () => clearTimeout(timeout)
    },
    [count])
  
    //*fim* JS scroll automatico de imagens
    //*inicio* JS controll display subtitles "Eventos Restaurante Contratação"
    function line_down(position){
        //line-down atributions
        var line1 = document.getElementById("line-down1")
        var line2 = document.getElementById("line-down2")
        var line3 = document.getElementById("line-down3")
        //line-down atributions
        //sections display
        var section1 = document.getElementById("content-section-1")
        var section2 = document.getElementById("content-section-2")
        var section3 = document.getElementById("content-section-3")
        //sections display
        switch(position){
               
                case 1:
                    line1.style.width = "100%"
                    line2.style.width = "0px"
                    line3.style.width = "0px"
                    section1.style.display = "block";
                    section2.style.display = "none";
                    section3.style.display = "none";

                    break;
                case 2:
                    line1.style.width = "0px"
                    line2.style.width = "100%"
                    line3.style.width = "0px"
                    section1.style.display = "none";
                    section2.style.display = "block";
                    section3.style.display = "none";
                    break;
                case 3:
                    line1.style.width = "0px"
                    line2.style.width = "0px"
                    line3.style.width = "100%"
                    section1.style.display = "none";
                    section2.style.display = "none";
                    section3.style.display = "block";

                   
            }
        }
//*fim* JS controll display subtitles "Eventos Restaurante Contratação"
//*inicio* JS controll display topics
//*inicio* JS dispĺay topic eventos
        function topic_select_even(position2){
            var topic1 = document.getElementById("even-btn1")
            var topic2 = document.getElementById("even-btn2")
            var topic3 = document.getElementById("even-btn3")
            var text1 = document.getElementById("even-1")
            var text2 = document.getElementById("even-2")
            var text3 = document.getElementById("even-3")
            switch(position2){
                case 1:
              
                    topic1.style.background = "teal"
                    topic1.style.color = "white"
                    topic2.style.background = "transparent"
                    topic2.style.color = "teal"
                    topic3.style.background = "transparent"
                    topic3.style.color = "teal"

                    text1.style.display = "block"
                    text2.style.display = "none"
                    text3.style.display = "none"
                    break;
                case 2:
                
                    topic2.style.background = "teal"
                    topic2.style.color = "white"
                    topic1.style.background = "transparent"
                    topic1.style.color = "teal "
                    topic3.style.background = "transparent"
                    topic3.style.color = "teal"

                    text1.style.display = "none"
                    text2.style.display = "block"
                    text3.style.display = "none"
                    break;
                case 3:
                    topic3.style.background = "teal"
                    topic3.style.color = "white"
                    topic1.style.background = "transparent "
                    topic1.style.color = "teal "
                    topic2.style.background = "transparent"
                    topic2.style.color = "teal"

                    text1.style.display = "none"
                    text2.style.display = "none"
                    text3.style.display = "block"
                    break;

            }
        }
//*fim* JS dispĺay topic eventos
//*inicio* JS dispĺay topic restaurante
function topic_select_rest(position2){
    var topic1 = document.getElementById("rest-btn1")
    var topic2 = document.getElementById("rest-btn2")
    var topic3 = document.getElementById("rest-btn3")
    var text1 = document.getElementById("rest-1")
    var text2 = document.getElementById("rest-2")
    var text3 = document.getElementById("rest-3")
    switch(position2){
        case 1:
      
            topic1.style.background = "teal"
            topic1.style.color = "white"
            topic2.style.background = "transparent"
            topic2.style.color = "teal"
            topic3.style.background = "transparent"
            topic3.style.color = "teal"

            text1.style.display = "block"
            text2.style.display = "none"
            text3.style.display = "none"
            break;
        case 2:
        
            topic2.style.background = "teal"
            topic2.style.color = "white"
            topic1.style.background = "transparent"
            topic1.style.color = "teal "
            topic3.style.background = "transparent"
            topic3.style.color = "teal"

            text1.style.display = "none"
            text2.style.display = "block"
            text3.style.display = "none"
            break;
        case 3:
            topic3.style.background = "teal"
            topic3.style.color = "white"
            topic1.style.background = "transparent "
            topic1.style.color = "teal "
            topic2.style.background = "transparent"
            topic2.style.color = "teal"

            text1.style.display = "none"
            text2.style.display = "none"
            text3.style.display = "block"
            break;

    }
}
//*fim* JS dispĺay topic restaurante
//*inicio* JS dispĺay topic contratacao
function topic_select_cont(position2){
    var topic1 = document.getElementById("cont-btn1")
    var topic2 = document.getElementById("cont-btn2")
    var topic3 = document.getElementById("cont-btn3")
    var text1 = document.getElementById("cont-1")
    var text2 = document.getElementById("cont-2")
    var text3 = document.getElementById("cont-3")
    switch(position2){
        case 1:
      
            topic1.style.background = "teal"
            topic1.style.color = "white"
            topic2.style.background = "transparent"
            topic2.style.color = "teal"
            topic3.style.background = "transparent"
            topic3.style.color = "teal"

            text1.style.display = "block"
            text2.style.display = "none"
            text3.style.display = "none"
            break;
        case 2:
        
            topic2.style.background = "teal"
            topic2.style.color = "white"
            topic1.style.background = "transparent"
            topic1.style.color = "teal "
            topic3.style.background = "transparent"
            topic3.style.color = "teal"

            text1.style.display = "none"
            text2.style.display = "block"
            text3.style.display = "none"
            break;
        case 3:
            topic3.style.background = "teal"
            topic3.style.color = "white"
            topic1.style.background = "transparent "
            topic1.style.color = "teal "
            topic2.style.background = "transparent"
            topic2.style.color = "teal"

            text1.style.display = "none"
            text2.style.display = "none"
            text3.style.display = "block"
            break;

    }
}
function hana_function(){
    var call1_hana = document.getElementById("call-hana-assistant")
    var hana = document.getElementById("hana-conteiner")
    var hana_cont = document.getElementById("conteiner-hana-assistant")
    if (hana_state === 0){
    hana_cont.style.display = "flex"
    hana.style.display = "block"
    hana.style.width = "80vw"
    hana.style.height = "80vh"
    hana_state = 1
   
   
    } else {
    
    hana.style.width = "0vw"
    hana_cont.style.width = "0vw"
   
    hana_state = 0
    
    }
    }
//*fim* JS dispĺay topic contratacao
function scrollDisplayQuemSomosTitle(){
    if (document.body.scrollTop > 70 || document.documentElement.scrollTop > 70){
        document.getElementById('call-hana-assistant').style.display = 'flex'
    } else {
      
            document.getElementById('call-hana-assistant').style.display = 'none'
        
    }
   
    if (document.body.scrollTop > 1750 || document.documentElement.scrollTop > 1750){
        document.getElementById('title-master').style.display = 'flex';
    

    }
    if (document.body.scrollTop > 2400 || document.documentElement.scrollTop > 2400){
       console.log('scroll')
       document.getElementById('title-quem-somos').style.display = 'flex';
       
    }else {
        document.getElementById('title-quem-somos').style.display = 'none';
    }
}
window.onscroll = () => scrollDisplayQuemSomosTitle()
var [scrollPE,setScrollPE] = useState(0)
var [position,setPosition] = useState(0)
var [scrollManActivate,setScrollManActivate] = useState(0)
function FscrollPE() {
    setScrollPE(scrollPE + 1)
}
useEffect(() => {
    var widthDevice = window.innerWidth
    if (position === 0 && scrollManActivate === 0){
        document.getElementById('plates-conteiner-sub').style.left = '0vw'
        setPosition(1)
        console.log('exeen')

        var timeoutScroll = setInterval(() => {FscrollPE()},3000)
        return () => clearInterval(timeoutScroll)
    } else if (scrollManActivate === 0){
        document.getElementById('plates-conteiner-sub').style.left = '-100vw'
        setPosition(0)
        console.log('exeen')

        var timeoutScroll = setInterval(() => {FscrollPE()},3000)
        return () => clearInterval(timeoutScroll)
    }
   
},[scrollPE])
    function scrollMan() {
        setScrollManActivate(1)
        document.getElementById('plates-conteiner-sub').style.left = '0vw'
        document.getElementById('plates-conteiner-sub').style.overflowX = 'scroll'
    }
    return(
       
<div id="home-root">  
       <Menu></Menu>
    
        <div id="top">
        <div id="background-top"></div>
        <header id="header-home">
        <div class="header-home">
      <div class="text-home-anim">


      <div id="p1">
        <p>Recanto</p>


      </div>
      <div class='p' id="p2">
        <p>Bela</p>

      </div>
      <div class='p' id="p3">
        <p>Vista</p>
      </div>
  

        </div>
        <div class="sub-conteiner">
        <div class="sub">


        <p>Restaurante & Espaço para Eventos</p>
      </div>
        </div>
    </div>
           <img src={img5} alt=""/>
           <Cube id="cube"></Cube>
        </header>
        
       

    
        <div class="box-home" id="img-rol">
            <img id="img-1" src={img1} alt="Imagem 1 (Recanto Bela Vista)"/>
            <img id="img-2" src={img2} alt="Imagem 2 (Recanto Bela Vista)"/>
            <img id="img-3" src={img3} alt="Imagem 3 (Recanto Bela Vista)"/>
            <div id="conteiner-arrow">
                <button><FaChevronLeft color={"white"} size={"18px"}/></button>
                <button><FaChevronRight color={"white"} size={"18px"}/></button>
              
            </div>
            <div id="position-scroll">
                <div id="circle-1" class="circle"></div>
                <div id="circle-2" class="circle"></div>
                <div id="circle-3" class="circle"></div>
            </div>

        </div>
        </div>
        <p class="text"> Seja bem vindo ao site do restaurante,ficamos felizes em vê-lo por aqui</p>
        <div id="topics">

        <div id="subtitles">
            <div class="btn-topics"><button onClick={() => line_down(1)} id="btn-eventos" >Eventos<span id='line-down1' class='line-down'></span></button></div>
            <div class="btn-topics"><button onClick={() => line_down(2)} id="btn-restaurante" >Restaurante<span id='line-down2' class='line-down'></span></button></div>
            <div class="btn-topics"><button onClick={() => line_down(3)} id="btn-contratacao" >Contratação<span id='line-down3' class='line-down'></span></button></div>
          
        </div>
        <div id="content-topics">
        <div class="content-section" id="content-section-1">
        <section id="section1">
            <button onClick={() => topic_select_even(1)} id="even-btn1">Discoteca</button>
            <button onClick={() => topic_select_even(2)}  id="even-btn2">Encontro de Violeiros</button>
            <button onClick={() => topic_select_even(3)}  id="even-btn3">Carnaval</button>
            </section>
            
            <div id="even-1" class="text-box">
            <div class="title-topics">
                <h1>Discoteca 2019.2</h1>
                <img src={img4} alt=""/>
            </div>
          
                <p><Text text="even-1"></Text></p>
            </div>
            <div id="even-2" class="text-box">
            <div class="title-topics">
                <h1>Encontro de Violeiros</h1>
                <img src={img4} alt=""/>
            </div>
          
                <p><Text text="even-2"></Text></p>
            </div>
            <div id="even-3" class="text-box">
            <div class="title-topics">
                <h1>Carnaval</h1>
                <img src={img4} alt=""/>
            </div>
          
                <p><Text text="even-3"></Text></p>
            </div>

      
        </div>
        <div class="content-section" id="content-section-2">
        <section id="section2"> 
            <button  id="section-menu" onClick={() => topic_select_rest(1)} id="rest-btn1">Cardápio</button>
            <button  id="section-client" onClick={() => topic_select_rest(2)}  id="rest-btn2">Clientes</button>
            <button  id="section-music" onClick={() => topic_select_rest(3)}  id="rest-btn3">Música</button>
        </section>

            <div id="rest-1" class="text-box">
            </div>
            <div id="rest-2" class="text-box">
            </div>
            <div id="rest-3" class="text-box">
            </div>
       
        </div>
        <div class="content-section" id="content-section-3">

            <section id="section3">
                <button  id="section-menu" onClick={() => topic_select_cont(1)} id="cont-btn1">Contato</button>
                <button  id="section-client" onClick={() => topic_select_cont(2)}  id="cont-btn2">Orçamento</button>
                <button  id="section-music" onClick={() => topic_select_cont(3)}  id="cont-btn3">Trabalhos</button>
            </section>
            <div id="cont-1" class="text-box">
            </div>
            <div id="cont-2" class="text-box">
            </div>
            <div id="cont-3" class="text-box">
            </div>
        </div>
       
      
        </div>
        </div>
        <div id='redirect-dom-plates'></div>
        <div id="plates-conteiner-master">
        <div id="title-master">
          <div class='hiddens' id="hidden-left">
            <div id="svg-anim1">
            <FaUtensils size={40} color={'white'}></FaUtensils>
            </div>
          </div>
          <p>Platos Especias de Hoje</p>
          <div class='hiddens' id="hidden-right">
            <div id="svg-anim2">
                <FaUtensils size={40} color={'white'}></FaUtensils>
            </div>
          </div>
        </div>
        <div id="plates-conteiner-sub" onClick={() => scrollMan()}>


          <div id="plates-conteiner">
              <div id='plate1' class="plate-content">
                <h3>Feijoada</h3>
                <div id="background-plate1"></div>
              </div>
              <div id='plate2' class="plate-content">
                <h3>Macarronada Suíça</h3>
                <div id="background-plate2"></div>
              </div>

          </div>
            </div>

      </div>

        <div class="quem-somos-conteiner">
           
      <div class="background-content">
        <div class="img-quem-somos">

        </div>
      </div>
  <div class="content-quem-somos">

        <div>
      <div class="title-conteiner-quem-somos">
        <div class="line-hide">

        </div>
        <div id="title-quem-somos">
          <p>Q</p>
          <p>u</p>
          <p>e</p>
          <p>m</p>
          <div class="space"></div>


          <p>S</p>
          <p>o</p>
          <p>m</p>
          <p>o</p>
          <p>s</p>
        </div>
        <div class="line-hide">

        </div>
      </div>
      <div class="text-quem-somos">
        Somos um restaurante especializado no bom atendimetno e com foco no conforto familiar,trabalhos para tornar esses momentos o mais marcantes possivel, venha nos conhecer.
      </div>
      </div>
        </div>
    </div>
   
        <div id="conteiner-hana-assistant">
           <div id="hana-conteiner">
               <div id="hana">
               <h2>Assistente Web</h2>
               </div>
           </div>
        </div>
        <div id="call-hana-assistant" onClick={() => {hana_function()}}>
    <div>{<FaCommentDots size={"40px"} color={"teal"}/>}</div> 
       
        </div>

    </div>
 
   
  
    )
}

export default Home