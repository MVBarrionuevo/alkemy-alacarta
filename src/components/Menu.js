import React from 'react';
import { Recipe } from './Recipe';

function Menu() {
  return (
    <React.Fragment>
      <div className='content-wrap'>
        <Recipe title="Ensalada" description="Hojas verdes, tomates cherrys" />
        <Recipe title="Milanesas" description="Hojas verdes, tomates cherrys" />
        <Recipe title="Lasagna" description="Hojas verdes, tomates cherrys" />
        <Recipe title="Sopa" description="Hojas verdes, tomates cherrys" />
      </div>

    </React.Fragment>

  );
}

export { Menu };