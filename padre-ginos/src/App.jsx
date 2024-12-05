import { createRoot } from "react-dom/client";
import Pizza from "./Pizza";

const App = () => {
  return (
    <div>
      <h1>Padre Gino's - Order</h1>
      <Pizza
        name="Margherita"
        description="Tomato sauce, mozzarella, basil, and oregano"
      />
      <Pizza
        name="Prosciutto-Marinara"
        description="Prosciutto, tomatoes, olive oil, garlic, and basil"
      />
      <Pizza
        name="Funghi-Antipasto"
        description="Grated Parmesan cheese, cherry tomatoes, basil, and oregano"
      />
    </div>
  );
};

const container = document.querySelector("#root");
const root = createRoot(container);
root.render(React.createElement(App));
