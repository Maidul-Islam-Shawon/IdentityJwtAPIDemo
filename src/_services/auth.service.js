import axios from "axios";

const API_URL = "https://localhost:44393/api/auth/";

class AuthService {
  login(Email, Password) {
    return axios.post(API_URL + "login", { Email, Password }).then((res) => {
      if (res.data.isSuccess) {
        localStorage.setItem("user", JSON.stringify(res.data));
      }

      return res.data;
    });
  }

  logout() {
    localStorage.removeItem("user");
  }

  register(Email, Password, ConfirmPassword) {
    axios.post(API_URL + "register", { Email, Password, ConfirmPassword });
  }

  getCurrentUser() {
    return JSON.parse(localStorage.getItem("user"));
  }
}

export default new AuthService();
