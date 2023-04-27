import React from "react";

export const TablePlayers = () => {
  return (
    <div>
      {/* jugadoras.map((img, id)=> (  
            <div key={jugadora.id}>
         )*/}

      <img />
      <h2 className='m-4 flex justify-center'>Jugadoras</h2>
      <div className='flex justify-center'>
        <div className='carousel carousel-center flex justify-center max-w-md p-4 m-2 space-x-4 bg-neutral rounded-box'>
          <div className='carousel-item w-20'>
            <img
              src='https://images.daznservices.com/di/library/DAZN_News/b8/37/fc-barcelona-la-liga_1jxdxq19a7z4i1mdvawqvnk2js.jpg?t=-2107146871'
              alt='barça'
              className='rounded-box'
            />
          </div>
          <div className='carousel-item w-20'>
            <img
              src='https://images.daznservices.com/di/library/DAZN_News/b8/37/fc-barcelona-la-liga_1jxdxq19a7z4i1mdvawqvnk2js.jpg?t=-2107146871'
              className='rounded-box'
            />
          </div>
        </div>
      </div>
    </div>
    /* <Link to={`/TeamCard/${squad.id}`}></Link> */
  );
};
