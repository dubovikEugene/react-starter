export interface IFullRecipe {
  cookingTime: number;
  id: string;
  img: string;
  ingridients: { name: string; quantity: string }[];
  name: string;
  recipe: string;
}
