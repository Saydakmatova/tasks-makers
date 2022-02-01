import React from "react";
import { MainContext } from "../context/MainProvider";

const Ingredients = () => {
  const { onChangeValue, meal } = React.useContext(MainContext);
  let meals = [
    {
      ingredients:
        "cup chopped carrot, cup chopped potatoes , cup chopped french beans, cup green peas",
      type: "cutlet",
      meal: "Kiev cutlet",
      url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxRAAHEk7cjQP-v3_qsVfWUaoG-xMd1g1-Zg&usqp=CAU",
    },
    {
      ingredients:
        "50g porridge oats, 350ml milk or water, or a mixture of the two",
      type: "porridge",
      meal: "Oatmeal porridge",
      url: "https://media-cdn.tripadvisor.com/media/photo-s/1c/64/a8/c3/caption.jpg",
    },
    {
      ingredients:
        "300 gm chinese noodles, 4 sliced onion, 200 gm shredded cabbage, 150 gm chopped bean ,4 teaspoon sunflower oil, 2 tablespoon tomato chili saucepinch powdered salt, 8 tablespoon water",
      type: "noodles",
      meal: "Langzhou noodle soup",
      url: "https://images.immediate.co.uk/production/volatile/sites/30/2020/08/porridge-with-quick-berry-compote-figs-pistachios-c8c13e6.jpg",
    },
  ];

  return (
    <div>
      <div onChange={onChangeValue}>
        <h2>Choose one of the dishes</h2>
        <input type="radio" value="porridge" name="gender" />
        Porridge
        <input type="radio" value="cutlet" name="gender" />
        Cutlet
        <input type="radio" value="noodles" name="gender" />
        Noodles
      </div>
      <div>
        {meal &&
          meals.map((item, index) => {
            if (item.type === meal) {
              return (
                <div key={index}>
                  <h2>{item.type}</h2>
                  <h4>{item.meal}</h4>
                  <p>ingredients: {item.ingredients}</p>
                  <img src={item.url} alt="" />
                </div>
              );
            }
          })}
      </div>
    </div>
  );
};

export default Ingredients;
