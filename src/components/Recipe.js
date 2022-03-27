import React from 'react';
import Swal from 'sweetalert2'
import { MenuService } from '../services/MenuService';

function Recipe(props) {

  const showDetails = () => {
    Swal.fire({
      title: props.title,
      html: `<ul class="list-group">
      <li class="list-group-item d-flex justify-content-between align-items-center">
        Precio
        <span>$${props.pricePerServing}</span>
      </li>
      <li class="list-group-item d-flex justify-content-between align-items-center">
        Preparación
        <span>${props.readyInMinutes} minutos</span>
      </li>
      <li class="list-group-item d-flex justify-content-between align-items-center">
        Health Score
        <span>${props.healthScore} pts</span>
      </li>
      <li class="list-group-item d-flex">
        <span class="summary">${props.summary}</span>
      </li>
    </ul>`
    })
  }

  return (
    <div className='content-wrap recipes'>
      <div className="card" style={{ width: "18rem" }}>
        <img src={props.image} className="card-img-top" alt="..." />
        <div className="card-body">
          <h1 className="card-text">{props.title}</h1>
          <h5 className="card-title">Vegano: {props.vegan ? 'Si' : 'No'}</h5>
          <h5 className="card-title" dangerouslySetInnerHTML={{ __html: props.summary }}></h5>
          <div className="btn-action">
            <button className="btn btn-outline-secondary" onClick={showDetails}>
              Más info
            </button>
            {props.showAddButton && (
              <button className="btn-add" onClick={() => { props.onAddClick(props.id) }}>
                <i className="fa-solid fa-square-plus"></i>
              </button>
            )}
            {props.showDeleteButton && (
              <button className="btn minus" onClick={() => { props.onDeleteClick(props.id) }}>
                <i className="fa-solid fa-trash-can"></i>
              </button>
            )}


          </div>
        </div>
      </div>
    </div>
  );
}

export { Recipe };