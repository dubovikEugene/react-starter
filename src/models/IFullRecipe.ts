export interface IFullRecipe {
  cookingTime: string;
  id: string;
  img: string;
  ingridients: { name: string; quantity: string }[];
  name: string;
  recipe: string;
}
