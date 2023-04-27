import React from "react";

export const Liga = () => {
  const googleURL =
    "https://www.google.com/search?q=uefa&oq=uefa&aqs=chrome.0.35i39j46i340i512l5j0i512j69i60.1423j1j7&sourceid=chrome&ie=UTF-8#sie=lg;/g/11mvmxlddg;2;/m/0c1q0;st;fp;1;;;";

  const openGooglePage = () => {
    window.open(googleURL, "_blank");
  };

  return (
    <div className='flex justify-center'>
      <button onClick={openGooglePage}>Abrir Página de Google</button>
    </div>
  );
};
