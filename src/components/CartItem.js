import { useDispatch } from "react-redux";
import { increaseQty, decreaseQty, removeFromCart } from "../store/cartSlice";

export default function CartItem({ item }) {
  const dispatch = useDispatch();

  return (
    <div>
      <h4>{item.name}</h4>
      <p>Qty: {item.quantity}</p>
      <button onClick={() => dispatch(increaseQty(item.id))}>+</button>
      <button onClick={() => dispatch(decreaseQty(item.id))}>-</button>
      <button onClick={() => dispatch(removeFromCart(item.id))}>Remove</button>
    </div>
  );
}
