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
        Tiempo de preparacion
        <span>${props.readyInMinutes} minutos</span>
      </li>
      <li class="list-group-item d-flex justify-content-between align-items-center">
        Health Score
        <span>${props.healthScore} pts</span>
      </li>
    </ul>`
    })
  }

  return (
    <div className='content-wrap'>

      <div className="card" style={{ width: "18rem" }}>
        <img src={props.image} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{props.title}</h5>
          <p className="card-text">{props.description}</p>
          <div className="action-buttons">
            {props.showAddButton && (
              <button>
                <i className="fa-solid fa-square-plus"></i>
              </button>
            )}
            {props.showDeleteButton && (
              <button onClick={() => { props.onDeleteClick(props.id) }}>
                <i className="fa-solid fa-square-minus"></i>
              </button>
            )}

            <button onClick={showDetails}>
              <i className="fa-solid fa-circle-info"></i>
            </button>

          </div>
        </div>
      </div>
    </div>
  );
}

export { Recipe };