
const express = require('express');
const app = express();
const bodyParser = require('body-parser');

let heroes = [
  { id: 11, name: 'Mr. Nice' },
  { id: 12, name: 'Narco' },
  { id: 13, name: 'Bombasto' },
  { id: 14, name: 'Celeritas' },
  { id: 15, name: 'Magneta' },
  { id: 16, name: 'RubberMan' },
  { id: 17, name: 'Dynama' },
  { id: 18, name: 'Dr IQ' },
  { id: 19, name: 'Magma' },
  { id: 20, name: 'Tornado' }
];

app.use(bodyParser.json())

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.get('/', (req, res) => {
  res.send('Hello, world');
});

app.get('/heroes', (req, res) => {
  res.send(heroes);
});

app.get('/heroes/:id', (req, res) => {
  console.log(`getting the hero by id ${req.params.id}`);
  res.send(heroes.find(hero => hero.id === req.params.id));
});

app.put('/heroes', (req, res) => {
  heroes = heroes.map(hero => hero.id === req.body.hero.id ? req.body.hero : hero);
});

app.listen(3000, () => {
  console.log('Server listening on port 3000...');
});
