export default class FilterTag {
    constructor() {    
    };
  
    isInSentence(string, sentence) {
        const stringToTest = string.toLowerCase().replace(/^ */, " ");
        const sentenceToTest1 = " " + sentence.toLowerCase();
        const sentenceToTest2 = " " + sentence.toLowerCase()
            .trim()
            .normalize('NFD')
            .replace(/[\u0300-\u036f]/g, '')
            .replace(/\s-/g,''); 
        return sentenceToTest1.includes(stringToTest) ||
            sentenceToTest2.includes(stringToTest);
    };
  
    ingredientsIntoSentence(recipe) {
        const ingredients = recipe.ingredients.map(ingredient =>
            ingredient.ingredient);
        return ingredients.join(' ');
    };
};