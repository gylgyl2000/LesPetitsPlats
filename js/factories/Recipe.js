import RecipeModel from "../models/Recipe.js";
import RecipeTemplate from "../templates/Recipe.js"

export default class RecipeFactory {
    constructor(data) {
        this._data = new RecipeModel(data);

        return new RecipeTemplate(this._data);
    }
}