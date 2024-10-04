import { createPortal } from "react-dom";
import { useSelector, useDispatch } from "react-redux";
import { closeModal } from "../../redux-store/showModal";
import ReactModal from "react-modal";
import classes from "./Modal.module.css";
import { useNavigate } from "react-router-dom";

const PopUp = () => {
  const isOpen = useSelector((state) => state.modal.isOpen);
  const product = useSelector((state) => state.modal.products);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleCloseModal = () => dispatch(closeModal());

  const modalContent = (
    <div>
      <ReactModal
        isOpen={isOpen}
        onRequestClose={handleCloseModal}
        className={`${classes.mymodal} animate-show-modal`}
        overlayClassName={classes.myoverlay}
      >
        <div className="flex justify-between">
          <div className="w-1/2">
            <img src={product.img1} alt="img" />
          </div>
          <div className="w-1/2 my-10">
            <h2 className="text-3xl">{product.name}</h2>
            <p className="text-gray-500 my-5 font-light text-2xl">
              {product.price}VND
            </p>
            <p className="text-gray-400 text-xl font-light">
              {product.short_desc}
            </p>
            <button
              onClick={() => navigate(`/detail?id=${product._id.$oid}`)}
              className=" text-white my-5 border-none bg-neutral-700 py-3 px-10"
            >
              <i
                className="fa-solid fa-cart-shopping"
                style={{ color: "#b4b7bb" }}
              />{" "}
              View Detail
            </button>
          </div>
          <div className={classes.closeButton}>
            <button onClick={handleCloseModal}>×</button>
          </div>
        </div>
      </ReactModal>
    </div>
  );
  return isOpen
    ? createPortal(modalContent, document.getElementById("popup"))
    : null;
};
export default PopUp;
