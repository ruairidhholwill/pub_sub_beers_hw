const PubSub = require('../helpers/pub_sub.js')
const Beers = require('../models/beers.js')
const BeerDisplay = require('../views/beer_display_view.js')

const BeerList = function (container) {
    this.container = container;
    // console.log(container)
}

BeerList.prototype.bindEvents = function () {
    PubSub.subscribe('Beers:beers-ready', (event) => {
        this.clearList();
        this.renderBeerDetails(event.detail)
        // console.log(event.detail)
    })
}

BeerList.prototype.clearList = function () {
    this.container.innerHTML = '';
}

BeerList.prototype.renderBeerDetails = function (beers) {
    beers.forEach((beer) => {
        const beerItem = this.createBeerElement(beer)
        this.container.appendChild(beerItem)
    })
}

BeerList.prototype.createBeerElement = function (beer) {
    const beerDisplay = new BeerDisplay();
    const beerDetail = beerDisplay.createBeerDetail(beer)
    return beerDetail; 
}

module.exports = BeerList;