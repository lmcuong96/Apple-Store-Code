import ShopBanner from "../components/ShopPage/ShopBanner";
import ShopProducts from "../components/ShopPage/ShopProduct";

export default function ShopPage() {
  return (
    <div>
      <ShopBanner banner={"SHOP"} />
      <ShopProducts />
    </div>
  );
}
