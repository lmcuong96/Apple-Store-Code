import {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {AddToCart, updateCartbyIndex} from "../../redux-store/cart";
import {useNavigate, useRouteLoaderData} from "react-router-dom";

// eslint-disable-next-line react/prop-types
export default function DetailWithForm({product}) {
    const [img, setImg] = useState();
    const data = useRouteLoaderData('root');
    console.log(data);

    const handleClick = (img) => () => {
        setImg(img);
    };
    const dispatch = useDispatch();
    const cartItems = useSelector((state) => state.cart.cartItems);
    const navigate = useNavigate();

    function addToCart(event) {
        event.preventDefault();
        if (!data) {
            navigate('/auth?mode=signUp')
        } else {
            const quantity =
                event.target.quantity.value == ""
                    ? 0
                    : parseInt(event.target.quantity.value);
            // eslint-disable-next-line react/prop-types
            const totalPrice = (parseInt(product.price.replace(/\./g, "")) * quantity)
                .toLocaleString("en-US")
                .replace(/,/g, ".");
            const products = {...product, quantity, totalPrice};
            const id = cartItems.some((item) => item._id.$oid === products._id.$oid);
            if (id) {
                dispatch(updateCartbyIndex(products));
            } else {
                dispatch(AddToCart(products));
            }
            alert("Add to cart successfully");
            navigate("/cart");
        }
    }

    return (
        <>
            {!product && <p>Loading...</p>}
            {product && (
                <div className="container-md flex ">
                    <div className="w-[10%]">
                        <ul>
                            <li
                                className="  hover:opacity-40"
                                onClick={handleClick(product.img1)}
                            >
                                <img src={product.img1} alt="img"/>
                            </li>
                            <li
                                className=" hover:opacity-40"
                                onClick={handleClick(product.img2)}
                            >
                                <img src={product.img2} alt="img"/>
                            </li>
                            <li
                                className="hover:opacity-40"
                                onClick={handleClick(product.img3)}
                            >
                                <img src={product.img3} alt="img"/>
                            </li>
                            <li
                                className=" hover:opacity-40"
                                onClick={handleClick(product.img4)}
                            >
                                <img src={product.img4} alt="img"/>
                            </li>
                        </ul>
                    </div>
                    <div className="w-1/2 mx-5 ">
                        <img src={img || product.img1} alt="img"/>
                    </div>
                    <div className="w-1/2">
                        <h2 className="text-5xl italic">{product.name}</h2>
                        <p className="text-gray-500 my-7 font-light text-2xl italic">
                            {product.price} VND
                        </p>
                        <p className="text-gray-500 my-5 font-light text-xl italic">
                            {product.short_desc}
                        </p>
                        <p className="text-gray-500 my-6 italic text-xl ">
                            <span className="font-bold">CATEGORY: </span>
                            {product.category}
                        </p>
                        <div>
                            <form action="submit" onSubmit={(e) => addToCart(e)}>
                                <input
                                    type="number"
                                    id="quantity"
                                    name="quantity"
                                    placeholder="QUANTITY"
                                    className="border border-solid border-gray-400 ps-2 py-2"
                                />
                                <button
                                    className="border border-solid border-neutral-700
                  bg-neutral-700 text-white py-2 px-3 hover:border-neutral-500
                  hover:bg-neutral-500 active:bg-neutral-700
                  active:border-neutral-700"
                                >
                                    {" "}
                                    Add to cart
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}
