import Banner from "../components/HomePage/Banner";
import ProductList from "../components/HomePage/ProductList";
import ProductMenu from "../components/HomePage/ProductMenu";
import ProductsInfo from "../components/HomePage/ProductsInfo";
import Layout from "../components/Layout/Layout";
export default function HomePage() {
  return (
    <Layout>
      <Banner />
      <ProductMenu />
      <div className="">
        <div className="italic flex flex-col text-left ms-10">
          <p className="text-gray-400  font-light text-lg ">
            MADE THE HARD WAY
          </p>
          <p className="text-2xl">TOP TRENDING PRODUCTS</p>
        </div>
      </div>
      <ProductList />
      <ProductsInfo />
    </Layout>
  );
}
