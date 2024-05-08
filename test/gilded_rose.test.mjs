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
});