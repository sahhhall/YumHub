// Import images directly or use dynamic imports
import thai from "../../../assets/cuisines/Thai.png";
import chennai from "../../../assets/cuisines/Chennai.png";
import kerala from "../../../assets/cuisines/Kerala.png";
import chinese from "../../../assets/cuisines/Chinese.png";
import italian from "../../../assets/cuisines/Italian.png";
import japanese from "../../../assets/cuisines/Japanese.png";
import pizza from "../../../assets/cuisines/Pizza.png";
import burger from "../../../assets/cuisines/Burger.png";


const cuisineImages: { [key: string]: string } = {
  Thai: thai,
  Chennai: chennai,
  Kerala: kerala,
  Chinese: chinese,
  Italian: italian,
  Japanese: japanese,
  Pizza: pizza,
  Burger: burger,
};

const cuisinesListt = [
  "Thai",
  "Chennai",
  "Kerala",
  "Chinese",
  "Italian",
  "Japanese",
  "Burger",
  "Pizza",
];

export const cuisines = cuisinesListt.map((cuisine) => ({
  name: cuisine,
  img: cuisineImages[cuisine] || undefined,
}));
