import { useNavigate } from "react-router-dom";
import ProductItem from "../HomePage/ProductItem";
import { memo, useState } from "react";
const Desciption = ({ product, relatedProduct, id }) => {
  const [open, setOpen] = useState(false);
  const description = product.long_desc.split("\n•");
  const desciptionHeader = product.long_desc.split("\n•")[0];
  description.shift();
  const descriptionMain = description.map((des) => des);
  const navigate = useNavigate();
  // write code use navigate without infinite loop
  const handleNavigate = (product) => () => {
    console.log(product.name);
    navigate(`/detail?id=${product._id.$oid}`);
  };
  const handleOpen = () => {
    setOpen(!open);
  };
  return (
    <>
      <div className="container-md ms-5 w-1/2 italic">
        <button
          onClick={handleOpen}
          className="my-5 border border-solid border-neutral-700 bg-neutral-700 text-white py-3 px-3 hover:border-neutral-500 hover:bg-neutral-500 active:bg-neutral-700 active:border-neutral-700"
        >
          DESCRIPTION
        </button>
        {open && (
          <div>
            <h3 className="text-xl font-medium mb-5">PRODUCT DEESCRIPTION</h3>
            <div className="text-gray-500 text-md mb-10">
              <p>{desciptionHeader}</p>
              <p>
                {descriptionMain.map((des) => (
                  <li key={des}>{des}</li>
                ))}
              </p>
            </div>
            <div>
              <h3>RELATED PRODUCTS</h3>
              {!relatedProduct && <p>Loading...</p>}
              {relatedProduct && (
                <div className="w-[10] flex">
                  {relatedProduct.length <= 1 && (
                    <ProductItem
                      key={relatedProduct._id.$oid}
                      product={relatedProduct}
                      action={handleNavigate(relatedProduct)}
                    />
                  )}
                  {relatedProduct.length > 1 &&
                    relatedProduct.map((item) => (
                      <ProductItem
                        key={item._id.$oid}
                        product={item}
                        action={handleNavigate(item)}
                      />
                    ))}
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </>
  );
};
export default Desciption;
