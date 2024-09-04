import React, { useState } from 'react';
import './FormDispositivos.scss';
import FormButtons5 from '../../../../../BUTTONS/FormButton';

const FormDispositivos = ({ onCancel }) => {
  const [formData, setFormData] = useState({
    cpf: '',
    serial: '',
    userPPPOE: '',
    passPPPOE: '',
    ip: '',
    dns: '',
    modelo: '',
    fabricante: '',
    ssid24GName: '',
    ssid24GPassword: '',
    ssid5GName: '',
    ssid5GPassword: '',
    ssid24GName2: '',
    ssid24GPassword2: '',
    ssid5GName2: '',
    ssid5GPassword2: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Dados enviados:', formData);
  };

  return (
    <div className='FormDispositivos'>
      <form onSubmit={handleSubmit}>
        <div className='FormDispositivos-1'>
          <div className='FormDispositivos-1-1'>
            <h1>CPF</h1>
            <input 
              type="text" 
              name="cpf"
              placeholder="Digite o CPF" 
              value={formData.cpf}
              onChange={handleChange} 
            />
          </div>
          
          <div className='FormDispositivos-1-1'>
            <h1>Serial</h1>
            <input 
              type="text" 
              name="serial"
              placeholder="Digite o Serial" 
              value={formData.serial}
              onChange={handleChange} 
            />
          </div>
        </div>

        <div className='FormDispositivos-2'>
          <div className='FormDispositivos-2-1'>
            <div className='FormDispositivos-2-2'>
              <h1>User PPPOE</h1>
              <input 
                type="text" 
                name="userPPPOE"
                placeholder="Digite o User PPPOE" 
                value={formData.userPPPOE}
                onChange={handleChange} 
              />
            </div>

            <div className='FormDispositivos-2-2'>
              <h1>Pass PPPOE</h1>
              <input 
                type="text" 
                name="passPPPOE"
                placeholder="Digite a Senha PPPOE" 
                value={formData.passPPPOE}
                onChange={handleChange} 
              />
            </div>
          </div>

          <div className='FormDispositivos-2-1'>
            <div className='FormDispositivos-2-2'>
              <h1>IP</h1>
              <input 
                type="text" 
                name="ip"
                placeholder="Digite o IP" 
                value={formData.ip}
                onChange={handleChange} 
              />
            </div>

            <div className='FormDispositivos-2-2'>
              <h1>DNS</h1>
              <input 
                type="text" 
                name="dns"
                placeholder="Digite o DNS" 
                value={formData.dns}
                onChange={handleChange} 
              />
            </div>
          </div>

          <div className='FormDispositivos-2-1'>
            <div className='FormDispositivos-2-2'>
              <h1>Modelo</h1>
              <input 
                type="text" 
                name="modelo"
                placeholder="Digite o Modelo" 
                value={formData.modelo}
                onChange={handleChange} 
              />
            </div>
            
            <div className='FormDispositivos-2-2'>
              <h1>Fabricante</h1>
              <input 
                type="text" 
                name="fabricante"
                placeholder="Digite o Fabricante" 
                value={formData.fabricante}
                onChange={handleChange} 
              />
            </div>
          </div>
        </div>

        <div className='FormDispositivos-3-0'>
          <div className='FormDispositivos-3'>
            <div className='FormDispositivos-3-1'>
              <div className='FormDispositivos-3-2'>
                <h1>Name SSID 2.4G</h1>
                <input 
                  type="text" 
                  name="ssid24GName"
                  placeholder="Digite o nome da rede 2.4G" 
                  value={formData.ssid24GName}
                  onChange={handleChange} 
                />
              </div>

              <div className='FormDispositivos-3-2'>
                <h1>Password 2.4G</h1>
                <input 
                  type="text" 
                  name="ssid24GPassword"
                  placeholder="Digite a Senha SSID 2.4G" 
                  value={formData.ssid24GPassword}
                  onChange={handleChange} 
                />
              </div>
            </div>

            <div className='FormDispositivos-3-1'>
              <div className='FormDispositivos-3-2'>
                <h1>Name SSID 5G</h1>
                <input 
                  type="text" 
                  name="ssid5GName"
                  placeholder="Digite o nome da rede 5G" 
                  value={formData.ssid5GName}
                  onChange={handleChange} 
                />
              </div>

              <div className='FormDispositivos-3-2'>
                <h1>Password 5G</h1>
                <input 
                  type="text" 
                  name="ssid5GPassword"
                  placeholder="Digite a Senha SSID 5G" 
                  value={formData.ssid5GPassword}
                  onChange={handleChange} 
                />
              </div>
            </div>
          </div>

          <div className='FormDispositivos-3'>
            <div className='FormDispositivos-3-1-btn'>
              <div className='FormDispositivos-3-2'>
                
                <button>Listar Dispositivos</button>
              </div>

              <div className='FormDispositivos-3-2'>
                
                <button>Associar Dispositivo</button>
              </div>
            </div>

            <div className='FormDispositivos-3-1'>
              <div className='FormDispositivos-3-2'>
                
               <button>Desassociar Dispositivos</button>
              </div>

              <div className='FormDispositivos-3-2'>
                <button>Configurações avançadas</button>
              </div>
            </div>
          </div>
        </div>

        <div>
          <FormButtons5 onCancel={onCancel} />
        </div>
      </form>
    </div>
  );
}

export default FormDispositivos;
