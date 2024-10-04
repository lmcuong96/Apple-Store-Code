import FilterForm from "./FilterForm";
import FilterProduct from "./FilterProduct";
import SideBar from "./SideBar";

export default function ShopProducts() {
  return (
    <div className="grid grid-cols-[200px_minmax(900px,_1fr)_100px] container-md mx-4 gap-4">
      <SideBar />
      <div>
        <FilterForm />
        <FilterProduct />
      </div>
    </div>
  );
}
