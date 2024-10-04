import { Form, useSearchParams, Link } from "react-router-dom";
import { images } from "../../dummy-link";
export default function AuthForm({}) {
  const [searchParams] = useSearchParams();
  const isSignIn = searchParams.get("mode") === "signUp";
  const image = images[0].img;
  const bgImage = {
    backgroundImage: `url(${image})`,
    backgroundPosition: "center",
    backgroundRepeat: "repeat",
    backgroundSize: "cover",
    width: "100vw",
    display: "flex",
  };
  return (
    <div style={bgImage} className=" flex flex-wrap">
      <div className="container text-center w-1/3  border rounded-xl shadow-xl bg-white mt-10 mb-40">
        <h1 className=" my-20 items-center flex justify-center text-3xl italic text-gray-600 font-light ">
          {isSignIn ? "Sign Up" : "Sign In"}
        </h1>
        <Form
          typeof="submit"
          method="post"
          className="flex flex-col items-center  justify-center "
        >
          <div className="container">
            {isSignIn && (
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Full Name"
                required
                className="border border-b-0 border-solid border-gray-400 py-6 w-3/5 ps-3"
              />
            )}
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Email"
              required
              className=" border border-solid border-b-0 border-gray-400 py-6 w-3/5 ps-3"
            />
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Password"
              required
              className=" border border-solid  border-gray-400 py-6 w-3/5 ps-3"
            />
            {isSignIn && (
              <input
                type="phone"
                name="phone"
                id="phone"
                placeholder="Phone"
                required
                className="border border-t-0 border-solid border-gray-400 py-6 w-3/5 ps-3"
              />
            )}
          </div>
          <div className="w-3/5">
            <button className="w-full border-none  bg-neutral-700 text-white py-5 mt-5 mb-10 hover:bg-neutral-500 active:bg-neutral-600 active:shadow-xl">
              {!isSignIn ? "SIGN IN" : "SIGN UP"}
            </button>
          </div>
          <div className="mb-10">
            {isSignIn && (
              <p className="italic  text-gray-400">
                Login?
                <Link
                  to={`?mode=signIn`}
                  className="text-blue-400 hover:underline hover:text-blue-600 active:text-blue-800 active:underline ms-1 active:not-italic hover:not-italic"
                >
                  Click
                </Link>
              </p>
            )}
            {!isSignIn && (
              <p className="italic  text-gray-400">
                Create an account?
                <Link
                  to={`?mode=signUp`}
                  className="text-blue-400 hover:underline hover:text-blue-600 active:text-blue-800 active:underline ms-1 active:not-italic hover:not-italic"
                >
                  Sign up
                </Link>
              </p>
            )}
          </div>
        </Form>
      </div>
    </div>
  );
}
