import React, { useEffect, useState } from 'react';
import { Menu } from '../components/Menu';
import { MenuService } from '../services/MenuService';
import { SearchBar } from '../components/SearchBar';
import { Link, useNavigate } from 'react-router-dom';

function HomeScreen() {

    const [recipes, setRecipes] = useState([]);
    const navigate = useNavigate();

    if (localStorage.getItem('loginToken') == null) {
        navigate('/login');
    }

    useEffect(() => {
        setRecipes(MenuService.listMenuRecipes());
    }, []);

    const onDeleteRecipe = (id) => {
        MenuService.deleteRecipeFromMenu(id)
        setRecipes(MenuService.listMenuRecipes());
    }

    return (
        <React.Fragment>
            <SearchBar onSubmit={(value) => {
                console.log('Se realizo la busqueda con el valor: ' + value);
                navigate({
                    pathname: '/search',
                    search: 'query=' + value
                });
            }} />

            <div className='info-container'>
                <div className='box-infoContainer'>
                    <i className="fa-solid fa-circle-dollar-to-slot"></i>
                    <div className='title-infoContainer'>Precio Total</div>
                    <div><h5 className="card-title">${MenuService.getMenuTotalPrice()}</h5></div>
                </div>
                <div className='box-infoContainer'>
                    <i className="fa-solid fa-stopwatch"></i>
                    <div className='title-infoContainer'>Promedio preparación</div>
                    <div><h5 className="card-title">{MenuService.getMenuAvgTime()} minutos</h5></div>
                </div>
                <div className='box-infoContainer'>
                    <i className="fa-solid fa-star-half-stroke"></i>
                    <div className='title-infoContainer'>Health Score</div>
                    <div><h5 className="card-title">{MenuService.getMenuAvgHealthScore()} pts</h5></div>
                </div>
            </div>

            <Menu recipes={recipes} onDeleteRecipe={onDeleteRecipe} />

            <footer>
                <div className=" footer card text-center">
                    <div className="card-header">
                        <div>Encontranos en nuestras redes sociales!</div>
                        <div className='i-header'>
                            <i className="fa-brands fa-instagram"></i>
                            <i className="fa-brands fa-twitter"></i>
                            <i className="fa-brands fa-facebook-f"></i>
                            <i className="fa-solid fa-at"></i>
                        </div>
                    </div>
                    <div className="card-body">
                        <div className='info-card'>
                            <h1>Hotel Victoria</h1>
                            <p>Hotel 5 estrellas, ubicado en la capital de Córdoba. Se destaca principalmente por su gastronomía.</p>
                            <p>App <strong>ALACARTA</strong>, exclusiva para uso interno restaurante.</p>
                        </div>
                        <div className='links-card'>
                            <h1>Links</h1>
                            <div className='a-links'>
                                <Link to="/">
                                    Home
                                </Link>
                            </div>
                        </div>
                        <div className='contact-card'>
                            <h1>Contacto</h1>
                            <div className='info-contact'>
                                <div className='flex'>
                                    <i className="fa-solid fa-location-dot"></i>
                                    <div>Córdoba, Argentina.</div>
                                </div>
                                <div className='flex'>
                                    <i className="fa-solid fa-mobile-screen-button"></i>
                                    <div>+54 9 351 6 377841</div>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className="card-footer text-muted bg-dark">
                        © 2022 Copyright: vikibarrionuevo@gmail.com
                    </div>
                </div>
            </footer>
        </React.Fragment >

    );
}

export { HomeScreen };