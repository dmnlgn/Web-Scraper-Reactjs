const axios = require('axios');
const cheerio = require('cheerio');
let page = 90;

const scraped = async() => {
    const API = `https://answear.com/k/on/odziez/t-shirty-i-polo?page=${page}`;
    const data = [];
    const data_color = [];
    const response = axios.get(API)
        .then((response) => {
            let $ = cheerio.load(response.data);
            const stack = $('.container--xl > div > .row > .col-md-4');

            console.log("page items: " + stack.length + "\n");

            if(stack.length) {
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
                    }
                })
                page += 1;
                return scraped();
            }
            console.log(data)
            return data;
        })
        .catch((err) => {
            console.log(err);
        })
        console.log("page number: " + page)
        return response;
}

scraped();

module.exports = { 
    scraped
};