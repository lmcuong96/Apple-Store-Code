import { images } from "../../dummy-link";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
export default function Banner() {
  useEffect(() => {
    AOS.init({
      duration: 2000,
    });
  });
  const img = images[0].img;
  return (
    <div className=" relative">
      <div>
        <img src={img} alt="#banner" />
      </div>
      <div className=" absolute  top-1/3 left-10" data-aos="fade-down-left">
        <p className="font-thin italic text-gray-400">NEW INSPIRATION 2020</p>
        <p className="font-normal text-4xl ">20% OFF ON NEW SEASON</p>
        <div className="my-7">
          {" "}
          <Link
            to="shop?type=all"
            className="border-none ...  bg-neutral-700 text-white px-6 py-3 italic font-thin text-xl"
          >
            Browse collections
          </Link>
        </div>
      </div>
    </div>
  );
}
