import { useRef } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
export default function FilterForm() {
  const ref = useRef();
  const navigate = useNavigate();
  const category = useSearchParams()[0].get("type");

  const handleChange = (e) => {
    e.preventDefault();

    if (e.target.value !== "default") {
      navigate(`?type=${category}&sort=${e.target.value}`);
    } else {
      navigate(`/shop?type=${category}`);
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`/shop?type=${ref.current.value}`);
    ref.current.value = "";
  };
  return (
    <div className="container-sm mx-10 my-2 " onSubmit={(e) => handleSubmit(e)}>
      <form className="flex justify-between">
        <input
          type="text"
          id="name"
          name="name"
          placeholder="Enter Search Hear!"
          ref={ref}
          className="border-solid border-gray-300 border ps-3 py-3 w-72"
        />
        <select
          name="sort"
          id="sort"
          onChange={(e) => handleChange(e)}
          className="w-40 border-solid border border-gray-400 h-7 rounded bg-gray-200"
        >
          <option value="default">Default Sorting</option>
          <option value="asc">ASC</option>
          <option value="desc">DESC</option>
        </select>
      </form>
    </div>
  );
}
