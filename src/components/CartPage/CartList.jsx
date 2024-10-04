import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeFromCart, updateCartbyIndex } from "../../redux-store/cart";

export default function CartList({ product }) {
  const ref = useRef();
  const dispatch = useDispatch();
  const handleInputChange = () => {
    const quantity = ref.current.value == "" ? 0 : parseInt(ref.current.value);
    const totalPrice = (parseInt(product.price.replace(/\./g, "")) * quantity)
      .toLocaleString("en-US")
      .replace(/,/g, ".");
    const products = { ...product, quantity, totalPrice };
    dispatch(updateCartbyIndex(products));
  };
  const handleIncrease = () => {
    const quantity =
      ref.current.value == "" ? 1 : parseInt(ref.current.value) + 1;
    const totalPrice = (parseInt(product.price.replace(/\./g, "")) * quantity)
      .toLocaleString("en-US")
      .replace(/,/g, ".");
    const products = { ...product, quantity, totalPrice };
    dispatch(updateCartbyIndex(products));
  };
  const handleDecrease = () => {
    const quantity =
      ref.current.value == "" ? 0 : parseInt(ref.current.value) - 1;

    const totalPrice = (parseInt(product.price.replace(/\./g, "")) * quantity)
      .toLocaleString("en-US")
      .replace(/,/g, ".");
    const products = { ...product, quantity, totalPrice };
    dispatch(updateCartbyIndex(products));
  };
  return (
    <div className="grid grid-cols-6 gap-4 text-center items-center text-xl">
      <img src={product.img1} alt="image" />
      <p className="font-medium">{product.name}</p>
      <p className="text-gray-400">{product.price} VND</p>
      <div className="flex justify-center gap-5 ">
        <button type="button" onClick={() => handleDecrease()}>
          -
        </button>
        <div>
          <input
            type="text"
            id="quantity"
            name="quantity"
            ref={ref}
            value={product.quantity}
            onChange={() => handleInputChange()}
            className="w-5 text-center"
          />
        </div>
        <button type="button" onClick={() => handleIncrease()}>
          +
        </button>
      </div>
      <p>{product.totalPrice} VND</p>
      <button type="button" onClick={() => dispatch(removeFromCart(product))}>
        🗑️
      </button>
    </div>
  );
}
