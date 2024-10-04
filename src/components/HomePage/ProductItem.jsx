import { useDispatch } from "react-redux";
import PopUp from "../Modal/Modal";
import { memo } from "react";
const ProductItem = ({ product, action }) => {
  return (
    <>
      <div className=" m-4 w-1/5 ">
        <div className="hover:opacity-50 " onClick={() => action(product)}>
          <img src={product.img1} alt="img" />
        </div>
        <div className="text-center italic">
          <p>{product.name}</p>
          <p className="text-gray-400  font-light">{product.price} VND</p>
        </div>
      </div>
      <PopUp />
    </>
  );
};
export default ProductItem;
