const express = require('express');
const app = express();
const router = express.Router();

const PORT = process.env.PORT || 8080;

const bodyParser = require('body-parser');
const scrapper = require('./scrapper');
const tshirts = require('./scraped_pages/fashion/page_one/fragments/tshirts.js');


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Content-Type");
    next();
});

router.get('/pokemon', async (req, res) => {
  const pokemon = await scrapper.test(req.body);
  res.send({pokemon});
})

router.get('/tshirt', async (req, res) => {
  const tshirtpage = await tshirts.scraped(req.body);
  res.send({tshirtpage});
})

app.post('/pokemon', async (req, res) => {
  console.log(req.body);
  const pokemon = await scrapper.test(req.body);
  //console.log({pokemon})
  res.send('succes');
})

app.use('/', router);

app.listen(PORT, () => {
  console.log(`example app listening on port ${PORT}`);
})