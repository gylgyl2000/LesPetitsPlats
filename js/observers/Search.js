import RecipeSearch from "./RecipeSearch.js";
import RecipeFactory from "../factories/Recipe.js";

export default class Search {
    constructor(Recipes) {
        this.Recipes = Recipes;

        this.$recipesSearch = document.querySelector(".recipes_search");
        this.$recipesGallery = document.querySelector(".recipes_gallery");
        this.$input = document.querySelector('.recipes_search input');
        this.$recipesNoFind = document.querySelector('.recipes_nofind');
        this.RecipeSearch = new RecipeSearch(Recipes);
    };

    search(query) {
        let SearchedRecipes = this.RecipeSearch.filter(query);
        this.displayRecipes(SearchedRecipes);
    };
    
    clearRecipesGallery() {
        this.$recipesGallery.innerHTML = "";
    };

    displayRecipes(Recipes) {
        this.clearRecipesGallery();
        Recipes.forEach(Recipe => {
            const recipeTemplate = new RecipeFactory(Recipe);
            this.$recipesGallery.innerHTML += recipeTemplate.RecipeCardDOM();
        })
    };

    onSearch() {
        this.$recipesSearch
            .querySelector("form")
            .addEventListener('keyup', e => {
                const query = e.target.value;
                // console.log(this.RecipeSearch.filter(query));
                let searchData = this.RecipeSearch.filter(query);
                if (searchData.length === 0) {
                    this.$recipesNoFind.style.display = "block"
                } else {
                    this.$recipesNoFind.style.display = "none"
                }
                if (query.length >= 3) {
                    this.search(query);
                } else if (query.length === 0) {
                    this.displayRecipes(this.Recipes);
                }
            })
    };
}