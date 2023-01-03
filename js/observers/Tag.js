import RecipeTag from "./RecipeTag.js";

export default class Tag {
    constructor(name, type) {
        this._name = name;
        this._type = type;
        this.$recipesTags = document.querySelector(".recipes_tags");
        this.$tag = document.createElement("button");
        this.filterTag = new RecipeTag(name, type);
        this.isDisplay = false;
    }
  
    initTag() {
        this.$tag.classList.add("tag");
        this.$tag.classList.add(this._type);
        this.$tag.innerHTML = `${this._name} <i class="fa-regular fa-circle-xmark"></i>`;
    }
    
    displayTag() {
        document.querySelector(".recipes_tags").appendChild(this.$tag);
        this.$recipesTags.style.display = "block";
        this.isDisplay = true;
    }
    
    deleteTag() {
        document.querySelector(".recipes_tags").removeChild(this.$tag);
        this.isDisplay = false;
        if (this.$recipesTags.hasChildNodes()) {
            this.$recipesTags.style.display = "block";
        } else {
            this.$recipesTags.style.display = "none";
        }
    }
  }