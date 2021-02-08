import { Item, updateQuality } from "./gilded_rose";

describe('updateQuality', () => {
  it('Sulfuras quality must always be 80', () => {
    const standardItem = new Item('Sulfuras, Hand of Ragnaros', 10, 80);
    expect(standardItem.quality).toEqual(80);
  });

  it('Sulfuras quality must always be positive', () => { 
    const standardItem = new Item('Sulfuras, Hand of Ragnaros', 10, 0);
    updateQuality([standardItem]);
    expect(standardItem.quality).toEqual(80);
  });

  it('Sulfuras will always default to 80 quality', ()=> {
    const standardItem = new Item('Sulfuras, Hand of Ragnaros', 0, 0);
    updateQuality([standardItem]);
    expect(standardItem.quality).toBe(80);
  });

  it('If item quality is less than 50 add 1 to quality', () => {
    const standardItem = new Item('Matey HAnd!', 10, 30);
    updateQuality([standardItem]);
    expect(standardItem.quality).toBe(31);
  });

  it('If item is Backstage Passes and sell_in is less than 11, add 2 to quality', () => {
    const standardItem = new Item('Backstage passes to a TAFKAL80ETC concert', 10, 30);
    updateQuality([standardItem]);
    expect(standardItem.name).toBe('Backstage passes to a TAFKAL80ETC concert');
    expect(standardItem.sell_in).toBe(9);
    expect(standardItem.quality).toBeLessThan(50);
    expect(standardItem.quality).toBe(32);
  });

  it('If item is Backstage Passes and sell_in is less than 6, add 3 to quality', () => {
    const standardItem = new Item('Backstage passes to a TAFKAL80ETC concert', 5, 30);
    updateQuality([standardItem]);
    console.log('updated Passes 1');
    expect(standardItem.name).toBe('Backstage passes to a TAFKAL80ETC concert');
    expect(standardItem.sell_in).toBe(4);
    expect(standardItem.quality).toBe(33);
  });

  it('If item is Backstage Passes and sell_in is more than 11, add 1 to quality, reduce sell date by 1', () => {
    const standardItem = new Item('Backstage passes to a TAFKAL80ETC concert', 11, 30);
    updateQuality([standardItem]);
    expect(standardItem.name).toBe('Backstage passes to a TAFKAL80ETC concert');
    expect(standardItem.sell_in).toBe(10);
    expect(standardItem.quality).toBe(31);
  });
  //  Todo
  it('If item is Backstage Passes and sell_in is more than 11 & quality is more than 50, add 0 to quality', () => {
    const standardItem = new Item('Backstage passes to a TAFKAL80ETC concert', 10, 51);
    updateQuality([standardItem]);
    expect(standardItem.name).toBe('Backstage passes to a TAFKAL80ETC concert');
    expect(standardItem.sell_in).toBe(9);
    expect(standardItem.quality).toBe(50);
  });

  it('If sell in date is 0 reduce sell date by 1', () => {
    const standardItem = new Item('Hammer of Thor', 0, 30);
    updateQuality([standardItem]);
    expect(standardItem.sell_in).toBe(-1);
  });

  it('If Backstage passes sell date is less than 0 , reduce quality by 1', () => {
    const standardItem = new Item('Backstage passes to a TAFKAL80ETC concert', 0, 30);
    updateQuality([standardItem]);
    expect(standardItem.name).toBe('Backstage passes to a TAFKAL80ETC concert');
    expect(standardItem.sell_in).toBe(-1);
    console.log('updated Passes 2');
    expect(standardItem.sell_in).toBe(-1);
  });

  it('If Aged Brie sell date is less than 0 + quality less than 50, add 2 to quality ', () => {
    const standardItem = new Item('Aged Brie', 0, 40);
    updateQuality([standardItem]);
    expect(standardItem.quality).toBe(42);
  });
});
