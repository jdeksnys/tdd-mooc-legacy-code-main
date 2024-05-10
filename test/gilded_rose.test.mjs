import { describe, test } from "vitest";
import { expect } from "chai";
import { Item, Shop } from "../src/gilded_rose.mjs";

describe("Gilded Rose", () => {
  test("foo", () => {
    const gildedRose = new Shop([new Item("foo", 0, 0)]);
    const items = gildedRose.updateQuality();
    let res = JSON.stringify(items[0]);
    expect(res).to.equal(`{"name":"foo","sellIn":-1,"quality":0}`);
  });

    test("name=foo; sellIn=5; quality=49", () => {
    const gildedRose = new Shop([new Item("foo", 1, 10)]);
    const items = gildedRose.updateQuality();
    let res = JSON.stringify(items[0]);
    expect(res).toBe(`{"name":"foo","sellIn":0,"quality":9}`);
  });

  test("name: foo; sellIn<0", () => {
    const gildedRose = new Shop([new Item("foo", -10, 10)]);
    const items = gildedRose.updateQuality();
    let res = JSON.stringify(items[0]);
    expect(res).to.equal(`{"name":"foo","sellIn":-11,"quality":8}`);
  });
  test("name: foo; quality>50", () => {
    const gildedRose = new Shop([new Item("foo", 10, 55)]);
    const items = gildedRose.updateQuality();
    let res = JSON.stringify(items[0]);
    expect(res).to.equal(`{"name":"foo","sellIn":9,"quality":54}`);
  });

    test("name: Sulfuras, Hand of Ragnaros; sellIn<0", () => {
    const gildedRose = new Shop([new Item("Sulfuras, Hand of Ragnaros", -10, 10)]);
    const items = gildedRose.updateQuality();
    let res = JSON.stringify(items[0]);
    expect(res).to.equal(`{"name":"Sulfuras, Hand of Ragnaros","sellIn":-10,"quality":10}`);
  });

  // test("name: Aged Brie; sellIn<0", () => {
  //   const gildedRose = new Shop([new Item("Aged Brie", -10, 10)]);
  //   const items = gildedRose.updateQuality();
  //   let res = JSON.stringify(items[0]);
  //   expect(res).to.equal(`{"name":"Aged Brie","sellIn":-11,"quality":12}`);
  // });
  // test("name: Aged Brie; quality>50", () => {
  //   const gildedRose = new Shop([new Item("Aged Brie", 10, 55)]);
  //   const items = gildedRose.updateQuality();
  //   let res = JSON.stringify(items[0]);
  //   expect(res).to.equal(`{"name":"Aged Brie","sellIn":9,"quality":55}`);
  // });
  // test("name: Aged Brie; sellIn=0; quality>50", () => {
  //   const gildedRose = new Shop([new Item("Aged Brie", 0, 55)]);
  //   const items = gildedRose.updateQuality();
  //   let res = JSON.stringify(items[0]);
  //   expect(res).to.equal(`{"name":"Aged Brie","sellIn":-1,"quality":55}`);
  // });

  //   test("name=Aged Brie; sellIn=0; quality=49", () => {
  //   const gildedRose = new Shop([new Item("Aged Brie", 0, 49)]);
  //   const items = gildedRose.updateQuality();
  //   let res = JSON.stringify(items[0]);
  //   expect(res).to.equal(`{"name":"Aged Brie","sellIn":-1,"quality":50}`);
  // });

  //   test("name=Aged Brie; sellIn=10; quality=50", () => {
  //   const gildedRose = new Shop([new Item("Aged Brie", 10, 50)]);
  //   const items = gildedRose.updateQuality();
  //   let res = JSON.stringify(items[0]);
  //   expect(res).to.equal(`{"name":"Aged Brie","sellIn":9,"quality":50}`);
  // });

  // test("name=Aged Brie; sellIn=10; quality=50", () => {
  //   const gildedRose = new Shop(["blablabla"]);
  //   let items;
  //   try{
  //     items = gildedRose.updateQuality();
  //   } catch(err){
  //     expect(err.toString()).to.equal(`TypeError: Cannot create property 'sellIn' on string 'blablabla'`);
  //   }
  // });

  //   test("name: Backstage...", () => {
  //   const gildedRose = new Shop([new Item("Backstage passes to a TAFKAL80ETC concert", 0, 0)]);
  //   const items = gildedRose.updateQuality();
  //   let res = JSON.stringify(items[0]);
  //   expect(res).to.equal(`{"name":"Backstage passes to a TAFKAL80ETC concert","sellIn":-1,"quality":0}`);
  // });

  // test("name: Backstage passes to a TAFKAL80ETC concert; quality<10", () => {
  //   const gildedRose = new Shop([new Item("Backstage passes to a TAFKAL80ETC concert", 10, -10)]);
  //   const items = gildedRose.updateQuality();
  //   let res = JSON.stringify(items[0]);
  //   expect(res).to.equal(`{"name":"Backstage passes to a TAFKAL80ETC concert","sellIn":9,"quality":-8}`);
  // });
  // test("name: Backstage passes to a TAFKAL80ETC concert; quality<10", () => {
  //   const gildedRose = new Shop([new Item("Backstage passes to a TAFKAL80ETC concert", -10, -10)]);
  //   const items = gildedRose.updateQuality();
  //   let res = JSON.stringify(items[0]);
  //   expect(res).to.equal(`{"name":"Backstage passes to a TAFKAL80ETC concert","sellIn":-11,"quality":0}`);
  // });
  // test("name: Backstage passes to a TAFKAL80ETC concert; sellIn>50", () => {
  //   const gildedRose = new Shop([new Item("Backstage passes to a TAFKAL80ETC concert", 55, 10)]);
  //   const items = gildedRose.updateQuality();
  //   let res = JSON.stringify(items[0]);
  //   expect(res).to.equal(`{"name":"Backstage passes to a TAFKAL80ETC concert","sellIn":54,"quality":11}`);
  // });

  // test("name=Backstage passes to a TAFKAL80ETC concert; sellIn=5; quality=20", () => {
  //   const gildedRose = new Shop([new Item("Backstage passes to a TAFKAL80ETC concert", 5, 20)]);
  //   const items = gildedRose.updateQuality();
  //   let res = JSON.stringify(items[0]);
  //   expect(res).to.equal(`{"name":"Backstage passes to a TAFKAL80ETC concert","sellIn":4,"quality":23}`);
  // });



  // test("name=Backstage passes to a TAFKAL80ETC concert; sellIn=11; quality=11", () => {
  //   const gildedRose = new Shop([new Item("Backstage passes to a TAFKAL80ETC concert", 11, 11)]);
  //   const items = gildedRose.updateQuality();
  //   let res = JSON.stringify(items[0]);
  //   expect(res).to.equal(`{"name":"Backstage passes to a TAFKAL80ETC concert","sellIn":10,"quality":12}`);
  // });

  // test("name=Backstage passes to a TAFKAL80ETC concert; sellIn=10; quality=49", () => {
  //   const gildedRose = new Shop([new Item("Backstage passes to a TAFKAL80ETC concert", 10, 49)]);
  //   const items = gildedRose.updateQuality();
  //   let res = JSON.stringify(items[0]);
  //   expect(res).to.equal(`{"name":"Backstage passes to a TAFKAL80ETC concert","sellIn":9,"quality":50}`);
  // });

  // test("name=Backstage passes to a TAFKAL80ETC concert; sellIn=6; quality=6", () => {
  //   const gildedRose = new Shop([new Item("Backstage passes to a TAFKAL80ETC concert", 6, 6)]);
  //   const items = gildedRose.updateQuality();
  //   let res = JSON.stringify(items[0]);
  //   expect(res).toBe(`{"name":"Backstage passes to a TAFKAL80ETC concert","sellIn":5,"quality":8}`);
  // });

  // test("name=Backstage passes to a TAFKAL80ETC concert; sellIn=5; quality=49", () => {
  //   const gildedRose = new Shop([new Item("Backstage passes to a TAFKAL80ETC concert", 5, 49)]);
  //   const items = gildedRose.updateQuality();
  //   let res = JSON.stringify(items[0]);
  //   expect(res).to.equal(`{"name":"Backstage passes to a TAFKAL80ETC concert","sellIn":4,"quality":50}`);
  // });    



  // test("constructor params ok", () => {
  //   let shop = new Shop();
  //   expect(shop.items.length).toBe(0);
  // });
});
