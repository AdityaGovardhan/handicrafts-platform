const Item = require('./Item');

// Builder class can be used for backend validation
class ItemBuilder {
  static item() {
    return new ItemBuilder();
  }

  withItemName(itemName) {
    this.itemName = itemName;
    return this;
  }

  withItemPrice(itemPrice) {
    this.itemPrice = itemPrice;
    return this;
  }

  withItemDescription(itemDescription) {
    this.itemDescription = itemDescription;
    return this;
  }

  withFinalRating(finalRating) {
    this.finalRating = finalRating;
    return this;
  }

  build() {
    return new Item(this);
  }
}

module.exports = ItemBuilder;
