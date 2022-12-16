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
        quantity: "2 tsp"
        },
        {
        name: "pecorino or parmesan, finely grated", 
        quantity: "50g"
        }
      ] 
  },
  { name: "Easy kedgeree", 
    img: "https://images.immediate.co.uk/production/volatile/sites/30/2021/03/Keep-it-simple-kedgeree-a5f30c8.jpg?quality=90&webp=true&resize=375,341", 
    cookingTime: 35,
    recipe: "Heat the oven to 180C/160C fan/gas 4. Heat an ovenproof saucepan or flameproof casserole over a medium heat and toast the curry powder for 1 min. Stir in the rice to coat it in the curry powder, then pour over the stock. Bring to the boil, then lay the haddock on top. Cover. Cook in the oven for 30 mins. Carefully remove from the oven. Leave to rest for a minute, then stir through the peas while breaking up the haddock and fluffing the rice. Season to taste, then serve.",
    ingridients: 
      [
        {
        name: "curry powder of your choice", 
        quantity: "2 tbsp"
        },
        {
        name: "basmati rice", 
        quantity: "300g"
        },
        {
        name: "chicken stock", 
        quantity: "400g"
        },
        {
        name: "frozen peas", 
        quantity: "100g"
        }
      ] 
  },
  { name: "Creamy pesto & kale pasta", 
    img: "https://images.immediate.co.uk/production/volatile/sites/30/2020/08/creamy-pesto-kale-pasta-d582e18.jpg?quality=90&webp=true&resize=375,341", 
    cookingTime: 25,
    recipe: "Heat the oil in a large pan over a medium heat. Fry the onions for 10 mins until softened and beginning to caramelise. Add the kale and 100ml water, then cover and cook for 5 mins more, or until the kale has wilted. Cook the pasta following pack instructions. Drain, reserving a little of the cooking water. Toss the pasta with the onion mixture, soft cheese and pesto, adding a splash of the reserved cooking water to loosen, if needed. Season.",
    ingridients: 
      [
        {
        name: "rapeseed oil", 
        quantity: "1 tbsp"
        },
        {
        name: "red onions, thinly sliced", 
        quantity: "2 pcs"
        },
        {
        name: "kale", 
        quantity: "300g"
        },
        {
        name: "wholemeal pasta (penne or mafalda work well)", 
        quantity: "300g"
        },
        {
        name: "reduced-fat soft cheese", 
        quantity: "4 tbsp"
        },
        {
        name: "fresh or jar pesto, or vegetarian alternative", 
        quantity: "4 tbsp"
        }
      ] 
  },
  { name: "Saucy bean baked eggs", 
    img: "https://images.immediate.co.uk/production/volatile/sites/30/2020/08/saucy-bean-baked-eggs-d582e18.jpg?quality=90&webp=true&resize=375,341", 
    cookingTime: 20,
    recipe: "Tip the tomatoes and bean salad into an ovenproof frying pan or shallow flameproof casserole dish. Simmer for 10 mins, or until reduced. Stir in the spinach and cook for 5 mins more until wilted.Heat the grill to medium. Make four indentations in the mixture using the back of a spoon, then crack one egg in each. Nestle the ham in the mixture, then grill for 4-5 mins, or until the whites are set and the yolks runny. Serve with rye bread, if you like.",
    ingridients: 
      [
        {
        name: "cherry tomatoes", 
        quantity: "2 x 400g cans"
        },
        {
        name: "mixed bean salad, drained", 
        quantity: "400g can"
        },
        {
        name: "baby spinach", 
        quantity: "200g"
        },
        {
        name: "medium eggs", 
        quantity: "4 pcs"
        },
        {
        name: "thinly sliced smoked ham, torn", 
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
