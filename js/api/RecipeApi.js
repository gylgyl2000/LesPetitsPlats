import Api from "./Api.js";

export default class RecipeApi extends Api {
    constructor(url) {
        super(url)
    }

    async getRecipes() {
        const { recipes } = await this.get();
        return recipes
    }
    
    async getRecipeById(id) {
        const allRecipes = await this.getRecipes();
        const recipeById = recipes.find(recipe => recipe.id == id);
        return recipeById;
    }
}