const axios = require('axios');
const cheerio = require('cheerio');
const {stringify} = require('flatted');

const scraped = async () => {
    const API = 'https://www2.hm.com/pl_pl/on/produkty/dzinsy.html?sort=stock&image-size=small&image=model&offset=0&page-size=500';
    const data = [];
    const data_color = [];

    const response = axios.get(API)
        .then((response) => {
            let $ = cheerio.load(response.data);
            const stack = $('.products-listing > .product-item > .hm-product-item');
            stack.each( (i, el) => {
                if(i) {
                    const Name = $(el).find('.item-details > .item-heading > a').text();
                    const Price = $(el).find('.item-details > .item-price > span').text();
                    $(el).find('.item-details > .list-swatches > .item > a').each( (i, el) => {
                        data_color.push ({
                            color: $(el).text().trim().split('/')
                        })
                    })
                    stringify(data_color);
                    data.push({
                        name: Name,
                        price: Price,
                        color: data_color[i]
                    })
                }
            });
            console.log(data);
            return data;
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