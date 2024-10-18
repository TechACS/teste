import React, { useRef } from 'react';
import './MainGrafico.scss';
import ServerHome from '../Server/ServerClienteHome';
import Online from './ONLINE/Online';
import QTDEquipamentos from './QTDEquipamentos/QTDEquipamentos';
import Sinal from './Sinal/Sinal';

import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
function MainGrafico() {
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
    <div className="MainGraficoContainer">
      {/* Novo container flexível para alinhar os gráficos e o ServerHome */}
      <div className="MainGraficoContent">
        <div className="MainGraficoDevide-1">
          <div id="MainGraficoDevide-h1">
            <h1>Gráfico Devices</h1>
          </div>

          {/* Container dos gráficos */}
          <div className="scrollWrapper">
            <button className="scrollButton left" onClick={scrollLeft}>
            <FaArrowLeft style={{width: "20px", height : "20px"}}/>
            </button>

            {/* Apenas os gráficos estão dentro da rolagem */}
            <div className="MainGraficoDevide-2" ref={scrollRef}>
              <span className=''>
              <Online />
              <h3>ONLINE</h3>
              </span>

              <span className=''>
              <Online />
              <h3>OFFLINE</h3>
              </span>

              <span>
              <QTDEquipamentos />
                <h3>
                  QUANT. DEVICES
                </h3>
              </span>

              <span>
              <Sinal />
                <h3>
                    sinal
                </h3>
              </span>
              <span>
              <Sinal />
                <h3>
                    IPV4 e IPV6
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
        <ServerHome />

        </div>
      </div>
    </div>
  );
}

export default MainGrafico;
