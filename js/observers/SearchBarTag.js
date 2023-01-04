import FilterTag from "./FilterTag.js";

export default class SearchBarTag extends FilterTag {
    constructor() {
        super();
        this.$input = document.querySelector('.search input');
    };
    
    filterSearchBar(string, data) {
        // let newData = [];
        // for (let i = 0; i < data.length; i++) {
        //     if (this.isInSentence(string, data[i].name) ||
        //         this.isInSentence(string, data[i].description) ||
        //         this.isInSentence(string, this.ingredientsIntoSentence(data[i]))) {
        //             newData.push(data[i])
        //         };
        // };
        // return newData;
        return data.filter(recipe =>
            this.isInSentence(string, recipe.name) ||
            this.isInSentence(string, recipe.description) ||
            this.isInSentence(string, this.ingredientsIntoSentence(recipe))
        );
    };
};