import starWarsNames from "./starwars-names.js";
import uniqueRandomArray from "unique-random-array";

export const all = starWarsNames;
export const random = (number) => {
  if (number === undefined) {
    console.log("Is it there even")
    return uniqueRandomArray(starWarsNames)();
  } else {
    const randomItems = [];
    for (let i = 0; i < number; i++) {
      randomItems.push(uniqueRandomArray(starWarsNames)());
    }
    return randomItems;
  }
};
export const addCustomName = (name) => {
  if(name !== undefined) {
    starWarsNames.push(name)
  } else {
    console.error("addCusotmName() requires a name as argument")
  }
} 
