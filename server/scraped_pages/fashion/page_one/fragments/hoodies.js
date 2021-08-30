const axios = require('axios');
const cheerio = require('cheerio');
const {stringify} = require('flatted');

const scraped = async () => {
    const API = 'https://www2.hm.com/pl_pl/on/produkty/bluzy-klasyczne-i-z-kapturem.html';
    const hoodie = [];
    const hoodie_color = [];

    const response = axios.get(API)
        .then((response) => {
            let $ = cheerio.load(response.data);
            const stack = $('.products-listing > .product-item > .hm-product-item');
            stack.each( (i, el) => {
                if(i) {
                    const hoodieName = $(el).find('.item-details > .item-heading > a').text();
                    const hoodiePrice = $(el).find('.item-details > .item-price > span').text();
                    $(el).find('.item-details > .list-swatches > .item > a').each( (i, el) => {
                        hoodie_color.push ({
                            color: $(el).text().trim().split('/')
                        })
                    })
                    stringify(hoodie_color);
                    hoodie.push({
                        name: hoodieName,
                        price: hoodiePrice,
                        color: hoodie_color[i]
                    })
                    console.log(hoodie);
                }
            });
            return hoodie;
        })
        .catch((err) => {
            console.log(err);
        });
    return response;
};

module.exports = { 
    scraped
};