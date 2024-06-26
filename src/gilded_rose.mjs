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
      this.update(item);
    }
    return this.items;
  }

  update(item){
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
      case "Aged Brie":
        q_val = 1;
        break;
      case "Conjured":
        q_coeff = 2;
        break;
      case "Backstage passes to a TAFKAL80ETC concert":
        if (item.sellIn <= 5){
          q_val = (item.quality+3<=q_max)
            ? 3
            : (item.quality+2<=q_max)
              ? 2
              : (item.quality+1<=q_max)
                ? 1
                : 0;
        } else if (item.sellIn <= 10) {
          q_val = (item.quality+2<=q_max)
            ? 2
            : (item.quality+1<=q_max)
              ? 1
              : 0;
        } else{
          q_val = 1;
        }
        break;
    }

    // degrade 2x faster after deadline
    if(item.sellIn <= 0){
      q_coeff *= 2;
    }

    // update time until sold
    item.sellIn += s_val;

    // check Backstage for quality zero-in
    if(item.sellIn <= 0 && item.name == "Backstage passes to a TAFKAL80ETC concert"){
      item.quality = 0;
      return;
    }
    
    //if need to add 2 or 3, but allows 1, add 1 (similar if allows 2)
    let temp  = q_val * q_coeff;
    if(item.quality + temp > q_max){
      while(item.quality + temp > q_max){
        temp -= 1;
      }
    }

    // temporarily calculate result for validation before saving
    let res = item.quality + temp;
    if((res > q_max && q_val > 0) || res < 0){
      return;
    }
    item.quality = res;
  }

}
