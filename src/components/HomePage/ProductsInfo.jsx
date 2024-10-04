export default function ProductsInfo() {
  return (
    <div className="my-12">
      <div className="bg-gray-100 flex justify-between w-full p-10 mb-10">
        <div className="italic text-center">
          <p className="text-xl">FREE SHIPPING</p>
          <p className="font-light text-gray-400">Free shipping worlwide</p>
        </div>
        <div className="italic text-center">
          <p className="text-xl">24 X 7 SERVICE</p>
          <p className="font-light text-gray-400">Free shipping worlwide</p>
        </div>
        <div className="italic text-center">
          <p className="text-xl">FESTIVAL OFFER</p>
          <p className="font-light text-gray-400">Free shipping worlwide</p>
        </div>
      </div>
      <div className="flex justify-between mx-4">
        <div className="italic text-left">
          <p className="text-xl">LET'S BE FRIENDS!</p>
          <p className="font-light text-gray-400">
            Nisi nisi tempor conseqat laboris nisi
          </p>
        </div>
        <div>
          <form action="submit">
            <input
              type="email"
              className="border-solid border border-gray-400 py-3 px-10 "
              placeholder="Enter your email address"
            />
            <button
              type="submit"
              className=" text-white border-solid border border-gray-600 bg-gray-600 py-3 px-5"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
