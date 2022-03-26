const MenuService = {

    listMenuRecipes: () => {
        const menuRecipesJson = localStorage.getItem('menuRecipes');

        if (menuRecipesJson == null) {
            return [];
        } else {
            return JSON.parse(menuRecipesJson);
        }
    },

    addRecipeToMenu: (recipeToAdd) => {
        const recipes = MenuService.listMenuRecipes();

        if (recipes.length == 4) {
            return false;
        }

        let countVegan = 0;
        let countNotVegan = 0;
        for (let i = 0; i < recipes.length; i++) {
            if (recipes[i].vegan) {
                countVegan++;
            } else {
                countNotVegan++;
            }
        }

        if (recipeToAdd.vegan && countVegan >= 2) {
            return false;
        }

        if (!recipeToAdd.vegan && countNotVegan >= 2) {
            return false;
        }

        recipes.push(recipeToAdd);
        localStorage.setItem('menuRecipes', JSON.stringify(recipes));
        return true;
    },

    deleteRecipeFromMenu: (id) => {

        const recipes = MenuService.listMenuRecipes();
        const filteredRecipes = recipes.filter((recipe) => {
            return recipe.id != id;
        });

        localStorage.setItem('menuRecipes', JSON.stringify(filteredRecipes));
    },

    getMenuTotalPrice: () => {
        const recipes = MenuService.listMenuRecipes();
        let totalPrice = 0;
        for (let i = 0; i < recipes.length; i++) {
            totalPrice += recipes[i].pricePerServing;
        }

        return totalPrice;
    },

    getMenuAvgTime: () => {
        const recipes = MenuService.listMenuRecipes();
        let totalTime = 0;
        for (let i = 0; i < recipes.length; i++) {
            totalTime += recipes[i].readyInMinutes;
        }

        return recipes.length > 0 ? totalTime / recipes.length : 0;
    },

    getMenuAvgHealthScore: () => {
        const recipes = MenuService.listMenuRecipes();
        let totalHealthScore = 0;
        for (let i = 0; i < recipes.length; i++) {
            totalHealthScore += recipes[i].healthScore;
        }

        return recipes.length > 0 ? totalHealthScore / recipes.length : 0;
    }
};

export { MenuService };