const tshirts = require('./fragments/tshirts.js');
const hoodies = require('./fragments/hoodies.js');

const connection = async () => {
    const tshirtpage = {tshirt: await tshirts.scraped()};
    const hoodiepage = {hoodies: await hoodies.scraped()};
    let clothes = [];
    try {
        clothes = {...tshirtpage, ...hoodiepage};
        return clothes;
    }
    catch (e) {console.error(e);}
    
    return clothes;
}

connection();

module.exports = { 
    connection
};