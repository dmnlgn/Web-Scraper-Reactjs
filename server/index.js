const express = require('express');
const app = express();
const router = express.Router();

const PORT = process.env.PORT || 8080;

const bodyParser = require('body-parser');
const shopOne = require('./scraped_pages/fashion/page_one/connection.js');
const shopTwo = require('./scraped_pages/fashion/page_two/connection.js');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Content-Type");
    next();
});

router.get('/shop_one', async (req, res) => {
  const clothesPage = await shopOne.connection(req.body);
  res.send({clothesPage});
})

router.get('/shop_two', async (req, res) => {
  const clothesPage = await shopTwo.connection(req.body);
  res.send({clothesPage});
})

app.use('/', router);

app.listen(PORT, () => {
  console.log(`example app listening on port ${PORT}`);
})