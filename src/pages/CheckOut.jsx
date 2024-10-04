import ShopBanner from "../components/ShopPage/ShopBanner";
import CheckOutForm from "../components/CheckOut/CheckOutForm";
export default function CheckOut() {
  return (
    <div>
      <ShopBanner banner={"CHECKOUT"} />
      <CheckOutForm />
    </div>
  );
}
