import React from 'react';
import "./Cards.scss";
import { Link } from 'react-router-dom';


function Cards({ rota, info, IconComponent }) {
  return (
    <div className='HomeComponents'>
      <Link to={rota}>
        <div className='HomeComponents-1'>
        {<IconComponent style={{ width: '20px', height: '20px' }} />}
          <h1>{info}</h1>
        </div>
      </Link>
    </div>
  );
}

export default Cards;
