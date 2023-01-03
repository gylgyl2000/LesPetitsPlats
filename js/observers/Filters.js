import RecipeFactory from "../factories/Recipe.js";
import TagFilters from "./TagFilters.js";

export default class Filters {
    constructor(Recipes) {
        this.Recipes = Recipes;
        this.recipesToDisplay = Recipes;
        
        this.$recipesNoFind = document.querySelector(".recipes_nofind");
        this.$recipesGallery = document.querySelector(".recipes_gallery");

        this.TagFilters = new TagFilters(Recipes);
    };

    

    displayRecipes(Recipes) {
        const tagFiltersData = this.TagFilters.tagFilters(Recipes)
        this.TagFilters.displayTopicSugestionButtons(tagFiltersData);
        this.clearRecipesGallery();
        if (tagFiltersData.length === 0) {
            this.$recipesNoFind.style.display = "block";
        } else {
            this.$recipesNoFind.style.display = "none";
            tagFiltersData.forEach(Recipe => {
                const recipeTemplate = new RecipeFactory(Recipe);
                this.$recipesGallery.innerHTML += recipeTemplate.RecipeCardDOM();
            })
        };
        console.log(tagFiltersData);
    };

    

    

    onFilter() {
        this.displayRecipes(this.recipesToDisplay);
        // this.$clickOnTopicSugestionButton();
        // this.$clickOnTag();
        
        
    }
}