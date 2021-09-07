const axios = require('axios');
const cheerio = require('cheerio');
let page = 1;
const data = [];

const scraped = async() => {
    const API = `https://answear.com/k/on/odziez/t-shirty-i-polo?page=${page}`;
    const response = axios.get(API)
        .then((response) => {
            let $ = cheerio.load(response.data);
            const stack = $('.container--xl > div > .row > .col-md-4');
            stack.each((i, el) => {
                if(i) {
                    const Name = $(el).find('.ProductItem__productCardDescription__ScKhU > span').text();
                    const PriceRegular = $(el).find('.ProductItem__productCardDescription__ScKhU > div > div > p').first().text();
                    const PricePromo = $(el).find('.ProductItem__productCardDescription__ScKhU > div > div > p').first().next().text();

                    data.push({
                        name: Name,
                        price: PriceRegular,
                        price_promo: PricePromo,
                    })
                } else {
                    page += 1;
                    return scraped();
                }
            })
            return data;
        })
        .catch((err) => {
            console.log(err);
        })
    return response;
}

module.exports = { 
    scraped
};