const BeerDetail = function () {

}

BeerDetail.prototype.createBeerDetail = function (beer) {
    const beerDetail = document.createElement('div');
    beerDetail.classList.add('munro-detail');

    const beerName = document.createElement('h2')
    beerName.textContent = beer.name
    beerDetail.appendChild(beerName)

    

    return beerDetail

}

BeerDetail.prototype.createDetailListItem = function (label, property) {
    const element = document.createElement('li')
    element.textContent = `${label}: ${property}`;
    return element;
}







module.exports = BeerDetail;