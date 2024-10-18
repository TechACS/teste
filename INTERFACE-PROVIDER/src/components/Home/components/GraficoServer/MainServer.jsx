import React, { useRef } from 'react';
import './MainServer.scss';
import ServeraRedeHome from '../Server/ServeraRedeHome';
import DiscoServer from './DiscoServer/DiscoServer';
import MemoriaServer from './MemoriaServer/MemoriaServer';

import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";

import Usuarios from '../usuarios/Usuarios';

function MainServer() {
  const scrollRef = useRef(null);

  const scrollLeft = () => {
    scrollRef.current.scrollBy({
      left: -200, // Ajusta a quantidade de rolagem
      behavior: 'smooth',
      
    });
  };

  const scrollRight = () => {
    scrollRef.current.scrollBy({
      left: 200, // Ajusta a quantidade de rolagem
      behavior: 'smooth',
    });
  };

  return (
    <div className="MainGraficoServerContainer">
      {/* Novo container flexível para alinhar os gráficos e o ServerHome */}
      <div className="MainGraficoServerContent">
        <div className="MainGraficoServer-1">
          <div id="MainGraficoServer-h1">
            <h1>Gráfico Server</h1>
          </div>

          {/* Container dos gráficos */}
          <div className="scrollWrapper">
            <button className="scrollButton left" onClick={scrollLeft}>
            <FaArrowLeft style={{width: "20px", height : "20px"}}/>
            </button>

            {/* Apenas os gráficos estão dentro da rolagem */}
            <div className="MainGraficoServer-2" ref={scrollRef}>
              
              
             
            <span>
              <MemoriaServer />
                <h3>
                    CPU
                </h3>
              </span>
              <span>
              <DiscoServer />
                <h3>
                  Disco server
                </h3>
              </span>

              <span>
              <MemoriaServer />
                <h3>
                    Memoria server
                </h3>
              </span>

              <span>
              <MemoriaServer />
                <h3>
                    Temperatura
                </h3>
              </span>
             
            </div>

            <button className="scrollButton right" onClick={scrollRight}>
            <FaArrowRight style={{width: "20px", height : "20px"}}/>
            </button>
          </div>
        </div>

        {/* O ServerHome agora está no mesmo container flexível */}
        <div className="ServerHomeContainer">
        <ServeraRedeHome />
        <Usuarios />
        </div>
      </div>
    </div>
  );
}

export default MainServer;
