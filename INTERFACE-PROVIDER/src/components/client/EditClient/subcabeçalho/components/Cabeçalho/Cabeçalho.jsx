import React from 'react'
import ClienteComponetecabecalho from '../../../../Cabeçalho/ClienteComponetCabeçalho'
function Cabeçalho( {childrem}) {
  return (
    <div>
        <ClienteComponetecabecalho>
                    {childrem}
        </ClienteComponetecabecalho>
    </div>
  )
}

export default Cabeçalho