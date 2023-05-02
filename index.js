const express = require('express');
const app = express();
const cors  = require('cors');

const port = process.env.PORT || 5000;

app.use(cors());

const cards = require('./data/cards.json');

app.get('/', (req, res) =>{
    res.send('Chef is runnig')
});

app.get('/cards', (req, res) => {
    res.send(cards);
}) 

app.listen(port, () => {
    console.log(`Chef is running on port: ${port}`)
})