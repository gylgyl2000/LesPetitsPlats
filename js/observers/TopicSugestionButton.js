import Tag from "./Tag.js"

export default class TopicSugestionButton {
    constructor(name, type) {
        this._name = name;
        this._type = type;

        this.$topicSugestionButton = document.createElement('button');
        
        this.isDisplay = true;
        this.isInDisplayedRecipes = true;
        this.tag = new Tag(name, type);
    };
  
    init() {
        this.$topicSugestionButton.classList.add("topic-card--sugestion");
        this.$topicSugestionButton.innerHTML = this._name;
        const $sugestionBox = document.querySelector(`.${this._type} .topic-card--sugestion-box`);
        $sugestionBox.appendChild(this.$topicSugestionButton);
        this.tag.initTag();
    };
  
    onClickTopicSugestionButton() {    
        this.$topicSugestionButton.style.display = "none";
        this.tag.displayTag();
        this.isDisplay = false;
    };
  
    deleteTag() {
        this.tag.deleteTag();
        this.isDisplay = true;  
    };
  
    displayTopicSugestion() {
        if (this.isDisplay && this.isInDisplayedRecipes) {
            this.$topicSugestionButton.style.display = "block";
        } else {
            this.$topicSugestionButton.style.display = "none";
        };
    };
};