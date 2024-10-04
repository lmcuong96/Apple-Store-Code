import {
  NavLink,
  redirect,
  useNavigate,
  useSearchParams,
} from "react-router-dom";

export default function SideBar() {
  const categories = useSearchParams()[0].get("type");
  const isActive = (category) =>
    categories === category ? "text-yellow-500" : "";

  return (
    <div className="italic">
      <h1 className="text-xl font-medium py-3">CATEGORIES</h1>
      <div>
        <ul>
          <li className="border-none bg-black text-white py-2 ps-3">APLLE</li>
          <li className="py-2 ps-3 text-gray-400">
            <NavLink to="?type=all" className={() => isActive("all")}>
              All
            </NavLink>
          </li>
          <li className="py-2 ps-3 font-semibold bg-gray-200">IPHONE & MAC</li>
          <li className="py-2 ps-3 text-gray-400">
            <NavLink to="?type=iphone" className={() => isActive("iphone")}>
              Iphone
            </NavLink>
          </li>
          <li className="py-2 ps-3 text-gray-400">
            <NavLink to="?type=ipad" className={() => isActive("ipad")}>
              Ipad
            </NavLink>
          </li>
          <li className="py-2 ps-3 text-gray-400">
            <NavLink to="?type=macbook" className={() => isActive("macbook")}>
              Macbook
            </NavLink>
          </li>
          <li className="py-2 ps-3 font-semibold bg-gray-200">WIRELESS</li>
          <li className="py-2 ps-3 text-gray-400">
            <NavLink to="?type=airpod" className={() => isActive("airpod")}>
              Airpod
            </NavLink>
          </li>
          <li className="py-2 ps-3 text-gray-400">
            <NavLink to="?type=watch" className={() => isActive("watch")}>
              Watch
            </NavLink>
          </li>
          <li className="py-2 ps-3 font-semibold bg-gray-200">OTHER</li>
          <li className="py-2 ps-3 text-gray-400">
            <NavLink to="?type=mouse" className={() => isActive("mouse")}>
              Mouse
            </NavLink>
          </li>
          <li className="py-2 ps-3 text-gray-400">
            <NavLink to="?type=keyboard" className={() => isActive("keyboard")}>
              Keybroad
            </NavLink>
          </li>
          <li className="py-2 ps-3 text-gray-400">
            <NavLink to="?type=other" className={() => isActive("other")}>
              Other
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
}
