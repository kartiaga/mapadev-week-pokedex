/* 
Quando clicar no pokémon da listagem temos que esconder o cartão do pokémon aberto e mostrar o cartão correspondente ao que foi selecionado na listagem

pra isso vamos precisar trabalhar com dois elementos
1- listagem 
2- cartão pokémon

precisamos criar duas variaveis js pra trabalhar com os elementos da tela

vamos precisar trabalhar com um evento de clique feito pelo usuário na listagem de pokémons

-remover a classe aberto só do cartão que está abeto
-ao clicar em um pokemon da listagem pegamos o id desse pokemon pra saber qual cartao mostrar
-remover a classe ativo que marca o pokémon selecionado
-adicionar a classe ativo no item da lista selecionado.

*/

// precisamos criar duas variaveis js pra trabalhar com os elementos da tela

const listaSelecaoPokemons = document.querySelectorAll('.pokemon')
const pokemonCard = document.querySelectorAll('.cartao-pokemon')

listaSelecaoPokemons.forEach(pokemon => {
    //vamos precisar trabalhar com um evento de clique feito pelo usuário na listagem de pokémons
    pokemon.addEventListener('click', () => {
        // remover a classe aberto só do cartão que está abeto
        const cartaoPokemonAberto = document.querySelector('.aberto')
        cartaoPokemonAberto.classList.remove('aberto')

        const idPokemonSelecionado = pokemon.attributes.id.value

        const idDoPokemonParaAbrir = 'cartao-' + idPokemonSelecionado
        const cartaoPokemonParaAbrir = document.getElementById(idDoPokemonParaAbrir)

        cartaoPokemonParaAbrir.classList.add('aberto')

        //remover a classe ativo que marca o pokemon selecionado
        const pokemonAtivoNaListagem = document.querySelector('.ativo')
        pokemonAtivoNaListagem.classList.remove('ativo')

        //adicionar a classe ativo no item da lista selecionado
        const idPokemonSelecionadoNaListagem = document.getElementById(idPokemonSelecionado)
        idPokemonSelecionadoNaListagem.classList.add('ativo')
    })
})