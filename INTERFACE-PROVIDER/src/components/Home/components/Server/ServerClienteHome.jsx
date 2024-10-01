import React from 'react'


import CompCard from "../componentesInfo/CompCard";
function ServerHome() {
  return (
    <div>
          
              <CompCard titulocomponente='Info. Server' 
            info1="Cliente: xxx"
            info2="Hostname: xxxx"
            info3="Versão OS: xxxx"
            info4="Uptime: xxxx"
            info5="Kernel: xxxx"
            
            ></CompCard>
    </div>
  )
}

export default ServerHome