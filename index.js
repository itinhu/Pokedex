const url = 'https://itinhuz.vercel.app/server/pokedex.json'
const axios = require('axios')

//Esse endpoint exibe todos os pokemons
function exibirTodos(){
    axios.get(url).then(response => {
    const pokemons = response.data
    
    console.log(pokemons)
})
}

//Esse endpoint exibe todos os pokemons tipo 'Eletric'
function exibeEletricos(){
    axios.get(url).then(response => {
        const pokemons = response.data
        const poke = pokemons.filter(eletrico)    
        console.log(poke)
    })
}
//Endpoint exibe todos os pokemons que tem velocidade >= 40

function velocidade40mais(velocidade){
    const speed40 = f => f.base.Speed >= velocidade
    
    axios.get(url).then(response => {
        const pokemons = response.data

    const poke = pokemons.filter(speed40)
    console.log(poke);
    })    
}

velocidade40mais(150) 

