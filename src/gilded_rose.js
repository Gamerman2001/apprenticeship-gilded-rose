// Item constructor. DO NOT MODIFY OR THE GOBLIN WILL EAT YOU!
export function Item(name, sell_in, quality) {
  this.name = name;
  this.sell_in = sell_in;
  this.quality = quality;
}

/*
* Update inventory
* @param {Item[]} items - an array of Items representing the inventory to be updated
* Example usage:

const items = [
  new Item('+5 Dexterity Vest', 10, 20),
  new Item('Aged Brie', 2, 0),
  new Item('Elixir of the Mongoose', 5, 7),
  new Item('Sulfuras, Hand of Ragnaros', 0, 80),
  new Item('Backstage passes to a TAFKAL80ETC concert', 15, 20),
  new Item('Conjured Mana Cake', 3, 6),
];

updateQuality(items);
*/
export function updateQuality(items) {
  for (var i = 0, {name, quality, sell_in} = items[i]; i < items.length; i++) {
    if (name != 'Aged Brie' && name != 'Backstage passes to a TAFKAL80ETC concert') {
      if (quality > 0) {
        if (name != 'Sulfuras, Hand of Ragnaros') {
          quality = quality - 1
        }
      }
    } else {
      if (quality < 50) {
        quality = quality + 1
        if (name == 'Backstage passes to a TAFKAL80ETC concert') {
          if (sell_in < 11) {
            if (quality < 50) {
              quality = quality + 1
            }
          }
          if (sell_in < 6) {
            if (quality < 50) {
              quality = quality + 1
            }
          }
        }
      }
    }
    if (name != 'Sulfuras, Hand of Ragnaros') {
      sell_in = sell_in - 1;
    }
    if (sell_in < 0) {
      if (name != 'Aged Brie') {
        if (name != 'Backstage passes to a TAFKAL80ETC concert') {
          if (quality > 0) {
            if (name != 'Sulfuras, Hand of Ragnaros') {
              quality = quality - 1
            }
          }
        } else {
          quality = quality - quality
        }
      } else {
        if (quality < 50) {
          quality = quality + 1
        }
      }
    }
  }
}
//comment main
//comment
//comment 2
