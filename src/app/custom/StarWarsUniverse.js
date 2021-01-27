import { getEntity } from "../utils";
import Entity from "./Entity";
export default class StarWarsUniverse {
  static entities = [];
  constructor() {}
  static async init() {
    try {
      const rootResponse = await (
        await fetch("https://swapi.booost.bg/api/")
      ).json(); // getting the json response
      // iterating over differnet entries and getting the data from them
      // see getEntity function in utils.js
      for (const key in rootResponse) {
        this.entities.push(
          new Entity(key, await getEntity(`${rootResponse[key]}`))
        );
      }
    } catch(err){
        console.log(err);
    }
  }
}
