const PubSub = require('../helpers/pub_sub.js')

const SelectView = function(element) {
    this.element = element;
}

SelectView.prototype.bindEvents = function () {
    PubSub.subscribe('Beers:abv-ready', (event) => {
        this.populateSelect(event.detail)
    });

    this.element.addEventListener('change', (event) => {
        const selectedIndex = event.target.value;
        PubSub.publish('SelectView:change', selectedIndex);
    });
}

SelectView.prototype.populateSelect = function (abvs) {
    abvs.forEach((abv, index) => {
        const option = this.createAbvOption(abv, index);
        this.element.appendChild(option);
      })
}

SelectView.prototype.createAbvOption = function (abv, index) {
    const option = document.createElement('option');
    option.textContent = `${abv}%`;
    option.value = index;
    return option;
  };



module.exports = SelectView;