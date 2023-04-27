import React from "react";
import Image from "next/image";

export const Estadisticas = ({ squad }) => {
  const imagePath = `../public/histogramas/Edad de las jugadoras del ${squad}.jpeg`;

  return (
    <div className='flex justify-center'>
      <Image
        src={imagePath}
        alt={`Edad de las jugadoras del ${squad}`}
        style={{ width: "100%", maxWidth: "400px" }}
      />
    </div>
  );
};
