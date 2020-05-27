const ItemBuilder = require('./ItemBuilder');

const item = ItemBuilder.item()
  .withItemName('Bananas')
  .withItemPrice(2.14)
  .withItemDescription('Very Fresh')
  .withFinalRating(4.5)
  .build();

console.log(item);
