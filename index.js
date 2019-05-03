#!/usr/bin/env node

const superagent = require('superagent');

const apiKey = 'f24f40b1c24505685fce3b8acd0fcffc';
const args = process.argv.slice(2, process.argv.length);
const convertedArgs = args.join(' ').split(',').map(el => el.trim());

convertedArgs.map(location => {
  superagent.get(`https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}`)
    .then(res => console.log(`${location}: ${res.body.weather[0].main} ${JSON.stringify(res.body.main)}`))
    .catch(err => console.error(`${location}: ${err.message}`));
});
