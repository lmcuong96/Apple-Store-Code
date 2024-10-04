export default function CartTotal() {
  const products = JSON.parse(localStorage.getItem("cart"));

  //NOTE: chưa giải quyết dc tính tổng
  const totalPrice = products.map((product) =>
    parseInt(product.totalPrice.replace(/\./g, ""))
  );
  // console.log(totalPrice);
  let total = totalPrice
    .reduce((acc, curr) => acc + curr, 0)
    .toString()
    .replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  // console.log(total);
  return (
    <div className="bg-gray-100 my-3 h-80 w-96 container flex flex-wrap mr-4">
      <div className=" mx-5 container text-start italic">
        <h3 className="text-2xl font-medium mt-5">CART TOTAL</h3>
        <div className="leading-10 my-6 ">
          <p className=" font-medium items-center border-b-2 border-gray-300 flex justify-between">
            SUBTOTAL
            <span className=" text-sm text-gray-400 ">{total} VND</span>
          </p>
          <p className=" font-medium items-center border-b-2 border-gray-300 flex justify-between">
            TOTAL
            <span className=" text-xl text-gray-600 ">{total} VND</span>
          </p>
        </div>
        <form action="submit" className="flex flex-col">
          <input
            type="text"
            name="coupon"
            id="coupon"
            placeholder="Enter your coupon"
            className="border-solid border border-gray-400 py-3 px-10"
          />
          <button
            type="submit"
            className="border-solid border border-neutral-600 bg-neutral-600 text-white py-3 px-10"
          >
            🎁 Apply Coupon
          </button>
        </form>
      </div>
    </div>
  );
}
