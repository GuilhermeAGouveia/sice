import React,{useEffect} from "react"
import "./styles.css"
import {FaArrowRight,FaChartBar,FaConciergeBell} from "react-icons/fa"
import {FiSettings} from "react-icons/fi"
import Menu from "../../Menu"
import {useHistory} from "react-router-dom"


export default function Main(){
  useEffect(() => {
    document.getElementById('metatag').content = 'rgb(21,234,232)'
},[])
    const history = useHistory()
    async function handleClick(idDocument,pushPath){
       
        document.getElementById(idDocument).style.left = '0px';
        var timeout = await setTimeout(() => {document.getElementById(idDocument + 'Load').style.display = 'block'},500)
        timeout = await setTimeout(() => {
            document.getElementById(idDocument).style.width = '4000px';
            document.getElementById(idDocument).style.height = '4000px';
            document.getElementById(idDocument).style.zIndex = '9999';
           
            document.getElementById(idDocument + 'Cont').style.zIndex = '9999';

            document.getElementById(idDocument + 'Cont').style.animationPlayState = 'running';
        },2000)
        var timeout = setTimeout(() => {history.push(pushPath)},3000)

     
        
    }

   
     
        return (
        <div class="main-root">
        <Menu color={'rgb(21,234,232)'}></Menu>
        <header id="header-Main">
          <div class="title">
            <span>SiCE</span>

          </div>
        </header>
        <div class="scroll-op">
          <div class="itemMain">
            <FaChartBar size={30} color={'white'}/>
          </div>
          <div class="itemMain">
            <FaConciergeBell size={30} color={'white'}/>
          </div>
          <div class="itemMain">

          </div>
          <div class="itemMain">
            <FiSettings size={30} color={'white'}/>
          </div>
        </div>
        <section id="section-Main">
        <div class='sections'>
          <div class="container" id="estCont">
            <div class="color-sign" id="est" style={{background:'blue'}}>
                <div class="screenLoad-c" id="estLoad">

          
                </div>
            </div>
            <div class="subtitle" onClick={() => handleClick('est','/sires/m-estatisticas')}>
              <span>Estatisticas</span>
              <FaArrowRight color={'rgb(50,50,50)'} size={16}></FaArrowRight>
            </div>
            <div class="resume-content">

            </div>
          </div>
          </div>

          <div class='sections'>

        <div class="container" id="garCont">
            <div class="color-sign" id="gar" style={{background:'rgb(44, 0, 58)'} }>
                <div class="screenLoad-c" id="garLoad">

          
                </div>
            </div>
            <div class="subtitle" onClick={() => handleClick('gar','/refactory/garcon')}>
              <span>Garcon</span>
              <FaArrowRight color={'rgb(50,50,50)'} size={16}></FaArrowRight>
            </div>
            <div class="resume-content">

            </div>
          </div>
        </div>
        
        <div class='sections'>

<div class="container" id="cookCont">
    <div class="color-sign" id="cook" style={{background:'rgb(0,0,0)'} }>
        <div class="screenLoad-c" id="cookLoad">

  
        </div>
    </div>
    <div class="subtitle" onClick={() => handleClick('cook','/')}>
      <span>Cozinheiro</span>
      <FaArrowRight color={'rgb(50,50,50)'} size={16}></FaArrowRight>
    </div>
    <div class="resume-content">

    </div>
  </div>
</div>
        </section>
    </div>
        )
    }
