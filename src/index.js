import starWarsNames from "./starwars-names.json" assert { type: "json" };
import uniqueRandomArray from "unique-random-array";

export const all = starWarsNames;
export const random = uniqueRandomArray(starWarsNames);
