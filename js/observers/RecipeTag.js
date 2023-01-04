import FilterTag from "./FilterTag.js";
export default class RecipeTag extends FilterTag {
    constructor(name, type) {
        super();
        this._type = type;
        this._name = name;
    };

    filterTag(query) {
        if (this._type === "ingredient") {
            return query.filter(recipe => this.isInSentence(this._name, this.ingredientsIntoSentence(recipe)));
        } else if (this._type === "appliance") {
            return query.filter(recipe => this.isInSentence(this._name, recipe.appliance));
        } else if (this._type === "ustensil") {
            return query.filter(recipe => this.isInSentence(this._name, recipe.ustensils.join(' ')));
        } else {
            console.log(`filterTag: ${this._type} is not correct`);
        };
    };
};