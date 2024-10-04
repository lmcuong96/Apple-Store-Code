import MainNavigation from "../components/NavBar/MainNavigation";
import Footer from "../components/Footer/Footer";
import { Outlet } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addProduct } from "../redux-store/productList";
export default function RootPage() {
  const dispatch = useDispatch();

  useEffect(() => {
    async function getProducts() {
      const data = await fetch(
        "https://firebasestorage.googleapis.com/v0/b/funix-subtitle.appspot.com/o/Boutique_products.json?alt=media&token=dc67a5ea-e3e0-479e-9eaf-5e01bcd09c74"
      );

      const response = await data.json();
      const currencyFormat = (productPrice) => {
        const f = new Intl.NumberFormat("vie", {
          currency: "VND",
        });
        return f.format(productPrice);
      };
      const allProducts = response.map((product) => {
        const price = currencyFormat(product.price);
        return { ...product, price };
      });

      dispatch(addProduct(allProducts));
      //   if (!response.ok) {
      //     throw new Error({ message: "Could not load product" }, { status: 500 });
      //   }
      return response;
    }
    getProducts();
  }, []);
  return (
    <>
      <MainNavigation />
      <main className=" max-h-full">
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
