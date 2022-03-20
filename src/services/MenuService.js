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

    deleteRecipeFromMenu: () => {
    },

    getMenuTotalPrice: () => {

    },

    getMenuAvgTime: () => {

    },

    getMenuAvgHealthScore: () => {

    }
};

export { MenuService };