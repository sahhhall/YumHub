// Import images directly or use dynamic imports
import thai from '../../../assets/cuisines/Thai.png';
import chennai from '../../../assets/cuisines/Chennai.png';
import kerala from '../../../assets/cuisines/Kerala.png';
import chinese from '../../../assets/cuisines/Chinese.png';
import italian from '../../../assets/cuisines/Italian.png';
import japanese from '../../../assets/cuisines/Japanese.png';

const cuisineImages: { [key: string]: string } = {
  Thai: thai,
  Chennai: chennai,
  Kerala: kerala,
  Chinese: chinese,
  Italian: italian,
  Japanese: japanese
};

export const cuisinesList = [
  "Italian",
  "Chinese",
  "Japanese",
  "Mexican",
  "Thai",
  "French",
  "Indian",
  "Spanish",
  "Greek",
  "Lebanese",
  "Turkish",
  "Vietnamese",
  "Korean",
  "Brazilian",
  "American",
  "German",
  "British",
  "Russian"
];

const cuisinesListt = [
  "Thai",
  "Chennai",
  "Kerala",
  "Chinese",
  "Italian",
  "Japanese"
];

export const cuisines = cuisinesListt.map((cuisine) => ({
  name: cuisine,
  img: cuisineImages[cuisine] || undefined
}));
