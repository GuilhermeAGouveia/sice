import React from "react"
import {FaChevronUp,FaArrowRight,FaTable,FaCheck,FaChevronCircleUp,FaUserAlt} from "react-icons/fa"

import "./styles.css"
import MenuSiRES from "../../Menu/"
import {FiMoreVertical,FiSettings} from "react-icons/fi"
export default class Teste extends React.Component{
    constructor(props){
        super(props)
        
        this.localvar = props.name
        this.state = {
            teste:1,
            click:0,
            click_header_hidden:0,
            mesa_number:null,
            id_name_stat: 0
        }
    }

 
    modify(){
        var teste = 1
        
       this.setState({teste:this.state.teste + 1},this.update)

    }
    render(){
        var text = this.state.teste
        var mesa_number = this.state.mesa_number
        var click_header_hidden = this.state.click_header_hidden
        var id_name_stat = this.state.id_name_stat
    
        return (
           <div id="teste-root">
               <MenuSiRES color={"rgb(20, 20, 109"}></MenuSiRES>
               <div id="title-home-sice">
                
                    <h2>Mesa</h2><br></br>
                    <span>Escolha uma Mesa</span>
                    <FaChevronCircleUp onClick = {() => {
                        if (click_header_hidden === 0){
                            this.setState({click_header_hidden:1})
                            document.getElementById('title-home-sice').style.height = '65px'
                            document.getElementById('hidden-header').style.transform = 'rotate(180deg)'
                        } else {
                            this.setState({click_header_hidden:0})
                            document.getElementById('title-home-sice').style.height = '150px'
                            document.getElementById('hidden-header').style.transform = 'rotate(0deg)'


                        }

                    }
                    } id="hidden-header" size={15} color={'blue'}/>
               </div>
               <div id="menu-conteiner-garcon">
                   <FiMoreVertical id="more-icon" size={20} color={'black'}/>
                   <div id="options-conteiner">
                        <div id="conteiner-id-nominal">
                      
                           
                            <div class="btn-on-mesa" onClick={() => {
                                if (id_name_stat === 0){
                                    this.setState({id_name_stat:1})
                                    document.getElementById('btn-position1').style.left = '14px'
                                    document.getElementById('btn-position1').style.background = 'blue'
                                } else {
                                    this.setState({id_name_stat:0})
                                    document.getElementById('btn-position1').style.left = '1px'
                                    document.getElementById('btn-position1').style.background = 'gray'
                                }
                            }}>
                                <div class="btn-position-mesa" id="btn-position1">
          
                                </div>
                            </div>
                            <p>Identificador Nominal</p>
                  
                        </div>
                        <div id="">
                            <p>Sair</p>
                   
                        </div>
                    </div>
                </div>
               <div id="display-pedidos-conteiner">
                   <div id="display-pedidos">
                    <input type='number' id="mesa_n" value={mesa_number} onChange={e => this.setState({mesa_number:e.target.value})}
                    onFocus = {() => {
                        if (this.state.click === 1){
                            document.getElementById('btn-controll-table-choice').click()
                        }
                        document.getElementById('label-mesa_n').style.top = '-100vh'
                    }}
                    onBlur = {() => {
                        if (mesa_number === null || mesa_number === ''){
                        document.getElementById('label-mesa_n').style.top = '0px'
                        } 
                    }}
                    
                    />
                    <label id="label-mesa_n" for="mesa_n">Numero</label>
                    </div>
               </div>
               <div id="options-input">
                    <p> <FiSettings size={15} color={'rgb(0, 230, 251)'}/>Opções Adicionais</p>
                    <div id="id-nominal-root">
                        <span class="option-name">Identificador Nominal:</span>
                        <div id="name-conteiner">

                            <input type="text" id="id-name" onFocus={() => document.getElementById('icon-user').style.left = '-10px'}></input>
                            <FaUserAlt id="icon-user" size={10} color={'white'}/>
                        </div>
                    </div>
               </div>
               
                <div id="table-choice-conteiner">
                    <div id='btn-controll-table-choice' class="chevron" onClick={() => 
                        {
                            if (this.state.click === 0){
                                document.getElementById('table-choice-conteiner').style.height = '60vh'
                                document.getElementById('chevron-up').style.transform = 'rotate(180deg)'
                                document.getElementById('btn-prox-conteiner').style.bottom = '61vh'
                                this.setState({click:1})
                            } else {
                                document.getElementById('table-choice-conteiner').style.height = '20px'
                                document.getElementById('btn-prox-conteiner').style.bottom = '25px'
                                document.getElementById('chevron-up').style.transform = 'rotate(0deg)'
                                this.setState({click:0})
                            }
                        }
                    }>
                        <FaChevronUp id="chevron-up" size={18} color={'blue'}/>
                    </div>
                    
                    <table id="table-choice-content">
                    
                      
                    <tr>
                            <div class="table-select-conteiner">
                                <input type="radio" name="radiome"></input>
                                <td class="table">
                                    <h3>1</h3>
                                    <FaTable color={'gray'} size={20}/>
                                </td>
                                <div class="checkmark-table"><FaCheck class="check-icon" color={'white'} size={10}/></div>
                            </div>
                            <div class="table-select-conteiner">
                                <input type="radio" name="radiome"></input>
                                <td class="table">
                                    <h3>2</h3>
                                    <FaTable color={'gray'} size={20}/>
                                </td>
                                <div class="checkmark-table"><FaCheck class="check-icon" color={'white'} size={10}/></div>
                            </div>
                            <div class="table-select-conteiner">
                                <input type="radio" name="radiome"></input>
                                <td class="table">
                                    <h3>3</h3>
                                    <FaTable color={'gray'} size={20}/>
                                </td>
                                <div class="checkmark-table"><FaCheck class="check-icon" color={'white'} size={10}/></div>
                            </div>
                            <div class="table-select-conteiner">
                                <input type="radio" name="radiome"></input>
                                <td class="table">
                                    <h3>4</h3>
                                    <FaTable color={'gray'} size={20}/>
                                </td>
                                <div class="checkmark-table"><FaCheck class="check-icon" color={'white'} size={10}/></div>
                            </div>
                            <div class="table-select-conteiner">
                                <input type="radio" name="radiome"></input>
                                <td class="table">
                                    <h3>5</h3>
                                    <FaTable color={'gray'} size={20}/>
                                </td>
                                <div class="checkmark-table"><FaCheck class="check-icon" color={'white'} size={10}/></div>
                            </div>
                           
             

 
                        </tr>
                        <tr>
                            <div class="table-select-conteiner">
                                <input type="radio" name="radiome"></input>
                                <td class="table">
                                    <h3>6</h3>
                                    <FaTable color={'gray'} size={20}/>
                                </td>
                                <div class="checkmark-table"><FaCheck class="check-icon" color={'white'} size={10}/></div>
                            </div>
                            <div class="table-select-conteiner">
                                <input type="radio" name="radiome"></input>
                                <td class="table">
                                    <h3>7</h3>
                                    <FaTable color={'gray'} size={20}/>
                                </td>
                                <div class="checkmark-table"><FaCheck class="check-icon" color={'white'} size={10}/></div>
                            </div>
                            <div class="table-select-conteiner">
                                <input type="radio" name="radiome"></input>
                                <td class="table">
                                    <h3>8</h3>
                                    <FaTable color={'gray'} size={20}/>
                                </td>
                                <div class="checkmark-table"><FaCheck class="check-icon" color={'white'} size={10}/></div>
                            </div>
                            <div class="table-select-conteiner">
                                <input type="radio" name="radiome"></input>
                                <td class="table">
                                    <h3>9</h3>
                                    <FaTable color={'yellow'} size={20}/>
                                </td>
                                <div class="checkmark-table"><FaCheck class="check-icon" color={'white'} size={10}/></div>
                            </div>
                            <div class="table-select-conteiner">
                                <input type="radio" name="radiome"></input>
                                <td class="table">
                                    <h3>10</h3>
                                    <FaTable color={'gray'} size={20}/>
                                </td>
                                <div class="checkmark-table"><FaCheck class="check-icon" color={'white'} size={10}/></div>
                            </div>
                           
             

 
                        </tr>
                        <tr>
                            <div class="table-select-conteiner">
                                <input type="radio" name="radiome"></input>
                                <td class="table">
                                    <h3>12</h3>
                                    <FaTable color={'gray'} size={20}/>
                                </td>
                                <div class="checkmark-table"><FaCheck class="check-icon" color={'white'} size={10}/></div>
                            </div>
                            <div class="table-select-conteiner">
                                <input type="radio" name="radiome"></input>
                                <td class="table">
                                    <h3>13</h3>
                                    <FaTable color={'gray'} size={20}/>
                                </td>
                                <div class="checkmark-table"><FaCheck class="check-icon" color={'white'} size={10}/></div>
                            </div>
                            <div class="table-select-conteiner">
                                <input type="radio" name="radiome"></input>
                                <td class="table">
                                    <h3>14</h3>
                                    <FaTable color={'gray'} size={20}/>
                                </td>
                                <div class="checkmark-table"><FaCheck class="check-icon" color={'white'} size={10}/></div>
                            </div>
                            <div class="table-select-conteiner">
                                <input type="radio" name="radiome"></input>
                                <td class="table">
                                    <h3>15</h3>
                                    <FaTable color={'yellow'} size={20}/>
                                </td>
                                <div class="checkmark-table"><FaCheck class="check-icon" color={'white'} size={10}/></div>
                            </div>
                            <div class="table-select-conteiner">
                                <input type="radio" name="radiome"></input>
                                <td class="table">
                                    <h3>16</h3>
                                    <FaTable color={'gray'} size={20}/>
                                </td>
                                <div class="checkmark-table"><FaCheck class="check-icon" color={'white'} size={10}/></div>
                            </div>
                           
             

 
                        </tr>
                        <tr>
                            <div class="table-select-conteiner">
                                <input type="radio" name="radiome"></input>
                                <td class="table">
                                    <h3>17</h3>
                                    <FaTable color={'gray'} size={20}/>
                                </td>
                                <div class="checkmark-table"><FaCheck class="check-icon" color={'white'} size={10}/></div>
                            </div>
                            <div class="table-select-conteiner">
                                <input type="radio" name="radiome"></input>
                                <td class="table">
                                    <h3>18</h3>
                                    <FaTable color={'gray'} size={20}/>
                                </td>
                                <div class="checkmark-table"><FaCheck class="check-icon" color={'white'} size={10}/></div>
                            </div>
                            <div class="table-select-conteiner">
                                <input type="radio" name="radiome"></input>
                                <td class="table">
                                    <h3>19</h3>
                                    <FaTable color={'gray'} size={20}/>
                                </td>
                                <div class="checkmark-table"><FaCheck class="check-icon" color={'white'} size={10}/></div>
                            </div>
                            <div class="table-select-conteiner">
                                <input type="radio" name="radiome"></input>
                                <td class="table">
                                    <h3>20</h3>
                                    <FaTable color={'yellow'} size={20}/>
                                </td>
                                <div class="checkmark-table"><FaCheck class="check-icon" color={'white'} size={10}/></div>
                            </div>
                            <div class="table-select-conteiner">
                                <input type="radio" name="radiome"></input>
                                <td class="table">
                                    <h3>21</h3>
                                    <FaTable color={'gray'} size={20}/>
                                </td>
                                <div class="checkmark-table"><FaCheck class="check-icon" color={'white'} size={10}/></div>
                            </div>
                           
             

 
                        </tr>
         
                       
                     
                    </table>
                </div>
                <div id='btn-prox-conteiner'><button id="btn-prox"><FaArrowRight color={'white'} size={18}/></button></div>
           </div>
           
        )
    }
}