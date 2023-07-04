export class Item {
  name: string;
  sellIn: number;
  quality: number;

  constructor(name, sellIn, quality) {
    this.name = name;
    this.sellIn = sellIn;
    this.quality = quality;

    // making sure that the values are allowed (so that not in an initially illegal state)
    if (quality < 0){
      throw new Error("Invalid Quality");
    }
    if (name != 'Sulfuras, Hand of Ragnaros'){
      if (quality > 50){
        throw new Error("Invalid Quality");
      }
    }
    else{ //is a sulfuras
      if (quality != 80){
        throw new Error("Invalid Quality");
      }
    }

    if (name == 'Backstage passes to a TAFKAL80ETC concert'){
      if (sellIn < 0 && quality != 0){
        throw new Error("Invalid Quality for sellIn");
        
      }
    }
    
  }
}

export class GildedRose {
  items: Array<Item>;

  constructor(items = [] as Array<Item>) {
    this.items = items;
  }

  updateQuality() {

    for (let i = 0; i < this.items.length; i++) {
      // for all items the sellIn is decreased
      this.items[i].sellIn -= 1

      //updating if a sulfuras
      if (this.items[i].name == 'Sulfuras, Hand of Ragnaros') {
        this.items[i].sellIn += 1 //(since should be unchanged for sulfuras)
      }
      //updating if a brie
      else if (this.items[i].name == 'Aged Brie') {
        if (this.items[i].quality < 50) {
          this.items[i].quality += 1
        }
      }
      //updating if a backstage pass
      else if (this.items[i].name == 'Backstage passes to a TAFKAL80ETC concert') {
        if (this.items[i].sellIn < 0) {
          this.items[i].quality = 0
        }
        else{
          if (this.items[i].quality < 50) {
            this.items[i].quality += 1
            if (this.items[i].sellIn < 11 && this.items[i].quality < 50) {
                this.items[i].quality += 1
                if (this.items[i].sellIn < 6 && this.items[i].quality < 50) {
                    this.items[i].quality += 1
                }
            }
          }
        }
      }
     //updating if not a special item
     else{
      if (this.items[i].quality > 0) {
          this.items[i].quality -= 1
      }
      if (this.items[i].sellIn < 0 && this.items[i].quality > 0) {
        this.items[i].quality -= 1
      }
     }
    }
    return this.items;
}
}
