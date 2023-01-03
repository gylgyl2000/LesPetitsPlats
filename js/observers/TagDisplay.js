import TopicCard from "../observers/TopicCard.js";

export default class TagDisplay {
    constructor(Recipes) {
        this.Recipes = Recipes;
        this.recipesToDisplay = Recipes;
        this.ingredientTopicCard = new TopicCard("ingredient", Recipes);
        this.applianceTopicCard = new TopicCard("appliance", Recipes);
        this.ustensilTopicCard = new TopicCard("ustensil", Recipes);
        
        this.topicCards = [this.ingredientTopicCard, this.applianceTopicCard, this.ustensilTopicCard];
    };

    tagFilters(data) {
        const ingredientTagsDisplay = this.ingredientTopicCard.topicSugestionButtons.filter(topicSB => topicSB.tag.isDisplay);
        const applianceTagsDisplay = this.applianceTopicCard.topicSugestionButtons.filter(topicSB => topicSB.tag.isDisplay);
        const ustensilTagsDisplay = this.ustensilTopicCard.topicSugestionButtons.filter(topicSB => topicSB.tag.isDisplay);
        const tagsDisplay = [...ingredientTagsDisplay, ...applianceTagsDisplay,...ustensilTagsDisplay];
        let newData = data;
        tagsDisplay.forEach(topicSB => newData = topicSB.tag.filterTag.filterTag(newData));
        return newData;
    };

    // displayTopicSugestionButtons(data) {
    //     this.topicCards.forEach(topicCard => {
    //         topicCard.displayedRecipes = data;
    //         topicCard.displayTopicSugestionButtons();
    //     })
    // };

    $openTopicCard(topicCardToOpen, topicCard2, topicCard3) {
        topicCardToOpen.$topicCardClose.addEventListener("click", function() {
            topicCardToOpen.openTopicCard()
            topicCard2.closeTopicCard()
            topicCard3.closeTopicCard()
        })
    }

    onSelectTag() {
        this.ingredientTopicCard.init();
        this.applianceTopicCard.init();
        this.ustensilTopicCard.init();
        
        this.$openTopicCard(this.ingredientTopicCard, this.applianceTopicCard, this.ustensilTopicCard);
        this.$openTopicCard(this.ustensilTopicCard, this.ingredientTopicCard, this.applianceTopicCard);
        this.$openTopicCard(this.applianceTopicCard, this.ustensilTopicCard, this.ingredientTopicCard);
    }
}