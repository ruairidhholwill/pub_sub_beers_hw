const PubSub = require('../helpers/pub_sub.js')
const Beers = require('../models/beers.js')

const BeerList = function (container) {
    this.container = container;
    // console.log(container)
}

BeerList.prototype.bindEvents = function () {
    PubSub.subscribe('Beers:beers-ready', (event) => {
        this.clearList();
    })
}

BeerList.prototype.clearList = function () {
    this.container.innerHTML = '';
}

module.exports = BeerList;