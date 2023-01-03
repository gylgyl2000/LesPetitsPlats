import FilterTag from "./FilterTag.js";

export default class SearchBarTag extends FilterTag {
    constructor() {
        super()
        this.$input = document.querySelector('.search input')
    }
    filterSearchBar(string, data){
        return data.filter(recipe => this.isInSentence(string, recipe.name) || this.isInSentence(string, recipe.description) || this.isInSentence(string, this.ingredientsIntoSentence(recipe)) )
    }
}