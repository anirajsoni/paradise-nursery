import { useSelector } from "react-redux";
import CartItem from "./CartItem";

export default function Cart() {
  const cart = useSelector(state => state.cart);

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div>
      <h2>Cart</h2>
      {cart.map(item => <CartItem key={item.id} item={item} />)}
      <h3>Total: ${total}</h3>
    </div>
  );
}
