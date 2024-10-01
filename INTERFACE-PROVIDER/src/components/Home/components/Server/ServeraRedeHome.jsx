import React from 'react'

import CompCard from "../componentesInfo/CompCard";
function ServeraRedeHome() {
  return (
    <div>
      <CompCard titulocomponente='Rede Server' 
            info1="IP: xxx"
            info2="Mascara: xxxx"
            info3="Gateway: xxxx"
            info4="DNS Primary: xxxx"
            info5="DNS Secundary: xxxx"
            
            ></CompCard>
    </div>
  )
}

export default ServeraRedeHome