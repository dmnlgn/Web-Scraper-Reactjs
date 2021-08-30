const axios = require('axios');
const cheerio = require('cheerio');


const test = async () => {
    //console.log("pokemons");

    const pokemonSite = 'https://pokemon.gameinfo.io/';
    const pokemon = [];

    const response = axios.get(pokemonSite)
        .then((response) => {
            let $ = cheerio.load(response.data);
            const statusTable = $('.pokemon-list > .family > .gen');
            
            statusTable.each( function () {
                const pokemonName = $(this).find('a > h2').text();
                pokemon.push({
                    name: pokemonName,
                });
            });
            //console.log(pokemon);
            return pokemon;
        })
        .catch((err) => {
            console.log(err);
        });

        return response;
};

module.exports = { 
    test
};