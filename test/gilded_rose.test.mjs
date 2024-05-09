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

  test("name: Backstage...", () => {
    const gildedRose = new Shop([new Item("Backstage passes to a TAFKAL80ETC concert", 0, 0)]);
    const items = gildedRose.updateQuality();
    let res = JSON.stringify(items[0]);
    expect(res).to.equal(`{"name":"Backstage passes to a TAFKAL80ETC concert","sellIn":-1,"quality":0}`);
  });

  test("name: foo; sellIn<0", () => {
    const gildedRose = new Shop([new Item("foo", -10, 10)]);
    const items = gildedRose.updateQuality();
    let res = JSON.stringify(items[0]);
    expect(res).to.equal(`{"name":"foo","sellIn":-11,"quality":8}`);
  });
  test("name: foo; quality<10", () => {
    const gildedRose = new Shop([new Item("foo", 10, -10)]);
    const items = gildedRose.updateQuality();
    let res = JSON.stringify(items[0]);
    expect(res).to.equal(`{"name":"foo","sellIn":9,"quality":-10}`);
  });
  test("name: foo; quality<10", () => {
    const gildedRose = new Shop([new Item("foo", -10, -10)]);
    const items = gildedRose.updateQuality();
    let res = JSON.stringify(items[0]);
    expect(res).to.equal(`{"name":"foo","sellIn":-11,"quality":-10}`);
  });
  test("name: foo; quality>50", () => {
    const gildedRose = new Shop([new Item("foo", 10, 55)]);
    const items = gildedRose.updateQuality();
    let res = JSON.stringify(items[0]);
    expect(res).to.equal(`{"name":"foo","sellIn":9,"quality":54}`);
  });
  test("name: foo; sellIn>50", () => {
    const gildedRose = new Shop([new Item("foo", 55, 10)]);
    const items = gildedRose.updateQuality();
    let res = JSON.stringify(items[0]);
    expect(res).to.equal(`{"name":"foo","sellIn":54,"quality":9}`);
  });
  test("name: foo; sellIn>50; quality>50", () => {
    const gildedRose = new Shop([new Item("foo", 55, 55)]);
    const items = gildedRose.updateQuality();
    let res = JSON.stringify(items[0]);
    expect(res).to.equal(`{"name":"foo","sellIn":54,"quality":54}`);
  });
  test("name: foo; sellIn=0; quality<10", () => {
    const gildedRose = new Shop([new Item("foo", 0, 9)]);
    const items = gildedRose.updateQuality();
    let res = JSON.stringify(items[0]);
    expect(res).to.equal(`{"name":"foo","sellIn":-1,"quality":7}`);
  });
  test("name: foo; sellIn=0; quality>10", () => {
    const gildedRose = new Shop([new Item("foo", 0, 33)]);
    const items = gildedRose.updateQuality();
    let res = JSON.stringify(items[0]);
    expect(res).to.equal(`{"name":"foo","sellIn":-1,"quality":31}`);
  });
  test("name: foo; sellIn=0; quality>50", () => {
    const gildedRose = new Shop([new Item("foo", 0, 55)]);
    const items = gildedRose.updateQuality();
    let res = JSON.stringify(items[0]);
    expect(res).to.equal(`{"name":"foo","sellIn":-1,"quality":53}`);
  });
  test("name: foo; sellIn=0; quality<10", () => {
    const gildedRose = new Shop([new Item("foo", 0, 9)]);
    const items = gildedRose.updateQuality();
    let res = JSON.stringify(items[0]);
    expect(res).to.equal(`{"name":"foo","sellIn":-1,"quality":7}`);
  });
  test("name: foo; sellIn=0; quality>10", () => {
    const gildedRose = new Shop([new Item("foo", 0, 33)]);
    const items = gildedRose.updateQuality();
    let res = JSON.stringify(items[0]);
    expect(res).to.equal(`{"name":"foo","sellIn":-1,"quality":31}`);
  });
  test("name: foo; sellIn=0; quality>50", () => {
    const gildedRose = new Shop([new Item("foo", 0, 55)]);
    const items = gildedRose.updateQuality();
    let res = JSON.stringify(items[0]);
    expect(res).to.equal(`{"name":"foo","sellIn":-1,"quality":53}`);
  });

  test("name: Aged Brie; sellIn<0", () => {
    const gildedRose = new Shop([new Item("Aged Brie", -10, 10)]);
    const items = gildedRose.updateQuality();
    let res = JSON.stringify(items[0]);
    expect(res).to.equal(`{"name":"Aged Brie","sellIn":-11,"quality":12}`);
  });
  test("name: Aged Brie; quality<10", () => {
    const gildedRose = new Shop([new Item("Aged Brie", 10, -10)]);
    const items = gildedRose.updateQuality();
    let res = JSON.stringify(items[0]);
    expect(res).to.equal(`{"name":"Aged Brie","sellIn":9,"quality":-9}`);
  });
  test("name: Aged Brie; quality<10", () => {
    const gildedRose = new Shop([new Item("Aged Brie", -10, -10)]);
    const items = gildedRose.updateQuality();
    let res = JSON.stringify(items[0]);
    expect(res).to.equal(`{"name":"Aged Brie","sellIn":-11,"quality":-8}`);
  });
  test("name: Aged Brie; quality>50", () => {
    const gildedRose = new Shop([new Item("Aged Brie", 10, 55)]);
    const items = gildedRose.updateQuality();
    let res = JSON.stringify(items[0]);
    expect(res).to.equal(`{"name":"Aged Brie","sellIn":9,"quality":55}`);
  });
  test("name: Aged Brie; sellIn>50", () => {
    const gildedRose = new Shop([new Item("Aged Brie", 55, 10)]);
    const items = gildedRose.updateQuality();
    let res = JSON.stringify(items[0]);
    expect(res).to.equal(`{"name":"Aged Brie","sellIn":54,"quality":11}`);
  });
  test("name: Aged Brie; sellIn>50; quality>50", () => {
    const gildedRose = new Shop([new Item("Aged Brie", 55, 55)]);
    const items = gildedRose.updateQuality();
    let res = JSON.stringify(items[0]);
    expect(res).to.equal(`{"name":"Aged Brie","sellIn":54,"quality":55}`);
  });

  test("name: Sulfuras, Hand of Ragnaros; sellIn<0", () => {
    const gildedRose = new Shop([new Item("Sulfuras, Hand of Ragnaros", -10, 10)]);
    const items = gildedRose.updateQuality();
    let res = JSON.stringify(items[0]);
    expect(res).to.equal(`{"name":"Sulfuras, Hand of Ragnaros","sellIn":-10,"quality":10}`);
  });
  test("name: Sulfuras, Hand of Ragnaros; quality<10", () => {
    const gildedRose = new Shop([new Item("Sulfuras, Hand of Ragnaros", 10, -10)]);
    const items = gildedRose.updateQuality();
    let res = JSON.stringify(items[0]);
    expect(res).to.equal(`{"name":"Sulfuras, Hand of Ragnaros","sellIn":10,"quality":-10}`);
  });
  test("name: Sulfuras, Hand of Ragnaros; quality<10", () => {
    const gildedRose = new Shop([new Item("Sulfuras, Hand of Ragnaros", -10, -10)]);
    const items = gildedRose.updateQuality();
    let res = JSON.stringify(items[0]);
    expect(res).to.equal(`{"name":"Sulfuras, Hand of Ragnaros","sellIn":-10,"quality":-10}`);
  });
  test("name: Sulfuras, Hand of Ragnaros; quality>50", () => {
    const gildedRose = new Shop([new Item("Sulfuras, Hand of Ragnaros", 10, 55)]);
    const items = gildedRose.updateQuality();
    let res = JSON.stringify(items[0]);
    expect(res).to.equal(`{"name":"Sulfuras, Hand of Ragnaros","sellIn":10,"quality":55}`);
  });
  test("name: Sulfuras, Hand of Ragnaros; sellIn>50", () => {
    const gildedRose = new Shop([new Item("Sulfuras, Hand of Ragnaros", 55, 10)]);
    const items = gildedRose.updateQuality();
    let res = JSON.stringify(items[0]);
    expect(res).to.equal(`{"name":"Sulfuras, Hand of Ragnaros","sellIn":55,"quality":10}`);
  });
  test("name: Sulfuras, Hand of Ragnaros; sellIn>50; quality>50", () => {
    const gildedRose = new Shop([new Item("Sulfuras, Hand of Ragnaros", 55, 55)]);
    const items = gildedRose.updateQuality();
    let res = JSON.stringify(items[0]);
    expect(res).to.equal(`{"name":"Sulfuras, Hand of Ragnaros","sellIn":55,"quality":55}`);
  });

  test("name: Backstage passes to a TAFKAL80ETC concert; sellIn<0", () => {
    const gildedRose = new Shop([new Item("Backstage passes to a TAFKAL80ETC concert", -10, 10)]);
    const items = gildedRose.updateQuality();
    let res = JSON.stringify(items[0]);
    expect(res).to.equal(`{"name":"Backstage passes to a TAFKAL80ETC concert","sellIn":-11,"quality":0}`);
  });
  test("name: Backstage passes to a TAFKAL80ETC concert; quality<10", () => {
    const gildedRose = new Shop([new Item("Backstage passes to a TAFKAL80ETC concert", 10, -10)]);
    const items = gildedRose.updateQuality();
    let res = JSON.stringify(items[0]);
    expect(res).to.equal(`{"name":"Backstage passes to a TAFKAL80ETC concert","sellIn":9,"quality":-8}`);
  });
  test("name: Backstage passes to a TAFKAL80ETC concert; quality<10", () => {
    const gildedRose = new Shop([new Item("Backstage passes to a TAFKAL80ETC concert", -10, -10)]);
    const items = gildedRose.updateQuality();
    let res = JSON.stringify(items[0]);
    expect(res).to.equal(`{"name":"Backstage passes to a TAFKAL80ETC concert","sellIn":-11,"quality":0}`);
  });
  test("name: Backstage passes to a TAFKAL80ETC concert; quality>50", () => {
    const gildedRose = new Shop([new Item("Backstage passes to a TAFKAL80ETC concert", 10, 55)]);
    const items = gildedRose.updateQuality();
    let res = JSON.stringify(items[0]);
    expect(res).to.equal(`{"name":"Backstage passes to a TAFKAL80ETC concert","sellIn":9,"quality":55}`);
  });
  test("name: Backstage passes to a TAFKAL80ETC concert; sellIn>50", () => {
    const gildedRose = new Shop([new Item("Backstage passes to a TAFKAL80ETC concert", 55, 10)]);
    const items = gildedRose.updateQuality();
    let res = JSON.stringify(items[0]);
    expect(res).to.equal(`{"name":"Backstage passes to a TAFKAL80ETC concert","sellIn":54,"quality":11}`);
  });
  test("name: Backstage passes to a TAFKAL80ETC concert; sellIn>50; quality>50", () => {
    const gildedRose = new Shop([new Item("Backstage passes to a TAFKAL80ETC concert", 55, 55)]);
    const items = gildedRose.updateQuality();
    let res = JSON.stringify(items[0]);
    expect(res).to.equal(`{"name":"Backstage passes to a TAFKAL80ETC concert","sellIn":54,"quality":55}`);
  });
});
