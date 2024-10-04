import { redirect } from "react-router-dom";
import AuthForm from "../components/Authentication/AuthForm";
import { getSignUp } from "../redux-store/auth";
export default function Auth() {
  return <AuthForm />;
}
export async function action({ request }) {
  const searchParams = new URL(request.url).searchParams;
  const mode = searchParams.get("mode") || "signUp";

  const data = await request.formData();
  const authData = {
    email: data.get("email"),
    password: data.get("password"),
    name: data.get("name"),
    phone: data.get("phone"),
  };

  const localUser = getSignUp();
  if (mode === "signUp") {
    if (localUser === null) {
      if (
        authData.email === "" ||
        authData.password === "" ||
        authData.name === "" ||
        authData.phone === ""
      ) {
        alert("Please enter a valid input");
      } else if (authData.password.length < 9) {
        alert("Password must have more than 8 characters");
      } else {
        localStorage.setItem("signup", JSON.stringify([authData]));
        alert("Success");
      }
    } else {
      const userArr = [...localUser, authData];
      const invalidEmail = localUser.find(
        (data) => data.email === authData.email
      );
      if (invalidEmail) {
        alert("Email already exists");
      } else if (authData.password.length < 9) {
        alert("Password must have more than 8 characters");
      } else {
        localStorage.setItem("signup", JSON.stringify(userArr));
        alert("Success");
        return redirect("?mode=signIn");
      }
    }
  } else {
    if (localUser === null) {
      alert("Please login");
    } else {
      const validEmail = localUser.find(
        (data) => data.email === authData.email
      );
      if (validEmail) {
        localStorage.setItem("signin", JSON.stringify(validEmail));
        alert("Success");
        return redirect("/");
      } else {
        alert("Email not found");
      }
    }
  }

  return authData;
}
