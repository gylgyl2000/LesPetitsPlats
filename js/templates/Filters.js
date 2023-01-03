export default class FiltersRecipe {
    static FiltersDOM() {
        return `
            <div class="ingredient topic-card topic-card__close">
                <p>Ingredients</p>
                <button class="topic-card--open-button"><i class="fa-solid fa-chevron-down"></i></button>
            </div>

            <div class="ingredient topic-card topic-card__open">          
                <div class="topic-card--header">
                    <form action="get">
                        <input class="ingredient" type="search" placeholder="Rechercher un ingédient">              
                    </form>
                    <button class="topic-card--close-button">
                        <i class="fa-solid fa-chevron-up"></i>
                    </button>
                </div>
                <div class="topic-card--sugestion-box"></div>
            </div>

            <div class="appliance topic-card topic-card__close">
                <p>Appareils</p>
                <button class="topic-card--open-button"><i class="fa-solid fa-chevron-down"></i></button>
            </div>            

            <div class="appliance topic-card topic-card__open">          
                <div class="topic-card--header">
                    <form action="get">
                        <input class="appliance" type="search" placeholder="Rechercher un appareil">              
                    </form>
                    <button class="topic-card--close-button">
                        <i class="fa-solid fa-chevron-up"></i>
                    </button>
                </div>
                <div class="topic-card--sugestion-box"></div>
            </div>

            <div class="ustensil topic-card topic-card__close">
                <p>Ustensiles</p>
                <button class="topic-card--open-button"><i class="fa-solid fa-chevron-down"></i></button>
            </div>            

            <div class="ustensil topic-card topic-card__open">          
                <div class="topic-card--header">
                    <form action="get">
                        <input class="ustensil" type="search" placeholder="Rechercher un ustensile">              
                    </form>
                    <button class="topic-card--close-button">
                        <i class="fa-solid fa-chevron-up"></i>
                    </button>
                </div>
                <div class="topic-card--sugestion-box"></div>
            </div>
        `
    }
}