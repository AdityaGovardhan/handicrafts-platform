class Item {
  constructor(itemBuilder) {
    this.itemName = itemBuilder.itemName;
    this.itemPrice = itemBuilder.itemPrice;
    this.itemDescription = itemBuilder.itemDescription;
    this.finalRating = itemBuilder.finalRating;
  }
}

module.exports = Item;
