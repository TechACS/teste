import React from 'react'
import './Main.scss';
import Descrição from '../DESCRIÇÃO/Descrição'
import Botao from './BOTÃO/Botao'
import Card from './CARD/Card'
function Main() {
  return (
    <div className='Gerenciamento-main-1'>
        <Descrição></Descrição>

        <div className='Gerenciamento-main-2'>
            <Botao></Botao>
            <Card></Card>

        </div>
    </div>
  )
}

export default Main