import axios from "axios";
import authHeader from "./auth-header";

const API_URL = "https://localhost:44393/";

class UserService {
  getPublicContent() {
    return axios.get(API_URL + "all");
  }

  getWeatherForecast() {
    return axios.get(API_URL + "weatherforecast", { headers: authHeader() });
  }

  getAllUsers() {
    return axios.get(API_URL + "api/users/userslist", {
      headers: authHeader(),
    });
  }
}
export default new UserService();
