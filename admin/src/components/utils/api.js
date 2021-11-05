import axios from "axios";

const BASE_URL = "http://localhost:5000/api/v1";

let TOKEN;

const persistRoot = JSON.parse(localStorage.getItem("persist:root"));

if (persistRoot !== null) {
  const user = JSON.parse(persistRoot.user);
  if (user.currentUser !== null) {
    TOKEN = user.currentUser.accessToken;
  }
} else {
  TOKEN = "";
}
export const request = axios.create({
  baseURL: BASE_URL,
  headers: { Authorization: `Bearer ${TOKEN}` },
});
