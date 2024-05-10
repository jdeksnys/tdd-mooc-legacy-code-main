export class Item {
  constructor(name, sellIn, quality) {
    this.name = name;
    this.sellIn = sellIn;
    this.quality = quality;
  }
}

export class Shop {
  constructor(items = []) {
    this.items = items;
  }

  
  updateQuality() {
    for (var i = 0; i < this.items.length; i++) {
      let item = this.items[i];
      this.extracted2(item);
    }
    return this.items;
  }

  extracted2(item){
    let q_coeff = 1;
    let q_val = -1;
    let q_max = 50;
    let s_val = -1;

    // get quality daily change for all items
    switch(item.name){
      case "Sulfuras, Hand of Ragnaros":
        q_max = 80;
        q_val = 0;
        s_val = 0;
        break;
      default:
        q_val = -1;
        break;
    }

    // degrade 2x faster after deadline
    if(item.sellIn < 0 && q_val < 0){
      q_coeff = 2;
    }

    // get quality daily change for Aged Brie 
    if(item.name == "Aged Brie"){
      let s = item.sellIn;
      switch(true){
        case (s <= 10):
          q_val = (item.quality+2<=q_max)
            ? 2
            : (item.quality+1<=q_max)
              ? 1
              : 0;
          break;
        default:
          q_val = 1;
          break;
      }
    }

    // temporarily calc result for validation before saving
    item.sellIn += s_val;
    let res = item.quality + q_val * q_coeff;
    if((res > q_max && q_val > 0) || res < 0){
      return;
    }
    item.quality = res;
  }
  
  extracted(item){
      if (item.name != "Aged Brie" && item.name != "Backstage passes to a TAFKAL80ETC concert") {
        if (item.quality > 0) {
          if (item.name != "Sulfuras, Hand of Ragnaros") {
            item.quality = item.quality - 1;
          }
        }
      } else {
        if (item.quality < 50) {
          item.quality = item.quality + 1;
          if (item.name == "Backstage passes to a TAFKAL80ETC concert") {
            if (item.sellIn < 11) {
              if (item.quality < 50) {
                item.quality = item.quality + 1;
              }
            }
            if (item.sellIn < 6) {
              if (item.quality < 50) {
                item.quality = item.quality + 1;
              }
            }
          }
        }
      }
      if (item.name != "Sulfuras, Hand of Ragnaros") {
        item.sellIn = item.sellIn - 1;
      }
      if (item.sellIn < 0) {
        if (item.name != "Aged Brie") {
          if (item.name != "Backstage passes to a TAFKAL80ETC concert") {
            if (item.quality > 0) {
              if (item.name != "Sulfuras, Hand of Ragnaros") {
                item.quality = item.quality - 1;
              }
            }
          } else {
            item.quality = item.quality - item.quality;
          }
        } else {
          if (item.quality < 50) {
            item.quality = item.quality + 1;
          }
        }
      }
    }
}
