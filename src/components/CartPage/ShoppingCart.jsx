import CartList from "./CartList";
import { Link } from "react-router-dom";
export default function ShoppingCart({}) {
  const products = JSON.parse(localStorage.getItem("cart"));

  return (
    <div className="italic w-3/4">
      <h1 className="text-xl my-5 ms-4">SHOPPING CART</h1>
      <div className="mx-4">
        <form action="submit">
          <div className="bg-gray-100  py-5 my-3 ">
            <div className="grid grid-cols-6 gap-4 text-center ms-2">
              <p>IMAGE</p>
              <p>PRODUCT</p>
              <p>PRICE</p>
              <p>QUANTITY</p>
              <p>TOTAL</p>
              <p>REMOVE</p>
            </div>
          </div>
          {products.map((product, index) => (
            <CartList key={product._id.$oid} product={product} index={index} />
          ))}
        </form>
        <div className=" bg-gray-100 py-6 my-5">
          <div className="flex justify-between items-center mx-2">
            <Link to="/shop/?type=all" className="hover:pointer-events-auto">
              <span className=" text-xl">← </span>Continues shopping
            </Link>
            <Link
              to="/checkout"
              className="border-solid border border-gray-400 py-3 px-2 font-light"
            >
              Proceed to checkout <span className=" text-xl"> →</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
