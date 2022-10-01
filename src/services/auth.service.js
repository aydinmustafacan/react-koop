import axios from "axios";
import authHeader from "./auth-header";

const API_URL = "http://localhost:8080/api/auth/";

class AuthService {
  login(username, password) {
    return axios
      .post(API_URL + "signin", { username, password })
      .then((response) => {
        if (response.data.accessToken) {
          localStorage.setItem("user", JSON.stringify(response.data));
        }

        return response.data;
      });
  }

  logout() {
    localStorage.removeItem("user");
  }

  sendMessage(topic, body) {
    return axios.post("http://localhost:8080/api/messaging/admin" , {
      topic,
      body,
    },{headers:authHeader()});
  }

  sendMessageToAUser(topic, body, username) {
    return axios.post(`http://localhost:8080/api/messaging/${username}` , {
      topic,
      body,
    },{headers:authHeader()});
  }

  addNewUserRequest(email) {
    return axios.post("http://localhost:8080/api/userRequest/addNewUserRequest" , {
      email
    },{headers:authHeader()});
  }

  getAllMessages(topic, body) {
    return axios.get("http://localhost:8080/api/messageController/getAllMessages" , {headers:authHeader()});
  }


  register(username, email, password) {
    return axios.post(API_URL + "signup", {
      username,
      email,
      password,
    },{headers:authHeader()});
  }
}

export default new AuthService();
