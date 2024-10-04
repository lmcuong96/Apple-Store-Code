import Desciption from "./Description";
import { useRouteLoaderData, useSearchParams } from "react-router-dom";
import DetailWithForm from "./DetaitWithForm";
import { useSelector } from "react-redux";
const DetailProduct = () => {
  const searchParams = useSearchParams()[0].get("id");
  const productList = useSelector((state) => state.product.products);
  const product = productList.find(
    (product) => product._id.$oid === searchParams
  );
  const relatedProduct = productList.filter(
    (products) => product.category == products.category
  );
  return (
    <>
      {!product && <p>Loading...</p>}
      {product && relatedProduct && (
        <div>
          <DetailWithForm product={product} />
          <Desciption
            product={product}
            relatedProduct={relatedProduct}
            id={searchParams}
          />
        </div>
      )}
    </>
  );
};
export default DetailProduct;
