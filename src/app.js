const Beers = require('./models/beers.js')
const BeerList = require('./views/beer_list_view.js')
const BeerDisplay = require('./views/beer_display_view.js')

document.addEventListener('DOMContentLoaded', () => {
    const beers = new Beers;
    // beers.bindingEvents();
    beers.getData()
})

