import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate, useSearchParams } from "react-router-dom";
import ProductItem from "../HomePage/ProductItem";

export default function FilterProduct() {
  const productsList = useSelector((state) => state.product.products);
  const category = useSearchParams()[0].get("type");
  // console.log(category);
  const isSortedAsc = useSearchParams()[0].get("sort");

  const filteredProduct = productsList.filter(
    (product) => product.category === category
  );

  const allProducts =
    category === ("all" || "") ? productsList : filteredProduct;
  let sortedProducts = [...allProducts];
  if (isSortedAsc === "asc") {
    sortedProducts = [...allProducts].sort(
      (a, b) => a.price.replaceAll(".", "") - b.price.replaceAll(".", "")
    );
  } else if (isSortedAsc === "desc") {
    sortedProducts = [...allProducts].sort(
      (a, b) => b.price.replaceAll(".", "") - a.price.replaceAll(".", "")
    );
  } else {
    sortedProducts = [...allProducts];
  }

  useEffect(() => {
    AOS.init({
      duration: 2000,
    });
  }, []);

  const navigate = useNavigate();

  return (
    <div className="container-sm mx-6">
      <div className="flex flex-wrap justify-between " data-aos="fade-up">
        {allProducts.length === 0 && (
          <div className="ms-5">
            <p>Nothing found!</p>
          </div>
        )}

        {allProducts &&
          sortedProducts.map((product) => (
            <ProductItem
              key={product._id.$oid}
              product={product}
              action={(product) => navigate(`/detail?id=${product._id.$oid}`)}
            />
          ))}
      </div>
      <div className="">
        <div className="flex justify-end">
          <button className="border border-solid text-xs px-1">{"<<"}</button>
          <p className=" border-t border-b px-2 bg-black text-white">1</p>
          <button className="border border-solid text-xs px-1">{">>"}</button>
        </div>
        <p className="text-sm text-gray-400 flex justify-end mt-1 mb-2">
          Showing 1-9 of 9 results
        </p>
      </div>
    </div>
  );
}
