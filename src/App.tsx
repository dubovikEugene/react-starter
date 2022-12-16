import React from 'react';
import logo from './logo.svg';
import './styles/App.css';
import DishItem from './components/DishItem/DishItem';

const DISHES = [
  { name: "Smoked mackerel & leek hash with horseradish", 
    img: "https://images.immediate.co.uk/production/volatile/sites/30/2020/08/smoked-mackerel-leek-hash-with-horseradish-dfb5430.jpg?quality=90&webp=true&resize=375,341", 
    cookingTime: 20,
    recipe: "Put the potatoes in a microwaveable bowl with a splash of water, cover, then cook on high for 5 mins until tender (or steam or simmer them).Meanwhile, heat the oil in a frying pan over a medium heat, add the leeks with a pinch of salt and cook for 10 mins, stirring so they don’t stick, until softened. Tip in the potatoes, turn up the heat and fry for a couple of mins to crisp them up a bit. Flake through the mackerel.Make four indents in the leek mixture in the pan, crack an egg into each, season, then cover the pan and cook for 6-8 mins until the whites have set and the yolks are runny. Serve the horseradish on the side, with the pan in the middle of the table.",
    ingridients: 
      [
        {
        name: "new potatoes, halved", 
        quantity: "250g"
        },
        {
        name: "oil", 
        quantity: "2 tbsp"
        },
        {
        name: "large leeks, thinly sliced", 
        quantity: "2 pcs"
        },
        {
        name: "peppered smoked mackerel, skin removed", 
        quantity: "100g"
        },
        {
        name: "eggs", 
        quantity: "4 pcs"
        },
        {
        name: "creamed horseradish, optional", 
        quantity: "2 tbsp"
        }
      ] 
  },
  { name: "Cacio e pepe", 
    img: "https://images.immediate.co.uk/production/volatile/sites/30/2021/03/Cacio-e-Pepe-e44b9f8.jpg?quality=90&webp=true&resize=375,341", 
    cookingTime: 10,
    recipe: "Cook the pasta for 2 mins less than pack instructions state, in salted boiling water. Meanwhile, melt the butter in a medium frying pan over a low heat, then add the ground black pepper and toast for a few minutes. Drain the pasta, keeping 200ml of the pasta water. Tip the pasta and 100ml of the pasta water into the pan with the butter and pepper. Toss briefly, then scatter over the parmesan evenly, but don’t stir – wait for the cheese to melt for 30 seconds, then once melted, toss everything well, and stir together. This prevents the cheese from clumping or going stringy and makes a smooth, shiny sauce. Add a splash more pasta water if you need to, to loosen the sauce and coat the pasta. Serve immediately with a good grating of black pepper.",
    ingridients: 
      [
        {
        name: "bucatini or spaghetti", 
        quantity: "200g"
        },
        {
        name: "butter", 
        quantity: "25g"
        },
        {
        name: "whole black peppercorns, ground, or 1 tsp freshly ground black pepper", 
        quantity: "2 ,tsp"
        },
        {
        name: "pecorino or parmesan, finely grated", 
        quantity: "50g"
        }
      ] 
  },
  
]



function App() {
  return (
    <div className="App">


      {DISHES.map((dish) =>
        <DishItem 
          dish={dish} key={dish.name}
      />
      )}

      
       


      
      
    </div>
  );
}

export default App;
