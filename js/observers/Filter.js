export default class Filter {
    constructor(Recipes) {
        this.Recipes = Recipes;
    };

    filter(query) {
        return this.filterRecipes(query);
    };

    formatedString(string) {
        return string.toLowerCase()
            .trim()
            .normalize('NFD')
            .replace(/[\u0300-\u036f]/g, '')
            .replace(/\s-/g,'')
    };

    recipeIngredients(Recipes) {
        const ingredients = Recipes.ingredients.map(ingredient => 
            ingredient.ingredient)
            return ingredients.join()
    };
}