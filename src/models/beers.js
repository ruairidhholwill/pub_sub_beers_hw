const PubSub = require('../helpers/pub_sub.js')
const RequestHelper = require('../helpers/request_helper.js')

const Beers = function () {
    this.beersData = []
}

Beers.prototype.getData = function () {
    const request = new RequestHelper('https://api.punkapi.com/v2/beers')
    request.get().then((data) => {
        this.beersData = data;
        PubSub.publish('Beers:beers-ready', this.beersData);
        console.log(this.beersData)
      }); 
}

module.exports = Beers;