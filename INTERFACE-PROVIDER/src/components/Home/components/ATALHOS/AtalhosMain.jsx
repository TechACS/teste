import React from 'react'
import "./AtalhosMain.scss";

import BackgroundComponenteCabeçalho from '../../../Background/Cabeçalho/BackgroundComponenteCabeçalho';
import { FaUserFriends } from 'react-icons/fa';
import { BsRouter } from "react-icons/bs";
import { FaRegUserCircle } from "react-icons/fa";
import { PiComputerTowerDuotone } from "react-icons/pi";
import Cards from './cards/Cards';
function AtalhosMain() {
  return (
    <div>
     
          
            
            <BackgroundComponenteCabeçalho>
              <div className='AtalhosMain'>
                <Cards rota="/cliente" info="clientes" IconComponent={FaUserFriends}></Cards>
                <Cards rota="/equipamentos" info="Equipamentos" IconComponent={ BsRouter}></Cards>
                <Cards rota="/home" info="User" IconComponent={FaRegUserCircle }></Cards>
                <Cards rota="/home" info="Server" IconComponent={PiComputerTowerDuotone }></Cards>
              </div>
            </BackgroundComponenteCabeçalho>
           
           
           



          
    </div>
  )
}

export default AtalhosMain