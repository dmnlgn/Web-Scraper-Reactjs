const tshirts = require('./fragments/tshirts.js');
const hoodies = require('./fragments/hoodies.js');
const pants = require('./fragments/pants.js');
const jeans = require('./fragments/jeans.js');

const connection = async () => {
    const tshirtPage = {tshirt: await tshirts.scraped()};
    const hoodiesPage = {hoodies: await hoodies.scraped()};
    const pantsPage = {pants: await pants.scraped()};
    const jeansPage = {jeans: await jeans.scraped()};
    let clothes = [];
    try {
        clothes = {...tshirtPage, ...hoodiesPage,...pantsPage,...jeansPage};
        return clothes;
    }
    catch (e) {console.error(e);}
    
    return clothes;
}

connection();

module.exports = { 
    connection
};