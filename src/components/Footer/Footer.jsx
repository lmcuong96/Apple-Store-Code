import { Link } from "react-router-dom";
import { dummy } from "../../dummy-link";
export default function Footer() {
  const dummy1 = dummy[0].dummy;
  const dummy2 = dummy[1].dummy;
  const dummy3 = dummy[2].dummy;

  return (
    <footer className="container-xl bg-black text-white py-20">
      <div className=" w-4/5 m-auto">
        <ul className="flex justify-between italic">
          <div>
            <p className="text-xl mb-4">CUSTOMER SERVICES</p>
            {dummy1.map((item) => (
              <Link key={item.id} className="flex text-sm text-gray-500 pb-2">
                {item.name}
              </Link>
            ))}
          </div>
          <div>
            <p className="text-xl mb-4">COMPANY</p>
            {dummy2.map((item) => (
              <Link key={item.id} className="flex text-sm text-gray-500 pb-2">
                {item.name}
              </Link>
            ))}
          </div>
          <div>
            <p className="text-xl mb-4">SOCIAL MEDIA</p>
            {dummy3.map((item) => (
              <Link key={item.id} className="flex text-sm text-gray-500 pb-2">
                {item.name}
              </Link>
            ))}
          </div>
        </ul>
      </div>
    </footer>
  );
}
