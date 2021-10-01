import React, { useEffect, useState } from "react"
import "./styles.css"
import { FaHistory,FaCheck,FaHome,FaCircleNotch} from "react-icons/fa"
import {FiRotateCcw, FiRotateCw} from "react-icons/fi"

export default function Footer(props){
    useEffect(
        () =>{
            if (props.state === 2){
                document.getElementById('hidden').style.display = 'flex'
                
            } else {
                document.getElementById('hidden').style.display = 'none'
            }

        },[props.state])
    var color_svg = 'rgb(84,44,174)'
    var [rotate,setRotate] = useState(1)
    var [color_confirm,setColor_confirm] = useState('gray')
    return (
        <footer id="footer-items">
            <div class="btn-flutt">
                <FaHistory color={color_svg} size={30}></FaHistory>
            </div>
            <div id="home" class="btn-flutt">
                <FaHome color={color_svg} size={30}/>

            </div>
            <div id="hidden" onClick={() => {document.getElementById('items-insert-r').innerHTML = '';document.getElementById('hidden').style.transform = 'rotate('+ (360 * rotate) + 'deg)';setRotate(++rotate)}} class="btn-flutt">
                <FiRotateCw color={color_svg} size={30}/>

            </div>
            <div class="btn-flutt">
                <FaCheck id="conf" size={30}/>
            </div>

      </footer>
    )
}