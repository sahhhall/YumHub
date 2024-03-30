import biriyani from "@/assets/cuisines/Biriyani.png"
import chinese from "@/assets/cuisines/Chinese.png"
import burger from "@/assets/cuisines/Burger.png"
import cakes from "@/assets/cuisines/Cakes.png"
import dosa from "@/assets/cuisines/Dosa.png"
import icecreams from "@/assets/cuisines/Ice Creams.png"
import sadya from "@/assets/cuisines/Kerala.png"
import paratha from "@/assets/cuisines/Paratha.png"
import parotto from "@/assets/cuisines/Parotta.png"
import pizza from "@/assets/cuisines/Pizza.png"
import shakes from "@/assets/cuisines/Shakes.png"
import shawarma from "@/assets/cuisines/Shawarma.png"
import noodles from "@/assets/cuisines/Noodles.png"

const cuisineImages: { [key: string]: string } = {
  Biriyani: biriyani,
  Chinese: chinese,
  Burger: burger,
  Cakes: cakes,
  Dosa: dosa,
  IceCreams: icecreams,
  Sadya: sadya,
  Paratha: paratha,
  Pizza: pizza,
  Parotto: parotto,
  Shakes: shakes,
  Shawarma: shawarma,
  Noodles: noodles
};

const cuisinesListt = [
  "Biriyani",
  "Chinese",
  "Burger",
  "Cakes",
  "Dosa",
  "IceCreams",
  "Sadya",
  "Paratha",
  "Pizza",
  "Parotto",
  "Shakes",
  "Shawarma",
  "Noodles"
 
];

export const cuisines = cuisinesListt.map((cuisine) => ({
  name: cuisine,
  img: cuisineImages[cuisine] || undefined,
}));
