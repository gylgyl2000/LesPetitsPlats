import Filter from "./Filter.js";

export default class RecipeSearch extends Filter {
    constructor(Recipes) {
        super(Recipes);
    };

    filterRecipes(query) {
        return this.Recipes.filter(Recipe =>
            this.formatedString(Recipe.name).includes(query.toLowerCase()) ||
            this.formatedString(Recipe.description).includes(query.toLowerCase())  ||
            this.formatedString(this.recipeIngredients(Recipe)).includes(query.toLowerCase())
                
        );
    };
};