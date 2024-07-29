import { expect } from "chai";
import * as starwars from "./index.js";

describe("starwars-names", () => {
  describe("all", () => {
    it("should be an arry of strings", () => {
      expect(starwars.all).to.satisfies(isArrayOfStrings);
      function isArrayOfStrings(array) {
        return array.every((item) => typeof item === "string");
      }
    });
    it("should contain 'Bossk'", () => {
      expect(starwars.all).to.include("Bossk");
    });
  });
  describe("random", () => {
    it("should return random item that is in the list", () => {
      const randomItem = starwars.random();
      expect(starwars.all).to.include(randomItem);
    });
    it("shuld return a array of random items if passed a number", () => {
      const randomItems = starwars.random(3);
      expect(randomItems).to.have.length(3);
      randomItems.forEach((item) => {
        expect(starwars.all).to.include(item);
      });
    });
  });
  describe("addCustomName", () => {
    it("should contain the new added name", () => {
      starwars.addCustomName("Kolo Cha");
      expect(starwars.all).to.include("Kolo Cha")
    })
  })
});
