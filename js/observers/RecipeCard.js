export default class RecipeCard {
    constructor(recipe) {
        this._recipe = recipe;
        this._thumb = recipe.name;
    }
  
    // get IngredientsListe(){
    //   const ingredientsArray = this._recipe.ingredients
    //   var ingredientsListe = ""
  
    //   ingredientsArray.forEach(ingredient => {
    //     if (ingredient.quantity === undefined && ingredient.unit === undefined){
    //       ingredientsListe = ingredientsListe + `<li><span>${ingredient.ingredient}</span></li>` 
  
    //     }else if (ingredient.unit === undefined){
    //       ingredientsListe = ingredientsListe + `<li><span>${ingredient.ingredient}:</span> ${ingredient.quantity}</li>`
          
    //     }else{
    //       ingredientsListe = ingredientsListe + `<li><span>${ingredient.ingredient}:</span> ${ingredient.quantity} ${ingredient.unit}</li>`
    //     }                  
    //   })
      
    //   return ingredientsListe
    // }
  
    // get descriptionSice(){
    //   const description = this._recipe.description;
    //   const descriptionArray = description.split(' ')
    //   if (descriptionArray.length > 30){
    //     // reduces the description to 30 words and add "..."
    //     return descriptionArray.slice(0, 30).join( " ") + " ...";
    //   } else{
    //     return description
    //   }    
      
    // }
    // get thumb() { return `assets/recipes/${this._thumb}.jpg` }
  
    // createRecipeCard(){
    //     const $recipeCard = document.createElement('article')
    //     $recipeCard.classList.add('recipe_card')      
    //     $recipeCard.innerHTML = `
    //     <a href="recipe.html?id=${this._recipe.id}">
    //     <img class="recipe_thumb" src="${this.thumb}" alt="${this._recipe.name}" aria-hidden="true">
    //     <section class="card_main">
    //         <header>
    //             <h2 class="recipe_name">${this._recipe.name}</h2>
    //             <h3 class="recipe_time">
    //             <span class="far fa-clock" aria-hidden="true"></span>
    //                 ${this._recipe.time} min</h3>
    //         </header>
    //         <main>
    //             <section class="recipe_ingredients">
    //                 <ul>
    //                     ${this._recipe.ingredients.map((ingredients) => 
    //                         `<li>
    //                             <strong>${ingredients.ingredient}</strong>
    //                             ${'quantity' in ingredients ? ' : ' + ingredients.quantity : ''}
    //                             ${'unit' in ingredients ? ingredients.unit : ''}
    //                         </li>`
    //                     )
    //                     .join('')}
    //                 </ul>
    //             </section>
    //             <p class="recipe_description">${this._recipe.description}</p>
    //         </main>
    //     </section>
    // </a>
    //     `
    //     return $recipeCard
    // }
}