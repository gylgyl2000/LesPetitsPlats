export default class RecipeTemplate {
    constructor(recipe) {
      this._data = recipe;
      this._thumb = recipe.name;

    this._replaceText = this._data.description.replaceAll(". ", ".<br>- ")
    }

    get thumb() { return `assets/recipes/${this._thumb}.jpg` }

    RecipeCardDOM() {
        return `
            <article class="recipe_card" data-id="${this._data.id}" data-name="${this._data.name}">
                <a href="recipe.html?id=${this._data.id}">
                    <img class="recipe_thumb" src="${this.thumb}" alt="${this._data.name}" aria-hidden="true">
                    <section class="card_main">
                        <header>
                            <h2 class="recipe_name">${this._data.name}</h2>
                            <h3 class="recipe_time">
                                <img class=clock src="assets/logo/clock.png" alt="clock" aria-hidden="true">
                                <!-- <span class="far fa-clock" aria-hidden="true"></span> -->
                                ${this._data.time} min
                            </h3>
                        </header>
                        <main>
                            <section class="recipe_ingredients">
                                <ul>
                                    ${this._data.ingredients.map((ingredients) => 
                                        `<li>
                                            <strong>${ingredients.ingredient}</strong>
                                            ${'quantity' in ingredients ? ' : ' + ingredients.quantity : ''}
                                            ${'unit' in ingredients ? ingredients.unit : ''}
                                        </li>`
                                    )
                                    .join('')}
                                </ul>
                            </section>
                            <p class="recipe_description">${this._data.description}</p>
                        </main>
                    </section>
                </a>
            </article>
        `;
    }

    RecipeDom() {
        return `
            <article class="recipe_page" data-id="${this._data.id}" data-name="${this._data.name}">
                <header>
                    <a href="index.html" alt="Retour à l'accueil" title="Retour à l'accueil">
                        <img class=return_button src="assets/logo/return.png" alt="return button" aria-hidden="true">
                    </a>
                    <h2 class="recipe_name">${this._data.name}</h2>
                    <h3 class="recipe_time">
                        <img class=clock src="assets/logo/clock.png" alt="clock" aria-hidden="true">
                        <!-- <span class="far fa-clock" aria-hidden="true"></span> -->
                        ${this._data.time} min
                    </h3>
                </header>
                <section class="page_main">
                    <img class="recipe_thumb" src="${this.thumb}" alt="${this._data.name}" aria-hidden="true">
                    <main>
                        <section class="recipe_ingredients">
                            <ul>
                                ${this._data.ingredients.map((ingredients) => 
                                    `<li>
                                        <strong>${ingredients.ingredient}</strong>
                                        ${'quantity' in ingredients ? ' : ' + ingredients.quantity : ''}
                                        ${'unit' in ingredients ? ingredients.unit : ''}
                                    </li>`
                                )
                                .join('')}
                            </ul>
                        </section>
                        <p class="recipe_description">- ${this._replaceText}</p>
                    </main>
                </section>
            </article>
        `;
    }

}