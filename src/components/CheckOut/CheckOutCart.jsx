import { useSelector } from "react-redux";

export default function CheckOutCart() {
  const products = useSelector((state) => state.cart.cartItems);
  const totalPrice = products.map((product) =>
    parseInt(product.totalPrice.replace(/\./g, ""))
  );
  // console.log(totalPrice);
  let total = totalPrice
    .reduce((acc, curr) => acc + curr, 0)
    .toString()
    .replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  return (
    <div className="grid col-span-2 h-1/3 my-1 ">
      <div className="bg-gray-100 px-8 py-9">
        <p className="text-xl  mb-5">YOUR ORDER</p>
        {products.map((product) => (
          <p
            key={product._id.$oid}
            className=" mb-3 flex justify-between border-b-2 pb-2 "
          >
            {product.name}
            <span className=" text-base text-gray-400">
              {product.price} VND x {product.quantity}
            </span>
          </p>
        ))}
        <p className="text-lg flex justify-between">
          TOTAL <span className=" font-light">{total} VND</span>
        </p>
      </div>
    </div>
  );
}
