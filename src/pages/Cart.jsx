import ShopBanner from "../components/ShopPage/ShopBanner";
import ShoppingCart from "../components/CartPage/ShoppingCart";
import CartTotal from "../components/CartPage/CartTotal";
import { useSelector } from "react-redux";
export default function Cart() {
  const products = useSelector((state) => state.cart.cartItems);

  return (
    <div>
      <ShopBanner banner={"CART"} />
      <div className="flex justify-between ">
        <ShoppingCart />
        <CartTotal />
      </div>
    </div>
  );
}
