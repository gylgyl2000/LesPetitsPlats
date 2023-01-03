import recipes from "../../data/recipes.js";
import RecipeTemplate from "../templates/Recipe.js";

class Recipe {
    constructor() {
        this._recipes = recipes;

        this.$recipe = document.querySelector(".recipe");
    }
    get id() { return this._id; }
    getReciveById(id) {
        const recipes = this._recipes
        const reciveById = recipes.find(recive => recive.id == id)
        return reciveById
    }

    displayRecipe(recipe) {
        const Template = new RecipeTemplate(recipe)
        this.$recipe.innerHTML = Template.RecipeDom();
    }
    async init() {
        const URLSearchParams = new URL(window.location.href).searchParams;
        const id = URLSearchParams.get("id");

        const recipe = this.getReciveById(id);

        this.displayRecipe(recipe);
    }
}

const app = new Recipe();
app.init();