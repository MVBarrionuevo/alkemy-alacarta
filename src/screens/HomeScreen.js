import React, { useEffect, useState } from 'react';
import { Menu } from '../components/Menu';
import { Footer } from '../components/Footer';
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

        <Footer />  
        </React.Fragment >

    );
}

export { HomeScreen };