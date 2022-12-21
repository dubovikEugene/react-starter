export interface Dish {
  name: string;
  img: string;
  cookingTime: number;
  recipe: string;
  ingridients: { name: string; quantity: string }[];
}
