export type TRestrauntFormData = {
  restaurantName: string;
  country: string;
  city: string;
  telephone: number;
  openingHours: number;
  servesCuisine: string[];
  imageUrl: string;
  menu: { name: string; price: number }[];
};
