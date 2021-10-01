import React,{useState,useEffect} from "react"
import "./global.css"
import "./css/selector.css"
import MenuSiRES from "../../Menu/"
import Header from "./Header"
import Footer from "./Footer"
import MesaConteiner from "./Section/MesaConteiner"
import ItemsConteiner from "./Section/ItemsConteiner"
import Hammer from "react-hammerjs"

export default function GarconR(){
    
    useEffect(() => {
        document.getElementById('metatag').content = 'rgb(44, 0, 58)'
    },[])
    var [state,setState] = useState()
    var [title,setTitle] = useState('Mesa')
    var [subtitle,setSubtitle] = useState('Selecione a Mesa')
    function selectItem(pos,item,left_v){
        switch (item){
            case 1:
                setTitle('Mesa')
                setSubtitle('Selecione uma Mesa')
                setState(item)
                break;
            case 2:
                setTitle('Items')
                setSubtitle('Escolha os Items')
                setState(item)
                break;
            case 3:
                setTitle('Observações')
                setSubtitle('Escreva uma Observação')
                setState(item)
                break;
            default:
                break;
        }
        document.getElementById('section-garcon').style.left = -left_v + "vw"
        document.getElementById('item'+item).style.color = 'rgb(83, 1, 207)';
        document.getElementById('line-select-conteiner').style.left = pos + '%'
        for (let i = 1;i <= 3;i++){
            if (i !== item){
                document.getElementById('item'+i).style.color = ' rgb(150,150,150)';
            }
        }
      }
      function handlePan(ev,conteiner){
        if (((ev.angle > 140 && ev.angle < 200) || (ev.angle > -70 && ev.angle < 60))){
        switch (conteiner){
            case 1:
                if (ev.additionalEvent === 'panleft'){
                    document.getElementById('item2').click()
                } else if (ev.additionalEvent === 'panright'){
                    document.getElementById('item1').click()
                }
                break;
            case 2:
                if (ev.additionalEvent === 'panleft'){
                    document.getElementById('item3').click()
                } else if (ev.additionalEvent === 'panright'){
                    document.getElementById('item1').click()
                }
                break;
            case 3:
                if (ev.additionalEvent === 'panleft'){
                    document.getElementById('item3').click()
                } else if (ev.additionalEvent === 'panright'){
                    document.getElementById('item2').click()
                    
                }
                break;
        }
        }
      }
    return (
    <div class="items-root">
        <MenuSiRES color="rgb(44, 0, 58)"></MenuSiRES>
        <Header title={title} subtitle={subtitle}></Header>
        <section id="section-garcon">
            <Hammer onPan={ev => handlePan(ev,1)} direction={'DIRECTION_ALL'}><div class="conteiner-garcon" id="mesa-conteiner"><MesaConteiner></MesaConteiner></div></Hammer>
            <Hammer onPan={ev => handlePan(ev,2)} direction={'DIRECTION_ALL'}><div class="conteiner-garcon" id="items-conteiner"><ItemsConteiner></ItemsConteiner></div></Hammer>
            <Hammer onPan={ev => handlePan(ev,3)} direction={'DIRECTION_ALL'}><div class="conteiner-garcon" id="obs-conteiner"></div></Hammer>
        </section>
        <Footer state={state}></Footer>
        <div class="select-case-conteiner">
            <div class="select-case-content">
  
                <div id="item1" class="item" onClick={() => selectItem(0,1,0)}>
                    <span>Mesa</span>
                </div>
                <div id="item2" class="item" onClick={() => selectItem(33.33,2,100)}>
                    <span>Items</span>
                </div>
                <div id="item3" class="item" onClick={() => selectItem(66.66,3,200)}>
                    <span>Obs</span>
                </div>
  
            </div>
            <div id="line-select-conteiner">
                <div id="line-select-content">
  
                </div>
            </div>
        </div>
    </div>
    )
}