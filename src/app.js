const Beers = require('./models/beers.js')
const BeerList = require('./views/beer_list_view.js')
const BeerDisplay = require('./views/beer_display_view.js')
const SelectView = require('./views/select_view.js')

document.addEventListener('DOMContentLoaded', () => {

    const selectViewElement = document.querySelector('select#abv-select')
    const selectView = new SelectView(selectViewElement);
    selectView.bindEvents();

    const beerListContainer = document.querySelector('div#beers-list');
    const beerList = new BeerList(beerListContainer)
    beerList.bindEvents();

    const beers = new Beers;
    beers.bindEvents();
    beers.getData()
})

