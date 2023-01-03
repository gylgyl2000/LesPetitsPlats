import recipes from "../../data/recipes.js"
import RecipeFactory from "../factories/Recipe.js";
// import RecipeApi from "../api/RecipeApi.js";
import SearchRecipe from "../templates/Search.js";
import Search from "../observers/Search.js";
import FiltersRecipe from "../templates/Filters.js";
import NoFind from "../templates/NoFind.js";
// import TagDisplay from "../observers/TagDisplay.js";
import TagFilters from "../observers/TagFilters.js";


class App {
    constructor() {
        this.$recipesSearch = document.querySelector(".recipes_search");
        this.$recipesFilters = document.querySelector(".recipes_filters");
        this.$recipesNoFind = document.querySelector('.recipes_nofind');
        this.$recipesGallery = document.querySelector(".recipes_gallery");
        this._recipes = recipes
        // this.recipesApi = new RecipeApi('data/recipes.json');
    };
    
    displayRecipes(Recipes) {
        this.$recipesSearch.innerHTML = SearchRecipe.SearchDOM();
        this.$recipesFilters.innerHTML = FiltersRecipe.FiltersDOM();
        this.$recipesNoFind.innerHTML = NoFind.NoFindDOM();
        
        Recipes.map(recipe => {
            const recipeTemplate = new RecipeFactory(recipe);
            this.$recipesGallery.innerHTML += recipeTemplate.RecipeCardDOM();
        });
        this.TagFilters = new TagFilters(Recipes)
        this.TagFilters.onSelectTag();
        
        this.SearchBar = new Search(Recipes);
        this.SearchBar.onSearch();

        // this.TagDisplay = new TagDisplay(Recipes);
        // this.TagDisplay.onSelectTag();
        // const tagFiltersData = this.TagDisplay.tagFilters(this.Recipes)
        // this.TagDisplay.displayTopicSugestionButtons(tagFiltersData);
    
    };
        
    init() {
        // const Recipes = await this.recipesApi.getRecipes();
        this.displayRecipes(this._recipes);
    }
}

const app = new App();
app.init();