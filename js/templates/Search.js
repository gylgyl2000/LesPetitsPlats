export default class SearchRecipe {
    static SearchDOM() {
        return `
            <form action="get">
                <div class="search">
                    <input id="search" type="search" placeholder="Rechercher une recette" aria-label="Search">
                    <i class="fa-solid fa-magnifying-glass"></i>
                </div>
            </form>
        `
    }
}