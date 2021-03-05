import { func } from "prop-types";

export default function authHeader() {
  const user = JSON.parse(localStorage.getItem("user"));

  if (user && user.message) {
    return { Authorization: "Bearer" + user.message };
  } else {
    return {};
  }
}
