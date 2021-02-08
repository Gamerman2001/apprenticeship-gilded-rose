import { Item, updateQuality, updateQuality2 } from "./gilded_rose";

describe("`updateQuality`", () => {
  it("Sulfuras quality must always be 80", () => {
    const standardItem = new Item('Sulfuras, Hand of Ragnaros', 10, 80);
    expect(standardItem.quality).toEqual(80);
  });

  it.only("Sulfuras quality must always be positive", () => { 
    const standardItem = new Item("Sulfuras, Hand of Ragnaros", 10, 0);
    updateQuality([standardItem]);
    console.log(standardItem, 'logging');
    expect(standardItem.quality).toEqual(80);
  });

  it('This is a good place for a good test!', ()=> {
    const standardItem = new Item('Sulfuras, Hand of Ragnaros', 0, 50);
    updateQuality([standardItem]);
    expect(standardItem.quality).toBe(50);
  });
});
