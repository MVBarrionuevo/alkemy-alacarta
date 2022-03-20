import React from 'react';
import { Menu } from '../components/Menu';

function HomeScreen() {
    return (
        <React.Fragment>
            <div className="header card text-center">
                <div className="card-body">
                    <h5 className="card-title">ALACARTA</h5>
                    <p className="card-text">Disfruta del buen sabor de nuestras comidas</p>
                    <a href="#" className="btn btn-primary">Go somewhere</a>
                </div>
                <nav className="navbar navbar-light bg-light">
                    <div className="container-fluid">
                        <form className="d-flex">
                            <input className="form-control me-2" type="search" placeholder="Comida" aria-label="Search" />
                            <button className="btn btn-outline-success" type="submit">Buscar</button>
                        </form>
                    </div>
                </nav>
            </div>
            <Menu />
        </React.Fragment>

    );
}

export { HomeScreen };