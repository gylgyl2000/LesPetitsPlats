import ItemsList from "./ItemsList.js"
import FilterTag from "./FilterTag.js";
import TopicSugestionButton from "./TopicSugestionButton.js";

export default class TopicCard extends FilterTag {
    constructor(type, initRecipes) {
        super();
        this._type = type;
        this._initRecipes = initRecipes;
        this.displayedRecipes = initRecipes;
        this.$topicCardClose = document.querySelector(`.${type}.topic-card__close`);
        this.$topicCardOpen = document.querySelector(`.${type}.topic-card__open`);
        this.$closeButton = document.querySelector(`.${type} .topic-card--close-button`);
        this.$input = document.querySelector(`.${type} input`);
        this.$form = document.querySelector(`.${type} form`);
        this.itemsList = new ItemsList(type);
        this.topicSugestionButtons = [];
    } 
  
    openTopicCard() {    
        this.$topicCardClose.style.display = "none";
        this.$topicCardOpen.style.display = "block";
    }
    
    closeTopicCard() {    
        this.$topicCardClose.style.display = "flex";
        this.$topicCardOpen.style.display = "none";
        this.$form.reset();
        this.topicSugestionButtons.forEach(topicSB => {
            if (topicSB.tag.isDisplay === false) {
                topicSB.isDisplay = true;
            };
            topicSB.displayTopicSugestion();
        });
    };
  
    $eventCloseButton() {
        const topicCard = this;
        this.$closeButton.addEventListener("click", function() {
            topicCard.closeTopicCard();
        });
    };
    
    displayTopicSugestionButtons() {
        const itemsOfDisplayedRecipes = this.itemsList.itemsList(this.displayedRecipes);
        this.topicSugestionButtons.forEach(topicSB => {
            if (itemsOfDisplayedRecipes.includes(topicSB._name)) {
                topicSB.isInDisplayedRecipes = true;
            } else {
                topicSB.isInDisplayedRecipes = false;
            };
            topicSB.displayTopicSugestion();
        });
    };
  
    $eventInput() {
        let topicCard = this;
        this.$input.addEventListener("input", function(event) {      
            const string = event.target.value;
            topicCard.topicSugestionButtons.forEach(function (topicSB) {
                if (topicCard.isInSentence(string, topicSB._name) && topicSB.tag.isDisplay === false) {
                    topicSB.isDisplay = true;
                } else {
                    topicSB.isDisplay = false;
                };
                topicSB.displayTopicSugestion();
            });
        });
    };

    init() {
        const topicCard = this;
        this.itemsList.itemsList(this._initRecipes).forEach(function (item) {
            const topicSugestionButton = new TopicSugestionButton(item, topicCard._type);
            topicSugestionButton.init();
            topicCard.topicSugestionButtons.push(topicSugestionButton);
        })
        this.$eventCloseButton();
        this.$eventInput();
    };
};