import React, { useEffect, useState } from 'react';
import { Field, Form, Formik } from 'formik';
import { Menu } from '../components/Menu';
import { MenuService } from '../services/MenuService';

function HomeScreen() {

    const [recipes, setRecipes] = useState([]);

    // MenuService.addRecipeToMenu({
    //     "id": 716428,
    //     "title": "Pasta with Garlic, Scallions, Cauliflower & Breadcrumbs",
    //     "image": "https://spoonacular.com/recipeImages/716429-556x370.jpg",
    //     "imageType": "jpg",
    //     "servings": 2,
    //     "readyInMinutes": 45,
    //     "license": "CC BY-SA 3.0",
    //     "sourceName": "Full Belly Sisters",
    //     "sourceUrl": "http://fullbellysisters.blogspot.com/2012/06/pasta-with-garlic-scallions-cauliflower.html",
    //     "spoonacularSourceUrl": "https://spoonacular.com/pasta-with-garlic-scallions-cauliflower-breadcrumbs-716429",
    //     "aggregateLikes": 209,
    //     "healthScore": 19.0,
    //     "spoonacularScore": 83.0,
    //     "pricePerServing": 163.15,
    //     "analyzedInstructions": [],
    //     "cheap": false,
    //     "creditsText": "Full Belly Sisters",
    //     "cuisines": [],
    //     "dairyFree": false,
    //     "diets": [],
    //     "gaps": "no",
    //     "glutenFree": false,
    //     "instructions": "",
    //     "ketogenic": false,
    //     "lowFodmap": false,
    //     "occasions": [],
    //     "sustainable": false,
    //     "vegan": false,
    //     "summary": "Pasta with Garlic, Scallions, Cauliflower & Breadcrumbs might be a good recipe to expand your main course repertoire. One portion of this dish contains approximately <b>19g of protein </b>,  <b>20g of fat </b>, and a total of  <b>584 calories </b>. For  <b>$1.63 per serving </b>, this recipe  <b>covers 23% </b> of your daily requirements of vitamins and minerals. This recipe serves 2. It is brought to you by fullbellysisters.blogspot.com. 209 people were glad they tried this recipe. A mixture of scallions, salt and pepper, white wine, and a handful of other ingredients are all it takes to make this recipe so scrumptious. From preparation to the plate, this recipe takes approximately  <b>45 minutes </b>. All things considered, we decided this recipe  <b>deserves a spoonacular score of 83% </b>. This score is awesome. If you like this recipe, take a look at these similar recipes: <a href=\"https://spoonacular.com/recipes/cauliflower-gratin-with-garlic-breadcrumbs-318375\">Cauliflower Gratin with Garlic Breadcrumbs</a>, < href=\"https://spoonacular.com/recipes/pasta-with-cauliflower-sausage-breadcrumbs-30437\">Pasta With Cauliflower, Sausage, & Breadcrumbs</a>, and <a href=\"https://spoonacular.com/recipes/pasta-with-roasted-cauliflower-parsley-and-breadcrumbs-30738\">Pasta With Roasted Cauliflower, Parsley, And Breadcrumbs</a>.",
    // });

    // MenuService.addRecipeToMenu({
    //     "id": 716425,
    //     "title": "Pasta with Garlic, Scallions, Cauliflower & Breadcrumbs",
    //     "image": "https://spoonacular.com/recipeImages/716429-556x370.jpg",
    //     "imageType": "jpg",
    //     "servings": 2,
    //     "readyInMinutes": 100,
    //     "license": "CC BY-SA 3.0",
    //     "sourceName": "Full Belly Sisters",
    //     "sourceUrl": "http://fullbellysisters.blogspot.com/2012/06/pasta-with-garlic-scallions-cauliflower.html",
    //     "spoonacularSourceUrl": "https://spoonacular.com/pasta-with-garlic-scallions-cauliflower-breadcrumbs-716429",
    //     "aggregateLikes": 209,
    //     "healthScore": 50.0,
    //     "spoonacularScore": 83.0,
    //     "pricePerServing": 200.15,
    //     "analyzedInstructions": [],
    //     "cheap": false,
    //     "creditsText": "Full Belly Sisters",
    //     "cuisines": [],
    //     "dairyFree": false,
    //     "diets": [],
    //     "gaps": "no",
    //     "glutenFree": false,
    //     "instructions": "",
    //     "ketogenic": false,
    //     "lowFodmap": false,
    //     "occasions": [],
    //     "sustainable": false,
    //     "vegan": false,
    //     "summary": "Pasta with Garlic, Scallions, Cauliflower & Breadcrumbs might be a good recipe to expand your main course repertoire. One portion of this dish contains approximately <b>19g of protein </b>,  <b>20g of fat </b>, and a total of  <b>584 calories </b>. For  <b>$1.63 per serving </b>, this recipe  <b>covers 23% </b> of your daily requirements of vitamins and minerals. This recipe serves 2. It is brought to you by fullbellysisters.blogspot.com. 209 people were glad they tried this recipe. A mixture of scallions, salt and pepper, white wine, and a handful of other ingredients are all it takes to make this recipe so scrumptious. From preparation to the plate, this recipe takes approximately  <b>45 minutes </b>. All things considered, we decided this recipe  <b>deserves a spoonacular score of 83% </b>. This score is awesome. If you like this recipe, take a look at these similar recipes: <a href=\"https://spoonacular.com/recipes/cauliflower-gratin-with-garlic-breadcrumbs-318375\">Cauliflower Gratin with Garlic Breadcrumbs</a>, < href=\"https://spoonacular.com/recipes/pasta-with-cauliflower-sausage-breadcrumbs-30437\">Pasta With Cauliflower, Sausage, & Breadcrumbs</a>, and <a href=\"https://spoonacular.com/recipes/pasta-with-roasted-cauliflower-parsley-and-breadcrumbs-30738\">Pasta With Roasted Cauliflower, Parsley, And Breadcrumbs</a>.",
    // });

    useEffect(() => {
        setRecipes(MenuService.listMenuRecipes());
    }, []);

    const onDeleteRecipe = (id) => {
        MenuService.deleteRecipeFromMenu(id)
        setRecipes(MenuService.listMenuRecipes());
    }

    return (
        <React.Fragment>

            <div className="jumbotron jumbotron-fluid">
                <div className="container">
                    <h1 className="display-4 jumbotron-title">ALACARTA</h1>
                    <p className="lead">Encontrá nuestras especialidades del menú.</p>
                    <nav className="navbar">
                        <div className=" search-bar container-fluid">

                            <Formik
                                initialValues={{ search: '' }}
                                validate={(values) => {
                                    const errors = { search: false };
                                    if (values.search.length <= 2) {
                                        errors.search = true;
                                    }

                                    return errors;
                                }}
                            >
                                {({ errors, touched }) => {
                                    return (

                                        <Form>
                                            <Field name="search" />
                                            <button type="submit" className="btn btn-success" disabled={errors.search}>Buscar</button>
                                        </Form>
                                    )
                                }}

                            </Formik>

                            {/* <form className="d-flex">
                                <input className="form-control me-2" id="search" type="search" name="search" placeholder="Plato" aria-label="Search" />
                                <button className="btn btn-success" type="submit">Buscar</button>
                            </form> */}
                        </div>
                    </nav>
                </div>
            </div>

            <div className='d-flex'>
                <div className="card">
                    <div className="card-header">
                        Precio Total del Menu
                    </div>
                    <div className="card-body">
                        <h5 className="card-title">${MenuService.getMenuTotalPrice()}</h5>
                    </div>
                </div>

                <div className="card">
                    <div className="card-header">
                        Promedio de tiempo de Preparacion
                    </div>
                    <div className="card-body">
                        <h5 className="card-title">{MenuService.getMenuAvgTime()} minutos</h5>
                    </div>
                </div>

                <div className="card">
                    <div className="card-header">
                        Promedio de Health Score
                    </div>
                    <div className="card-body">
                        <h5 className="card-title">{MenuService.getMenuAvgHealthScore()} pts</h5>
                    </div>
                </div>
            </div>

            <Menu recipes={recipes} onDeleteRecipe={onDeleteRecipe} />
        </React.Fragment >

    );
}

export { HomeScreen };