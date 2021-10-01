import React from "react"
import "./styles.css"

export default function Header(props){
    return (
        <header id="header-items">
        <h1>{props.title}</h1>
        <div class="footer-header-items">

          <h4>{props.subtitle}</h4>
          <span></span>
        </div>


      </header>
    )
}