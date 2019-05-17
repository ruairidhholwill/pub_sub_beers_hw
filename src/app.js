const Beers = require('./models/beers.js')
const BeerList = require('./views/beer_list_view.js')
const BeerDisplay = require('./views/beer_display_view.js')

document.addEventListener('DOMContentLoaded', () => {

    const beerListContainer = document.querySelector('div#beers-list');
    const beerList = new BeerList(beerListContainer)
    beerList.bindEvents();

    const beers = new Beers;
    // beers.bindingEvents();
    beers.getData()
})

