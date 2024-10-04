import { images } from "../../dummy-link";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
export default function ProductMenu() {
  useEffect(() => {
    AOS.init({
      duration: 2000,
    });
  });
  const imgArr1 = images.slice(1, 3);
  const imgArr2 = images.slice(3, 6);

  const navigate = useNavigate();
  return (
    <div className="container-sm my-6">
      <div className="text-center italic my-5">
        <p className=" text-gray-400  font-medium">
          CAREFULLY CREATED COLLECTIONS
        </p>
        <p className=" font-bold text-2xl">BROWSER OUR CATEGORIES</p>
      </div>
      <div className="container-sm mx-10">
        <div className=" flex  justify-between">
          {imgArr1.map((img) => (
            <div key={img.id}>
              <img
                src={img.img}
                alt="#img"
                className=" hover:opacity-50"
                onClick={() => navigate(`/shop?type=all`)}
              />
            </div>
          ))}
        </div>
        <div className=" flex justify-between my-5" data-aos="fade-up">
          {imgArr2.map((img) => (
            <div key={img.id}>
              <img
                src={img.img}
                alt="#img"
                className=" hover:opacity-50"
                onClick={() => navigate(`/shop?type=all`)}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
