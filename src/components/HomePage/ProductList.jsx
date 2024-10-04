import { useLoaderData } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { openModal } from "../../redux-store/showModal";

import ProductItem from "./ProductItem";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
export default function ProductList() {
  useEffect(() => {
    AOS.init({
      duration: 2000,
    });
  }, []);
  const products = useSelector((state) => state.product.products);
  const dispatch = useDispatch();
  return (
    <div className="container-sm mx-6">
      <div className="flex flex-wrap justify-between " data-aos="fade-up">
        {products &&
          products.map((product) => (
            <ProductItem
              key={product._id.$oid}
              product={product}
              action={(data) => dispatch(openModal(data))}
            />
          ))}
      </div>
    </div>
  );
}
