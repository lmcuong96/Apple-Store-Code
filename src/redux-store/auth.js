import { redirect } from "react-router-dom";

export function getSignUp() {
  const userArr = JSON.parse(localStorage.getItem("signup"));
  return userArr;
}
export function getSignIn() {
  const user = JSON.parse(localStorage.getItem("signin"));
  return user;
}
export function loadSignIn() {
  return getSignIn();
}

export function checkAuth() {
  const user = getAuth();
  if (!user) {
    return redirect("/auth");
  }
}
