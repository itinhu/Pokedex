const url = 'https://itinhuz.vercel.app/server/pokedex.json'
const axios = require('axios')

//Esse endpoint exibe todos os pokemons
axios.get(url).then(response => {
    const pokemons = response.data
    
    console.log(pokemons)
})