const express = require('express');
const app = express();
const router = express.Router();

const PORT = process.env.PORT || 8080;

const bodyParser = require('body-parser');
const scrapper = require('./scrapper');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Content-Type");
    next();
});

router.get('/pokemon', async (req, res) => {
  //res.send('test');
  const pokemon = await scrapper.test(req.body);
  res.send({pokemon});
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