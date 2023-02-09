import React from 'react';

function Notes() {
  return (
    <>
      <li className='notepad-infos'>
        <div>
          <strong>Fazer Compras</strong>
          <div>x</div>
        </div>

        <textarea>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minima
          laborum repudiandae, illo omnis officia adipisci reiciendis officiis
          culpa assumenda perspiciatis nobis expedita, sapiente labore?
          Perspiciatis repudiandae cumque optio iure quod!
        </textarea>
        <span>!</span>
      </li>
    </>
  );
};

export default Notes;
