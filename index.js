const express = require('express');
const app = express();
const cors  = require('cors');

const port = process.env.PORT || 5000;

app.use(cors());

const cards = require('./data/cards.json');
const banner = require('./data/recipe-banner.json');

app.get('/', (req, res) =>{
    res.send('Chef is runnig')
});

app.get('/cards', (req, res) => {
    res.send(cards);
});

app.get('/banner', (req, res) => {
    res.send(banner);
})

app.get('/banner/:id', (req, res) => {
    const id = req.params.id;
    console.log(id);
    const selectedBanner = banner?.find(n=> n.id == id);
    res.send(selectedBanner)
})


app.listen(port, () => {
    console.log(`Chef is running on port: ${port}`)
})
