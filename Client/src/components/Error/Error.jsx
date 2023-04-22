import React from 'react';
import style from './Error.module.css';


const Error = () => {
  return (
    <div className={style.Error}>
      <h1 class='titulo'>Error 404</h1>
      <p class='parrafo'>La página que estás buscando no existe.</p>
    </div>
  );
};

export default Error;