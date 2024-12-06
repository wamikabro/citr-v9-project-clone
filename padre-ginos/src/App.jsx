import { createRoot } from "react-dom/client";
import Pizza from "./Pizza";

const App = () => {
  return (
    <div>
      <h1>Padre Gino's - Order</h1>
      <Pizza
        name="Margherita"
        description="Tomato sauce, mozzarella, basil, and oregano"
        image="/public/pizzas/pepperoni.webp"
      />
      <Pizza
        name="Prosciutto-Marinara"
        description="Prosciutto, tomatoes, olive oil, garlic, and basil"
        image="/public/pizzas/hawaiian.webp"
      />
      <Pizza
        name="Funghi-Antipasto"
        description="Grated Parmesan cheese, cherry tomatoes, basil, and oregano"
        image="/public/pizzas/big_meat.webp"
      />
    </div>
  );
};

const container = document.querySelector("#root");
const root = createRoot(container);
root.render(<App />);
