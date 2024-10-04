import { Link, NavLink, useLoaderData } from "react-router-dom";
export default function MainNavigation() {
  const isActive = ({ isActive }) =>
    isActive
      ? "text-yellow-500 border-b-2 border-solid border-yellow-500 pb-1 font-medium"
      : "";
  const data = useLoaderData();
  return (
    <nav className={` container-md flex text-xl relative m-4 `}>
      <ul className={` w-full flex justify-between  `}>
        <div className="flex">
          <li className=" pr-3 italic ">
            <NavLink to="/" className={isActive}>
              Home
            </NavLink>
          </li>
          <li className="italic">
            <NavLink to="shop/?type=all" className={isActive}>
              Shop
            </NavLink>
          </li>
        </div>
        <li>
          {" "}
          <Link to="/" className={`font-normal text-2xl italic`}>
            BOUTIQUE
          </Link>
        </li>
        <div className="flex">
          {data && (
            <li className="px-2 italic">
              <NavLink to="cart" className={isActive}>
                <i className="fa-solid fa-cart-shopping px-1 " />
                Cart
              </NavLink>
            </li>
          )}
          {!data && (
            <li className={`italic  `}>
              <NavLink to={`auth?mode=signUp`} className={isActive}>
                <i className={`fa-solid fa-user px-2 `} />
                Login
              </NavLink>
            </li>
          )}
          {data && (
            <li className={`italic  `}>
              <NavLink to={`auth?mode=signUp`} className={isActive}>
                <i className={`fa-solid fa-user px-2 `} />
                {data.name}
                {"▼  "}
                <span onClick={() => localStorage.removeItem("signin")}>
                  {"(logout)"}
                </span>
              </NavLink>
            </li>
          )}
        </div>
      </ul>
    </nav>
  );
}
