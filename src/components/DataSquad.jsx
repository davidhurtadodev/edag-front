import React from "react";

export const DataSquad = ({ squad }) => {
  return (
    <div className='flex justify-center'>
      <div className='overflow-x-auto'>
        <table className='table w-full mt-6'>
          <tbody>
            {/* row 1 */}
            <tr>
              <td className='font-bold'>Liga</td>
              <td>XX</td>
            </tr>
            {/* row 2 */}
            <tr className='active'>
              <td className='font-bold'>Número de partidos</td>
              <td>XX</td>
            </tr>
            {/* row 3 */}
            <tr>
              <td className='font-bold'>Total Asistencia</td>
              <td>XX</td>
            </tr>
            {/* row 4 */}
            <tr className='active'>
              <td className='font-bold'>Total de goles</td>
              <td>XX</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};
