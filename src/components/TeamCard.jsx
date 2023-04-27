import React, { useState } from 'react';
import { TablePlayers } from './TablePlayers';
import { DataSquad } from './DataSquad';
import { Estadisticas } from './Estadisticas';
import { Liga } from './Liga';

export const TeamCard = ({ squad }) => {
  const [selectedType, setSelectedType] = useState('General');

  const handleTypeSelection = (type) => {
    setSelectedType(type);
  };

  return (
    <div>
      <h2 className="title-squad flex justify-center m-4">{squad.squad}</h2>
      <div className="buttons-type flex justify-center">
        <button
          className={
            selectedType === 'General' ? 'btn-type-active' : 'btn-type'
          }
          onClick={() => handleTypeSelection('General')}
        >
          General
        </button>

        <button
          className={
            selectedType === 'Estadisticas' ? 'btn-type-active' : 'btn-type'
          }
          onClick={() => handleTypeSelection('Estadisticas')}
        >
          Estadísticas
        </button>

        <button
          className={selectedType === 'Liga' ? 'btn-type-active' : 'btn-type'}
          onClick={() => handleTypeSelection('Liga')}
        >
          Liga
        </button>
      </div>

      {selectedType === 'General' && <DataSquad squad={squad} />}
      {selectedType === 'Estadisticas' && <Estadisticas squad={squad} />}
      {selectedType === 'Liga' && <Liga squad={squad} />}

      <TablePlayers squad={squad} />
    </div>
  );
};
