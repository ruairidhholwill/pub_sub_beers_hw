const BeerDetail = function () {

}

BeerDetail.prototype.createBeerDetail = function (beer) {
    const beerDetail = document.createElement('div');
    beerDetail.classList.add('munro-detail');

    const beerName = document.createElement('h2')
    beerName.textContent = beer.name
    beerDetail.appendChild(beerName)

    const beerTagline = document.createElement('h4')
    beerTagline.textContent = beer.tagline
    beerDetail.appendChild(beerTagline)

    const beerDescription = document.createElement('p')
    beerDescription.textContent = beer.description
    beerDetail.appendChild(beerDescription)

   

    return beerDetail

}

// BeerDetail.prototype.createDetailListItem = function (label, property) {
//     const element = document.createElement('li')
//     element.textContent = `${label}: ${property}`;
//     return element;
// }







module.exports = BeerDetail;