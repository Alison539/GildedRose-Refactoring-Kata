import { Item, GildedRose } from '@/gilded-rose';

describe('Sulfuras', () => {
  it('Testing if all stay the same if valid', () => {
    const gildedRose = new GildedRose([new Item('Sulfuras, Hand of Ragnaros', 3, 80)]);
    var items = gildedRose.updateQuality();
    expect(items[0].name).toBe('Sulfuras, Hand of Ragnaros');
    expect(items[0].sellIn).toBe(3);
    expect(items[0].quality).toBe(80);
  });
  it('Edge case quality < 80', () => {
    expect( () => new GildedRose([new Item('Sulfuras, Hand of Ragnaros', 3, 20)])).toThrow();
    //expect an error
  });
  it('Edge case quality > 80', () => {
    expect( () => new GildedRose([new Item('Sulfuras, Hand of Ragnaros', 3, 100)])).toThrow();
    //expect an error
  });
});

describe('Aged Brie', () => {
  it('general functionality', () => {
    const gildedRose = new GildedRose([new Item('Aged Brie', 3, 20)]);
    var items = gildedRose.updateQuality();
    expect(items[0].name).toBe('Aged Brie');
    expect(items[0].sellIn).toBe(2);
    expect(items[0].quality).toBe(21);
  });
  it('not increase to over 50', () => {
    const gildedRose = new GildedRose([new Item('Aged Brie', 3, 50)]);
    var items = gildedRose.updateQuality();
    expect(items[0].name).toBe('Aged Brie');
    expect(items[0].sellIn).toBe(2);
    expect(items[0].quality).toBe(50);
  });
  it('still increase in negative', () => {
    const gildedRose = new GildedRose([new Item('Aged Brie', -1, 23)]);
    var items = gildedRose.updateQuality();
    expect(items[0].name).toBe('Aged Brie');
    expect(items[0].sellIn).toBe(-2);
    expect(items[0].quality).toBe(24);
  });
  it('when sellIn = 0', () => {
    const gildedRose = new GildedRose([new Item('Aged Brie', 0, 23)]);
    var items = gildedRose.updateQuality();
    expect(items[0].name).toBe('Aged Brie');
    expect(items[0].sellIn).toBe(-1);
    expect(items[0].quality).toBe(24);
  });

  it('Edge case quality is negative', () => {
    expect( () => new GildedRose([new Item('Aged Brie', 3, -12)])).toThrow();
    //expect an error
  });
  it('Edge case quality is >50', () => {
    expect( () => new GildedRose([new Item('Aged Brie', 3, 82)])).toThrow();
    //expect an error
  });
});

describe('Backstage', () => {
  it('general functionality at <=5 days', () => {
    const gildedRose = new GildedRose([new Item('Backstage passes to a TAFKAL80ETC concert', 3, 20)]);
    var items = gildedRose.updateQuality();
    expect(items[0].name).toBe('Backstage passes to a TAFKAL80ETC concert');
    expect(items[0].sellIn).toBe(2);
    expect(items[0].quality).toBe(23);
  });
  it('general functionality at <=10 days', () => {
    const gildedRose = new GildedRose([new Item('Backstage passes to a TAFKAL80ETC concert', 8, 20)]);
    var items = gildedRose.updateQuality();
    expect(items[0].name).toBe('Backstage passes to a TAFKAL80ETC concert');
    expect(items[0].sellIn).toBe(7);
    expect(items[0].quality).toBe(22);
  });
  it('general functionality at >10 days', () => {
    const gildedRose = new GildedRose([new Item('Backstage passes to a TAFKAL80ETC concert', 23, 20)]);
    var items = gildedRose.updateQuality();
    expect(items[0].name).toBe('Backstage passes to a TAFKAL80ETC concert');
    expect(items[0].sellIn).toBe(22);
    expect(items[0].quality).toBe(21);
  });
  it('not increase to over 50', () => {
    const gildedRose = new GildedRose([new Item('Backstage passes to a TAFKAL80ETC concert', 3, 50)]);
    var items = gildedRose.updateQuality();
    expect(items[0].name).toBe('Backstage passes to a TAFKAL80ETC concert');
    expect(items[0].sellIn).toBe(2);
    expect(items[0].quality).toBe(50);
  });
  it('when sellIn = 0', () => {
    const gildedRose = new GildedRose([new Item('Backstage passes to a TAFKAL80ETC concert', 0, 23)]);
    var items = gildedRose.updateQuality();
    expect(items[0].name).toBe('Backstage passes to a TAFKAL80ETC concert');
    expect(items[0].sellIn).toBe(-1);
    expect(items[0].quality).toBe(0);
  });
  it('when sellIn <0', () => {
    const gildedRose = new GildedRose([new Item('Backstage passes to a TAFKAL80ETC concert', -1, 0)]);
    var items = gildedRose.updateQuality();
    expect(items[0].name).toBe('Backstage passes to a TAFKAL80ETC concert');
    expect(items[0].sellIn).toBe(-2);
    expect(items[0].quality).toBe(0);
  });

  it('Edge case quality is negative', () => {
    expect( () => new GildedRose([new Item('Backstage passes to a TAFKAL80ETC concert', 3, -12)])).toThrow();
    //expect an error
  });
  it('Edge case quality is >50', () => {
    expect( () => new GildedRose([new Item('Backstage passes to a TAFKAL80ETC concert', 3, 82)])).toThrow();
    //expect an error
  });
  it('Edge case sellIn < 0, and quality != 0', () => {
    expect( () => new GildedRose([new Item('Backstage passes to a TAFKAL80ETC concert', -3, 12)])).toThrow();
    //expect an error
  });
});

describe('Conjured Mana Cake', () => {
  it('Basic functionality', () => {
    const gildedRose = new GildedRose([new Item('Conjured Mana Cake', 3, 12)]);
    var items = gildedRose.updateQuality();
    expect(items[0].name).toBe('Conjured Mana Cake');
    expect(items[0].sellIn).toBe(2);
    expect(items[0].quality).toBe(10);
  });
  it('When quality is 1 (to 0 not negative)', () => {
    const gildedRose = new GildedRose([new Item('Conjured Mana Cake', 3, 1)]);
    var items = gildedRose.updateQuality();
    expect(items[0].name).toBe('Conjured Mana Cake');
    expect(items[0].sellIn).toBe(2);
    expect(items[0].quality).toBe(0);
  });
  it('When sellIn < 0', () => {
    const gildedRose = new GildedRose([new Item('Conjured Mana Cake', -3, 12)]);
    var items = gildedRose.updateQuality();
    expect(items[0].name).toBe('Conjured Mana Cake');
    expect(items[0].sellIn).toBe(-4);
    expect(items[0].quality).toBe(8);
  });
  it('When quality is 0', () => {
    const gildedRose = new GildedRose([new Item('Conjured Mana Cake', 3, 0)]);
    var items = gildedRose.updateQuality();
    expect(items[0].name).toBe('Conjured Mana Cake');
    expect(items[0].sellIn).toBe(2);
    expect(items[0].quality).toBe(0);
  });
  it('Edge case quality is negative', () => {
    expect( () => new GildedRose([new Item('Conjured Mana Cake', -3, 12)])).toThrow();
    //expect an error
  });
  it('Edge case quality is >50', () => {
    expect( () => new GildedRose([new Item('Conjured Mana Cake', -3, 12)])).toThrow();
    //expect an error
  });

});

describe('Generic Item', () => {
  it('Basic functionality', () => {
    const gildedRose = new GildedRose([new Item('foo', 3, 12)]);
    var items = gildedRose.updateQuality();
    expect(items[0].name).toBe('foo');
    expect(items[0].sellIn).toBe(2);
    expect(items[0].quality).toBe(11);
  });
  it('When sellIn < 0', () => {
    const gildedRose = new GildedRose([new Item('foo', -3, 12)]);
    var items = gildedRose.updateQuality();
    expect(items[0].name).toBe('foo');
    expect(items[0].sellIn).toBe(-4);
    expect(items[0].quality).toBe(10);
  });
  it('When quality is 0', () => {
    const gildedRose = new GildedRose([new Item('foo', 3, 0)]);
    var items = gildedRose.updateQuality();
    expect(items[0].name).toBe('foo');
    expect(items[0].sellIn).toBe(2);
    expect(items[0].quality).toBe(0);
  });
  it('Edge case quality is negative', () => {
    expect( () => new GildedRose([new Item('foo', 3, -12)])).toThrow();
    //expect an error
  });
  it('Edge case quality is >50', () => {
    expect( () => new GildedRose([new Item('foo', 3, 112)])).toThrow();
    //expect an error
  });

});

