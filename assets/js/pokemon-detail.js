const pokemonId = localStorage.getItem('pokemonId')
const contentPokemon = document.getElementById('content-pokemon')

function convertPokemToCard(pokemon) {
    return `
        <div class="card ${pokemon.type}" style="width: 20rem;">
            <div class="row justify-content-center p-2">
                <div class="row justify-content-between align-self-center">
                    <span class="w-auto pointer" id="btn-back-index">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="white"
                            class="bi bi-arrow-left" viewBox="0 0 16 16">
                            <path fill-rule="evenodd"
                                d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8" />
                        </svg>
                    </span>
                    <span class="w-auto pointer">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="white"
                            class="bi bi-heart" viewBox="0 0 16 16">
                            <path
                                d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143q.09.083.176.171a3 3 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15" />
                        </svg>
                    </span>
                </div>
                <div class="row">
                    <div class="col-8 align-self-center">
                        <h3 class="text-white text-capitalize">${pokemon.name}</h3>
                        <div class="d-flex">
                            ${pokemon.types.map((type) => `<li class="type ${type}">${type}</li>`).join('')}
                        </div>
                    </div>
                    <div class="col-4 align-middle align-self-center d-flex justify-content-end">
                        <span class="text-white m-0">#${pokemon.number}</span>
                    </div>
                </div>
                <div class="row ">
                    <img src="${pokemon.photo}"
                        class="card-img-top" alt="..." style="transform: translateY(40px);">
                </div>
            </div>
            <div class="row bg-white rounded">
                <ul class="nav nav-tabs mb-3 mt-5" id="ex1" role="tablist">
                    <li class="nav-item" role="presentation">
                        <a class="nav-link active text-wrap" id="ex1-tab-1" data-bs-toggle="tab" href="#about"
                            role="tab" aria-controls="about" aria-selected="true">About</a>
                    </li>
                    <li class="nav-item" role="presentation">
                        <a class="nav-link text-wrap" id="ex1-tab-2" data-bs-toggle="tab" href="#bases-stats"
                            role="tab" aria-controls="bases-stats" aria-selected="false">Bases Stats</a>
                    </li>
                </ul>
                <div class="tab-content" id="ex1-content">
                    <div class="tab-pane fade show active" id="about" role="tabpanel" aria-labelledby="ex1-tab-1">
                        <ul class="ps-2">
                            <li class="row">
                                <div class="col-5"><p class="text-muted m-0 p-0">Height</p></div>
                                <div class="col-auto"><p class="m-0 p-0">${pokemon.height} kg</p></div>         
                            </li>
                            <li class="row">
                                <div class="col-5"><p class="text-muted m-0 p-0">Weight</p></div>
                                <div class="col-auto"><p class="m-0 p-0">${pokemon.weight} cm</p></div>         
                            </li>
                            <li class="row">
                                <div class="col-5"><p class="text-muted m-0 p-0">Abilities</p></div>
                                <div class="col-auto"><p class="m-0 p-0 text-wrap">${pokemon.abilities.join(', ')}</p></div>         
                            </li>
                        </ul>
                    </div>
                    <div class="tab-pane fade" id="bases-stats" role="tabpanel" aria-labelledby="ex1-tab-2">
                        Bases Stats
                    </div>
                </div>
            </div>
        </div>
    `

}


function loadPokemon(pokemonId) {
    pokeApi.getPokemonById(pokemonId).then(pokemon => {
        contentPokemon.innerHTML = convertPokemToCard(pokemon)
        document.getElementById('btn-back-index').addEventListener('click', ()=>{
            localStorage.removeItem('pokemonId');
            location.href = "index.html";
        });
    })
}

loadPokemon(pokemonId);
