import React from 'react';
import recipe from '../img/recipe1.jpg';

function Recipe(props) {
  return (

    <div className="card" style={{ width: "18rem" }}>
      <img src={recipe} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{props.title}</h5>
        <p className="card-text">{props.description}</p>
        <a href="#" className="btn btn-primary">Go somewhere</a>
      </div>
    </div>



  );
}

export { Recipe };