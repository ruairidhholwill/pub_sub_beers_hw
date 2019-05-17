const PubSub = require('../helpers/pub_sub.js')
const RequestHelper = require('../helpers/request_helper.js')

const Beers = function () {
    this.beersData = []
    this.abvs = []
}

Beers.prototype.bindEvents = function () {
    PubSub.subscribe('SelectView:change', (event)  => {
      const abvIndex = event.detail;
      this.publishBeersByAbv(abvIndex);
    })
  };

Beers.prototype.getData = function () {
    const request = new RequestHelper('https://api.punkapi.com/v2/beers')
    request.get().then((data) => {
        this.beersData = data;
        PubSub.publish('Beers:beers-ready', this.beersData);
        this.publishAbvList(data);
      }); 
}

Beers.prototype.publishAbvList = function (data) {
    this.beersData = data;
    this.abvs = this.uniqueAbvList();
    this.abvs.sort((a, b) => a - b);
    PubSub.publish('Beers:abv-ready', this.abvs)
}

Beers.prototype.beerAbvList = function () {
    const fullList = this.beersData.map(beer => beer.abv)
    return fullList
}

Beers.prototype.uniqueAbvList = function () {
    return this.beerAbvList().filter((beer, index, array) => {
      return array.indexOf(beer) === index;
    });
  }

  Beers.prototype.filterByAbv = function (abvIndex) {
    const selectedAbv = this.abvs[abvIndex];
    return this.beersData.filter((beer) => {
      return beer.abv === selectedAbv
    });
  }

  Beers.prototype.publishBeersByAbv = function (abvIndex) {
    const foundBeers = this.filterByAbv(abvIndex);
    PubSub.publish('Beers:beers-ready', foundBeers);
  };


module.exports = Beers;