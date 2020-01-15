import './css/styles.css';
require('bootstrap');

('use strict');

const Handlebars = require('handlebars');
const grid = document.querySelector('.row');
const source = document.querySelector('#user-card').innerHTML.trim();
const template = Handlebars.compile(source);

fetch('https://jsonplaceholder.typicode.com/users')
  .then(res => {
    if (res.ok) return res.json();
    throw new Error('Error while fetching ' + response.statusText);
  })
  .then(data => {
    // console.log(data);
    const markup = data.reduce((acc, arr) => acc + template(arr), '');
    grid.insertAdjacentHTML('afterbegin', markup);
  })
  .catch(error => {
    console.log(error);
  });
