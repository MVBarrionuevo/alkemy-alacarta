import React, { useEffect, useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { SearchBar } from '../components/SearchBar';
import axios from 'axios';
import { Recipe } from '../components/Recipe';
import { MenuService } from '../services/MenuService';
import Swal from 'sweetalert2';

function SearchScreen() {

    const [searchParams, setSearchParams] = useSearchParams();
    const [recipes, setRecipes] = useState([]);
    const navigate = useNavigate();
    const query = searchParams.get('query');

    if (localStorage.getItem('loginToken') == null) {
        navigate('/login');
    }

    useEffect(() => {
        console.log('Buscando en API: ' + query);

        setRecipes([]);
        axios.get(`https://api.spoonacular.com/recipes/complexSearch?apiKey=336f1c425cbc479eb47dcc4d87e67068&addRecipeInformation=true&query=${query}`)
            .then((response) => {
                console.log(response.data)
                setRecipes(response.data.results);
            })
            .catch((error) => {
                console.error(error);
            });

    }, [query]);


    return (
        <React.Fragment>
            <SearchBar initialValue={query} onSubmit={(value) => {
                navigate({
                    pathname: '/search',
                    search: 'query=' + value
                });
            }} />

            <div><h1 className='titleScreen'>Resultados de búsqueda para: "{query}"</h1></div>

            <div className='content-wrap'>

                {recipes.map((recipe, i) => {
                    return (
                        <Recipe
                            key={i}
                            id={recipe.id}
                            title={recipe.title}
                            image={recipe.image}
                            summary={recipe.summary}
                            vegan={recipe.vegan}
                            pricePerServing={recipe.pricePerServing}
                            readyInMinutes={recipe.readyInMinutes}
                            healthScore={recipe.healthScore}
                            showAddButton={true}
                            showDeleteButton={false}
                            onAddClick={(id) => {
                                const recipeToAdd = recipes.find((recipe) => {
                                    return recipe.id == id;
                                });

                                const added = MenuService.addRecipeToMenu(recipeToAdd);
                                if (added) {
                                    navigate('/');
                                } else {
                                    Swal.fire({
                                        icon: 'error',
                                        title: 'Oops...',
                                        html: `No se pudo agregar el plato al menú por alguna de las siguientes razones:
                                        <br /><br />
                                        <ul class="list-group">
                                            <li class="list-group-item d-flex justify-content-between align-items-center">
                                                Ya hay más de 2 platos veganos en el menú.
                                            </li>
                                            <li class="list-group-item d-flex justify-content-between align-items-center">
                                                Ya hay más de 2 platos no veganos en el menú.
                                            </li>
                                            <li class="list-group-item d-flex justify-content-between align-items-center">
                                                Ya hay 4 platos en el menú.
                                            </li>
                                        </ul>`
                                    });
                                }
                            }}
                        />
                    )
                })}

            </div>

        
        </React.Fragment>
    );
}

export { SearchScreen };