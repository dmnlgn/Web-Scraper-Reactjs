const axios = require('axios');
const cheerio = require('cheerio');
const {parse, stringify, toJSON, fromJSON} = require('flatted');

const scraped = async () => {
    const API = 'https://www2.hm.com/pl_pl/on/produkty/t-shirty-i-podkoszulki.html';
    const tshirt = [];
    const tshirt_color = [];

    const response = axios.get(API)
        .then((response) => {
            let $ = cheerio.load(response.data);
            const stack = $('.products-listing > .product-item > .hm-product-item');
            stack.each( (i, el) => {
                if(i) {
                    const tshirttName = $(el).find('.item-details > .item-heading > a').text();
                    const tshirtPrice = $(el).find('.item-details > .item-price > span').text();
                    const tshirtColor = $(el).find('.item-details > .list-swatches > .item > a').each( (i, el) => {
                        tshirt_color.push ({
                            color: $(el).text().trim().split('/')
                        })
                    })
                    stringify(tshirt_color);
                    //console.log(tshirt_color);
                    tshirt.push({
                        name: tshirttName,
                        price: tshirtPrice,
                        color: tshirt_color[i]
                    })
                    console.log(tshirt);
                }
            });
            return tshirt;
        })
        .catch((err) => {
            console.log(err);
        });
        return response;
};

scraped();

module.exports = { 
    scraped
};