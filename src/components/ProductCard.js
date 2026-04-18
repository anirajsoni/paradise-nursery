import { useDispatch } from "react-redux";
import { addToCart } from "../store/cartSlice";

export default function ProductCard({ plant }) {
  const dispatch = useDispatch();

  return (
    <div>
      <h3>{plant.name}</h3>
      <p>${plant.price}</p>
      <button onClick={() => dispatch(addToCart(plant))}>
        Add to Cart
      </button>
    </div>
  );
}
