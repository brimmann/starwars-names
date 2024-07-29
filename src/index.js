import starWarsNames from "./starwars-names.js";
import uniqueRandomArray from "unique-random-array";

export const all = starWarsNames;
export const random = uniqueRandomArray(starWarsNames);
