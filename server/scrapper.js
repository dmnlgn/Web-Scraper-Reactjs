const axios = require('axios');
const cheerio = require('cheerio');
const _ = require('lodash');
const cors = require('cors');
axios.defaults.baseURL = 'http://localhost:8080';

// Import helper functions
const {
    compose,
    composeAsync,
    extractNumber,
    enforceHttpsUrl,
    fetchHtmlFromUrl,
    extractFromElems,
    fromPairsToObject,
    fetchElemInnerText,
    fetchElemAttribute,
    extractUrlAttribute
  } = require("./helpers");

const test = async () => {
    console.log("pokemons");

    const pokemonSite = 'https://pokemon.gameinfo.io/';
    const pokemon = [];

    axios(pokemonSite)
        .then((response) => {
            let $ = cheerio.load(response.data);
            const statusTable = $('.pokemon-list > .family > .gen');
            
            statusTable.each( function () {
                const pokemonName = $(this).find('a > h2').text();
                pokemon.push({
                    name: pokemonName,
                });
            });
            console.log(pokemon);
            return response;
        })
        .catch((err) => {
            console.log(err);
        });
};

module.exports = test();