export type TRestrauntFormData = {
  restaurantName: string;
  country: string;
  city: string;
  telephone: string;
  openingHours: number;
  servesCuisine: string[];
  imageUrl: string;
  menu: { name: string; price: number }[];
};
