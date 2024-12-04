const Pizza = (properties) => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, properties.name),
    React.createElement("p", {}, properties.description),
  ]);
};

const App = () => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, "Padre Gino's"),
    React.createElement(Pizza, {
      name: "The Pepperoni Pizza",
      description: "Mozzarella Cheese, Pepperoni",
    }),
    React.createElement(Pizza, {
      name: "The Hawaiian Pizza",
      description: "Sliced Ham, Pineapple, Mozzarella Cheese",
    }),
    React.createElement(Pizza, {
      name: "The Big Meat Pizza",
      description: "Bacon, Pepperoni, Italian Sausage, Chorizo Sausage",
    }),
    React.createElement(Pizza, {
      name: "The Veggie Pizza",
      description: "Mushrooms, Onions, Olives, Tomatoes",
    }),
    React.createElement(Pizza, {
      name: "The Barbecue Chicken Pizza",
      description:
        "Barbecued Chicken, Red Peppers, Green Peppers, Tomatoes, Red Onions, Barbecue Sauce",
    }),
  ]);
};

const container = document.querySelector("#root");
const root = ReactDOM.createRoot(container);
root.render(React.createElement(App));
