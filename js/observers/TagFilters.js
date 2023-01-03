import RecipeFactory from "../factories/Recipe.js";
import TagDisplay from "./TagDisplay.js";
import SearchBarTag from "./SearchBarTag.js";

export default class TagFilters extends TagDisplay {
    constructor(Recipes) {
        super();
        this.$recipesNoFind = document.querySelector('.recipes_nofind');
        this.$recipesGallery = document.querySelector(".recipes_gallery");

        // this.ingredientTopicCard = new TopicCard("ingredient", Recipes);
        // this.applianceTopicCard = new TopicCard("appliance", Recipes);
        // this.ustensilTopicCard = new TopicCard("ustensil", Recipes);
        
        // this.topicCards = [this.ingredientTopicCard, this.applianceTopicCard, this.ustensilTopicCard];
        this._recipes = Recipes;
        this.searchBar = new SearchBarTag();
    };
    
    // tagFilters(data) {
        //     const ingredientTagsDisplay = this.ingredientTopicCard.topicSugestionButtons.filter(topicSB => topicSB.tag.isDisplay);
        //     const applianceTagsDisplay = this.applianceTopicCard.topicSugestionButtons.filter(topicSB => topicSB.tag.isDisplay);
        //     const ustensilTagsDisplay = this.ustensilTopicCard.topicSugestionButtons.filter(topicSB => topicSB.tag.isDisplay);
        //     const tagsDisplay = [...ingredientTagsDisplay, ...applianceTagsDisplay,...ustensilTagsDisplay];
        //     let newData = data;
        //     tagsDisplay.forEach(topicSB => newData = topicSB.tag.filterTag.filterTag(newData));
        //     return newData;
    // };
    
    displayTopicSugestionButtons(data) {
        this.topicCards.forEach(topicCard => {
            topicCard.displayedRecipes = data;
            topicCard.displayTopicSugestionButtons();
        })
    };
    
    clearRecipesGallery() {
        this.$recipesGallery.innerHTML = "";
    };
    
    displayRecipes(Recipes) {
        this.TagDisplay = new TagDisplay(Recipes);
        this.TagDisplay.onSelectTag();
        const tagFiltersData = this.tagFilters(Recipes)
        this.displayTopicSugestionButtons(tagFiltersData);

        this.clearRecipesGallery();
        // if (tagFiltersData.length === 0) {
        //     this.$recipesNoFind.style.display = "block";
        // } else {
        //     this.$recipesNoFind.style.display = "none";
            console.log(tagFiltersData);
            tagFiltersData.forEach(recipe => {
                const recipeTemplate = new RecipeFactory(recipe);
                this.$recipesGallery.innerHTML += recipeTemplate.RecipeCardDOM();
            })
        // };
    };

    $eventSearchBar(){
        const _this = this    
        _this.searchBar.$input.addEventListener("input", function(event){
            const string = event.target.value    
            if(string.length >= 3){
                _this.recipesToDisplay = _this.searchBar.filterRecipes(string, _this.Recipes)       
            }else{
                _this.recipesToDisplay = _this.Recipes
            }      
                _this.displayRecipes(_this.recipesToDisplay)
            })
    } 

    // $openTopicCard(topicCardToOpen, topicCard2, topicCard3) {
    //     topicCardToOpen.$topicCardClose.addEventListener("click", function() {
    //         topicCardToOpen.openTopicCard()
    //         topicCard2.closeTopicCard()
    //         topicCard3.closeTopicCard()
    //     })
    // }
    
    $clickOnTopicSugestionButton() {
        const _this = this;
        _this.topicCards.forEach(topicCard => {
            topicCard.topicSugestionButtons.forEach(topicSB => {
                topicSB.$topicSugestionButton.addEventListener("click", function() {
                    topicSB.onClickTopicSugestionButton();
                    topicCard.closeTopicCard();
                    _this.displayRecipes(_this.recipesToDisplay);
                });
            });
        });
    };
    
    $clickOnTag() {
        const _this = this;
        this.topicCards.forEach(topicCard => {
            topicCard.topicSugestionButtons.forEach(topicSB => {
                topicSB.tag.$tag.addEventListener("click", function() {
                    topicSB.deleteTag()
                    _this.displayRecipes(_this.recipesToDisplay)
                })
            })
        })
    }

    onSelectTag() {
        // this.ingredientTopicCard.init();
        // this.applianceTopicCard.init();
        // this.ustensilTopicCard.init();
        this.displayRecipes(this._recipes);
        // this.$eventSearchBar();
        // this.$openTopicCard(this.ingredientTopicCard, this.applianceTopicCard, this.ustensilTopicCard);
        // this.$openTopicCard(this.ustensilTopicCard, this.ingredientTopicCard, this.applianceTopicCard);
        // this.$openTopicCard(this.applianceTopicCard, this.ustensilTopicCard, this.ingredientTopicCard);
        this.$clickOnTopicSugestionButton();
        this.$clickOnTag();
    }
}