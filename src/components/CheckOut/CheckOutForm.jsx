import CheckOutCart from "./CheckOutCart";

export default function CheckOutForm() {
  return (
    <div className=" container-sm  grid grid-cols-1  mx-4 italic">
      <h1 className="text-2xl">BILLING DETAILS</h1>
      <div className=" justify-between grid grid-cols-5 my-4 gap-5 ">
        <div className="col-span-3">
          <form action="submit" className="flex flex-col">
            <label className=" font-light  " htmlFor="fullname">
              FULL NAME:
            </label>
            <input
              className="border border-solid mb-3 border-gray-400 py-2 ps-1 "
              type="text"
              name="fullname"
              id="fullname"
              required
              placeholder="Enter Your Full Name Here!"
            />
            <label className=" font-light  " htmlFor="email">
              EMAIL:
            </label>
            <input
              className="border border-solid mb-3 border-gray-400 py-2 ps-1 "
              type="email"
              name="email"
              id="email"
              required
              placeholder="Enter Your Email Here!"
            />
            <label className=" font-light  " htmlFor="phone">
              PHONE NUMBER:
            </label>
            <input
              className="border border-solid mb-3 border-gray-400 py-2 ps-1 "
              type="phone"
              name="phone"
              id="phone"
              required
              placeholder="Enter Your Phone Number Here!"
            />
            <label className=" font-light  " htmlFor="address">
              ADDRESS:
            </label>
            <input
              className="border border-solid mb-3 border-gray-400 py-2 ps-1 "
              type="text"
              name="address"
              id="address"
              required
              placeholder="Enter Your Address Here!"
            />
            <button
              className=" bg-neutral-700 text-white border-none py-3 px-2 font-light my-3 w-1/3"
              type="submit"
            >
              Place order
            </button>
          </form>
        </div>
        <CheckOutCart />
      </div>
    </div>
  );
}
