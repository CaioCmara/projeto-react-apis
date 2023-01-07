import bug from "../assets/types/bug.png";
 
import fire from "../assets/types/fire.png";
import flying from "../assets/types/flying.png";
import grass from "../assets/types/grass.png";
import normal from "../assets/types/normal.png";
import poison from "../assets/types/poison.png";

import water from "../assets/types/water.png";

export const pokemonType = (tipo) => {
  switch (tipo) {
    case "bug":
      return bug;
    case "fire":
      return fire;
    case "flying":
      return flying;
    case "normal":
      return normal;
    case "flying":
      return flying;
    case "grass":
      return grass;
    case "poison":
      return poison;
    case "water":
      return water;
    default:
      return normal;
  }
};
